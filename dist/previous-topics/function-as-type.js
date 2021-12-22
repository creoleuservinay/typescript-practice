"use strict";
function printResult(num) {
    console.log('Result:' + num);
}
function add(num1, num2) {
    return num1 + num2;
}
let combineValues;
combineValues = add;
console.log(combineValues(5, 50));
