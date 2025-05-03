{
    // Generics - Reusable generic type

    // declare a generic array
    type GenericArr<T> = Array<T>;

    const rolls: GenericArr<number> = [3, 6, 8];
    const mentors: GenericArr<string> = ['a', 'b'];
    const boolArr: GenericArr<boolean> = [true, false];

    console.log(rolls);
    console.log(mentors);
    console.log(boolArr);

    // declare a user object
    type User = {
        name: string;
        age: number;
    }
    // use generatic array of objects
    const user: GenericArr<User> = [
        {
            name: "Hello",
            age: 35
        },
        {
            name: "World",
            age: 20
        }
    ]

    console.log(user);

    // Generic Tuple
    type GenTuple<X, Y> = [X, Y];

    const manus: GenTuple<string, string> = ['x', 'y'];

    console.log(manus);

    const userWithId: GenTuple<number, { name: string }> = [12, { name: "l" }]
    console.log(userWithId);

    //
}
