// https://stackoverflow.com/questions/23020290/javascript-add-methods-to-function-prototype

module.exports = function () {
	function protomix(constructor, mix) {
		for (var i in mix)
			// eslint-disable-next-line no-prototype-builtins
			if (mix.hasOwnProperty(i))
				constructor.prototype[i] = mix[i];
	}

	var controller = function () {
		//constructor
	};

	protomix(controller, {

		function1: function () {
			//Prototype method1
			console.log('function1');
			return 'function1';
		},

		function2: function () {
			//Prototype method2
			console.log('function2');
			return 'function2';
		},

		function3: function () {
			//Prototype method3
			console.log('function3');
			return 'function3';
		}
	});

	return controller;
};