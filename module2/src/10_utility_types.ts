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

  type NameAge = Pick<Person, 'name' | 'age'>;

  //
}
