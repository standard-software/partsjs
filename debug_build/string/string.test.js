"use strict";

/* eslint-disable comma-spacing */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_string = function test_execute_string(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe(test_execute_string.name, function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException;
    var _parts$string = parts.string,
        matchFormat = _parts$string.matchFormat,
        includes = _parts$string.includes,
        replaceAll = _parts$string.replaceAll;

    var test_matchFormat = function test_matchFormat() {
      describe(test_matchFormat.name, function () {
        it(test_matchFormat.name, function () {
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
          checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/9/9')); // Parameter Args

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
      });
    };

    var test_includes = function test_includes() {
      describe(test_includes.name, function () {
        it(test_includes.name, function () {
          checkEqual(true, includes('abcdef', ['ab']));
          checkEqual(true, includes('abcdef', ['cd']));
          checkEqual(false, includes('abcdef', ['ac']));
          checkEqual(false, includes('abcdef', ['ac', 'bd']));
          checkEqual(true, includes('abcdef', ['ac', 'de']));
          checkEqual(false, includes('abcdef', ['ac', 'bd', '']));
          checkEqual(true, includes('abcdef', ['ac', 'de', '']));
          checkEqual(false, includes('abcdef', ['']));
          checkEqual(true, includes('123', ['1'])); // exception

          checkEqual(true, isThrownException(function () {
            includes('abcdef', 'abc');
          }, new TypeError().name));
          checkEqual(false, isThrownException(function () {
            includes('123', ['1']);
          }, new TypeError().name));
          checkEqual(true, isThrownException(function () {
            includes('123', [1]);
          }, new TypeError().name)); // Parameter Args

          checkEqual(true, includes({
            value: 'abcdef',
            compareArray: ['cd']
          }));
          checkEqual(false, includes({
            value: 'abcdef',
            compareArray: ['ac']
          })); // exception

          checkEqual(false, isThrown(function () {
            includes({
              value: '123',
              compareArray: ['123']
            });
          }), 'test_includes thrown 1');
          checkEqual(false, isThrown(function () {
            includes({
              value: '123',
              compareArray: []
            });
          }), 'test_includes thrown 2');
          checkEqual(true, isThrown(function () {
            includes({
              value: '123',
              compareArray: [123]
            });
          }), 'test_includes thrown 3');
          checkEqual(true, isThrown(function () {
            includes({
              value: '123',
              compareArray: 123
            });
          }, function (e) {
            return e.name === new TypeError().name && e.message === 'includes args(compareArray) is not array';
          }), 'test_includes thrown 4');
        });
      });
    };

    var test_replaceAll = function test_replaceAll() {
      describe(test_replaceAll.name, function () {
        it(test_replaceAll.name, function () {
          checkEqual('aaaa', replaceAll('abab', 'b', 'a'));
          checkEqual('aaaa', replaceAll('abab', 'ab', 'aa'));
          checkEqual('abcabc', replaceAll('abab', 'ab', 'abc')); // parameter args

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
      });
    };

    console.log('  test string.js');
    test_matchFormat();
    test_includes();
    test_replaceAll();
  });
};

module.exports = {
  test_execute_string: test_execute_string
};