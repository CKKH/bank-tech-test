/* global describe, it, expect, beforeEach */

'use strict'

describe('Account', () => {
  let account
  let date

  beforeEach(() => {
    account = new Account()
  })

  describe('#deposit()', () => {
    it('deposit value recorded in transactions', () => {
      account.deposit(50)
      expect(account.transactions[0]).toContain(50)
    })

    it('deposit date is recorded in transactions', () => {
      date = new Date().toLocaleDateString()
      account.deposit(50)
      expect(account.transactions[0]).toContain(date)
    })

    it('account balance grows with deposit transactions', () => {
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
      date = new Date().toLocaleDateString()
      account.withdraw(50)
      expect(account.transactions[0]).toContain(date)
    })

    it('account balance drops with withdrawal transactions', () => {
      account.withdraw(50)
      account.withdraw(50)
      expect(account.transactions[1]).toContain(-100)
    })
  })
})
