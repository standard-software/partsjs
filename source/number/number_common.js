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
 * nearEqual
 */
export const _nearEqual = (value1, value2, diff) => {
  if (Math.abs(value1 - value2) <= diff) {
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
 * keepMinMax
 */
export const _keepMinMax = (value, from, to) => {
  if (value < from) {
    return from;
  }
  if (to < value) {
    return to;
  }
  return value;
};

export const keepMinMax = (value, min, to) => {
  if (isObjectParameter(value, 'value, min, to')) {
    ({ value, min, to } = value);
  }

  if (!isNumber(value)) {
    throw new TypeError(
      'keepMinMax args(value) is not number',
    );
  }
  if (!isNumber(min)) {
    throw new TypeError(
      'keepMinMax args(from) is not number',
    );
  }
  if (!isNumber(to)) {
    throw new TypeError(
      'keepMinMax args(to) is not number',
    );
  }
  if (!(min <= to)) {
    throw new RangeError(
      'keepMinMax args(from,to) must be from <= to',
    );
  }

  return _keepMinMax(value, min, to);
};


/**
 * randomInt
 */
export const _randomInt = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
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

export const makeInRange = keepMinMax;

export default {
  _isMultiples,
  _nearEqual,
  _inRange, _keepMinMax,
  _randomInt,

  isMultiples, isEven, isOdd,
  nearEqual,
  inRange, keepMinMax,
  randomInt,

  makeInRange,
};

