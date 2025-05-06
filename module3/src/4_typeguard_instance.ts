{
  //
  // Class
  class Animal {
    // properties
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    // methods
    makeSound() {
      console.log("Making Sound")
    }

  }
  // Dog Class
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species)
    }

    // methods
    makeBark() {
      console.log("Bark Bark")
    }
  }

  // Cat Class
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species)
    }

    // methods
    makeMeaw() {
      console.log("Meaw!")
    }
  }

  // type guard class/object

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark()
    } else if (animal instanceof Cat) {
      animal.makeMeaw()
    } else {
      animal.makeSound()
    }

    return animal
  }


  const dog1 = new Dog('white', "Dog");
  const cat = new Cat('tutu', "Cat");

  console.log(getAnimal(cat))

  const isDog = (animal: Animal): animal is Dog => animal instanceof Dog
  console.log(isDog(dog1))

  //
}
