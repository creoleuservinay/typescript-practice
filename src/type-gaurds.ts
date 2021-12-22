
type combinableType = string | numbers;

function additionOf(a: string, b: string): string;
function additionOf(a: number, b: number): number;

function additionOf(a: combinableType, b: combinableType){
    if(typeof a === 'string' || typeof b === 'string'){
        return a .toString() + b.toString();
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
}

const readProperty = userResponse.job.title;
//console.log( readProperty );

//Nullish Coalescing
const userInputVal = undefined;
const storedInto = userInputVal ?? 'Default';
console.log(storedInto);


const userInputOnUi1 = <HTMLInputElement>document.getElementById('username');
const userInputOnUi2 = document.getElementById('username') as HTMLInputElement;
userInputOnUi2.value = 'Vinay Kaithwas';