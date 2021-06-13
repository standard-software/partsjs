"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._stringToDate = void 0;

var _includes = require("../compare/__includes.js");

var _objectKeys2 = require("../object/objectKeys.js");

var _SortFunc2 = require("../array/_SortFunc.js");

var _loop = require("../syntax/__loop.js");

var _replaceAllArray2 = require("../string/_replaceAllArray.js");

var _includeCount2 = require("../string/_includeCount.js");

var _number = require("../number/number.js");

var _stringToDateRule = require("./__stringToDateRule.js");

var _InvalidDate = require("./InvalidDate.js");

var _dateToString2 = require("./_dateToString.js");

var _escapeRegExp2 = require("../string/_escapeRegExp.js");

var _Year2 = require("./_Year.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _stringToDate = function _stringToDate(str, format) {
  var timezoneOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getTimezoneOffset();
  var sourceDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _Year2._Year)('this');
  var rule = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _stringToDateRule.__stringToDateRule.Default();
  var existSingleQuote = (0, _includes.__includes)(format, "'");
  var existDoubleQuote = (0, _includes.__includes)(format, '"');

  if (existSingleQuote && existDoubleQuote) {
    throw new Error("__stringToDate args(format:".concat(format, ") exists both singleQuote and doubleQuote"));
  }

  _stringToDateRule.__stringToDateRule.initialize(sourceDate, timezoneOffset);

  var keys = (0, _objectKeys2._objectKeys)(rule);
  keys.sort((0, _SortFunc2._SortFunc)([[_SortFunc2._SortFunc.order.normal.descending, function (v) {
    return v.length;
  }]]));
  var replaceArray = keys.map(function (key) {
    return [key, rule[key].reg];
  });
  var quoteChar = '';
  var replaceResult;

  if (existSingleQuote === false && existDoubleQuote === false) {
    replaceResult = (0, _replaceAllArray2._replaceAllArray)((0, _escapeRegExp2._escapeRegExp)(format), replaceArray, true);
  } else if (existSingleQuote === false) {
    quoteChar = '"';
  } else if (existDoubleQuote === false) {
    quoteChar = "'";
  }

  if (quoteChar !== '') {
    if ((0, _number.isOdd)((0, _includeCount2._includeCount)(format, quoteChar))) {
      throw new Error("__dateToString args(format:".concat(format, ") exists odd Quotes"));
    }

    var formatStrs = format.split(quoteChar);
    replaceResult = {
      result: '',
      replaceInfo: []
    };

    for (var i = 0, l = formatStrs.length; i < l; i += 2) {
      var replaceResult1 = (0, _replaceAllArray2._replaceAllArray)((0, _escapeRegExp2._escapeRegExp)(formatStrs[i]), replaceArray, true);
      formatStrs[i] = replaceResult1.result;
      replaceResult.replaceInfo = [].concat(_toConsumableArray(replaceResult.replaceInfo), _toConsumableArray(replaceResult1.replaceInfo));
    }

    replaceResult.result = formatStrs.join('');
  }

  var replaceInfoItems = replaceResult.replaceInfo.map(function (e) {
    return rule[keys[e.searchIndex]];
  });
  var matchResult = str.match(new RegExp("".concat(replaceResult.result)));

  if (!Array.isArray(matchResult)) {
    return (0, _InvalidDate.InvalidDate)();
  }

  var _matchResult = _toArray(matchResult),
      match = _matchResult[0],
      valueItems = _matchResult.slice(1);

  if (replaceInfoItems.length !== valueItems.length) {
    return (0, _InvalidDate.InvalidDate)();
  }

  replaceInfoItems.forEach(function (item, i) {
    item.value = valueItems[i];
  });
  var result = new Date(sourceDate.getTime());

  var _iterator = _createForOfIteratorHelper(replaceInfoItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var infoItem = _step.value;
      infoItem.func(infoItem.value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var timezoneOffsetMin = _stringToDateRule.__stringToDateRule.finalize(result);

  if ((0, _dateToString2._dateToString)(result, format, timezoneOffsetMin, rule.toStringRule) === str) {
    return result;
  } else {
    return (0, _InvalidDate.InvalidDate)();
  }
};

exports._stringToDate = _stringToDate;
_stringToDate.rule = _stringToDateRule.__stringToDateRule;
var _default = {
  _stringToDate: _stringToDate
};
exports["default"] = _default;