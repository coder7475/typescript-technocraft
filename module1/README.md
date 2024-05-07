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

## Ternary(Conditional) operator(?)

The **conditional (ternary) operator** is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) followed by a colon (`:`), and finally the expression to execute if the condition is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). This operator is frequently used as an alternative to an `[if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)` statement.

```tsx
// Ternary operator
    const age: number = 15;
    age >= 18 ? console.log("adult") : console.log("Not Adult");

```

## Nullish Coalescing Operator(??)

The **nullish coalescing (`??`)** operator is a logical operator that returns its right-hand side operand when its left-hand side operand is `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)` or `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)`, and otherwise returns its left-hand side operand.

```tsx
// Nullish coalescing Operator
    // If decision based on Null / Undefined
    // const isAuthen = ""; - { res: ''}
    // const isAuthen = null; - { res: "Guest"}
    const isAuthen = undefined;
    const res = isAuthen ?? 'Guest';
    const res2 = isAuthen ? isAuthen : "Guest"
    console.log({ res }, { res2});
```

## Optional Chaining Operator (?.)

The **optional chaining (`?.`)** operator accesses an object's property or calls a function. If the object accessed or function called using this operator is `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)` or `[null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null)`, the expression short circuits and evaluates to `[undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)` instead of throwing an error.

```tsx
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
```
## Nullable Types

Nullable types allow variables to have either a specific type or **`null`** as a value. Nullable types help prevent runtime errors by making it clear that certain variables can potentially be **`null`** and need to be handled accordingly.

```tsx
// nullable types
  const search = (val: string | null) => {
    val ? console.log("Searching") : console.log("Nothing");
  };
  
  search(null);
```

##