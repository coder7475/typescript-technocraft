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
