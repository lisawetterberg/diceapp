/*---------------------------------------------------------------------
	Digit är en klass för siffror och används av Counter objekt.
	Här sätts värde och stil på en siffra. Number funktionen används 
	även av Dice (genom funktionen call).
---------------------------------------------------------------------*/

var Digit = function() {
	this.value = 0;
	this.element = null;
}

Digit.prototype.setDigitValue = function(value) {
	this.value = value || 0;
}

Digit.prototype.setDigitStyle = function(elemClass) {
	this.elemClass = elemClass || "";
	this.element.setAttribute("class", this.elemClass + this.number(this.value));
}

Digit.prototype.asHTML = function() {
	this.element = document.createElement("li");
	this.setDigitStyle(this.value);

	return this.element;
}

Digit.prototype.number = function(nr) {

		switch(nr) {

			case 0:
				return "zero";
				break;

			case 1:
				return "one";
				break;

			case 2:
				return "two";
				break;

			case 3:
				return "three";
				break;

			case 4:
				return "four";
				break;

			case 5:
				return "five";
				break;

			case 6:
				return "six";
				break;
				
			case 7:
				return "seven";
				break;

			case 8:
				return "eight";
				break;

			case 9:
				return "nine";
				break;
		}
	}