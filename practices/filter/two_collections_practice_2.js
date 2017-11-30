'use strict';
let choose_common_elements = require('./two_collections_practice_1');

function choose_no_common_elements(collection_a, collection_b) {
  let results = [];
  let same_elements = choose_common_elements(collection_a, collection_b);
  results = collection_a.filter(x => same_elements.indexOf(x) == -1);
  return results;
}

module.exports = choose_no_common_elements;
