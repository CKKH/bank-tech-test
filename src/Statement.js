'use strict'

function Statement (account) {
  this.transactions = account.history
  this.balance = 0
}

Statement.prototype.calculateBalance = function () {
  let balance = this.balance
  this.transactions.forEach(function(transaction) {
    balance += transaction[1]
    transaction.push(balance)
  })
}
