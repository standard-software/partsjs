(this["webpackJsonptest_parts"] = this["webpackJsonptest_parts"] || []).push([[2],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

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
        arrayEntries = _parts$array.arrayEntries,
        SortFunc = _parts$array.SortFunc;
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
        popArrayFirst = _parts$array$operatio.popArrayFirst,
        popArrayLast = _parts$array$operatio.popArrayLast,
        pushFirst = _parts$array$operatio.pushFirst,
        pushLast = _parts$array$operatio.pushLast,
        remainFirst = _parts$array$operatio.remainFirst,
        remainLast = _parts$array$operatio.remainLast;
    var _parts$number = parts.number,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd;
    var equal = parts.compare.equal;
    var _parts$type = parts.type,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull;

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
        })); // new

        checkEqual([0, 1, 2], new NumberArray(3));
        checkEqual([1, 2, 3], new NumberArray(1, 3)); // object parameter

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
        })); // exception

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
        })); // new

        checkEqual([0, 1, 2], new IntegerArray(3));
        checkEqual([1, 2, 3], new IntegerArray(1, 3)); // object parameter

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
        })); // exception

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
        })); // func

        checkEqual(-5, array.min([5, 4, 3], function (v) {
          return -1 * v;
        }));
        checkEqual(1, array.min([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }));
        checkEqual({
          index: 0,
          element: {
            num: 1
          },
          value: 1
        }, array.min([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }, true)); // func exception

        checkEqual(true, isThrown(function () {
          array.min([{
            num: 1
          }, {
            num: '2'
          }, {
            num: 3
          }], function (v) {
            return v.num;
          }, true);
        })); // object parameter

        checkEqual(3, array.min({
          array: [5, 4, 3]
        }));
        checkEqual(-5, array.min({
          array: [5, 4, 3],
          func: function func(v) {
            return -1 * v;
          }
        }));
        checkEqual(1, array.min({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          }
        }));
        checkEqual({
          index: 0,
          element: {
            num: 1
          },
          value: 1
        }, array.min({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          },
          detail: true
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
        })); // func

        checkEqual(-3, array.max([5, 4, 3], function (v) {
          return -1 * v;
        }));
        checkEqual(3, array.max([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }));
        checkEqual({
          index: 2,
          element: {
            num: 3
          },
          value: 3
        }, array.max([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }, true)); // func exception

        checkEqual(true, isThrown(function () {
          array.max([{
            num: 1
          }, {
            num: '2'
          }, {
            num: 3
          }], function (v) {
            return v.num;
          }, true);
        })); // object parameter

        checkEqual(5, array.max({
          array: [5, 4, 3]
        }));
        checkEqual(-3, array.max({
          array: [5, 4, 3],
          func: function func(v) {
            return -1 * v;
          }
        }));
        checkEqual(3, array.max({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          }
        }));
        checkEqual({
          index: 2,
          element: {
            num: 3
          },
          value: 3
        }, array.max({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          },
          detail: true
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
          index: [1, undefined, 2],
          count: [2, 2, 1]
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
        var data = [{
          name: 'aaa',
          age: 18
        }, {
          name: 'bbb',
          age: 20
        }, {
          name: 'bbb',
          age: 21
        }, {
          name: 'ccc',
          age: 21
        }, {
          name: 'bbb',
          age: 20
        }];
        checkEqual(array.unique(data, function (d) {
          return d.name;
        }, {
          detail: true
        }), {
          index: ['aaa', 'bbb', 'ccc'],
          result: [{
            name: 'aaa',
            age: 18
          }, {
            name: 'bbb',
            age: 20
          }, {
            name: 'ccc',
            age: 21
          }],
          count: [1, 3, 1]
        });
        var result = array.unique(data, function (d) {
          return d.name;
        }, {
          detail: true
        });
        checkEqual(result.result.map(function (e, i) {
          return {
            name: e.name,
            count: result.count[i]
          };
        }), [{
          name: 'aaa',
          count: 1
        }, {
          name: 'bbb',
          count: 3
        }, {
          name: 'ccc',
          count: 1
        }]);
        checkEqual(array.unique(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        }), {
          index: ['aaa18', 'bbb20', 'bbb21', 'ccc21'],
          result: [{
            name: 'aaa',
            age: 18
          }, {
            name: 'bbb',
            age: 20
          }, {
            name: 'bbb',
            age: 21
          }, {
            name: 'ccc',
            age: 21
          }],
          count: [1, 2, 1, 1]
        });
        var result = array.unique(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        });
        checkEqual(result.result.map(function (e, i) {
          return {
            name: e.name,
            age: e.age,
            count: result.count[i]
          };
        }), [{
          name: 'aaa',
          age: 18,
          count: 1
        }, {
          name: 'bbb',
          age: 20,
          count: 2
        }, {
          name: 'bbb',
          age: 21,
          count: 1
        }, {
          name: 'ccc',
          age: 21,
          count: 1
        }]); // Object Named Parameter

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
          index: [false, true],
          count: [3, 6]
        }, array.unique({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [1, 2],
          index: [false, true],
          count: [3, 6]
        }, array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [1, 2],
          index: [false, true],
          count: [3, 6]
        }, array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, {
          detail: true
        }));
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
        }, true));
        var data = [{
          name: 'aaa',
          age: 18
        }, {
          name: 'bbb',
          age: 20
        }, {
          name: 'bbb',
          age: 21
        }, {
          name: 'ccc',
          age: 21
        }, {
          name: 'bbb',
          age: 20
        }];
        checkEqual(array.group(data, function (d) {
          return d.name;
        }, {
          detail: true
        }), {
          index: ['aaa', 'bbb', 'ccc'],
          result: [[{
            name: 'aaa',
            age: 18
          }], [{
            name: 'bbb',
            age: 20
          }, {
            name: 'bbb',
            age: 21
          }, {
            name: 'bbb',
            age: 20
          }], [{
            name: 'ccc',
            age: 21
          }]]
        });
        checkEqual(array.group(data, function (d) {
          return d.name;
        }, {
          detail: true
        }).result.map(function (e) {
          return {
            name: e[0].name,
            count: e.length
          };
        }), [{
          name: 'aaa',
          count: 1
        }, {
          name: 'bbb',
          count: 3
        }, {
          name: 'ccc',
          count: 1
        }]);
        checkEqual(array.group(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        }), {
          index: ['aaa18', 'bbb20', 'bbb21', 'ccc21'],
          result: [[{
            name: 'aaa',
            age: 18
          }], [{
            name: 'bbb',
            age: 20
          }, {
            name: 'bbb',
            age: 20
          }], [{
            name: 'bbb',
            age: 21
          }], [{
            name: 'ccc',
            age: 21
          }]]
        });
        checkEqual(array.group(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        }).result.map(function (e) {
          return {
            name: e[0].name,
            age: e[0].age,
            count: e.length
          };
        }), [{
          name: 'aaa',
          age: 18,
          count: 1
        }, {
          name: 'bbb',
          age: 20,
          count: 2
        }, {
          name: 'bbb',
          age: 21,
          count: 1
        }, {
          name: 'ccc',
          age: 21,
          count: 1
        }]); // Object Named Parameter

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
        checkEqual(false, isFirst(['A', 'B', 'C'], ['B']));
        checkEqual(true, isFirst([undefined, 1, 2], [isUndefined]));
        checkEqual(true, isFirst([undefined, 1, 2], [undefined]));
        checkEqual(false, isFirst([undefined, 1, 2], [isNull]));
        checkEqual(false, isFirst([undefined, 1, 2], [null]));
        checkEqual(false, isFirst([null, 1, 2], [isUndefined]));
        checkEqual(false, isFirst([null, 1, 2], [undefined]));
        checkEqual(true, isFirst([null, 1, 2], [isNull]));
        checkEqual(true, isFirst([null, 1, 2], [null]));
        checkEqual(true, isFirst([undefined, 1, 2], [isUndefined, 1]));
        checkEqual(true, isFirst([undefined, 1, 2], [undefined, 1]));
        checkEqual(false, isFirst([undefined, 1, 2], [isNull, 1]));
        checkEqual(false, isFirst([undefined, 1, 2], [null, 1]));
        checkEqual(false, isFirst([null, 1, 2], [isUndefined, 1]));
        checkEqual(false, isFirst([null, 1, 2], [undefined, 1]));
        checkEqual(true, isFirst([null, 1, 2], [isNull, 1]));
        checkEqual(true, isFirst([null, 1, 2], [null, 1])); // Object Named Parameter

        checkEqual(true, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(false, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
        checkEqual(true, isFirst(['A', 'B', 'C'], {
          valueArray: ['A']
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
        checkEqual(false, isLast([1], [2, 3]));
        checkEqual(true, isLast([0, 1, undefined], [isUndefined]));
        checkEqual(true, isLast([0, 1, undefined], [undefined]));
        checkEqual(false, isLast([0, 1, undefined], [isNull]));
        checkEqual(false, isLast([0, 1, undefined], [null]));
        checkEqual(false, isLast([0, 1, null], [isUndefined]));
        checkEqual(false, isLast([0, 1, null], [undefined]));
        checkEqual(true, isLast([0, 1, null], [isNull]));
        checkEqual(true, isLast([0, 1, null], [null]));
        checkEqual(true, isLast([0, 1, undefined], [1, isUndefined]));
        checkEqual(true, isLast([0, 1, undefined], [1, undefined]));
        checkEqual(false, isLast([0, 1, undefined], [1, isNull]));
        checkEqual(false, isLast([0, 1, undefined], [1, null]));
        checkEqual(false, isLast([0, 1, null], [1, isUndefined]));
        checkEqual(false, isLast([0, 1, null], [1, undefined]));
        checkEqual(true, isLast([0, 1, null], [1, isNull]));
        checkEqual(true, isLast([0, 1, null], [1, null])); // Object Named Parameter

        checkEqual(true, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(false, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
        checkEqual(true, isLast(['A', 'B', 'C'], {
          valueArray: ['C']
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
        checkEqual([0, 3], deleteLength([0, 1, 2, 3], {
          index: 1,
          length: 2
        }));
        checkEqual([0, 3], deleteLength([0, 1, 2, 3], 1, {
          length: 2
        }));
        checkEqual([0, 1], deleteLength({
          array: [0, 1, 2, 3],
          index: 2
        }));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3], {
          index: 2
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
        checkEqual([1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4]));
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
        checkEqual([1, 2, 3], deleteFirst([0, 1, 2, 3], {
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
        checkEqual([0, 1, 2, 3], deleteLast([0, 1, 2, 3, 4]));
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
        checkEqual([0, 1, 2], deleteLast([0, 1, 2, 3], {
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

    var test_operation_popArrayFirst = function test_operation_popArrayFirst() {
      it('test_operation_popArrayFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual([1], popArrayFirst(array1));
        checkEqual([2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2], popArrayFirst(array1, 2));
        checkEqual([3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['A'], popArrayFirst(array1));
        checkEqual(['B', 'C'], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['A', 'B'], popArrayFirst(array1, 2));
        checkEqual(['C'], array1);
      });
    };

    var test_operation_popArrayLast = function test_operation_popArrayLast() {
      it('test_operation_popArrayLast', function () {
        var array1 = [1, 2, 3];
        checkEqual([3], popArrayLast(array1));
        checkEqual([1, 2], array1);
        var array1 = [1, 2, 3];
        checkEqual([2, 3], popArrayLast(array1, 2));
        checkEqual([1], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['C'], popArrayLast(array1));
        checkEqual(['A', 'B'], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['B', 'C'], popArrayLast(array1, 2));
        checkEqual(['A'], array1);
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
        checkEqual([0, 1, 2], [1, 2, 0].sort(SortFunc.order.normal.ascending));
        checkEqual([2, 1, 0], [1, 2, 0].sort(SortFunc.order.normal.descending));
        checkEqual(['', 'A', 'AA', 'Aa', 'a', 'aA', 'aa'], ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''].sort(SortFunc.order.normal.ascending));
        checkEqual(['', 'a', 'A', 'Aa', 'aa', 'aA', 'AA'], ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''].sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.length;
        }]])));
      });
    };

    var test_operation_sortNumber = function test_operation_sortNumber() {
      it('test_operation_sortNumber', function () {
        checkEqual([0, 1, 2, 3, 4, 5], [3, 4, 1, 2, 5, 0].sort(SortFunc.order.normal.ascending));
        checkEqual([5, 4, 3, 2, 1, 0], [3, 4, 1, 2, 5, 0].sort(SortFunc.order.normal.descending));
      });
    };

    var test_operation_sortLength = function test_operation_sortLength() {
      it('test_operation_sortLength', function () {
        checkEqual(['a', 'aa', 'aaa'], ['aaa', 'a', 'aa'].sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.length;
        }]])));
        checkEqual(['aaa', 'aa', 'a'], ['aaa', 'a', 'aa'].sort(SortFunc([[SortFunc.order.normal.descending, function (v) {
          return v.length;
        }]])));
        checkEqual(['a', [0, 1], 'aaa'], ['aaa', 'a', [0, 1]].sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.length;
        }]])));
        checkEqual(['aaa', [0, 1], 'a'], ['aaa', 'a', [0, 1]].sort(SortFunc([[SortFunc.order.normal.descending, function (v) {
          return v.length;
        }]])));
      });
    };

    var test_SortFunc = function test_SortFunc() {
      it('test_SortFunc', function () {
        var userList = [{
          name: 'c',
          age: 20
        }, {
          name: 'b',
          age: 20
        }, {
          name: 'a',
          age: 20
        }, {
          name: 'c',
          age: 21
        }];
        var sortedUserList = [].concat(userList).sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.name;
        }], [SortFunc.order.normal.descending, function (v) {
          return v.age;
        }]]));
        checkEqual(['a', 'b', 'c', 'c'], parts.array.map(sortedUserList, function (v) {
          return v.name;
        }));
        checkEqual([20, 20, 21, 20], parts.array.map(sortedUserList, function (v) {
          return v.age;
        }));
        var sortedUserList = [].concat(userList).sort(SortFunc([[SortFunc.order.normal.descending, function (v) {
          return v.name;
        }], [SortFunc.order.normal.ascending, function (v) {
          return v.age;
        }]]));
        checkEqual(['c', 'c', 'b', 'a'], parts.array.map(sortedUserList, function (v) {
          return v.name;
        }));
        checkEqual([20, 21, 20, 20], parts.array.map(sortedUserList, function (v) {
          return v.age;
        }));
        checkEqual(false, isThrown(function () {
          SortFunc([[SortFunc.order.normal.descending, function (v) {
            return v.name;
          }], [SortFunc.order.normal.ascending, function (v) {
            return v.age;
          }]]);
        }));
        checkEqual(false, isThrown(function () {
          SortFunc([[SortFunc.order.normal.descending, function (v) {
            return v.name;
          }, true], [SortFunc.order.normal.ascending, function (v) {
            return v.age;
          }]]);
        }));
        checkEqual(true, isThrown(function () {
          SortFunc([[SortFunc.order.normal.descending], [SortFunc.order.normal.ascending, function (v) {
            return v.age;
          }]]);
        }));
      });
    };

    var test_SortFunc_Dictionary = function test_SortFunc_Dictionary() {
      it('test_SortFunc_Dictionary', function () {
        var unsortedList = ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'];
        var sortedList = [].concat(unsortedList).sort(SortFunc.order.dictionaryUpperCase.ascending);
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc.order.dictionaryUpperCase.descending);
        checkEqual(['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryUpperCase.ascending, function (v) {
          return v;
        }]]));
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryUpperCase.descending, function (v) {
          return v;
        }]]));
        checkEqual(['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryLowerCase.ascending, function (v) {
          return v;
        }]]));
        checkEqual(['a', 'A', 'aa', 'aA', 'Aa', 'AA', 'ab', 'aB', 'Ab', 'AB', 'b', 'B'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryLowerCase.descending, function (v) {
          return v;
        }]]));
        checkEqual(['B', 'b', 'AB', 'Ab', 'aB', 'ab', 'AA', 'Aa', 'aA', 'aa', 'A', 'a'], sortedList);
      });
    };

    var test_SortFunc_Version = function test_SortFunc_Version() {
      it('test_SortFunc_Version', function () {
        var versions = ['5.0.0.', '1.3.0.9', '0.2.0', '3.1.2', '0.1.6', '5.0.0', '3.3.3.3', '3.3.3.3.3', '3.10', '0.2.0', '0.2.0a', '0.2.0aa', '0.2.0AA', '0.2.0Aa', '0.2.0aA', '0.2.0c', '0.2.0b', '0.2.0A', '0.2.0C', '0.2.0B', '0.2.0.a', '0.2.0.c', '0.2.0.b', '0.2.0.A', '0.2.0.C', '0.2.0.B', '5.0.0.', '5.0.0.0'];
        var outputVersions = ['5.0.0.0', '5.0.0.', '5.0.0.', '5.0.0', '3.10', '3.3.3.3.3', '3.3.3.3', '3.1.2', '1.3.0.9', '0.2.0C', '0.2.0c', '0.2.0B', '0.2.0b', '0.2.0AA', '0.2.0Aa', '0.2.0aA', '0.2.0aa', '0.2.0A', '0.2.0a', '0.2.0.C', '0.2.0.c', '0.2.0.B', '0.2.0.b', '0.2.0.A', '0.2.0.a', '0.2.0', '0.2.0', '0.1.6'];
        var sortedVersions = [].concat(versions).sort(SortFunc.order.version.descending);
        checkEqual(outputVersions, sortedVersions);
        var sortedVersions = [].concat(versions).sort(SortFunc.order.version.ascending);
        checkEqual([].concat(outputVersions).reverse(), sortedVersions);
        var sortedVersions = [].concat(versions).sort(SortFunc([[SortFunc.order.version.descending, function (v) {
          return v;
        }]]));
        checkEqual(outputVersions, sortedVersions);
        var sortedVersions = [].concat(versions).sort(SortFunc([[SortFunc.order.version.ascending, function (v) {
          return v;
        }]]));
        checkEqual([].concat(outputVersions).reverse(), sortedVersions);
        var items = [{
          name: 'a',
          version: {
            major: '1',
            minor: '1',
            build: '1',
            revision: '1'
          }
        }, {
          name: 'b',
          version: {
            major: '1',
            minor: '10',
            build: '1',
            revision: '1'
          }
        }, {
          name: 'c',
          version: {
            major: '1',
            minor: '2',
            build: '1',
            revision: '1'
          }
        }, {
          name: 'd',
          version: {
            major: '1',
            minor: '1',
            build: '1',
            revision: '1b'
          }
        }, {
          name: 'e',
          version: {
            major: '1',
            minor: '1',
            build: '1',
            revision: '1a'
          }
        }];
        var sortedItems = [].concat(items).sort(SortFunc([[SortFunc.order.version.ascending, function (i) {
          var _i$version = i.version,
              major = _i$version.major,
              minor = _i$version.minor,
              build = _i$version.build,
              revision = _i$version.revision;
          return major + minor + build + revision;
        }]]));
        checkEqual(['a', 'e', 'd', 'c', 'b'], parts.array.map(sortedItems, function (i) {
          return i.name;
        }));
        var sortedItems = [].concat(items).sort(SortFunc([[SortFunc.order.version.descending, function (i) {
          var _i$version2 = i.version,
              major = _i$version2.major,
              minor = _i$version2.minor,
              build = _i$version2.build,
              revision = _i$version2.revision;
          return major + minor + build + revision;
        }]]));
        checkEqual(['b', 'c', 'd', 'e', 'a'], parts.array.map(sortedItems, function (i) {
          return i.name;
        }));
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
            } // parts.loop(array)((v, i) => {
            //   result.push([i, v]);
            // });

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result;
        };

        checkEqual([[0, 'a'], [1, 'b'], [2, 'c']], arrayEntries(['a', 'b', 'c']));
      });
    };

    var test_arrayEntries = function test_arrayEntries() {
      it('test_arrayToIndexValueArray', function () {
        checkEqual([[0, 'a'], [1, 'b'], [2, 'c']], arrayEntries(['a', 'b', 'c'])); // only array type

        checkEqual(true, isThrown(function () {
          return arrayEntries({});
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
    test_operation_popArrayFirst();
    test_operation_popArrayLast();
    test_operation_remainFirst();
    test_operation_remainLast();
    test_operation_filter();
    test_operation_sort();
    test_operation_sortNumber();
    test_operation_sortLength();
    test_SortFunc();
    test_SortFunc_Dictionary();
    test_SortFunc_Version();
    test_ArrayEntries_standard();
    test_arrayEntries();
  });
};

exports.test_execute_array = test_execute_array;
var _default = {
  test_execute_array: test_execute_array
};
exports["default"] = _default;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_common = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_common = function test_execute_common(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      testCounter = _parts$test.testCounter;
  describe('test_execute_common', function () {
    var clone = parts.clone,
        merge = parts.merge,
        isUndefined = parts.isUndefined,
        isObject = parts.isObject,
        isArray = parts.isArray;
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        checkCompare = _parts$test2.checkCompare,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$object = parts.object,
        objectEntries = _parts$object.objectEntries,
        objectFromEntries = _parts$object.objectFromEntries;
    var map = parts.array.map;

    var test_clone_object = function test_clone_object() {
      it('test_clone_object', function () {
        var testObject1 = {
          a: 1,
          b: 2,
          c: 3
        }; // no clone

        var object1 = testObject1;
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(0, testObject1.a);
        testObject1.a = 1; // clone

        var object1 = clone(testObject1, clone.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c); // no clone deep

        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = clone(testObject3, clone.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d === testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(7, testObject3.d.a); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = 1;
          var object2 = clone(object1, clone.func.DefaultArray());
          object2.a = 0;
          checkEqual(1, object1.a);
          checkEqual(0, object2.a);
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = clone(object1, clone.func.DefaultArray());
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectFromNull(object2.a));
          testCounter();
          checkEqual(true, parts.isObjectFromNull(object2));
          checkEqual(false, object1 === object2);
          checkEqual(true, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        } // module object clone no support


        if (parts.isModule(parts)) {
          var cloneParts = parts.clone(parts, clone.func.DefaultArray());
          checkEqual(true, cloneParts === parts);
          checkEqual(true, parts.isModule(cloneParts));
          checkEqual(false, parts.isObjectNormal(cloneParts));
          checkEqual(false, parts.isObjectFromNull(cloneParts));
        }
      });
    };

    var test_clone_array = function test_clone_array() {
      it('test_clone_array', function () {
        var testArray1 = [1, 2, 3]; // no clone

        var array1 = testArray1;
        array1[0] = 0;
        checkEqual(0, array1[0], 'test');
        checkEqual(0, testArray1[0]);
        testArray1[0] = 1; // clone

        var array1 = clone(testArray1, clone.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray1[0]); // no clone deep

        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = clone(testArray3, clone.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(true, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('d,b,c', testArray3[3].join(','));
      });
    };

    var test_clone_date = function test_clone_date() {
      it('test_clone_date', function () {
        // no clone
        var testDate1 = new Date('2019/10/11');
        var date1 = testDate1;
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate());
        checkEqual(2019, testDate1.getFullYear());
        checkEqual(10, testDate1.getMonth() + 1);
        checkEqual(12, testDate1.getDate()); // date type clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, clone.func.DefaultArray());
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate()); // object array only clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, [clone.func.arraySeries, clone.func.object]);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(12, testDate1.getDate()); // object array date clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, [clone.func.date, clone.func.arraySeries, clone.func.object]);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate());
      });
    };

    var test_clone_function = function test_clone_function() {
      it('test_clone_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var func1 = testFunc1;
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1()); // clone

        var func1 = clone(testFunc1, clone.func.DefaultArray());
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1());
      });
    };

    var test_clone_regexp = function test_clone_regexp() {
      it('test_clone_regexp', function () {
        var testRegExp1 = new RegExp('^a'); // no clone

        var regexp1 = testRegExp1;
        checkEqual(true, regexp1 === testRegExp1, 'test_clone_regexp 1');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone

        var regexp1 = clone(testRegExp1, clone.func.DefaultArray());
        checkEqual(false, regexp1 === testRegExp1);
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone no RegExpFunction

        var regexp1 = clone(testRegExp1, [clone.func.objectLike]);
        checkEqual(false, regexp1 === testRegExp1, 'test_clone_regexp clone');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(false, '^a' === regexp1.source); // clone

        var testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2, clone.func.DefaultArray());
        checkEqual(false, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(true, '^a' === regexp1.source); // clone no RegExpFunction

        var regexp1 = clone(testRegExp2, [clone.func.objectLike]);
        checkEqual(false, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(false, '^a' === regexp1.source);
      });
    };

    var test_clone_Fast_object = function test_clone_Fast_object() {
      it('test_clone_Fast_object', function () {
        var testObject1 = {
          a: 1,
          b: 2,
          c: 3
        }; // no clone

        var object1 = testObject1;
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(0, testObject1.a);
        testObject1.a = 1; // clone

        var object1 = clone(testObject1);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c); // no clone deep

        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = clone(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d === testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(7, testObject3.d.a); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = 1;
          var object2 = clone(object1);
          object2.a = 0;
          checkEqual(1, object1.a);
          checkEqual(0, object2.a);
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = clone(object1);
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectFromNull(object2.a));
          checkEqual(true, parts.isObjectNormal(object2)); // clone Fast is no support Object.create(null)

          checkEqual(false, object1 === object2);
          checkEqual(true, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        } // module object clone no support


        if (parts.isModule(parts)) {
          var cloneParts = parts.clone(parts);
          checkEqual(true, cloneParts === parts);
          checkEqual(true, parts.isModule(cloneParts));
          checkEqual(false, parts.isObjectNormal(cloneParts));
          checkEqual(false, parts.isObjectFromNull(cloneParts));
        }
      });
    };

    var test_clone_Fast_array = function test_clone_Fast_array() {
      it('test_clone_Fast_array', function () {
        var testArray1 = [1, 2, 3]; // no clone

        var array1 = testArray1;
        array1[0] = 0;
        checkEqual(0, array1[0], 'test');
        checkEqual(0, testArray1[0]);
        testArray1[0] = 1; // clone

        var array1 = clone(testArray1);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray1[0]); // no clone deep

        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = clone(testArray3);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(true, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('d,b,c', testArray3[3].join(','));
      });
    };

    var test_clone_Fast_date = function test_clone_Fast_date() {
      it('test_clone_Fast_date', function () {
        // no clone
        var testDate1 = new Date('2019/10/11');
        var date1 = testDate1;
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate());
        checkEqual(2019, testDate1.getFullYear());
        checkEqual(10, testDate1.getMonth() + 1);
        checkEqual(12, testDate1.getDate()); // date type clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(12, testDate1.getDate()); // clone Fast is not support date clone
      });
    };

    var test_clone_Fast_function = function test_clone_Fast_function() {
      it('test_clone_Fast_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var func1 = testFunc1;
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1()); // clone

        var func1 = clone(testFunc1);
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1());
      });
    };

    var test_clone_Fast_regexp = function test_clone_Fast_regexp() {
      it('test_clone_Fast_regexp', function () {
        var testRegExp1 = new RegExp('^a'); // no clone

        var regexp1 = testRegExp1;
        checkEqual(true, regexp1 === testRegExp1, 'test_clone_regexp 1');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone

        var regexp1 = clone(testRegExp1);
        checkEqual(true, regexp1 === testRegExp1);
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone Fast is not support RegExp clone
        // clone

        var testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2);
        checkEqual(true, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(true, '^a' === regexp1.source); // clone Fast is not support RegExp clone
      });
    };

    var test_clone_objectParameter = function test_clone_objectParameter() {
      it('test_clone_objectParameter', function () {
        var testObject1 = {
          a: 1,
          b: 2,
          c: 3
        }; // clone

        var object1 = clone({
          source: testObject1
        });
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c); // date type clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: clone.func.DefaultArray()
        });
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate()); // object array only clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: [clone.func.arraySeries, clone.func.object]
        });
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(12, testDate1.getDate()); // object array date clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: [clone.func.date, clone.func.arraySeries, clone.func.object]
        });
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate());
      });
    };

    var test_cloneDeep_object = function test_cloneDeep_object() {
      it('test_cloneDeep_object', function () {
        // clone deep
        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = cloneDeep(testObject3, cloneDeep.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = cloneDeep(object1, cloneDeep.func.DefaultArray());
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectFromNull(object2.a));
          checkEqual(true, parts.isObjectFromNull(object2));
          checkEqual(false, object1 === object2);
          checkEqual(false, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        }
      });
    };

    var test_cloneDeep_array = function test_cloneDeep_array() {
      it('test_cloneDeep_array', function () {
        // clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = cloneDeep(testArray3, cloneDeep.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(false, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('a,b,c', testArray3[3].join(','));
      });
    };

    var test_cloneDeep_object_array_mix = function test_cloneDeep_object_array_mix() {
      it('test_cloneDeep_object_array_mix', function () {
        // no clone deep array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = clone(testValue1, cloneDeep.func.DefaultArray());
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(4, testValue1[3].a); // clone deep array object

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = cloneDeep(testValue1, cloneDeep.func.DefaultArray());
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(1, testValue1[3].a); // no clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = clone(testValue2, cloneDeep.func.DefaultArray());
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]); // clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = cloneDeep(testValue2, cloneDeep.func.DefaultArray());
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(1, testValue2.d[0]); // no clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = clone(testValue1, cloneDeep.func.DefaultArray());
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(6, testValue1[3].c[0]); // clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = cloneDeep(testValue1, cloneDeep.func.DefaultArray());
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(3, testValue1[3].c[0]); // no clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = clone(testValue2, cloneDeep.func.DefaultArray());
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e); // clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = cloneDeep(testValue2, cloneDeep.func.DefaultArray());
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(4, testValue2.d[0].e);
      });
    };

    var test_cloneDeep_date = function test_cloneDeep_date() {
      it('test_cloneDeep_date', function () {
        // no clone
        var date1 = new Date('2019/10/11');
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate()); // clone array date no clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = clone(value1, cloneDeep.func.DefaultArray());
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep array date clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // cloneDeep ignore date

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, [clone.func.arraySeries, clone.func.object]);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep add cloneDate

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, [clone.func.date, clone.func.arraySeries, clone.func.object]);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // date1 clone same object

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'date1 clone same object');
      });
    };

    var test_cloneDeep_regExp = function test_cloneDeep_regExp() {
      it('test_cloneDeep_regExp', function () {
        var regexp1 = new RegExp('^a'); // clone Deep

        var regexp2 = cloneDeep(regexp1, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep no RegExpFunction

        var regexp2 = cloneDeep(regexp1, [clone.func.objectLike]);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep no RegExpFunction in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, [clone.func.objectLike]);
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1], cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // clone Deep no RegExpFunction in Array

        var regexp2 = cloneDeep([regexp1], [clone.func.objectLike]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);
        var regexp1 = /^a/; // clone Deep

        var regexp2 = cloneDeep(regexp1, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep no RegExpFunction

        var regexp2 = cloneDeep(regexp1, [clone.func.objectLike]);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep no RegExpFunction in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, [clone.func.objectLike]);
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1], cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // clone Deep no RegExpFunction in Array

        var regexp2 = cloneDeep([regexp1], [clone.func.objectLike]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source); // regexp1 clone same object

        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'regexp1 clone same object');
      });
    };

    var test_cloneDeep_objectParameter = function test_cloneDeep_objectParameter() {
      it('test_cloneDeep_objectParameter', function () {
        // clone deep
        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = cloneDeep({
          source: testObject3
        }, cloneDeep.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a); // cloneDeep array date clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: cloneDeep.func.DefaultArray()
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // cloneDeep ignore date

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: [clone.func.arraySeries, clone.func.object]
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep add cloneDate

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: [clone.func.date, clone.func.arraySeries, clone.func.object]
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // date1 clone same object

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: cloneDeep.func.DefaultArray()
        });
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'date1 clone same object');
      });
    };

    var test_cloneDeep_function = function test_cloneDeep_function() {
      it('test_cloneDeep_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var object1 = {
          func: testFunc1
        };
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone

        var object1 = clone({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone Deep

        var object1 = cloneDeep({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // no clone

        var array1 = [testFunc1];
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone

        var array1 = clone([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone Deep

        var array1 = cloneDeep([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());
      });
    }; // const test_cloneDeep_moment = () => {
    //   it('test_cloneDeep_moment', () => {
    //     if (parts.platform.isWindowsScriptHost()) {
    //       return;
    //     }
    //     if (parts.platform.isWebBrowser()) {
    //       return;
    //     }
    //     import moment from 'moment';
    //     // moment type clone no
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];
    //     var value1 = clone(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual(true, value1[3] === testValue1[3]);
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // moment object fail
    //     // const cloneValue = new source.constructor();
    //     // moment type cloneDeep
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];
    //     // initialise
    //     cloneDeep.clear();
    //     var value1 = cloneDeep(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual(true, value1[3] === testValue1[3]); // clone
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // but not correct
    //     // moment type cloneDeep moment clone function
    //     clone.func.moment = (source, bufferWrite)  => {
    //       if (!moment.isMoment(source)) {
    //         return undefined;
    //       }
    //       const cloneValue = moment(source);
    //       bufferWrite(source, cloneValue);
    //       return cloneValue;
    //     };
    //     cloneDeep.reset();
    //     cloneDeep.add(clone.func.moment);
    //     var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
    //     var testValue1 = [1, 2, 3, moment1];
    //     var value1 = cloneDeep(testValue1);
    //     value1[3].set('year', 2018);
    //     checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
    //     checkEqual('2019/10/11', testValue1[3].format('YYYY/MM/DD'));
    //     // correct
    //     cloneDeep.reset();
    //   });
    // };


    var test_cloneDeep_symbol = function test_cloneDeep_symbol() {
      it('test_cloneDeep_symbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true, parts.isSymbol(symbol1));
        var value1 = [symbol1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(true, value1[0] === value2[0]);
        checkEqual(true, symbol1 === value2[0]);

        clone.func.forceSymbol = function (source) {
          var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
            return value;
          };

          if (!parts.isSymbol(source)) {
            return undefined;
            ;
          }

          var cloneValue = Symbol();
          bufferWrite(source, cloneValue);
          return cloneValue;
        };

        var value1 = [symbol1];
        var value2 = cloneDeep(value1, [cloneDeep.func.forceSymbol].concat(_toConsumableArray(cloneDeep.func.DefaultArray())));
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(false, value1[0] === value2[0] // cloneDeep and new symbol
        );
        checkEqual(false, symbol1 === value2[0] // cloneDeep and new symbol
        );
      });
    };

    var test_cloneDeep_map = function test_cloneDeep_map() {
      it('test_cloneDeep_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));
        checkEqual(false, parts.isObject(map1));
        checkEqual(true, parts.isObjectLike(map1));
        var map2 = clone(map1, [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.objectLike]);
        checkEqual(undefined, map2.get('key1'));
        checkEqual(false, map1 === map2);
        var map2 = cloneDeep(map1, [cloneDeep.func.date, cloneDeep.func.regExp, cloneDeep.func.ignoreFunction, cloneDeep.func.objectLike]);
        checkEqual(undefined, map2.get('key1')); // copy but no clone

        checkEqual(false, map1 === map2);
        var map2 = clone(map1, clone.func.DefaultArray());
        checkEqual('value1', map2.get('key1')); // clone

        checkEqual(false, map1 === map2);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual('value1', map2.get('key1')); // clone

        checkEqual(false, map1 === map2); // map object array

        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        map1.set('c', {
          a: [1, 2, 3, {
            b: 'c'
          }]
        });
        map1.set('d', [1, 2, 3, {
          b: 'c',
          d: [4, 5, 6]
        }]);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6, map2.get('d')[3].d[2]); // clone map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = clone(map1, clone.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(true, map1.get('a') === map2.get('a')); // cloneDeep map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(false, map1.get('a') === map2.get('a'));
      });
    };

    var test_cloneDeep_set = function test_cloneDeep_set() {
      it('test_cloneDeep_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true, set1.has('value1'));
        checkEqual(true, set1.has('value2'));
        checkEqual(false, set1.has('value3'));
        checkEqual(false, parts.isObject(set1));
        checkEqual(true, parts.isObjectLike(set1));
        var set2 = clone(set1, [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.objectLike]);
        checkEqual(false, set2.has('value1'));
        checkEqual(false, set1 === set2);
        var set2 = cloneDeep(set1, [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.objectLike]);
        checkEqual(false, set2.has('value1')); // no clone

        checkEqual(false, set1 === set2);
        var set2 = clone(set1, clone.func.DefaultArray());
        checkEqual(true, set2.has('value1')); // clone

        checkEqual(false, set1 === set2);
        var set2 = cloneDeep(set1, cloneDeep.func.DefaultArray());
        checkEqual(true, set2.has('value1')); // clone

        checkEqual(false, set1 === set2);
      });
    };

    var test_cloneDeep_CircularReference = function test_cloneDeep_CircularReference() {
      it('test_cloneDeep_CircularReference', function () {
        var object1 = {
          b: 'test'
        };
        object1.a = object1;
        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b);
        var object2 = cloneDeep(object1, cloneDeep.func.DefaultArray());
        checkEqual('test', object2.b);
        checkEqual('test', object2.a.b);
        checkEqual('test', object2.a.a.b);
        checkEqual(false, object1 === object2);
        checkEqual(true, object1.a === object1);
        checkEqual(true, object2.a === object2);
        checkEqual(false, object2.a === object1.a);
      });
    };

    var test_cloneDeep_Fast_object = function test_cloneDeep_Fast_object() {
      it('test_cloneDeep_Fast_object', function () {
        // clone deep
        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = cloneDeep(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a); // object from null to object normal

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = cloneDeep(object1);
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectNormal(object2.a));
          checkEqual(true, parts.isObjectNormal(object2));
          checkEqual(false, object1 === object2);
          checkEqual(false, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        }
      });
    };

    var test_cloneDeep_Fast_array = function test_cloneDeep_Fast_array() {
      it('test_cloneDeep_Fast_array', function () {
        // clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = cloneDeep(testArray3);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(false, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('a,b,c', testArray3[3].join(','));
      });
    };

    var test_cloneDeep_Fast_object_array_mix = function test_cloneDeep_Fast_object_array_mix() {
      it('test_cloneDeep_Fast_object_array_mix', function () {
        // no clone deep array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = clone(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(4, testValue1[3].a); // clone deep array object

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = cloneDeep(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(1, testValue1[3].a); // no clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = clone(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]); // clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = cloneDeep(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(1, testValue2.d[0]); // no clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = clone(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(6, testValue1[3].c[0]); // clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = cloneDeep(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(3, testValue1[3].c[0]); // no clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = clone(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e); // clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = cloneDeep(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(4, testValue2.d[0].e);
      });
    };

    var test_cloneDeep_Fast_date = function test_cloneDeep_Fast_date() {
      it('test_cloneDeep_Fast_date', function () {
        // no clone
        var date1 = new Date('2019/10/11');
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate()); // clone array date no clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = clone(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep array date no clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // date1 clone same object

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1);
        checkEqual(true, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'date1 clone same object');
      });
    };

    var test_cloneDeep_Fast_regExp = function test_cloneDeep_Fast_regExp() {
      it('test_cloneDeep_Fast_regExp', function () {
        var regexp1 = new RegExp('^a'); // clone Deep

        var regexp2 = cloneDeep(regexp1);
        checkEqual(true, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(true, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1]);
        checkEqual(true, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source);
        var regexp1 = /^a/; // clone Deep

        var regexp2 = cloneDeep(regexp1);
        checkEqual(true, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(true, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1]);
        checkEqual(true, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // regexp1 clone same object

        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1);
        checkEqual(true, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'regexp1 clone same object');
      });
    };

    var test_cloneDeep_Fast_function = function test_cloneDeep_Fast_function() {
      it('test_cloneDeep_Fast_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var object1 = {
          func: testFunc1
        };
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone

        var object1 = clone({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone Deep

        var object1 = cloneDeep({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // no clone

        var array1 = [testFunc1];
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone

        var array1 = clone([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone Deep

        var array1 = cloneDeep([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());
      });
    };

    var test_cloneDeep_Fast_symbol = function test_cloneDeep_Fast_symbol() {
      it('test_cloneDeep_Fast_symbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true, parts.isSymbol(symbol1));
        var value1 = [symbol1];
        var value2 = cloneDeep(value1);
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(true, value1[0] === value2[0]);
        checkEqual(true, symbol1 === value2[0]);
      });
    };

    var test_cloneDeep_Fast_map = function test_cloneDeep_Fast_map() {
      it('test_cloneDeep_Fast_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));
        checkEqual(false, parts.isObject(map1));
        checkEqual(true, parts.isObjectLike(map1));
        var map2 = cloneDeep(map1);
        checkEqual('value1', map2.get('key1'));
        checkEqual(true, map1 === map2); // no clone
        // map object array

        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        map1.set('c', {
          a: [1, 2, 3, {
            b: 'c'
          }]
        });
        map1.set('d', [1, 2, 3, {
          b: 'c',
          d: [4, 5, 6]
        }]);
        var map2 = cloneDeep(map1);
        checkEqual(true, map1 === map2); // no clone no copy

        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6, map2.get('d')[3].d[2]); // cloneDeep map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1);
        checkEqual(true, map1 === map2); // no clone no copy

        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(true, map1.get('a') === map2.get('a'));
      });
    };

    var test_cloneDeep_Fast_set = function test_cloneDeep_Fast_set() {
      it('test_cloneDeep_Fast_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true, set1.has('value1'));
        checkEqual(true, set1.has('value2'));
        checkEqual(false, set1.has('value3'));
        checkEqual(false, parts.isObject(set1));
        checkEqual(true, parts.isObjectLike(set1));
        var set2 = cloneDeep(set1);
        checkEqual(true, set2.has('value1')); // no copy no clone

        checkEqual(true, set1 === set2);
      });
    };

    var test_cloneDeep_Fast_CircularReference = function test_cloneDeep_Fast_CircularReference() {
      it('test_cloneDeep_Fast_CircularReference', function () {
        var object1 = {
          b: 'test'
        };
        object1.a = object1;
        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b); // thread 'main' has overflowed its stack
        // const object2 = cloneDeep(object1);
      });
    };

    var test_merge = function test_merge() {
      it('test_merge', function () {
        // object
        var testObjectArray = [{
          key1: 100,
          key2: 200,
          key3: 300
        }, {
          key1: 100,
          key2: 150,
          key3: 100
        }, {
          key1: 100,
          key3: 200,
          key4: 100
        }];
        checkEqual({
          key1: 100,
          key2: 150,
          key3: 200,
          key4: 100
        }, merge(testObjectArray));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge(testObjectArray, function (v, t) {
          return t + v;
        }, {
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge(testObjectArray, function (v, t) {
          return isUndefined(t) ? v : t + v;
        }));
        checkEqual({
          key1: [3, 300],
          key2: [2, 350],
          key3: [3, 600],
          key4: [1, 100]
        }, merge(testObjectArray, function (v, t) {
          return isUndefined(t) ? [1, v] : [t[0] + 1, t[1] + v];
        }));
        checkEqual({
          key1: 100,
          key2: 175,
          key3: 200,
          key4: 100
        }, objectFromEntries(map(objectEntries(merge(testObjectArray, function (v, t) {
          return isUndefined(t) ? [1, v] : [t[0] + 1, t[1] + v];
        })), function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return [key, value[1] / value[0]];
        }))); // array

        var testArrayArray = [[100, 200, 300], [100, 150, 100], [100,, 200, 100]];
        checkEqual([100, 150, 200, 100], merge(testArrayArray));
        checkEqual([300, 350, 600, 100], merge(testArrayArray, function (v, t) {
          return t + v;
        }, [0, 0, 0, 0]));
        checkEqual([300, 350, 600, 100], merge(testArrayArray, function (v, t) {
          return isUndefined(t) ? v : t + v;
        }));
        checkEqual([[3, 300], [2, 350], [3, 600], [1, 100]], merge(testArrayArray, function (v, t) {
          return isUndefined(t) ? [1, v] : [t[0] + 1, t[1] + v];
        })); // object parameter

        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          dataArray: testObjectArray,
          func: function func(v, t) {
            return t + v;
          },
          target: {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge(testObjectArray, {
          func: function func(v, t) {
            return t + v;
          },
          target: {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge(testObjectArray, function (v, t) {
          return t + v;
        }, {
          target: {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }
        })); // exception

        checkEqual({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, merge([], function (v, t) {
          return isUndefined(t) ? v : t + v;
        }, {
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }));
        checkEqual(false, isThrown(function () {
          merge([], function (v, t) {
            return isUndefined(t) ? v : t + v;
          }, {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          merge(['123'], function (v, t) {
            return isUndefined(t) ? v : t + v;
          }, {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          merge([], 123, {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          merge([], function (v, t) {
            return isUndefined(t) ? v : t + v;
          }, '123');
        }));
      });
    };

    var setProperty = parts.setProperty,
        recursive = parts.recursive;

    var cloneDeepUseRecursive = function cloneDeepUseRecursive(source) {
      var result;

      if (isObject(source)) {
        result = {};
      } else if (isArray(source)) {
        result = [];
      } else {
        return source;
      }

      recursive(source, function (value, key, level, path) {
        if (isObject(value)) {
          setProperty(result, path + '.' + key, {});
          return value;
        } else if (isArray(value)) {
          setProperty(result, path + '.' + key, []);
          return value;
        } else {
          setProperty(result, path + '.' + key, value);
        }
      });
      return result;
    };

    test_clone_object();
    test_clone_array();
    test_clone_date();
    test_clone_function();
    test_clone_regexp();
    test_clone_objectParameter();
    test_clone_Fast_object();
    test_clone_Fast_array();
    test_clone_Fast_date();
    test_clone_Fast_function();
    test_clone_Fast_regexp();
    var cloneDeep;
    cloneDeep = parts.common.cloneDeep;
    test_cloneDeep_object();
    test_cloneDeep_array();
    test_cloneDeep_object_array_mix();
    test_cloneDeep_date();
    test_cloneDeep_regExp();
    test_cloneDeep_objectParameter();
    test_cloneDeep_function(); // test_cloneDeep_moment();

    test_cloneDeep_symbol();
    test_cloneDeep_map();
    test_cloneDeep_set();
    test_cloneDeep_CircularReference();
    cloneDeep = cloneDeepUseRecursive;
    test_cloneDeep_Fast_object();
    test_cloneDeep_Fast_array();
    test_cloneDeep_Fast_object_array_mix();
    test_cloneDeep_Fast_date();
    test_cloneDeep_Fast_regExp();
    test_cloneDeep_Fast_function();
    test_cloneDeep_Fast_symbol();
    test_cloneDeep_Fast_map();
    test_cloneDeep_Fast_set();
    test_cloneDeep_Fast_CircularReference();
    cloneDeep = parts.common.cloneDeep;
    test_cloneDeep_Fast_object();
    test_cloneDeep_Fast_array();
    test_cloneDeep_Fast_object_array_mix();
    test_cloneDeep_Fast_date();
    test_cloneDeep_Fast_regExp();
    test_cloneDeep_Fast_function();
    test_cloneDeep_Fast_symbol();
    test_cloneDeep_Fast_map();
    test_cloneDeep_Fast_set();
    test_cloneDeep_Fast_CircularReference();
    test_merge();
  });
};

exports.test_execute_common = test_execute_common;
var _default = {
  test_execute_common: test_execute_common
};
exports["default"] = _default;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_compare = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_compare = function test_execute_compare(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_compare', function () {
    var _parts$type = parts.type,
        isNull = _parts$type.isNull,
        isUndefined = _parts$type.isUndefined,
        isNaNStrict = _parts$type.isNaNStrict,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isObjectLike = _parts$type.isObjectLike,
        isArray = _parts$type.isArray,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
        isNotNull = _parts$type.isNotNull,
        isNotUndefined = _parts$type.isNotUndefined,
        isNotNaNStrict = _parts$type.isNotNaNStrict,
        isNotBoolean = _parts$type.isNotBoolean,
        isNotNumber = _parts$type.isNotNumber,
        isNotInteger = _parts$type.isNotInteger,
        isNotString = _parts$type.isNotString,
        isNotFunction = _parts$type.isNotFunction,
        isNotObject = _parts$type.isNotObject,
        isNotObjectType = _parts$type.isNotObjectType,
        isNotArray = _parts$type.isNotArray,
        isNotDate = _parts$type.isNotDate,
        isNotRegExp = _parts$type.isNotRegExp,
        isNotException = _parts$type.isNotException,
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray,
        isUndefinedArray = _parts$type.isUndefinedArray,
        isNullArray = _parts$type.isNullArray,
        isNaNStrictArray = _parts$type.isNaNStrictArray,
        isBooleanArray = _parts$type.isBooleanArray,
        isNumberArray = _parts$type.isNumberArray,
        isIntegerArray = _parts$type.isIntegerArray,
        isStringArray = _parts$type.isStringArray,
        isFunctionArray = _parts$type.isFunctionArray,
        isObjectArray = _parts$type.isObjectArray,
        isObjectNormalArray = _parts$type.isObjectNormalArray,
        isObjectFromNullArray = _parts$type.isObjectFromNullArray,
        isObjectLikeArray = _parts$type.isObjectLikeArray,
        isModuleArray = _parts$type.isModuleArray,
        isArrayArray = _parts$type.isArrayArray,
        isArraySeriesArray = _parts$type.isArraySeriesArray,
        isDateArray = _parts$type.isDateArray,
        isRegExpArray = _parts$type.isRegExpArray,
        isExceptionArray = _parts$type.isExceptionArray,
        isBooleanObjectArray = _parts$type.isBooleanObjectArray,
        isNumberObjectArray = _parts$type.isNumberObjectArray,
        isStringObjectArray = _parts$type.isStringObjectArray,
        isEmptyObjectArray = _parts$type.isEmptyObjectArray,
        isEmptyArrayArray = _parts$type.isEmptyArrayArray,
        isSymbolArray = _parts$type.isSymbolArray,
        isMapArray = _parts$type.isMapArray,
        isWeakMapArray = _parts$type.isWeakMapArray,
        isSetArray = _parts$type.isSetArray,
        isWeakSetArray = _parts$type.isWeakSetArray;
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        expect = _parts$test2.expect,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException;
    var _parts$compare = parts.compare,
        equal = _parts$compare.equal,
        or = _parts$compare.or,
        match = _parts$compare.match,
        matchValue = _parts$compare.matchValue,
        initialValue = _parts$compare.initialValue,
        allMatch = _parts$compare.allMatch,
        someMatch = _parts$compare.someMatch,
        indexOfMatch = _parts$compare.indexOfMatch,
        matchSome = _parts$compare.matchSome,
        matchSomeValue = _parts$compare.matchSomeValue,
        allMatchSome = _parts$compare.allMatchSome,
        someMatchSome = _parts$compare.someMatchSome,
        indexOfMatchSome = _parts$compare.indexOfMatchSome,
        matchAll = _parts$compare.matchAll,
        matchAllValue = _parts$compare.matchAllValue,
        allMatchAll = _parts$compare.allMatchAll,
        someMatchAll = _parts$compare.someMatchAll,
        indexOfMatchAll = _parts$compare.indexOfMatchAll,
        includes = _parts$compare.includes,
        includesSome = _parts$compare.includesSome,
        includesAll = _parts$compare.includesAll;
    var isFirst = parts.string.isFirst;

    var test_equal = function test_equal() {
      it('test_equal', function () {
        // Primitive value
        checkEqual(true, equal(1, 1));
        checkEqual(false, equal(1, 2));
        checkEqual(true, equal('1', '1'));
        checkEqual(false, equal('1', 1));
        checkEqual(true, equal(null, null));
        checkEqual(true, equal(undefined, undefined));
        checkEqual(true, equal(undefined));
        checkEqual(false, equal(null, undefined));
        checkEqual(false, equal(null)); // named argument

        checkEqual(true, equal({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equal({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equal({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equal_object = function test_equal_object() {
      it('test_equal_object', function () {
        // object
        checkEqual(true, equal({}, {}));
        checkEqual(false, equal({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equal({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 1');
        checkEqual(false, equal({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 2');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }), 'test_equal object 3');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }), 'test_equal object 4');
      });
    };

    var test_equal_array = function test_equal_array() {
      it('test_equal_array', function () {
        checkEqual(true, equal([], []));
        checkEqual(false, equal([[]], [[]]));
        checkEqual(true, equal([1], [1]));
        checkEqual(false, equal([1], [2]));
        checkEqual(true, equal([1, 2], [1, 2]));
        checkEqual(false, equal([1, 2], [2, 2]));
        checkEqual(true, equal([1, 2, 3], [1, 2, 3]));
        checkEqual(false, equal([[1, 2], 3], [[1, 2], 3]));
        checkEqual(false, equal([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(false, equal([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2, 3]], [1, 2, 3]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equal(['a'], ['a']));
        checkEqual(false, equal(['a'], ['b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal(['a', 'a'], ['a', 'b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equal([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equal([undefined], [undefined]));
        checkEqual(false, equal([undefined], [null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([undefined, undefined], [undefined, null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equal([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, ['a'], undefined]])); // Object Named Parameter

        checkEqual(true, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equal_date = function test_equal_date() {
      it('test_equal_date', function () {
        // date
        checkEqual(true, equal(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equal date'); // date ignore

        var equalFuncArray = [equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // date

        checkEqual(false, equal(new Date('2019/11/02'), new Date('2019/11/02'), equalFuncArray), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }, equalFuncArray), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')], equalFuncArray), 'test_equal date');
      });
    };

    var test_equal_regexp = function test_equal_regexp() {
      it('test_equal_regexp', function () {
        // regexp
        checkEqual(true, equal(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        var equalFuncArray = [equal.func.date, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // regexp

        checkEqual(false, equal(new RegExp(/^a/), new RegExp(/^a/), equalFuncArray), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }, equalFuncArray), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)], equalFuncArray), 'test_equal regexp');
      });
    };

    var test_equal_map = function test_equal_map() {
      it('test_equal_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equal(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map'); // ignore Map

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equal(map1, map2, equalFuncArray)); // Map in object

        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map');
      });
    };

    var test_equal_set = function test_equal_set() {
      it('test_equal_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equal(set1, set2), 'test_equal Set'); // Set in object

        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set'); // ignore Set

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equal(set1, set2, equalFuncArray)); // Set in object

        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set');
      });
    };

    var test_equalDeep = function test_equalDeep() {
      var objectParameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      it('test_equalDeep', function () {
        // Primitive value
        checkEqual(true, equalDeep(1, 1));
        checkEqual(false, equalDeep(1, 2));
        checkEqual(true, equalDeep('1', '1'));
        checkEqual(false, equalDeep('1', 1));
        checkEqual(true, equalDeep(null, null));
        checkEqual(true, equalDeep(undefined, undefined));
        checkEqual(true, equalDeep(undefined));
        checkEqual(false, equalDeep(null, undefined));
        checkEqual(false, equalDeep(null));

        if (objectParameter === false) {
          return;
        } // named argument


        checkEqual(true, equalDeep({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equalDeep({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equalDeep({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equalDeep_object = function test_equalDeep_object() {
      it('test_equalDeep_object', function () {
        // object
        checkEqual(true, equalDeep({}, {}));
        checkEqual(true, equalDeep({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }));
        checkEqual(false, equalDeep({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {},
          d: ''
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: [],
          d: ''
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: {},
          d: ''
        }, {
          a: '1',
          b: '2',
          c: {}
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: [],
          d: ''
        }, {
          a: '1',
          b: '2',
          c: []
        }));
        checkEqual(true, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B',
            c: 'C'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B',
            c: 'c'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B'
          }
        }, {
          a: {
            b: 'B',
            c: 'C'
          }
        }));
      });
    };

    var test_equalDeep_object_array_mix = function test_equalDeep_object_array_mix() {
      it('test_equalDeep_object_array_mix', function () {
        // equal false array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array object

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array object

        checkEqual(true, equalDeep(testValue1, testValue2));
      });
    };

    var test_equalDeep_object_CircularReference = function test_equalDeep_object_CircularReference() {
      it('test_equalDeep_object_CircularReference', function () {
        // CircularReference
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 1');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 2');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 3');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 4');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object3 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object3;
        checkEqual(false, equalDeep(object1, object2), 'test_equalDeep CircularReference 5');
      });
    };

    var test_equalDeep_array = function test_equalDeep_array() {
      var objectParameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      it('test_equalDeep_array', function () {
        checkEqual(true, equalDeep([1, 2, {}], [1, 2, {}]));
        checkEqual(true, equalDeep([1, 2, [3]], [1, 2, [3]]));
        checkEqual(true, equalDeep([], []));
        checkEqual(true, equalDeep([[]], [[]]));
        checkEqual(true, equalDeep([1], [1]));
        checkEqual(false, equalDeep([1], [2]));
        checkEqual(true, equalDeep([1, 2], [1, 2]));
        checkEqual(false, equalDeep([1, 2], [2, 2]));
        checkEqual(true, equalDeep([1, 2, 3], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, 2], 3], [[1, 2], 3]));
        checkEqual(true, equalDeep([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(true, equalDeep([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2, 3]], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equalDeep([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equalDeep(['a'], ['a']));
        checkEqual(false, equalDeep(['a'], ['b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(false, equalDeep(['a', 'a'], ['a', 'b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(true, equalDeep([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equalDeep([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(true, equalDeep([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equalDeep([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equalDeep([undefined], [undefined]));
        checkEqual(false, equalDeep([undefined], [null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(false, equalDeep([undefined, undefined], [undefined, null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(true, equalDeep([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equalDeep([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(true, equalDeep([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equalDeep([[undefined, [null], undefined]], [[undefined, ['a'], undefined]]));

        if (objectParameter === false) {
          return;
        } // Object Named Parameter


        checkEqual(true, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equalDeep_array_CircularReference = function test_equalDeep_array_CircularReference() {
      it('test_equalDeep_array_CircularReference', function () {
        // CircularReference
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 1');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 2');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 3');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 4');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array3 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array3);
        checkEqual(false, equalDeep(array1, array2), 'test_equalDeep array CircularReference 5');
      });
    };

    var test_equalDeep_date = function test_equalDeep_date() {
      it('test_equalDeep_date', function () {
        // date
        checkEqual(true, equalDeep(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equalDeep date'); // date in object

        checkEqual(true, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equalDeep date'); // date in array

        checkEqual(true, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equalDeep date'); // date ignore

        var equalFuncArray = [equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // date

        checkEqual(false, equalDeep(new Date('2019/11/02'), new Date('2019/11/02'), equalFuncArray), 'test_equalDeep date'); // date in object

        checkEqual(false, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }, equalFuncArray), 'test_equalDeep date in object'); // date in array

        checkEqual(false, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')], equalFuncArray), 'test_equalDeep date');
      });
    };

    var test_equalDeep_regexp = function test_equalDeep_regexp() {
      it('test_equalDeep_regexp', function () {
        // regexp
        checkEqual(true, equalDeep(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(true, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(true, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        var equalFuncArray = [equal.func.value, equal.func.object, equal.func.arraySeries, equal.func["function"], equal.func.date]; // regexp

        checkEqual(false, equalDeep(new RegExp(/^a/), new RegExp(/^a/), equalFuncArray), 'test_equal regexp'); // regexp in object

        checkEqual(false, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }, equalFuncArray), 'test_equal regexp'); // regexp in array

        checkEqual(false, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)], equalFuncArray), 'test_equal regexp');
      });
    };

    var test_equalDeep_map = function test_equalDeep_map() {
      it('test_equalDeep_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map'); // ignore Map

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equalDeep(map1, map2, equalFuncArray)); // Map in object

        checkEqual(false, equalDeep({
          map: map1
        }, {
          map: map2
        }, equalFuncArray)); // Map in array

        checkEqual(false, equalDeep([map1], [map2], equalFuncArray));
      });
    };

    var test_equalDeep_map_object_array = function test_equalDeep_map_object_array() {
      it('test_equalDeep_map_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map Object Array


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map object array'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map object array'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map object array'); // more map add object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map2.set('b', {
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map set object'); // more map set object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        map2.set('b', {
          c: 3,
          b: 4
        });
        checkEqual(false, equalDeep({
          map: map1
        }, {
          map: map2
        }));
      });
    };

    var test_equalDeep_map_CircularReference = function test_equalDeep_map_CircularReference() {
      it('test_equalDeep_map_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // CircularReference


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        var map3 = new Map();
        map3.set('a', {
          a: '1'
        });
        map3.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map3);
        checkEqual(false, equalDeep(map1, map2));
      });
    };

    var test_equalDeep_set = function test_equalDeep_set() {
      it('test_equalDeep_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set1'); // Set in object

        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set2'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set3'); // ignore Set

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equalDeep(set1, set2, equalFuncArray)); // Set in object

        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }, equalFuncArray)); // Set in array

        checkEqual(false, equalDeep([set1], [set2], equalFuncArray));
      });
    };

    var test_equalDeep_set_object_array = function test_equalDeep_set_object_array() {
      it('test_equalDeep_set_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set Object Array


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set object array'); // Set in object

        checkEqual(true, equalDeep({
          map: set1
        }, {
          map: set2
        }), 'test_equal Set object array'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set object array'); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set2.add({
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        })); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        set2.add({
          c: 3,
          b: 4
        });
        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }));
      });
    };

    var test_equalDeep_set_CircularReference = function test_equalDeep_set_CircularReference() {
      it('test_equalDeep_set_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // CircularReference


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        var set3 = new Set();
        set3.add({
          a: '1'
        });
        set3.add(['b']);
        set1.add(set2);
        set2.add(set3);
        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }));
      });
    };

    var test_or = function test_or() {
      it('test_or', function () {
        var value;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [null]));
        checkEqual(false, or(value, [null, null]));
        checkEqual(false, or(value, [null, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, undefined]));
        checkEqual(true, or(value, [undefined, 0]));
        value = null;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [undefined]));
        checkEqual(false, or(value, [undefined, undefined]));
        checkEqual(false, or(value, [undefined, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, null]));
        checkEqual(true, or(value, [null, 0]));
        value = 1;
        checkEqual(true, or(value, [1]));
        checkEqual(true, or(value, [1, 2]));
        checkEqual(true, or(value, [1, 2, 3]));
        checkEqual(false, or(value, [2]));
        checkEqual(false, or(value, [2, 3])); // exception

        checkEqual(true, isThrown(function () {
          or(123, 456);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, or({
          value: 1,
          compareArray: [1, 2]
        }));
        checkEqual(false, or({
          value: 0,
          compareArray: [1, 2]
        })); // exception

        checkEqual(false, isThrown(function () {
          or({
            value: 1,
            compareArray: [1, 2]
          });
        }));
        checkEqual(true, isThrown(function () {
          or({
            value: 1,
            array: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(false, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          }, []);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
      });
    };

    var test_match = function test_match() {
      it('test_match', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual(false, match('', null));
        checkEqual(true, match('', ''));
        checkEqual(false, match('123', null));
        checkEqual(false, match('123', undefined));
        checkEqual(false, match('123', 123));
        checkEqual(true, match('123', '123'));
        checkEqual(false, match(undefined, null));
        checkEqual(true, match(undefined, undefined));
        checkEqual(true, match(null, null));
        checkEqual(false, match(null, undefined));
        checkEqual(true, match('1', isString));
        checkEqual(false, match(1, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(true, match({}, isEmptyObject));
        checkEqual(false, match({
          a: 1
        }, isEmptyObject));
        checkEqual(true, match('100', '100'));
        checkEqual(false, match('200', '100'));
        checkEqual(false, match(100, '100'));
        checkEqual(false, match(200, '100'));
        checkEqual(false, match(null, '100'));
        checkEqual(true, match('100', isString));
        checkEqual(true, match('200', isString));
        checkEqual(false, match(100, isString));
        checkEqual(false, match(200, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(false, match('100', isInteger));
        checkEqual(false, match('200', isInteger));
        checkEqual(true, match(100, isInteger));
        checkEqual(true, match(200, isInteger));
        checkEqual(false, match(null, isInteger));
        checkEqual(false, match(undefined, isInteger));
        checkEqual(false, match({
          value: '123',
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match({
          value: null,
          compare: undefined
        })); // object parameter

        checkEqual(false, match({
          value: null,
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match(null, {
          compare: undefined
        }));
        checkEqual(true, match(undefined, {
          compare: undefined
        })); // checkEqual(101,
        //   matchValue({ value: null,       compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue({ value: undefined,  compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      { compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, { compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, { match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, { match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, { unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, { unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, 101));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_matchValue = function test_matchValue() {
      it('test_matchValue', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual('', matchValue('', null, 999));
        checkEqual(999, matchValue('', '', 999));
        checkEqual('123', matchValue('123', null, 999));
        checkEqual('123', matchValue('123', undefined, 999));
        checkEqual('123', matchValue('123', 123, 999));
        checkEqual(999, matchValue('123', '123', 999));
        checkEqual(undefined, matchValue(undefined, null, 999));
        checkEqual(999, matchValue(undefined, undefined, 999));
        checkEqual(999, matchValue(null, null, 999));
        checkEqual(null, matchValue(null, undefined, 999));
        checkEqual(1, matchValue('1', isString, stringToInteger));
        checkEqual(1, matchValue(1, isString, stringToInteger));
        checkEqual(null, matchValue(null, isString, stringToInteger));
        checkEqual(undefined, matchValue(undefined, isString, stringToInteger));
        checkEqual('test', matchValue({}, isEmptyObject, 'test'));
        checkEqual({
          a: 1
        }, matchValue({
          a: 1
        }, isEmptyObject, 'test'));
        checkEqual('$100', matchValue('100', '100', function (v) {
          return '$' + v;
        }));
        checkEqual('200', matchValue('200', '100', function (v) {
          return '$' + v;
        }));
        checkEqual(100, matchValue(100, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(200, matchValue(200, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(null, matchValue(null, '100', function (v) {
          return '$' + v;
        }));
        checkEqual('$100', matchValue('100', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('$200', matchValue('200', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(100, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(200, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(null, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(undefined, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('?100', matchValue('100', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?200', matchValue('200', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$100', matchValue(100, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$200', matchValue(200, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?null', matchValue(null, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?undefined', matchValue(undefined, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('123', matchValue({
          value: '123',
          compare: undefined,
          match: 999
        }));
        checkEqual(999, matchValue({
          value: undefined,
          compare: undefined,
          match: 999
        }));
        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 999
        })); // object parameter

        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, {
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, {
          match: 100
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, 100));
        checkEqual(200, matchValue(undefined, undefined, 200));
        checkEqual(101, matchValue({
          value: null,
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, {
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, {
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, {
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, 200, {
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, 101));
        checkEqual(200, matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_initialValue = function test_initialValue() {
      it('test_initialValue', function () {
        // almost test_matchSome done
        checkEqual('123', initialValue('123', 999));
        checkEqual(999, initialValue(undefined, 999));
        checkEqual(null, initialValue(null, 999));
        checkEqual('123', initialValue({
          value: '123',
          match: 999
        }));
        checkEqual(999, initialValue({
          value: undefined,
          match: 999
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 999
        }));
        checkEqual('[object Object]', String(initialValue({}, 'test')));
        checkEqual('null', String(initialValue(null, {})));
        checkEqual('[object Object]', String(initialValue(undefined, {}))); // object parameter

        checkEqual(null, initialValue({
          value: null,
          match: 100
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200
        }));
        checkEqual(null, initialValue(null, {
          match: 100
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200
        }));
        checkEqual(null, initialValue(null, 100));
        checkEqual(200, initialValue(undefined, 200));
        checkEqual(100, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, {
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, {
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, 100, {
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, 200, {
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, 100, {
          compareArray: [undefined]
        }));
      });
    };

    var test_allMatch = function test_allMatch() {
      it('test_allMatch', function () {
        checkEqual(true, allMatch([10, 20, 30], function (value) {
          return value > 5;
        }));
        checkEqual(false, allMatch([10, 20, 30], function (value) {
          return value > 15;
        }));
        checkEqual(true, allMatch([null, undefined], function (value) {
          return value == null;
        }));
        checkEqual(false, allMatch([null, undefined], null));
        checkEqual(false, isThrown(function () {
          allMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          allMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(true, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(true, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 15;
          }
        }));
      });
    };

    var test_someMatch = function test_someMatch() {
      it('test_someMatch', function () {
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 5;
        }), 'test_match');
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(false, someMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(true, someMatch([null, undefined], null));
        checkEqual(true, someMatch([null, undefined], isUndefined));
        checkEqual(true, someMatch([null, undefined], isNull));
        checkEqual(true, someMatch([null, undefined, NaN], isNaNStrict)); // object parameter

        checkEqual(true, someMatch({
          valueArray: [10, 20],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch({
          valueArray: [10, 15],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(true, someMatch([10, 20], {
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch([10, 15], {
          compare: function compare(v) {
            return v > 15;
          }
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          someMatch(10, function (value) {
            return value > 15;
          });
        }));
      });
    };

    var test_indexOfMatch = function test_indexOfMatch() {
      it('test_indexOfMatch', function () {
        checkEqual(0, indexOfMatch([10, 20, 30], function (value) {
          return value > 5;
        }));
        checkEqual(2, indexOfMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(0, indexOfMatch([null, undefined], null));
        checkEqual(1, indexOfMatch([null, undefined], isUndefined));
        checkEqual(0, indexOfMatch([null, undefined], isNull));
        checkEqual(2, indexOfMatch([null, undefined, NaN], isNaNStrict));
        checkEqual(false, isThrown(function () {
          indexOfMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(-1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 35;
          }
        }));
        checkEqual(2, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 25;
          }
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 35;
          }
        }));
      });
    };

    var test_matchSome = function test_matchSome() {
      it('test_matchSome', function () {
        // normal args string
        checkEqual(false, matchSome('abc', ['123', '456', '789']), 'test_match 1');
        checkEqual(true, matchSome('abc', ['123', '456', 'abc']), 'test_match 2');
        checkEqual(false, matchSome('abc', ['123', '456', /^b/]), 'test_match 3');
        checkEqual(true, matchSome('abc', ['123', '456', /^a/]), 'test_match 4');
        checkEqual(false, matchSome('abc', []), 'test_match 5');
        checkEqual(false, matchSome('123', [null, undefined, 123, 'abc']), 'test_match 6');
        checkEqual(true, matchSome('abc', [function (value) {
          return isFirst(value, 'a');
        }]), 'test_match 7');
        checkEqual(false, matchSome('abc', [function (value) {
          return isFirst(value, 'b');
        }]), 'test_match 8'); // normal args number

        checkEqual(false, matchSome(123, ['123', '456', '789']), 'test_match number 1');
        checkEqual(true, matchSome(123, [123, 456, 'abc']), 'test_match number 2');
        checkEqual(false, matchSome(123, ['123', '456', /^1/]), 'test_match number 3');
        checkEqual(true, matchSome(123, [123, '456', /^1/]), 'test_match number 4');
        checkEqual(false, matchSome(123, []), 'test_match number 5');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match number 6');
        checkEqual(true, matchSome(100, [function (value) {
          return 100 <= value;
        }]), 'test_match 7');
        checkEqual(false, matchSome(99, [function (value) {
          return 100 <= value;
        }]), 'test_match 8');
        checkEqual(true, matchSome(null, [null, undefined, 123, 'abc']), 'test_match 1');
        checkEqual(true, matchSome(undefined, [null, undefined, 123, 'abc']), 'test_match 2');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match 3');
        checkEqual(true, matchSome('abc', [null, undefined, 123, 'abc']), 'test_match 4');
        checkEqual(true, matchSome(1, [null, undefined, 1, '1']));
        checkEqual(false, matchSome(1, [null, undefined, 2, '1']));
        checkEqual(true, matchSome('1', [null, undefined, 1, '1']));
        checkEqual(false, matchSome('1', [null, undefined, 1, '2']));
        checkEqual(true, matchSome(null, [null, undefined, 0]));
        checkEqual(true, matchSome(undefined, [null, undefined, 0]));
        checkEqual(true, matchSome(0, [null, undefined, 0]));
        checkEqual(false, matchSome(null, [undefined, 0]));
        checkEqual(false, matchSome(undefined, [null, 0]));
        checkEqual(false, matchSome(0, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyObject]));
        checkEqual(true, matchSome(undefined, [null, undefined]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome([], [null, undefined]));
        checkEqual(true, matchSome([], [null, undefined, isEmptyArray]));
        checkEqual(false, matchSome([], [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome({}, [null, undefined]));
        checkEqual(false, matchSome({}, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome({}, [null, undefined, isEmptyObject])); // exception

        checkEqual(true, isThrownException(function () {
          matchSome('123', 'abc');
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', '789']
        }), 'test_match param 1');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', 'abc']
        }), 'test_match param 2');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^b/]
        }), 'test_match param 3');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^a/]
        }), 'test_match param 4');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: []
        }), 'test_match param 5');
        checkEqual(false, matchSome({
          value: '123',
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param 6');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'a');
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'b');
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome('abc', {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome('abc', {
          compareArray: ['123', '456', 'abc']
        })); // Object Named Parameter number

        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', '789']
        }), 'test_match param number 1');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, 456, 'abc']
        }), 'test_match param number 2');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', /^1/]
        }), 'test_match param number 3');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, '456', /^1/]
        }), 'test_match param number 4');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: []
        }), 'test_match param number 5');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param number 6');
        checkEqual(true, matchSome({
          value: 100,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 99,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome(123, {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome(123, {
          compareArray: [123, 456, 'abc']
        })); // exception

        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: ['123']
          });
        }), 'test_match thrown 1');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: []
          });
        }), 'test_match thrown 2');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 3');
        checkEqual(true, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: 123
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'matchSome args(compareArray) is not array';
        }), 'test_match thrown 4');
        checkEqual(true, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 5');
        checkEqual(false, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          }, []);
        }), 'test_match thrown 5');
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, []));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return true;
        }]));
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return false;
        }]));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function (value) {
          return isObject(value);
        }]));
      });
    };

    var test_matchSomeValue = function test_matchSomeValue() {
      it('test_matchSomeValue', function () {
        // almost test_matchSome done
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(98, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(97, [99, 98, 97], 999));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], {
          match: 999
        }));
      });
    };

    var test_allMatchSome = function test_allMatchSome() {
      it('test_allMatchSome', function () {
        checkEqual(true, allMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]));
        checkEqual(false, allMatchSome([10, 20, 30], [function (value) {
          return value > 15;
        }]));
        checkEqual(true, allMatchSome([null, undefined], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined], [null]));
        checkEqual(true, allMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(false, allMatchSome([null, undefined], [isNull]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, allMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict])); // object parameter

        checkEqual(true, allMatchSome({
          valueArray: [10, 30, 40],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, allMatchSome([10, 30, 40], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          allMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          allMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_someMatchSome = function test_someMatchSome() {
      it('test_someMatchSome', function () {
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSome');
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(false, someMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(true, someMatchSome([null, undefined], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined], [null]));
        checkEqual(true, someMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(true, someMatchSome([null, undefined], [isNull]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(false, someMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [isNaNStrict])); // object parameter

        checkEqual(true, someMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome({
          valueArray: [10, 20, 25],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, someMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome([10, 20, 25], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          someMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_indexOfMatchSome = function test_indexOfMatchSome() {
      it('test_indexOfMatchSome', function () {
        checkEqual(0, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSomeIndex');
        checkEqual(2, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(-1, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(0, indexOfMatchSome([null, undefined], [null, undefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [isUndefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(-1, indexOfMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(2, indexOfMatchSome([null, undefined, NaN], [isNaNStrict]));
        checkEqual(false, isThrown(function () {
          indexOfMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatchSome(10, [function (value) {
            return value > 15;
          }]);
        })); // object parameter

        checkEqual(2, indexOfMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome({
          valueArray: [5, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(2, indexOfMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome([1, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome([5, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
      });
    };

    var test_matchAll = function test_matchAll() {
      it('test_matchAll', function () {
        // normal args string
        checkEqual(false, matchAll('abc', []));
        checkEqual(true, matchAll('abc', ['abc']));
        checkEqual(false, matchAll('abc', ['abc', 'def']));
        checkEqual(false, matchAll('abc', ['abc', undefined]));
        checkEqual(false, matchAll('abc', ['abc', null]));
        checkEqual(false, matchAll('abc', ['abc', '']));
        checkEqual(true, matchAll('abc', [/^a/]));
        checkEqual(true, matchAll('abc', [/c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, matchAll('abc', [/^a/, /^b.*/, /c$/]));
        checkEqual(true, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(true, matchAll('aabcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(false, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }])); // normal args number

        checkEqual(false, matchAll(100, []));
        checkEqual(true, matchAll(100, [100]));
        checkEqual(false, matchAll(100, [100, 0]));
        checkEqual(false, matchAll(100, [100, undefined]));
        checkEqual(false, matchAll(100, [100, null]));
        checkEqual(false, matchAll(100, [100, NaN]));
        checkEqual(true, matchAll(100, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(110, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(false, matchAll(111, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(null, [null]));
        checkEqual(false, matchAll(null, [null, undefined]));
        checkEqual(false, matchAll(null, [undefined]));
        checkEqual(false, matchAll(undefined, [null]));
        checkEqual(false, matchAll(undefined, [null, undefined]));
        checkEqual(true, matchAll(undefined, [undefined])); // exception

        checkEqual(false, isThrownException(function () {
          matchAll('123', ['123']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll('123', '123');
        }, new TypeError().name));
        checkEqual(false, isThrownException(function () {
          matchAll(123, [123]);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll(123, 123);
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll({
          value: 'abc',
          compareArray: ['abc', '']
        }));
        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: [/^a/, /.*b.*/, /c$/]
        }));
        checkEqual(true, matchAll('abc', {
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll('abc', {
          compareArray: ['abc', '']
        })); // Object Named Parameter number

        checkEqual(true, matchAll({
          value: 100,
          compareArray: [10 * 10]
        }));
        checkEqual(false, matchAll({
          value: 100,
          compareArray: [100, 101]
        }));
        checkEqual(true, matchAll({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, matchAll(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, matchAll(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: ['abc']
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: 'abc'
          });
        }));
        checkEqual(false, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value >= 100;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
      });
    };

    var test_matchAllValue = function test_matchAllValue() {
      it('test_matchAllValue', function () {
        checkEqual(999, matchAllValue(99, [99], 999));
        checkEqual(98, matchAllValue(98, [99], 999));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999)); // Object Parameter

        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
      });
    };

    var test_allMatchAll = function test_allMatchAll() {
      it('test_allMatchAll', function () {
        checkEqual(false, allMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll(['abc', 'aabc', 'aabbcc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, allMatchAll(['abc', 'aabc', 'aacc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll([100, 105, 110], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, allMatchAll([100, 105, 111], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));

        var testAllMatchAll = function testAllMatchAll(replaceArray) {
          return allMatchAll(replaceArray, [isArray, function (element) {
            return element.length === 2;
          }, function (element) {
            return isStringArray(element);
          }]);
        };

        testCounter();
        checkEqual(false, testAllMatchAll([]));
        checkEqual(false, testAllMatchAll([1, 2]));
        checkEqual(false, testAllMatchAll(['a', 'b']));
        checkEqual(true, testAllMatchAll([['a', 'b']]));
        checkEqual(true, testAllMatchAll([['a', 'b'], ['c', 'd']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c', 1]])); // object parameter

        checkEqual(true, allMatchAll({
          valueArray: [100, 105, 110],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll({
          valueArray: [100, 105, 111],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, allMatchAll([100, 105, 110], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll([100, 105, 111], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_someMatchAll = function test_someMatchAll() {
      it('test_someMatchAll', function () {
        checkEqual(false, someMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, someMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, someMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(true, someMatchAll({
          valueArray: [111, 110, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll({
          valueArray: [111, 115, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, someMatchAll([111, 110, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll([111, 115, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_indexOfMatchAll = function test_indexOfMatchAll() {
      it('test_indexOfMatchAll', function () {
        checkEqual(-1, indexOfMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(-1, indexOfMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(1, indexOfMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll([105], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(-1, indexOfMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(1, indexOfMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(0, indexOfMatchAll({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll({
          valueArray: [5, 40, 50],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(0, indexOfMatchAll([10, 20, 30], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll([1, 10, 20], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll([5, 40, 50], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
      });
    };

    var test_includes = function test_includes() {
      it('test_includes', function () {
        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isInternetExplorer() && !parts.platform.isGasRhino()) {
          checkEqual(true, 'abc'.includes('a')); // string.includes strange empty string

          checkEqual(true, 'abc'.includes(''));
          checkEqual(false, 'abc'.includes(null));
          checkEqual(false, 'abc'.includes(undefined));
          checkEqual(false, 'abc'.includes());
        }

        checkEqual(false, includes('abc', ''));
        checkEqual(true, includes('abc', 'a'));
        checkEqual(true, includes('abc', 'b'));
        checkEqual(false, includes('abc', 'd'));
        checkEqual(false, includes('', ''));
        checkEqual(false, includes('', 'a'));
        checkEqual(false, includes([], null));
        checkEqual(false, includes([], undefined));
        checkEqual(false, includes([], []));
        checkEqual(true, includes([0, 1, 2], 0));
        checkEqual(false, includes([0, 1, 2], 4));
        checkEqual(false, includes([0, 1, 2], []));
        checkEqual(false, includes({
          value: 'abc',
          compare: ''
        }));
        checkEqual(true, includes({
          value: 'abc',
          compare: 'c'
        }));
        checkEqual(false, includes({
          value: [],
          compare: null
        }));
        checkEqual(true, includes({
          value: [0, 1],
          compare: 0
        }));
      });
    };

    var test_includesSome = function test_includesSome() {
      it('test_includesSome', function () {
        checkEqual(false, includesSome('abc', ['']));
        checkEqual(true, includesSome('abc', ['', 'a']));
        checkEqual(false, includesSome('abc', ['', 'd']));
        checkEqual(true, includesSome('abc', ['a']));
        checkEqual(true, includesSome('abc', ['b']));
        checkEqual(false, includesSome('abc', ['d']));
        checkEqual(true, includesSome('abc', ['d', 'a']));
        checkEqual(true, includesSome('abc', ['a', 'd']));
        checkEqual(false, includesSome('abc', ['e', 'd']));
        checkEqual(false, includesSome([], [null]));
        checkEqual(false, includesSome([], [undefined]));
        checkEqual(false, includesSome([], []));
        checkEqual(false, includesSome([0, 1, 2], []));
        checkEqual(true, includesSome([0, 1, 2], [0]));
        checkEqual(false, includesSome([0, 1, 2], [4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 1]));
        checkEqual(false, includesSome([0, 1, 2], [4, 5]));
        checkEqual(false, includesSome({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesSome({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesSome({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesSome({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesSome('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesSome('abc', 'a');
        }));
        checkEqual(false, isThrownException(function () {
          includesSome('123', ['1']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          includesSome('123', [1]);
        }, new TypeError().name));
        checkEqual(false, isThrown(function () {
          includesSome([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesSome([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesSome(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: [1]
          });
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    var test_includesAll = function test_includesAll() {
      it('test_includesAll', function () {
        checkEqual(false, includesAll('abc', ['']));
        checkEqual(false, includesAll('abc', ['', 'a']));
        checkEqual(false, includesAll('abc', ['', 'd']));
        checkEqual(true, includesAll('abc', ['a']));
        checkEqual(true, includesAll('abc', ['b']));
        checkEqual(false, includesAll('abc', ['d']));
        checkEqual(false, includesAll('abc', ['d', 'a']));
        checkEqual(false, includesAll('abc', ['a', 'd']));
        checkEqual(false, includesAll('abc', ['e', 'd']));
        checkEqual(true, includesAll('abc', ['c', 'a']));
        checkEqual(false, includesAll([], [null]));
        checkEqual(false, includesAll([], [undefined]));
        checkEqual(false, includesAll([], []));
        checkEqual(false, includesAll([0, 1, 2], []));
        checkEqual(true, includesAll([0, 1, 2], [0]));
        checkEqual(false, includesAll([0, 1, 2], [4]));
        checkEqual(false, includesAll([0, 1, 2], [0, 4]));
        checkEqual(true, includesAll([0, 1, 2], [0, 1]));
        checkEqual(false, includesAll([0, 1, 2], [4, 5]));
        checkEqual(false, includesAll({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesAll({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesAll({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesAll({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesAll('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesAll('abc', 'a');
        }));
        checkEqual(false, isThrown(function () {
          includesAll([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesAll([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesAll(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    var getProperty = parts.getProperty,
        recursive = parts.recursive,
        typeName = parts.typeName,
        isPrimitiveType = parts.isPrimitiveType;

    var equalDeepUseRecursive = function equalDeepUseRecursive(source, target) {
      var equalType = function equalType(value1, value2) {
        return typeName(value1) === typeName(value2);
      };

      var equalAccept = function equalAccept(source, target) {
        if (isPrimitiveType(source)) {
          if (source !== target) {
            return false;
          }

          return true;
        }

        if (!equalType(source, target)) {
          return false;
        }

        if (!(isObject(source) || isArray(source))) {
          return false;
        }

        if (isObject(source)) {
          if (Object.keys(source).length !== Object.keys(target).length) {
            return false;
          }
        }

        if (isArray(source)) {
          if (source.length !== target.length) {
            return false;
          }
        }

        return;
      };

      var accept = equalAccept(source, target);

      if (accept === true) {
        return true;
      }

      if (accept === false) {
        return false;
      }

      var result = true;
      recursive(source, function (value, key, level, path) {
        var targetValue = getProperty(target, path + '.' + key);
        var accept = equalAccept(value, targetValue);

        if (accept === true) {
          return;
        }

        if (accept === false) {
          result = false;
          return false;
        }

        return value;
      });
      return result;
    };

    test_equal();
    test_equal_object();
    test_equal_array();
    test_equal_date();
    test_equal_regexp();
    test_equal_map();
    test_equal_set();
    var equalDeep;
    equalDeep = equalDeepUseRecursive;
    test_equalDeep(false);
    test_equalDeep_object();
    test_equalDeep_array(false);
    test_equalDeep_object_array_mix();
    equalDeep = parts.compare.equalDeep;
    test_equalDeep();
    test_equalDeep_object();
    test_equalDeep_object_array_mix();
    test_equalDeep_object_CircularReference();
    test_equalDeep_array();
    test_equalDeep_array_CircularReference();
    test_equalDeep_date();
    test_equalDeep_regexp();
    test_equalDeep_map();
    test_equalDeep_map_object_array();
    test_equalDeep_map_CircularReference();
    test_equalDeep_set();
    test_equalDeep_set_object_array();
    test_equalDeep_set_CircularReference();
    test_or();
    test_match();
    test_matchValue();
    test_initialValue();
    test_allMatch();
    test_someMatch();
    test_indexOfMatch();
    test_matchSome();
    test_matchSomeValue();
    test_allMatchSome();
    test_someMatchSome();
    test_indexOfMatchSome();
    test_matchAll();
    test_matchAllValue();
    test_allMatchAll();
    test_someMatchAll();
    test_indexOfMatchAll();
    test_includes();
    test_includesSome();
    test_includesAll();
  });
};

exports.test_execute_compare = test_execute_compare;
var _default = {
  test_execute_compare: test_execute_compare
};
exports["default"] = _default;

/***/ })

}]);