/** @jsx preact.h */
import preact from '../../play.pokemonshowdown.com/js/lib/preact';
import $ from 'jquery';
import { Net } from './utils';
import { PSRouter, PSReplays } from './replays';
import { Battle } from '../../play.pokemonshowdown.com/src/battle';
import { BattleLog } from '../../play.pokemonshowdown.com/src/battle-log';
import { BattleSound } from '../../play.pokemonshowdown.com/src/battle-sound';
import type { ID } from '../../play.pokemonshowdown.com/src/battle-dex';
declare function toID(input: string): string;

function showAd(id: string) {
	// @ts-expect-error no clue how to declare this one
	window.top.__vm_add = window.top.__vm_add || [];

	// this is a x-browser way to make sure content has loaded.

	(success => {
		if (window.document.readyState !== "loading") {
			success();
		} else {
			window.document.addEventListener("DOMContentLoaded", () => {
				success();
			});
		}
	})(() => {
		const placement = document.createElement("div");
		placement.setAttribute("class", "vm-placement");
		if (window.innerWidth > 1000) {
			// load desktop placement
			placement.setAttribute("data-id", "6452680c0b35755a3f09b59b");
		} else {
			// load mobile placement
			placement.setAttribute("data-id", "645268557bc7b571c2f06f62");
		}
		document.querySelector("#" + id)!.appendChild(placement);
		// @ts-expect-error no clue how to declare this one
		window.top.__vm_add.push(placement);
	});
}

export class BattleDiv extends preact.Component {
	override shouldComponentUpdate() {
		return false;
	}
	override render() {
		return <div class="battle" style={{ position: 'relative' }}></div>;
	}
}
class BattleLogDiv extends preact.Component {
	override shouldComponentUpdate() {
		return false;
	}
	override render() {
		return <div class="battle-log"></div>;
	}
}

export class BattlePanel extends preact.Component<{ id: string, user: PSReplays['user'] }> {
	result: {
		uploadtime: number,
		id: string,
		format: string,
		players: string[],
		log: string,
		views: number,
		rating: number,
		private: number,
		password: string | null,
	} | null | undefined = undefined;
	resultError = '';
	privacySaving: number | null = null;
	manageError = '';
	manageOpen = false;
	battle!: Battle | null;
	/** debug purposes */
	lastUsedKeyCode = '0';
	turnView: boolean | string = false;
	autofocusTurnView: 'select' | 'end' | null = null;
	override componentDidMount() {
		this.loadBattle(this.props.id);
		showAd('LeaderboardBTF');
		window.onkeydown = this.keyPressed;
	}
	override componentWillReceiveProps(nextProps: this['props']) {
		if (this.stripQuery(this.props.id) !== this.stripQuery(nextProps.id)) {
			if (this.replayID(this.props.id) !== this.replayID(nextProps.id)) {
				this.manageOpen = false;
			}
			this.loadBattle(nextProps.id);
		}
	}
	stripQuery(id: string) {
		return id.includes('?') ? id.slice(0, id.indexOf('?')) : id;
	}
	replayID(id: string) {
		const fullid = this.stripQuery(id);
		if (!fullid.endsWith('pw')) return fullid;
		const passwordIndex = fullid.lastIndexOf('-');
		return passwordIndex > 0 ? fullid.slice(0, passwordIndex) : fullid;
	}
	loadBattle(id: string) {
		if (this.battle) this.battle.destroy();
		this.battle = null;
		this.result = undefined;
		this.resultError = '';
		this.privacySaving = null;
		this.manageError = '';
		this.forceUpdate();

		const elem = document.getElementById(`replaydata-${id}`);
		const logElem = document.getElementById(`replaylog-${id}`);
		if (elem) {
			// we actually do need to wait for that update to finish so
			// loadResult definitely has access to $frame and $logFrame
			setTimeout(() => this.loadResult(elem.innerText, id, logElem?.innerText.replace(/<\\\//g, '</')), 1);
			return;
		}

		Net(`/${this.stripQuery(id)}.json?countview`).get().then(result => {
			this.loadResult(result, id);
		}).catch(err => {
			this.loadResult(err.statusCode === 404 ? '' : String(err?.body || ''), id);
		});
	}
	loadResult(result: string, id: string, log = '') {
		try {
			const replay: NonNullable<BattlePanel['result']> = JSON.parse(result);
			replay.log ||= log;
			this.result = replay;
			const $base = $(this.base!);
			this.battle = new Battle({
				id: replay.id as ID,
				$frame: $base.find('.battle'),
				$logFrame: $base.find('.battle-log'),
				log: replay.log.split('\n'),
				isReplay: true,
				paused: true,
				autoresize: true,
			});
			// for ease of debugging
			(window as any).battle = this.battle;
			this.battle.subscribe(_ => {
				this.forceUpdate();
			});
			const query = Net.decodeQuery(id);
			if ('p2' in query) {
				this.battle.switchViewpoint();
			}
			if (query.turn || query.t) {
				this.battle.seekTurn(parseInt(query.turn || query.t, 10));
			}
		} catch (err: any) {
			this.result = null;
			this.resultError = result.startsWith('{') ? err.toString() : result;
		}
		this.forceUpdate();
	}
	override componentWillUnmount(): void {
		this.battle?.destroy();
		(window as any).battle = null;
		window.onkeydown = null;
	}
	override componentDidUpdate(): void {
		if (this.autofocusTurnView === 'select') {
			this.base?.querySelector<HTMLInputElement>('input[name=turn]')?.select();
			this.autofocusTurnView = null;
		}
		if (this.autofocusTurnView === 'end') {
			const turnbox = this.base?.querySelector<HTMLInputElement>('input[name=turn]');
			turnbox?.setSelectionRange(2, 2);
			turnbox?.focus();
			this.autofocusTurnView = null;
		}
	}
	keyPressed = (e: KeyboardEvent) => {
		this.lastUsedKeyCode = `${e.keyCode}`;
		if (e.ctrlKey || e.metaKey || e.altKey) return;
		if (e.keyCode === 27 && this.turnView) { // Esc
			this.closeTurn();
			return;
		}
		// @ts-expect-error really wish they let me assert that the target is an HTMLElement
		if (e.target?.tagName === 'INPUT' || e.target?.tagName === 'SELECT') return;
		switch (e.keyCode) {
		case 75: // k
			if (this.battle?.atQueueEnd) {
				this.replay();
			} else if (this.battle?.paused) {
				this.play();
			} else {
				this.pause();
			}
			break;
		case 74: // j
			if (e.shiftKey) this.firstTurn();
			else this.prevTurn();
			break;
		case 76: // l
			if (e.shiftKey) this.lastTurn();
			else this.nextTurn();
			break;
		case 188: // , (<)
			if (e.shiftKey) this.stepSpeed(-1);
			break;
		case 190: // . (>)
			if (e.shiftKey) this.stepSpeed(1);
			break;
		case 191: // / (?)
			if (e.shiftKey) {
				alert(
					'k = reproducir/pausa\n' +
					'j = turno anterior\n' +
					'l = turno siguiente\n' +
					'J = primer turno\n' +
					'L = último turno\n' +
					'm = silenciar\n' +
					'< = más lento\n' +
					'> = más rápido\n' +
					'1-9 = ir a un turno\n' +
					'? = atajos de teclado (esto)\n'
				);
			}
			break;
		case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 0-9
		case 96: case 97: case 98: case 99: case 100: case 101: case 102: case 103: case 104: case 105: // numpad 0-9
			this.turnView = String.fromCharCode(e.keyCode - (e.keyCode >= 96 ? 48 : 0));
			if (this.turnView === '0') this.turnView = '10';
			this.autofocusTurnView = 'end';
			e.preventDefault();
			this.forceUpdate();
			break;
		case 77: // m
			this.toggleMute();
			break;
		}
		this.forceUpdate();
	};
	play = () => {
		this.battle?.play();
	};
	replay = () => {
		this.battle?.reset();
		this.battle?.play();
		this.forceUpdate();
	};
	pause = () => {
		this.battle?.pause();
	};
	nextTurn = () => {
		this.battle?.seekBy(1);
	};
	prevTurn = () => {
		this.battle?.seekBy(-1);
	};
	firstTurn = () => {
		this.battle?.seekTurn(0);
		this.forceUpdate();
	};
	lastTurn = () => {
		this.battle?.seekTurn(Infinity);
	};
	goToTurn = (e: Event) => {
		const turn = this.base?.querySelector<HTMLInputElement>('input[name=turn]')?.value;
		if (!turn?.trim()) return this.closeTurn(e);
		let turnNum = Number(turn);
		if (turn === 'e' || turn === 'end' || turn === 'f' || turn === 'finish') turnNum = Infinity;
		if (isNaN(turnNum) || turnNum < 0) alert("Turno no válido");
		this.battle?.seekTurn(turnNum);
		this.closeTurn(e);
	};
	switchViewpoint = () => {
		this.battle?.switchViewpoint();
		if (this.battle?.viewpointSwitched) {
			PSRouter.replace(this.stripQuery(this.props.id) + '?p2');
		} else {
			PSRouter.replace(this.stripQuery(this.props.id));
		}
	};
	clickDownload = (e: MouseEvent) => {
		if (!this.battle) {
			// should never happen
			alert("Espera a que cargue el combate antes de descargarlo.");
			return;
		}
		let filename = (this.battle.tier || 'Battle').replace(/[^A-Za-z0-9]/g, '');

		// ladies and gentlemen, JavaScript dates
		const timestamp = (this.result?.uploadtime || 0) * 1000;
		const date = new Date(timestamp);
		filename += `-${date.getFullYear()}`;
		filename += `${date.getMonth() >= 9 ? '-' : '-0'}${date.getMonth() + 1}`;
		filename += `${date.getDate() >= 10 ? '-' : '-0'}${date.getDate()}`;

		filename += '-' + toID(this.battle.p1.name);
		filename += '-' + toID(this.battle.p2.name);

		const a = e.currentTarget as HTMLAnchorElement;
		a.href = BattleLog.createReplayFileHref({ battle: this.battle });
		a.download = filename + '.html';

		e.stopPropagation();
	};
	getSpeed() {
		if (!this.battle) return 'normal';
		if (this.battle.messageFadeTime <= 40) {
			return 'hyperfast';
		} else if (this.battle.messageFadeTime <= 50) {
			return 'fast';
		} else if (this.battle.messageFadeTime >= 500) {
			return 'slow';
		} else if (this.battle.messageFadeTime >= 1000) {
			return 'reallyslow';
		}
		return 'normal';
	}
	changeSpeed = (e: Event | { target: HTMLSelectElement }) => {
		const speed = (e.target as HTMLSelectElement).value;
		const fadeTable = {
			hyperfast: 40,
			fast: 50,
			normal: 300,
			slow: 500,
			reallyslow: 1000,
		};
		const delayTable = {
			hyperfast: 1,
			fast: 1,
			normal: 1,
			slow: 1000,
			reallyslow: 3000,
		};
		if (!this.battle) return;
		this.battle.messageShownTime = delayTable[speed as 'fast'];
		this.battle.messageFadeTime = fadeTable[speed as 'fast'];
		this.battle.scene.updateAcceleration();
	};
	stepSpeed(delta: number) {
		const target = this.base?.querySelector<HTMLSelectElement>('select[name=speed]');
		if (!target) return; // should never happen
		const values = ['reallyslow', 'slow', 'normal', 'fast', 'hyperfast'];
		const newValue = values[values.indexOf(target.value) + delta];
		if (newValue) {
			target.value = newValue;
			this.changeSpeed({ target });
		}
	}
	toggleMute() {
		this.battle?.setMute(!BattleSound.muted);
		this.forceUpdate();
	}
	changeSound = (e: Event) => {
		const muted = (e.target as HTMLSelectElement).value;
		this.battle?.setMute(muted === 'off');
		// Wolfram Alpha says that default volume is 100 e^(-(2 log^2(2))/log(10)) which is around 65.881
		BattleSound.setBgmVolume(muted === 'musicoff' ? 0 : 65.88125800126558);
		this.forceUpdate();
	};
	changeVolume = (e: Event) => {
		const volume = Number((e.target as HTMLSelectElement).value);
		BattleSound.setBgmVolume(volume);
		BattleSound.setEffectVolume(volume);
		this.battle?.setMute(true);
		this.battle?.setMute(false);
		this.forceUpdate();
	};
	changeDarkMode = (e: Event) => {
		const darkmode = (e.target as HTMLSelectElement).value as 'dark';
		PSReplays.darkMode = darkmode;
		PSReplays.updateDarkMode();
		this.forceUpdate();
	};
	openTurn = (e: Event) => {
		this.turnView = `${this.battle?.turn || ''}` || true;
		this.autofocusTurnView = 'select';
		e.preventDefault();
		this.forceUpdate();
	};
	closeTurn = (e?: Event) => {
		this.turnView = false;
		e?.preventDefault();
		this.forceUpdate();
	};
	manageURL(extension: 'json' | 'log' | 'inputlog') {
		return `${Net.defaultRoute}/${this.stripQuery(this.props.id)}.${extension}?manage`;
	}
	toggleManage = () => {
		this.manageOpen = !this.manageOpen;
		this.forceUpdate();
	};
	currentPrivacy() {
		if (!this.result) return 0;
		if (this.result.private === 1 && !this.result.password) return 2;
		return this.result.private;
	}
	shareURL() {
		if (!this.result) return '';
		const fullid = this.result.id + (this.result.password ? `-${this.result.password}pw` : '');
		// psim.us only shortens links to the main replay site
		if (!Net.defaultRoute && location.host !== 'replay.pokemonshowdown.com') return `https://${location.host}/${fullid}`;
		return `https://psim.us/r/${fullid}`;
	}
	selectShareURL = (e: Event) => {
		(e.currentTarget as HTMLInputElement).select();
	};
	changePrivacy = (e: Event) => {
		const privateValue = Number((e.target as HTMLSelectElement).value);
		if (!this.result || this.privacySaving !== null) return;
		if (privateValue === 3 && !confirm("¿Borrar esta repetición?")) return;

		const replay = this.result;
		this.privacySaving = privateValue;
		this.manageError = '';
		this.forceUpdate();

		Net(`/api/replays/edit`).post({}, {
			id: replay.id,
			private: privateValue,
		}).then(resultText => {
			if (resultText.startsWith(']')) resultText = resultText.slice(1);
			const result = JSON.parse(resultText);
			if (result.actionerror) throw new Error(result.actionerror);
			if (this.result !== replay) return;

			replay.private = privateValue;
			replay.password = result.password || null;
			this.privacySaving = null;

			const fullid = replay.id + (replay.password ? `-${replay.password}pw` : '');
			PSRouter.replace(fullid);
			PSRouter.update();
		}).catch(error => {
			if (this.result !== replay) return;
			this.privacySaving = null;
			this.manageError = error instanceof Error ? error.message : String(error);
			this.forceUpdate();
		});
	};
	renderManagement() {
		if (!this.manageOpen) return null;
		if (!this.props.user?.isLeader) {
			return <p class="section message-error">No tienes permiso para gestionar esta repetición.</p>;
		}
		const privacy = this.currentPrivacy();
		return <section class="section" style={{ clear: 'right', marginTop: '12px', marginRight: '0', maxWidth: '500px' }}>
			<button type="button" class="button" style="float:right" onClick={this.toggleManage}>
				<i class="fa fa-times"></i> Cerrar
			</button>
			<h2 style="margin-top:0">Gestionar repetición</h2>
			<p>
				Privacidad: {}
				<button class="button button-first" disabled={privacy === 0} value={0} onClick={this.changePrivacy}>
					Pública
				</button>
				<button class="button button-middle" disabled={privacy === 1} value={1} onClick={this.changePrivacy}>
					Privada
				</button>
				<button class="button button-middle" disabled={privacy === 2} value={2} onClick={this.changePrivacy}>
					Privada (sin contraseña)
				</button>
				<button class="button button-last" disabled={privacy === 3} value={3} onClick={this.changePrivacy}>
					Borrada
				</button> {}
				{this.privacySaving !== null && <em class="button cur">Guardando...</em>}
			</p>
			{this.manageError && <p class="message-error">{this.manageError}</p>}
			<p>
				<a class="button" href={this.manageURL('json')}>JSON</a> {}
				<a class="button" href={this.manageURL('log')}>Log</a> {}
				<a class="button" href={this.manageURL('inputlog')}>Input log</a>
			</p>
		</section>;
	}
	renderError() {
		if (this.resultError) {
			return <div class={PSRouter.showingLeft() ? 'mainbar has-sidebar' : 'mainbar'}>
				<section class="section">
					<h1>Error</h1>
					<p>
						{this.resultError}
					</p>
				</section>
			</div>;
		}

		// In theory, this should almost never happen, because Replays will
		// never link to a nonexistent replay, but this might happen if e.g.
		// a replay gets deleted or made private after you searched for it
		// but before you clicked it.
		return <div class={PSRouter.showingLeft() ? 'mainbar has-sidebar' : 'mainbar'}>
			<section class="section" style={{ maxWidth: '200px' }}>
				<div style={{ textAlign: 'center' }}>
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-n.gif" alt="" style={{ imageRendering: 'pixelated' }} />
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-o.gif" alt="" style={{ imageRendering: 'pixelated' }} />
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-t.gif" alt="" style={{ imageRendering: 'pixelated' }} />
				</div>
				<div style={{ textAlign: 'center' }}>
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-f.gif" alt="" style={{ imageRendering: 'pixelated' }} />
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-o.gif" alt="" style={{ imageRendering: 'pixelated' }} />
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-u.gif" alt="" style={{ imageRendering: 'pixelated' }} />
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-n.gif" alt="" style={{ imageRendering: 'pixelated' }} />
					<img src="//play.pokemonshowdown.com/sprites/gen5ani/unown-d.gif" alt="" style={{ imageRendering: 'pixelated' }} />
				</div>
			</section><section class="section">
				<h1>No encontrada</h1>
				<p>
					El combate que buscas ha caducado. Los combates caducan tras 15 minutos de inactividad si no se guardan.
				</p>
				<p>
					La próxima vez, pulsa <strong>Subir y compartir la repetición</strong> para guardarla para siempre.
				</p>
			</section>
		</div>;
	}
	renderControls() {
		const atEnd = !this.battle || this.battle.atQueueEnd;
		const atStart = !this.battle?.started;

		if (this.turnView) {
			const value = this.turnView === true ? undefined : this.turnView;
			this.turnView = true;
			return <div class="replay-controls"><section class="section">
				<form onSubmit={this.goToTurn}>
					¿Turno? <input name="turn" autofocus value={value} inputMode="numeric" class="textbox" size={5} /> {}
					<button type="submit" class="button"><strong>Ir</strong></button> {}
					<button type="button" class="button" onClick={this.closeTurn}>Cancelar</button>
				</form>
				<p>
					<em>Consejo:</em> con teclado no hace falta pulsar «Ir al turno»: escribe el número del turno
					y pulsa <kbd>Enter</kbd>. Para ver más atajos, pulsa <kbd>Shift</kbd>+<kbd>/</kbd> {}
					fuera de una caja de texto.
				</p>
			</section></div>;
		}

		return <div class="replay-controls">
			<p>
				{atEnd && this.battle ? (
					<button onClick={this.replay} class="button" style={{ width: '5em', marginRight: '3px' }}>
						<i class="fa fa-undo" aria-hidden></i><br />Repetir
					</button>
				) : !this.battle || this.battle.paused ? (
					<button onClick={this.play} class="button" disabled={!this.battle} style={{ width: '5em', marginRight: '3px' }}>
						<i class="fa fa-play" aria-hidden></i><br /><strong>Reproducir</strong>
					</button>
				) : (
					<button onClick={this.pause} class="button" style={{ width: '5em', marginRight: '3px' }}>
						<i class="fa fa-pause" aria-hidden></i><br /><strong>Pausa</strong>
					</button>
				)} {}
				<button class="button button-first" disabled={atStart} onClick={this.firstTurn}>
					<i class="fa fa-fast-backward" aria-hidden></i><br />Primer turno
				</button>
				<button
					class="button button-first" disabled={atStart} style={{ marginLeft: '1px', position: 'relative', zIndex: '1' }}
					onClick={this.prevTurn}
				>
					<i class="fa fa-step-backward" aria-hidden></i><br />Turno anterior
				</button>
				<button class="button button-last" disabled={atEnd} style={{ marginRight: '2px' }} onClick={this.nextTurn}>
					<i class="fa fa-step-forward" aria-hidden></i><br />Turno siguiente
				</button>
				<button class="button button-last" disabled={atEnd} onClick={this.lastTurn}>
					<i class="fa fa-fast-forward" aria-hidden></i><br />Ir al final
				</button> {}
				<button class="button" onClick={this.openTurn}>
					<i class="fa fa-repeat" aria-hidden></i> Ir al turno...
				</button>
			</p>
			<p>
				<label class="optgroup">
					Velocidad:<br />
					<select name="speed" class="button" onChange={this.changeSpeed} value={this.getSpeed()}>
						<option value="hyperfast">Hiperrápida</option>
						<option value="fast">Rápida</option>
						<option value="normal">Normal</option>
						<option value="slow">Lenta</option>
						<option value="reallyslow">Muy lenta</option>
					</select>
				</label> {}
				<label class="optgroup">
					Sonido:<br />
					<select
						name="sound" class="button" onChange={this.changeSound}
						value={BattleSound.muted ? 'off' : BattleSound.bgmVolume ? 'on' : 'musicoff'}
					>
						<option value="on">Activado</option>
						<option value="musicoff">Sin música</option>
						<option value="off">Silenciado</option>
					</select>
				</label> {}
				<label class="optgroup">
					Modo oscuro:<br />
					<select name="darkmode" class="button" onChange={this.changeDarkMode} value={PSReplays.darkMode}>
						<option value="auto">Automático</option>
						<option value="dark">Oscuro</option>
						<option value="light">Claro</option>
					</select>
				</label> {}
				<label class="optgroup">
					Perspectiva:<br />
					<button onClick={this.switchViewpoint} name="viewpoint" class={this.battle ? 'button' : 'button disabled'}>
						{(this.battle?.viewpointSwitched ? this.result?.players[1] : this.result?.players[0] || "Jugador")} {}
						<i class="fa fa-random" aria-hidden aria-label="Cambiar de perspectiva"></i>
					</button>
				</label> {}
				<label class="optgroup">
					Volumen:<br />
					<input type="range" onInput={this.changeVolume} />
				</label>
			</p>
			{this.result ? <h1>
				<strong>{this.result.format}</strong>: {}
				{!!this.result.private && <i class="fa fa-lock" aria-hidden></i>} {this.result.players.join(' vs. ')}
			</h1> : <h1>
				<em>Cargando...</em>
			</h1>}
			{!!this.result?.private && <p>
				<strong><i class="fa fa-lock" aria-hidden></i> PRIVADA</strong> - asegúrate de tener permiso de su dueño para compartirla
			</p>}
			<p>
				<label>
					Enlace: <input
						name="shareurl" type="text" class="textbox" readOnly size={60}
						style="max-width:99%;box-sizing:border-box;field-sizing:content;padding-right:20px"
						value={this.shareURL()} onFocus={this.selectShareURL}
					/>
				</label>
			</p>
			{this.result ? <p>
				<span style={{ float: 'right' }}>
					{this.props.user?.isLeader && <button
						type="button" class={`button${this.manageOpen ? ' cur' : ''}`} onClick={this.toggleManage}
					>
						<i class="fa fa-wrench" aria-hidden></i> Gestionar
					</button>} {}
					<a class="button" href="/download" onClick={this.clickDownload}>
						<i class="fa fa-download" aria-hidden></i> Descargar
					</a>
				</span>
				{this.result.uploadtime ? new Date(this.result.uploadtime * 1000).toLocaleDateString('es', {
					day: 'numeric', month: 'long', year: 'numeric',
				}) : "Fecha de subida desconocida"}
				{this.result.rating ? [` | `, <em>Puntuación:</em>, ` ${this.result.rating}`] : ''}
				{/* {} <code>{this.keyCode}</code> */}
			</p> : <p>&nbsp;</p>}
			{this.renderManagement()}
			{!PSRouter.showingLeft() && <p>
				<a href={PSRouter.href(PSRouter.leftLoc)} class="button"><i class="fa fa-caret-left" aria-hidden></i> Más repeticiones</a>
			</p>}
		</div>;
	}
	override render() {
		if (this.result === null) return this.renderError();

		return <div class={PSRouter.showingLeft() ? 'mainbar has-sidebar' : 'mainbar'}>
			<div style={{ position: 'relative' }}>
				<BattleDiv />
				<BattleLogDiv />
				{this.renderControls()}
				<div id="LeaderboardBTF"></div>
			</div>
		</div>;
	}
}
