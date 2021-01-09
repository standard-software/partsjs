"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.nameOfMonthEnglishChar3 = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _nameOfMonth2 = require("../date/_nameOfMonth.js");

var nameOfMonthEnglishChar3 = function nameOfMonthEnglishChar3(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((0, _isObjectParameter.isObjectParameter)(date, 'date', 'isLocal')) {
    var _date = date;
    date = _date.date;
    var _date$isLocal = _date.isLocal;
    isLocal = _date$isLocal === void 0 ? true : _date$isLocal;
  } else if ((0, _isObjectParameter.isObjectParameter)(isLocal, 'isLocal')) {
    var _isLocal = isLocal;
    isLocal = _isLocal.isLocal;
  }

  if (!(0, _isType.isDate)(date)) {
    throw new TypeError("nameOfMonthEnglishChar3 args(date:".concat(date, ") is not date"));
  }

  if (!(0, _isType.isBoolean)(isLocal)) {
    throw new TypeError("nameOfMonthEnglishChar3 args(isLocal:".concat(isLocal, ") is not boolean"));
  }

  return (0, _nameOfMonth2._nameOfMonth)(date, isLocal, _nameOfMonth2._nameOfMonth.names.EnglishChar3());
};

exports.nameOfMonthEnglishChar3 = nameOfMonthEnglishChar3;
var _default = {
  nameOfMonthEnglishChar3: nameOfMonthEnglishChar3
};
exports["default"] = _default;