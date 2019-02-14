'use strict'

describe('Opening an account, depositing, withdrawing, and printing balance', () => {
  let account
  let balance
  let credit
  let debit
  let formatter
  let printer

  it('Works', () => {
    account = new Account (credit = new Credit(),
                           debit = new Debit(),
                           balance = new Balance(),
                           printer = new Printer(new Formatter()))
    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)
    expect(account.statement()).toEqual("date || credit || debit || balance\n12/02/2019 || || 500.00 || 2500.00\n12/02/2019 || 2000.00 || || 3000.00\n12/02/2019 || 1000.00 || || 1000.00")
  })
})
