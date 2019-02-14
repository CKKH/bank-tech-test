'use strict'

function Formatter() {
}

Formatter.prototype.process = function (transactions) {
  let formattedTransactions = []
  let header = "date || credit || debit || balance"
  transactions.forEach(function(transaction) {
    let date = transaction[0]
    let credit = (transaction[1] > 0) ? transaction[1].toFixed(2) : ""
    let debit = (transaction[1] < 0) ? Math.abs((transaction[1])).toFixed(2) : ""
    let balance = transaction[2].toFixed(2)
    formattedTransactions.push(`${date} || ${credit} || ${debit} || ${balance}`)
  })
  formattedTransactions.push(header)
  return formattedTransactions
}
