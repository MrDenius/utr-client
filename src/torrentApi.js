const Utorrent = require("@ctrl/utorrent").Utorrent;

const client = new Utorrent({
	baseUrl: "https://localhost:44822/",
	path: "/gui/",
	username: "admin",
	password: "admin",
});

const GetTorrentData = async () => {
	return new Promise((res, rej) => {
		client.listTorrents().then(res).catch(console.error);
	});
};

const Manage = {};

const api = { GetTorrentData, Manage };

module.exports = api;
