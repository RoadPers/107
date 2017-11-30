'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let results = [];
  results = collection_a.filter( x => {
    for (let num of collection_b) {
      if (x % num === 0) {
        return true;
      }
    }
  })
  return results;
}

module.exports = choose_divisible_integer;
