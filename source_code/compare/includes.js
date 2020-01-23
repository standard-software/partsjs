const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isObjectType,
  _isArray, _isArrayType,
  _isDate, _isRegExp,
  _isException,
  _isMap, _isWeakMap,
  _isSet, _isWeakSet,
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

/**
 * includes
 */
const _includes = (value, compare) => {
  if (_isString(value)) {
    if (compare === '') {
      return false;
    }
    if (_isRegExp(compare)) {
      return _match(value, compare);
    }
    return value.indexOf(compare) !== -1;
  } else if (_isArray(value)) {
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

  if (_isString(value)) {
    if (!(_isString(compare) || _isRegExp(compare))) {
      throw new TypeError(
        'includes args(compare) is not [string|RegExp]',
      );
    }
  } else if (_isArray(value)) {
    //
  } else {
    throw new TypeError(
      'includes args(value) is not [string|array]',
    );
  }

  return _includes(value, compare);
};

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

  if (!_isArray(compareArray)) {
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

  if (!_isArray(compareArray)) {
    throw new TypeError(
      'includesAll args(compareArray) is not array',
    );
  }

  return _includesAll(value, compareArray);
};

module.exports = {
  _includes,
  _includesSome,
  _includesAll,

  includes,
  includesSome,
  includesAll,

};
