'use strict'

function Summary() {
  this.formattedList = []
}

const display = Summary.prototype.format = function () {
  let list = []
  let date
  let credit
  let debit
  let balance

  this.transactions.forEach(function(transaction) {
    date = transaction[0]
    credit = (transaction[1] > 0) ? transaction[1].toFixed(2) : ""
    debit = (transaction[1] < 0) ? -((transaction[1]).toFixed(2)) : ""
    balance = transaction[2].toFixed(2)
    list.push([`${date} || ${credit} || ${debit} || ${balance}`])
  })
  return this.formattedList = list
}

Summary.prototype.print = function() {
  console.log("date || credit || debit || balance")
  this.formattedList.slice().reverse().forEach(function(transaction) {
    console.log(transaction)
  })
}
