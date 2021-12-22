"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//Array Disctucturing 
const hobbiesOfUser = ["Cricket", "Reading", "Football", "Other"];
//We can distructure the orignal array by pull the values from orignal arrya values into new one.
const [hobby1, hoby2, ...others] = hobbiesOfUser;
console.log('Disctuctured Array', hobby1, hoby2, others);
//Object Distructring.
const players = {
    firstName: "vinay",
    playerAge: 29,
    otherdetails: 'NA'
};
const { firstName, playerAge } = players, otherDetails = __rest(players, ["firstName", "playerAge"]);
console.log('Disctuctured object', otherDetails);
