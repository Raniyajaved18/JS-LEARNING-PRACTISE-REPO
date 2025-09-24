// const greet = (name) => {
//     return "hello" + name
// };
// console.log(greet("raniya"));

// a) Multiple Parameters
  // const add = (a, b) => a + b;
  // console.log(add(3, 4)); // 7

// b) No Parameters
  // const sayHello = () => "Hello World!";
// console.log(sayHello()); // Hello World!
  
// c) Template Literals with Arrow Functions

  // const greet = name => `Hello ${name}, welcome to JavaScript!`;
  // console.log(greet("Raniya")); // Hello Raniya, welcome to JavaScript!
  
// Using in Array Methods
  // const numbers = [1, 2, 3, 4, 5];
  
// Using arrow with map
  // const squares = numbers.map(num => num * num);
  // console.log(squares); // [ 1, 4, 9, 16, 25 ]

// Using arrow with filter
  // const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);
const name2 = "Raniya";

const person = {
    name: "raniya",
    normalFunc: function () {
        console.log("Normal:", this.name);
    },
  arrowFunc: () => {
    console.log("Arrow:", name2); // Undefined → `this` not bound
  }
};
person.normalFunc();
person.arrowFunc();
