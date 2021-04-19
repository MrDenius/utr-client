const torrentApi = require("./torrentApi");

const Main = async () => {
	console.log(await torrentApi.GetTorrentData());
};

Main().then(() => console.log("End."));
