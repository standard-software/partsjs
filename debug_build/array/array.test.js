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
        isBothEnds = array.isBothEnds,
        subIndex = array.subIndex,
        subLength = array.subLength,
        subFirst = array.subFirst,
        subLast = array.subLast;
    var _array$operation = array.operation,
        insert = _array$operation.insert,
        add = _array$operation.add,
        deleteLength = _array$operation.deleteLength,
        deleteIndex = _array$operation.deleteIndex,
        deleteFirst = _array$operation.deleteFirst,
        deleteLast = _array$operation.deleteLast,
        includeFirst = _array$operation.includeFirst,
        includeLast = _array$operation.includeLast,
        includeBothEnds = _array$operation.includeBothEnds,
        excludeFirst = _array$operation.excludeFirst,
        excludeLast = _array$operation.excludeLast,
        excludeBothEnds = _array$operation.excludeBothEnds,
        trimFirst = _array$operation.trimFirst,
        trimLast = _array$operation.trimLast,
        trimBothEnds = _array$operation.trimBothEnds,
        popFirst = _array$operation.popFirst,
        popLast = _array$operation.popLast,
        pushFirst = _array$operation.pushFirst,
        pushLast = _array$operation.pushLast,
        remainFirst = _array$operation.remainFirst,
        remainLast = _array$operation.remainLast;
    var _parts$number = parts.number,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd;
    var isLowerCase = parts.isLowerCase,
        isUpperCase = parts.isUpperCase;
    var equal = parts.compare.equal;

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
        checkEqual(true, equal([], array.mode([])));
        checkEqual(true, equal([70], array.mode([70])));
        checkEqual(true, equal([70, 52], array.mode([70, 70, 80, 52, 52, 100])));
        checkEqual(true, equal([52], array.mode([70, 70, 80, 52, 52, 52, 100])));
        checkEqual(true, equal([9, 10], array.mode([9, 9, 10, 10, 10, 9, 6])));
      });
    };

    var test_uniqe = function test_uniqe() {
      it('test_uniqe', function () {
        checkEqual(true, equal([1, 2, 3, 4, 0], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0])));
      });
    };

    var test_single = function test_single() {
      it('test_single', function () {
        checkEqual(true, equal([1, 0], array.single([1, 2, 3, 4, 4, 4, 3, 2, 0])));
      });
    };

    var test_multiple = function test_multiple() {
      it('test_multiple', function () {
        checkEqual(true, equal([2, 3, 4], array.multiple([1, 2, 3, 4, 4, 4, 3, 2, 0])));
      });
    };

    var test_filter = function test_filter() {
      it('test_filter', function () {
        checkEqual(true, equal([2, 4], array.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        })));
        checkEqual(true, equal([2, 4], array.filter([0, 1, 2, 3, 4, 5], isEven)));
        checkEqual(true, equal([1, 3, 5], array.filter([0, 1, 2, 3, 4, 5], isOdd))); // Object Named Parameter

        checkEqual(true, equal([2, 4], array.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        })));
      });
    };

    var test_map = function test_map() {
      it('test_map', function () {
        checkEqual(true, equal([false, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        })));
        checkEqual(true, equal([false, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], isEven)));
        checkEqual(true, equal([false, true, false, true, false, true], array.map([0, 1, 2, 3, 4, 5], isOdd)));
        checkEqual(true, equal([0, 2, 4, 6, 8, 10], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return value * 2;
        }))); // Object Named Parameter

        checkEqual(true, equal([false, false, true, false, true, false], array.map({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        })));
      });
    };

    var test_count = function test_count() {
      it('test_count', function () {
        checkEqual(2, array.count([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual(2, array.count([0, 1, 2, 3, 4, 5], isEven));
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
        checkEqual(true, isFirst([1, 2, 3], [1]));
        checkEqual(true, isFirst([1, 2, 3], [1, 2]));
        checkEqual(false, isFirst([1, 2, 3], [1, 3]));
        checkEqual(false, isFirst([1, 2, 3], [2]));
        checkEqual(true, isFirst(['A', 'B', 'C'], ['A']));
        checkEqual(true, isFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['a']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['B'])); // Object Named Parameter

        checkEqual(true, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(false, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast([1, 2, 3], [3]));
        checkEqual(true, isLast([1, 2, 3], [2, 3]));
        checkEqual(false, isLast([1, 2, 3], [1, 3]));
        checkEqual(false, isLast([1, 2, 3], [2]));
        checkEqual(true, isLast(['A', 'B', 'C'], ['C']));
        checkEqual(true, isLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['c']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['B'])); // Object Named Parameter

        checkEqual(true, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(false, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_isBothEnds = function test_isBothEnds() {
      it('test_isBothEnds', function () {
        checkEqual(true, isBothEnds([1, 2, 1], [1]));
        checkEqual(false, isBothEnds([1, 2, 1], [2]));
        checkEqual(true, isBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(true, isBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['B']));
        checkEqual(true, isBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual(false, isBothEnds(['A', 'B', 'A', 'D'], ['A']));
        checkEqual(true, isBothEnds(['A', 'B', 'A', 'D'], ['A'], ['D']));
        checkEqual(true, isBothEnds(['{', 'A', 'B', '}'], ['{'], ['}']));
        checkEqual(true, isBothEnds(['{', '{', '}', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['A', '{', 'B', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['}'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['{'], ['{']));
        checkEqual(false, isBothEnds([1], [1]));
        checkEqual(true, isBothEnds([1, 1], [1])); // Object Named Parameter

        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(false, isBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(false, isBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_array_subIndex = function test_array_subIndex() {
      it('test_array_subIndex', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1);
        }));
        checkEqual(true, equal([0], subIndex(array1, 0)));
        checkEqual(true, equal([1], subIndex(array1, 1)));
        checkEqual(true, equal([2], subIndex(array1, 2)));
        checkEqual(true, equal([3], subIndex(array1, 3)));
        checkEqual(true, equal([4], subIndex(array1, 4)));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 0);
        }));
        checkEqual(true, equal([0], subIndex(array1, 0, 0)));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 3);
        }));
        checkEqual(true, equal([0, 1, 2, 3], subIndex(array1, 0, 3)));
        checkEqual(true, equal([1, 2, 3], subIndex(array1, 1, 3)));
        checkEqual(true, equal([2, 3], subIndex(array1, 2, 3)));
        checkEqual(true, equal([3], subIndex(array1, 3, 3)));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 6);
        })); // Object Named Parameter

        checkEqual(true, equal(['A', 'B'], subIndex({
          array: ['A', 'B', 'A'],
          indexStart: 0,
          indexEnd: 1
        })));
      });
    };

    var test_array_subLength = function test_array_subLength() {
      it('test_array_subLength', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1);
        }));
        checkEqual(true, equal([0, 1, 2, 3, 4], subLength(array1, 0)));
        checkEqual(true, equal([1, 2, 3, 4], subLength(array1, 1)));
        checkEqual(true, equal([2, 3, 4], subLength(array1, 2)));
        checkEqual(true, equal([3, 4], subLength(array1, 3)));
        checkEqual(true, equal([4], subLength(array1, 4)));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 0);
        }));
        checkEqual(true, equal([], subLength(array1, 0, 0)));
        checkEqual(true, equal([], subLength(array1, 1, 0)));
        checkEqual(true, equal([], subLength(array1, 2, 0)));
        checkEqual(true, equal([], subLength(array1, 3, 0)));
        checkEqual(true, equal([], subLength(array1, 4, 0)));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 3);
        }));
        checkEqual(true, equal([0, 1, 2], subLength(array1, 0, 3)));
        checkEqual(true, equal([1, 2, 3], subLength(array1, 1, 3)));
        checkEqual(true, equal([2, 3, 4], subLength(array1, 2, 3)));
        checkEqual(true, equal([3, 4], subLength(array1, 3, 3)));
        checkEqual(true, equal([4], subLength(array1, 4, 3)));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 5);
        }));
        checkEqual(true, equal([0, 1, 2, 3, 4], subLength(array1, 0, 5)));
        checkEqual(true, equal([1, 2, 3, 4], subLength(array1, 1, 5)));
        checkEqual(true, equal([2, 3, 4], subLength(array1, 2, 5)));
        checkEqual(true, equal([3, 4], subLength(array1, 3, 5)));
        checkEqual(true, equal([4], subLength(array1, 4, 5)));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 6);
        }));
        checkEqual(true, equal([0, 1, 2, 3, 4], subLength(array1, 0, 6)));
        checkEqual(true, equal([1, 2, 3, 4], subLength(array1, 1, 6)));
        checkEqual(true, equal([2, 3, 4], subLength(array1, 2, 6)));
        checkEqual(true, equal([3, 4], subLength(array1, 3, 6)));
        checkEqual(true, equal([4], subLength(array1, 4, 6)));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 6);
        })); // Object Named Parameter

        checkEqual(true, equal(['A', 'B'], subLength({
          array: ['A', 'B', 'A'],
          index: 0,
          length: 2
        })));
      });
    };

    var test_array_subFirst = function test_array_subFirst() {
      it('test_array_subFirst', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subFirst(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subFirst(array1, -1);
        }));
        checkEqual(true, equal([], subFirst(array1, 0)));
        checkEqual(true, equal([0], subFirst(array1, 1)));
        checkEqual(true, equal([0, 1], subFirst(array1, 2)));
        checkEqual(true, equal([0, 1, 2], subFirst(array1, 3)));
        checkEqual(true, equal([0, 1, 2, 3], subFirst(array1, 4)));
        checkEqual(true, equal([0, 1, 2, 3, 4], subFirst(array1, 5)));
        checkEqual(true, isThrown(function () {
          return subFirst(array1, 6);
        })); // Object Named Parameter

        checkEqual(true, equal(['A', 'B'], subFirst({
          array: ['A', 'B', 'A'],
          length: 2
        })));
      });
    };

    var test_array_subLast = function test_array_subLast() {
      it('test_array_subLast', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subLast(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLast(array1, -1);
        }));
        checkEqual(true, equal([], subLast(array1, 0)));
        checkEqual(true, equal([4], subLast(array1, 1)));
        checkEqual(true, equal([3, 4], subLast(array1, 2)));
        checkEqual(true, equal([2, 3, 4], subLast(array1, 3)));
        checkEqual(true, equal([1, 2, 3, 4], subLast(array1, 4)));
        checkEqual(true, equal([0, 1, 2, 3, 4], subLast(array1, 5)));
        checkEqual(true, isThrown(function () {
          return subLast(array1, 6);
        })); // Object Named Parameter

        checkEqual(true, equal(['B', 'A'], subLast({
          array: ['A', 'B', 'A'],
          length: 2
        })));
      });
    };

    var test_operation_insert = function test_operation_insert() {
      it('test_operation_insert', function () {
        checkEqual(true, equal([1, 2, 3], insert([1, 2, 3], [])));
        checkEqual(true, equal([0, 1, 2, 3], insert([1, 2, 3], [0])));
        checkEqual(true, equal([0, 1, 2, 3], insert([1, 2, 3], [0], 0)));
        checkEqual(true, equal([1, 0, 2, 3], insert([1, 2, 3], [0], 1)));
        checkEqual(true, equal([1, 2, 0, 3], insert([1, 2, 3], [0], 2)));
        checkEqual(true, equal([1, 2, 3, 0], insert([1, 2, 3], [0], 3)));
        checkEqual(true, equal([-1, 0, 1, 2, 3], insert([1, 2, 3], [-1, 0])));
        checkEqual(true, equal([1, -1, 0, 2, 3], insert([1, 2, 3], [-1, 0], 1))); // exception

        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], -1);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(true, equal([1, 2, 3, 0], insert({
          array: [1, 2, 3],
          valueArray: [0],
          index: 3
        })));
      });
    };

    var test_operation_add = function test_operation_add() {
      it('test_operation_add', function () {
        checkEqual(true, equal([1, 2, 3], add([1, 2, 3], [])));
        checkEqual(true, equal([1, 2, 3, 0], add([1, 2, 3], [0])));
        checkEqual(true, equal([0, 1, 2, 3], add([1, 2, 3], [0], -1)));
        checkEqual(true, equal([1, 0, 2, 3], add([1, 2, 3], [0], 0)));
        checkEqual(true, equal([1, 2, 0, 3], add([1, 2, 3], [0], 1)));
        checkEqual(true, equal([1, 2, 3, 0], add([1, 2, 3], [0], 2)));
        checkEqual(true, equal([1, 2, 3, -1, 0], add([1, 2, 3], [-1, 0])));
        checkEqual(true, equal([1, 2, -1, 0, 3], add([1, 2, 3], [-1, 0], 1))); // exception

        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], -2);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(true, equal([1, 2, 3, 0], add({
          array: [1, 2, 3],
          valueArray: [0],
          index: 2
        })));
      });
    };

    var test_operation_deleteLength = function test_operation_deleteLength() {
      it('test_operation_deleteLength', function () {
        checkEqual(true, equal([1, 3], deleteLength([1, 2, 3], 1, 1)));
        checkEqual(true, equal([3], deleteLength([1, 2, 3], 0, 2)));
        checkEqual(true, equal([1], deleteLength([1, 2, 3], 1, 2))); // exception

        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], [0], 1);
        }, 'TypeError'));
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
          deleteLength([1, 2, 3], 0, 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], -1, 2);
        }, 'RangeError')); // Object Named Parameter

        checkEqual(true, equal([0, 3], deleteLength({
          array: [0, 1, 2, 3],
          index: 1,
          length: 2
        })));
      });
    };

    var test_operation_deleteIndex = function test_operation_deleteIndex() {
      it('test_operation_deleteIndex', function () {
        checkEqual(true, equal([1, 3], deleteIndex([1, 2, 3], 1, 1)));
        checkEqual(true, equal([3], deleteIndex([1, 2, 3], 0, 1)));
        checkEqual(true, equal([1], deleteIndex([1, 2, 3], 1, 2))); // exception

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

        checkEqual(true, equal([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          index: 1
        })));
        checkEqual(true, equal([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexStart: 1
        })));
        checkEqual(true, equal([0, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexStart: 1,
          indexEnd: 2
        })));
      });
    };

    var test_operation_deleteFirst = function test_operation_deleteFirst() {
      it('test_operation_deleteFirst', function () {
        var array1 = [0, 1, 2];
        checkEqual(true, equal([0, 1, 2], deleteFirst(array1, 0)));
        checkEqual(true, equal([0, 1, 2], array1));
        var array1 = [0, 1, 2];
        checkEqual(true, equal([1, 2], deleteFirst(array1, 1)));
        checkEqual(true, equal([1, 2], array1));
        var array1 = [0, 1, 2];
        checkEqual(true, equal([2], deleteFirst(array1, 2)));
        checkEqual(true, equal([2], array1));
        var array1 = [0, 1, 2];
        checkEqual(true, equal([], deleteFirst(array1, 3)));
        checkEqual(true, equal([], array1)); // exception

        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual(true, equal([1, 2, 3], deleteFirst({
          array: [0, 1, 2, 3],
          length: 1
        })));
      });
    };

    var test_operation_deleteLast = function test_operation_deleteLast() {
      it('test_operation_deleteLast', function () {
        var array1 = [0, 1, 2];
        checkEqual(true, equal([0, 1, 2], deleteLast(array1, 0)));
        checkEqual(true, equal([0, 1, 2], array1));
        var array1 = [0, 1, 2];
        checkEqual(true, equal([0, 1], deleteLast(array1, 1)));
        checkEqual(true, equal([0, 1], array1));
        var array1 = [0, 1, 2];
        checkEqual(true, equal([0], deleteLast(array1, 2)));
        checkEqual(true, equal([0], array1));
        var array1 = [0, 1, 2];
        checkEqual(true, equal([], deleteLast(array1, 3)));
        checkEqual(true, equal([], array1)); // exception

        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual(true, equal([0, 1, 2], deleteLast({
          array: [0, 1, 2, 3],
          length: 1
        })));
      });
    };

    var test_operation_includeFirst = function test_operation_includeFirst() {
      it('test_operation_includeFirst', function () {
        checkEqual(true, equal([1, 2, 3], includeFirst([1, 2, 3], [1])));
        checkEqual(true, equal([2, 1, 2, 3], includeFirst([1, 2, 3], [2])));
        checkEqual(true, equal([1, 2, 3], includeFirst([1, 2, 3], [1, 2])));
        checkEqual(true, equal([2, 1, 1, 2, 3], includeFirst([1, 2, 3], [2, 1])));
        checkEqual(true, equal(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A'])));
        checkEqual(true, equal(['a', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a'])));
        checkEqual(true, equal(['B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B'])));
        checkEqual(true, equal(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A', 'B'])));
        checkEqual(true, equal(['a', 'B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a', 'B'])));
        checkEqual(true, equal(['B', 'A', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B', 'A']))); // Object Named Parameter

        checkEqual(true, equal(['A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        })));
        checkEqual(true, equal(['a', 'A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        })));
      });
    };

    var test_operation_includeLast = function test_operation_includeLast() {
      it('test_operation_includeLast', function () {
        checkEqual(true, equal([1, 2, 3], includeLast([1, 2, 3], [3])));
        checkEqual(true, equal([1, 2, 3, 2], includeLast([1, 2, 3], [2])));
        checkEqual(true, equal([1, 2, 3], includeLast([1, 2, 3], [2, 3])));
        checkEqual(true, equal([1, 2, 3, 3, 2], includeLast([1, 2, 3], [3, 2])));
        checkEqual(true, equal(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['C'])));
        checkEqual(true, equal(['A', 'B', 'C', 'c'], includeLast(['A', 'B', 'C'], ['c'])));
        checkEqual(true, equal(['A', 'B', 'C', 'B'], includeLast(['A', 'B', 'C'], ['B'])));
        checkEqual(true, equal(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['B', 'C'])));
        checkEqual(true, equal(['A', 'B', 'C', 'B', 'c'], includeLast(['A', 'B', 'C'], ['B', 'c'])));
        checkEqual(true, equal(['A', 'B', 'C', 'C', 'B'], includeLast(['A', 'B', 'C'], ['C', 'B']))); // Object Named Parameter

        checkEqual(true, equal(['A', 'B', 'C'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        })));
        checkEqual(true, equal(['A', 'B', 'C', 'c'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        })));
      });
    };

    var test_operation_includeBothEnds = function test_operation_includeBothEnds() {
      it('test_operation_includeBothEnds', function () {
        checkEqual(true, equal([1, 2, 1], includeBothEnds([1, 2, 1], [1])));
        checkEqual(true, equal([1, 1, 2, 3, 1], includeBothEnds([1, 2, 3], [1])));
        checkEqual(true, equal([1, 2, 1, 2], includeBothEnds([1, 2, 1, 2], [1, 2])));
        checkEqual(true, equal([1, 2, 1], includeBothEnds([1, 2, 1], [1, 2], [2, 1])));
        checkEqual(true, equal(['A', 'B', 'A'], includeBothEnds(['A', 'B', 'A'], ['A'])));
        checkEqual(true, equal(['a', 'A', 'B', 'A', 'a'], includeBothEnds(['A', 'B', 'A'], ['a'])));
        checkEqual(true, equal(['A', 'A', 'B', 'C', 'A'], includeBothEnds(['A', 'B', 'C'], ['A'])));
        checkEqual(true, equal(['A', 'B', 'A', 'B'], includeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B'])));
        checkEqual(true, equal(['{', '}'], includeBothEnds(['{', '}'], ['{'], ['}'])));
        checkEqual(true, equal(['{', 'A', '}'], includeBothEnds(['{', 'A', '}'], ['{'], ['}'])));
        checkEqual(true, equal(['{', 'A', '{', '}', '}'], includeBothEnds(['A', '{', '}'], ['{'], ['}'])));
        checkEqual(true, equal(['A', 'A'], includeBothEnds(['A', 'A'], ['A'])));
        checkEqual(true, equal(['A', 'A', 'A'], includeBothEnds(['A'], ['A'])));
        checkEqual(true, equal(['A', '', 'A'], includeBothEnds([''], ['A'])));
        checkEqual(true, equal(['A', 'A'], includeBothEnds([], ['A']))); // exception

        checkEqual(true, isThrownException(function () {
          includeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(true, equal(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        })));
        checkEqual(true, equal(['a', 'A', 'B', 'A', 'a'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        })));
        checkEqual(true, equal(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        })));
        checkEqual(true, equal(['A', 'A', 'B', 'A', 'D', 'A'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        })));
        checkEqual(true, equal(['A', 'B', 'A', 'D'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        })));
      });
    };

    var test_operation_excludeFirst = function test_operation_excludeFirst() {
      it('test_operation_excludeFirst', function () {
        checkEqual(true, equal([2, 3], excludeFirst([1, 2, 3], [1])));
        checkEqual(true, equal([1, 2, 3], excludeFirst([1, 2, 3], [2])));
        checkEqual(true, equal([3], excludeFirst([1, 2, 3], [1, 2])));
        checkEqual(true, equal([1, 2, 3], excludeFirst([1, 2, 3], [2, 1])));
        checkEqual(true, equal(['B', 'C'], excludeFirst(['A', 'B', 'C'], ['A'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B'])));
        checkEqual(true, equal(['C'], excludeFirst(['A', 'B', 'C'], ['A', 'B'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a', 'B'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B', 'A']))); // Object Named Parameter

        checkEqual(true, equal(['B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        })));
        checkEqual(true, equal(['A', 'B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        })));
      });
    };

    var test_operation_excludeLast = function test_operation_excludeLast() {
      it('test_operation_excludeLast', function () {
        checkEqual(true, equal([1, 2], excludeLast([1, 2, 3], [3])));
        checkEqual(true, equal([1, 2, 3], excludeLast([1, 2, 3], [2])));
        checkEqual(true, equal([1], excludeLast([1, 2, 3], [2, 3])));
        checkEqual(true, equal([1, 2, 3], excludeLast([1, 2, 3], [3, 2])));
        checkEqual(true, equal(['A', 'B'], excludeLast(['A', 'B', 'C'], ['C'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['c'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B'])));
        checkEqual(true, equal(['A'], excludeLast(['A', 'B', 'C'], ['B', 'C'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B', 'c'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['C', 'B']))); // Object Named Parameter

        checkEqual(true, equal(['A', 'B'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        })));
        checkEqual(true, equal(['A', 'B', 'C'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        })));
      });
    };

    var test_operation_excludeBothEnds = function test_operation_excludeBothEnds() {
      it('test_operation_excludeBothEnds', function () {
        checkEqual(true, equal([2], excludeBothEnds([1, 2, 1], [1])));
        checkEqual(true, equal([1, 2, 3], excludeBothEnds([1, 2, 3], [1])));
        checkEqual(true, equal([], excludeBothEnds([1, 2, 1, 2], [1, 2])));
        checkEqual(true, equal([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [5])));
        checkEqual(true, equal([1, 2, 3, 4, 5], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 5])));
        checkEqual(true, equal([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 4, 5])));
        checkEqual(true, equal([], excludeBothEnds([1, 2, 1], [1, 2], [2, 1])));
        checkEqual(true, equal(['B'], excludeBothEnds(['A', 'B', 'A'], ['A'])));
        checkEqual(true, equal(['A', 'B', 'A'], excludeBothEnds(['A', 'B', 'A'], ['a'])));
        checkEqual(true, equal(['A', 'B', 'C'], excludeBothEnds(['A', 'B', 'C'], ['A'])));
        checkEqual(true, equal([], excludeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B'])));
        checkEqual(true, equal([], excludeBothEnds(['A', 'B', 'A'], ['A', 'B'], ['B', 'A'])));
        checkEqual(true, equal([], excludeBothEnds(['{', '}'], ['{'], ['}'])));
        checkEqual(true, equal(['A'], excludeBothEnds(['{', 'A', '}'], ['{'], ['}'])));
        checkEqual(true, equal(['A', '{', '}'], excludeBothEnds(['A', '{', '}'], ['{'], ['}'])));
        checkEqual(true, equal([], excludeBothEnds(['A', 'A'], ['A'])));
        checkEqual(true, equal(['A'], excludeBothEnds(['A'], ['A'])));
        checkEqual(true, equal([''], excludeBothEnds([''], ['A'])));
        checkEqual(true, equal([], excludeBothEnds([], ['A']))); // exception

        checkEqual(true, isThrownException(function () {
          excludeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(true, equal(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        })));
        checkEqual(true, equal(['A', 'B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        })));
        checkEqual(true, equal(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        })));
        checkEqual(true, equal(['A', 'B', 'A', 'D'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        })));
        checkEqual(true, equal(['B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        })));
      });
    };

    var test_operation_trimFirst = function test_operation_trimFirst() {
      it('test_operation_trimFirst', function () {
        checkEqual(true, equal([2, 3], trimFirst([1, 2, 3], [1])));
        checkEqual(true, equal([2, 3], trimFirst([1, 1, 1, 2, 3], [1])));
        checkEqual(true, equal([], trimFirst([1, 1, 1, 1, 1], [1])));
        checkEqual(true, equal([1, 2, 3], trimFirst([1, 2, 3], [2])));
        checkEqual(true, equal([2, 1, 2, 3], trimFirst([1, 2, 1, 2, 3], [1])));
        checkEqual(true, equal([3], trimFirst([1, 2, 1, 2, 3], [1, 2])));
        checkEqual(true, equal([3], trimFirst([1, 2, 1, 2, 3], [2, 1])));
        checkEqual(true, equal(['B', 'C'], trimFirst(['A', 'B', 'C'], ['A'])));
        checkEqual(true, equal(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['a'])));
        checkEqual(true, equal(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['B'])));
        checkEqual(true, equal(['B', 'A', 'B', 'C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A'])));
        checkEqual(true, equal(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A', 'B'])));
        checkEqual(true, equal(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['B', 'A']))); // Object Named Parameter

        checkEqual(true, equal(['B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        })));
        checkEqual(true, equal(['A', 'B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        })));
      });
    };

    var test_operation_trimLast = function test_operation_trimLast() {
      it('test_operation_trimLast', function () {
        checkEqual(true, equal([1, 2], trimLast([1, 2, 3], [3])));
        checkEqual(true, equal([1, 2], trimLast([1, 2, 3, 3, 3], [3])));
        checkEqual(true, equal([], trimLast([3, 3, 3, 3, 3], [3])));
        checkEqual(true, equal([1, 2, 3], trimLast([1, 2, 3], [2])));
        checkEqual(true, equal([1, 2, 3, 2], trimLast([1, 2, 3, 2, 3], [3])));
        checkEqual(true, equal([1], trimLast([1, 2, 3, 2, 3], [2, 3])));
        checkEqual(true, equal([1], trimLast([1, 2, 3, 2, 3], [3, 2])));
        checkEqual(true, equal(['A', 'B'], trimLast(['A', 'B', 'C'], ['C'])));
        checkEqual(true, equal(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['c'])));
        checkEqual(true, equal(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['B'])));
        checkEqual(true, equal(['A', 'B', 'C', 'B'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C'])));
        checkEqual(true, equal(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['B', 'C'])));
        checkEqual(true, equal(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C', 'B']))); // Object Named Parameter

        checkEqual(true, equal(['A', 'B'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        })));
        checkEqual(true, equal(['A', 'B', 'C'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        })));
      });
    };

    var test_operation_trimBothEnds = function test_operation_trimBothEnds() {
      it('test_operation_trimBothEnds', function () {
        checkEqual(true, equal([2], trimBothEnds([1, 2, 1], [1])));
        checkEqual(true, equal([2], trimBothEnds([1, 1, 2, 1, 1, 1], [1])));
        checkEqual(true, equal([], trimBothEnds([1, 1, 1], [1])));
        checkEqual(true, equal([2, 3], trimBothEnds([1, 2, 3], [1])));
        checkEqual(true, equal([2, 3, 1, 2], trimBothEnds([1, 2, 3, 1, 2], [1])));
        checkEqual(true, equal([1, 2, 3, 1], trimBothEnds([1, 2, 3, 1, 2], [2])));
        checkEqual(true, equal([3], trimBothEnds([1, 2, 3, 1, 2], [1, 2])));
        checkEqual(true, equal([3], trimBothEnds([1, 2, 3, 1, 2], [2, 1])));
        checkEqual(true, equal(['B'], trimBothEnds(['A', 'B', 'A'], ['A'])));
        checkEqual(true, equal(['A', 'B', 'A'], trimBothEnds(['A', 'B', 'A'], ['a'])));
        checkEqual(true, equal(['B', 'C'], trimBothEnds(['A', 'B', 'C'], ['A'])));
        checkEqual(true, equal(['B', 'C', 'A', 'B'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A'])));
        checkEqual(true, equal(['A', 'B', 'C', 'A'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B'])));
        checkEqual(true, equal(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A', 'B'])));
        checkEqual(true, equal(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B', 'A'])));
        checkEqual(true, equal([], trimBothEnds(['{', '}'], ['{'], ['}'])));
        checkEqual(true, equal([], trimBothEnds(['{', '{', '{', '}', '}', '}'], ['{'], ['}'])));
        checkEqual(true, equal([], trimBothEnds(['{', '{', '{', '}'], ['{'], ['}'])));
        checkEqual(true, equal(['A'], trimBothEnds(['{', 'A', '}'], ['{'], ['}'])));
        checkEqual(true, equal(['A', '{'], trimBothEnds(['A', '{', '}'], ['{'], ['}'])));
        checkEqual(true, equal([], trimBothEnds(['A', 'A'], ['A'])));
        checkEqual(true, equal([], trimBothEnds(['A'], ['A'])));
        checkEqual(true, equal([''], trimBothEnds([''], ['A'])));
        checkEqual(true, equal([], trimBothEnds([], ['A']))); // exception

        checkEqual(true, isThrownException(function () {
          trimBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(true, equal(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        })));
        checkEqual(true, equal(['A', 'B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        })));
        checkEqual(true, equal(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        })));
        checkEqual(true, equal(['B', 'A', 'D'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        })));
        checkEqual(true, equal(['B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        })));
      });
    };

    var test_operation_popFirst = function test_operation_popFirst() {
      it('test_operation_popFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(1, popFirst(array1));
        checkEqual(true, equal([2, 3], array1));
        var array1 = ['A', 'B', 'C'];
        checkEqual('A', popFirst(array1));
        checkEqual(true, equal(['B', 'C'], array1));
      });
    };

    var test_operation_popLast = function test_operation_popLast() {
      it('test_operation_popLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(3, popLast(array1));
        checkEqual(true, equal([1, 2], array1));
        var array1 = ['A', 'B', 'C'];
        checkEqual('C', popLast(array1));
        checkEqual(true, equal(['A', 'B'], array1));
      });
    };

    var test_operation_pushFirst = function test_operation_pushFirst() {
      it('test_operation_pushFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushFirst(array1, 0));
        checkEqual(true, equal([0, 1, 2, 3], array1));
        checkEqual(5, pushFirst(array1, 0));
        checkEqual(true, equal([0, 0, 1, 2, 3], array1));
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushFirst(array1, 'D'));
        checkEqual(true, equal(['D', 'A', 'B', 'C'], array1));
        checkEqual(5, pushFirst(array1, 'D'));
        checkEqual(true, equal(['D', 'D', 'A', 'B', 'C'], array1));
      });
    };

    var test_operation_pushLast = function test_operation_pushLast() {
      it('test_operation_pushLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushLast(array1, 4));
        checkEqual(true, equal([1, 2, 3, 4], array1));
        checkEqual(5, pushLast(array1, 4));
        checkEqual(true, equal([1, 2, 3, 4, 4], array1));
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushLast(array1, 'D'));
        checkEqual(true, equal(['A', 'B', 'C', 'D'], array1));
        checkEqual(5, pushLast(array1, 'D'));
        checkEqual(true, equal(['A', 'B', 'C', 'D', 'D'], array1));
      });
    };

    var test_operation_remainFirst = function test_operation_remainFirst() {
      it('test_operation_remainFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(true, equal([1, 2, 3], remainFirst(array1, 4)));
        checkEqual(true, equal([1, 2, 3], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([1, 2, 3], remainFirst(array1, 3)));
        checkEqual(true, equal([1, 2, 3], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([1, 2], remainFirst(array1, 2)));
        checkEqual(true, equal([1, 2], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([1], remainFirst(array1, 1)));
        checkEqual(true, equal([1], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([], remainFirst(array1, 0)));
        checkEqual(true, equal([], array1)); // Object Named Parameter

        checkEqual(true, equal(['A', 'B'], remainFirst({
          array: ['A', 'B', 'A'],
          length: 2
        })));
      });
    };

    var test_operation_remainLast = function test_operation_remainLast() {
      it('test_operation_remainLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(true, equal([1, 2, 3], remainLast(array1, 4)));
        checkEqual(true, equal([1, 2, 3], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([1, 2, 3], remainLast(array1, 3)));
        checkEqual(true, equal([1, 2, 3], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([2, 3], remainLast(array1, 2)));
        checkEqual(true, equal([2, 3], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([3], remainLast(array1, 1)));
        checkEqual(true, equal([3], array1));
        var array1 = [1, 2, 3];
        checkEqual(true, equal([], remainLast(array1, 0)));
        checkEqual(true, equal([], array1)); // Object Named Parameter

        checkEqual(true, equal(['B', 'A'], remainLast({
          array: ['A', 'B', 'A'],
          length: 2
        })));
      });
    };

    var test_operation_filter = function test_operation_filter() {
      it('test_operation_filter', function () {
        checkEqual(true, equal([2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        })));
        checkEqual(true, equal([2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], isEven)));
        checkEqual(true, equal([1, 3, 5], array.operation.filter([0, 1, 2, 3, 4, 5], isOdd))); // Object Named Parameter

        checkEqual(true, equal([2, 4], array.operation.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        })));
      });
    };

    var test_operation_sort = function test_operation_sort() {
      it('test_operation_sort', function () {
        // exception
        checkEqual(true, isThrownException(function () {
          array.operation.sort([0, 1], 'a', 'ascending');
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sort([0, 1], 'number', 'b');
        }, 'TypeError'));
      });
    };

    var test_operation_sortNumber = function test_operation_sortNumber() {
      it('test_operation_sortNumber', function () {
        checkEqual(true, equal([0, 1, 2, 3, 4, 5], array.operation.sortNumberAscending([3, 4, 1, 2, 5, 0])));
        checkEqual(true, equal([5, 4, 3, 2, 1, 0], array.operation.sortNumberDescending([3, 4, 1, 2, 5, 0]))); // exception

        checkEqual(true, isThrownException(function () {
          array.operation.sortNumberAscending(1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortNumberAscending([0, 1, 2]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortNumberAscending([0, '1', 2]);
        }, 'TypeError'));
      });
    };

    var test_operation_sortLength = function test_operation_sortLength() {
      it('test_operation_sortLength', function () {
        checkEqual(true, equal(['a', 'aa', 'aaa'], array.operation.sortLengthAscending(['aaa', 'a', 'aa'])));
        checkEqual(true, equal(['aaa', 'aa', 'a'], array.operation.sortLengthDescending(['aaa', 'a', 'aa'])));
        checkCompare(parts.compare.equalDeep, ['a', [0, 1], 'aaa'], array.operation.sortLengthAscending(['aaa', 'a', [0, 1]])); // exception

        checkEqual(true, isThrownException(function () {
          array.operation.sortLengthAscending(1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortLengthAscending(['a', 'aa']);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortLengthAscending([0, 'aa']);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortLengthAscending([[0], [1, 2]]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortLengthAscending([0, [1, 2]]);
        }, 'TypeError'));
      });
    };

    var test_operation_sortDictionary = function test_operation_sortDictionary() {
      it('test_operation_sortDictionary', function () {
        checkEqual(true, equal(['A', 'AA', 'Aa', 'a', 'aA', 'aa'], array.operation.sortDictionaryAscending(['a', 'A', 'Aa', 'aa', 'aA', 'AA'])));
        checkEqual(true, equal(['aa', 'aA', 'a', 'Aa', 'AA', 'A'], array.operation.sortDictionaryDescending(['a', 'A', 'aa', 'Aa', 'AA', 'aA'])));
        checkEqual(true, equal(['A', 'AA', 'Aa', 'Ab', 'a', 'aA', 'aa', 'ab'], array.operation.sortDictionaryAscending(['a', 'A', 'aa', 'Aa', 'AA', 'aA', 'ab', 'Ab'])));
        checkEqual(true, equal(['ab', 'aa', 'aA', 'a', 'Ab', 'Aa', 'AA', 'A'], array.operation.sortDictionaryDescending(['a', 'A', 'aa', 'Aa', 'AA', 'aA', 'ab', 'Ab']))); // exception

        checkEqual(true, isThrownException(function () {
          array.operation.sortDictionaryAscending(1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sortDictionaryAscending(['a', 'aa']);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sortDictionaryAscending([0, 'aa']);
        }, 'TypeError'));
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
    test_single();
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
    test_isBothEnds();
    test_array_subIndex();
    test_array_subLength();
    test_array_subFirst();
    test_array_subLast();
    test_operation_insert();
    test_operation_add();
    test_operation_deleteLength();
    test_operation_deleteIndex();
    test_operation_deleteFirst();
    test_operation_deleteLast();
    test_operation_includeFirst();
    test_operation_includeLast();
    test_operation_includeBothEnds();
    test_operation_excludeFirst();
    test_operation_excludeLast();
    test_operation_excludeBothEnds();
    test_operation_trimFirst();
    test_operation_trimLast();
    test_operation_trimBothEnds();
    test_operation_popFirst();
    test_operation_popLast();
    test_operation_pushFirst();
    test_operation_pushLast();
    test_operation_remainFirst();
    test_operation_remainLast();
    test_operation_filter();
    test_operation_sort();
    test_operation_sortNumber();
    test_operation_sortLength();
    test_operation_sortDictionary();
  });
};

module.exports = {
  test_execute_array: test_execute_array
};