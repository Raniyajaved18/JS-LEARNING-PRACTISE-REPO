//1 - creating a class

// class car {
//     // constructor = a special function that runs when we create an object
//     constructor(brand, color) {
//         this.brand = brand; // store brand in the object
//         this.color = color; // store color in the object
//     }
//
//     // method ( or function inside a class)
//     drive() {
//         console.log(`He is driving ${this.color} ${this.brand}`);
//     }
// }
//
// // create objects (instances) from the class
// const car1 = new car("BMW", "Black");
// const car2 = new car("Audi", "Red");
//
// car1.drive();
// car2.drive();

// --------------------------------------------------------------------------------

// 📌 2. Class with Multiple Methods

/* class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    introduce() {
        console.log(`Hi!! I am ${this.name}, and i am ${this.age} years old.`);
    }

    study(subject) {
        console.log(`${this.name} is studying ${subject} 📖`);
    }
}

const s1 = new Student("Raniya", 21);
s1.introduce();
s1.study("JS");  */

// --------------------------------------------------------------------------------

// 📌 3. Inheritance (extends)

/* class Vehicle {
    constructor(brand) {
        this.brand = brand;

    }
    start() {
         console.log(`${this.brand} engine started 🔑`);
    }
}
// car extends vehicle

class Car extends Vehicle {
    constructor(brand, color) {

        super(brand); // call parent constructor
        this.color = color;
    }

    drive() {
        console.log(`${this.color} ${this.brand} is driving`);

    }
}

const myCar = new Car("tesla", "white");
myCar.start();
myCar.drive(); */

// --------------------------------------------------------------------------------

/* 📌 4. Objects vs Classes (Key Difference)

Object = actual thing (specific student, car, user).

Class = blueprint (general design).

constructor() = special function that sets up an object.constructor() = special function that sets up an object.

extends + super = inherit properties/methods from parent class.

You can create many objects from one class. */

// --------------------------------------------------------------------------------

// 📌 5. Mini Real-World Example

/* class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} logged in ✅`);
  }
}

// Admin is also a User but with more power
class Admin extends User {
  deleteUser(user) {
    console.log(`${this.username} deleted ${user.username} ❌`);
  }
}

const user1 = new User("john", "john@email.com");
const admin1 = new Admin("adminRaniya", "admin@email.com");

user1.login();    // john logged in ✅
admin1.login();   // adminRaniya logged in ✅ (inherited from User)
admin1.deleteUser(user1); // adminRaniya deleted john ❌  */
