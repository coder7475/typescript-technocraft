## Function

Normal Function:

```tsx
function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}
```

Arrow Function:

```tsx
const addArrow = (x: number, y: number): number => x + y;
```

Method:
```tsx
const User = {
    name: "Robiul",
    balance: 0,
    // use normal annoymus function because of 'this' keyword
    addBalance(balance: number): number{ 
        return this.balance + balance;
    }
}
```
Type alias for function
```tsx 
type Add = (num1: number, num2: number) => number;
```
## Spread Operator

Spread operator (`...`) allows us to quickly copy all or part of an existing array or object into another array or object.

```tsx
 const mentors = {
        types: "M",
        redxu: "N",
        dbms: "X"
    }

    const teachers = {
        prisma: "Firoz",
        next: "TOn",
        cloud: "kl"
    }

    // spread operator ...
    const list = {
        ...mentors,
        ...teachers
    }
```

## Rest Operator

The **rest parameter** syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript.

```tsx
// rest operator -- opposite of spread
    const greet = (...f: string[])=> {
        // console.log(`Hi ${f1} ${f2} ${f3}`);
        f.forEach((f: string) => console.log(`Hi ${f}`));
    }

    greet('A', 'B', 'C'
```
## **Destructuring assignment**

The **destructuring assignment** syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

```tsx
// Destructuring

// Object destructuring
{
    const usr = {
        id: 34,
        name: {
            firstName: "Hello",
            middleName: "My",
            lastName: "World"
        },
        constactNO: 445,
        address: "nigeria"
    }

    const { constactNO, name: { middleName: aliasName } } = usr;
    console.log(aliasName);

    // array descrtucturing
    const friends = ["c", "d", "e"];

    // const [a, b, bestFriend] = friends;
    // const [, , bestFriend] = friends;
    const [, b, ...rest] = friends;
}

```

## Type Aliases

Type Aliases allow defining types with a custom name (an Alias).

```tsx
{
// --------------    
// Type Alias
type Student = {
    name: string;
    age: number;
    gender: string;
    contact?: number; // optional
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
```
## Union Types

**Union types** are used when a value can be more than a single type.

Such as when a property would be `string` or `number`.

```tsx
// Union Type - literat types union
    type FrontendDeveloper = 'fakibazDeveloper' | 'goodDeveloper';
    type FullStackDev = 'frontendDev' | 'backenddev';
    type Developer = FrontendDeveloper | FullStackDev;
    const newDev: FrontendDeveloper = "goodDeveloper";

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        blood: 'O' | 'A' | 'AB'
    };

    const ami: User = {
        email: "roa",
        name: "Fahad",
        gender: "male",
        blood: 'O'
    }
```

## Intersection Types

An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.

To combine types, you use the `&` operator as follows:

```tsx
type typeAB = typeA & typeB;
Code language: TypeScript (typescript)
```

The `typeAB` will have all properties from both `typeA` and `typeB`.

```tsx
// Intersection
    type Frontend = {
        skills: string[];
        designation1: FrontendDeveloper
    }

    type Backend = {
        skills: string[];
        designation2: FullStackDev
    }

    type TrueDeveloper = Frontend & Backend;

    const fullStack: TrueDeveloper = {
        skills: ["html"],
        designation1: "fakibazDeveloper",
        designation2: "backenddev"
    }
```

dd
