import { Named } from './named-interface.js';

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
    
    let user1 =  new Person('Max !!!');
    console.log(user1.greet('Hi'));
