{
  //
  // Mapped Types
  // array of numbers
  const arr: number[] = [1, 2, 3];

  // map to a array of strings
  const arr2: string[] = arr.map((num) => num.toString());

  console.log(arr2);

  // mapped types
  type AreaNumber = {
    height: number;
    width: number;
  }
  // mapping types of AreaNumber to string
  type AreaString = {
    [key in keyof AreaNumber]: string;
  }



  //
}
