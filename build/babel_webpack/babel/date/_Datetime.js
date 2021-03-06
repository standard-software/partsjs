"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Datetime = void 0;

var _type = require("../type/type.js");

var _roundDown2 = require("../number/_roundDown.js");

/**
 * Datetime
 */
var _Datetime = function _Datetime() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hours = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minutes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var seconds = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var milliseconds = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var timezoneOffset = arguments.length > 7 ? arguments[7] : undefined;
  var self = new Date(0);

  if ((0, _type.isUndefined)(timezoneOffset)) {
    self.setFullYear(year, month - 1, date);
    self.setHours(hours, minutes, seconds, milliseconds);
  } else if ((0, _type.isNull)(timezoneOffset)) {
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hours, minutes, seconds, milliseconds);
  } else {
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    self.setUTCFullYear(year, month - 1, date);
    self.setUTCHours(hours, minutes, seconds, milliseconds);
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
    self.setUTCSeconds(self.getUTCSeconds() + timezoneOffsetSeconds);
  }

  return self;
};

exports._Datetime = _Datetime;
var _default = {
  _Datetime: _Datetime
};
exports["default"] = _default;