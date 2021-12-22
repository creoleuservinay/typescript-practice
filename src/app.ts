//Interface as function Type.

interface addFn{
    (a: number, b: number): number;
}


let addition: addFn;

addition = ( n1: number, n2:number ) =>  {
    return n1 +n2;
};


interface Named{
    name: string;
}

interface Greetable extends Named {
    greet(pharas: string): void;
}

class Person implements Greetable{
    name: string;
    age = 29;

    constructor(n: string){
        this.name = n;
    }

    greet(pharas: string){
        console.log(pharas + ' ' + this.name);
    }
}

let user1 =  new Person('Max');
console.log(user1.greet('Hi'));

// user1 = {
//     name: "max",
//     age: 29,
//     greet(pharas: string){
//         console.log(pharas + ' ' + this.name);
//     }
// }

//user1.greet('Hi there - I am');