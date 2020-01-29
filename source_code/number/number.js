const {
 isUndefined,isNull,isNaNStrict,
 isBoolean,isNumber,isInteger,isString,
 isFunction,isObject,isArray,isDate,isRegExp,
 isException,
} = require('../type/type.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

/**
 * isMultiples isEven isOdd
 */
const _isMultiples = (number, radix) => {
  return (number % radix) === 0;
};

const isMultiples = (number, radix) => {
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

const isEven = (number) => {
  return isMultiples(number, 2);
};

const isOdd = (number) => {
  return !isMultiples(number, 2);
};

/**
 * round
 */
const _round = (value, digit = 0) => {
  const plusFlag = 0 <= value ? true: false;
  const powResult = Math.pow(10, digit);
  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

const round = (value, digit = 0) => {
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
const _nearEqual = (value1, value2, diff) => {
  if ( Math.abs(value1 - value2) <= diff ) {
    return true;
  } else {
    return false;
  }
};

const nearEqual = (value1, value2, diff) => {
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
const _inRange = (value, from, to) => {
  if ((from <= value) && (value <= to)) {
    return true;
  } else {
    return false;
  }
};

const inRange = (value, from, to) => {
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
 * randomInt
 */
const _randomInt = (min, max) => {
  return Math.floor( Math.random() * (max + 1 - min) ) + min;
};

const randomInt = (min, max) => {
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

module.exports = {
 isMultiples,
  _round, _nearEqual, _inRange,

  isMultiples, isEven, isOdd,
  round, nearEqual, inRange, randomInt,

};

