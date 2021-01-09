(this["webpackJsonptest_parts"] = this["webpackJsonptest_parts"] || []).push([[3],{

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
// import moment from 'moment';
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
    };

    var test_cloneDeep_moment = function test_cloneDeep_moment() {// it('test_cloneDeep_moment', () => {
      //   if (parts.platform.isWindowsScriptHost()) {
      //     return;
      //   }
      //   if (parts.platform.isWebBrowser()) {
      //     return;
      //   }
      //   // moment type clone no
      //   var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
      //   var testValue1 = [1, 2, 3, moment1];
      //   var value1 = clone(testValue1);
      //   value1[3].set('year', 2018);
      //   checkEqual(true, value1[3] === testValue1[3]);
      //   checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
      //   checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
      //   // moment type cloneDeep
      //   var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
      //   var testValue1 = [1, 2, 3, moment1];
      //   // moment object fail
      //   // const cloneValue = new source.constructor();
      //   checkEqual(true,  isThrown(() => { cloneDeep(testValue1, cloneDeep.func.DefaultArray()); }));
      //   checkEqual(false, isThrown(() => { cloneDeep(testValue1); }));
      //   var value1 = cloneDeep(testValue1);
      //   value1[3].set('year', 2018);
      //   checkEqual(false, value1[3] === testValue1[3]); // clone
      //   checkEqual(true,  moment.isMoment(value1[3]));  // moment is simple clone OK
      //   checkEqual(true,  moment.isMoment(testValue1[3]));
      //   checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
      //   checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
      //   // but not correct
      //   // moment type cloneDeep moment clone function
      //   clone.func.moment = (source, bufferWrite) => {
      //     if (!moment.isMoment(source)) {
      //       return undefined;
      //     }
      //     const cloneValue = moment(source);
      //     bufferWrite(source, cloneValue);
      //     return cloneValue;
      //   };
      //   var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
      //   var testValue1 = [1, 2, 3, moment1];
      //   var value1 = cloneDeep(testValue1, [
      //     cloneDeep.func.moment,
      //     ...cloneDeep.func.DefaultArray(),
      //   ]);
      //   value1[3].set('year', 2018);
      //   checkEqual(false, value1[3] === testValue1[3]); // clone
      //   checkEqual(true,  moment.isMoment(value1[3]));
      //   checkEqual(true,  moment.isMoment(testValue1[3]));
      //   checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
      //   checkEqual('2019/10/11', testValue1[3].format('YYYY/MM/DD'));
      // });
    };

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
        }, merge({}, testObjectArray));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, testObjectArray, function (source, target) {
          return source + target;
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({}, testObjectArray, function (source, target) {
          return isUndefined(source) ? target : source + target;
        }));
        checkEqual({
          key1: [3, 300],
          key2: [2, 350],
          key3: [3, 600],
          key4: [1, 100]
        }, merge({
          key1: [0, 0],
          key2: [0, 0],
          key3: [0, 0],
          key4: [0, 0]
        }, testObjectArray, function (source, target) {
          return [source[0] + 1, source[1] + target];
        }));
        checkEqual({
          key1: [3, 300],
          key2: [2, 350],
          key3: [3, 600],
          key4: [1, 100]
        }, merge({}, testObjectArray, function (source, target) {
          return isUndefined(source) ? [1, target] : [source[0] + 1, source[1] + target];
        }));
        checkEqual({
          key1: 100,
          key2: 175,
          key3: 200,
          key4: 100
        }, objectFromEntries(map(objectEntries(merge({
          key1: [0, 0],
          key2: [0, 0],
          key3: [0, 0],
          key4: [0, 0]
        }, testObjectArray, function (source, target) {
          return [source[0] + 1, source[1] + target];
        })), function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return [key, value[1] / value[0]];
        }))); // deep merge

        var names = {
          'characters': [{
            'name': 'Haru39'
          }, {
            'name': 'yutapon'
          }]
        };
        var ages = {
          'characters': [{
            'age': 26
          }, {
            'age': 18
          }]
        };
        checkEqual({
          characters: [{
            age: 26,
            name: 'Haru39'
          }, {
            age: 18,
            name: 'yutapon'
          }]
        }, merge({}, [names, ages])); // array

        var testArrayArray = [[100, 200, 300], [100, 150, 100], [100,, 200, 100]];
        checkEqual([100, 150, 200, 100], merge([], testArrayArray));
        checkEqual([300, 350, 600, 100], merge([], testArrayArray, function (source, target) {
          if (isUndefined(target)) {
            return;
          }

          return isUndefined(source) ? target : source + target;
        }));
        checkEqual([[3, 300], [2, 350], [3, 600], [1, 100]], merge([[0, 0], [0, 0], [0, 0], [0, 0]], testArrayArray, function (source, target) {
          if (isUndefined(target)) {
            return;
          }

          return [source[0] + 1, source[1] + target];
        }));
        checkEqual([[3, 300], [2, 350], [3, 600], [1, 100]], merge([], testArrayArray, function (source, target) {
          if (isUndefined(target)) {
            return;
          }

          return isUndefined(source) ? [1, target] : [source[0] + 1, source[1] + target];
        })); // object parameter

        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          source: {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          },
          targetArray: testObjectArray,
          func: function func(source, target) {
            return source + target;
          }
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, {
          targetArray: testObjectArray,
          func: function func(source, target) {
            return source + target;
          }
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, testObjectArray, {
          func: function func(source, target) {
            return source + target;
          }
        })); // exception

        checkEqual({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, merge({}, [{
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }], function (source, target) {
          return target;
        }));
        checkEqual(false, isThrown(function () {
          merge({}, [{
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }], function (source, target) {
            return target;
          });
        }));
        checkEqual(true, isThrown(function () {
          merge({}, ['123'], function (source, target) {
            return target;
          });
        }));
        checkEqual(true, isThrown(function () {
          merge({}, [{
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }], 123);
        }));
        checkEqual(true, isThrown(function () {
          merge(123, [{
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }], function (source, target) {
            return target;
          });
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
    test_cloneDeep_function();
    test_cloneDeep_moment();
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

/***/ })

}]);