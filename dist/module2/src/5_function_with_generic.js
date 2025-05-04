"use strict";
{
    //
    // function
    const createArray = (params) => {
        return [params];
    };
    const result = createArray("Bangladesh");
    console.log(result);
    // function with generic
    const createArrayWithGeneric = (params) => {
        return [params];
    };
    const resultWithGeneric = createArrayWithGeneric("Bangladesh Generic");
    console.log(resultWithGeneric);
    const userArray = createArrayWithGeneric({ name: "Abul", age: 24 });
    console.log(userArray);
    // fuction with generic and tuple
    const createArrayWithGenericAndTuple = (param1, param2) => {
        return [param1, param2];
    };
    const tupeResult = createArrayWithGenericAndTuple("Bangladesh", 24);
    console.log(tupeResult);
    //
}
