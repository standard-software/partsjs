"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._nameOfMonthEnglishChar4 = void 0;

var _nameOfMonth2 = require("../date/_nameOfMonth.js");

var _nameOfMonthEnglishChar4 = function _nameOfMonthEnglishChar4(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (0, _nameOfMonth2._nameOfMonth)(date, isLocal, _nameOfMonth2._nameOfMonth.names.EnglishChar4());
};

exports._nameOfMonthEnglishChar4 = _nameOfMonthEnglishChar4;
var _default = {
  _nameOfMonthEnglishChar4: _nameOfMonthEnglishChar4
};
exports["default"] = _default;