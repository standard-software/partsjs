"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Year = void 0;

var _isType = require("../type/isType.js");

/**
 * Year
 */
var cloneDate = function cloneDate(date) {
  return new Date(date.getTime());
};

var setDateOffsetMin = function setDateOffsetMin(date, offsetMin) {
  var result = cloneDate(date);
  result.setUTCMinutes(result.getUTCMinutes() - offsetMin);
  return result;
};

var _Year = function _Year(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date().getTimezoneOffset();

  if ((0, _isType.isString)(value)) {
    value = value.toLowerCase();

    if (value === 'this') {
      value = 0;
    } else if (value === 'last') {
      value = -1;
    } else if (value === 'next') {
      value = 1;
    }
  }

  var _sourceDate = setDateOffsetMin(sourceDate, timezoneOffset);

  var self;

  if ((0, _isType.isNull)(timezoneOffset)) {
    self = new Date(Date.UTC(sourceDate.getUTCFullYear() + value, 0, 1, 0, 0, 0, 0));
  } else {
    self = new Date(Date.UTC(_sourceDate.getUTCFullYear() + value, 0, 1, 0, 0, 0, 0));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }

  return self;
};

exports._Year = _Year;
var _default = {
  _Year: _Year
};
exports["default"] = _default;