"use strict";
//Interface as function Type.
let addition;
addition = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 29;
        this.name = n;
    }
    greet(pharas) {
        console.log(pharas + ' ' + this.name);
    }
}
let user1 = new Person('Max');
console.log(user1.greet('Hi'));
// user1 = {
//     name: "max",
//     age: 29,
//     greet(pharas: string){
//         console.log(pharas + ' ' + this.name);
//     }
// }
//user1.greet('Hi there - I am');
