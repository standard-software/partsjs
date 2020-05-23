const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/isType.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const _objectEntries = (object) => {
  const result = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
};

const objectEntries = (object) => {
  if (isObjectParameter(object, 'object')) {
    ({ object } = object);
  }

  if (!isObject(object)) {
    throw new TypeError(
      'objectEntries args(object) is not object',
    );
  }

  return _objectEntries(object);
};

const entries = objectEntries;

module.exports = {
  _objectEntries,

  objectEntries,

  entries,
};
