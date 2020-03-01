"use strict";

/* eslint-disable max-len */

/* eslint-disable no-var */

/* eslint-disable comma-spacing */

/* eslint-disable comma-dangle */
var test_execute_array = function test_execute_array(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_array', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        checkCompare = _parts$test2.checkCompare,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException;
    var array = parts.array;
    var isFirst = array.isFirst,
        isLast = array.isLast,
        isBothEdges = array.isBothEdges,
        subIndex = array.subIndex,
        subLength = array.subLength;
    var _array$operation = array.operation,
        insert = _array$operation.insert,
        add = _array$operation.add,
        deleteLength = _array$operation.deleteLength,
        deleteIndex = _array$operation.deleteIndex,
        includeFirst = _array$operation.includeFirst,
        includeLast = _array$operation.includeLast,
        includeBothEdges = _array$operation.includeBothEdges,
        excludeFirst = _array$operation.excludeFirst,
        excludeLast = _array$operation.excludeLast,
        excludeBothEdges = _array$operation.excludeBothEdges,
        trimFirst = _array$operation.trimFirst,
        trimLast = _array$operation.trimLast,
        trimBothEdges = _array$operation.trimBothEdges,
        popFirst = _array$operation.popFirst,
        popLast = _array$operation.popLast,
        pushFirst = _array$operation.pushFirst,
        pushLast = _array$operation.pushLast,
        remainFirst = _array$operation.remainFirst,
        remainLast = _array$operation.remainLast;
    var _parts$number = parts.number,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd;
    var equal = parts.equal;
    var isLowerCase = parts.isLowerCase,
        isUpperCase = parts.isUpperCase;

    var test_array_from = function test_array_from() {
      it('test_array_from', function () {
        function test() {
          // eslint-disable-next-line prefer-rest-params
          return array.from(arguments);
        }

        checkEqual(true, parts.equal([10, 20], test(10, 20)));
      });
    };

    var test_min = function test_min() {
      it('test_min', function () {
        checkEqual(null, array.min([]));
        checkEqual(5, array.min([5, 10, 15, 20]));
        checkEqual(1, array.min([5, 4, 3, 2, 1]));
        checkEqual(3, array.min([5, 4, 3])); // exception

        checkEqual(false, isThrown(function () {
          array.min([1, 2, 3]);
        }));
        checkEqual(false, isThrown(function () {
          array.min([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min('1,2,3');
        }));
        checkEqual(true, isThrown(function () {
          array.min([1, 2, '3']);
        }));
        checkEqual(true, isThrown(function () {
          array.min([1,, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min([, 1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min([1,, 3]);
        }));
      });
    };

    var test_max = function test_max() {
      it('test_max', function () {
        checkEqual(null, array.max([]));
        checkEqual(20, array.max([5, 10, 15, 20]));
        checkEqual(5, array.max([5, 4, 3, 2, 1]));
        checkEqual(3, array.max([1, 2, 3])); // exception

        checkEqual(false, isThrown(function () {
          array.max([1, 2, 3]);
        }));
        checkEqual(false, isThrown(function () {
          array.max([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max('1,2,3');
        }));
        checkEqual(true, isThrown(function () {
          array.max([1, 2, '3']);
        }));
        checkEqual(true, isThrown(function () {
          array.max([1,, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max([, 1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max([1,, 3]);
        }));
      });
    };

    var test_sum = function test_sum() {
      it('test_sum', function () {
        checkEqual(0, array.sum([]));
        checkEqual(1, array.sum([1]));
        checkEqual(0, array.sum([0]));
        checkEqual(7, array.sum([3, 4]));
        checkEqual(426, array.sum([52, 52, 70, 72, 80, 100]));
        checkEqual(154, array.sum([6, 9, 9, 10, 10, 10, 100]));
      });
    };

    var test_average = function test_average() {
      it('test_average', function () {
        checkEqual(null, array.average([]));
        checkEqual(1, array.average([1]));
        checkEqual(0, array.average([0]));
        checkEqual(3.5, array.average([3, 4]));
        checkEqual(71, array.average([70, 72, 80, 52, 52, 100]));
        checkEqual(22, array.average([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    var test_median = function test_median() {
      it('test_median', function () {
        checkEqual(71, array.median([70, 72, 80, 52, 52, 100]));
        checkEqual(10, array.median([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    var test_mode = function test_mode() {
      it('test_mode', function () {
        checkEqual([], array.mode([]));
        checkEqual([70], array.mode([70]));
        checkEqual([70, 52], array.mode([70, 70, 80, 52, 52, 100]));
        checkEqual([52], array.mode([70, 70, 80, 52, 52, 52, 100]));
        checkEqual([9, 10], array.mode([9, 9, 10, 10, 10, 9, 6]));
      });
    };

    var test_uniqe = function test_uniqe() {
      it('test_uniqe', function () {
        checkEqual([1, 2, 3, 4, 0], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_single = function test_single() {
      it('test_single', function () {
        checkEqual([1, 0], array.single([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_multiple = function test_multiple() {
      it('test_multiple', function () {
        checkEqual([2, 3, 4], array.multiple([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_filter = function test_filter() {
      it('test_filter', function () {
        checkEqual([0, 2, 4], array.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([0, 2, 4], array.filter([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([1, 3, 5], array.filter([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual([0, 2, 4], array.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_map = function test_map() {
      it('test_map', function () {
        checkEqual([true, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([true, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([false, true, false, true, false, true], array.map([0, 1, 2, 3, 4, 5], isOdd));
        checkEqual([0, 2, 4, 6, 8, 10], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return value * 2;
        })); // Object Named Parameter

        checkEqual([true, false, true, false, true, false], array.map({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_count = function test_count() {
      it('test_count', function () {
        checkEqual(3, array.count([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual(3, array.count([0, 1, 2, 3, 4, 5], isEven));
        checkEqual(3, array.count([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual(3, array.count({
          array: [0, 1, 2, 3, 4, 5],
          func: isOdd
        }));
      });
    };

    var test_findIndex = function test_findIndex() {
      it('test_findIndex', function () {
        checkEqual(0, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(1, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(2, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(-1, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(3, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(0, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual(3, array.findIndex({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_findBackIndex = function test_findBackIndex() {
      it('test_findBackIndex', function () {
        checkEqual(3, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(4, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(5, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(-1, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(5, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(2, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual(2, array.findBackIndex({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isLowerCase
        }));
      });
    };

    var test_find = function test_find() {
      it('test_find', function () {
        checkEqual('a', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual('b', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual('c', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(undefined, array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual('A', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual('a', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual('A', array.find({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_findBack = function test_findBack() {
      it('test_findBack', function () {
        checkEqual('A', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual('B', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual('C', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(undefined, array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual('C', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual('c', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual('c', array.findBack({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isLowerCase
        }));
      });
    };

    var test_some = function test_some() {
      it('test_some', function () {
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(false, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], isLowerCase));
        checkEqual(false, array.some(['A', 'B', 'C'], isLowerCase));
        checkEqual(true, array.some(['A', 'B', 'C'], function () {
          return true;
        }));
        checkEqual(false, array.some([], function () {
          return true;
        })); // Object Named Parameter

        checkEqual(true, array.some({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_all = function test_all() {
      it('test_all', function () {
        checkEqual(false, array.all(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(false, array.all(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(true, array.all(['A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(false, array.all(['A', 'B', 'C'], isLowerCase));
        checkEqual(true, array.all(['a', 'b', 'c'], isLowerCase));
        checkEqual(true, array.all(['A', 'B', 'C'], function () {
          return true;
        }));
        checkEqual(false, array.all([], function () {
          return true;
        })); // Object Named Parameter

        checkEqual(true, array.all({
          array: ['A', 'B', 'C'],
          func: isUpperCase
        }));
        checkEqual(false, array.all({
          array: ['A', 'B', 'c'],
          func: isUpperCase
        }));
      });
    };

    var test_isFirst = function test_isFirst() {
      it('test_isFirst', function () {
        checkEqual(true, isFirst([1, 2, 3], 1));
        checkEqual(false, isFirst([1, 2, 3], 2));
        checkEqual(true, isFirst(['A', 'B', 'C'], 'A'));
        checkEqual(false, isFirst(['A', 'B', 'C'], 'a'));
        checkEqual(false, isFirst(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(true, isFirst({
          array: ['A', 'B', 'C'],
          value: 'A'
        }));
        checkEqual(false, isFirst({
          array: ['A', 'B', 'C'],
          value: 'a'
        }));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast([1, 2, 3], 3));
        checkEqual(false, isLast([1, 2, 3], 2));
        checkEqual(true, isLast(['A', 'B', 'C'], 'C'));
        checkEqual(false, isLast(['A', 'B', 'C'], 'c'));
        checkEqual(false, isLast(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(true, isLast({
          array: ['A', 'B', 'C'],
          value: 'C'
        }));
        checkEqual(false, isLast({
          array: ['A', 'B', 'C'],
          value: 'c'
        }));
      });
    };

    var test_isBothEdges = function test_isBothEdges() {
      it('test_isBothEdges', function () {
        checkEqual(true, isBothEdges([1, 2, 1], 1));
        checkEqual(false, isBothEdges([1, 2, 1], 2));
        checkEqual(true, isBothEdges(['A', 'B', 'A'], 'A'));
        checkEqual(false, isBothEdges(['A', 'B', 'A'], 'a'));
        checkEqual(false, isBothEdges(['A', 'B', 'A'], 'B'));
        checkEqual(false, isBothEdges(['A', 'B', 'A', 'D'], 'A'));
        checkEqual(true, isBothEdges(['A', 'B', 'A', 'D'], 'A', 'D'));
        checkEqual(true, isBothEdges(['{', 'A', 'B', '}'], '{', '}'));
        checkEqual(true, isBothEdges(['{', '{', '}', '}'], '{', '}'));
        checkEqual(false, isBothEdges(['A', '{', 'B', '}'], '{', '}'));
        checkEqual(false, isBothEdges(['{', 'A', 'B', '}'], '}', '}'));
        checkEqual(false, isBothEdges(['{', 'A', 'B', '}'], '{', '{'));
        checkEqual(false, isBothEdges([1], 1));
        checkEqual(true, isBothEdges([1, 1], 1)); // Object Named Parameter

        checkEqual(true, isBothEdges({
          array: ['A', 'B', 'A'],
          value: 'A'
        }));
        checkEqual(false, isBothEdges({
          array: ['A', 'B', 'A'],
          value: 'a'
        }));
        checkEqual(true, isBothEdges({
          array: ['A', 'B', 'A'],
          valueFirst: 'A'
        }));
        checkEqual(false, isBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A'
        }));
        checkEqual(true, isBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_array_subIndex = function test_array_subIndex() {
      it('test_array_subIndex', function () {
        var array1 = [0, 1, 2];
        checkEqual([1], subIndex(array1, 1, 1));
        checkEqual([0, 1], subIndex(array1, 0, 1));
        checkEqual([1, 2], subIndex(array1, 1, 2));
        checkEqual([0, 1, 2], array1); // Object Named Parameter

        checkEqual(['A', 'B'], subIndex({
          array: ['A', 'B', 'A'],
          indexFirst: 0,
          indexLast: 1
        }));
      });
    };

    var test_array_subLength = function test_array_subLength() {
      it('test_array_subLength', function () {
        var array1 = [0, 1, 2];
        checkEqual([1], subLength(array1, 1, 1));
        checkEqual([0, 1], subLength(array1, 0, 2));
        checkEqual([1, 2], subLength(array1, 1, 2));
        checkEqual([0, 1, 2], array1); // Object Named Parameter

        checkEqual(['A', 'B'], subLength({
          array: ['A', 'B', 'A'],
          index: 0,
          length: 2
        }));
      });
    };

    var test_operation_insert = function test_operation_insert() {
      it('test_operation_insert', function () {
        checkEqual([1, 2, 3], insert([1, 2, 3], []));
        checkEqual([0, 1, 2, 3], insert([1, 2, 3], [0]));
        checkEqual([0, 1, 2, 3], insert([1, 2, 3], [0], 0));
        checkEqual([1, 0, 2, 3], insert([1, 2, 3], [0], 1));
        checkEqual([1, 2, 0, 3], insert([1, 2, 3], [0], 2));
        checkEqual([1, 2, 3, 0], insert([1, 2, 3], [0], 3));
        checkEqual([-1, 0, 1, 2, 3], insert([1, 2, 3], [-1, 0]));
        checkEqual([1, -1, 0, 2, 3], insert([1, 2, 3], [-1, 0], 1)); // exception

        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], -1);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual([1, 2, 3, 0], insert({
          array: [1, 2, 3],
          values: [0],
          index: 3
        }));
      });
    };

    var test_operation_add = function test_operation_add() {
      it('test_operation_add', function () {
        checkEqual([1, 2, 3], add([1, 2, 3], []));
        checkEqual([1, 2, 3, 0], add([1, 2, 3], [0]));
        checkEqual([0, 1, 2, 3], add([1, 2, 3], [0], -1));
        checkEqual([1, 0, 2, 3], add([1, 2, 3], [0], 0));
        checkEqual([1, 2, 0, 3], add([1, 2, 3], [0], 1));
        checkEqual([1, 2, 3, 0], add([1, 2, 3], [0], 2));
        checkEqual([1, 2, 3, -1, 0], add([1, 2, 3], [-1, 0]));
        checkEqual([1, 2, -1, 0, 3], add([1, 2, 3], [-1, 0], 1)); // exception

        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], -2);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual([1, 2, 3, 0], add({
          array: [1, 2, 3],
          values: [0],
          index: 2
        }));
      });
    };

    var test_operation_deleteLength = function test_operation_deleteLength() {
      it('test_operation_deleteLength', function () {
        checkEqual([1, 3], deleteLength([1, 2, 3], 1, 1));
        checkEqual([3], deleteLength([1, 2, 3], 0, 2));
        checkEqual([1], deleteLength([1, 2, 3], 1, 2)); // exception

        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], 1, 0);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 2);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 3);
        }));
        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], -1, 2);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 3], deleteLength({
          array: [0, 1, 2, 3],
          index: 1,
          length: 2
        }));
      });
    };

    var test_operation_deleteIndex = function test_operation_deleteIndex() {
      it('test_operation_deleteIndex', function () {
        checkEqual([1, 3], deleteIndex([1, 2, 3], 1, 1));
        checkEqual([3], deleteIndex([1, 2, 3], 0, 1));
        checkEqual([1], deleteIndex([1, 2, 3], 1, 2)); // exception

        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], 1, 0);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 2);
        }));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          index: 1
        }));
        checkEqual([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexFirst: 1
        }));
        checkEqual([0, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexFirst: 1,
          indexLast: 2
        }));
      });
    };

    var test_operation_includeFirst = function test_operation_includeFirst() {
      it('test_operation_includeFirst', function () {
        checkEqual([1, 2, 3], includeFirst([1, 2, 3], 1));
        checkEqual([2, 1, 2, 3], includeFirst([1, 2, 3], 2));
        checkEqual(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], 'A'));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], 'a'));
        checkEqual(['B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          value: 'A'
        }));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          value: 'a'
        }));
      });
    };

    var test_operation_includeLast = function test_operation_includeLast() {
      it('test_operation_includeLast', function () {
        checkEqual([1, 2, 3], includeLast([1, 2, 3], 3));
        checkEqual([1, 2, 3, 2], includeLast([1, 2, 3], 2));
        checkEqual(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], 'C'));
        checkEqual(['A', 'B', 'C', 'c'], includeLast(['A', 'B', 'C'], 'c'));
        checkEqual(['A', 'B', 'C', 'B'], includeLast(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeLast({
          array: ['A', 'B', 'C'],
          value: 'C'
        }));
        checkEqual(['A', 'B', 'C', 'c'], includeLast({
          array: ['A', 'B', 'C'],
          value: 'c'
        }));
      });
    };

    var test_operation_includeBothEdges = function test_operation_includeBothEdges() {
      it('test_operation_includeBothEdges', function () {
        checkEqual([1, 2, 1], includeBothEdges([1, 2, 1], 1));
        checkEqual([1, 1, 2, 3, 1], includeBothEdges([1, 2, 3], 1));
        checkEqual(['A', 'B', 'A'], includeBothEdges(['A', 'B', 'A'], 'A'));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEdges(['A', 'B', 'A'], 'a'));
        checkEqual(['A', 'A', 'B', 'C', 'A'], includeBothEdges(['A', 'B', 'C'], 'A'));
        checkEqual(['{', '}'], includeBothEdges(['{', '}'], '{', '}'));
        checkEqual(['{', 'A', '}'], includeBothEdges(['{', 'A', '}'], '{', '}'));
        checkEqual(['{', 'A', '{', '}', '}'], includeBothEdges(['A', '{', '}'], '{', '}'));
        checkEqual(['A', 'A'], includeBothEdges(['A', 'A'], 'A'));
        checkEqual(['A', 'A', 'A'], includeBothEdges(['A'], 'A'));
        checkEqual(['A', '', 'A'], includeBothEdges([''], 'A'));
        checkEqual(['A', 'A'], includeBothEdges([], 'A')); // exception

        checkEqual(true, isThrownException(function () {
          includeBothEdges(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['A', 'B', 'A'], includeBothEdges({
          array: ['A', 'B', 'A'],
          value: 'A'
        }));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEdges({
          array: ['A', 'B', 'A'],
          value: 'a'
        }));
        checkEqual(['A', 'B', 'A'], includeBothEdges({
          array: ['A', 'B', 'A'],
          valueFirst: 'A'
        }));
        checkEqual(['A', 'A', 'B', 'A', 'D', 'A'], includeBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A'
        }));
        checkEqual(['A', 'B', 'A', 'D'], includeBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_operation_excludeFirst = function test_operation_excludeFirst() {
      it('test_operation_excludeFirst', function () {
        checkEqual([2, 3], excludeFirst([1, 2, 3], 1));
        checkEqual([1, 2, 3], excludeFirst([1, 2, 3], 2));
        checkEqual(['B', 'C'], excludeFirst(['A', 'B', 'C'], 'A'));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], 'a'));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(['B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          value: 'A'
        }));
        checkEqual(['A', 'B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          value: 'a'
        }));
      });
    };

    var test_operation_excludeLast = function test_operation_excludeLast() {
      it('test_operation_excludeLast', function () {
        checkEqual([1, 2], excludeLast([1, 2, 3], 3));
        checkEqual([1, 2, 3], excludeLast([1, 2, 3], 2));
        checkEqual(['A', 'B'], excludeLast(['A', 'B', 'C'], 'C'));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], 'c'));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(['A', 'B'], excludeLast({
          array: ['A', 'B', 'C'],
          value: 'C'
        }));
        checkEqual(['A', 'B', 'C'], excludeLast({
          array: ['A', 'B', 'C'],
          value: 'c'
        }));
      });
    };

    var test_operation_excludeBothEdges = function test_operation_excludeBothEdges() {
      it('test_operation_excludeBothEdges', function () {
        checkEqual([2], excludeBothEdges([1, 2, 1], 1));
        checkEqual([1, 2, 3], excludeBothEdges([1, 2, 3], 1));
        checkEqual(['B'], excludeBothEdges(['A', 'B', 'A'], 'A'));
        checkEqual(['A', 'B', 'A'], excludeBothEdges(['A', 'B', 'A'], 'a'));
        checkEqual(['A', 'B', 'C'], excludeBothEdges(['A', 'B', 'C'], 'A'));
        checkEqual([], excludeBothEdges(['{', '}'], '{', '}'));
        checkEqual(['A'], excludeBothEdges(['{', 'A', '}'], '{', '}'));
        checkEqual(['A', '{', '}'], excludeBothEdges(['A', '{', '}'], '{', '}'));
        checkEqual([], excludeBothEdges(['A', 'A'], 'A'));
        checkEqual(['A'], excludeBothEdges(['A'], 'A'));
        checkEqual([''], excludeBothEdges([''], 'A'));
        checkEqual([], excludeBothEdges([], 'A')); // exception

        checkEqual(true, isThrownException(function () {
          excludeBothEdges(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], excludeBothEdges({
          array: ['A', 'B', 'A'],
          value: 'A'
        }));
        checkEqual(['A', 'B', 'A'], excludeBothEdges({
          array: ['A', 'B', 'A'],
          value: 'a'
        }));
        checkEqual(['B'], excludeBothEdges({
          array: ['A', 'B', 'A'],
          valueFirst: 'A'
        }));
        checkEqual(['A', 'B', 'A', 'D'], excludeBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A'
        }));
        checkEqual(['B', 'A'], excludeBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_operation_trimFirst = function test_operation_trimFirst() {
      it('test_operation_trimFirst', function () {
        checkEqual([2, 3], trimFirst([1, 2, 3], 1));
        checkEqual([2, 3], trimFirst([1, 1, 1, 2, 3], 1));
        checkEqual([], trimFirst([1, 1, 1, 1, 1], 1));
        checkEqual([1, 2, 3], trimFirst([1, 2, 3], 2));
        checkEqual(['B', 'C'], trimFirst(['A', 'B', 'C'], 'A'));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], 'a'));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(['B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          value: 'A'
        }));
        checkEqual(['A', 'B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          value: 'a'
        }));
      });
    };

    var test_operation_trimLast = function test_operation_trimLast() {
      it('test_operation_trimLast', function () {
        checkEqual([1, 2], trimLast([1, 2, 3], 3));
        checkEqual([1, 2], trimLast([1, 2, 3, 3, 3], 3));
        checkEqual([], trimLast([3, 3, 3, 3, 3], 3));
        checkEqual([1, 2, 3], trimLast([1, 2, 3], 2));
        checkEqual(['A', 'B'], trimLast(['A', 'B', 'C'], 'C'));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], 'c'));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], 'B')); // Object Named Parameter

        checkEqual(['A', 'B'], trimLast({
          array: ['A', 'B', 'C'],
          value: 'C'
        }));
        checkEqual(['A', 'B', 'C'], trimLast({
          array: ['A', 'B', 'C'],
          value: 'c'
        }));
      });
    };

    var test_operation_trimBothEdges = function test_operation_trimBothEdges() {
      it('test_operation_trimBothEdges', function () {
        checkEqual([2], trimBothEdges([1, 2, 1], 1));
        checkEqual([2], trimBothEdges([1, 1, 2, 1, 1, 1], 1));
        checkEqual([], trimBothEdges([1, 1, 1], 1));
        checkEqual([2, 3], trimBothEdges([1, 2, 3], 1));
        checkEqual(['B'], trimBothEdges(['A', 'B', 'A'], 'A'));
        checkEqual(['A', 'B', 'A'], trimBothEdges(['A', 'B', 'A'], 'a'));
        checkEqual(['B', 'C'], trimBothEdges(['A', 'B', 'C'], 'A'));
        checkEqual([], trimBothEdges(['{', '}'], '{', '}'));
        checkEqual([], trimBothEdges(['{', '{', '{', '}', '}', '}'], '{', '}'));
        checkEqual([], trimBothEdges(['{', '{', '{', '}'], '{', '}'));
        checkEqual(['A'], trimBothEdges(['{', 'A', '}'], '{', '}'));
        checkEqual(['A', '{'], trimBothEdges(['A', '{', '}'], '{', '}'));
        checkEqual([], trimBothEdges(['A', 'A'], 'A'));
        checkEqual([], trimBothEdges(['A'], 'A'));
        checkEqual([''], trimBothEdges([''], 'A'));
        checkEqual([], trimBothEdges([], 'A')); // exception

        checkEqual(true, isThrownException(function () {
          trimBothEdges(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], trimBothEdges({
          array: ['A', 'B', 'A'],
          value: 'A'
        }));
        checkEqual(['A', 'B', 'A'], trimBothEdges({
          array: ['A', 'B', 'A'],
          value: 'a'
        }));
        checkEqual(['B'], trimBothEdges({
          array: ['A', 'B', 'A'],
          valueFirst: 'A'
        }));
        checkEqual(['B', 'A', 'D'], trimBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A'
        }));
        checkEqual(['B', 'A'], trimBothEdges({
          array: ['A', 'B', 'A', 'D'],
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_operation_popFirst = function test_operation_popFirst() {
      it('test_operation_popFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(1, popFirst(array1));
        checkEqual([2, 3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual('A', popFirst(array1));
        checkEqual(['B', 'C'], array1);
      });
    };

    var test_operation_popLast = function test_operation_popLast() {
      it('test_operation_popLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(3, popLast(array1));
        checkEqual([1, 2], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual('C', popLast(array1));
        checkEqual(['A', 'B'], array1);
      });
    };

    var test_operation_pushFirst = function test_operation_pushFirst() {
      it('test_operation_pushFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushFirst(array1, 0));
        checkEqual([0, 1, 2, 3], array1);
        checkEqual(5, pushFirst(array1, 0));
        checkEqual([0, 0, 1, 2, 3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushFirst(array1, 'D'));
        checkEqual(['D', 'A', 'B', 'C'], array1);
        checkEqual(5, pushFirst(array1, 'D'));
        checkEqual(['D', 'D', 'A', 'B', 'C'], array1);
      });
    };

    var test_operation_pushLast = function test_operation_pushLast() {
      it('test_operation_pushLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4], array1);
        checkEqual(5, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4, 4], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D'], array1);
        checkEqual(5, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D', 'D'], array1);
      });
    };

    var test_operation_remainFirst = function test_operation_remainFirst() {
      it('test_operation_remainFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 4));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 3));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2], remainFirst(array1, 2));
        checkEqual([1, 2], array1);
        var array1 = [1, 2, 3];
        checkEqual([1], remainFirst(array1, 1));
        checkEqual([1], array1);
        var array1 = [1, 2, 3];
        checkEqual([], remainFirst(array1, 0));
        checkEqual([], array1); // Object Named Parameter

        checkEqual(['A', 'B'], remainFirst({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_operation_remainLast = function test_operation_remainLast() {
      it('test_operation_remainLast', function () {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 4));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 3));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([2, 3], remainLast(array1, 2));
        checkEqual([2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([3], remainLast(array1, 1));
        checkEqual([3], array1);
        var array1 = [1, 2, 3];
        checkEqual([], remainLast(array1, 0));
        checkEqual([], array1); // Object Named Parameter

        checkEqual(['B', 'A'], remainLast({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    test_array_from();
    test_min();
    test_max();
    test_sum();
    test_average();
    test_median();
    test_mode();
    test_uniqe();
    test_multiple();
    test_filter();
    test_map();
    test_count();
    test_findIndex();
    test_findBackIndex();
    test_find();
    test_findBack();
    test_some();
    test_all();
    test_isFirst();
    test_isLast();
    test_isBothEdges();
    test_array_subIndex();
    test_array_subLength();
    test_operation_insert();
    test_operation_add();
    test_operation_deleteLength();
    test_operation_deleteIndex();
    test_operation_includeFirst();
    test_operation_includeLast();
    test_operation_includeBothEdges();
    test_operation_excludeFirst();
    test_operation_excludeLast();
    test_operation_excludeBothEdges();
    test_operation_trimFirst();
    test_operation_trimLast();
    test_operation_trimBothEdges();
    test_operation_popFirst();
    test_operation_popLast();
    test_operation_pushFirst();
    test_operation_pushLast();
    test_operation_remainFirst();
    test_operation_remainLast();
  });
};

module.exports = {
  test_execute_array: test_execute_array
};