/* global describe, it, expect, beforeEach */

'use strict'

describe('Formatter', () => {
  describe('#process', () => {
    it('formats deposit transactions for printing', () => {
      let date = new Date().toLocaleDateString()
      let transactions = [[date, 10, 10]]
      let formatter = new Formatter()
      let formattedStatement = formatter.process(transactions)
      expect(formattedStatement[0]).toEqual(["13/02/2019 || 10.00 ||  || 10.00"])
    })
  })
})
