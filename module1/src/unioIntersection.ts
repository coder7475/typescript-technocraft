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

    // Intersection
    type Frontend = {
        skills: string[];
        designation1: FrontendDeveloper
    }

    type Backend = {
        skills: string[];
        designation2: FullStackDev
    }

    type TrueDeveloper = Frontend & Backend;

    const fullStack: TrueDeveloper = {
        skills: ["html"],
        designation1: "fakibazDeveloper",
        designation2: "backenddev"
    }
}