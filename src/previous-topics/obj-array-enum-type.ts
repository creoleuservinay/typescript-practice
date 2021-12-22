
//Enum type
enum Role {admin, author, user}
const person = {
    name: "Vinay",
    age: 28,
    hobbies:["cricket", "Reading books"],
    role:Role.admin
}
if(person.role == Role.admin){
    console.log(person);
}
















// const person: {
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number, string], //It means array only contain 2 values where first one stricly number and second is string only.
// } = {
//     name: "Vinay",
//     age: 28,
//     hobbies:["cricket", "Reading books"],
//     role:[2, "author"] 
// }
//person.role[1] = 10;
//We can also explicitly assign type to array.
//let extraActivity: string[];
//extraActivity = ["vinay"];


console.log(person);