"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._DateTime = void 0;

/**
 * DateTime
 */
var _DateTime = function _DateTime() {
  var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1970;
  var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var day = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var second = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var millisecond = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var isLocal = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;

  if (!(this instanceof _DateTime)) {
    return new _DateTime(year, month, day, hour, minute, second, millisecond, isLocal);
  }

  var self = new Date(0);

  if (isLocal === true) {
    self.setFullYear(year);
    self.setDate(1);
    self.setMonth(month - 1);
    self.setDate(day);
    self.setHours(hour);
    self.setMinutes(minute);
    self.setSeconds(second);
    self.setMilliseconds(millisecond);
  } else {
    self.setUTCFullYear(year);
    self.setUTCDate(1);
    self.setUTCMonth(month - 1);
    self.setUTCDate(day);
    self.setUTCHours(hour);
    self.setUTCMinutes(minute);
    self.setUTCSeconds(second);
    self.setUTCMilliseconds(millisecond);
  }

  return self;
};

exports._DateTime = _DateTime;
var _default = {
  _DateTime: _DateTime
};
exports["default"] = _default;