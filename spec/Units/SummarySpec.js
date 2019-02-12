/* global describe, it, expect, beforeEach */

'use strict'

describe('Summary', () => {
  let account
  let statement
  let summary

  describe('#format', () => {
    it('formats the statement transactions', () => {
      account = new Account()
      account.deposit(10)
      statement = new Statement(account)
      statement.calculateBalance()
      summary = new Summary(statement)
      let formattedStatement = summary.format()
      expect(formattedStatement[0]).toEqual(["12/02/2019 || 10.00 ||  || 10.00"])
    })
  })
})
