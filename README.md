## Outline

- Introduction to typescript
- Basic and advance types of typescript
- Normal function & arrow function
- Generic and Interface
- Modules and namespaces
- Object Oriented typescript

## What is Typescript?

Typescript is an OOP language that is build on top of JavaScript with extra features. - from PH

TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)

## Lackings in JavaScript

- Dynamically Typed Language
- No OOP
- In Large Application with multiple developers
    - Very difficult to maintain Large Codebase
    - Hard to find bugs
    - Catch error only in runtime

## Benefits of TypeScript

- Supports Older Browser: Typescript code can be transpiles into older versions(es6, es5, es3) of JavaScript.
- Type Safety
    - JS Types in TS
        - Number
        - String
        - Boolean
        - Null
        - Undefined
        - Object
        - Symbol
    - TS own Types
        - Interface
        - Void
        - Array
        - Tuple
        - Enum
        - Union
        - Intersection
- Increase your productivity
- Less Bugs and Less Testing

## Drawbacks of using Typescript

- Type Complexities
- Limited Library Support
- Over Engineering
- Migration Challenges

# Install NVM

[Node Version Manager – NVM Install Guide](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

Install Node versions like this:

```bash
nvm install latest

```

This command will install the last version of Node:

```bash
nvm install vX.Y.Z

```

This will install the `X.Y.Z` Node version.

You can also make a version your default by running:

```bash
nvm alias default vX.Y.Z

```

And if you want to use a specific version at any point, you can run the following in your terminal:

```bash
nvm use vA.B.C
```

See all node version list

```bash
nvm list
```

## Install TypeScrip

install typescript globally using npm

```bash
npm install -g typescript
```

check version of typescript

```bash
tsc -v
```

transpile ts to js - creates a smae name js file

```bash
tsc index.ts
```

Initialize typescript config file

```bash
tsc --init
`

```bash
nvm install latest

```

This command will install the last version of Node:

```bash
nvm install vX.Y.Z

```

This will install the `X.Y.Z` Node version.

You can also make a version your default by running:

```bash
nvm alias default vX.Y.Z

```

And if you want to use a specific version at any point, you can run the following in your terminal:

```bash
nvm use vA.B.C
```

See all node version list

```bash
nvm list
```

## Install TypeScript

install typescript globally using npm

```bash
npm install -g typescript
```

check version of typescript

```bash
tsc -v
```

transpile ts to js - creates a smae name js file

```bash
tsc index.ts
```

Initialize typescript config file

```bash
tsc --init
```

## Primitive Types & Non Primitive Types

Primitive:

1. number
2. string
3. boolean
4. null
5. undefined
6. symbol

Non Primitive:

1. Array 
2. Tuple
3. Object

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