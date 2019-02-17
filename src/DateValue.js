'use strict'

function DateValue () {
}

DateValue.prototype.extract = function (transaction) {
  return transaction[0]
}
