/* global describe, it, expect, beforeEach */

'use strict'

describe('Formatter', () => {
  describe('#process', () => {
    it('formats transaction for printing', () => {
      let date = "14/02/2019"
      let transaction = [[date, 10, 10]]
      let formatter = new Formatter()
      let formattedStatement = formatter.process(transaction)
      expect(formattedStatement[0]).toEqual("14/02/2019 || 10.00 ||  || 10.00")
    })
  })
})
