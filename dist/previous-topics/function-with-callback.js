"use strict";
function greeter(fn) {
    fn('Hello into the fun');
}
function printToConsole(s) {
    console.log(s);
}
const button = document.querySelector('button');
button.addEventListener('click', () => {
    greeter(printToConsole);
});
