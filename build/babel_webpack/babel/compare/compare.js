"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.equalDeep = exports.equal = exports.includesAll = exports.includesSome = exports.includes = exports.someMatchAll = exports.allMatchAll = exports.indexOfMatchAll = exports.matchAllValue = exports.matchAll = exports.someMatchSome = exports.allMatchSome = exports.indexOfMatchSome = exports.matchSomeValue = exports.matchSome = exports.someMatch = exports.allMatch = exports.indexOfMatch = exports.initialValue = exports.matchValue = exports.match = exports.or = exports._equalDeep = exports._equal = exports._includesAll = exports._includesSome = exports._includes = exports._someMatchAll = exports._allMatchAll = exports._indexOfMatchAll = exports._matchAllValue = exports._matchAll = exports._someMatchSome = exports._allMatchSome = exports._indexOfMatchSome = exports._matchSomeValue = exports._matchSome = exports._someMatch = exports._allMatch = exports._indexOfMatch = exports._initialValue = exports._matchValue = exports._match = exports._or = void 0;

var _or2 = _interopRequireDefault(require("./or.js"));

var _match2 = _interopRequireDefault(require("./match.js"));

var _matchValue2 = _interopRequireDefault(require("./matchValue.js"));

var _initialValue2 = _interopRequireDefault(require("./initialValue.js"));

var _indexOfMatch2 = _interopRequireDefault(require("./indexOfMatch.js"));

var _allMatch2 = _interopRequireDefault(require("./allMatch.js"));

var _someMatch2 = _interopRequireDefault(require("./someMatch.js"));

var _matchSome2 = _interopRequireDefault(require("./matchSome.js"));

var _matchSomeValue2 = _interopRequireDefault(require("./matchSomeValue.js"));

var _indexOfMatchSome2 = _interopRequireDefault(require("./indexOfMatchSome.js"));

var _allMatchSome2 = _interopRequireDefault(require("./allMatchSome.js"));

var _someMatchSome2 = _interopRequireDefault(require("./someMatchSome.js"));

var _matchAll2 = _interopRequireDefault(require("./matchAll.js"));

var _matchAllValue2 = _interopRequireDefault(require("./matchAllValue.js"));

var _indexOfMatchAll2 = _interopRequireDefault(require("./indexOfMatchAll.js"));

var _allMatchAll2 = _interopRequireDefault(require("./allMatchAll.js"));

var _someMatchAll2 = _interopRequireDefault(require("./someMatchAll.js"));

var _includes2 = _interopRequireDefault(require("./includes.js"));

var _includes_common = _interopRequireDefault(require("./includes_common.js"));

var _equal2 = _interopRequireDefault(require("./equal.js"));

var _equalDeep2 = _interopRequireDefault(require("./equalDeep.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compareJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _or2["default"]), _match2["default"]), _matchValue2["default"]), _initialValue2["default"]), _indexOfMatch2["default"]), _allMatch2["default"]), _someMatch2["default"]), _matchSome2["default"]), _matchSomeValue2["default"]), _indexOfMatchSome2["default"]), _allMatchSome2["default"]), _someMatchSome2["default"]), _matchAll2["default"]), _matchAllValue2["default"]), _indexOfMatchAll2["default"]), _allMatchAll2["default"]), _someMatchAll2["default"]), _includes2["default"]), _includes_common["default"]), _equal2["default"]), _equalDeep2["default"]);

var _or = compareJs._or,
    _match = compareJs._match,
    _matchValue = compareJs._matchValue,
    _initialValue = compareJs._initialValue,
    _indexOfMatch = compareJs._indexOfMatch,
    _allMatch = compareJs._allMatch,
    _someMatch = compareJs._someMatch,
    _matchSome = compareJs._matchSome,
    _matchSomeValue = compareJs._matchSomeValue,
    _indexOfMatchSome = compareJs._indexOfMatchSome,
    _allMatchSome = compareJs._allMatchSome,
    _someMatchSome = compareJs._someMatchSome,
    _matchAll = compareJs._matchAll,
    _matchAllValue = compareJs._matchAllValue,
    _indexOfMatchAll = compareJs._indexOfMatchAll,
    _allMatchAll = compareJs._allMatchAll,
    _someMatchAll = compareJs._someMatchAll,
    _includes = compareJs._includes,
    _includesSome = compareJs._includesSome,
    _includesAll = compareJs._includesAll,
    _equal = compareJs._equal,
    _equalDeep = compareJs._equalDeep;
exports._equalDeep = _equalDeep;
exports._equal = _equal;
exports._includesAll = _includesAll;
exports._includesSome = _includesSome;
exports._includes = _includes;
exports._someMatchAll = _someMatchAll;
exports._allMatchAll = _allMatchAll;
exports._indexOfMatchAll = _indexOfMatchAll;
exports._matchAllValue = _matchAllValue;
exports._matchAll = _matchAll;
exports._someMatchSome = _someMatchSome;
exports._allMatchSome = _allMatchSome;
exports._indexOfMatchSome = _indexOfMatchSome;
exports._matchSomeValue = _matchSomeValue;
exports._matchSome = _matchSome;
exports._someMatch = _someMatch;
exports._allMatch = _allMatch;
exports._indexOfMatch = _indexOfMatch;
exports._initialValue = _initialValue;
exports._matchValue = _matchValue;
exports._match = _match;
exports._or = _or;
var or = compareJs.or,
    match = compareJs.match,
    matchValue = compareJs.matchValue,
    initialValue = compareJs.initialValue,
    indexOfMatch = compareJs.indexOfMatch,
    allMatch = compareJs.allMatch,
    someMatch = compareJs.someMatch,
    matchSome = compareJs.matchSome,
    matchSomeValue = compareJs.matchSomeValue,
    indexOfMatchSome = compareJs.indexOfMatchSome,
    allMatchSome = compareJs.allMatchSome,
    someMatchSome = compareJs.someMatchSome,
    matchAll = compareJs.matchAll,
    matchAllValue = compareJs.matchAllValue,
    indexOfMatchAll = compareJs.indexOfMatchAll,
    allMatchAll = compareJs.allMatchAll,
    someMatchAll = compareJs.someMatchAll,
    includes = compareJs.includes,
    includesSome = compareJs.includesSome,
    includesAll = compareJs.includesAll,
    equal = compareJs.equal,
    equalDeep = compareJs.equalDeep;
exports.equalDeep = equalDeep;
exports.equal = equal;
exports.includesAll = includesAll;
exports.includesSome = includesSome;
exports.includes = includes;
exports.someMatchAll = someMatchAll;
exports.allMatchAll = allMatchAll;
exports.indexOfMatchAll = indexOfMatchAll;
exports.matchAllValue = matchAllValue;
exports.matchAll = matchAll;
exports.someMatchSome = someMatchSome;
exports.allMatchSome = allMatchSome;
exports.indexOfMatchSome = indexOfMatchSome;
exports.matchSomeValue = matchSomeValue;
exports.matchSome = matchSome;
exports.someMatch = someMatch;
exports.allMatch = allMatch;
exports.indexOfMatch = indexOfMatch;
exports.initialValue = initialValue;
exports.matchValue = matchValue;
exports.match = match;
exports.or = or;
var _default = {
  _or: _or,
  _match: _match,
  _matchValue: _matchValue,
  _initialValue: _initialValue,
  _indexOfMatch: _indexOfMatch,
  _allMatch: _allMatch,
  _someMatch: _someMatch,
  _matchSome: _matchSome,
  _matchSomeValue: _matchSomeValue,
  _indexOfMatchSome: _indexOfMatchSome,
  _allMatchSome: _allMatchSome,
  _someMatchSome: _someMatchSome,
  _matchAll: _matchAll,
  _matchAllValue: _matchAllValue,
  _indexOfMatchAll: _indexOfMatchAll,
  _allMatchAll: _allMatchAll,
  _someMatchAll: _someMatchAll,
  _includes: _includes,
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  _equal: _equal,
  _equalDeep: _equalDeep,
  or: or,
  match: match,
  matchValue: matchValue,
  initialValue: initialValue,
  indexOfMatch: indexOfMatch,
  allMatch: allMatch,
  someMatch: someMatch,
  matchSome: matchSome,
  matchSomeValue: matchSomeValue,
  indexOfMatchSome: indexOfMatchSome,
  allMatchSome: allMatchSome,
  someMatchSome: someMatchSome,
  matchAll: matchAll,
  matchAllValue: matchAllValue,
  indexOfMatchAll: indexOfMatchAll,
  allMatchAll: allMatchAll,
  someMatchAll: someMatchAll,
  includes: includes,
  includesSome: includesSome,
  includesAll: includesAll,
  equal: equal,
  equalDeep: equalDeep
};
exports["default"] = _default;