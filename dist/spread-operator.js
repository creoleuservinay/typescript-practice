"use strict";
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}
const age = 1000;
const hobbies = ["one", "two"];
const addditionalHobbies = ["three"];
hobbies.push(...addditionalHobbies);
const person = {
    name: "vinay",
    age: 25
};
const allPerson = Object.assign({}, person);
console.log(allPerson);
