'use strict'

function Credit() {
}

Credit.prototype.generate = function (Number) {
  let depositDate = new Date().toLocaleDateString()
  let transaction = ([depositDate, Number])
  return transaction
}
