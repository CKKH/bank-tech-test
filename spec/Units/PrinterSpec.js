/* global describe, it, expect, beforeEach */

'use strict'

describe('Printer', () => {
  describe('#run', () => {
    it('returns printed statement', () => {
      let date = "14/02/2019"
      let transactions = [[date, 10, 10]]
      let printer = new Printer()
      let statement = printer.run(transactions)
      expect(statement).toEqual("date || credit || debit || balance\n14/02/2019 || 10.00 ||  || 10.00")
    })
  })
})
