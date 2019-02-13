'use strict'

function Balance() {
}

Balance.prototype.calculate = function (transactions) {
  if (transactions.length == 1) {
    transactions[0].push(transactions[0][1])
  } else if (transactions.length > 0) {
    let balance = (transactions[transactions.length -2][1]) + (transactions[transactions.length -1][1])
    transactions[transactions.length -1].push(balance)
  }
}
