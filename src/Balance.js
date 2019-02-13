'use strict'

function Balance() {
}

Balance.prototype.calculate = function (t) {
  if (t.length === 1) {
    t[0].push(t[0][1])
  } else if (t.length > 0) {
    let balance = (t[t.length -2][2]) + (t[t.length -1][1])
    t[t.length -1].push(balance)
  }
}
