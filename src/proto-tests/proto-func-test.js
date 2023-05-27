// https://stackoverflow.com/questions/20724533/difference-between-adding-function-to-prototype-and-object-literal-in-javascript

var Quo = function (string) {
	this.status = string;
};
// and then made a new object using var myQuo = new Quo("confused");
// and then made a new object using 
var myQuo = new Quo('confused');

// what would be the difference between:

// Quo.get_status = function () {
// 	return this.status;
// };
// // and

// Quo.prototype.get_status = function () {
// 	return this.status;
// };

// V1
Quo.get_status = function (quo) {
	return quo.status;
};
var status = Quo.get_status(myQuo);

// V2

Quo.get_status2 = function () {
	return this.status;
};
var status2 = Quo.get_status2.call(myQuo);

// V3
Quo.prototype.get_status = function () {
	return this.status;
};
var status3 = myQuo.get_status();
console.log('here');