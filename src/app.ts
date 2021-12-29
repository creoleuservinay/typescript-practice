const Student: {
    name: string;
    age: number;
    address: [number, string];
} = {
    name: "Vinay",
    age: 29,
    address: [2, "s"]
}


type Role =  string | number;

function add(a: number, b: number, ...arg:number[]){
    console.log(arg);
    return a +  b;
}

console.log(add(5, 5, 10, 30, 40));



let userInput: unknown;
userInput  = 20;
userInput = 'Vinay';

let anothertype: string;

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
}

const newVar = {...Person}


let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };



let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...second,...first, 5];

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
   
  type Person = typeof MyArray[number];