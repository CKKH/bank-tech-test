/* global describe, it, expect, beforeEach */

'use strict'

function Printer(formatter = new Formatter()) {
  this.formatter = formatter
}

Printer.prototype.run = function (transactions) {
  let formattedTransactions = this.formatter.process(transactions)
  formattedTransactions.slice().reverse().forEach(function(transaction) {
    console.log(transaction)
  })
}
