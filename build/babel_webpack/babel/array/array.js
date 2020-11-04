"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.operation = exports.arrayToIndexValueArray = exports.every = exports.findBack = exports.find = exports.findBackIndex = exports.findIndex = exports.SortFunc = exports.arrayEntries = exports.IntegerArray = exports.NumberArray = exports.unique = exports.group = exports.subLast = exports.subFirst = exports.subLength = exports.subIndex = exports.isBothEnds = exports.isLast = exports.isFirst = exports.all = exports.some = exports.findLast = exports.findFirst = exports.findLastIndex = exports.findFirstIndex = exports.count = exports.map = exports.filter = exports.multiple = exports.single = exports.mode = exports.median = exports.average = exports.sum = exports.max = exports.min = exports.from = exports._SortFunc = exports._arrayEntries = exports._IntegerArray = exports._NumberArray = exports._unique = exports._group = exports._subLast = exports._subFirst = exports._subLength = exports._subIndex = exports._isBothEnds = exports._isLast = exports._isFirst = exports._all = exports._some = exports._findLast = exports._findFirst = exports._findLastIndex = exports._findFirstIndex = exports._count = exports._map = exports._filter = exports._multiple = exports._single = exports._mode = exports._median = exports._average = exports._sum = exports._max = exports._min = void 0;

var _array_common = _interopRequireDefault(require("./array_common.js"));

var _map2 = _interopRequireDefault(require("./_map.js"));

var _map3 = _interopRequireDefault(require("./map.js"));

var _min2 = _interopRequireDefault(require("./_min.js"));

var _min3 = _interopRequireDefault(require("./min.js"));

var _max2 = _interopRequireDefault(require("./_max.js"));

var _max3 = _interopRequireDefault(require("./max.js"));

var _NumberArray2 = _interopRequireDefault(require("./_NumberArray.js"));

var _NumberArray3 = _interopRequireDefault(require("./NumberArray.js"));

var _IntegerArray2 = _interopRequireDefault(require("./_IntegerArray.js"));

var _IntegerArray3 = _interopRequireDefault(require("./IntegerArray.js"));

var _arrayEntries2 = _interopRequireDefault(require("./arrayEntries.js"));

var _group2 = _interopRequireDefault(require("./_group.js"));

var _group3 = _interopRequireDefault(require("./group.js"));

var _unique2 = _interopRequireDefault(require("./_unique.js"));

var _unique3 = _interopRequireDefault(require("./unique.js"));

var _SortFuncOrder = _interopRequireDefault(require("./__SortFuncOrder.js"));

var _SortFunc2 = _interopRequireDefault(require("./_SortFunc.js"));

var _SortFunc3 = _interopRequireDefault(require("./SortFunc.js"));

var _array_operation = _interopRequireDefault(require("./operation/array_operation.js"));

var _popFirst = _interopRequireDefault(require("./operation/_popFirst.js"));

var _popFirst2 = _interopRequireDefault(require("./operation/popFirst.js"));

var _popLast = _interopRequireDefault(require("./operation/_popLast.js"));

var _popLast2 = _interopRequireDefault(require("./operation/popLast.js"));

var _popArrayFirst = _interopRequireDefault(require("./operation/_popArrayFirst.js"));

var _popArrayFirst2 = _interopRequireDefault(require("./operation/popArrayFirst.js"));

var _popArrayLast = _interopRequireDefault(require("./operation/_popArrayLast.js"));

var _popArrayLast2 = _interopRequireDefault(require("./operation/popArrayLast.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var arrayJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_common["default"]), _map2["default"]), _map3["default"]), _min2["default"]), _min3["default"]), _max2["default"]), _max3["default"]), _NumberArray2["default"]), _NumberArray3["default"]), _IntegerArray2["default"]), _IntegerArray3["default"]), _arrayEntries2["default"]), _group2["default"]), _group3["default"]), _unique2["default"]), _unique3["default"]), _SortFuncOrder["default"]), _SortFunc2["default"]), _SortFunc3["default"]);

var arrayOperationJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _array_operation["default"]), _popFirst["default"]), _popFirst2["default"]), _popLast["default"]), _popLast2["default"]), _popArrayFirst["default"]), _popArrayFirst2["default"]), _popArrayLast["default"]), _popArrayLast2["default"]);

var _min = arrayJs._min,
    _max = arrayJs._max,
    _sum = arrayJs._sum,
    _average = arrayJs._average,
    _median = arrayJs._median,
    _mode = arrayJs._mode,
    _single = arrayJs._single,
    _multiple = arrayJs._multiple,
    _filter = arrayJs._filter,
    _map = arrayJs._map,
    _count = arrayJs._count,
    _findFirstIndex = arrayJs._findFirstIndex,
    _findLastIndex = arrayJs._findLastIndex,
    _findFirst = arrayJs._findFirst,
    _findLast = arrayJs._findLast,
    _some = arrayJs._some,
    _all = arrayJs._all,
    _isFirst = arrayJs._isFirst,
    _isLast = arrayJs._isLast,
    _isBothEnds = arrayJs._isBothEnds,
    _subIndex = arrayJs._subIndex,
    _subLength = arrayJs._subLength,
    _subFirst = arrayJs._subFirst,
    _subLast = arrayJs._subLast,
    _group = arrayJs._group,
    _unique = arrayJs._unique,
    _NumberArray = arrayJs._NumberArray,
    _IntegerArray = arrayJs._IntegerArray,
    _arrayEntries = arrayJs._arrayEntries,
    _SortFunc = arrayJs._SortFunc,
    from = arrayJs.from,
    min = arrayJs.min,
    max = arrayJs.max,
    sum = arrayJs.sum,
    average = arrayJs.average,
    median = arrayJs.median,
    mode = arrayJs.mode,
    single = arrayJs.single,
    multiple = arrayJs.multiple,
    filter = arrayJs.filter,
    map = arrayJs.map,
    count = arrayJs.count,
    findFirstIndex = arrayJs.findFirstIndex,
    findLastIndex = arrayJs.findLastIndex,
    findFirst = arrayJs.findFirst,
    findLast = arrayJs.findLast,
    some = arrayJs.some,
    all = arrayJs.all,
    isFirst = arrayJs.isFirst,
    isLast = arrayJs.isLast,
    isBothEnds = arrayJs.isBothEnds,
    subIndex = arrayJs.subIndex,
    subLength = arrayJs.subLength,
    subFirst = arrayJs.subFirst,
    subLast = arrayJs.subLast,
    group = arrayJs.group,
    unique = arrayJs.unique,
    NumberArray = arrayJs.NumberArray,
    IntegerArray = arrayJs.IntegerArray,
    arrayEntries = arrayJs.arrayEntries,
    SortFunc = arrayJs.SortFunc,
    findIndex = arrayJs.findIndex,
    findBackIndex = arrayJs.findBackIndex,
    find = arrayJs.find,
    findBack = arrayJs.findBack,
    every = arrayJs.every,
    arrayToIndexValueArray = arrayJs.arrayToIndexValueArray; // // Circular reference Error
// export const operation = _copyProperty(arrayOperationJs, `
//   _insert, _add,
//   _deleteLength, _deleteIndex,
//   _deleteFirst, _deleteLast,
//   _includeFirst, _includeLast, _includeBothEnds,
//   _excludeFirst, _excludeLast, _excludeBothEnds,
//   _trimFirst, _trimLast, _trimBothEnds,
//   _popFirst, _popLast,
//   _pushFirst, _pushLast,
//   _remainFirst, _remainLast,
//   _filter,
//   insert, add,
//   deleteLength, deleteIndex,
//   deleteFirst, deleteLast,
//   includeFirst, includeLast, includeBothEnds,
//   excludeFirst, excludeLast, excludeBothEnds,
//   trimFirst, trimLast, trimBothEnds,
//   popFirst, popLast,
//   pushFirst, pushLast,
//   remainFirst, remainLast,
//   filter,
// `);

exports.arrayToIndexValueArray = arrayToIndexValueArray;
exports.every = every;
exports.findBack = findBack;
exports.find = find;
exports.findBackIndex = findBackIndex;
exports.findIndex = findIndex;
exports.SortFunc = SortFunc;
exports.arrayEntries = arrayEntries;
exports.IntegerArray = IntegerArray;
exports.NumberArray = NumberArray;
exports.unique = unique;
exports.group = group;
exports.subLast = subLast;
exports.subFirst = subFirst;
exports.subLength = subLength;
exports.subIndex = subIndex;
exports.isBothEnds = isBothEnds;
exports.isLast = isLast;
exports.isFirst = isFirst;
exports.all = all;
exports.some = some;
exports.findLast = findLast;
exports.findFirst = findFirst;
exports.findLastIndex = findLastIndex;
exports.findFirstIndex = findFirstIndex;
exports.count = count;
exports.map = map;
exports.filter = filter;
exports.multiple = multiple;
exports.single = single;
exports.mode = mode;
exports.median = median;
exports.average = average;
exports.sum = sum;
exports.max = max;
exports.min = min;
exports.from = from;
exports._SortFunc = _SortFunc;
exports._arrayEntries = _arrayEntries;
exports._IntegerArray = _IntegerArray;
exports._NumberArray = _NumberArray;
exports._unique = _unique;
exports._group = _group;
exports._subLast = _subLast;
exports._subFirst = _subFirst;
exports._subLength = _subLength;
exports._subIndex = _subIndex;
exports._isBothEnds = _isBothEnds;
exports._isLast = _isLast;
exports._isFirst = _isFirst;
exports._all = _all;
exports._some = _some;
exports._findLast = _findLast;
exports._findFirst = _findFirst;
exports._findLastIndex = _findLastIndex;
exports._findFirstIndex = _findFirstIndex;
exports._count = _count;
exports._map = _map;
exports._filter = _filter;
exports._multiple = _multiple;
exports._single = _single;
exports._mode = _mode;
exports._median = _median;
exports._average = _average;
exports._sum = _sum;
exports._max = _max;
exports._min = _min;
var operation = arrayOperationJs;
exports.operation = operation;
var _default = {
  _min: _min,
  _max: _max,
  _sum: _sum,
  _average: _average,
  _median: _median,
  _mode: _mode,
  _single: _single,
  _multiple: _multiple,
  _filter: _filter,
  _map: _map,
  _count: _count,
  _findFirstIndex: _findFirstIndex,
  _findLastIndex: _findLastIndex,
  _findFirst: _findFirst,
  _findLast: _findLast,
  _some: _some,
  _all: _all,
  _isFirst: _isFirst,
  _isLast: _isLast,
  _isBothEnds: _isBothEnds,
  _subIndex: _subIndex,
  _subLength: _subLength,
  _subFirst: _subFirst,
  _subLast: _subLast,
  _group: _group,
  _unique: _unique,
  _NumberArray: _NumberArray,
  _IntegerArray: _IntegerArray,
  _arrayEntries: _arrayEntries,
  _SortFunc: _SortFunc,
  from: from,
  min: min,
  max: max,
  sum: sum,
  average: average,
  median: median,
  mode: mode,
  single: single,
  multiple: multiple,
  filter: filter,
  map: map,
  count: count,
  findFirstIndex: findFirstIndex,
  findLastIndex: findLastIndex,
  findFirst: findFirst,
  findLast: findLast,
  some: some,
  all: all,
  isFirst: isFirst,
  isLast: isLast,
  isBothEnds: isBothEnds,
  subIndex: subIndex,
  subLength: subLength,
  subFirst: subFirst,
  subLast: subLast,
  group: group,
  unique: unique,
  NumberArray: NumberArray,
  IntegerArray: IntegerArray,
  arrayEntries: arrayEntries,
  SortFunc: SortFunc,
  // Another name
  findIndex: findIndex,
  findBackIndex: findBackIndex,
  find: find,
  findBack: findBack,
  every: every,
  arrayToIndexValueArray: arrayToIndexValueArray,
  operation: operation
};
exports["default"] = _default;