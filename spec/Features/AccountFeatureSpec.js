'use strict'

describe('Opening an account, depositing, withdrawing, and printing balance', () => {
  let account
  let statement

  it('Works', () => {
    account = new Account();
    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)
    statement = new Statement(account)
    summary = new Summary(statement)
    expect(accountSummary.print).toEqual("date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n13/01/2012 || 2000.00 || || 3000.00")
  })
})
