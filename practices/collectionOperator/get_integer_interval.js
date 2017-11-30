'use strict';

function get_integer_interval(a, b) {
  let numbers = [];

  if(a <= b) {
    for (a ; a <= b; a++) {
      numbers.push(a);
    }
    return numbers;
  }
  if (a > b) {
    for (a ; a >= b; a--) {
      numbers.push(a);
    }
    return numbers;
  }
}

module.exports = get_integer_interval;

