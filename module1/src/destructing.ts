// Destructuring

// Object destructuring
{
    const usr = {
        id: 34,
        name: {
            firstName: "Hello",
            middleName: "My",
            lastName: "World"
        },
        constactNO: 445,
        address: "nigeria"
    }

    const { constactNO, name: { middleName: aliasName } } = usr;
    console.log(aliasName);


    // array descrtucturing
    const friends = ["c", "d", "e"];

    // const [a, b, bestFriend] = friends;
    // const [, , bestFriend] = friends;
    const [, b, ...rest] = friends;
}

