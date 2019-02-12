function Account () {
  this.history = []
}

Account.prototype.deposit = function(Number) {
  this.history.push(Number)
}
