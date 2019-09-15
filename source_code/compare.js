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

const _TEXT = require('./_text.js');

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
      // 'equal args(value1,value2) is not defined'
      throw new ReferenceError(
        _TEXT.ReferenceError
        .value1ParameterArgsValue2IsNotDefined('equal', 'value1,value2')
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
      // 'or parameter args(value,compareArray) is not defined'
      throw new ReferenceError(
        _TEXT.ReferenceError
        .value1ParameterArgsValue2IsNotDefined('or', 'value,compareArray')
      );
    }
  } else {
    param = { value, compareArray };
  }

  if (!_isArray(param.compareArray)) {
    // 'or args(compareArray) is not array'
    throw new TypeError(
      _TEXT.TypeError
      .value1ArgsValue2IsNotArray('or', 'compareArray')
    );
  }
  return _or(param.value, param.compareArray)
};

const _match = (value, compareArray) => {
  if (_isString(value)) {
    return compareArray.some((element) => {
      let result;
      if (_isRegExp(element)) {
        result = value.match(element) !== null;
      } else if (_isFunction(element)) {
        result = element(value);
        if (!_isBoolean(result)) {
          // '_match args(compareArray element function result) is not boolean'
          throw new TypeError(
            _TEXT.TypeError
            .value1ArgsValue2IsNotBoolean('_match', 'compareArray element function result')
          );
        }
      } else {
        result = value === element;
      }
      return result;
    });
  } else {
    return compareArray.some((element) => {
      let result;
      if (_isFunction(element)) {
        result = element(value);
        if (!_isBoolean(result)) {
          throw new TypeError(
          // '_match args(compareArray element function result) is not boolean'
          _TEXT.TypeError
            .value1ArgsValue2IsNotBoolean('_match', 'compareArray element function result')
          );
        }
      } else {
        result = value === element;
      }
      return result;
    });
  }
};

const match = (
  value,
  compareArray
) => {
  let param;
  if (_isObject(value)) {
    if (('value' in value) && ('compareArray' in value)) {
      param = value;
    } else {
      // 'match parameter args(value,compareArray) is not defined'
      throw new ReferenceError(
        _TEXT.ReferenceError
        .value1ParameterArgsValue2IsNotDefined('match', 'value,compareArray')
      );
    }
  } else {
    param = { value, compareArray }
  }

  if (!_isArray(param.compareArray)) {
    // 'match args compareArray is not array'
    throw new TypeError(
      _TEXT.TypeError
      .value1ArgsValue2IsNotArray('match', 'compareArray')
    );
  }

  return _match(param.value, param.compareArray);
};

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
  let param;
  if (_isObject(value)) {
    if (('value' in value) && ('compareArray' in value) && ('inMatchValue' in value)) {
      param = value;
    } else {
      // 'matchValue parameter args(value,compareArray,inMatchValue) is not defined'
      throw new ReferenceError(
        _TEXT.ReferenceError
        .value1ParameterArgsValue2IsNotDefined('matchValue', 'value,compareArray,inMatchValue')
      );
    }
  } else {
    param = { value, compareArray, inMatchValue }
  }

  if (!_isArray(param.compareArray)) {
    // 'matchValue args compareArray is not array'
    throw new TypeError(
      _TEXT.TypeError
      .value1ArgsValue2IsNotArray('matchValue', 'compareArray')
    );
  }

  return _matchValue(
    param.value,
    param.compareArray,
    param.inMatchValue,
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
  return matchValue(
    parameter.value,
    [ _isUndefined, _isNull],
    parameter.inMatchValue
  );
};

module.exports = {
  _equal, equal,
  or,
  match,
  matchValue,
  defaultValue,
};
