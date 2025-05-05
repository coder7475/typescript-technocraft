{
  //
  // Inheritence
  class Student {
    constructor(public name: string, public age: number, public address: string) {
      // Initiate Student class with name, age, address
    }
    // Methods
    getSleep(hours: number) {
      console.log(`${this.name} will sleep for ${hours}`)
    }
  }
  // crete teacher class inheriting properties and methods from Student class
  class Teacher extends Student {
    constructor(public name: string, public age: number, public address: string) {
      super(name, age, address)
    }
    // new mehtod
    takeClass(hours: number) {
      console.log(`${this.name} takes ${hours} of class each day`)
    }
  }
  // Initialize objects
  const student1 = new Student('asif', 30, 'Dhaka')
  student1.getSleep(5)

  const teacher1 = new Teacher('Tarek', 34, 'Chittagong')
  teacher1.getSleep(7)
  teacher1.takeClass(3)
  //
}
