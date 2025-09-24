// 1. Function Parameters
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }
//
// greet("Raniya"); // Hello, Raniya!
// greet("Ali");    // Hello, Ali!

// 2. Missing Parameters

// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
//
// greet(); // Hello, undefined

// 3. Default Parameter Values

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
//
// greet("Raniya"); // Hello, Raniya
// greet();         // Hello, Guest
//

// 4. Multiple Parameters with Defaults
// function introduce(name = "haniya", age = 16) {
//     console.log(`my name is ${name} and i am ${age} years old.`);
//
// }
// introduce("raniya", 21);
// introduce("huriya");
// introduce();

// function randomID() {
//     return Math.floor(Math.random() * 1000);
// }
// function createUser(name = "guest", id = randomID()) {
//     console.log(`name: ${name} and her id is ${id}`);
// 
// }
// createUser("raniya");
// createUser();
