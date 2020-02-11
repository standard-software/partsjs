const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isMap, isWeakMap,
  isSet, isWeakSet,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _some, _all,
  _findFirstIndex,
} = require('../array/array_common.js');

const {
  _match,
} = require('../compare/match.js');

const {
  _includes, includes,
} = require('../compare/includes.js');

/**
 * includesSome
 */
const _includesSome = (value, compareArray) => {
  return _some(compareArray, compare => {
    return includes(value, compare);
  });
};

const includesSome = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'includesSome args(compareArray) is not array',
    );
  }

  return _includesSome(value, compareArray);
};

/**
 * includesAll
 */
const _includesAll = (value, compareArray) => {
  return _all(compareArray, compare => {
    return includes(value, compare);
  });
};

const includesAll = (
  value,
  compareArray,
) => {
  if (isObjectParameter(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!isArray(compareArray)) {
    throw new TypeError(
      'includesAll args(compareArray) is not array',
    );
  }

  return _includesAll(value, compareArray);
};

module.exports = {
  _includesSome,
  _includesAll,

  includesSome,
  includesAll,

};
