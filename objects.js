/**
 * 1. Object is used to store various keyed collections and more complex entities.
 * 2. Objects can be created using the Object() constructor or the object initializer {} literal syntax.
 */

let myObject = {
  name: "John", // property
  age: 20, // property
  body: {
    height: 180,
    weight: {},
  },
  func: function () {}, // method
};

myObject["name"]; // "John" --> string
myObject["age"]; // 20 --> number

myObject.name; // "John" --> string
myObject.func(); // function () {}
