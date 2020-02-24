/*---------------------------------------------------------------------
	Main klass för att initiera användargränssnitt och övrig
	generell funktionalitet.
---------------------------------------------------------------------*/

var Main = {
	
	iconDice: null,
	iconClock: null,
	pageContentWrapper: null,
	apps: [],
	drag: null,

	init: function(event) {
		Main.initUI();
		Main.drag = new DragnDrop();
		Main.audio = new Audio('src/wav/add.wav');
	},

	initUI: function() {
		Main.iconDice = document.getElementById("icon-dice");
		Main.iconClock = document.getElementById("icon-clock");
		Main.pageContentWrapper = document.getElementById("page-content-wrapper");
		Main.iconDice.addEventListener("click", Main.createDiceapp);
		Main.iconClock.addEventListener("click", Main.createClockapp);

	},

	createDiceapp: function(event) {
		var d = new Diceapp();
		Main.pageContentWrapper.appendChild(d.asHTML());
		Main.apps.push(d);
		d.active();
	},

	createClockapp: function(event) {
		var c = new Clockapp();
		Main.pageContentWrapper.appendChild(c.asHTML());
		c.startTime();
		Main.apps.push(c);
		c.active();
	},

	deleteApp: function(app) {
		var del = Main.apps.indexOf(app);
		app.dispose();
		Main.apps.splice(del, 1);
	}

}

window.addEventListener("load", Main.init);