"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._MonthUTC = void 0;

var _Month2 = require("./_Month.js");

/**
 * Month
 */
var _MonthUTC = function _MonthUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _Month2._Month)(value, sourceDate, null);
};

exports._MonthUTC = _MonthUTC;
var _default = {
  _MonthUTC: _MonthUTC
};
exports["default"] = _default;