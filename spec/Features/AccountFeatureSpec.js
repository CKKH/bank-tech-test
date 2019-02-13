'use strict'

describe('Opening an account, depositing, withdrawing, and printing balance', () => {
  let account
  let statement
  let summary

  it('Works', () => {
    account = new Account();
    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)
    statement = new Statement(account)
    statement.calculateBalance()
    summary = new Summary(statement)
    summary.format()
    expect(summary.print()).toEqual("date || credit || debit || balance\n12/02/2019 || || 500.00 || 2500.00\n12/02/2019 || 2000.00 || || 3000.00\n12/02/2019 || 1000.00 || || 1000.00")
  })
})
