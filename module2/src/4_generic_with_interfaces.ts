{
  //
  // Generic with Interfaces
  interface Developer<T> {
    name: string;
    age: number;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    }
    smartwatch: T
  }

  const poorDeveloper: Developer<string> = {
    name: "Abul",
    age: 24,
    computer: {
      brand: "Lenovo",
      model: "Yoga",
      releaseYear: 2020
    },
    smartwatch: "Lenovo Watch"
  }

  console.log(poorDeveloper);

  type AppleWatch = {
    brand: string;
    model: string;
  }

  const richDeveloper: Developer<AppleWatch> = {
    name: "Kabul",
    age: 30,
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2024
    },
    smartwatch: {
      brand: "Apple",
      model: "Apple Watch Ultra"
    },
  }

  console.log(richDeveloper);

  //
}
