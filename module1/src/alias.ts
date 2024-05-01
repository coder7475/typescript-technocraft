{
// --------------    
// Type Alias
type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: number; // oprional
}

const std1: Student = {
    name: "abdul",
    age: 45,
    gender: "testing"
};

const std2: Student = {
    name: "Last",
    age: 23,
    gender: "Word",
    contact: 4434
}

// type alias
type UserName = string;
type IsAdmin = boolean;

const userName: UserName = "LSD";
const admin: IsAdmin = true;


// type alias for function
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;

// -----------------
}