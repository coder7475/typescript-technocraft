{
    // Union Type - literat types union
    type FrontendDeveloper = 'fakibazDeveloper' | 'goodDeveloper';
    type FullStackDev = 'frontendDev' | 'backenddev';
    type Developer = FrontendDeveloper | FullStackDev;
    const newDev: FrontendDeveloper = "goodDeveloper";

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        blood: 'O' | 'A' | 'AB'
    };

    const ami: User = {
        email: "roa",
        name: "Fahad",
        gender: "male",
        blood: 'O'
    }
}