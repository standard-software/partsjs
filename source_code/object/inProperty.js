const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,
} = require('../type/_isType.js');

const {
  _inProperty,
} = require('../object/_inProperty.js');

/**
 * inProperty
 */
const inProperty = (object, propertyArray, hasOwn = true) => {
  if (_inProperty(object, 'object,propertyArray')) {
    ({ object, propertyArray, hasOwn = true } = object);
  }

  // no object check

  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError(
        'inProperty args(propertyArray) is not [array|string]',
      );
    }
  }
  if (!_isBoolean(hasOwn)) {
    throw new TypeError(
      'inProperty args(hasOwn) is not boolean',
    );
  }

  return _inProperty(
    object,
    propertyArray,
    hasOwn,
  );
};

const inProp = inProperty;

module.exports = {
  inProperty,
  inProp,
};
