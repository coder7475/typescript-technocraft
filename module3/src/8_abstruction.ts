{
  //
  // Abstraction - 1. Interface 2. abstract class
  interface Vehicle1 {
    startEngine(): void
    stopEngine(): void
  }

  abstract class Vehicle2 {
    abstract startEngine(): void
    abstract move(): void
    abstract stopEngine(): void
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("starting engine...")
    }
    stopEngine(): void {
      console.log("stopping engine")
    }
  }

  class Car2 implements Vehicle2 {
    startEngine(): void {
      console.log("starting engine")
    }
    stopEngine(): void {
      console.log("stopping engine..")
    }
    move(): void {
      console.log("Moving car")
    }
  }
  //
}
