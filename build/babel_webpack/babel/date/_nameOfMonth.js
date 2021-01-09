"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._nameOfMonth = void 0;

var _monthNames = require("../date/__monthNames.js");

var _nameOfMonth = function _nameOfMonth(date) {
  var isLocal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var monthNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _monthNames.__monthNames.EnglishChar3();

  if (isLocal) {
    return monthNames[date.getMonth()];
  } else {
    return monthNames[date.getUTCMonth()];
  }
};

exports._nameOfMonth = _nameOfMonth;
_nameOfMonth.names = _monthNames.__monthNames;
var _default = {
  _nameOfMonth: _nameOfMonth
};
exports["default"] = _default;