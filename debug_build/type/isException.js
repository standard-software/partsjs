"use strict";

var _require = require('../type/isType.js'),
    isError = _require.isError;

var _require2 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require2.isObjectParameter;
/**
 *isException
 * description:
 * isException can determine standard Error objects
 *  and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */


var isException = function isException(value) {
  if (isObjectParameter(value, 'name,message')) {
    return true;
  } else if (isError(value)) {
    return true;
  }

  return false;
};

var isNotException = function isNotException(value) {
  return !isException(value);
};

module.exports = {
  isException: isException,
  isNotException: isNotException
};