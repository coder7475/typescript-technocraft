{
  // interface similiar to type, but only for objects
  // usefull to create custom types for objects

  // User role created by type
  type User1 = {
    name: string;
    age: number;
  };


  // intersection
  type UserWithRole = User1 & { role: string };

  const user1: UserWithRole = {
    name: "Abul",
    age: 24,
    role: "developer",
  };

  console.log(user1)

  // Same with interface
  interface User2 {
    name: string;
    age: number;
  }

  // using interface you can extend interface
  // interface
  interface UserWithRoleX extends User2 {
    role: string;
  }

  const user2: UserWithRoleX = {
    name: "A",
    age: 4,
    role: "done",
  };

  console.log(user2);

  // type - interface for array, as array is obeject it can be used with interface
  // type roll = number;
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number
  }

  const roll1: Roll1 = [1, 2, 3];
  const roll2: Roll2 = [1, 2, 3];

  console.log(roll1);
  console.log(roll2);

  // type - interface for function
  type Add = (x: number, y: number) => number;

  interface Sub {
    (x: number, y: number): number
  };
  {
    const add: Add = (x, y) => x + y;
    const sub: Sub = (x, y) => x + y;

    console.log(add(1, 2));
    console.log(sub(3, 2));
  }
}

