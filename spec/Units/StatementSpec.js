/* global describe, it, expect, beforeEach */

'use strict'

describe('Statement', () => {
  let account
  let statement

  describe('#calculateBalance', () => {
    it('records increase in running account balance for deposits', () => {
      account = new Account()
      account.deposit(10)
      statement = new Statement(account)
      statement.calculateBalance()
      expect(statement.transactions[0][2]).toEqual(10)
    })
  })
})
