"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MonthUTC = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _MonthUTC2 = require("./_MonthUTC.js");

var _includes = require("../compare/__includes.js");

/**
 * Month
 */
var MonthUTC = function MonthUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'sourceDate')) {
    var _value = value;
    value = _value.value;
    var _value$sourceDate = _value.sourceDate;
    sourceDate = _value$sourceDate === void 0 ? new Date() : _value$sourceDate;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, 'sourceDate', '')) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? new Date() : _sourceDate$sourceDat;
  }

  if ((0, _isType.isString)(value)) {
    if (!(0, _includes.__includes)(['this', 'last', 'next'], value.toLowerCase())) {
      throw new TypeError("MonthUTC args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("MonthUTC args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("MonthUTC args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  return (0, _MonthUTC2._MonthUTC)(value, sourceDate);
};

exports.MonthUTC = MonthUTC;
var _default = {
  MonthUTC: MonthUTC
};
exports["default"] = _default;