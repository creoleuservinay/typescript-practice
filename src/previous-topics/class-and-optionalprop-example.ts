class SchoolDepartment{
    name: string;

    constructor(a: string){
        this.name = a;
    }
}

const accounting = new SchoolDepartment('Accounting');
console.log(accounting);


function printName(obj: { first: string; last?: string }) {
   
}
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });

  //Type Aliases
  type GreetFunction = (a: string) => void;
  function greeter(fn: GreetFunction) {

  }