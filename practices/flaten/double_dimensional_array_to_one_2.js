'use strict';
let double_to_one = require('./double_dimensional_array_to_one_1');

function double_to_one_and_deduplicate(collection) {
  let results = [];

  results = double_to_one(collection);

  results = results.filter((element, index, self) => self.indexOf(element) == index);

  return results;
}

module.exports = double_to_one_and_deduplicate;
