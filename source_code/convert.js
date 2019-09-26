const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,

  _isNotUndefined, _isNotNull, _isNotNaNStrict,
  _isNotBoolean, _isNotNumber, _isNotInteger, _isNotString,
  _isNotFunction, _isNotObject, _isNotArray, _isNotDate, _isNotRegExp,
  _isNotException,
} = require('./type.js');

const {
  _matchValue,
  _initialValue,
} = require('./compare.js');

const {
  _matchFormat,
} = require('./string.js');

/**
 * numberToString
 */
const _numberToString = (
  value,
  radix
) => {
  radix = _initialValue(radix, 10);
  return value.toString(radix);
};

const numberToString = (
  value,
  radix = 10
) => {
  if (_isObject(value)
  && ('value' in value)) {
    ({ value, radix = 10 } = value)
  }

  if (!_isNumber(value)) {
    throw new TypeError(
      'numberToString args(value) is not number'
    );
  }
  if (!_isInteger(radix)) {
    throw new TypeError(
      'numberToString args(radix) is not integer'
    );
  }
  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError(
      'numberToString args(radix) must be between 2 and 36'
    );
  }

  return _numberToString(
    value,
    radix
  );
};

/**
 * stringToNumber
 */
const _stringToNumber = (
  value,
  defaultValue,
) => {
  if (!_matchFormat('float', value)) {
    return defaultValue;
  }
  return _matchValue(
    Number(value),
    [_isNotNumber],
    defaultValue
  );
};
const stringToNumber = (
  value,
  defaultValue,
) => {
  if (_isObject(value)
  && ('value' in value)) {
    ({ value, defaultValue } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'stringToNumber args(value) is not string'
    );
  }

  return _stringToNumber(
    value,
    defaultValue
  );
};

/**
 * stringToInteger
 */
const _stringToInteger = (
  value,
  defaultValue,
  radix = 10,
) => {
  if (!_matchFormat(String(radix)+'_base_number',value )) {
    return defaultValue;
  }
  return _matchValue(
    parseInt(value, radix),
    [_isNotInteger],
    defaultValue
  );
};

const stringToInteger = (
  value,
  defaultValue,
  radix = 10,
) => {
  if (_isObject(value)
  && ('value' in value)) {
    ({ value, defaultValue, radix = 10 } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'stringToInteger args(value) is not string'
    );
  }
  if (!_isInteger(radix)) {
    throw new TypeError(
      'stringToInteger args(radix) is not integer'
    );
  }
  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError(
      'stringToInteger args(radix) must be between 2 and 36'
    );
  }

  return _stringToInteger(
    value,
    defaultValue,
    radix,
  );
};

const numToString   = numberToString;
const strToNumber   = stringToNumber;
const strToInteger  = stringToInteger;

const numToStr      = numberToString;
const strToNum      = stringToNumber;
const strToInt      = stringToInteger;

module.exports = {
  numberToString,
  stringToNumber,stringToInteger,

  numToString,
  strToNumber,strToInteger,

  numToStr,
  strToNum,strToInt,

};

