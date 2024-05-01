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