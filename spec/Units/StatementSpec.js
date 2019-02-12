/* global describe, it, expect, beforeEach */

'use strict'

describe('Statement', () => {
  let account
  let statement

  beforeEach( () => {
    account = new Account()
  })

  describe('#calculateBalance', () => {
    it('records increase in running account balance for deposits', () => {
      account.deposit(10)
      statement = new Statement(account)
      statement.calculateBalance()
      expect(statement.transactions[0][2]).toEqual(10)
    })

    it('records decrease in running account balance for withdrawals', () => {
      account.withdraw(10)
      statement = new Statement(account)
      statement.calculateBalance()
      expect(statement.transactions[0][2]).toEqual(-10)
    })
  })
})
