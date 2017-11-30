'use strict';

function double_to_one(collection) {
  let results = [];
  for (let item of collection) {
    if (item instanceof Array) {
      for (let num of item) {
        results.push(num);
      }
    }else {
      results.push(item);
    }
  }
  return results;
}

module.exports = double_to_one;
