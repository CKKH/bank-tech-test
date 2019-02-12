function Account () {
  this.history = []
}

Account.prototype.deposit = function(Number) {
  date = new Date().toLocaleDateString()
  this.history.push(date, Number)
}
