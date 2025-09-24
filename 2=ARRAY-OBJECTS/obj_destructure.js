// What is Object Destructuring?

// 👉 It’s a shortcut to extract values from an object and store them in variables.

//    📍 Basic Example
// const person = { name: "Raniya", age: 21, city: "Delhi" };
//
// // Traditional way
// const name1 = person.name;
// const age1 = person.age;
// console.log(name1, age1); // Raniya 21
//
// // Using destructuring
// const { name, age } = person;
// console.log(name, age); // Raniya 21
 
//   📍 Renaming Variables
// const person = { name: "Raniya", age: 21 };

// const { name: fullName, age: years } = person;
// console.log(fullName); // Raniya
// console.log(years);    // 21

// 📍 Default Values

// const person = { name: "Raniya" };

// const { name, age = 18 } = person;
// const random_number = 32;
// console.log(name); // Raniya
// console.log(age);  // 18 (default used because no age in object)
// console.log(random_number);

// Nested Objects

// const student = {
//   id: 101,
//   info: {
//     name: "Raniya",
//     marks: { math: 90, science: 85 }
//   }
// };
//
// const { info: { name, marks: { math} } } = student;
// console.log(name); // Raniya
// console.log(math); // 90

// 📍 With Rest Operator

// const person = { name: "Raniya", age: 21, city: "Delhi", country: "India" };

// const { name, ...others } = person;
// console.log(name);   // Raniya
// console.log(others); // { age: 21, city: "Delhi", country: "India" }

