// basic data types 

// ? string
// TS Infers own its own - implicit data type
// use Infer whenever possible e.g ts can correctly infer type
let firstName = 'Robiul';

// Explicit data type
let lastName: string = "Hossain";


//? Primitive data types
// 1. Number
let num: number = 20;

// 2. String
let myName: string = "Fahad";

// 3. Boolean
let isAdmin: boolean = true;

// 4. Null
let nai: null = null;

// 5. Undefined
let asenai: undefined = undefined;

// 6. Symbol
let sym: symbol = Symbol();

// Any Type - Off TS = JS - Not Recommanded
let x: number;
let y: any;

x = 123
// x = 'ddd'
y = 123;
y = 'xxx'
