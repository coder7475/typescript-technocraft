"use strict";
{
    // type assertion
    let anything;
    // console.log(anything);
    anything = "Apollo";
    // console.log(anything);
    anything = 10;
    // console.log((anything as string).length);
    anything.length;
    const kgToGM = (value) => {
        // 
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    console.log(kgToGM('10'));
    const result1 = kgToGM(10);
    const result2 = kgToGM('200');
    console.log(result1);
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
