{
  //
  // Inheritence
  class Student {
    constructor(public name: string, public age: number, public address: string) {
      // Initiate Student class with name, age, address
      // this.name = name
      // this.age = age
      // this.address = address
    }
    // Methods
    getSleep(hours: number) {
      console.log(`${this.name} will sleep for ${hours}`)
    }
  }
  // crete teacher class inheriting properties and methods from Student class
  class Teacher extends Student {
    constructor(name: string, age: number, address: string, public designation: string) {
      super(name, age, address)
      // this.designation = designation
    }
    // new mehtod
    takeClass(hours: number) {
      console.log(`${this.name} takes ${hours} of class each day`)
    }
  }
  // Initialize objects
  const student1 = new Student('asif', 30, 'Dhaka')
  student1.getSleep(5)

  const teacher1 = new Teacher('Tarek', 34, 'Chittagong', 'Math Teacher')
  console.log(teacher1)
  teacher1.getSleep(7)
  teacher1.takeClass(3)
  //
}
