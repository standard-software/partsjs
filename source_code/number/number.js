const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _copyProperty,_propertyCount,_inProperty,
} = require('../object/object.js');

const _isMultiples = (number, radix) => {
  return (number % radix) === 0;
};

const isMultiples = (number, radix) => {
  if (_inProperty(number, 'number,radix')) {
    ({ number, radix } = number);
  }

  if (!_isInteger(number)) {
    throw new TypeError(
      'isMultiples args(number) is not integer'
    );
  }
  if (!_isInteger(radix)) {
    throw new TypeError(
      'isMultiples args(radix) is not integer'
    );
  }

  return _isMultiples(number, radix)
};

const isEven = (number) => {
  return isMultiples(number, 2);
};

const isOdd = (number) => {
  return !_.isMultiples(number, 2);
};

const _round = (value, digit = 0) => {
  var powResult;
  var plusFlag = 0 <= value ? true: false;
  powResult = Math.pow(10, digit);
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
      'round args(value) is not integer'
    );
  }

  return _round(value, digit);
};

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
      'nearEqual args(value1) is not number'
    );
  }
  if (!_isNumber(value2)) {
    throw new TypeError(
      'nearEqual args(value2) is not number'
    );
  }
  if (!_isNumber(diff)) {
    throw new TypeError(
      'nearEqual args(diff) is not number'
    );
  }
  if (diff < 0) {
    throw new TypeError(
      'nearEqual args(diff) is < 0'
    );
  }

  return _nearEqual(value1, value2, diff);
};

module.exports = {
  _isMultiples,
  _round,_nearEqual,

  isMultiples,isEven,isOdd,
  round,nearEqual,

};
