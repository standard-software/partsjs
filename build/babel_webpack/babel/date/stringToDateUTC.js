"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.stringToDateUTC = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _Year2 = require("./_Year.js");

var _stringToDateRule = require("./__stringToDateRule.js");

var _stringToDateUTC2 = require("./_stringToDateUTC.js");

var stringToDateUTC = function stringToDateUTC(str, format) {
  var sourceDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _Year2._Year)('this');
  var rule = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _stringToDateRule.__stringToDateRule.Default();

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, format', 'sourceDate, rule')) {
    var _str = str;
    str = _str.str;
    format = _str.format;
    var _str$sourceDate = _str.sourceDate;
    sourceDate = _str$sourceDate === void 0 ? (0, _Year2._Year)('this') : _str$sourceDate;
    var _str$rule = _str.rule;
    rule = _str$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _str$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'sourceDate, rule')) {
    var _format = format;
    format = _format.format;
    var _format$sourceDate = _format.sourceDate;
    sourceDate = _format$sourceDate === void 0 ? (0, _Year2._Year)('this') : _format$sourceDate;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(sourceDate, '', 'sourceDate, rule', 1)) {
    var _sourceDate = sourceDate;
    var _sourceDate$sourceDat = _sourceDate.sourceDate;
    sourceDate = _sourceDate$sourceDat === void 0 ? (0, _Year2._Year)('this') : _sourceDate$sourceDat;
    var _sourceDate$rule = _sourceDate.rule;
    rule = _sourceDate$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _sourceDate$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(rule, 'rule')) {
    var _rule = rule;
    rule = _rule.rule;
  }

  if (!(0, _isType.isString)(str)) {
    throw new TypeError("stringToDateUTC args(str:".concat(str, ") is not string"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("stringToDateUTC args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("stringToDateUTC args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("stringToDateUTC args(rule:".concat(rule, ") is not object"));
  }

  return (0, _stringToDateUTC2._stringToDateUTC)(str, format, sourceDate, rule);
};

exports.stringToDateUTC = stringToDateUTC;
stringToDateUTC.rule = _stringToDateUTC2._stringToDateUTC.rule;
var _default = {
  stringToDateUTC: stringToDateUTC
};
exports["default"] = _default;