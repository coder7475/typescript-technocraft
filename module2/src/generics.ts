{
//
// Generics - Reusable generic type

// declare a generic array
type GenericArr<T> = Array<T>;

const rolls: GenericArr<number> = [3, 6, 8];
const mentors: GenericArr<string> = ['a', 'b'];
const boolArr: GenericArr<boolean> = [true, false];

// generic array of objects
const user: GenericArr<{ name: string, age: number}> = [
    {
        name: "Hello",
        age: 35
    },
    {
        name: "World",
        age: 20
    }
]


//
}