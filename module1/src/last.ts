{
  // nullable types
  const search = (val: string | null) => {
    val ? console.log("Searching") : console.log("Nothing");
  };

  search(null);

  // Unknown type
  const gerSpeed = (val: unknown) => {
    if (typeof val === "number") {
      return val * 1000;
    }
    if (typeof val === 'string') {
        return val.split(" ")[0]
    }
  };

  console.log(gerSpeed('1000 km/h2' ));


  // Never Type
  function throwError(ms: string):never {
    throw new Error(ms);
  }

  throwError('salf afs');
}

