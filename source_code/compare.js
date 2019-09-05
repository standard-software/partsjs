const {
  _isUndefined,
  _isNull,
  _isNaNStrict,
  _isBoolean,
  _isNumber,
  _isInteger,
  _isString,
  _isFunction,
  _isObject,
  _isArray,
  _isDate,
  _isRegExp,
  _isError,
  _isException,
} = require('./type.js');

const {
  assert,
  guard,
  if_,
} = require('./syntax.js');

/**
 * equal
 */
const _equal = (valueA, valueB) => {
  return valueA === valueB;
};

const equal = (...parameter) => {
  if (parameter.length === 1) {
    if (
      (_isObject(parameter[0])) && ('valueA' in parameter[0]) && ('valueB' in parameter[0])
    ) {
      return _equal(parameter[0].valueA, parameter[0].valueB);
    } else {
      throw new SyntaxError(
        'equal args do not have valueA and valueB property.'
      );
    }
  } else if (parameter.length === 2) {
    return _equal(parameter[0], parameter[1]);
  } else {
    throw new SyntaxError(
      'equal args.length is not 1 or 2.'
    );
  }
};

/**
 * or
 */
const or = (value, compareArray) => {
  assert(_isArray(compareArray));
  for (let i = 0; i < compareArray.length; i += 1) {
    if (value === compareArray[i]) {
      return true;
    }
  }
  return false;
};

const _match = (
  matchFunc,
  value, compareArray
) => {
  guard(() => [
    [
      _isArray(compareArray),
      '_match args2(compareArray) type is not Array.'
    ],
  ], () => {
    throw new TypeError(guard.message());
  });

  if (_isString(value)) {
    return compareArray.some((element) => {
      let result;
      if (_isRegExp(element)) {
        result = value.match(element) !== null;
      } else if (_isFunction(element)) {
        result = element(value);
      } else {
        result = matchFunc(value, element);
      }
      if (!_isBoolean(result)) {
        throw new SyntaxError('_match args2(compareArray) Array element result is not Boolean.');
      }
      return result;
    });
  } else {
    return compareArray.some((element) => {
      let result;
      if (_isFunction(element)) {
        result = element(value);
      } else {
        result = matchFunc(value, element);
      }
      if (!_isBoolean(result)) {
        throw new SyntaxError('_match args2(compareArray) Array element result is not Boolean.');
      }
      return result;
    });
  }
};

const match = (
  value,
  compareArray
) => {
  const matchFunc = (a, b) => a === b;
  const parameter = if_(_isObject(value))({
    then: value,
    else: { value, compareArray }
  });
  return _match(matchFunc, parameter.value, parameter.compareArray);
};

const _matchValue = (
  value,
  compareArray,
  inMatchValue,
) => {
  const matchFunc = (a, b) => a === b;
  if (_match(matchFunc, value, compareArray)) {
    return inMatchValue;
  }
  return value;
};

const matchValue = (
  value,
  compareArray,
  inMatchValue,
) => {
  const parameter = if_(_isObject(value))({
    then: value,
    else: { value, compareArray, inMatchValue }
  });
  return _matchValue(
    parameter.value, parameter.compareArray, parameter.inMatchValue
  );
};

const defaultValue = (
  value,
  inMatchValue,
) => {
  const parameter = if_(_isObject(value))({
    then: value,
    else: { value, inMatchValue }
  });
  return _matchValue(
    parameter.value, [ _isUndefined, _isNull], parameter.inMatchValue
  );
};

module.exports = {
  _equal, equal,
  or,
  match,
  matchValue,
  defaultValue,
};
