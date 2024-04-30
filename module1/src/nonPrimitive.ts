// Non Primitve Types
// 1. Array
// implicit
let friends = ["saif", "niaj", 4];
// explicit
let collegues: string[] = ["saif"]; // only accept string 
let nums: number[] = [5, 443]; // only accetps number
let mix: (number | string)[] = ["niaj", 55]; // accepts both string and number

/**
 * * 2. Tuple ===> array ===> order ===> types of values
 * * Limit count and type 
 */
let cord: [number, number] = [1, 4];