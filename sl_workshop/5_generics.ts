{
  ///
  // Generics - OOP
  // generics with function - resuable, typesafe code
  function functionName<T>(value: T): T {
    return value;
  }

  functionName<number>(123);
  functionName<string>("hello");
  functionName<boolean>(true);

  functionName(123);
  functionName("hello");
  functionName(true);

  // usecase 1
  function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const merge = mergeObjects({ a: 1 }, { b: 2 });
  console.log(merge);

  // usecase 2
  type MysteryBox<T> = {
    value: T;
  };

  const numberBox: MysteryBox<number> = {
    value: 123,
  };

  console.log(numberBox);
  // more used for object
  type User = {
    id: number;
    name: string;
    skills: string[];
  };

  const userBox: MysteryBox<User | null> = { value: null };

  console.log(userBox);
  ///

  ///
}
