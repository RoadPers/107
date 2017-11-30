'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let numbers = [];
  let set_a = new Set(collection_a);
  let set_b = new Set(collection_b);

  for (let itemOfb of set_b) {
    for (let itemOfa of set_a) {
      if (itemOfa === itemOfb) {
        numbers.push(itemOfb);
      }
    }
  }
  return numbers;
}

module.exports = get_intersection;
