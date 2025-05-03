"use strict";
{
    // type assertion
    let anything;
    console.log(anything);
    anything = "Apollo";
    console.log(anything);
    anything = 10;
    console.log(anything.length);
    //    (anything as string).length;
    const kgToGM = (value) => {
        // 
        if (typeof value === "string") {
            return parseFloat(value) * 1000;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    console.log(kgToGM('10'));
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
