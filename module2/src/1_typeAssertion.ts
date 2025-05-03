{
    // type assertion
    let anything: any;

    // console.log(anything);

    anything = "Apollo";

    // console.log(anything);

    anything = 10;
    // console.log((anything as string).length);
    (anything as string).length;

    const kgToGM = (value: string | number): string | number | undefined => {
        // 
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;

        } else if (typeof value === "number") {
            return value * 1000;
        }
    }

    console.log(kgToGM('10'));

    const result1 = kgToGM(10) as number;
    const result2 = kgToGM('200') as string;

    console.log(result1);
    console.log(result2);

    // type assertion in error mesage
    type CustomError = {
        message: string
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }
}
