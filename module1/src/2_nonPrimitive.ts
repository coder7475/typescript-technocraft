// Non Primitve Data Types
//
// 1. Array
// implicit array
let friends = ["saif", "niaj", 4];

// explicit array
let collegues: string[] = ["saif", "fahad"]; // only accept string 
let nums: number[] = [5, 443, "mamun"];      // only accetps number
let mix: (number | string)[] = ["niaj", 55]; // accepts both string and number

/**
 * * 2. Tuple ===> array ===> order ===> types of values
 * * Limit count and type 
 */
let cord: [number, number] = [1, 4];
let cord2: [number, string] = [1, "4", 44];
let ageName: [number, string] = [34, "Robiul"];

