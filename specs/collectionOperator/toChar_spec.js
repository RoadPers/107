'use strict';

var toChar = require("../../practices/collectionOperator/toChar.js");

describe("把数字转换成一个字母或字母串", function () {
  // ascii
  //  a = 1
  //  z = 26
  //  aa = 27
  //  az = 52
  //  ba = 53

  it("1对应a", function () {
    let result = toChar(1);
    expect(result).toEqual('a')
  })

  it('26->z', function () {
    let result = toChar(26);
    expect(result).toEqual('z')
  })

  it("27对应aa", function () {
    let result = toChar(27);
    expect(result).toEqual('aa')
  })

  it("28对应ab", function () {
    let result = toChar(28);
    expect(result).toEqual('ab')
  })

  it("52对应az", function () {
    let result = toChar(52);
    expect(result).toEqual('az')
  })

  it("53对应ba", function () {
    let result = toChar(53);
    expect(result).toEqual('ba')
  })

  it("731对abc", function () {
    let result = toChar(731);
    expect(result).toEqual('abc')
  })

})
