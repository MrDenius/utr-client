const torrentApi = require("./torrentApi");

const Main = async () => {
	await torrentApi.Init();
	console.log(await torrentApi.GetTorrentData());
};

Main().then(() => console.log("End."));
