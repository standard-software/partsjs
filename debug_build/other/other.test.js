"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_other = void 0;

var test_execute_other = function test_execute_other(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_other', function () {
    var test_split = function test_split() {
      it('test_split', function () {
        checkEqual(3, 'a,b,c'.split(',').length);
        checkEqual(4, 'a,b,c,'.split(',').length);
        checkEqual('a', 'a,b,c,'.split(',')[0]);
        checkEqual('', 'a,b,c,'.split(',')[3]);
      });
    };

    test_split();
  });
};

exports.test_execute_other = test_execute_other;
var _default = {
  test_execute_other: test_execute_other
};
exports["default"] = _default;