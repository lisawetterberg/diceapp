/*---------------------------------------------------------------------
	App ligger som grund till applikationer och skapar wrapper,
	meny och stäng-knapp. Funktionalitet för att aktiva fönster ska 
	ligga överst samt att stänga fönster finns även här.
---------------------------------------------------------------------*/

var App = function() {
	this.wrapper = null;
	this.menubar = null;
}

App.prototype = {
	constructor: App,

	create: function(type){

		var m_this = this;
	
		this.wrapper = document.createElement("div");
		this.wrapper.setAttribute("class", type+"-window-wrapper");
		this.menubar = document.createElement("div");
		this.menubar.setAttribute("class", type+"-menubar-wrapper");
		var close = document.createElement("div");
		close.setAttribute("class", "close");
		
		close.addEventListener("click", function(event) {
			m_this.close();
		});

		this.wrapper.addEventListener("click", function(event) {
			m_this.active();
		});

		Main.drag.add(this.wrapper, this.menubar);
		
		this.menubar.appendChild(close);
		this.wrapper.appendChild(this.menubar);

		return this.wrapper;
	},

/*---------------------------------------------------------------------
	Funktion för att lägga aktivt fönster överst. Ändring av zIndex 
	är baserad på Dragable klassen från DragnDrop skapad av 
	Henrik Andersen.
---------------------------------------------------------------------*/
	active: function() {

		this.wrapper.style.zIndex = Math.floor(new Date().getTime()/1000);

	},

	close: function() {
		Main.drag.remove(this.wrapper, this.menubar);

		this.wrapper.parentNode.removeChild(this.wrapper);
		Main.deleteApp(this);

	}
}
