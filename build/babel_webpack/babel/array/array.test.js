"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_array = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */

/* eslint-disable comma-spacing */

/* eslint-disable comma-dangle */
var test_execute_array = function test_execute_array(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      expect = _parts$test.expect;
  describe('test_execute_array', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        checkCompare = _parts$test2.checkCompare,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var isLowerCase = parts.isLowerCase,
        isUpperCase = parts.isUpperCase,
        array = parts.array;
    var _parts$array = parts.array,
        NumberArray = _parts$array.NumberArray,
        IntegerArray = _parts$array.IntegerArray,
        isFirst = _parts$array.isFirst,
        isLast = _parts$array.isLast,
        isBothEnds = _parts$array.isBothEnds,
        subIndex = _parts$array.subIndex,
        subLength = _parts$array.subLength,
        subFirst = _parts$array.subFirst,
        subLast = _parts$array.subLast,
        arrayToIndexValueArray = _parts$array.arrayToIndexValueArray,
        sortOrderFunction = _parts$array.sortOrderFunction;
    var _parts$array$operatio = parts.array.operation,
        insert = _parts$array$operatio.insert,
        add = _parts$array$operatio.add,
        deleteLength = _parts$array$operatio.deleteLength,
        deleteIndex = _parts$array$operatio.deleteIndex,
        deleteFirst = _parts$array$operatio.deleteFirst,
        deleteLast = _parts$array$operatio.deleteLast,
        includeFirst = _parts$array$operatio.includeFirst,
        includeLast = _parts$array$operatio.includeLast,
        includeBothEnds = _parts$array$operatio.includeBothEnds,
        excludeFirst = _parts$array$operatio.excludeFirst,
        excludeLast = _parts$array$operatio.excludeLast,
        excludeBothEnds = _parts$array$operatio.excludeBothEnds,
        trimFirst = _parts$array$operatio.trimFirst,
        trimLast = _parts$array$operatio.trimLast,
        trimBothEnds = _parts$array$operatio.trimBothEnds,
        popFirst = _parts$array$operatio.popFirst,
        popLast = _parts$array$operatio.popLast,
        pushFirst = _parts$array$operatio.pushFirst,
        pushLast = _parts$array$operatio.pushLast,
        remainFirst = _parts$array$operatio.remainFirst,
        remainLast = _parts$array$operatio.remainLast;
    var _parts$number = parts.number,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd;
    var equal = parts.compare.equal;

    var test_array_NumberArray = function test_array_NumberArray() {
      it('test_array_NumberArray', function () {
        checkEqual([0, 1, 2], NumberArray(3));
        checkEqual([1, 2, 3], NumberArray(1, 3));
        checkEqual([0, 3, 6, 9], NumberArray(0, 10, 3));
        checkEqual([0, 3, 6, 9], NumberArray(0, 11, 3));
        checkEqual([0, 3, 6, 9, 12], NumberArray(0, 12, 3));
        checkEqual([5, 7, 9], NumberArray(5, 10, 2));
        checkEqual([-3, -2, -1, 0], NumberArray(-3, 0));
        checkEqual([-5, -3, -1], NumberArray(-5, 0, 2));
        checkEqual([-5, -3, -1], NumberArray(-5, -1, 2));
        checkEqual([-5, -3], NumberArray(-5, -2, 2));
        checkEqual([0, 0.1, 0.2, 0.30000000000000004, 0.4], NumberArray(0, 0.4, 0.1));
        checkEqual(true, isThrown(function () {
          return NumberArray(0, 10, 0);
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(0, 10, -0.1);
        }));
        checkEqual([3, 2, 1], NumberArray(3, 1));
        checkEqual([10, 7, 4, 1], NumberArray(10, 0, -3));
        checkEqual([10, 7, 4, 1], NumberArray(10, 1, -3));
        checkEqual([10, 7, 4], NumberArray(10, 2, -3));
        checkEqual([10, 8, 6], NumberArray(10, 5, -2));
        checkEqual([0, -1, -2, -3], NumberArray(0, -3));
        checkEqual([0, -2, -4], NumberArray(0, -5, -2));
        checkEqual([0, -2, -4], NumberArray(0, -4, -2));
        checkEqual([0, -2], NumberArray(0, -3, -2));
        checkEqual([0.3, 0.19999999999999998, 0.09999999999999998], NumberArray(0.3, 0, -0.1));
        checkEqual(true, isThrown(function () {
          return NumberArray(0.3, 0, 0);
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(0.3, 0, 0.1);
        })); // object parameter

        checkEqual([0, 1, 2], NumberArray({
          count: 3
        }));
        checkEqual([1, 2, 3], NumberArray({
          start: 1,
          end: 3
        }));
        checkEqual([0, 3, 6, 9], NumberArray({
          start: 0,
          end: 10,
          increment: 3
        }));
        checkEqual([7, 8, 9, 10], NumberArray(7, {
          end: 10
        }));
        checkEqual([7, 9], NumberArray(7, {
          end: 10,
          increment: 2
        }));
        checkEqual([7, 9], NumberArray(7, 10, {
          increment: 2
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray({
            count: 3,
            start: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray({
            end: 10
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, {
            start: 0,
            end: 10,
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, {
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, 10, {});
        }));
      });
    };

    var test_array_IntegerArray = function test_array_IntegerArray() {
      it('test_array_IntegerArray', function () {
        checkEqual([0, 1, 2], IntegerArray(3));
        checkEqual([1, 2, 3], IntegerArray(1, 3));
        checkEqual([0, 3, 6, 9], IntegerArray(0, 10, 3));
        checkEqual([0, 3, 6, 9], IntegerArray(0, 11, 3));
        checkEqual([0, 3, 6, 9, 12], IntegerArray(0, 12, 3));
        checkEqual([5, 7, 9], IntegerArray(5, 10, 2));
        checkEqual([-3, -2, -1, 0], IntegerArray(-3, 0));
        checkEqual([-5, -3, -1], IntegerArray(-5, 0, 2));
        checkEqual([-5, -3, -1], IntegerArray(-5, -1, 2));
        checkEqual([-5, -3], IntegerArray(-5, -2, 2));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 0.2, 0.1);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 10, 0);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 10, -0.1);
        }));
        checkEqual([3, 2, 1], IntegerArray(3, 1));
        checkEqual([10, 7, 4, 1], IntegerArray(10, 0, -3));
        checkEqual([10, 7, 4, 1], IntegerArray(10, 1, -3));
        checkEqual([10, 7, 4], IntegerArray(10, 2, -3));
        checkEqual([10, 8, 6], IntegerArray(10, 5, -2));
        checkEqual([0, -1, -2, -3], IntegerArray(0, -3));
        checkEqual([0, -2, -4], IntegerArray(0, -5, -2));
        checkEqual([0, -2, -4], IntegerArray(0, -4, -2));
        checkEqual([0, -2], IntegerArray(0, -3, -2));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.2, 0, -0.1);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.3, 0, 0);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.3, 0, 0.1);
        })); // object parameter

        checkEqual([0, 1, 2], IntegerArray({
          count: 3
        }));
        checkEqual([1, 2, 3], IntegerArray({
          start: 1,
          end: 3
        }));
        checkEqual([0, 3, 6, 9], IntegerArray({
          start: 0,
          end: 10,
          increment: 3
        }));
        checkEqual([7, 8, 9, 10], IntegerArray(7, {
          end: 10
        }));
        checkEqual([7, 9], IntegerArray(7, {
          end: 10,
          increment: 2
        }));
        checkEqual([7, 9], IntegerArray(7, 10, {
          increment: 2
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray({
            count: 3,
            start: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray({
            end: 10
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, {
            start: 0,
            end: 10,
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, {
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, 10, {});
        }));
      });
    };

    var test_array_from = function test_array_from() {
      it('test_array_from', function () {
        function test() {
          // eslint-disable-next-line prefer-rest-params
          return array.from(arguments);
        }

        checkEqual([10, 20], test(10, 20));
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
        checkEqual(null, array.median([]));
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

    var test_unique = function test_unique() {
      it('test_unique', function () {
        checkEqual([1, 2, 3, 4, 0], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0]));
        checkEqual([1, 2, 3, 4, 0], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return v;
        }));
        checkEqual([1, 2], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }));
        checkEqual([1, 2], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, true).result);
        checkEqual([false, true], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, true).index);
        checkEqual({
          result: [{
            x: 1,
            y: 1
          }, {
            x: undefined,
            y: 4
          }, {
            x: 2,
            y: 2
          }],
          index: [1, undefined, 2]
        }, array.unique([{
          x: 1,
          y: 1
        }, {
          x: undefined,
          y: 4
        }, {
          x: 2,
          y: 2
        }, {
          x: 1,
          y: 3
        }, {
          y: 5
        }], function (v) {
          return v.x;
        }, true));
      }); // Object Named Parameter

      checkEqual([1, 2, 3, 4, 0], array.unique({
        array: [1, 2, 3, 4, 4, 4, 3, 2, 0]
      }));
      checkEqual([1, 2], array.unique({
        array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
        func: function func(v) {
          return parts.isEven(v);
        }
      }));
      checkEqual([1, 2], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], {
        func: function func(v) {
          return parts.isEven(v);
        }
      }));
      checkEqual({
        result: [1, 2],
        index: [false, true]
      }, array.unique({
        array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
        func: function func(v) {
          return parts.isEven(v);
        },
        detail: true
      }));
      checkEqual({
        result: [1, 2],
        index: [false, true]
      }, array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], {
        func: function func(v) {
          return parts.isEven(v);
        },
        detail: true
      }));
      checkEqual({
        result: [1, 2],
        index: [false, true]
      }, array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
        return parts.isEven(v);
      }, {
        detail: true
      }));
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

    var test_group = function test_group() {
      it('test_group', function () {
        checkEqual([[1], [2, 2], [3, 3], [4, 4, 4], [0]], array.group([1, 2, 3, 4, 4, 4, 3, 2, 0]));
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]], array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, true)); // Object Named Parameter

        checkEqual([[1], [2, 2], [3, 3], [4, 4, 4], [0]], array.group({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0]
        }));
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]], array.group({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
          func: function func(v) {
            return parts.isEven(v);
          }
        }));
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]], array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          func: function func(v) {
            return parts.isEven(v);
          }
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, {
          detail: true
        }));
        checkEqual({
          result: [[1], [2, 2], [3, 3], [4, 4, 4], [0]],
          index: [1, 2, 3, 4, 0]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          detail: true
        }));
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
        checkEqual(false, isLast(['A', 'B', 'C'], ['B']));
        checkEqual(false, isLast([1], [2, 3])); // Object Named Parameter

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
        checkEqual([0], subIndex(array1, 0));
        checkEqual([1], subIndex(array1, 1));
        checkEqual([2], subIndex(array1, 2));
        checkEqual([3], subIndex(array1, 3));
        checkEqual([4], subIndex(array1, 4));
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
        checkEqual([0], subIndex(array1, 0, 0));
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
        checkEqual([0, 1, 2, 3], subIndex(array1, 0, 3));
        checkEqual([1, 2, 3], subIndex(array1, 1, 3));
        checkEqual([2, 3], subIndex(array1, 2, 3));
        checkEqual([3], subIndex(array1, 3, 3));
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

        checkEqual(['A', 'B'], subIndex({
          array: ['A', 'B', 'A'],
          indexStart: 0,
          indexEnd: 1
        }));
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
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0));
        checkEqual([1, 2, 3, 4], subLength(array1, 1));
        checkEqual([2, 3, 4], subLength(array1, 2));
        checkEqual([3, 4], subLength(array1, 3));
        checkEqual([4], subLength(array1, 4));
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
        checkEqual([], subLength(array1, 0, 0));
        checkEqual([], subLength(array1, 1, 0));
        checkEqual([], subLength(array1, 2, 0));
        checkEqual([], subLength(array1, 3, 0));
        checkEqual([], subLength(array1, 4, 0));
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
        checkEqual([0, 1, 2], subLength(array1, 0, 3));
        checkEqual([1, 2, 3], subLength(array1, 1, 3));
        checkEqual([2, 3, 4], subLength(array1, 2, 3));
        checkEqual([3, 4], subLength(array1, 3, 3));
        checkEqual([4], subLength(array1, 4, 3));
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
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0, 5));
        checkEqual([1, 2, 3, 4], subLength(array1, 1, 5));
        checkEqual([2, 3, 4], subLength(array1, 2, 5));
        checkEqual([3, 4], subLength(array1, 3, 5));
        checkEqual([4], subLength(array1, 4, 5));
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
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0, 6));
        checkEqual([1, 2, 3, 4], subLength(array1, 1, 6));
        checkEqual([2, 3, 4], subLength(array1, 2, 6));
        checkEqual([3, 4], subLength(array1, 3, 6));
        checkEqual([4], subLength(array1, 4, 6));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subLength({
          array: ['A', 'B', 'A'],
          index: 0,
          length: 2
        }));
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
        checkEqual([], subFirst(array1, 0));
        checkEqual([0], subFirst(array1, 1));
        checkEqual([0, 1], subFirst(array1, 2));
        checkEqual([0, 1, 2], subFirst(array1, 3));
        checkEqual([0, 1, 2, 3], subFirst(array1, 4));
        checkEqual([0, 1, 2, 3, 4], subFirst(array1, 5));
        checkEqual(true, isThrown(function () {
          return subFirst(array1, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subFirst({
          array: ['A', 'B', 'A'],
          length: 2
        }));
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
        checkEqual([], subLast(array1, 0));
        checkEqual([4], subLast(array1, 1));
        checkEqual([3, 4], subLast(array1, 2));
        checkEqual([2, 3, 4], subLast(array1, 3));
        checkEqual([1, 2, 3, 4], subLast(array1, 4));
        checkEqual([0, 1, 2, 3, 4], subLast(array1, 5));
        checkEqual(true, isThrown(function () {
          return subLast(array1, 6);
        })); // Object Named Parameter

        checkEqual(['B', 'A'], subLast({
          array: ['A', 'B', 'A'],
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
          valueArray: [0],
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
          valueArray: [0],
          index: 2
        }));
      });
    };

    var test_operation_deleteIndex = function test_operation_deleteIndex() {
      it('test_operation_deleteIndex', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1, 3, 4], deleteIndex(array1, 2));
        checkEqual([0, 1, 3, 4], array1);
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([1, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 0));
        checkEqual([0, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1, 3, 4], deleteIndex([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1, 2, 4], deleteIndex([0, 1, 2, 3, 4], 3));
        checkEqual([0, 1, 2, 3], deleteIndex([0, 1, 2, 3, 4], 4));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 0);
        }));
        checkEqual([1, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 0, 0));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 3);
        }));
        checkEqual([4], deleteIndex([0, 1, 2, 3, 4], 0, 3));
        checkEqual([0, 4], deleteIndex([0, 1, 2, 3, 4], 1, 3));
        checkEqual([0, 1, 4], deleteIndex([0, 1, 2, 3, 4], 2, 3));
        checkEqual([0, 1, 2, 4], deleteIndex([0, 1, 2, 3, 4], 3, 3));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 6);
        })); // exception

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
          indexStart: 1
        }));
        checkEqual([0, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexStart: 1,
          indexEnd: 2
        }));
      });
    };

    var test_operation_deleteLength = function test_operation_deleteLength() {
      it('test_operation_deleteLength', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1], deleteLength(array1, 2));
        checkEqual([0, 1], array1);
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 0);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 0, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 1, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 2, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 3, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 4, 0));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 3);
        }));
        checkEqual([3, 4], deleteLength([0, 1, 2, 3, 4], 0, 3));
        checkEqual([0, 4], deleteLength([0, 1, 2, 3, 4], 1, 3));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 3));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 3));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 3));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 5);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0, 5));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1, 5));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 5));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 5));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 5));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 6);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0, 6));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1, 6));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 6));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 6));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 6));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 6);
        }));
        testCounter(); // exception

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
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 4);
        }));
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

    var test_operation_deleteFirst = function test_operation_deleteFirst() {
      it('test_operation_deleteFirst', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([2, 3, 4], deleteFirst(array1, 2));
        checkEqual([2, 3, 4], array1);
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 0));
        checkEqual([1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 1));
        checkEqual([2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 2));
        checkEqual([3, 4], deleteFirst([0, 1, 2, 3, 4], 3));
        checkEqual([4], deleteFirst([0, 1, 2, 3, 4], 4));
        checkEqual([], deleteFirst([0, 1, 2, 3, 4], 5));
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], 6);
        })); // exception

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

        checkEqual([1, 2, 3], deleteFirst({
          array: [0, 1, 2, 3],
          length: 1
        }));
      });
    };

    var test_operation_deleteLast = function test_operation_deleteLast() {
      it('test_operation_deleteLast', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1, 2], deleteLast(array1, 2));
        checkEqual([0, 1, 2], array1);
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteLast([0, 1, 2, 3, 4], 0));
        checkEqual([0, 1, 2, 3], deleteLast([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1, 2], deleteLast([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1], deleteLast([0, 1, 2, 3, 4], 3));
        checkEqual([0], deleteLast([0, 1, 2, 3, 4], 4));
        checkEqual([], deleteLast([0, 1, 2, 3, 4], 5));
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], 6);
        })); // exception

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

        checkEqual([0, 1, 2], deleteLast({
          array: [0, 1, 2, 3],
          length: 1
        }));
      });
    };

    var test_operation_includeFirst = function test_operation_includeFirst() {
      it('test_operation_includeFirst', function () {
        checkEqual([1, 2, 3], includeFirst([1, 2, 3], [1]));
        checkEqual([2, 1, 2, 3], includeFirst([1, 2, 3], [2]));
        checkEqual([1, 2, 3], includeFirst([1, 2, 3], [1, 2]));
        checkEqual([2, 1, 1, 2, 3], includeFirst([1, 2, 3], [2, 1]));
        checkEqual(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(['a', 'B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a', 'B']));
        checkEqual(['B', 'A', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_includeLast = function test_operation_includeLast() {
      it('test_operation_includeLast', function () {
        checkEqual([1, 2, 3], includeLast([1, 2, 3], [3]));
        checkEqual([1, 2, 3, 2], includeLast([1, 2, 3], [2]));
        checkEqual([1, 2, 3], includeLast([1, 2, 3], [2, 3]));
        checkEqual([1, 2, 3, 3, 2], includeLast([1, 2, 3], [3, 2]));
        checkEqual(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C', 'c'], includeLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C', 'B'], includeLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(['A', 'B', 'C', 'B', 'c'], includeLast(['A', 'B', 'C'], ['B', 'c']));
        checkEqual(['A', 'B', 'C', 'C', 'B'], includeLast(['A', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C', 'c'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_includeBothEnds = function test_operation_includeBothEnds() {
      it('test_operation_includeBothEnds', function () {
        checkEqual([1, 2, 1], includeBothEnds([1, 2, 1], [1]));
        checkEqual([1, 1, 2, 3, 1], includeBothEnds([1, 2, 3], [1]));
        checkEqual([1, 2, 1, 2], includeBothEnds([1, 2, 1, 2], [1, 2]));
        checkEqual([1, 2, 1], includeBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(['A', 'B', 'A'], includeBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['A', 'A', 'B', 'C', 'A'], includeBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'A', 'B'], includeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual(['{', '}'], includeBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual(['{', 'A', '}'], includeBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['{', 'A', '{', '}', '}'], includeBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual(['A', 'A'], includeBothEnds(['A', 'A'], ['A']));
        checkEqual(['A', 'A', 'A'], includeBothEnds(['A'], ['A']));
        checkEqual(['A', '', 'A'], includeBothEnds([''], ['A']));
        checkEqual(['A', 'A'], includeBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          includeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'A', 'B', 'A', 'D', 'A'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'B', 'A', 'D'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_excludeFirst = function test_operation_excludeFirst() {
      it('test_operation_excludeFirst', function () {
        checkEqual([2, 3], excludeFirst([1, 2, 3], [1]));
        checkEqual([1, 2, 3], excludeFirst([1, 2, 3], [2]));
        checkEqual([3], excludeFirst([1, 2, 3], [1, 2]));
        checkEqual([1, 2, 3], excludeFirst([1, 2, 3], [2, 1]));
        checkEqual(['B', 'C'], excludeFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['C'], excludeFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a', 'B']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_excludeLast = function test_operation_excludeLast() {
      it('test_operation_excludeLast', function () {
        checkEqual([1, 2], excludeLast([1, 2, 3], [3]));
        checkEqual([1, 2, 3], excludeLast([1, 2, 3], [2]));
        checkEqual([1], excludeLast([1, 2, 3], [2, 3]));
        checkEqual([1, 2, 3], excludeLast([1, 2, 3], [3, 2]));
        checkEqual(['A', 'B'], excludeLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A'], excludeLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B', 'c']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_excludeBothEnds = function test_operation_excludeBothEnds() {
      it('test_operation_excludeBothEnds', function () {
        checkEqual([2], excludeBothEnds([1, 2, 1], [1]));
        checkEqual([1, 2, 3], excludeBothEnds([1, 2, 3], [1]));
        checkEqual([], excludeBothEnds([1, 2, 1, 2], [1, 2]));
        checkEqual([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [5]));
        checkEqual([1, 2, 3, 4, 5], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 5]));
        checkEqual([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 4, 5]));
        checkEqual([], excludeBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(['B'], excludeBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['A', 'B', 'A'], excludeBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['A', 'B', 'C'], excludeBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual([], excludeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual([], excludeBothEnds(['A', 'B', 'A'], ['A', 'B'], ['B', 'A']));
        checkEqual([], excludeBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual(['A'], excludeBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['A', '{', '}'], excludeBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual([], excludeBothEnds(['A', 'A'], ['A']));
        checkEqual(['A'], excludeBothEnds(['A'], ['A']));
        checkEqual([''], excludeBothEnds([''], ['A']));
        checkEqual([], excludeBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          excludeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'B', 'A', 'D'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_trimFirst = function test_operation_trimFirst() {
      it('test_operation_trimFirst', function () {
        checkEqual([2, 3], trimFirst([1, 2, 3], [1]));
        checkEqual([2, 3], trimFirst([1, 1, 1, 2, 3], [1]));
        checkEqual([], trimFirst([1, 1, 1, 1, 1], [1]));
        checkEqual([1, 2, 3], trimFirst([1, 2, 3], [2]));
        checkEqual([2, 1, 2, 3], trimFirst([1, 2, 1, 2, 3], [1]));
        checkEqual([3], trimFirst([1, 2, 1, 2, 3], [1, 2]));
        checkEqual([3], trimFirst([1, 2, 1, 2, 3], [2, 1]));
        checkEqual(['B', 'C'], trimFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['B', 'A', 'B', 'C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A']));
        checkEqual(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A', 'B']));
        checkEqual(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_trimLast = function test_operation_trimLast() {
      it('test_operation_trimLast', function () {
        checkEqual([1, 2], trimLast([1, 2, 3], [3]));
        checkEqual([1, 2], trimLast([1, 2, 3, 3, 3], [3]));
        checkEqual([], trimLast([3, 3, 3, 3, 3], [3]));
        checkEqual([1, 2, 3], trimLast([1, 2, 3], [2]));
        checkEqual([1, 2, 3, 2], trimLast([1, 2, 3, 2, 3], [3]));
        checkEqual([1], trimLast([1, 2, 3, 2, 3], [2, 3]));
        checkEqual([1], trimLast([1, 2, 3, 2, 3], [3, 2]));
        checkEqual(['A', 'B'], trimLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C', 'B'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C']));
        checkEqual(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['B', 'C']));
        checkEqual(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_trimBothEnds = function test_operation_trimBothEnds() {
      it('test_operation_trimBothEnds', function () {
        checkEqual([2], trimBothEnds([1, 2, 1], [1]));
        checkEqual([2], trimBothEnds([1, 1, 2, 1, 1, 1], [1]));
        checkEqual([], trimBothEnds([1, 1, 1], [1]));
        checkEqual([2, 3], trimBothEnds([1, 2, 3], [1]));
        checkEqual([2, 3, 1, 2], trimBothEnds([1, 2, 3, 1, 2], [1]));
        checkEqual([1, 2, 3, 1], trimBothEnds([1, 2, 3, 1, 2], [2]));
        checkEqual([3], trimBothEnds([1, 2, 3, 1, 2], [1, 2]));
        checkEqual([3], trimBothEnds([1, 2, 3, 1, 2], [2, 1]));
        checkEqual(['B'], trimBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['A', 'B', 'A'], trimBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['B', 'C'], trimBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual(['B', 'C', 'A', 'B'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A']));
        checkEqual(['A', 'B', 'C', 'A'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B']));
        checkEqual(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A', 'B']));
        checkEqual(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B', 'A']));
        checkEqual([], trimBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['{', '{', '{', '}', '}', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['{', '{', '{', '}'], ['{'], ['}']));
        checkEqual(['A'], trimBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['A', '{'], trimBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['A', 'A'], ['A']));
        checkEqual([], trimBothEnds(['A'], ['A']));
        checkEqual([''], trimBothEnds([''], ['A']));
        checkEqual([], trimBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          trimBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A', 'D'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
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

    var test_operation_filter = function test_operation_filter() {
      it('test_operation_filter', function () {
        checkEqual([0, 2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([0, 2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([1, 3, 5], array.operation.filter([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual([0, 2, 4], array.operation.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_operation_sort = function test_operation_sort() {
      it('test_operation_sort', function () {
        checkEqual([0, 1, 2], array.operation.sort([1, 2, 0]));
        checkEqual([2, 1, 0], array.operation.sort([1, 2, 0], 'descending'));
        checkEqual(['', 'A', 'AA', 'Aa', 'a', 'aA', 'aa'], array.operation.sort(['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''], 'ascending'));
        checkEqual(['', 'a', 'A', 'Aa', 'aa', 'aA', 'AA'], array.operation.sort(['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''], 'ascending', function (v) {
          return v.length;
        })); // object named parameter

        checkEqual([0, 1, 2], array.operation.sort({
          array: [1, 2, 0]
        }));
        checkEqual([2, 1, 0], array.operation.sort({
          array: [1, 2, 0],
          order: 'descending'
        }));
        checkEqual(['', 'a', 'A', 'Aa', 'aa', 'aA', 'AA'], array.operation.sort({
          array: ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''],
          order: 'ascending',
          func: function func(v) {
            return v.length;
          }
        })); // exception

        checkEqual(false, isThrownException(function () {
          array.operation.sort([0, 1]);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sort([0, 1], 'ascending');
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          array.operation.sort([0, 1], 'descending');
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sort([0, 1], 'desc');
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          array.operation.sort([0, 1], 'ascending', null);
        }, 'TypeError'));
      });
    };

    var test_operation_sortNumber = function test_operation_sortNumber() {
      it('test_operation_sortNumber', function () {
        checkEqual([0, 1, 2, 3, 4, 5], array.operation.sortNumberAscending([3, 4, 1, 2, 5, 0]));
        checkEqual([5, 4, 3, 2, 1, 0], array.operation.sortNumberDescending([3, 4, 1, 2, 5, 0])); // exception

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
        checkEqual(['a', 'aa', 'aaa'], array.operation.sortLengthAscending(['aaa', 'a', 'aa']));
        checkEqual(['aaa', 'aa', 'a'], array.operation.sortLengthDescending(['aaa', 'a', 'aa']));
        checkCompare(parts.compare.equalDeep, ['a', [0, 1], 'aaa'], array.operation.sortLengthAscending(['aaa', 'a', [0, 1]]));
        checkCompare(parts.compare.equalDeep, ['aaa', [0, 1], 'a'], array.operation.sortLengthDescending(['aaa', 'a', [0, 1]])); // exception

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
        checkEqual(['A', 'AA', 'Aa', 'a', 'aA', 'aa'], array.operation.sortDictionaryAscending(['a', 'A', 'Aa', 'aa', 'aA', 'AA']));
        checkEqual(['aa', 'aA', 'a', 'Aa', 'AA', 'A'], array.operation.sortDictionaryDescending(['a', 'A', 'aa', 'Aa', 'AA', 'aA']));
        checkEqual(['A', 'AA', 'Aa', 'Ab', 'a', 'aA', 'aa', 'ab'], array.operation.sortDictionaryAscending(['a', 'A', 'aa', 'Aa', 'AA', 'aA', 'ab', 'Ab']));
        checkEqual(['ab', 'aa', 'aA', 'a', 'Ab', 'Aa', 'AA', 'A'], array.operation.sortDictionaryDescending(['a', 'A', 'aa', 'Aa', 'AA', 'aA', 'ab', 'Ab'])); // exception

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

    var test_ArrayEntries_standard = function test_ArrayEntries_standard() {
      it('test_ArrayEntries_standard', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var arrayEntries = function arrayEntries(array) {
          var result = [];

          var _iterator = _createForOfIteratorHelper(array.entries()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  i = _step$value[0],
                  v = _step$value[1];

              result.push([i, v]);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result;
        };

        var array1 = ['a', 'b', 'c'];
        var array2 = [[0, 'a'], [1, 'b'], [2, 'c']];
        checkEqual(array2, arrayEntries(array1));
      });
    };

    var test_arrayToIndexValueArray = function test_arrayToIndexValueArray() {
      it('test_arrayToIndexValueArray', function () {
        var array1 = ['a', 'b', 'c'];
        var array2 = [[0, 'a'], [1, 'b'], [2, 'c']];
        checkEqual(array2, arrayToIndexValueArray(array1)); // only array type

        checkEqual(true, isThrown(function () {
          return objectToKeyValueArray({});
        })); // object parameter

        checkEqual(array2, arrayToIndexValueArray({
          array: array1
        }));
      });
    };

    test_array_NumberArray();
    test_array_IntegerArray();
    test_array_from();
    test_min();
    test_max();
    test_sum();
    test_average();
    test_median();
    test_mode();
    test_unique();
    test_single();
    test_multiple();
    test_group();
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
    test_ArrayEntries_standard();
    test_arrayToIndexValueArray();
  });
};

exports.test_execute_array = test_execute_array;
var _default = {
  test_execute_array: test_execute_array
};
exports["default"] = _default;