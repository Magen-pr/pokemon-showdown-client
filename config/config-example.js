/** @type {import('../play.pokemonshowdown.com/src/client-main').PSConfig} */
var Config = Config || {};

/* version */ Config.version = "0";

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com'];

Config.whitelist = [
	'wikipedia.org'

	// The full list is maintained outside of this repository so changes to it
	// don't clutter the commit log. Feel free to copy our list for your own
	// purposes; it's here: https://play.pokemonshowdown.com/config/config.js

	// If you would like to change our list, simply message Zarel on Smogon or
	// Discord.
];

// `defaultserver` specifies the server to use when the domain name in the
// address bar is `Config.routes.client`.
Config.defaultserver = {
	id: 'showdown',
	host: 'sim3.psim.us',
	port: 443,
	httpport: 8000,
	altport: 80,
	registered: true
};

// language used until the user picks one; leave unset to use the browser's
Config.defaultLanguage = 'es';

// the server accepts any name without a login server (noguestsecurity)
Config.noLoginServer = true;

Config.roomsFirstOpenScript = function () {
};

Config.customcolors = {
	'zarel': 'aeo'
};
