"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._Year = void 0;

var _isType = require("../type/isType.js");

var _cloneDate = require("../common/__cloneDate.js");

/**
 * Year
 */
var _Year = function _Year(value) {
  var sourceDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var timezoneOffset = arguments.length > 2 ? arguments[2] : undefined;

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

  var s = sourceDate;
  var self;

  if ((0, _isType.isUndefined)(timezoneOffset)) {
    self = new Date(s.getFullYear() + value, 0, 1, 0, 0, 0, 0);
  } else if ((0, _isType.isNull)(timezoneOffset)) {
    self = new Date(Date.UTC(s.getUTCFullYear() + value, 0, 1, 0, 0, 0, 0));
  } else {
    var _s = (0, _cloneDate.__cloneDate)(s);

    _s.setUTCMinutes(_s.getUTCMinutes() - timezoneOffset);

    self = new Date(Date.UTC(_s.getUTCFullYear() + value, 0, 1, 0, 0, 0, 0));
    self.setUTCMinutes(self.getUTCMinutes() + timezoneOffset);
  }

  return self;
};

exports._Year = _Year;
var _default = {
  _Year: _Year
};
exports["default"] = _default;