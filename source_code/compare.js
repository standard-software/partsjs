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
const _equal = (value1, value2) => {
  return value1 === value2;
};

const equal = (value1, value2) => {
  if (_isObject(value1)) {
    if (('value1' in value1) && ('value2' in value1)) {
      return _equal(value1.value1, value1.value2);
    } else {
      throw new SyntaxError(
        'equal args do not have value1 and value2 property.'
      );
    }
  } else {
    return _equal(value1, value2);
  }
};

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
  let param;
  if (_isObject(value)) {
    if (('value' in value) && ('compareArray' in value)) {
      param = value;
    } else {
      throw new SyntaxError(
        'or args do not have value and compareArray property.'
      );
    }
  } else {
    param = { value, compareArray };
  }

  if (!_isArray(param.compareArray)) {
    throw new SyntaxError(
      'or args2(compareArray) type is not Array.'
    );
  }
  return _or(param.value, param.compareArray)
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
