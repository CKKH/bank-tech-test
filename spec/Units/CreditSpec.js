/* global describe, it, expect, beforeEach */

'use strict'

describe('Credit', () => {
  let date
  let credit
  let transaction

  beforeEach( () => {
    credit = new Credit()
  })

  describe('#generate', () => {
    it('generates transaction with date', () => {
      date = new Date().toLocaleDateString()
      transaction = credit.generate(50)
      expect(transaction[0]).toEqual(date)
    })

    it('generates transaction with positive value', () => {
      transaction = credit.generate(50)
      expect(transaction[1]).toEqual(50)
    })
  })
})
