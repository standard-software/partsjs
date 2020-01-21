"use strict";

var _require = require('../type/_isType.js'),
    _isError = _require._isError;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;
/**
 * _isException
 * description:
 *  _isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */


var _isException = function _isException(value) {
  if (isObjectParameter(value, 'name,message')) {
    return true;
  } else if (_isError(value)) {
    return true;
  }

  return false;
};

var _isNotException = function _isNotException(value) {
  return !_isException(value);
};

module.exports = {
  _isException: _isException,
  _isNotException: _isNotException
};