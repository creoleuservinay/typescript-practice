type ConversionDescriptor = 'as-text' | 'as-number';
type Combinable = number | string;
function combine(
    n1: Combinable,
    n2: Combinable,
    resultConversion: ConversionDescriptor
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