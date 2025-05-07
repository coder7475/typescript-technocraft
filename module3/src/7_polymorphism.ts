{
  //
  // Polymorphism
  class Person {
    getSleep() {
      console.log("A person sleep for 8 hours!")
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("A person sleep for 7 hours!")
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log("A person sleep for 6 hours!")
    }
  }

  function getSleepingHours(instance: Person) {
    return instance.getSleep();
  }

  // declate objecs
  const abul = new Person();
  const kabul = new Student();
  const habul = new Developer();

  getSleepingHours(abul);
  getSleepingHours(kabul);
  getSleepingHours(habul);


  //
}
