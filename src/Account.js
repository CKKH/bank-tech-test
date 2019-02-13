'use strict'

function Account (balance = new Balance()) {
  this.transactions = []
  this.statement = []
  this.balance = balance
}

Account.prototype.deposit = function(Number) {
  let depositDate = new Date().toLocaleDateString()
  this.transactions.push([depositDate, Number])
  this.balance.calculate(this.transactions)
}

Account.prototype.withdraw = function(Number) {
  let withdrawDate = new Date().toLocaleDateString()
  this.transactions.push([withdrawDate, - Number])
  this.balance.calculate(this.transactions)
}
