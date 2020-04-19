const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/isType.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _getPropertyBase,
} = require('../object/object_common.js');

/**
 * _inProperty
 */
const _inProperty = (object, propertyPathArray, hasOwn = true) => {

  if (!isObject(object)) {
    return false;
  }

  if (isString(propertyPathArray)) {
    propertyPathArray = _replaceAll(propertyPathArray, ' ', '').split(',');
  }

  for (let i = 0; i < propertyPathArray.length; i += 1) {
    // if ((propertyPathArray[i] === '')
    // || (isUndefined(propertyPathArray[i]))) {
    //   continue;
    // }
    if (!isString(propertyPathArray[i])) {
      throw new TypeError(
        '_inProperty args(propertyArray) element is not string',
      );
    }
    const result = _getPropertyBase(object, propertyPathArray[i], hasOwn);
    if (result.in === false) {
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

  if (!isObject(object)) {
    throw new TypeError(
      'inProperty args(fromObject) is not object',
    );
  }

  if (!isString(propertyPathArray)) {
    if (!isArray(propertyPathArray)) {
      throw new TypeError(
        'inProperty args(propertyPathArray) is not [array|string]',
      );
    }
  }
  if (!isBoolean(hasOwn)) {
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
