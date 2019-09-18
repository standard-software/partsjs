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
      throw new ReferenceError(
        'equal parameter args(value1,value2) is not defined'
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
      throw new ReferenceError(
        'or parameter args(value,compareArray) is not defined'
      );
    }
  } else {
    param = { value, compareArray };
  }

  if (!_isArray(param.compareArray)) {
    throw new TypeError(
      'or args(compareArray) is not array'
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
  let param;
  if (_isObject(value)) {
    if (('value' in value) && ('compareArray' in value)) {
      param = value;
    } else {
      throw new ReferenceError(
        'match parameter args(value,compareArray) is not defined'
      );
    }
  } else {
    param = { value, compareArray }
  }

  if (!_isArray(param.compareArray)) {
    throw new TypeError(
      'match args(compareArray) is not array'
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
    if (('value' in value)
    && ('compareArray' in value)
    && ('inMatchValue' in value)) {
      param = value;
    } else {
      throw new ReferenceError(
        'matchValue parameter args(value,compareArray,inMatchValue) is not defined'
      );
    }
  } else {
    param = { value, compareArray, inMatchValue }
  }

  if (!_isArray(param.compareArray)) {
    throw new TypeError(
      'matchValue args compareArray is not array'
    );
  }

  return _matchValue(
    param.value,
    param.compareArray,
    param.inMatchValue,
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
  let param;
  if (_isObject(value)) {
    if (('value' in value) && ('inMatchValue' in value)) {
      param = value;
    } else {
      throw new ReferenceError(
        'initialValue parameter args(value,inMatchValue) is not defined'
      );
    }
  } else {
    param = { value, inMatchValue }
  }

  return _initialValue(
    param.value,
    param.inMatchValue
  );
};

module.exports = {
  _equal, equal,
  _or, or,
  _match, match,
  _matchValue, matchValue,
  _initialValue, initialValue,
};
