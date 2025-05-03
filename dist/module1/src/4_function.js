"use strict";
/**
 * * Learn all about function in ts
 * * Normal Function vs Arrow Function
 */
// Normal Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 3);
// arrow function 
// x, y = parameters type and return type is defined
const addArrow = (x, y) => x + y;
// function in object = method
const User = {
    name: "Robiul",
    balance: 0,
    // use normal annoymus function because of 'this' keyword
    addBalance(balance) {
        return this.balance + balance;
    }
};
// Mapping
const arr = [1, 2, 3, 4];
const newArr = arr.map((elem) => elem * elem);
