describe('Account', () => {
  it('deposit value is recorded in account history', () => {
    account = new Account()
    account.deposit(50)
    expect(account.history).toContain(50)
  })

  it('deposit date is recorded in account history', () => {
    account = new Account()
    date = new Date().toLocaleDateString()
    account.deposit(50)
    expect(account.history).toContain(date)
  })
})
