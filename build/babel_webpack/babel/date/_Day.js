"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Day = void 0;

var _isType = require("../type/isType.js");

/**
 * Day
 */
var cloneDate = function cloneDate(date) {
  return new Date(date.getTime());
};

var setDateOffsetMin = function setDateOffsetMin(date, offsetMin) {
  var result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  return result;
};

var _Day = function _Day(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getTimezoneOffset();

  if ((0, _isType.isString)(value)) {
    value = value.toLowerCase();

    if (value === 'this') {
      value = 0;
    } else if (value === 'today') {
      value = 0;
    } else if (value === 'last') {
      value = -1;
    } else if (value === 'yesterday') {
      value = -1;
    } else if (value === 'next') {
      value = 1;
    } else if (value === 'tomorrow') {
      value = 1;
    }
  }

  var _s = setDateOffsetMin(sourceDate, timezoneOffset);

  var s = sourceDate;
  var self;

  if ((0, _isType.isNull)(timezoneOffset)) {
    self = new Date(Date.UTC(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate() + value, 0, 0, 0, 0));
  } else {
    self = new Date(Date.UTC(_s.getUTCFullYear(), _s.getUTCMonth(), _s.getUTCDate() + value, 0, 0, 0, 0));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }

  return self;
};

exports._Day = _Day;
var _default = {
  _Day: _Day
};
exports["default"] = _default;