'use strict'

function Formatter() {
}

Formatter.prototype.process = function (transactions) {
  let formattedTransactions = []
  let date
  let credit
  let debit
  let balance
  transactions.forEach(function(transaction) {
    date = transaction[0]
    credit = (transaction[1] > 0) ? transaction[1].toFixed(2) : ""
    debit = (transaction[1] < 0) ? -((transaction[1]).toFixed(2)) : ""
    balance = transaction[2].toFixed(2)
    formattedTransactions.push([`${date} || ${credit} || ${debit} || ${balance}`])
  })
  return formattedTransactions
}
