'use strict'

//num范围 [1,26]
const numberOfChar = 26;
const DISTANCE = 97

function toChar(num) {
  num --;
  return String.fromCharCode(num + DISTANCE);

}
function toChars(num) {
  let str = '';
  // if (num <= 26) {
  //   str = toChar(num);
  // }
  let yushu;
  while ( num > 0) {
    yushu = num % 26;
    if (yushu == 0) {
      yushu = 26;
      num--;
    }
    str = toChar(yushu) + str;
    num = parseInt(num / 26);
  }

  return str;
}

module.exports = toChars;
