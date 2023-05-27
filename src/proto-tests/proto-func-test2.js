// https://stackoverflow.com/questions/20724533/difference-between-adding-function-to-prototype-and-object-literal-in-javascript

var Quo = function (status) {
	this.status = status;
};

Quo.status = 'enlightened';

Quo.get_status = function () {
	return this.status;
};

Quo.prototype.get_status = function () {
	return this.status;
};

var quo = new Quo('confused');

var v1 = Quo.get_status(); // "enlightened"
var v2 = quo.get_status(); // "confused"
console.log('here');
