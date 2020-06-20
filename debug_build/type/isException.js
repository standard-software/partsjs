"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNotExcept = exports.isExcept = exports.isNotException = exports.isException = void 0;

var _isType = require("../type/isType.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 *isException
 * description:
 * isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */
var isException = function isException(value) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'name,message')) {
    return true;
  } else if ((0, _isType.isError)(value)) {
    return true;
  }

  return false;
};

exports.isException = isException;

var isNotException = function isNotException(value) {
  return !isException(value);
};

exports.isNotException = isNotException;
var isExcept = isException;
exports.isExcept = isExcept;
var isNotExcept = isNotException;
exports.isNotExcept = isNotExcept;
var _default = {
  isException: isException,
  isNotException: isNotException,
  isExcept: isExcept,
  isNotExcept: isNotExcept
};
exports["default"] = _default;