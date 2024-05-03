{
  // interface similiar to type
  // usefull to create custom types for objects
  type User1 = {
    name: string;
    age: number;
  };

  type roll = number;
  // intersection
  type UserWithRole = User1 & { role: string };

  // interface
  interface User2 {
    name: string;
    age: number;
  }

  // using interface you can extend interface
  // interface
  interface UserWithRoleX extends User2 {
    role: string;
  }

  const user1: UserWithRole = {
    name: "A",
    age: 4,
    role: "done",
  };

  const user2: UserWithRoleX = {
    name: "A",
    age: 4,
    role: "done",
  };
}
// type - interface for array
type Roll1 = number[];

interface Roll2 {
    [index: number]: number
}

const roll1: Roll1 = [1, 2, 3];
const roll2: Roll2 = [1, 2, 3];

// type - interface for function
type Add = (x: number, y: number) => number;
interface Sub {
    (x: number, y: number) : number
};
{
    const add: Add = (x, y) => x + y;
    const sub: Sub = (x, y) => x + y;
}