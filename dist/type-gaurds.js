"use strict";
function additionOf(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const resultIs = additionOf("John ", "Max");
console.log(resultIs);
//Optional chaining.
const userResponse = {
    name: "vinay",
    job: {
        title: "CEO",
        description: "This is CEO post."
    }
};
const readProperty = userResponse.job.title;
//console.log( readProperty );
//Nullish Coalescing
const userInputVal = undefined;
const storedInto = userInputVal !== null && userInputVal !== void 0 ? userInputVal : 'Default';
console.log(storedInto);
const userInputOnUi1 = document.getElementById('username');
const userInputOnUi2 = document.getElementById('username');
userInputOnUi2.value = 'Vinay Kaithwas';
