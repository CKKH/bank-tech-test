/* global describe, it, expect, beforeEach */

'use strict'

describe('Balance', () => {
  let date
  let transactions
  let balance

  beforeEach( () => {
    date = new Date().toLocaleDateString()
    balance = new Balance()
  })

  describe('#calculate', () => {
    it('records increase in transaction balance after deposit', () => {
      transactions = [[date, 50]]
      balance.calculate(transactions)
      expect(transactions[0][2]).toEqual(50)
    })

    it('records decrease in transaction balance after withdrawal', () => {
      transactions = [[date, -50]]
      balance.calculate(transactions)
      expect(transactions[0][2]).toEqual(-50)
    })
  })
})
