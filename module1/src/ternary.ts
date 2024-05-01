{
    // Ternary operator
    const age: number = 15;
    age >= 18 ? console.log("adult") : console.log("Not Adult");

    // Nullish coalescing Operator
    // If decision based on Null / Undefined
    // const isAuthen = ""; - { res: ''}
    // const isAuthen = null; - { res: "Guest"}
    const isAuthen = undefined;
    const res = isAuthen ?? 'Guest';
    const res2 = isAuthen ? isAuthen : "Guest"
    console.log({ res }, { res2});
}