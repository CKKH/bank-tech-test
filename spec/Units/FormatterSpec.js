/* global describe, it, expect, beforeEach */

'use strict'

describe('Formatter', () => {
  let date
  let formatter
  let transaction

  beforeEach(() => {
    date = '14/02/2019'
    formatter = new Formatter()
  })

  describe('#assignDate', () => {
    it('returns transaction date', () => {
      transaction = [date, 10, 10]
      let transactionDate = formatter.assignDate(transaction)
      expect(transactionDate).toEqual(date)
    })
  })

  describe('#assignCredit', () => {
    it('returns number to 2 decimal points if transaction value is positive', () => {
      transaction = [date, 10, 10]
      let transactionCredit = formatter.assignCredit(transaction)
      expect(transactionCredit).toBeCloseTo(10, -2)
    })

    it('returns empty string if transaction value is negative', () => {
      transaction = [date, -10, 10]
      let transactionCredit = formatter.assignCredit(transaction)
      expect(transactionCredit).toEqual('')
    })
  })

  describe('#assignDebit', () => {
    it('returns number to 2 decimal points if transaction value is negative', () => {
      transaction = [date, -10, 10]
      let transactionDebit = formatter.assignDebit(transaction)
      expect(transactionDebit).toBeCloseTo(10, -2)
    })

    it('returns empty string if transaction value is positive', () => {
      transaction = [date, 10, -10]
      let transactionDebit = formatter.assignDebit(transaction)
      expect(transactionDebit).toEqual('')
    })
  })

  describe('#assignBalance', () => {
    it('returns number to 2 decimal points', () => {
      transaction = [date, 10, 10]
      let transactionBalance = formatter.assignBalance(transaction)
      expect(transactionBalance).toBeCloseTo(10, -2)
    })
  })

  describe('#process', () => {
    it('formats transaction for printing', () => {
      let transactions = [[date, 10, 10]]
      let formattedStatement = formatter.process(transactions, assignDate,
                                                 assignCredit, assignDebit,
                                                 assignBalance)
      expect(formattedStatement[1]).toEqual(`14/02/2019 || 10.00 ||  || 10.00`)
    })

    it('reverses order of transactions so most recent appears first', () => {
      let transactions = [[date, 10, 10], [date, 100, 110]]
      let formattedStatement = formatter.process(transactions, assignDate,
                                                 assignCredit, assignDebit,
                                                 assignBalance)
      expect(formattedStatement[1]).toEqual(`14/02/2019 || 100.00 ||  || 110.00`)
    })
  })
})
