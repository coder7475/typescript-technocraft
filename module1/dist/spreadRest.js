"use strict";
{
    // Spread Operator
    const bhais = ["A", "B", "C"];
    const brothers = ["D", "E"];
    // Argument of type 'string[]' is not assignable to parameter of type 'strin
    // bhais.push(brothers)
    const mentors = {
        types: "M",
        redxu: "N",
        dbms: "X"
    };
    const teachers = {
        prisma: "Firoz",
        next: "TOn",
        cloud: "kl"
    };
    // spread operator ...
    const list = Object.assign(Object.assign({}, mentors), teachers);
    console.log(list);
}
