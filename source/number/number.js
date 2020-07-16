import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

/**
 * isMultiples isEven isOdd
 */
export const _isMultiples = (number, radix) => {
  return (number % radix) === 0;
};

export const isMultiples = (number, radix) => {
  if (isObjectParameter(number, 'number,radix')) {
    ({ number, radix } = number);
  }

  if (!isInteger(number)) {
    throw new TypeError(
      'isMultiples args(number) is not integer',
    );
  }
  if (!isInteger(radix)) {
    throw new TypeError(
      'isMultiples args(radix) is not integer',
    );
  }

  return _isMultiples(number, radix);
};

export const isEven = (number) => {
  return isMultiples(number, 2);
};

export const isOdd = (number) => {
  return !isMultiples(number, 2);
};

/**
 * round
 */
export const _round = (value, digit = 0) => {
  const plusFlag = 0 <= value ? true: false;
  const powResult = Math.pow(10, digit);
  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

export const round = (value, digit = 0) => {
  if (isObjectParameter(value, 'value', 'digit')) {
    ({ value, digit = 0 } = value);
  }

  if (!isInteger(digit)) {
    throw new TypeError(
      'round args(value) is not integer',
    );
  }

  return _round(value, digit);
};

/**
 * nearEqual
 */
export const _nearEqual = (value1, value2, diff) => {
  if ( Math.abs(value1 - value2) <= diff ) {
    return true;
  } else {
    return false;
  }
};

export const nearEqual = (value1, value2, diff) => {
  if (isObjectParameter(value1, 'value1,value2,diff')) {
    ({ value1, value2, diff } = value1);
  }

  if (!isNumber(value1)) {
    throw new TypeError(
      'nearEqual args(value1) is not number',
    );
  }
  if (!isNumber(value2)) {
    throw new TypeError(
      'nearEqual args(value2) is not number',
    );
  }
  if (!isNumber(diff)) {
    throw new TypeError(
      'nearEqual args(diff) is not number',
    );
  }
  if (diff < 0) {
    throw new RangeError(
      'nearEqual args(diff) must be < 0',
    );
  }

  return _nearEqual(value1, value2, diff);
};

/**
 * inRange
 */
export const _inRange = (value, from, to) => {
  if ((from <= value) && (value <= to)) {
    return true;
  } else {
    return false;
  }
};

export const inRange = (value, from, to) => {
  if (isObjectParameter(value, 'value,from,to')) {
    ({ value, from, to } = value);
  }

  if (!isNumber(value)) {
    throw new TypeError(
      'inRange args(value) is not number',
    );
  }
  if (!isNumber(from)) {
    throw new TypeError(
      'inRange args(from) is not number',
    );
  }
  if (!isNumber(to)) {
    throw new TypeError(
      'inRange args(to) is not number',
    );
  }
  if (!(from <= to)) {
    throw new RangeError(
      'inRange args(from,to) must be from <= to',
    );
  }

  return _inRange(value, from, to);
};

/**
 * makeInRange
 */
export const _makeInRange = (value, from, to) => {
  if (value < from) {
    return from;
  }
  if (to < value) {
    return to;
  }
  return value;
};

export const makeInRange = (value, from, to) => {
  if (isObjectParameter(value, 'value, from, to')) {
    ({ value, from, to } = value);
  }

  if (!isNumber(value)) {
    throw new TypeError(
      'makeInRange args(value) is not number',
    );
  }
  if (!isNumber(from)) {
    throw new TypeError(
      'makeInRange args(from) is not number',
    );
  }
  if (!isNumber(to)) {
    throw new TypeError(
      'makeInRange args(to) is not number',
    );
  }
  if (!(from <= to)) {
    throw new RangeError(
      'makeInRange args(from,to) must be from <= to',
    );
  }

  return _makeinRange(value, from, to);
};


/**
 * randomInt
 */
export const _randomInt = (min, max) => {
  return Math.floor( Math.random() * (max + 1 - min) ) + min;
};

export const randomInt = (min, max) => {
  if (isObjectParameter(min, 'min,max')) {
    ({ min, max } = min);
  }

  if (!isInteger(min)) {
    throw new TypeError(
      'randomInt args(min) is not integer',
    );
  }
  if (!isInteger(max)) {
    throw new TypeError(
      'randomInt args(max) is not integer',
    );
  }

  return _randomInt(min, max);
};

export default {
  isMultiples,
  _round, _nearEqual,
  _inRange, _makeInRange,
  _randomInt,

  isMultiples, isEven, isOdd,
  round, nearEqual,
  inRange, makeInRange,
  randomInt,

};

