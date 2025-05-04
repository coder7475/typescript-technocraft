{
  //
  // Utility Types
  // Pick Types
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  }

  type NameAge = Pick<Person, 'name' | 'age'>; // type has only name and age types

  // Omit Types
  type ContanctInfo = Omit<Person, 'name' | 'age'>; // type has only email and phone types


  //
}
