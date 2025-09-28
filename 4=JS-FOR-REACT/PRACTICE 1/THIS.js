// INSIDE A REGULAR FUNCTION

// function show() {
//   console.log(this);
// }
//
// show();  // In strict mode: undefined, otherwise -> window (browser)
// ----------------------------------------------------------
// INSIDE AN OBJECT METHOD

// const person = {
//   name: "Raniya",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
//
// person.greet(); // "Hello, my name is Raniya"
// 👉 Here, this refers to the object (person) that called the method.

// ----------------------------------------------------------

// ARROW FUNCTION

// const person = {
//   name: "Raniya",
//   greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };
//
// person.greet(); // "Hello, my name is undefined"
 
// ⚡ Why? Arrow functions don’t have their own this.
//  They use the this from where they were created (in this case, the global scope).

// ----------------------------------------------------------

// Inside a Class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//   greet() {
//     console.log(`Hi, I am ${this.name}`);
//   }
// }
//
// const p1 = new Person("Raniya");
// p1.greet(); // "Hi, I am Raniya"

// 👉 In classes, this refers to the object created from the class.

// ----------------------------------------------------------
// Tricky Example (setTimeout + this)

// const person = {
//   name: "Raniya",
//   greet: function () {
//     setTimeout(function () {
//       console.log("Hello " + this.name);
//     }, 1000);
//   }
// };
// 
// person.greet(); // After 1s → "Hello undefined"
// ⚡ Why undefined? Because inside setTimeout, this is not the object, but the global scope.

// ✅ Fix with arrow function:

// const person = {
//   name: "Raniya",
//   greet: function () {
//     setTimeout(() => {
//       console.log("Hello " + this.name);
//     }, 1000);
//   }
// };
// 
// person.greet(); // "Hello Raniya"

/* 🎯 Summary

Normal function → this = global (or undefined in strict mode).

Object method → this = the object.

Arrow function → this = parent’s this (doesn’t bind itself).

Class method → this = the object created.*/
