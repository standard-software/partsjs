"use strict";

var parts = {};
parts.VERSION = '0.2.2 beta';

parts.test_babel = function () {
  var array = [1, 2, 3];
  console.log(array.map(function (n) {
    return Math.pow(n, 2);
  }));
};

module.exports = parts;