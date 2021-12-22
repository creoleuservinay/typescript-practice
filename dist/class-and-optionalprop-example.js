"use strict";
class SchoolDepartment {
    constructor(a) {
        this.name = a;
    }
}
const accounting = new SchoolDepartment('Accounting');
console.log(accounting);
function printName(obj) {
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function greeter(fn) {
}
