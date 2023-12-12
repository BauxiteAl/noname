export const SHOW_VOLUME = {
	name: "显示音量按钮",
	init: true,
	unfrequent: true,
	onclick(bool) {
		game.saveConfig("show_volumn", bool);
		if (lib.config.show_volumn) {
			ui.volumn.style.display = "";
		}
		else {
			ui.volumn.style.display = "none";
		}
	}
};
