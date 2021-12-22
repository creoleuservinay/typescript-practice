function add(n1: number, n2: number, ShowResult, paras: string){
    if(ShowResult){
        const addition = n1 + n2;
        console.log(paras + addition);
    } else {
        return n1 + n2;
    }    
}

const number1 = 5; 
const number2 = 5.5;
const showParas = 'Result is:';
const ShowResult = true;

const result = add(number1, number2, ShowResult ,showParas);