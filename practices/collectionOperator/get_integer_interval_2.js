'use strict';
let get_integet_interval = require("./get_integer_interval.js");
let collect_all_even = require("./collect_all_even.js");

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  result = get_integet_interval(number_a, number_b);
  result = collect_all_even(result);
  return result;
}

module.exports = get_integer_interval_2;
