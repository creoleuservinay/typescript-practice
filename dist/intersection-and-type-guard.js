"use strict";
function printEmployeeInformation(emp) {
    console.log('Name: ' + ' ' + emp.name);
    if ('previleges' in emp) {
        console.log('Previleges: ' + ' ' + emp.previleges);
    }
    if ('date' in emp) {
        console.log('Date: ' + ' ' + emp.date);
    }
}
const e1 = {
    name: "vinay",
    previleges: ["All"],
    date: new Date,
};
function additionOfValues(a, b) {
    return a + b;
}
const result = additionOfValues(5, 10);
//console.log(result);
const userInput = document.getElementById('name');
if (userInput) {
    userInput.value = 'Vinay Kaithwas';
}
