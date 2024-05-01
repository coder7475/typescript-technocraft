{
    // Spread Operator
    const bhais: string[] = ["A", "B", "C"];
    const brothers: string[] = ["D", "E"];

    // Argument of type 'string[]' is not assignable to parameter of type 'strin
    // bhais.push(brothers)

    const mentors = {
        types: "M",
        redxu: "N",
        dbms: "X"
    }

    const teachers = {
        prisma: "Firoz",
        next: "TOn",
        cloud: "kl"
    }

    // spread operator ...
    const list = {
        ...mentors,
        ...teachers
    }

    console.log(list);

    // rest operator -- opposite of spread
    const greet = (...f: string[])=> {
        // console.log(`Hi ${f1} ${f2} ${f3}`);
        f.forEach((f: string) => console.log(`Hi ${f}`));
    }

    greet('A', 'B', 'C')

}