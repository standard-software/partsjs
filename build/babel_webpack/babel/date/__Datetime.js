"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__Datetime = void 0;

var _type = require("../type/type.js");

/**
 * Datetime
 */
var __Datetime = function __Datetime() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var second = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var millisecond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var timezoneOffset = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new Date().getTimezoneOffset();
  var self = new Date(0);
  self.setUTCFullYear(year, month - 1, date);
  self.setUTCHours(hour, minute, second, millisecond);

  if (!(0, _type.isNull)(timezoneOffset)) {
    self.setMinutes(self.getMinutes() + timezoneOffset);
  }

  return self;
};

exports.__Datetime = __Datetime;
var _default = {
  __Datetime: __Datetime
};
exports["default"] = _default;