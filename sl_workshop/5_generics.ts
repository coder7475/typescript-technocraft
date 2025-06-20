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

  // case 3
  type ApiResponse<T> = {
    data: T;
    status: number;
    message: string;
  };

  async function fetchUser(): Promise<ApiResponse<User>> {
    const response = await fetch("https://api.jsonplaceholder.com/users");
    const data = await response.json();

    return {
      data,
      status: response.status,
      message: response.statusText,
    };
  }

  // generics for all similiar type of fetchUser , fetchProduct etcc

  const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
    const response = await fetch(url);
    const data = await response.json();

    return {
      data,
      status: response.status,
      message: response.statusText,
    };
  };

  console.log(fetchData("https://api.jsonplaceholder.com/comments"));
  ///

  ///
}
