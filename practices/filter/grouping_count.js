'use strict';

function grouping_count(collection) {
  let results = {};
  collection.forEach(function (num) {
    if(typeof results[num] === 'undefined') {
      results[num] = 1;
    }else{
      results[num] ++;
    }
  })
  return results;
}

module.exports = grouping_count;
