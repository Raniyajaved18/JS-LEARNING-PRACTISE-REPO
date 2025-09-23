// 1. forEach()

// const numbers = [1, 2, 3, 4, 5];
//
// // Print each number
// numbers.forEach(num => {
//   console.log(num);
// });
//
// // Example with index
// numbers.forEach((num, index) => {
//   console.log(`Index ${index} → Value ${num}`);
// });

// 2. map()

// const numbers = [1, 2, 3, 4, 5];
//
// // Double each number
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
//
// // Extract property from objects
// const users = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 25 }
// ];
//
// const names = users.map(user => user.name);
// console.log(names); // ["Alice", "Bob"]

// 3. filter()

// const numbers = [1, 2, 3, 4, 5];
//
// // Keep only even numbers
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); // [2, 4]
//
// // Filter users above 21
// const users = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 25 }
// ];
//
// const adults = users.filter(users => users.age > 21);
// console.log(adults); // [{ name: "Bob", age: 25 }]

// 4. find()

// const numbers = [5, 12, 8, 130, 44];
//
// const found = numbers.find(num => num > 10);
// console.log(found); // 12 (first match)
//
// // Find first user above 21
// const users = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 }
// ];
//
// const firstAdult = users.find(user => user.age > 21);
// console.log(firstAdult); // { name: "Bob", age: 25 }

// 5. some()

// const numbers = [1, 2, 3, 4, 5];
//
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); // true (because 2,4 are even)
//
// const allAbove10 = numbers.some(num => num > 10);
// console.log(allAbove10); // false

// 6. every()

// const numbers = [2, 4, 6, 8];
//
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); // true
//
// const allAbove5 = numbers.every(num => num > 5);
// console.log(allAbove5); // false

// 7. reduce()

const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Find max
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
console.log(max); // 5

// Example with objects
const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 500 }
];

const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // 750



