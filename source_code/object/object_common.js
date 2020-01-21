const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isObjectType,
  _isArray, _isArrayType,
  _isDate, _isRegExp,
  _isError,
  _isBooleanObject, _isNumberObject, _isStringObject,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

/**
 * copyProperty
 */
const _copyProperty = (fromObject, propertyArray, toObject = {}) => {

  if (_isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (let i = 0; i < propertyArray.length; i += 1) {
    if ((propertyArray[i] === '')
    || (_isUndefined(propertyArray[i]))) {
      continue;
    }
    if (!_isString(propertyArray[i])) {
      throw new TypeError(
        'copyProperty args(propertyArray) element is not string',
      );
    }
    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }
  return toObject;
};

const copyProperty = (fromObject, propertyArray, toObject = {}) => {
  if (isObjectParameter(fromObject, 'fromObject,propertyArray')) {
    ({ fromObject, propertyArray, toObject = {} } = fromObject);
  }

  if (!_isObject(fromObject)) {
    throw new TypeError(
      'copyProperty args(fromObject) is not object',
    );
  }
  if (!_isString(propertyArray)) {
    if (!_isArray(propertyArray)) {
      throw new TypeError(
        'copyProperty args(propertyArray) is not [array|string]',
      );
    }
  }
  if (!_isObject(toObject)) {
    throw new TypeError(
      'copyProperty args(toObject) is not object',
    );
  }

  _copyProperty(
    fromObject,
    propertyArray,
    toObject,
  );
};

/**
 * propertyCount
 */
const _propertyCount = (object) => {
  let result = 0;
  for (const [key, value] of Object.entries(object)) {
    result += 1;
  }
  return result;
};

const propertyCount = (object) => {
  if (!_isObject(object)) {
    throw new TypeError(
      'propertyCount args(object) is not object',
    );
  }
  return _propertyCount(object);
};

/**
 * getProperty
 */
const _getProperty = (
  object,
  propertyPath,
  hasOwn = true,
) => {
  let result = object;
  const propertyArray = propertyPath.split('.');
  for (let i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '' ) {
      return undefined;
    }

    if (hasOwn) {
      if (!result.hasOwnProperty(propertyArray[i])) {
        return undefined;
      }
    } else {
      if (!(propertyArray[i] in result)) {
        return undefined;
      }
    }

    if (_isUndefined(result[propertyArray[i]])) {
      return undefined;
    }

    result = result[propertyArray[i]];
  }
  return result;
};

const getProperty = (object, propertyPath, hasOwn = true) => {
  if (isObjectParameter(object, 'object, propertyPath')) {
    ({ object, propertyPath, hasOwn = true } = object);
  }

  if (!_isObject(object)) {
    throw new TypeError(
      'getProperty args(object) is not object',
    );
  }
  if (!_isString(propertyPath)) {
    throw new TypeError(
      'getProperty args(propertyPath) is not string',
    );
  }
  if (!_isBoolean(hasOwn)) {
    throw new TypeError(
      'getProperty args(hasOwn) is not boolean',
    );
  }

  return _getProperty(object, propertyPath, hasOwn);
};

/**
 * setProperty
 */
const _setProperty = (object, path, value) => {
  const propertyArray = path.split('.');
  for (let i = 0, l = propertyArray.length; i < l; i += 1) {
    if (propertyArray[i] === '' ) {
      throw new Error('setProperty args(propertyPath) is no exist property');
    }
  }

  let result = object;
  for (let i = 0, l = propertyArray.length - 1; i < l; i += 1) {
    if (
      !(
        _isObject(result[propertyArray[i]])
        || _isArrayType(result[propertyArray[i]])
      )
    ) {
      result[propertyArray[i]] = {};
    }
    result = result[propertyArray[i]];
  }
  result[propertyArray[propertyArray.length - 1]] = value;
  return result;
};

const setProperty = (object, propertyPath, value) => {
  if (isObjectParameter(object, 'object, propertyPath, value')) {
    ({ object, propertyPath, value } = object);
  }

  if (!_isObject(object)) {
    throw new TypeError(
      'setProperty args(object) is not object',
    );
  }
  if (!_isString(propertyPath)) {
    throw new TypeError(
      'setProperty args(propertyPath) is not string',
    );
  }

  return _setProperty(object, propertyPath, value);
};

/**
 * isEmptyObject
 */
const _isEmptyObject = (object) => {
  return _propertyCount(object) === 0;
};

const isEmptyObject = (object) => {

  if (!_isObject(object)) {
    throw new TypeError(
      'isEmptyObject args(object) is not object',
    );
  }

  return _isEmptyObject(object);
};

const isEmptyObj = isEmptyObject;

const copyProp = copyProperty;
const propCount = propertyCount;
const getProp = getProperty;
const setProp = setProperty;

module.exports = {
  _copyProperty,
  _propertyCount,
  _getProperty, _setProperty,
  _isEmptyObject,

  copyProperty,
  propertyCount,
  getProperty, setProperty,
  isEmptyObject,

  copyProp,
  propCount,
  getProp, setProp,
  isEmptyObj,
};
