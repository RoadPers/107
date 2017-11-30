'use strict';

function choose_common_elements(collection_a, collection_b) {
  let results = [];
  for (let itemOfa of collection_a) {
    for (let itemOfb of collection_b) {
      if( itemOfb === itemOfa) {
        results.push(itemOfb);
      }
    }
  }
  results = results.filter((x, index, self) => self.indexOf(x) == index);
  return results;
}

module.exports = choose_common_elements;
