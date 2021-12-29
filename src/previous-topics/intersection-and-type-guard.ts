//Intersection type.
type Admin = {
    name: string;
    previleges: string[];
}

type Staff = {
    name: string;
    date: Date;
}

type UnknownEmployee = Admin | Staff;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + ' ' + emp.name);

    if('previleges' in emp){
        console.log('Previleges: ' + ' ' + emp.previleges);
    }

    if('date' in emp){
        console.log('Date: ' + ' ' + emp.date);
    }
}

const e1: UnknownEmployee = {
    name: "vinay",
    previleges: ["All"],
    date: new Date,
}
printEmployeeInformation({name: "Admin", date: new Date);
console.log(e1);

//Intersection of Type

type combinable = number | boolean;
type numbers = string | number;
type Universal = combinable & numbers;


function additionOfValues(a: Universal, b: Universal){
    return a + b;
}

const result = additionOfValues(5, 10);
//console.log(result);

const userInput = <HTMLInputElement>document.getElementById('name')!;
if( userInput ) {
   userInput.value = 'Vinay Kaithwas';
}

