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

class Student {
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
s1.study("JS");