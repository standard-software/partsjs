const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isNotUndefined, isNotNull, isNotNaNStrictAll,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction, isNotObject, isNotArray, isNotDate, isNotRegExp,
  isNotException,
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
  radix = 10,
) => {
  return value.toString(radix);
};

const numberToString = (
  value,
  radix = 10,
) => {
  if (isObjectParameter(value, 'value', 'radix')) {
    ({ value, radix = 10 } = value);
  }

  if (!isNumber(value)) {
    throw new TypeError(
      'numberToString args(value) is not number',
    );
  }
  if (!isInteger(radix)) {
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
 * valueToString
 */
const valueToString = (
  value,
  radix = 10,
) => {
  if (isObjectParameter(value, 'value', 'radix')) {
    ({ value, radix = 10 } = value);
  }

  if (!isInteger(radix)) {
    throw new TypeError(
      'numberToString args(radix) is not integer',
    );
  }
  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError(
      'numberToString args(radix) must be between 2 and 36',
    );
  }

  if (!isNumber(value)) {
    return String(value);
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
  if (!isNumber(result)) {
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

  if (!isString(value)) {
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

  if (!isString(value)) {
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
  if (!isInteger(result)) {
    return defaultValueFunc();
  }
  return result;
};

const _stringToInteger = (
  value,
  radix = 10,
) => {
  return _stringToIntegerBase(
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

  if (!isString(value)) {
    throw new TypeError(
      'stringToInteger args(value) is not string',
    );
  }
  if (!isInteger(radix)) {
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

  if (!isString(value)) {
    throw new TypeError(
      'stringToInteger args(value) is not string',
    );
  }
  if (!isInteger(radix)) {
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
 * valueToNumber
 */
const valueToNumber = (value) => {
  if (isNull(value)) {
    return NaN;
  }
  if (isArray(value)) {
    return NaN;
  }
  if (!isString(value)) {
    return Number(value);
  }
  return stringToNumberDefault(value, NaN);
};

const valueToNumberDefault = (value, defaultValue) => {
  if (isObjectParameter(value, 'value,defaultValue')) {
    ({ value, defaultValue } = value);
  }

  if (isNaNStrict(value)) {
    return value;
  }
  const result = valueToNumber(value);
  if (isNaNStrict(result)) {
    return defaultValue;
  }
  return result;
};

/**
 * valueToInteger
 */
const valueToInteger = (value) => {
  const result = valueToNumber(value);
  if (isNaNStrict(result)) {
    return NaN;
  }
  return _round(result);
};

const valueToIntegerDefault = (value, defaultValue) => {
  if (isObjectParameter(value, 'value,defaultValue')) {
    ({ value, defaultValue } = value);
  }

  if (isNaNStrict(value)) {
    return value;
  }
  const result = valueToInteger(value);
  if (isNaNStrict(result)) {
    return defaultValue;
  }
  return result;
};


const numToString     = numberToString;
const valToString     = valueToString;
const strToNumber     = stringToNumber;
const strToNumberDef  = stringToNumberDefault;
const strToInteger    = stringToInteger;
const strToIntegerDef = stringToIntegerDefault;

const valToNumber       = valueToNumber;
const valToNumberDef    = valueToNumberDefault;
const valToInteger      = valueToInteger;
const valToIntegerDef   = valueToIntegerDefault;

const numToStr        = numberToString;
const valToStr        = valueToString;
const strToNum        = stringToNumber;
const strToNumDef     = stringToNumberDefault;
const strToInt        = stringToInteger;
const strToIntDef     = stringToIntegerDefault;

const valToNum           = valueToNumber;
const valToNumDef        = valueToNumberDefault;
const valToInt           = valueToInteger;
const valToIntDef        = valueToIntegerDefault;

module.exports = {
  numberToString,
  valueToString,
  stringToNumber, stringToNumberDefault,
  stringToInteger, stringToIntegerDefault,
  valueToNumber, valueToNumberDefault,
  valueToInteger, valueToIntegerDefault,

  numToString,
  valToString,
  strToNumber, strToNumberDef,
  strToInteger, strToIntegerDef,
  valToNumber, valToNumberDef,
  valToInteger, valToIntegerDef,

  numToStr,
  valToStr,
  valToNum, valToNumDef,
  valToInt, valToIntDef,

  strToNum, strToNumDef,
  strToInt, strToIntDef,

};

