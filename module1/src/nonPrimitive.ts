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

// 3. Object
// Implicit
const user = {
    firstName: "Robiul",
    middleName: "Hossain",
    lastName: "Chy"
}
// Explicit
let user2: {
    company: "Monster Studio"; // type ===> Literal Type
    firstName: string;
    middleName?: string; // Optional Type
    lastName: string;
} = {
    company: "Monster Studio",
    firstName: "Robiul",
    lastName: "Chy" 
};

user2.middleName = "Hossain";
console.log(user2);