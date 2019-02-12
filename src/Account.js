'use strict'

function Account () {
  this.history = []
}

Account.prototype.deposit = function(Number) {
  let depositDate = new Date().toLocaleDateString()
  let credit = ""
  this.history.push([depositDate, Number, credit])
}

Account.prototype.withdraw = function(Number) {
  this.history.push(-Number)
}
