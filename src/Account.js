'use strict'

function Account () {
  this.history = []
}

Account.prototype.deposit = function(Number, balance) {
  let depositDate = new Date().toLocaleDateString()
  this.history.push([depositDate, Number])
}

Account.prototype.withdraw = function(Number) {
  let withdrawDate = new Date().toLocaleDateString()
  this.history.push([withdrawDate, - Number])
}
