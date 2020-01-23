"use strict";

/* eslint-disable comma-spacing */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_string = function test_execute_string(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_string', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException;
    var _parts$string = parts.string,
        matchFormat = _parts$string.matchFormat,
        includes = _parts$string.includes,
        replaceAll = _parts$string.replaceAll;

    var test_matchFormat = function test_matchFormat() {
      it('test_matchFormat', function () {
        checkEqual(true, matchFormat('number', '123'));
        checkEqual(false, matchFormat('number', '12a'));
        checkEqual(false, matchFormat('number', '-123'));
        checkEqual(true, matchFormat('integer', '-123'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/9/5'));
        checkEqual(true, matchFormat('date_y/m/d', '19/1/1'));
        checkEqual(true, matchFormat('date_y/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '9//1'));
        checkEqual(false, matchFormat('date_y/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/mm/dd', '2019/11/05'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-9-9'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-9-5'));
        checkEqual(true, matchFormat('date_y-m-d', '19-1-1'));
        checkEqual(true, matchFormat('date_y-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '9--1'));
        checkEqual(false, matchFormat('date_y-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-mm-dd', '2019-11-05'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/9/9')); // Object Named Parameter

        checkEqual(false, matchFormat({
          formatName: 'number',
          value: '-123'
        }));
        checkEqual(true, matchFormat({
          formatName: 'integer',
          value: '-123'
        })); // Exception

        checkEqual(false, isThrownException(function () {
          matchFormat('integer', 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat(null, 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('integer', 123);
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('aaa', 'abc');
        }, new RangeError().name), 'test matchFormat exception');
      });
    };

    var test_replaceAll = function test_replaceAll() {
      it('test_replaceAll', function () {
        checkEqual('aaaa', replaceAll('abab', 'b', 'a'));
        checkEqual('aaaa', replaceAll('abab', 'ab', 'aa'));
        checkEqual('abcabc', replaceAll('abab', 'ab', 'abc')); // Object Named Parameter

        checkEqual('abcabc', replaceAll({
          str: 'abab',
          before: 'ab',
          after: 'abc'
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAll('1212', '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll(1212, '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', 12, '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', '12', 123);
        }));
      });
    };

    test_matchFormat();
    test_replaceAll();
  });
};

module.exports = {
  test_execute_string: test_execute_string
};