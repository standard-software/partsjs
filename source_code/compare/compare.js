const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _copyProperty,_propertyCount,_inProperty,
} = require('../object/object.js');

/**
 * equal
 */
const _equal = (value1, value2) => {
  return value1 === value2;
};

const equal = (value1, value2) => {
  if (_inProperty(value1, 'value1,value2')) {
    ({ value1, value2 } = value1);
  }

  return _equal(value1, value2);
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

const _match = (value, compareArray) => {
  if (_isString(value)) {
    return compareArray.some((element) => {
      let result;
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
      return result;
    });
  } else {
    return compareArray.some((element) => {
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
      return result;
    });
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
      (value) => _isArray(value) && value.length === 0,
    ]
  )
}

module.exports = {
  _equal,_or,
  _match,_matchValue,_initialValue,

  equal,or,
  match,matchValue,initialValue,
  isEmpty,

};
