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
  ///
}
