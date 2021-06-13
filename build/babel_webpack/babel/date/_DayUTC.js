"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._DayUTC = void 0;

var _Day2 = require("./_Day.js");

/**
 * Day
 */
var _DayUTC = function _DayUTC(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  return (0, _Day2._Day)(value, sourceDate, null);
};

exports._DayUTC = _DayUTC;
var _default = {
  _DayUTC: _DayUTC
};
exports["default"] = _default;