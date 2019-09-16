const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isError, _isException,

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
  radix
) => {
  radix = _initialValue(radix, 10);

  let param;
  if (_isObject(value)) {
    if ('value' in value) {
      param = value;
      param.radix = _initialValue(param.radix, radix);
    } else {
      throw new ReferenceError(
        'numberToString parameter args(value) is not defined'
      );
    }
  } else {
    param = { value, radix };
  }

  if (!_isNumber(param.value)) {
    throw new TypeError(
      'numberToString args(value) is not number'
    );
  }
  if (!_isInteger(param.radix)) {
    throw new TypeError(
      'numberToString args(radix) is not integer'
    );
  }
  if (!(2 <= param.radix && param.radix <= 36)) {
    throw new RangeError(
      'numberToString args(radix) must be between 2 and 36'
    );
  }

  return _numberToString(
    param.value, param.radix
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
  let param;
  if (_isObject(value)) {
    if ('value' in value) {
      param = value;
    } else {
      throw new ReferenceError(
        'stringToNumber parameter args(value) is not defined'
      );
    }
  } else {
    param = { value, defaultValue };
  }

  if (!_isString(param.value)) {
    throw new TypeError(
      'stringToNumber args(value) is not string'
    );
  }

  return _stringToNumber(
    param.value, param.defaultValue
  );
};

/**
 * stringToInteger
 */
const _stringToInteger = (
  value,
  defaultValue,
  radix,
) => {
  radix = _initialValue(radix, 10);

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
  radix,
) => {
  radix = _initialValue(radix, 10);

  let param;
  if (_isObject(value)) {
    if ('value' in value) {
      param = value;
      param.radix = _initialValue(param.radix, radix);
    } else {
      throw new ReferenceError(
        'stringToInteger parameter args(value) is not defined'
      );
    }
  } else {
    param = { value, defaultValue, radix };
  }

  if (!_isString(param.value)) {
    throw new TypeError(
      'stringToInteger args(value) is not string'
    );
  }
  if (!_isInteger(param.radix)) {
    throw new TypeError(
      'stringToInteger args(radix) is not integer'
    );
  }
  if (!(2 <= param.radix && param.radix <= 36)) {
    throw new RangeError(
      'stringToInteger args(radix) must be between 2 and 36'
    );
  }

  return _stringToInteger(
    param.value,
    param.defaultValue,
    param.radix,
  );
};

module.exports = {
  numberToString,
  stringToNumber,
  stringToInteger,
};

