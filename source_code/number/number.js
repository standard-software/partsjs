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

module.exports = {
  _isMultiples,
  isMultiples,isEven,isOdd,
};

