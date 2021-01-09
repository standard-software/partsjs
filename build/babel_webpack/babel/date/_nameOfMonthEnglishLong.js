"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._nameOfMonthEnglishLong = void 0;

var _nameOfMonth2 = require("../date/_nameOfMonth.js");

var _nameOfMonthEnglishLong = function _nameOfMonthEnglishLong(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _nameOfMonth2._nameOfMonth)(date, isLocal, _nameOfMonth2._nameOfMonth.names.EnglishLong());
};

exports._nameOfMonthEnglishLong = _nameOfMonthEnglishLong;
var _default = {
  _nameOfMonthEnglishLong: _nameOfMonthEnglishLong
};
exports["default"] = _default;