const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _propertyCount,
} = require('../object/_propertyCount.js');

const {
  _replaceAll,
} = require('../string/_replaceAll.js');

/**
 * copyProperty
 */
const _copyProperty = (fromObject, propertyArray, toObject = {}) => {

  if (isString(propertyArray)) {
    propertyArray = _replaceAll(propertyArray, ' ', '').split(',');
  }

  for (let i = 0; i < propertyArray.length; i += 1) {
    if ((propertyArray[i] === '')
    || (isUndefined(propertyArray[i]))) {
      continue;
    }
    if (!isString(propertyArray[i])) {
      throw new TypeError(
        'copyProperty args(propertyArray) element is not string',
      );
    }
    toObject[propertyArray[i]] = fromObject[propertyArray[i]];
  }
  return toObject;
};

const copyProperty = (fromObject, propertyArray, toObject = {}) => {
  if (isObjectParameter(fromObject, 'fromObject,propertyArray', 'toObject')) {
    ({ fromObject, propertyArray, toObject = {} } = fromObject);
  }

  if (!isObject(fromObject)) {
    throw new TypeError(
      'copyProperty args(fromObject) is not object',
    );
  }
  if (!isString(propertyArray)) {
    if (!isArray(propertyArray)) {
      throw new TypeError(
        'copyProperty args(propertyArray) is not [array|string]',
      );
    }
  }
  if (!isObject(toObject)) {
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
const propertyCount = (object, hasOwn = true) => {
  if (isObjectParameter(object, 'object', 'hasOwn')) {
    ({ object, hasOwn = true } = object);
  }

  if (!isObjectType(object)) {
    throw new TypeError(
      'propertyCount args(object) is not object type',
    );
  }
  if (!isBoolean(hasOwn)) {
    throw new TypeError(
      'getProperty args(hasOwn) is not boolean',
    );
  }

  return _propertyCount(object, hasOwn);
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

    if (isUndefined(result[propertyArray[i]])) {
      return undefined;
    }

    result = result[propertyArray[i]];
  }
  return result;
};

const getProperty = (object, propertyPath, hasOwn = true) => {
  if (isObjectParameter(object, 'object, propertyPath', 'hasOwn')) {
    ({ object, propertyPath, hasOwn = true } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'getProperty args(object) is not object',
    );
  }
  if (!isString(propertyPath)) {
    throw new TypeError(
      'getProperty args(propertyPath) is not string',
    );
  }
  if (!isBoolean(hasOwn)) {
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
        isObject(result[propertyArray[i]])
        ||isArrayType(result[propertyArray[i]])
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

  if (!isObject(object)) {
    throw new TypeError(
      'setProperty args(object) is not object',
    );
  }
  if (!isString(propertyPath)) {
    throw new TypeError(
      'setProperty args(propertyPath) is not string',
    );
  }

  return _setProperty(object, propertyPath, value);
};

const copyProp = copyProperty;
const propCount = propertyCount;
const getProp = getProperty;
const setProp = setProperty;

module.exports = {
  _copyProperty,
  _propertyCount,
  _getProperty, _setProperty,

  copyProperty,
  propertyCount,
  getProperty, setProperty,

  copyProp,
  propCount,
  getProp, setProp,
};
