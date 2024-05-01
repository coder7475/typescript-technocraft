"use strict";
var _a, _b;
{
    // Ternary operator
    const age = 15;
    age >= 18 ? console.log("adult") : console.log("Not Adult");
    // Nullish coalescing Operator
    // If decision based on Null / Undefined
    // const isAuthen = ""; - { res: ''}
    // const isAuthen = null; - { res: "Guest"}
    const isAuthen = undefined;
    const res = isAuthen !== null && isAuthen !== void 0 ? isAuthen : 'Guest';
    const res2 = isAuthen ? isAuthen : "Guest";
    console.log({ res }, { res2 });
    // Optional Chaining
    const usr = {
        id: 34,
        name: {
            firstName: "Hello",
            middleName: "My",
            lastName: "World"
        },
        constactNO: 445,
        address: "nigeria"
    };
    const designation = (_b = (_a = usr === null || usr === void 0 ? void 0 : usr.name) === null || _a === void 0 ? void 0 : _a.designation) !== null && _b !== void 0 ? _b : "None";
    console.log(designation);
}
