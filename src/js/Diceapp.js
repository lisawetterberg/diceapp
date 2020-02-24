/*---------------------------------------------------------------------
	Diceapp skapar tärningsapplikationer.
	Diceapp ärver från App klassen. 
---------------------------------------------------------------------*/

var Diceapp = function() {
	this.diceArr = [];
	this.counter = null;
	this.diceWindow = null;
}

Diceapp.prototype = Object.create(App.prototype);
Diceapp.prototype.constructor = Diceapp;


Diceapp.prototype.asHTML = function(){
	var m_this = this;

	this.diceWindow = this.create("dice");

	var toolbar = this.createElem("div", "dice-toolbar-wrapper", this.diceWindow);
	var btns = this.createElem("ul", null, toolbar);
	var add = this.createElem("li", "add", btns);
	var remove = this.createElem("li", "remove", btns);
	var roll = this.createElem("li", "roll", btns);
	var countLi = this.createElem("li", null, btns);

	this.counter = new Counter(5);
	countLi.appendChild(this.counter.asHTML("dice-toolbar-counter-wrapper"));

	this.diceContent = this.createElem("div", "dice-content-wrapper", this.diceWindow);
	this.dicelist = this.createElem("ul", null, this.diceContent);

/*---------------------------------------------------------------------
	Lyssnare för enskilda tärningar via event delegation 
---------------------------------------------------------------------*/
	this.dicelist.addEventListener("click", function(event) {
		if(event.target && event.target.nodeName == "LI") {

			var childNodes = Array.from(m_this.dicelist.childNodes);
			var i = childNodes.indexOf(event.target);
			m_this.diceArr[i].roll();
			Main.audio.play();
			m_this.score();
		}
	});

/*---------------------------------------------------------------------
	Lyssnare för add, remove och roll knappar 
---------------------------------------------------------------------*/
	add.addEventListener("click", function(event) {
		if (m_this.diceArr.length != m_this.diceamount()) {
			m_this.addDice();
			Main.audio.play();
		}
	});

	remove.addEventListener("click", function(event) {
		if (m_this.diceArr.length != 0) {
			m_this.removeDice();
			Main.audio.play();
		}
	});

	roll.addEventListener("click", function(event) {
		m_this.rollDice();
		Main.audio.play();
	});

	return this.diceWindow;
}

/*---------------------------------------------------------------------
	Funktion för att skapa element, lägga till attribut
	och lägga till noder på "parents"
---------------------------------------------------------------------*/
Diceapp.prototype.createElem = function(element, elemclass, parent){
	var e = document.createElement(element);

	if (elemclass != null) {
		e.setAttribute("class", elemclass);
	}

	parent.appendChild(e);

	return e;
}

Diceapp.prototype.addDice = function(event) {
	var dice = new Dice;

	this.diceArr.push(dice);
	this.dicelist.appendChild(dice.asHTML());
	this.score();			
}

Diceapp.prototype.removeDice = function(event) {
	
	this.dicelist.removeChild(this.dicelist.lastChild)
	this.diceArr.splice(-1,1);
	this.score();
}

Diceapp.prototype.rollDice = function(event) {
	
	for (var i = 0; i < this.diceArr.length; i++) {
		this.diceArr[i].roll();
	}

	this.score();
}


/*---------------------------------------------------------------------
	Funktionen diceamount räknar ut hur många tärningar som får 
	plats i fönstret.
---------------------------------------------------------------------*/
Diceapp.prototype.diceamount = function() {

	var amount = Math.floor(this.diceContent.offsetWidth / 33) * Math.floor(this.diceContent.offsetHeight / 33);

	return amount;
}

Diceapp.prototype.score = function() {
	var sum = 0;
	
	for (var i = 0; i < this.diceArr.length; i++) {
		sum = sum + this.diceArr[i].value;
	}

	this.counter.setValue(sum);
}

Diceapp.prototype.dispose = function() {
	this.diceArr = [];
	this.counter = null;
	this.diceWindow = null;
	
}





