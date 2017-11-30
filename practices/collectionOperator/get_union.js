'use strict';
let get_intersection = require("./get_intersection.js");

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for (let num of collection_b) {
    collection_a.push(num);
  }

  let results = collection_a.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
  return results;
}

module.exports = get_union;

