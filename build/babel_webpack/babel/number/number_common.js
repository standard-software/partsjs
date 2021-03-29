"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.makeInRange = exports.randomInt = exports._randomInt = exports.keepMinMax = exports._keepMinMax = exports.inRange = exports._inRange = exports.nearEqual = exports._nearEqual = exports.isOdd = exports.isEven = exports.isMultiples = exports._isMultiples = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * isMultiples isEven isOdd
 */
var _isMultiples = function _isMultiples(number, radix) {
  return number % radix === 0;
};

exports._isMultiples = _isMultiples;

var isMultiples = function isMultiples(number, radix) {
  if ((0, _isObjectParameter.isObjectParameter)(number, 'number,radix')) {
    var _number = number;
    number = _number.number;
    radix = _number.radix;
  }

  if (!(0, _type.isInteger)(number)) {
    throw new TypeError('isMultiples args(number) is not integer');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('isMultiples args(radix) is not integer');
  }

  return _isMultiples(number, radix);
};

exports.isMultiples = isMultiples;

var isEven = function isEven(number) {
  return isMultiples(number, 2);
};

exports.isEven = isEven;

var isOdd = function isOdd(number) {
  return !isMultiples(number, 2);
};
/**
 * nearEqual
 */


exports.isOdd = isOdd;

var _nearEqual = function _nearEqual(value1, value2, diff) {
  if (Math.abs(value1 - value2) <= diff) {
    return true;
  } else {
    return false;
  }
};

exports._nearEqual = _nearEqual;

var nearEqual = function nearEqual(value1, value2, diff) {
  if ((0, _isObjectParameter.isObjectParameter)(value1, 'value1,value2,diff')) {
    var _value = value1;
    value1 = _value.value1;
    value2 = _value.value2;
    diff = _value.diff;
  }

  if (!(0, _type.isNumber)(value1)) {
    throw new TypeError('nearEqual args(value1) is not number');
  }

  if (!(0, _type.isNumber)(value2)) {
    throw new TypeError('nearEqual args(value2) is not number');
  }

  if (!(0, _type.isNumber)(diff)) {
    throw new TypeError('nearEqual args(diff) is not number');
  }

  if (diff < 0) {
    throw new RangeError('nearEqual args(diff) must be < 0');
  }

  return _nearEqual(value1, value2, diff);
};
/**
 * inRange
 */


exports.nearEqual = nearEqual;

var _inRange = function _inRange(value, from, to) {
  if (from <= value && value <= to) {
    return true;
  } else {
    return false;
  }
};

exports._inRange = _inRange;

var inRange = function inRange(value, from, to) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,from,to')) {
    var _value2 = value;
    value = _value2.value;
    from = _value2.from;
    to = _value2.to;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('inRange args(value) is not number');
  }

  if (!(0, _type.isNumber)(from)) {
    throw new TypeError('inRange args(from) is not number');
  }

  if (!(0, _type.isNumber)(to)) {
    throw new TypeError('inRange args(to) is not number');
  }

  if (!(from <= to)) {
    throw new RangeError('inRange args(from,to) must be from <= to');
  }

  return _inRange(value, from, to);
};
/**
 * keepMinMax
 */


exports.inRange = inRange;

var _keepMinMax = function _keepMinMax(value, from, to) {
  if (value < from) {
    return from;
  }

  if (to < value) {
    return to;
  }

  return value;
};

exports._keepMinMax = _keepMinMax;

var keepMinMax = function keepMinMax(value, min, to) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, min, to')) {
    var _value3 = value;
    value = _value3.value;
    min = _value3.min;
    to = _value3.to;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('keepMinMax args(value) is not number');
  }

  if (!(0, _type.isNumber)(min)) {
    throw new TypeError('keepMinMax args(from) is not number');
  }

  if (!(0, _type.isNumber)(to)) {
    throw new TypeError('keepMinMax args(to) is not number');
  }

  if (!(min <= to)) {
    throw new RangeError('keepMinMax args(from,to) must be from <= to');
  }

  return _keepMinMax(value, min, to);
};
/**
 * randomInt
 */


exports.keepMinMax = keepMinMax;

var _randomInt = function _randomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

exports._randomInt = _randomInt;

var randomInt = function randomInt(min, max) {
  if ((0, _isObjectParameter.isObjectParameter)(min, 'min,max')) {
    var _min = min;
    min = _min.min;
    max = _min.max;
  }

  if (!(0, _type.isInteger)(min)) {
    throw new TypeError('randomInt args(min) is not integer');
  }

  if (!(0, _type.isInteger)(max)) {
    throw new TypeError('randomInt args(max) is not integer');
  }

  return _randomInt(min, max);
};

exports.randomInt = randomInt;
var makeInRange = keepMinMax;
exports.makeInRange = makeInRange;
var _default = {
  _isMultiples: _isMultiples,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  _keepMinMax: _keepMinMax,
  _randomInt: _randomInt,
  isMultiples: isMultiples,
  isEven: isEven,
  isOdd: isOdd,
  nearEqual: nearEqual,
  inRange: inRange,
  keepMinMax: keepMinMax,
  randomInt: randomInt,
  makeInRange: makeInRange
};
exports["default"] = _default;