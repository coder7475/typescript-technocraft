/**
 * * Learn all about function in ts
 * * Normal Function vs Arrow Function
 */
// Normal Function
function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}

add(2, 3);

// arrow function 
// x, y = parameters type and return type is defined
const addArrow = (x: number, y: number): number => x + y;

// function in object = method
const User = {
    name: "Robiul",
    balance: 0,
    // use normal annoymus function because of 'this' keyword
    addBalance(balance: number): number{
        return this.balance + balance;
    }
}

// Mapping
const arr: number[] = [1, 2, 3, 4];

const newArr: number[] = arr.map((elem: number): number => elem * elem)