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

}

