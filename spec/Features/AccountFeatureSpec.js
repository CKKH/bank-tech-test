'use strict'

describe('Opening an account, depositing, withdrawing, and printing balance', () => {
  let account
  let date = new Date().toLocaleDateString()

  it('Works', () => {
    account = new Account()
    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)
    expect(account.statement()).toEqual(`date || credit || debit || balance\n${date} ||  || 500.00 || 2500.00\n${date} || 2000.00 ||  || 3000.00\n${date} || 1000.00 ||  || 1000.00`)
  })
})
