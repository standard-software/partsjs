"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_date = void 0;

var test_execute_date = function test_execute_date(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException,
      testCounter = _parts$test.testCounter;
  var Today = parts.date.Today;
  describe('test_execute_date', function () {
    var test_Today = function test_Today() {
      it('test_Today', function () {
        checkEqual(new Date().toString(), Today().toString());
      });
    };

    test_Today();
  });
};

exports.test_execute_date = test_execute_date;
var _default = {
  test_execute_date: test_execute_date
};
exports["default"] = _default;