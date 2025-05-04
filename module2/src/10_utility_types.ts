{
  //
  // Utility Types
  // Pick utility
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  }

  type NameAge = Pick<Person, 'name' | 'age'>; // type has only name and age types

  // Omit utility
  type ContanctInfo = Omit<Person, 'name' | 'age'>; // type has only email and phone types

  // required utility
  type RequiredPerson = Required<Person>; // type has all properties as required

  // partial utility
  type PartialPerson = Partial<Person>; // type has all properties as optional

  // read only
  type ReadOnlyPerson = Readonly<Person>; // type has all properties as read only

  //  record utility
  type MyObj = Record<string, string>; // type has all properties as string

  const obj: MyObj = {
    a: "aa",
    b: "bb",
    v: "v",
  }
  //
}
