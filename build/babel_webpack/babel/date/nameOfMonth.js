"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.nameOfMonth = void 0;

var _isType = require("../type/isType.js");

var _isTypeArray = require("../type/isTypeArray.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _nameOfMonth2 = require("../date/_nameOfMonth.js");

var nameOfMonth = function nameOfMonth(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var monthNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _nameOfMonth2._nameOfMonth.names.EnglishChar3();

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date', 'isLocal, monthNames')) {
    var _date = date;
    date = _date.date;
    var _date$monthNames = _date.monthNames;
    monthNames = _date$monthNames === void 0 ? _nameOfMonth2._nameOfMonth.names.EnglishChar3() : _date$monthNames;
    var _date$isLocal = _date.isLocal;
    isLocal = _date$isLocal === void 0 ? true : _date$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, '', 'monthNames, isLocal', 1)) {
    var _isLocal = isLocal;
    var _isLocal$isLocal = _isLocal.isLocal;
    isLocal = _isLocal$isLocal === void 0 ? true : _isLocal$isLocal;
    var _isLocal$monthNames = _isLocal.monthNames;
    monthNames = _isLocal$monthNames === void 0 ? _nameOfMonth2._nameOfMonth.names.EnglishChar3() : _isLocal$monthNames;
  } else if ((0, _isObjectParameter.isObjectParameter)(monthNames, 'monthNames')) {
    var _monthNames = monthNames;
    monthNames = _monthNames.monthNames;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("nameOfMonth args(date:".concat(date, ") is not date"));
  }

  if (!((0, _isTypeArray.isStringArray)(monthNames) && monthNames.length === 12)) {
    throw new TypeError("nameOfMonth args(monthNames:".concat(monthNames, ")") + " is not stringArray.length is 12");
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("nameOfMonth args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _nameOfMonth2._nameOfMonth)(date, isLocal, monthNames);
};

exports.nameOfMonth = nameOfMonth;
nameOfMonth.names = _nameOfMonth2._nameOfMonth.names;
var _default = {
  nameOfMonth: nameOfMonth
};
exports["default"] = _default;