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
  _match,
} = require('../compare/match.js');

/**
 * includes
 */
const _includes = (value, compare) => {
  if (isString(value)) {
    if (compare === '') {
      return false;
    }
    if (isRegExp(compare)) {
      return _match(value, compare);
    }
    return value.indexOf(compare) !== -1;
  } else if (isArray(value)) {
    return value.indexOf(compare) !== -1;
  }
};

const includes = (
  value,
  compare,
) => {
  if (isObjectParameter(value, 'value, compare')) {
    ({ value, compare } = value);
  }

  if (isString(value)) {
    if (!(isString(compare) || isRegExp(compare))) {
      throw new TypeError(
        'includes args(compare) is not [string|RegExp]',
      );
    }
  } else if (isArray(value)) {
    //
  } else {
    throw new TypeError(
      'includes args(value) is not [string|array]',
    );
  }

  return _includes(value, compare);
};

module.exports = {
  _includes,

  includes,

};
