/* global describe, it, expect, beforeEach */

'use strict'

function Printer(formatter = new Formatter()) {
  this.formatter = formatter
}

Printer.prototype.run = function (transactions) {
  let formattedTransactions = this.formatter.process(transactions)
  let statement = formattedTransactions.slice().reverse().join('\n')
  console.log(statement)
  return statement
}
