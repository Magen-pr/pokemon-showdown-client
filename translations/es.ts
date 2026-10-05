import type { TranslationCatalog } from '../build-tools/translations.mts';

// TRANSLATORS: Buttons are surrounded by brackets, like `[OK]` or `[Cancel]`
// TRANSLATORS: Leave the brackets out of your translation.
export const translations: TranslationCatalog = {
	// #region Navigation
	// ==================================================================

	// TRANSLATORS: Note that "Home" and "Main Menu" refer to the same place
	// TRANSLATORS: So it's fine if they're the same word in your language
	"Home": "Inicio",
	// TRANSLATORS: This is used as a "Back to Home" button after battles
	"[Main menu]": "Menú principal",
	// TRANSLATORS: the button that opens the teambuilder; consider something like "Edit teams"
	"[Teambuilder]": "Editor de equipos",
	"Ladder": "Clasificación",
	"Tournaments": "Torneos",
	"Friends": "Amigos",
	"Chat rooms": "Salas de chat",
	"Battles": "Combates",
	"News": "Noticias",
	"Offline": "Sin conexión",
	"[Join chat]": "Unirse al chat",
	"[All tabs]": "Todas las pestañas",
	"[Menu]": "Menú",

	// #endregion Navigation

	// #region Generic UI
	// ==================================================================

	// if one of these only appears in one panel, consider moving it to that panel's section
	"[Hide]": "Ocultar",
	"[Close]": "Cerrar",
	"[Done]": "Hecho",
	"[Back]": "Volver",
	// TRANSLATORS: A computer copy command, like Ctrl+C
	"[Copy]": "Copiar",
	"[Edit]": "Editar",
	"[Delete]": "Eliminar",
	"[Undo delete]": "Deshacer eliminación",
	// TRANSLATORS: "DM" is used to label DMs; "[Chat]" is the button to send a DM
	// TRANSLATORS: Feel free to use the same word for both (and for "Chat" in the Battle section)
	"DM": "MD",
	"[Chat]": "Chatear",
	"[OK]": "Aceptar",
	"[Cancel]": "Cancelar",
	"[Accept]": "Aceptar",
	"[Reject]": "Rechazar",
	"Random team": "Equipo aleatorio",
	"[Sound]": "Sonido",
	"[Options]": "Opciones",
	"[Battle options]": "Opciones de combate",
	"[Revert]": "Revertir",
	"[Refresh]": "Actualizar",
	"[Search]": "Buscar",
	"[Validate]": "Validar",
	"[Reconnect]": "Reconectar",
	"Disconnected": "Desconectado",
	"Connecting...": "Conectando...",
	"Loading...": "Cargando...",
	"Uploading...": "Subiendo...",
	"[Change]": "Cambiar",
	"[Add]": "Añadir",
	"[Look up]": "Buscar",
	"[Save changes]": "Guardar",
	"[Create]": "Crear",
	"[Rename]": "Renombrar",
	"[Remove]": "Quitar",
	"[Maximize]": "Maximizar",
	"[Expand/collapse]": "Expandir/contraer",

	// TRANSLATORS: connection/team-storage errors
	"Sorry, psim connections are unsupported by your browser.": "Lo sentimos, tu navegador no admite conexiones psim.",
	"Your browser doesn't support third-party cookies. Some things might not work correctly.": "Tu navegador no admite cookies de terceros. Puede que algunas cosas no funcionen correctamente.",
	"Your team storage format is too old for PS. You'll need to upgrade it at {URL}": "El formato de almacenamiento de tus equipos es demasiado antiguo para PS. Tendrás que actualizarlo en {URL}",
	"Error loading uploaded teams: {ERROR}": "Error al cargar los equipos subidos: {ERROR}",
	"Error unknown. Try again later.": "Error desconocido. Inténtalo de nuevo más tarde.",
	"Failed to load team: {ERROR}": "No se pudo cargar el equipo: {ERROR}",
	"Error logging in.": "Error al iniciar sesión.",
	"Something is interfering with our connection to the login server. Most likely, your internet provider needs you to re-log-in, or your internet provider is blocking Pokémon Showdown.": "Algo está interfiriendo con nuestra conexión al servidor de inicio de sesión. Lo más probable es que tu proveedor de internet necesite que vuelvas a iniciar sesión, o que esté bloqueando Pokémon Showdown.",
	"Something is interfering with our connection to the login server.": "Algo está interfiriendo con nuestra conexión al servidor de inicio de sesión.",
	"You have been logged out and disconnected.\n\nIf you wanted to change your name while staying connected, use the 'Change Name' button or the '/nick' command.": "Se ha cerrado tu sesión y se ha interrumpido la conexión.\n\nSi querías cambiar de nombre sin desconectarte, usa el botón «Cambiar nombre» o el comando /nick.",
	"You are not connected and cannot send {MESSAGE}.": "No hay conexión: no se puede enviar {MESSAGE}.",
	"It's been over a day since you first connected. Please refresh.": "Ha pasado más de un día desde tu primera conexión. Por favor, recarga la página.",
	"Sorry, we don't know what to do with that file.\n\nSupported file types:\n- images (to set your background)\n- downloaded replay files\n- team files": "Lo sentimos, no sabemos qué hacer con ese archivo.\n\nTipos de archivo compatibles:\n- imágenes (para establecer el fondo)\n- archivos de replay descargados\n- archivos de equipo",

	// TRANSLATORS: an unknown value, e.g. the "?" in "Ability: ? (Levitate, Heatproof)"
	"?": "?",
	// TRANSLATORS: appends a parenthetical to a value, e.g. "Ability: ? (Levitate, Heatproof)"
	// TRANSLATORS: note the leading space (fullwidth parens probably don't want one)
	" ({PARENTHETICAL})": " ({PARENTHETICAL})",

	// #endregion Generic UI

	// #region Popups
	// ==================================================================

	// TRANSLATORS: user popup
	// TRANSLATORS: "Global {RANK}" is a rank, like "Global Moderator"
	"Global {RANK}": "{RANK} global",
	"Chatrooms": "Salas",
	"Private rooms": "Salas privadas",
	"OFFLINE": "SIN CONEXIÓN",
	"Username": "Nombre de usuario",
	"[Register]": "Registrarse",
	"[Add status]": "Añadir estado",
	"[Chat self]": "Chatear contigo mismo",
	"[Change name]": "Cambiar nombre",
	"[Log out]": "Cerrar sesión",
	"[Add friend]": "Añadir amigo",
	"[Unignore]": "Dejar de ignorar",
	"[Ignore]": "Ignorar",
	"[Report]": "Denunciar",
	"[Mute]": "Silenciar",
	"[7m]": "7 min",
	"[Hourmute]": "Silenciar 1 hora",
	"[1h]": "1 h",
	"[Ban]": "Expulsar",
	"[2d]": "2 días",
	"[Weekban]": "Expulsar 1 semana",
	"[1w]": "1 sem.",
	"[Modlog]": "Registro de moderación",
	// TRANSLATORS: Showdown term for a global mute
	"[Lock]": "Bloquear",
	"[Weeklock]": "Bloquear 1 semana",
	"[Namelock]": "Bloquear nombre",
	"[Global modlog]": "Registro de moderación global",
	"[Avatar...]": "Avatar...",
	"[Close room]": "Cerrar sala",
	"[Report a user]": "Denunciar a un usuario",
	"({NUMBER} sec)": "({NUMBER} s)",
	"Room not found": "Sala no encontrada",

	// TRANSLATORS: battle options
	"Side-by-side, controls below": "Lado a lado, controles debajo",
	"Side-by-side, overlay controls": "Lado a lado, controles superpuestos",
	"Top-and-bottom, controls below": "Apilado, controles debajo",
	"Top-and-bottom, overlay controls": "Apilado, controles superpuestos",
	"Scrolling, controls below": "Desplazamiento, controles debajo",
	"Scrolling, overlay controls": "Desplazamiento, controles superpuestos",
	"Hardcore mode ON: Information not available in-game is now hidden.": "Modo hardcore activado: la información no disponible en el juego ahora está oculta.",
	"Hardcore mode OFF: Information not available in-game is now shown.": "Modo hardcore desactivado: la información no disponible en el juego ahora está visible.",
	"Spectators ignored.": "Espectadores ignorados.",
	"Spectators no longer ignored.": "Ya no se ignora a los espectadores.",
	"In this battle": "En este combate",
	"Hardcore mode (hide info not shown in-game)": "Modo hardcore (ocultar información no visible en el juego)",
	"Ignore spectators": "Ignorar espectadores",
	"Ignore opponent": "Ignorar al oponente",
	"Ignore nicknames": "Ignorar motes",
	"All battles": "Todos los combates",
	"Layout": "Disposición",
	"Automatic ({SETTING})": "Automática ({SETTING})",
	"Automatic": "Automática",
	"(DESKTOP)": "(ESCRITORIO)",
	"(MOBILE VERTICAL)": "(MÓVIL VERTICAL)",
	"(MOBILE HORIZONTAL)": "(MÓVIL HORIZONTAL)",
	"You can still invite spectators by giving them the URL or using the /invite command": "Aún puedes invitar espectadores dándoles la URL o con el comando /invite",
	"Invite only (hide from Battles list)": "Solo por invitación (ocultar de la lista de combates)",
	"Ignore Pokémon nicknames": "Ignorar los motes de los Pokémon",
	"Automatically start timer": "Iniciar el temporizador automáticamente",
	// TRANSLATORS: this phrasing is because "forfeit" is an English word some people don't know
	// TRANSLATORS: if your language's word for "forfeit" is easily understandable, you may wish to skip the explanation
	"Forfeiting makes you lose the battle. Are you sure?": "Si te rindes, perderás el combate. ¿Quieres rendirte?",
	"Replacement player's name:": "Nombre del jugador sustituto:",
	"Hardcore mode": "Modo hardcore",
	"Start at turn 0 when spectating battles": "Empezar en el turno 0 al ver combates",
	"Open new battles in the right-side panel": "Abrir combates nuevos en el panel derecho",

	// TRANSLATORS: options
	"General": "General",
	"Language": "Idioma",
	"Appearance": "Apariencia",
	"Theme": "Tema",
	"Light": "Claro",
	"Dark": "Oscuro",
	"Match system theme": "Seguir el tema del sistema",
	"Two panels (if wide enough)": "Dos paneles (si hay espacio)",
	"Single panel": "Panel único",
	"Vertical tabs": "Pestañas verticales",
	"Background": "Fondo",
	"Disable animations": "Desactivar animaciones",
	"Use 2D sprites instead of 3D models": "Usar sprites 2D en lugar de modelos 3D",
	"Use modern sprites for past generations": "Usar sprites modernos para generaciones pasadas",
	"Block DMs": "Bloquear MD",
	"Block challenges": "Bloquear retos",
	"Show DMs in chatrooms": "Mostrar MD en las salas de chat",
	"Do not highlight when your name is said in chat": "No resaltar cuando digan tu nombre en el chat",
	"Confirm before leaving a room": "Confirmar antes de salir de una sala",
	"Confirm before refreshing": "Confirmar antes de actualizar",
	"Always notify": "Notificar siempre",
	"Notify when joined": "Notificar si participas",
	"Hide": "Ocultar",
	"Timestamps": "Marcas de tiempo",
	"Off": "Desactivadas",
	"Timestamps in DMs": "Marcas de tiempo en MD",
	"Chat preferences": "Preferencias del chat",
	"[Change background]": "Cambiar fondo",
	"[Text formatting...]": "Formato de texto...",
	"[Set as background]": "Establecer como fondo",
	"[Random]": "Aleatorio",
	"Volume": "Volumen",
	"(muted)": "(silenciado)",
	"Default": "Predeterminado",
	// TRANSLATORS: "Built-in" backgrounds, as opposed to user-uploaded backgrounds
	"Official": "Oficiales",
	"Custom": "Personalizado",

	// TRANSLATORS: team chooser
	"(uncategorized)": "(sin categoría)",
	"(all)": "(todos)",
	"[Other gens]": "Otras generaciones",
	"Select a team": "Elegir un equipo",
	"(empty box)": "(caja vacía)",
	"(empty team)": "(equipo vacío)",
	"This team selector is no longer available (the challenge was cancelled or something).": "Este selector de equipos ya no está disponible (el reto se canceló o algo así).",
	"No teams found": "No se encontraron equipos",
	"This format selector is no longer available.": "Este selector de formatos ya no está disponible.",
	"Search formats": "Buscar formatos",
	"No formats matching \"{SEARCH}\" found": "No se encontraron formatos que coincidan con \"{SEARCH}\"",
	"No formats found": "No se encontraron formatos",

	// TRANSLATORS: login
	"[Choose name]": "Elegir nombre",
	"Logging in...": "Iniciando sesión...",
	"[Log in]": "Iniciar sesión",
	"[Try another name]": "Probar otro nombre",
	"[Password...]": "Contraseña...",
	"[Change password]": "Cambiar contraseña",
	"[Show password]": "Mostrar contraseña",
	"Loading Google log-in button...": "Cargando el botón de inicio de sesión de Google...",
	"(color)": "(color)",
	"(Others will be able to see your name change. To change name privately, use \"Log out\")": "(Los demás verán tu cambio de nombre. Para cambiarlo en privado, usa \"Cerrar sesión\")",
	"if you registered this name:": "si registraste este nombre:",
	"if not:": "si no:",
	"This is someone else's account. Sorry.": "Esta cuenta es de otra persona. Lo sentimos.",
	"Password": "Contraseña",

	// TRANSLATORS: register / change password
	"All fields are required": "Todos los campos son obligatorios",
	"Passwords do not match": "Las contraseñas no coinciden",
	"Your password was successfully changed!": "¡Tu contraseña se ha cambiado correctamente!",
	"Change your password:": "Cambia tu contraseña:",
	"Old password": "Contraseña anterior",
	"New password": "Contraseña nueva",
	"New password (confirm)": "Contraseña nueva (confirmar)",
	"You have been successfully registered.": "Te has registrado correctamente.",
	"Register your account:": "Registra tu cuenta:",
	"Password (confirm)": "Contraseña (confirmar)",
	"An Electric-type mouse that is the mascot of the Pokémon franchise.": "Un ratón de tipo Eléctrico, la mascota de la franquicia Pokémon.",
	"What is this Pokémon?": "¿Quién es ese Pokémon?",

	// #endregion Popups

	// #region Main Menu
	// ==================================================================

	// TRANSLATORS: Our famous ladder queue button. Give it some flair :)
	// TRANSLATORS: Might we suggest "Showdown!"
	"[Battle!]": "¡A luchar!",
	"Find a random opponent": "Buscar un rival al azar",
	"Watch a battle": "Ver un combate",
	"Find a user": "Buscar un usuario",
	// TRANSLATORS: A list of "games" you are currently in
	// TRANSLATORS: Games includes help tickets and similar interactive experiences that aren't exactly games
	"You are in:": "Estás en:",
	"Info & Resources": "Información y recursos",
	"Lobby chat": "Chat del lobby",

	// TRANSLATORS: Challenge/Search UI
	// technically used in more than the Main Menu, but it might as well be here
	"[Challenge]": "Retar",
	"Custom rules": "Reglas personalizadas",
	// TRANSLATORS: Search countdown. {NUMBER} = a number of seconds
	// TRANSLATORS: English doesn't include the unit (seconds) but your language can
	"Searching in {NUMBER}...": "Buscando en {NUMBER} s...",
	"Searching...": "Buscando rival...",
	"Pokédex": "Pokédex",
	"Replays": "Repeticiones",
	"Forum": "Foro",
	"Rules": "Reglas",
	"Credits": "Créditos",
	"Privacy": "Privacidad",
	"background by {ARTIST}": "fondo de {ARTIST}",

	// TRANSLATORS: errors
	"Wait for this countdown to finish first...": "Espera primero a que termine la cuenta atrás...",
	"You're already searching for a {FORMAT} battle...": "Ya estás buscando un combate de {FORMAT}...",
	"You need to go into the Teambuilder and build a team for this format.": "Tienes que ir al Teambuilder y crear un equipo para este formato.",

	// #endregion Main Menu

	// #region Rooms
	// ==================================================================

	// TRANSLATORS: these go under the user/battle counts, and in English they read as "100 users online"
	// TRANSLATORS: but they don't have to work that way in your language
	"users online": "conectados",
	"active battles": "combates",
	"Find an online user": "Buscar un usuario en línea",
	"Watch an active battle": "Ver un combate en curso",
	"Meloetta is PS's mascot! The Aria forme is about using its voice, and represents our chatrooms.": "¡Meloetta es la mascota de PS! La Forma Lírica usa su voz y representa nuestras salas de chat.",
	"Meloetta is PS's mascot! The Pirouette forme is Fighting-type, and represents our battles.": "¡Meloetta es la mascota de PS! La Forma Danza es de tipo Lucha y representa nuestros combates.",

	"Official chat rooms": "Salas de chat oficiales",
	"Hidden rooms": "Salas ocultas",

	"Subrooms": "Subsalas",
	"(All rooms)": "(Todas las salas)",
	"Join or search for rooms": "Únete o busca salas",
	"Command": "Comando",
	"Console": "Consola",
	"Enter = run command {INPUT}": "Intro = ejecutar el comando {INPUT}",
	"(Subroom of {ROOM})": "(Subsala de {ROOM})",
	"Possible secret room": "Posible sala secreta",
	"(Private room?)": "(¿Sala privada?)",
	"Search results": "Resultados de búsqueda",
	// TRANSLATORS: the current language's chatroom, not a list of language rooms
	"Language room": "Sala en tu idioma",

	// #endregion Rooms

	// #region Battle
	// ==================================================================

	// TRANSLATORS: Note that most translations of battle UI are in the server repository
	// TRANSLATORS: In data/text/[lang]/default.ts and data/text/[lang]/names.ts

	// TRANSLATORS: [Team]/[Battle]/[Switch]/[Shift] are buttons in overlay controls
	// TRANSLATORS: But they're section headers in normal battle controls
	// TRANSLATORS: For the "Use move" menu in battle controls
	// TRANSLATORS: This was "Attack" in older Showdown, "FIGHT" on older cart, and "Battle" on modern cart
	"[Battle]": "Luchar",
	// TRANSLATORS: For the "Switch" menu in battle controls
	// TRANSLATORS: This is "PKMN" on older cart, and "Pokémon" on modern cart
	"[Switch]": "Cambiar",
	// TRANSLATORS: For the Team Preview menu in battle controls
	// TRANSLATORS: Also replaces "[Switch]" in phases where switching isn't possible
	// TRANSLATORS: This is "PKMN" on older cart, and "Pokémon" on modern cart
	"[Team]": "Equipo",
	// TRANSLATORS: The Triples "move to center" button
	// TRANSLATORS: This is "SHIFT" on older cart; Triples doesn't exist on modern cart
	"[Shift]": "Mover",

	// TRANSLATORS: Mobile-layout buttons for switching between the battle view and the chat view
	// TRANSLATORS: ("Chat" is also used as a section header in the options popup)
	"Battle": "Combate",
	"Chat": "Chat",
	"[Try Fight button]": "Probar el botón Luchar",
	// TRANSLATORS: For the "where to target this move" menu
	"(empty slot)": "(hueco vacío)",
	"Maxed with no max moves": "No hay movimientos Dinamax disponibles",
	"No Z moves": "No hay movimientos Z",

	"[Rematch]": "Revancha",
	"[Offer tie]": "Ofrecer empate",
	"[Forfeit]": "Rendirse",
	"[Forfeit and close]": "Rendirse y cerrar",
	"[Replace player]": "Sustituir jugador",
	"[Replace]": "Sustituir",
	"(turn 100+)": "(turno 100+)",
	"[Stop timer]": "Parar el temporizador",
	"[Start timer]": "Iniciar el temporizador",
	"Enter player's name": "Escribe el nombre del jugador",
	"Cannot replace player, battle has already ended.": "No se puede sustituir al jugador, el combate ya ha terminado.",

	// TRANSLATORS: for replay controls
	"[Play]": "Reproducir",
	"[Play (sound off)]": "Reproducir (sin sonido)",
	"[Pause]": "Pausa",
	"[First turn]": "Primer turno",
	"[Prev turn]": "Turno anterior",
	"[Skip turn]": "Turno siguiente",
	"[Skip to end]": "Ir al final",
	"[Switch viewpoint]": "Cambiar de perspectiva",
	"[Go to turn]": "Ir al turno",
	"[Skip]": "Saltar",
	"[Skip animation]": "Saltar animación",
	"[Move to center]": "Moverse al centro",
	"[Upload and share replay]": "Subir y compartir la repetición",
	"[Replay]": "Repetición",
	"(closes this battle)": "(cierra este combate)",

	// TRANSLATORS: for the battle list
	"Minimum Elo": "Elo mínimo",
	"rated {ELO}": "puntuación {ELO}",
	// TRANSLATORS: goes between two usernames; the key includes its surrounding spacing so some languages can drop it
	"{PLAYER1} vs. {PLAYER2}": "{PLAYER1} vs. {PLAYER2}",
	"(All formats)": "(Todos los formatos)",
	"Username prefix": "Prefijo del nombre de usuario",
	"No battles are going on": "No hay combates en curso",
	"{NUMBER} battle": "{NUMBER} combate",
	"{NUMBER} battles": "{NUMBER} combates",
	"Timer": "Temporizador",
	"Error": "Error",
	"The battle you're looking for has expired. Battles expire after 15 minutes of inactivity unless they're saved.": "El combate que buscas ha caducado. Los combates caducan tras 15 minutos de inactividad si no se guardan.",
	"In the future, remember to click \"Save replay\" to save a replay permanently.": "En el futuro, recuerda pulsar \"Guardar repetición\" para guardar una repetición de forma permanente.",
	"Unrecognized HTML file: Only replay files are supported.": "Archivo HTML no reconocido: solo se admiten archivos de repetición.",
	"You are still in {ROOM}": "Todavía estás en {ROOM}",
	"Battle \"{INPUT}\" not found": "Combate \"{INPUT}\" no encontrado",
	"Uploaded replay": "Repetición subida",
	"Team {PLAYER}": "Equipo {PLAYER}",
	"{PLAYER} and friends": "{PLAYER} y compañía",

	// TRANSLATORS: battle log messages
	"[Earlier messages]": "Mensajes anteriores",
	"Register an account to protect your ladder rating!": "¡Registra una cuenta para proteger tu puntuación en la clasificación!",
	"Open team sheet for {PLAYER}": "Abrir la hoja de equipo de {PLAYER}",
	"Warning": "Advertencia",
	"Variation": "Variante",
	"Rated battle": "Combate puntuado",

	// TRANSLATORS: screen reader labels
	"Active Pokémon": "Pokémon activo",
	"Your team": "Tu equipo",
	"Opponent's team": "Equipo del oponente",
	"Statused": "Con problema de estado",
	"Non-statused": "Sin problema de estado",
	"Unrevealed Illusion user": "Usuario de Ilusión sin revelar",
	"Not revealed": "Sin revelar",
	"Battle controls": "Controles del combate",

	// #endregion Battle

	// #region Chat
	// ==================================================================

	"{NUMBER} user": "{NUMBER} usuario",
	"{NUMBER} users": "{NUMBER} usuarios",
	"[Join]": "Unirse",
	"[Leave]": "Salir",
	"[Ready!]": "¡Listo!",
	"In progress": "En curso",
	"Signups": "Inscripciones",
	"[Pop-out]": "Ventana aparte",
	"[Go]": "Ir",
	"[Visit]": "Abrir",
	"[Choose a name before sending messages]": "Elige un nombre antes de enviar mensajes",
	"Challenging...": "Desafiando...",
	"Accepting...": "Aceptando...",
	"[Commands]": "Comandos",
	"Mentioned by {USER} in {ROOM}": "{USER} te ha mencionado en {ROOM}",
	"{USERS} joined": "Entrada de {USERS}",
	// TRANSLATORS: separates "X joined" from "Y left"
	"{JOINEDMESSAGE}; {LEFTMESSAGE}": "{JOINEDMESSAGE}; {LEFTMESSAGE}",
	"{USERS} left": "Salida de {USERS}",
	"{USER} renamed from {OLDUSER}.": "{OLDUSER} ahora se llama {USER}.",
	"(Private to {USER})": "(Privado para {USER})",
	"{FORMAT} battle started between {PLAYER1} and {PLAYER2}.": "Combate de {FORMAT} iniciado entre {PLAYER1} y {PLAYER2}.",
	// TRANSLATORS: for when the format name already includes "battle"
	"{FORMAT} started between {PLAYER1} and {PLAYER2}.": "{FORMAT} iniciado entre {PLAYER1} y {PLAYER2}.",
	// TRANSLATORS: for when the format is unknown
	"Battle started between {PLAYER1} and {PLAYER2}.": "Combate iniciado entre {PLAYER1} y {PLAYER2}.",
	"({NUMBER} line from {USER} hidden)": "({NUMBER} línea de {USER} oculta)",
	"({NUMBER} lines from {USER} hidden)": "({NUMBER} líneas de {USER} ocultas)",
	"{USER} invited you to join the room \"{ROOM}\"": "{USER} te ha invitado a la sala \"{ROOM}\"",
	"[Join {ROOM}]": "Unirse a {ROOM}",
	"Chat log": "Registro del chat",

	// TRANSLATORS: tournaments
	"Please respond to the tournament within {SECONDS} seconds or you may be automatically disqualified.": "Responde al torneo en {SECONDS} segundos o podrías ser descalificado automáticamente.",
	"Single Elimination": "Eliminación simple",
	"Double Elimination": "Eliminación doble",
	"Round Robin": "Todos contra todos",
	"Double Round Robin": "Todos contra todos (doble)",
	"{JOINS} joined the tournament": "Inscripción de {JOINS} al torneo",
	"{LEAVES} left the tournament": "Salida de {LEAVES} del torneo",
	// TRANSLATORS: sentence terminator for messages like the above
	"{SENTENCE}.": "{SENTENCE}.",
	"{FORMAT} {TYPE} tournament": "Torneo {FORMAT} {TYPE}",
	"No tournaments are currently running.": "No hay torneos en curso.",
	"(started)": "(empezado)",
	"{TOURNAMENT} created.": "{TOURNAMENT} creado.",
	"{TOURNAMENT} created (and hidden).": "{TOURNAMENT} creado (y oculto).",
	"Tournament created": "Torneo creado",
	// TRANSLATORS: label, as in "Room: lobby"
	"Room": "Sala",
	"{USER} has joined the tournament, replacing {OLDUSER}.": "{USER} se ha unido al torneo, sustituyendo a {OLDUSER}.",
	"({NUMBER} players)": "({NUMBER} jugadores)",
	"The tournament has started!": "¡El torneo ha empezado!",
	"{USER} has been disqualified from the tournament.": "{USER} ha sido descalificado del torneo.",
	"The tournament's automatic disqualify timer has been turned off.": "El temporizador de descalificación automática del torneo se ha desactivado.",
	"The tournament's automatic disqualify timer has been set to {NUMBER} minute.": "El temporizador de descalificación automática del torneo se ha fijado en {NUMBER} minuto.",
	"The tournament's automatic disqualify timer has been set to {NUMBER} minutes.": "El temporizador de descalificación automática del torneo se ha fijado en {NUMBER} minutos.",
	"Tournament automatic disqualification warning": "Aviso de descalificación automática del torneo",
	"Time": "Tiempo",
	"{NUMBER} sec": "{NUMBER} s",
	"The tournament's automatic start is now off.": "El inicio automático del torneo está desactivado.",
	"The tournament will automatically start in {NUMBER} minute.": "El torneo empezará automáticamente en {NUMBER} minuto.",
	"The tournament will automatically start in {NUMBER} minutes.": "El torneo empezará automáticamente en {NUMBER} minutos.",
	"Scouting is now allowed (Tournament players can watch other tournament battles)": "El scouting está permitido (los jugadores del torneo pueden ver otros combates del torneo)",
	"Scouting is now banned (Tournament players can't watch other tournament battles)": "El scouting está prohibido (los jugadores del torneo no pueden ver otros combates del torneo)",
	"Tournament challenges available": "Retos de torneo disponibles",
	"Tournament challenge from {PLAYER}": "Reto de torneo de {PLAYER}",
	"Tournament battle between {PLAYER1} and {PLAYER2} started.": "Combate de torneo entre {PLAYER1} y {PLAYER2} iniciado.",
	"{PLAYER1} has won the match {SCORE} against {PLAYER2}": "{PLAYER1} ha ganado el combate {SCORE} contra {PLAYER2}",
	"{PLAYER1} has lost the match {SCORE} against {PLAYER2}": "{PLAYER1} ha perdido el combate {SCORE} contra {PLAYER2}",
	"{PLAYER1} has drawn the match {SCORE} against {PLAYER2}": "{PLAYER1} ha empatado el combate {SCORE} contra {PLAYER2}",
	" but the tournament does not support drawing, so it did not count": ", pero el torneo no admite empates, así que no cuenta",
	"Congratulations to {WINNERS} for winning the {TOURNAMENT}!": "¡Enhorabuena a {WINNERS} por ganar el {TOURNAMENT}!",
	"Runners-up": "Subcampeones",
	"Runner-up": "Subcampeón",
	"The tournament was forcibly ended.": "El torneo se ha finalizado a la fuerza.",
	"The tournament has already started.": "El torneo ya ha empezado.",
	"The tournament hasn't started yet.": "El torneo aún no ha empezado.",
	"You are already in the tournament.": "Ya estás en el torneo.",
	"One of your alts is already in the tournament.": "Una de tus cuentas alternativas ya está en el torneo.",
	"You aren't in the tournament.": "No estás en el torneo.",
	"This user isn't in the tournament.": "Este usuario no está en el torneo.",
	"There aren't enough users.": "No hay suficientes usuarios.",
	"That isn't a valid timeout value.": "No es un valor de tiempo válido.",
	"That isn't a valid tournament matchup.": "No es un emparejamiento de torneo válido.",
	"You must have a name in order to join the tournament.": "Debes tener un nombre para unirte al torneo.",
	"The tournament is already at maximum capacity for users.": "El torneo ya está al máximo de su capacidad.",
	"You have already been disqualified.": "Ya has sido descalificado.",
	"This user has already been disqualified.": "Este usuario ya ha sido descalificado.",
	"You are banned from entering tournaments.": "Tienes prohibido participar en torneos.",
	"Unknown error: {ERROR}": "Error desconocido: {ERROR}",
	"Waiting for battles to become available...": "Esperando a que haya combates disponibles...",
	"vs. {PLAYER}": "vs. {PLAYER}",
	"Or wait for {PLAYERS} to challenge you.": "O espera a que {PLAYERS} te rete.",
	"Waiting for {PLAYERS} to challenge you.": "Esperando a que {PLAYERS} te rete.",
	"Waiting for {PLAYER}...": "Esperando a {PLAYER}...",
	"Unavailable": "No disponible",
	"Waiting": "Esperando",
	"Challenging": "Retando",

	// TRANSLATORS: command errors
	"This player does not exist or is not online.": "Este jugador no existe o no está conectado.",
	"This command can only be used in proper chat rooms.": "Este comando solo se puede usar en salas de chat propiamente dichas.",
	"Error: corrupted ranking data": "Error: datos de clasificación corruptos",
	"You are not in a battle": "No estás en un combate",
	"Turn number?": "¿Número de turno?",
	"Invalid turn number: {NUMBER}": "Número de turno no válido: {NUMBER}",
	"Turn navigation is disabled in hardcore mode.": "La navegación entre turnos está desactivada en el modo hardcore.",
	"You are not a player in this battle": "No eres un jugador de este combate",
	"Can only be used in a DM.": "Solo se puede usar en un MD.",
	"Please wait 5 seconds before challenging again.": "Espera 5 segundos antes de volver a retar.",

	// #endregion Chat

	// #region Teambuilder
	// ==================================================================

	// TRANSLATORS: the title of the teams list view, so it can't be singular
	// TRANSLATORS: something like "Teams List" is fine; "Teams" (plural of Team) is a separate key
	"Teambuilder": "Equipos",
	// TRANSLATORS: the back button from a team to the teams list; same wording as the list title is fine
	"[Teams]": "Equipos",
	"[New team]": "Nuevo equipo",
	"[New team in folder]": "Nuevo equipo en la carpeta",
	"[New {FORMAT} team]": "Nuevo equipo de {FORMAT}",
	"[New box]": "Nueva caja",
	"Search teams": "Buscar equipos",
	// TRANSLATORS: a jokey tone. feel free to take it or leave it
	"you have no teams lol": "no tienes ningún equipo jaja",
	"you have no teams matching {TEXT}": "no tienes equipos que coincidan con {TEXT}",
	"you have no teams in this folder": "no tienes equipos en esta carpeta",
	// TRANSLATORS: When deleting a folder, button to add folder name to all teams in it
	"[Convert to prefix]": "Poner el nombre de la carpeta como prefijo",
	"[(add folder)]": "(añadir carpeta)",
	"[(add format folder)]": "(añadir carpeta de formato)",
	"Folder name?": "¿Nombre de la carpeta?",
	"Rename ``{FOLDER}`` to?": "¿Nuevo nombre para ``{FOLDER}``?",
	"Delete ``{FOLDER}``? (doesn't delete teams)": "¿Eliminar ``{FOLDER}``? (no elimina los equipos)",
	"Names can't contain slashes, since they're used as a folder separator.": "Los nombres no pueden contener barras, porque se usan como separador de carpetas.",
	"Names can't contain the character |, since they're used for storing teams.": "Los nombres no pueden contener el carácter |, porque se usa para guardar equipos.",
	"New name required": "Se requiere un nombre nuevo",
	"Not in a folder": "No está en una carpeta",
	"Teams not in any folders": "Equipos sin carpeta",
	"All teams": "Todos los equipos",
	"Folders": "Carpetas",

	// TRANSLATORS: for Clipboard actions
	"Copied!": "¡Copiado!",
	"[Paste copy here]": "Pegar copia aquí",
	"[Add to clipboard]": "Añadir al portapapeles",
	"[Copy/Move]": "Copiar/Mover",
	"[+ Clipboard]": "+ Portapapeles",
	"[Deselect]": "Deseleccionar",
	"[Move here]": "Mover aquí",

	// TRANSLATORS: for Import/Export
	"[Backup]": "Copia de seguridad",
	"[Backup search results]": "Guardar resultados de búsqueda",
	"[Backup folder]": "Guardar carpeta",
	"Import/Export": "Importar/Exportar",
	"[Import/Export]": "Importar/Exportar",
	"[Import]": "Importar",
	"(can't save partial exports)": "(no se puede guardar una vista parcial)",

	// TRANSLATORS: for uploaded teams
	"Account": "Cuenta",
	"Account (public)": "Cuenta (pública)",
	"Local": "Local",
	"Uploaded": "Subido",
	"Public": "Público",
	"[Upload for shareable URL]": "Subir para URL compartible",
	"[Upload for shareable/searchable URL]": "Subir para URL compartible y buscable",
	"Disconnected (wrong account?)": "Desconectado (¿cuenta equivocada?)",
	"[Revert to uploaded version]": "Volver a la versión subida",
	"[Compare]": "Comparar",
	"[Upload changes]": "Subir cambios",
	"Team was deleted": "El equipo fue eliminado",
	"Team doesn't exist": "El equipo no existe",
	"Untitled team": "Equipo sin nombre",
	"Uploaded by": "Subido por",
	"Views": "Visitas",
	"Team deleted": "Equipo eliminado",
	"Not found": "No encontrado",

	// TRANSLATORS: for the team editor
	"[Add Pokémon]": "Añadir Pokémon",
	"(choose ability)": "(elegir habilidad)",
	"Details": "Detalles",
	// TRANSLATORS: These two are for Hidden Power type
	// TRANSLATORS: They're both designed to take up very little width, so keep that in mind
	"H.P.": "P.O.",
	"H. Power": "P. Oculto",
	"Defensive coverage": "Cobertura defensiva",
	"Teambuilding resources for {FORMAT}": "Recursos de creación de equipos para {FORMAT}",
	"[See all]": "Ver todo",
	"Search species or filter by type, learnable moves, ability, tier, or egg group": "Busca un Pokémon o filtra por tipo, movimientos aprendibles, habilidad, tier o grupo huevo",
	"Search abilities": "Buscar habilidades",
	"Search items": "Buscar objetos",
	"Search moves or filter by type or category": "Busca movimientos o filtra por tipo o categoría",
	"Sample sets": "Sets de ejemplo",
	"Box sets": "Sets de la caja",
	"Guessed spread": "Reparto estimado",
	"(Please choose 4 moves to get a guessed spread)": "(Elige 4 movimientos para obtener un reparto estimado)",
	"Protip": "Consejo",
	"Use a different nature to save {NUMBER} EVs:": "Usa una naturaleza distinta para ahorrar {NUMBER} EV:",
	"Use a different nature to get higher stats:": "Usa una naturaleza distinta para obtener mejores estadísticas:",
	"Natures cannot raise or lower HP.": "Las naturalezas no pueden subir ni bajar los PS.",
	// TRANSLATORS: {STATCHANGES} is +stat/-stat
	"{STATCHANGES} nature": "Naturaleza {STATCHANGES}",
	"You can also set natures by typing {PLUS} and {MINUS} in the EV box.": "También puedes establecer la naturaleza escribiendo {PLUS} y {MINUS} en la casilla de EVs.",
	"Pasted team": "Equipo pegado",
	"Zoom out forms": "Reducir los formularios",
	"Compact": "Compacto",
	"Comfortable": "Cómodo",
	"Zoom out search results": "Reducir los resultados de búsqueda",
	"Fetching Paste...": "Obteniendo el Paste...",
	"Import/Export set": "Importar/exportar el set",
	"IV spreads": "Repartos de IVs",
	"min Atk": "Ataque mín.",
	"min Atk, min Spe": "Ataque y Velocidad mín.",
	"max all": "todo al máximo",
	"min Spe": "Velocidad mín.",
	"Hidden Power {TYPE} IVs": "IVs para Poder Oculto {TYPE}",
	"EVs, IVs, and nature": "EVs, IVs y naturaleza",
	"Base": "Base",
	"Remaining": "Restantes",

	// TRANSLATORS: errors
	"You must select a format first.": "Primero debes elegir un formato.",
	"This team is for a different account. Please log into the correct account to update it.": "Este equipo es de otra cuenta. Inicia sesión con la cuenta correcta para actualizarlo.",
	"Add a Pokémon to your team before uploading it.": "Añade un Pokémon a tu equipo antes de subirlo.",
	"Must use on an uploaded team.": "Solo se puede usar con un equipo subido.",
	"Team not found: {INPUT}": "Equipo no encontrado: {INPUT}",
	"Your file \"{FILENAME}\" is not a valid team.": "Tu archivo \"{FILENAME}\" no es un equipo válido.",
	"Hidden Power Type": "Tipo de Poder Oculto",
	"Tera Type": "Teratipo",

	// #endregion Teambuilder

	// #region Ladder
	// ==================================================================

	"[All formats]": "Todos los formatos",
	"[How the ladder works]": "Cómo funciona la clasificación",
	"[Seasonal rankings]": "Clasificación de temporada",
	"[Look up a specific user's rating]": "Consultar la puntuación de un usuario concreto",
	"Name": "Nombre",
	"Elo rating": "Puntuación Elo",
	"user's percentage chance of winning a random battle (Glicko X-Act Estimate)": "probabilidad estimada de ganar un combate aleatorio (estimación Glicko X-Act)",
	"Glicko-1 rating system: rating±deviation (provisional if deviation>100)": "Sistema de puntuación Glicko-1: puntuación±desviación (provisional si desviación>100)",
	"No one has played any ranked games yet.": "Nadie ha jugado partidas clasificatorias todavía.",

	// #endregion Ladder

	// #region Misc rooms
	// ==================================================================

	"[Join the Help room for live help]": "Pide ayuda en la sala Help",
	"Unrecognized command: {INPUT}": "Comando no reconocido: {INPUT}",

	// #endregion Misc rooms
};
