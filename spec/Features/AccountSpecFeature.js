'use strict'

describe('Opening an account, depositing, withdrawing, and printing balance', () => {
  it('Works', () => {
    account = new Account()
    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)
    statement = new Statement(account)
    printedStatement = new print(statement)
    expect(printedStatement).toEqual(statement)
  })
})
