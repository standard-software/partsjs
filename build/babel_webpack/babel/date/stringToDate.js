"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.stringToDate = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _Year2 = require("./_Year.js");

var _stringToDateRule = require("./__stringToDateRule.js");

var _stringToDate2 = require("./_stringToDate.js");

var stringToDate = function stringToDate(str, format, timezoneOffset) {
  var sourceDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, _Year2._Year)('this');
  var rule = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _stringToDateRule.__stringToDateRule.Default();

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, format', 'timezoneOffset, sourceDate, rule')) {
    var _str = str;
    str = _str.str;
    format = _str.format;
    timezoneOffset = _str.timezoneOffset;
    var _str$sourceDate = _str.sourceDate;
    sourceDate = _str$sourceDate === void 0 ? (0, _Year2._Year)('this') : _str$sourceDate;
    var _str$rule = _str.rule;
    rule = _str$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _str$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(format, 'format', 'timezoneOffset, sourceDate, rule')) {
    var _format = format;
    format = _format.format;
    timezoneOffset = _format.timezoneOffset;
    var _format$sourceDate = _format.sourceDate;
    sourceDate = _format$sourceDate === void 0 ? (0, _Year2._Year)('this') : _format$sourceDate;
    var _format$rule = _format.rule;
    rule = _format$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _format$rule;
  } else if ((0, _isObjectParameter.isObjectParameter)(timezoneOffset, '', 'timezoneOffset, sourceDate, rule', 1)) {
    var _timezoneOffset = timezoneOffset;
    timezoneOffset = _timezoneOffset.timezoneOffset;
    var _timezoneOffset$sourc = _timezoneOffset.sourceDate;
    sourceDate = _timezoneOffset$sourc === void 0 ? (0, _Year2._Year)('this') : _timezoneOffset$sourc;
    var _timezoneOffset$rule = _timezoneOffset.rule;
    rule = _timezoneOffset$rule === void 0 ? _stringToDateRule.__stringToDateRule.Default() : _timezoneOffset$rule;
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
    throw new TypeError("stringToDate args(str:".concat(str, ") is not string"));
  }

  if (!(0, _isType.isString)(format)) {
    throw new TypeError("stringToDate args(format:".concat(format, ") is not string"));
  }

  if (!(0, _isType.isUndefined)(timezoneOffset) && !(0, _isType.isNumber)(timezoneOffset)) {
    throw new TypeError("stringToDate args(timezoneOffset:".concat(timezoneOffset, ") is not number"));
  }

  if (!(0, _isType.isDate)(sourceDate)) {
    throw new TypeError("stringToDate args(sourceDate:".concat(sourceDate, ") is not date"));
  }

  if (!(0, _isType.isObject)(rule)) {
    throw new TypeError("stringToDate args(rule:".concat(rule, ") is not object"));
  }

  return (0, _stringToDate2._stringToDate)(str, format, timezoneOffset, sourceDate, rule);
};

exports.stringToDate = stringToDate;
stringToDate.rule = _stringToDate2._stringToDate.rule;
var _default = {
  stringToDate: stringToDate
};
exports["default"] = _default;