// https://stackoverflow.com/questions/23020290/javascript-add-methods-to-function-prototype
// controller 

module.exports = function () {
	var controller = function () {
		/*--- constructor ---*/
		console.log('controller');
		return 'ctor';
	};

	controller.prototype.function1 = function () {
		//Prototype method1
		console.log('function1');
		return 'function1';
	};

	controller.prototype.function2 = function () {
		//Prototype method2
		console.log('function2');
		return 'function2';
	};

	controller.prototype.function3 = function () {
		//Prototype method3
		console.log('function3');
		return 'function3';
	};

	return controller;
};