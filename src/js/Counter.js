/*---------------------------------------------------------------------
	Counter klassen skapar objekt som visar siffror. Diceapp använder 
	Counter för att visa summan av alla tärningar. Clockapp använder
	Counter för att visa timmar, minuter och sekunder.
---------------------------------------------------------------------*/

var Counter = function(numDigits, elemClass) {
	this.numDigits = numDigits || 0;
	this.elemClass = elemClass || "";
	this.digits = [];

	this.initDigits();
}

Counter.prototype.initDigits = function() {

	for (var i = 0; i < this.numDigits; i++) {
		var d = new Digit();
		this.digits.push(d);
	}
}

Counter.prototype.setValue = function(value) {

	this.sum = [];
	this.value = value || 0;
	this.sum = (this.value).toString(10).split("").map(Number);
	var j = this.sum.length;

	for (var i = this.digits.length - 1; i >= 0; i--) {
		
		if (j > 0) {
			this.digits[i].setDigitValue(this.sum[j-1]);
			this.digits[i].setDigitStyle(this.elemClass);
			j--;
		}
		else {
			this.digits[i].setDigitValue(0);
			this.digits[i].setDigitStyle(this.elemClass);
		}
	}
}

Counter.prototype.asHTML = function(elemClass) {
	this.counter = document.createElement("ul");
	this.counter.setAttribute("class", elemClass);
	
	for (var i = 0; i < this.numDigits; i++) {
		this.counter.appendChild(this.digits[i].asHTML());
	}

	return this.counter;

}



