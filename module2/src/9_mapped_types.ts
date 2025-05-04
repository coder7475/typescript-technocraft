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
  type Height = AreaNumber['height'];
  type Width = AreaNumber['width'];

  // mapping types of AreaNumber to string
  type AreaString = {
    [key in keyof AreaNumber]: string;
  }

  // Height and Width are now strings
  // Generic Mapped types
  type Area<T> = {
    [key in keyof T]: T[key];
  }

  const area: Area<AreaNumber> = {
    height: 10,
    width: 20,
  }

  console.log(area);

  //
}
