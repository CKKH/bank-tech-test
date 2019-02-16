/* global describe, it, expect, beforeEach */

'use strict'

describe('Debit', () => {
  let date
  let debit
  let transaction

  beforeEach(() => {
    debit = new Debit()
  })

  describe('#generate', () => {
    it('generates transaction with date', () => {
      date = new Date().toLocaleDateString()
      transaction = debit.generate(50)
      expect(transaction[0]).toEqual(date)
    })

    it('generates transaction with negative value', () => {
      transaction = debit.generate(50)
      expect(transaction[1]).toEqual(-50)
    })
  })
})
