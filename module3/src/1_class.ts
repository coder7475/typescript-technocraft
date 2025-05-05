{
  //
  // Class
  class Animal {
    // properties
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string, public sound: string) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    // methods
    makeSound() {
      console.log(this.sound)
    }

  }

  const animal1 = new Animal('tutu', 'cat', 'mew mew');

  console.log(animal1)
  animal1.makeSound()
  //
}
