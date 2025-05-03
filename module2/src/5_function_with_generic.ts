{
  //
  // function
  const createArray = (params: string): string[] => {
    return [params];
  }

  const result = createArray("Bangladesh");

  console.log(result);

  // function with generic
  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  }

  const resultWithGeneric = createArrayWithGeneric<string>("Bangladesh Generic");

  console.log(resultWithGeneric);

  // Passing user object
  type User = {
    name: string;
    age: number;
  }

  const userArray = createArrayWithGeneric<User>({ name: "Abul", age: 24 });

  console.log(userArray);

  // fuction with generic and tuple
  const createArrayWithGenericAndTuple = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
  }


  const tupeResult = createArrayWithGenericAndTuple<string, number>("Bangladesh", 24);

  console.log(tupeResult);
  //
}
