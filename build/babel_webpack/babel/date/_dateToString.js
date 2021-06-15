"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._dateToString = void 0;

var _includes = require("../compare/__includes.js");

var _objectKeys2 = require("../object/objectKeys.js");

var _SortFunc2 = require("../array/_SortFunc.js");

var _loop = require("../syntax/__loop.js");

var _replaceAllArray2 = require("../string/_replaceAllArray.js");

var _number = require("../number/number.js");

var _includeCount2 = require("../string/_includeCount.js");

var _dateToStringRule = require("./__dateToStringRule.js");

var _map2 = require("../array/_map.js");

/**
 * dateToString
 */
var _dateToString = function _dateToString(date, format, timezoneOffset) {
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _dateToStringRule.__dateToStringRule.Default();
  var existSingleQuote = (0, _includes.__includes)(format, "'");
  var existDoubleQuote = (0, _includes.__includes)(format, '"');

  if (existSingleQuote && existDoubleQuote) {
    throw new Error("__dateToString args(format:".concat(format, ") exists both singleQuote and doubleQuote"));
  }

  var keys = (0, _objectKeys2._objectKeys)(rule);
  keys.sort((0, _SortFunc2._SortFunc)([[_SortFunc2._SortFunc.order.normal.descending, function (v) {
    return v.length;
  }]]));
  var replaceArray = (0, _map2._map)(keys, function (key) {
    return [key, rule[key].func(date, timezoneOffset)];
  });
  var quoteChar;

  if (existSingleQuote === false && existDoubleQuote === false) {
    return (0, _replaceAllArray2._replaceAllArray)(format, replaceArray);
  } else if (existSingleQuote === false) {
    quoteChar = '"';
  } else if (existDoubleQuote === false) {
    quoteChar = "'";
  }

  if ((0, _number.isOdd)((0, _includeCount2._includeCount)(format, quoteChar))) {
    throw new Error("__dateToString args(format:".concat(format, ") exists odd Quotes"));
  }

  var formatStrs = format.split(quoteChar);

  for (var i = 0, l = formatStrs.length; i < l; i += 2) {
    formatStrs[i] = (0, _replaceAllArray2._replaceAllArray)(formatStrs[i], replaceArray);
  }

  return formatStrs.join('');
};

exports._dateToString = _dateToString;
_dateToString.rule = _dateToStringRule.__dateToStringRule;
var _default = {
  _dateToString: _dateToString
};
exports["default"] = _default;