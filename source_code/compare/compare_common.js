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
  _copyProperty, _propertyCount, _inProperty,
} = require('../object/object.js');

/**
 * or
 */
const _or = (value, compareArray) => {
  for (let i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }
  return false;
};

const or = (value, compareArray) => {
  if (_inProperty(value, 'value,compareArray')) {
      ({ value, compareArray } = value)
  }

  if (!_isArray(compareArray)) {
    throw new TypeError(
      'or args(compareArray) is not array'
    );
  }

  return _or(value, compareArray)
};

/**
 * match
 */
const _match = (value, compareArray) => {
  if (_isString(value)) {
    for (let i = 0, l = compareArray.length; i < l; i += 1) {
      const element = compareArray[i];
      let result = false;
      if (_isRegExp(element)) {
        result = value.match(element) !== null;
      } else if (_isFunction(element)) {
        result = element(value);
        if (!_isBoolean(result)) {
          throw new TypeError(
            '_match args(compareArray element function result) is not boolean'
          );
        }
      } else {
        result = value === element;
      }
      if (result) {
        return true;
      }
    }
    return false;
  } else {
    for (let i = 0, l = compareArray.length; i < l; i += 1) {
      const element = compareArray[i];
      let result;
      if (_isFunction(element)) {
        result = element(value);
        if (!_isBoolean(result)) {
          throw new TypeError(
            '_match args(compareArray element function result) is not boolean'
          );
        }
      } else {
        result = value === element;
      }
      if (result) {
        return true;
      }
    }
    return false;
  }
};

const match = (
  value,
  compareArray
) => {
  if (_inProperty(value, 'value,compareArray')) {
    ({ value, compareArray } = value);
  }

  if (!_isArray(compareArray)) {
    throw new TypeError(
      'match args(compareArray) is not array'
    );
  }

  return _match(value, compareArray);
};

/**
 * matchAll
 */
const _matchAll = (
  valueArray,
  compareArray
) => {
  let result = false;
  for (let i = 0, l = valueArray.length; i < l; i += 1) {
    if (_match(valueArray[i], compareArray)) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

const matchAll = (
  valueArray,
  compareArray
) => {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  }

  if (!_isArray(valueArray)) {
    throw new TypeError(
      'matchAll args(valueArray) is not array'
    );
  }
  if (!_isArray(compareArray)) {
    throw new TypeError(
      'matchAll args(compareArray) is not array'
    );
  }

  return _matchAll(valueArray, compareArray);
};

/**
 * matchSome
 */
const _matchSomeIndex = (
  valueArray,
  compareArray
) => {
  let result = -1;
  for (let i = 0, l = valueArray.length; i < l; i += 1) {
    if (_match(valueArray[i], compareArray)) {
      result = i;
      break;
    }
  }
  return result;
};

const _matchSome = (
  valueArray,
  compareArray
) => {
  return _matchSomeIndex(
    valueArray,
    compareArray,
  ) !== -1
};

const matchSomeIndex = (
  valueArray,
  compareArray
) => {
  if (_inProperty(valueArray, 'valueArray,compareArray')) {
    ({ valueArray, compareArray } = valueArray);
  }

  if (!_isArray(valueArray)) {
    throw new TypeError(
      'matchSomeIndex args(valueArray) is not array'
    );
  }
  if (!_isArray(compareArray)) {
    throw new TypeError(
      'matchSomeIndex args(compareArray) is not array'
    );
  }

  return _matchSomeIndex(valueArray, compareArray);
};

const matchSome = (
  valueArray,
  compareArray
) => {
  return matchSomeIndex(
    valueArray,
    compareArray,
  ) !== -1
};

/**
 * matchValue
 */
const _matchValue = (
  value,
  compareArray,
  inMatchValue,
) => {
  if (_match(value, compareArray)) {
    return inMatchValue;
  }
  return value;
};

const matchValue = (
  value,
  compareArray,
  inMatchValue,
) => {
  if (_inProperty(value, 'value,compareArray,inMatchValue')) {
    ({ value, compareArray, inMatchValue } = value);
  }

  if (!_isArray(compareArray)) {
    throw new TypeError(
      'matchValue args(compareArray) is not array'
    );
  }

  return _matchValue(
    value,
    compareArray,
    inMatchValue,
  );
};

/**
 * initialValue
 */
const _initialValue = (
  value,
  inMatchValue,
) => {
  if (_match(value, [ _isUndefined])) {
    return inMatchValue;
  }
  return value;
};

const initialValue = (
  value,
  inMatchValue,
) => {
  if (_inProperty(value, 'value,inMatchValue')) {
    ({ value, inMatchValue } = value);
  }

  return _initialValue(
    value,
    inMatchValue
  );
};

/**
 * isEmpty
 */
const isEmpty = (
  value,
) => {
  return _match(
    value,
    [
      undefined,
      null,
      '',
      (value) => _isObject(value) && _propertyCount(value) === 0,
      (value) => _isArrayType(value) && value.length === 0,
    ]
  )
}

const matchEvery = matchAll;
const matchAnyIndex = matchSomeIndex;
const matchAny = matchSome;

module.exports = {
  _or,
  _match, _matchValue, _initialValue,
  _matchAll, _matchSomeIndex, _matchSome,

  or,
  match,matchValue,initialValue,
  matchAll, matchSomeIndex, matchSome,

  matchEvery, matchAnyIndex, matchAny,

  isEmpty,

};
