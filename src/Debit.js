'use strict'

function Debit() {
}

Debit.prototype.generate = function (Number) {
  let withdrawalDate = new Date().toLocaleDateString()
  let transaction = ([withdrawalDate, - Number])
  return transaction
}
