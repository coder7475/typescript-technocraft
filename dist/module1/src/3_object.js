"use strict";
// Not Primitive Data type
// 3. Object
// Implicit
const user = {
    firstName: "Robiul",
    middleName: "Hossain",
    lastName: "Chy"
};
// Explicit
let user2 = {
    company: "None",
    firstName: "Robiul",
    lastName: "Chy",
    isMarried: false
};
user.lastName = "Fahad";
console.log(user);
user2.middleName = "Hossain";
console.log(user2);
// user2.company = "ddda"
