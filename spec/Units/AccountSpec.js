describe('Account', () => {
  it('deposit can be made into an account', () => {
    account = new Account()
    account.deposit(50)
    expect(account.history).toContain(50)
  })
})
