'use strict'

describe('Opening an account, depositing, withdrawing, and printing balance', () => {
  let account

  it('Works', () => {
    account = new Account()
    account.deposit(1000)
    account.deposit(2000)
    account.withdraw(500)
    expect(account.statement()).toEqual('date || credit || debit || balance\n16/02/2019 ||  || 500.00 || 2500.00\n16/02/2019 || 2000.00 ||  || 3000.00\n16/02/2019 || 1000.00 ||  || 1000.00')
  })
})
