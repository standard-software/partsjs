"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.YearUTC = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _YearUTC2 = require("./_YearUTC.js");

var YearUTC = function YearUTC(value) {
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
    if (!['this', 'last', 'next'].includes(value.toLowerCase())) {
      throw new TypeError("YearUTC args(value:".concat(value, ") is not this | last | next"));
    }
  } else if (!(0, _isType.isInteger)(value)) {
    throw new TypeError("YearUTC args(value:".concat(value, ") is not integer"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("YearUTC args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  return (0, _YearUTC2._YearUTC)(value, sourceDate);
};

exports.YearUTC = YearUTC;
var _default = {
  YearUTC: YearUTC
};
exports["default"] = _default;