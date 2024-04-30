// basic data types 

// string 
// TS Infers own its own - implicit data type 
let firstName = 'Robiul';
// Explicit data type
let lastName: string = "Hossain";
// use Infer whenever possible e.g ts can correctly infer type

// Primitive data types
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

// Any Type - Off TS = JS
let x;
let y: any;