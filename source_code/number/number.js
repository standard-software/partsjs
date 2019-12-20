const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _copyProperty, _propertyCount, _inProperty,
} = require('../object/object.js');

/**
 * isMultiples isEven isOdd
 */
const _isMultiples = (number, radix) => {
  return (number % radix) === 0;
};

const isMultiples = (number, radix) => {
  if (_inProperty(number, 'number,radix')) {
    ({ number, radix } = number);
  }

  if (!_isInteger(number)) {
    throw new TypeError(
      'isMultiples args(number) is not integer',
    );
  }
  if (!_isInteger(radix)) {
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
  return !_isMultiples(number, 2);
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
  if (_inProperty(value, 'value')) {
    ({ value, digit = 0 } = value);
  }

  if (!_isInteger(digit)) {
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
  if (_inProperty(value1, 'value1,value2,diff')) {
    ({ value1, value2, diff } = value1);
  }

  if (!_isNumber(value1)) {
    throw new TypeError(
      'nearEqual args(value1) is not number',
    );
  }
  if (!_isNumber(value2)) {
    throw new TypeError(
      'nearEqual args(value2) is not number',
    );
  }
  if (!_isNumber(diff)) {
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
  if (_inProperty(value, 'value,from,to')) {
    ({ value, from, to } = value);
  }

  if (!_isNumber(value)) {
    throw new TypeError(
      'inRange args(value) is not number',
    );
  }
  if (!_isNumber(from)) {
    throw new TypeError(
      'inRange args(from) is not number',
    );
  }
  if (!_isNumber(to)) {
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
  if (_inProperty(min, 'min,max')) {
    ({ min, max } = min);
  }

  if (!_isInteger(min)) {
    throw new TypeError(
      'randomInt args(min) is not integer',
    );
  }
  if (!_isInteger(max)) {
    throw new TypeError(
      'randomInt args(max) is not integer',
    );
  }

  return _randomInt(min, max);
};

module.exports = {
  _isMultiples,
  _round, _nearEqual, _inRange,

  isMultiples, isEven, isOdd,
  round, nearEqual, inRange, randomInt,

};

