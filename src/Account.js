'use strict'

function Account (credit = new Credit(),
  debit = new Debit(),
  balance = new Balance(),
  printer = new Printer(new Formatter())) {
  this.transactions = []
  this.credit = credit
  this.debit = debit
  this.balance = balance
  this.printer = printer
}

Account.prototype.deposit = function (Number) {
  this.transactions.push(this.credit.generate(Number))
  this.balance.calculate(this.transactions)
  return this.transactions[this.transactions.length - 1]
}

Account.prototype.withdraw = function (Number) {
  this.transactions.push(this.debit.generate(Number))
  this.balance.calculate(this.transactions)
  return this.transactions[this.transactions.length -1]
}

Account.prototype.statement = function () {
  let statement = this.printer.run(this.transactions)
  return statement
}
