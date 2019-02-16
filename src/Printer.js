/* global describe, it, expect, beforeEach */

'use strict'

function Printer (formatter = new Formatter()) {
  this.formatter = formatter
}

Printer.prototype.run = function (transactions) {
  let formattedTransactions = this.formatter.process(transactions, assignDate,
    assignCredit, assignDebit, assignBalance)
  let statement = formattedTransactions.join('\n')
  return statement
}
