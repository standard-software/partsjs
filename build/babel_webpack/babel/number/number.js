"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.randomInt = exports._randomInt = exports.makeInRange = exports._makeInRange = exports.inRange = exports._inRange = exports.nearEqual = exports._nearEqual = exports.round = exports._round = exports.isOdd = exports.isEven = exports.isMultiples = exports._isMultiples = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _isMultiples$_round$_;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * round
 */


exports.isOdd = isOdd;

var _round = function _round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var plusFlag = 0 <= value ? true : false;
  var powResult = Math.pow(10, digit);

  if (plusFlag) {
    return Math.round(value * powResult) / powResult;
  } else {
    return -1 * Math.round(-1 * value * powResult) / powResult;
  }
};

exports._round = _round;

var round = function round(value) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'digit')) {
    var _value = value;
    value = _value.value;
    var _value$digit = _value.digit;
    digit = _value$digit === void 0 ? 0 : _value$digit;
  }

  if (!(0, _type.isInteger)(digit)) {
    throw new TypeError('round args(value) is not integer');
  }

  return _round(value, digit);
};
/**
 * nearEqual
 */


exports.round = round;

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
    var _value2 = value1;
    value1 = _value2.value1;
    value2 = _value2.value2;
    diff = _value2.diff;
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
    var _value3 = value;
    value = _value3.value;
    from = _value3.from;
    to = _value3.to;
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
 * makeInRange
 */


exports.inRange = inRange;

var _makeInRange = function _makeInRange(value, from, to) {
  if (value < from) {
    return from;
  }

  if (to < value) {
    return to;
  }

  return value;
};

exports._makeInRange = _makeInRange;

var makeInRange = function makeInRange(value, from, to) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, from, to')) {
    var _value4 = value;
    value = _value4.value;
    from = _value4.from;
    to = _value4.to;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('makeInRange args(value) is not number');
  }

  if (!(0, _type.isNumber)(from)) {
    throw new TypeError('makeInRange args(from) is not number');
  }

  if (!(0, _type.isNumber)(to)) {
    throw new TypeError('makeInRange args(to) is not number');
  }

  if (!(from <= to)) {
    throw new RangeError('makeInRange args(from,to) must be from <= to');
  }

  return _makeinRange(value, from, to);
};
/**
 * randomInt
 */


exports.makeInRange = makeInRange;

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

var _default = (_isMultiples$_round$_ = {
  isMultiples: isMultiples,
  _round: _round,
  _nearEqual: _nearEqual,
  _inRange: _inRange,
  _makeInRange: _makeInRange,
  _randomInt: _randomInt
}, _defineProperty(_isMultiples$_round$_, "isMultiples", isMultiples), _defineProperty(_isMultiples$_round$_, "isEven", isEven), _defineProperty(_isMultiples$_round$_, "isOdd", isOdd), _defineProperty(_isMultiples$_round$_, "round", round), _defineProperty(_isMultiples$_round$_, "nearEqual", nearEqual), _defineProperty(_isMultiples$_round$_, "inRange", inRange), _defineProperty(_isMultiples$_round$_, "makeInRange", makeInRange), _defineProperty(_isMultiples$_round$_, "randomInt", randomInt), _isMultiples$_round$_);

exports["default"] = _default;