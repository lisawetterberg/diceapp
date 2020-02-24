/*---------------------------------------------------------------------
	Dice är en klass för tärningsobjekt. När en tärning kastas
	slumpas värdet fram i funktionen roll. Dice lånar funktionen 
	number av Digit.
---------------------------------------------------------------------*/

var Dice = function() {
	this.value = 0;
	this.element = null;
}

Dice.prototype.roll = function() {

	this.value = Math.ceil(Math.random() * 6);
	this.element.setAttribute("class", "dice dice-side-"+Digit.prototype.number.call(this, this.value));
}

Dice.prototype.asHTML = function() {
	
	this.element = document.createElement("li");
	this.roll();

	return this.element;
}

