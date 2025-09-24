// 1. Spread Operator (...)

// 📍 Example with Arrays

      // const arr1 = [1, 2, 3];
      // const arr2 = [4, 5, 6];
      // 
      // // Merge arrays
      // const merged = [...arr1, ...arr2];
      // console.log(merged);
      // 
      // // Copy array
      // const copy = [...arr1];
      // console.log(copy); // [1, 2, 3]
      // 
      // // 📍 Example with Objects
      // 
      // const user = { name: "Raniya", age: 21 };
      // const extra = { city: "Delhi", country: "India" };
      // // merge objects
      // const profile = { ...user, ...extra };
      // console.log(profile); // { name: 'Raniya', age: 21, city: 'Delhi', country: 'India' }
      // 
      // 
      // // Update property
      // const updated = { ...user, age: 22 };
      // console.log(updated); // { name: 'Raniya', age: 22 }

// 2. Rest Operator (...)

//📍 Example with Functions

// function sum(...nums) {
//   return nums.reduce((acc, num) => acc + num, 0);
// }
// 
// console.log(sum(1, 2, 3));       // 6
// console.log(sum(5, 10, 15, 20)); // 50

// 📍 Example with Objects (Destructuring)

// const person = { name: "Raniya", age: 21, city: "Delhi", country: "India" };
// 
// const { name, ...rest } = person;
// console.log(name);
// console.log(rest);

// 📍 Example with Arrays (Destructuring)

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...others] = numbers;
console.log(first);  // 10
console.log(second); // 20
console.log(others); // [30, 40, 50]

