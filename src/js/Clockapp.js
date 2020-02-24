/*---------------------------------------------------------------------
	Clockapp skapar klockobjekt. Klassen ärver från App. startTime
	funktionen kallar sig själv varje sekund för att skriva ut tiden i
	varje klockapplikation. Funktionen är baserad på ett exempel från 
	w3c: https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
---------------------------------------------------------------------*/

var Clockapp = function() {
	
	var m_this = this;

	this.startTime = function() {
		var date = new Date();

	  	var h = date.getHours();
	  	m_this.hour.setValue(h);

	  	var m = date.getMinutes();
	  	m_this.minute.setValue(m);

	  	var s = date.getSeconds();
	  	m_this.second.setValue(s);
	  		
	  	m_this.timeout = setTimeout(m_this.startTime, 1000);
	}

}

Clockapp.prototype = Object.create(App.prototype);
Clockapp.prototype.constructor = Clockapp;


Clockapp.prototype.asHTML = function(){

	this.clockWindow = this.create("clock");

	this.contentWrapper = Diceapp.prototype.createElem.call(this, "div", "clock-content-wrapper", this.clockWindow);
	
	this.hour = new Counter(2, "clock-digit-");
	this.contentWrapper.appendChild(this.hour.asHTML("clock-digit-wrapper hour"));
	
	this.minute = new Counter(2, "clock-digit-");
	this.contentWrapper.appendChild(this.minute.asHTML("clock-digit-wrapper minute"));
	
	this.second = new Counter(2, "clock-digit-");
	this.contentWrapper.appendChild(this.second.asHTML("clock-digit-wrapper second"));

	return this.clockWindow;
}

Clockapp.prototype.dispose = function(){
	clearTimeout(this.timeout);
	this.hour = null;
	this.minute = null;
	this.second = null;
	this.clockWindow = null;
}







