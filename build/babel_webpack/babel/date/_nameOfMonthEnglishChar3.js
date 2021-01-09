"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._nameOfMonthEnglishChar3 = void 0;

var _nameOfMonth2 = require("../date/_nameOfMonth.js");

var _nameOfMonthEnglishChar3 = function _nameOfMonthEnglishChar3(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _nameOfMonth2._nameOfMonth)(date, isLocal, _nameOfMonth2._nameOfMonth.names.EnglishChar3());
};

exports._nameOfMonthEnglishChar3 = _nameOfMonthEnglishChar3;
var _default = {
  _nameOfMonthEnglishChar3: _nameOfMonthEnglishChar3
};
exports["default"] = _default;