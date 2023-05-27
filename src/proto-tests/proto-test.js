// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

const myDate = new Date();
let object = myDate;

do {
	object = Object.getPrototypeOf(object);
	console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

/******************************************** */
const personPrototype = {
	greet() {
		console.log(`hello, my name is ${this.name}!`);
	},
};

function Person(name) {
	this.name = name;
}

var v = Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

/**** */
const reuben = new Person('Reuben');
reuben.greet(); // hello, my name is Reuben!

const irma = new Person('Irma');

console.log(Object.hasOwn(irma, 'name')); // true
console.log(Object.hasOwn(irma, 'greet')); // false

console.log('here');