//Array Disctucturing 
const hobbiesOfUser = ["Cricket", "Reading", "Football", "Other"];
//We can distructure the orignal array by pull the values from orignal arrya values into new one.
const [hobby1, hoby2, ...others] =  hobbiesOfUser;
console.log('Disctuctured Array', hobby1, hoby2, others);

//Object Distructring.
const players = {
    firstName: "vinay",
    playerAge: 29,
    otherdetails: 'NA'
}
const {firstName, playerAge, ...otherDetails} = players;
console.log('Disctuctured object', otherDetails);