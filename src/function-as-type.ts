function printResult(num: number): void{
    console.log('Result:' + num);
}


function add(num1: number, num2: number){
    return  num1 + num2;
}

let combineValues: (a: number, b:number) => number;

combineValues = add;
console.log(combineValues(5, 50));