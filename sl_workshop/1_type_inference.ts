{
  // Type Inference
  let name = 'Alice'; // TypeScript infers string
  const arr = [23, 23, 24, 55];

  //  name = 34 // typescript shows error as number is not assignable to string type name
  //  arr.push('sdf') // can't add string to an array of number

  console.log(typeof name);
  console.log(typeof arr);

}
