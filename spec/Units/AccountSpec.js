/* global describe, it, expect, beforeEach */

'use strict'

describe('Account', () => {
  let account
  let balance

  beforeEach( () => {
    balance = new Balance()
    account = new Account(balance)
  })

  describe('#deposit()', () => {
    it('deposit value recorded in transactions', () => {
      account.deposit(50)
      expect(account.transactions[0]).toContain(50)
    })

    it('deposit date is recorded in transactions', () => {
      let date = new Date().toLocaleDateString()
      account.deposit(50)
      expect(account.transactions[0]).toContain(date)
    })

    it('balance after deposit recorded in transactions', () => {
      let date = new Date().toLocaleDateString()
      account.deposit(50)
      account.deposit(50)
      expect(account.transactions[1]).toContain(100)
    })
  })

  describe('#withdraw()', () => {
    it('withdraw value recorded in transactions', () => {
      account.withdraw(50)
      expect(account.transactions[0]).toContain(-50)
    })

    it('withdraw date recorded in transactions', () => {
      let date = new Date().toLocaleDateString()
      account.withdraw(50)
      expect(account.transactions[0]).toContain(date)
    })

    it('balance after withdrawal recorded in transactios', () => {
      let date = new Date().toLocaleDateString()
      account.withdraw(50)
      account.withdraw(50)
      expect(account.transactions[1]).toContain(-100)
    })
  })
})
