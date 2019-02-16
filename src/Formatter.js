'use strict'

function Formatter () {
}

const assignDate = Formatter.prototype.assignDate = function (transaction) {
  let date = transaction[0]
  return date
}

const assignCredit = Formatter.prototype.assignCredit = function (transaction) {
  let credit = (transaction[1] > 0) ? transaction[1].toFixed(2) : ''
  return credit
}

const assignDebit = Formatter.prototype.assignDebit = function (transaction) {
  let debit = (transaction[1] < 0) ? Math.abs((transaction[1])).toFixed(2) : ''
  return debit
}

const assignBalance = Formatter.prototype.assignBalance = function (transaction) {
  let balance = transaction[2].toFixed(2)
  return balance
}

Formatter.prototype.process = function (transactions, assignDate, assignCredit, assignDebit, assignBalance) {
  let formattedTransactions = []
  let header = 'date || credit || debit || balance'
  transactions.forEach(function (t) {
    formattedTransactions.push(`${assignDate(t)} || ${assignCredit(t)} || ${assignDebit(t)} || ${assignBalance(t)}`)
  })
  formattedTransactions.push(header)
  return formattedTransactions.slice().reverse()
}
