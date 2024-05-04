# Type Assertion

Use **as** keyword to assert type

```tsx
// type assertion
 let anything: any;

 anything = "Apollo";
 (anything as string).length;

```

## Type Interface: Mainly for Object 

Cousin of **type** 

works same as type but only for object

same as type intersection, extend interface the objects type

```tsx
 // interface similiar to type
  // usefull to create custom types for objects
  type User1 = {
    name: string;
    age: number;
  };

  type roll = number;
  // intersection
  type UserWithRole = User1 & { role: string };

  // interface
  interface User2 {
    name: string;
    age: number;
  }

  // using interface you can extend interface
  // interface
  interface UserWithRoleX extends User2 {
    role: string;
  }

  type Roll1 = number[];

  interface Roll2 {
        [index: number]: number
  }

  // type - interface for function
  type Add = (x: number, y: number) => number;
  interface Sub {
    (x: number, y: number) : number
  };
```

**Note:**  Use **type** instead of **interface.** 

Overusing interfaces can introduce unnecessary complexity, make code less readable and maintainable, and violate YAGNI.

## Generics

Generics are a way to make dynamic and reusable type declaration.

```tsx
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
// Generic Tuple
type GenTuple<X, Y> = [X, Y];

const manus: GenTuple<string, string> = ['x', 'y'];
const userWithId = [12, { name: "l"}]

```