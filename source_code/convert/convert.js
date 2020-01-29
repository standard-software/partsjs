const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,

  _isNotUndefined, _isNotNull, _isNotNaNStrict,
  _isNotBoolean, _isNotNumber, _isNotInteger, _isNotString,
  _isNotFunction, _isNotObject, _isNotArray, _isNotDate, _isNotRegExp,
  _isNotException,
} = require('../type/type.js');

const {
  _matchValue,
  _initialValue,
} = require('../compare/compare.js');

const {
  _matchFormat,
} = require('../string/string.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _round,
} = require('../number/number.js');


/**
 * numberToString
 */
const _numberToString = (
  value,
  radix,
) => {
  radix = _initialValue(radix, 10);
  return value.toString(radix);
};

const numberToString = (
  value,
  radix = 10,
) => {
  if (isObjectParameter(value, 'value', 'radix')) {
    ({ value, radix = 10 } = value);
  }

  if (!_isNumber(value)) {
    throw new TypeError(
      'numberToString args(value) is not number',
    );
  }
  if (!_isInteger(radix)) {
    throw new TypeError(
      'numberToString args(radix) is not integer',
    );
  }
  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError(
      'numberToString args(radix) must be between 2 and 36',
    );
  }

  return _numberToString(
    value,
    radix,
  );
};

/**
 * stringToNumber
 */
const _stringToNumberBase = (
  value,
  defaultValueFunc,
) => {
  if (value === '') {
    return defaultValueFunc();
  }
  if (!_matchFormat('float_more', value)) {
    return defaultValueFunc();
  }

  const result = Number(value);
  if (!_isNumber(result)) {
    return defaultValueFunc();
  }
  return result;
};

const _stringToNumber = (
  value,
) => {
  return _stringToNumberBase(
    value,
    () => {
      throw new RangeError(
        'stringToNumber args(value) is not changeing number',
      );
    },
  );
};

const stringToNumber = (
  value,
) => {
  if (isObjectParameter(value, 'value')) {
    ({ value } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'stringToNumber args(value) is not string',
    );
  }

  return _stringToNumber(
    value,
  );
};

const _stringToNumberDefault = (
  value,
  defaultValue,
) => {
  return _stringToNumberBase(
    value,
    () => defaultValue,
  );
};

const stringToNumberDefault = (
  value,
  defaultValue,
) => {
  if (isObjectParameter(value, 'value', 'defaultValue')) {
    ({ value, defaultValue } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'stringToNumberDefault args(value) is not string',
    );
  }

  return _stringToNumberDefault(
    value,
    defaultValue,
  );
};

/**
 * stringToInteger
 */
const _stringToIntegerBase = (
  value,
  defaultValueFunc,
  radix = 10,
) => {
  if (value === '') {
    return defaultValueFunc();
  }
  if (!_matchFormat(String(radix)+'_base_number', value )) {
    return defaultValueFunc();
  }

  const result = parseInt(value, radix);
  if (!_isInteger(result)) {
    return defaultValueFunc();
  }
  return result;
};

const _stringToInteger = (
  value,
  radix = 10,
) => {
  return _stringToNumberBase(
    value,
    () => {
      throw new RangeError(
        'stringToInteger args(value) is not changeing integer',
      );
    },
    radix,
  );
};

const stringToInteger = (
  value,
  radix = 10,
) => {
  if (isObjectParameter(value, 'value', 'radix')) {
    ({ value, radix = 10 } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'stringToInteger args(value) is not string',
    );
  }
  if (!_isInteger(radix)) {
    throw new TypeError(
      'stringToInteger args(radix) is not integer',
    );
  }
  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError(
      'stringToInteger args(radix) must be between 2 and 36',
    );
  }

  return _stringToInteger(
    value,
    radix,
  );
};

const _stringToIntegerDefault = (
  value,
  defaultValue,
  radix = 10,
) => {
  return _stringToIntegerBase(
    value,
    () => defaultValue,
    radix,
  );
};

const stringToIntegerDefault = (
  value,
  defaultValue,
  radix = 10,
) => {
  if (isObjectParameter(value, 'value', 'defaultValue, radix')) {
    ({ value, defaultValue, radix = 10 } = value);
  }

  if (!_isString(value)) {
    throw new TypeError(
      'stringToInteger args(value) is not string',
    );
  }
  if (!_isInteger(radix)) {
    throw new TypeError(
      'stringToInteger args(radix) is not integer',
    );
  }
  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError(
      'stringToInteger args(radix) must be between 2 and 36',
    );
  }

  return _stringToIntegerDefault(
    value,
    defaultValue,
    radix,
  );
};

/**
 * toNumber
 */
const toNumber = (value) => {
  if (_isNull(value)) {
    return NaN;
  }
  if (!_isString(value)) {
    return Number(value);
  }
  return stringToNumberDefault(value, NaN);
};

const toNumberDefault = (value, defaultValue) => {
  if (isObjectParameter(value, 'value,defaultValue')) {
    ({ value, defaultValue } = value);
  }

  const result = toNumber(value);
  if (_isNaNStrict(result)) {
    return defaultValue;
  }
  return result;
};

/**
 * toInteger
 */
const toInteger = (value) => {
  const result = toNumber(value);
  if (_isNaNStrict(result)) {
    return NaN;
  }
  return _round(result);
};

const toIntegerDefault = (value, defaultValue) => {
  if (isObjectParameter(value, 'value,defaultValue')) {
    ({ value, defaultValue } = value);
  }

  const result = toInteger(value);
  if (_isNaNStrict(result)) {
    return defaultValue;
  }
  return result;
};


const numToString     = numberToString;
const strToNumber     = stringToNumber;
const strToNumberDef  = stringToNumberDefault;
const strToInteger    = stringToInteger;
const strToIntegerDef = stringToIntegerDefault;

const numToStr        = numberToString;
const strToNum        = stringToNumber;
const strToNumDef     = stringToNumberDefault;
const strToInt        = stringToInteger;
const strToIntDef     = stringToIntegerDefault;

const toNum           = toNumber;
const toNumDef        = toNumberDefault;
const toInt           = toInteger;
const toIntDef        = toIntegerDefault;

module.exports = {
  numberToString,
  stringToNumber, stringToNumberDefault,
  stringToInteger, stringToIntegerDefault,
  toNumber, toNumberDefault,
  toInteger, toIntegerDefault,

  numToString,
  strToNumber, strToNumberDef,
  strToInteger, strToIntegerDef,
  toNum, toNumDef,
  toInt, toIntDef,

  numToStr,
  strToNum, strToNumDef,
  strToInt, strToIntDef,

};

