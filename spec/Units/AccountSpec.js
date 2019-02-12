/* global describe, it, expect, beforeEach */

'use strict'

describe('Account', () => {
  let account

  beforeEach( () => {
    account = new Account()
  })

  describe('#deposit()', () => {
    it('deposit value is recorded in account history', () => {
      account.deposit(50)
      expect(account.history).toContain(50)
    })

    it('deposit date is recorded in account history', () => {
      let depositDate = new Date().toLocaleDateString()
      account.deposit(50)
      expect(account.history).toContain(depositDate)
    })
  })
})
