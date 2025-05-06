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

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species)
    }

    // methods
  }

  const dog1 = new Dog('white', "Dog");


  //
}
