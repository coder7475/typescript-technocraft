{
  //
  // Acess Modifier
  class BankAcc {
    constructor(
      readonly id: string,
      public name: string,
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

  const acc1 = new BankAcc('111', 'rob', 42000)
  console.log(acc1)
  acc1.addDeposit(33)
  console.log(acc1)
  //
}
