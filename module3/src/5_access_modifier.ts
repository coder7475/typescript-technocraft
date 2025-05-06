{
  //
  // Acess Modifier
  class BankAcc {
    constructor(
      readonly id: string,
      protected name: string,
      private balance: number) {
      //
    }
    // method
    addDeposit(amount: number) {
      this.balance = this.balance + amount
    }

    getBalance() {
      return this.balance
    }
  }

  // child class
  class StudentAcc extends BankAcc {
    getName() {
      return this.name
    }
  }

  const acc1 = new BankAcc('111', 'rob', 42000)
  console.log(acc1)

  acc1.addDeposit(33)
  console.log(acc1)

  const s1 = new StudentAcc('222', 'sifat', 43);
  console.log(s1)
  //
}
