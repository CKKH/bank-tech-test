/* global describe, it, expect, beforeEach */

'use strict'

describe('Balance', () => {
  let date
  let transactions
  let balance

  beforeEach( () => {
    date = '14/02/2019'
    balance = new Balance()
  })

  describe('#calculate', () => {
    it('records increase in account balance after deposit', () => {
      transactions = [[date, 50]]
      balance.calculate(transactions)
      expect(transactions[0][2]).toEqual(50)
    })

    it('records decrease in account balance after withdrawal', () => {
      transactions = [[date, -50]]
      balance.calculate(transactions)
      expect(transactions[0][2]).toEqual(-50)
    })
  })
})
