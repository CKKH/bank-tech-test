'use strict'

function Statement(account) {
  this.transactions = account.history
}

Statement.prototype.calculateBalance = function () {
  let balance = 0
  this.transactions.forEach(function(transaction) {
    balance += transaction[1]
    transaction.push(balance)
  })
}
