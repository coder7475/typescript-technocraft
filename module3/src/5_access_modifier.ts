{
  //
  // Acess Modifier
  class BankAcc {
    constructor(
      readonly id: string,
      protected name: string,
      private _balance: number) {
      //
    }
    // method
    addDeposit(amount: number) {
      this._balance = this._balance + amount
    }
    // getter
    get balance() {
      return this._balance
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

  // getter
  const res = s1.balance;
  console.log(res)
  //
}
