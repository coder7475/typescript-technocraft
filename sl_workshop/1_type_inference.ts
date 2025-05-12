{
  // Type Inference -  typescript can infer based on value assigned 
  let name = 'Alice'; // TypeScript infers string
  const arr = [23, 23, 24, 55];

  //  name = 34 // typescript shows error as number is not assignable to string type name
  //  arr.push('sdf') // can't add string to an array of number

  console.log(typeof name);
  console.log(typeof arr);

  // inference in function
  function add(a: number, b: number) {
    return a + b; // Return type inferred as 'number'
  }

  function subtract(a = 10, b = 5) {
    return a - b;
  }

  const result = add(5, 10); // 'result' is inferred as 'number'
  const sub1 = subtract(40, 20);

  // console.log(sub1.toUpperCase());// Error: Property 'toUpperCase' does not exist on type 'number'

  // console.log(result.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'
  //
  // Type Inference in number
  const user = {
    id: 1,
    name: "Alice",
    isActive: true,
  }; // TypeScript infers { id: number; name: string; isActive: boolean }

  user.isActive = false; // Allowed
  user.age = 25; // Error: Property 'age' does not exist on type '{ id: number; name: string; isActive: boolean }'

  function printUser(input: typeof user) {
    console.log(input.name);
  }

  // **Contextual Typing in Callback:** TypeScript infers the type of callback parameters based on context.
  const nums = [1, 2, 3, 5, 6];

  const doubleNums = nums.map(num => num * 2); // num is inferred as number
}
