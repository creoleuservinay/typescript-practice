"use strict";
const Student = {
    name: "Vinay",
    age: 29,
    address: [2, "s"]
};
function add(a, b, ...arg) {
    console.log(arg);
    return a + b;
}
console.log(add(5, 5, 10, 30, 40));
let userInput;
userInput = 20;
userInput = 'Vinay';
let anothertype;
// if ( typeof(userInput === 'string') ) {
//     anothertype = userInput;    
// }
// function throwError(mess: string, code: number):  never{
//     throw {message: mess, errorCode:code };
// };
// const returnTypeCheck  = throwError('Unknow error', 400);
const age = 1000;
const hobbies = ["one", "two"];
const addditionalHobbies = ["three"];
hobbies.push(...addditionalHobbies);
const Person = {
    name: "Vinay",
    age: 29
};
const newVar = Object.assign({}, Person);
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = Object.assign(Object.assign({}, defaults), { food: "rich" });
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...second, ...first, 5];
const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
];
