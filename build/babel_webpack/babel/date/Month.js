"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Month = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _Month2 = require("./_Month.js");

var _includes = require("../compare/__includes.js");

/**
 * Month
 */
var Month = function Month(value) {
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
    if (!(0, _includes.__includes)(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError("Month args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("Month args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("Month args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isInteger)(timezoneOffset)) {
    throw new TypeError("Month args(timezoneOffset:".concat(timezoneOffset, ") is not integer"));
  }

  return (0, _Month2._Month)(value, sourceDate, timezoneOffset);
};

exports.Month = Month;
var _default = {
  Month: Month
};
exports["default"] = _default;