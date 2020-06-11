const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/isType.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

/**
 * objectToKeyValueArray
 */
const _objectToKeyValueArray = (object) => {
  const result = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
};

const objectToKeyValueArray = (object) => {
  if (isObjectParameter(object, 'object')) {
    ({ object } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'objectToKeyValueArray args(object) is not object',
    );
  }

  return _objectToKeyValueArray(object);
};

const objectEntries = objectToKeyValueArray;

module.exports = {
  _objectToKeyValueArray,
  objectToKeyValueArray,

  objectEntries,
};
