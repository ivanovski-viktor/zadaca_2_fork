/**
 * Constructors in JavaScript are functions that are used to create and initialize objects.
 * They are typically used in combination with the new keyword
 * in order to create instances of a particular type or class of objects.
 * Constructors serve as blueprints for creating objects with specific properties and methods.
 */

// Function as a constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Constructor's prototype property and adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Native constructors: String, Number, Boolean, Array, Object, Function, Date, RegExp, Error
// Array constructor native methods and properties
// Array.isArray(), Array.prototype.length
// Object constructor native methods and properties
// Object.keys(), Object.values(), Object.entries(), Object.prototype.hasOwnProperty()
