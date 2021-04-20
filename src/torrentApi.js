const {
	uTorrent,
	Priority,
	RemoveFlag,
	TorrentStatus,
	Action,
} = require("utorrent-web-api");
const Client = require("utorrent-api");
const { config } = require("dotenv");
config();

const client = new uTorrent(
	process.env["HOST"],
	parseInt(process.env["PORT"]),
	process.env["AUTH_USER"],
	process.env["AUTH_PASS"]
);
// const client = new Client("127.0.0.1", "44822");
// client.setCredentials("admin", "admin");

const Init = () => {
	return client.list();
};

const uTorrentAPI = {
	list: () => {
		return new Promise((resolve, reject) => {
			client.call("list", function (err, torrents_list) {
				if (err) {
					console.log(err);
					return;
				}
				const tl = [];

				for (const torrent of torrents_list) {
					const t = { hash: torrent[0].hash };
				}
			});
		});
	},
};

const GetTorrentData = async () => {
	return new Promise((res, rej) => {
		client
			.list()
			.then((result) => {
				const trs = [];

				for (let hash in result.torrents) {
					trs.push(result.torrents[hash]);
				}
				res(trs);
			})
			.catch(console.error);
	});
};

const Manage = {};

const api = { GetTorrentData, Manage, Init };

module.exports = api;
