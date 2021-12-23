function getUserData(){
 const  userList =  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response){
    return response.json();
 }).then(function(data){
    console.log(data);
 })
 .catch(err => alert(err));
}
const buttonEl = document.getElementById('addemployee') as HTMLButtonElement;
if( buttonEl ){
    buttonEl.addEventListener('click', function(){
        getUserData();
        console.log('Here i am!');
    });
}


//How promise can be created using Promise constructor.

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        //console.log('Resolved');
    }, 1000);
});


//Example for generic function.
function mergingArray(arrFirst: Array<number>, arrSecond: Array<number>){
    const mergedArray = [ ...arrFirst, ...arrSecond];
    return mergedArray;
}

const finalMergedResult = mergingArray([1], [2]);
//console.log(finalMergedResult);


//Example 2 for generic function.
function mergingObject<T, U>(firstObj: T, secondObj: U){
    return Object.assign(firstObj, secondObj);
}

const finalMergedObject = mergingObject({name:"Vinay"}, {age: 29});
console.log(finalMergedObject.name);
