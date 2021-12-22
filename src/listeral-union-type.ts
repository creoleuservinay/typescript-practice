function combine(
    n1: number | string,
    n2: number | string,
    resultConversion: 'as-text' | 'as-number'
){
    let result;
    if(resultConversion === 'as-number'){
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
}


const strResult = combine(5, 6, 'as-number');
console.log(strResult);

const numResult = combine("5", "6", 'as-text');
console.log(numResult);