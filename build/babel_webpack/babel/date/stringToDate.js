"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.stringToDate = void 0;

var _stringToDate2 = require("./_stringToDate.js");

// import { isDate, isString, isObject, isBoolean } from '../type/isType.js';
// import { isObjectParameter } from '../object/isObjectParameter.js';
var stringToDate = function stringToDate(str, format) {
  return (0, _stringToDate2._stringToDate)(str, format);
};

exports.stringToDate = stringToDate;
var _default = {
  stringToDate: stringToDate
};
exports["default"] = _default;