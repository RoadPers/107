'use strict';
let get_integer_interval = require("./get_integer_interval.js");

const DISTANCE = 97 - 1;//'a'的ascii马为97

function toChar(num) {
  let char = String.fromCharCode(num + DISTANCE);
  return char;
}

function numsToChar(numArray) {
  let results = [];
  for (let num of numArray) {
    let char = toChar(num);
    results.push(char);
  }
  return results;
}

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let numArray = get_integer_interval(number_a, number_b);
  let results = numsToChar(numArray);
  return results;
}

module.exports = get_letter_interval;
