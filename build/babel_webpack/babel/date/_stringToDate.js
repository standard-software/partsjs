"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._stringToDate = void 0;

var _type = require("../type/type.js");

var _includes = require("../compare/__includes.js");

var _objectKeys2 = require("../object/objectKeys.js");

var _SortFunc2 = require("../array/_SortFunc.js");

var _loop = require("../syntax/__loop.js");

var _replaceAllArray2 = require("../string/_replaceAllArray.js");

var _number = require("../number/number.js");

var _includeCount2 = require("../string/_includeCount.js");

var _stringToDateRule = require("./__stringToDateRule.js");

var _INVALID_DATE = require("./INVALID_DATE.js");

var _dateToString2 = require("./_dateToString.js");

var _escapeRegExp2 = require("../string/_escapeRegExp.js");

var _ThisYear2 = require("./_ThisYear.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _stringToDate = function _stringToDate(str, format) {
  var sourceDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _ThisYear2._ThisYear)();
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _stringToDateRule.__stringToDateRule.Default();

  _stringToDateRule.__stringToDateRule.initialize(sourceDate);

  var keys = (0, _objectKeys2._objectKeys)(rule);
  keys.sort((0, _SortFunc2._SortFunc)([[_SortFunc2._SortFunc.order.normal.descending, function (v) {
    return v.length;
  }]]));
  var escapeRegExpFormat = (0, _escapeRegExp2._escapeRegExp)(format); // console.log({ escapeRegExpFormat });

  var replaceResult = (0, _replaceAllArray2._replaceAllArray)(escapeRegExpFormat, keys.map(function (key) {
    return [key, rule[key].reg];
  }), true); // console.log({ replaceResult });

  var replaceInfoItems = replaceResult.replaceInfo.map(function (e) {
    return rule[keys[e.searchIndex]];
  });
  var matchResult = str.match(new RegExp("".concat(replaceResult.result))); // console.log({ escapeRegExpFormat, replaceInfoItems, replaceResult, matchResult });

  if (!Array.isArray(matchResult)) {
    return _INVALID_DATE.INVALID_DATE;
  }

  var _matchResult = _toArray(matchResult),
      match = _matchResult[0],
      valueItems = _matchResult.slice(1); // console.log(replaceInfoItems.length, valueItems.length);


  if (replaceInfoItems.length !== valueItems.length) {
    return _INVALID_DATE.INVALID_DATE;
  }

  replaceInfoItems.forEach(function (item, i) {
    item.value = valueItems[i];
  }); // console.log({ replaceInfoItems });

  var result = new Date(sourceDate.getTime());

  var _iterator = _createForOfIteratorHelper(replaceInfoItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var infoItem = _step.value;
      infoItem.func(infoItem.value); // console.log(result.toString());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _stringToDateRule$fi = _stringToDateRule.__stringToDateRule.finalize(result),
      timezoneOffset = _stringToDateRule$fi.timezoneOffset; // return result;
  // console.log(
  //   timezoneOffset,
  //   _dateToString(result, format, timezoneOffset),
  //   str,
  // );


  if ((0, _dateToString2._dateToString)(result, format, timezoneOffset) === str) {
    return result;
  } else {
    return _INVALID_DATE.INVALID_DATE;
  }
};

exports._stringToDate = _stringToDate;
var _default = {
  _stringToDate: _stringToDate
};
exports["default"] = _default;