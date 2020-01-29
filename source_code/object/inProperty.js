const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,
} = require('../type/isType.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _getProperty,
} = require('../object/object_common.js');

/**
 * _inProperty
 */
const _inProperty = (object, propertyPathArray, hasOwn = true) => {

  if (!_isObject(object)) {
    return false;
  }

  if (_isString(propertyPathArray)) {
    propertyPathArray = _replaceAll(propertyPathArray, ' ', '').split(',');
  }

  for (let i = 0; i < propertyPathArray.length; i += 1) {
    // if ((propertyPathArray[i] === '')
    // || (_isUndefined(propertyPathArray[i]))) {
    //   continue;
    // }
    if (!_isString(propertyPathArray[i])) {
      throw new TypeError(
        '_inProperty args(propertyArray) element is not string',
      );
    }
    const result = _getProperty(object, propertyPathArray[i], hasOwn);
    if (_isUndefined(result)) {
      return false;
    }
  }
  return true;
};

/**
 * inProperty
 */
const inProperty = (object, propertyPathArray, hasOwn = true) => {
  if (isObjectParameter(object, 'object, propertyPathArray', 'hasOwn')) {
    ({ object, propertyPathArray, hasOwn = true } = object);
  }

  if (!_isObject(object)) {
    throw new TypeError(
      'inProperty args(fromObject) is not object',
    );
  }

  if (!_isString(propertyPathArray)) {
    if (!_isArray(propertyPathArray)) {
      throw new TypeError(
        'inProperty args(propertyPathArray) is not [array|string]',
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
    propertyPathArray,
    hasOwn,
  );
};

const inProp = inProperty;

module.exports = {
  _inProperty,

  inProperty,
  inProp,
};
