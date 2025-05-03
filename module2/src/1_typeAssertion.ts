{
    // type assertion
    let anything: any;

    anything = "Apollo";
    (anything as string).length;

    const kgToGM = (value: string | number) => {
        // 
    }

    // type assertion in error mesage
    type CustomError = {
        message: string
    }
    try {

    } catch (error) {
        console.log((error as CustomError).message );
    }
}
