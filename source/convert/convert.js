import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isNotUndefined, isNotNull, isNotNaNStrictAll,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction, isNotObject, isNotArray, isNotDate, isNotRegExp,
  isNotException,
} from '../type/type.js';

import {
  _matchValue,
  _initialValue,
} from '../compare/compare.js';

import {
  _matchFormat,
} from '../string/string.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _round,
} from '../number/number.js';


/**
 * numberToString
 */
export const _numberToString = (
  value,
  radix = 10,
) => {
  return value.toString(radix);
};

export const numberToString = (
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
export const valueToString = (
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
export const _stringToNumberBase = (
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

export const _stringToNumber = (
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

export const stringToNumber = (
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

export const _stringToNumberDefault = (
  value,
  defaultValue,
) => {
  return _stringToNumberBase(
    value,
    () => defaultValue,
  );
};

export const stringToNumberDefault = (
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
export const _stringToIntegerBase = (
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

export const _stringToInteger = (
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

export const stringToInteger = (
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

export const _stringToIntegerDefault = (
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

export const stringToIntegerDefault = (
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
export const valueToNumber = (value) => {
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

export const valueToNumberDefault = (value, defaultValue) => {
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
export const valueToInteger = (value) => {
  const result = valueToNumber(value);
  if (isNaNStrict(result)) {
    return NaN;
  }
  return _round(result);
};

export const valueToIntegerDefault = (value, defaultValue) => {
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


export const numToString     = numberToString;
export const valToString     = valueToString;
export const strToNumber     = stringToNumber;
export const strToNumberDef  = stringToNumberDefault;
export const strToInteger    = stringToInteger;
export const strToIntegerDef = stringToIntegerDefault;

export const valToNumber       = valueToNumber;
export const valToNumberDef    = valueToNumberDefault;
export const valToInteger      = valueToInteger;
export const valToIntegerDef   = valueToIntegerDefault;

export const numToStr        = numberToString;
export const valToStr        = valueToString;
export const strToNum        = stringToNumber;
export const strToNumDef     = stringToNumberDefault;
export const strToInt        = stringToInteger;
export const strToIntDef     = stringToIntegerDefault;

export const valToNum           = valueToNumber;
export const valToNumDef        = valueToNumberDefault;
export const valToInt           = valueToInteger;
export const valToIntDef        = valueToIntegerDefault;

export default {
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

