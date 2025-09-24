// 1. Functions Without Return

   // function greet(name) {
   //   console.log(`Hello, ${name}`);
   // }
   // 
   // const msg = greet("Raniya");
   // console.log(msg); // undefined
// if we only log it will print but also return undefined but if we put return it will not give us undefine

// 2. Returning Strings, Numbers, Objects, Arrays

// function getMessage() {
//   return "Welcome to JS!";
// }
// 
// function getNumber() {
//   return 42;
// }
// 
// function getObject() {
//   return { name: "Raniya", age: 20 };
// }
// 
// function getArray() {
//   return [1, 2, 3, 4];
// }
// 
// console.log(getMessage()); // Welcome to JS!
// console.log(getNumber());  // 42
// console.log(getObject());  // { name: 'Raniya', age: 20 }
// console.log(getArray());   // [1, 2, 3, 4]

// 3. Return multiple values using array

function calculate(a, b) {
    return [a + b, a - b, a * b, a / b];
}
const [sum, diff, mul, div] = calculate(10, 5);
console.log("Sum:", sum, "Diff:", diff, "Mul:", mul, "Div:", div);
