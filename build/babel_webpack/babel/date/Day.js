"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Day = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _Day2 = require("./_Day.js");

var _includes = require("../compare/__includes.js");

/**
 * Day
 */
var Day = function Day(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate, timezoneOffset')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
    timezoneOffset = _value.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, '', 'sourceDate, timezoneOffset', 1)) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
    timezoneOffset = _sourceDate.timezoneOffset;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, 'timezoneOffset', '')) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next', 'today', 'yesterday', 'tomorrow'], value.toLowerCase())) {
      throw new TypeError("Day args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("Day args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("Day args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("Day args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  return (0, _Day2._Day)(value, sourceDate, timezoneOffset);
};

exports.Day = Day;
var _default = {
  Day: Day
};
exports["default"] = _default;