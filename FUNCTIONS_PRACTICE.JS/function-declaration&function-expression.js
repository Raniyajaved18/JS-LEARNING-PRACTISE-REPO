// Function Declaration
//  function greet(name) {
//    return `Hello, ${name}!`;
//  }
//
//  // You can call before or after its definition
//  console.log(greet("Raniya")); // Output: Hello, Raniya!
//
//
//  // Function Expression
//  const greet = function(name) {
//    return `Hi, ${name}!`;
//  };
//
//  console.log(greet("Raniya")); // Output: Hi, Raniya!


// 3. Key Differences
// Feature	| Function Declaration 	             | Function Expression
// Name	    | Has its own name	                 | Can be anonymous or named
// Hoisting	| Yes (can call before definition)	 | No (must define before calling)
// Use Case	| Best for reusable, general functions	| Useful when passing functions around (e.g., callbacks, React props)
// function sayHello(name) {
//   return `Hello, ${name} (from Declaration)!`;
// }
// console.log(sayHello("love"));

// const sayhi = function(name) {
//     return `hello ${name} , how are you?`;
// };
// console.log(sayhi("raniya"));

const numbers = [1, 2, 3, 4, 5];
function square(x) {
    return x * x;
}
console.log(numbers.map(square));