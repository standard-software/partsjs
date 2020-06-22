"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.valToIntDef = exports.valToInt = exports.valToNumDef = exports.valToNum = exports.strToIntDef = exports.strToInt = exports.strToNumDef = exports.strToNum = exports.valToStr = exports.numToStr = exports.valToIntegerDef = exports.valToInteger = exports.valToNumberDef = exports.valToNumber = exports.strToIntegerDef = exports.strToInteger = exports.strToNumberDef = exports.strToNumber = exports.valToString = exports.numToString = exports.valueToIntegerDefault = exports.valueToInteger = exports.valueToNumberDefault = exports.valueToNumber = exports.stringToIntegerDefault = exports._stringToIntegerDefault = exports.stringToInteger = exports._stringToInteger = exports._stringToIntegerBase = exports.stringToNumberDefault = exports._stringToNumberDefault = exports.stringToNumber = exports._stringToNumber = exports._stringToNumberBase = exports.valueToString = exports.numberToString = exports._numberToString = void 0;

var _type = require("../type/type.js");

var _compare = require("../compare/compare.js");

var _string = require("../string/string.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _number = require("../number/number.js");

/**
 * numberToString
 */
var _numberToString = function _numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return value.toString(radix);
};

exports._numberToString = _numberToString;

var numberToString = function numberToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value = value;
    value = _value.value;
    var _value$radix = _value.radix;
    radix = _value$radix === void 0 ? 10 : _value$radix;
  }

  if (!(0, _type.isNumber)(value)) {
    throw new TypeError('numberToString args(value) is not number');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  return _numberToString(value, radix);
};
/**
 * valueToString
 */


exports.numberToString = numberToString;

var valueToString = function valueToString(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value2 = value;
    value = _value2.value;
    var _value2$radix = _value2.radix;
    radix = _value2$radix === void 0 ? 10 : _value2$radix;
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('numberToString args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('numberToString args(radix) must be between 2 and 36');
  }

  if (!(0, _type.isNumber)(value)) {
    return String(value);
  }

  return _numberToString(value, radix);
};
/**
 * stringToNumber
 */


exports.valueToString = valueToString;

var _stringToNumberBase = function _stringToNumberBase(value, defaultValueFunc) {
  if (value === '') {
    return defaultValueFunc();
  }

  if (!(0, _string._matchFormat)('float_more', value)) {
    return defaultValueFunc();
  }

  var result = Number(value);

  if (!(0, _type.isNumber)(result)) {
    return defaultValueFunc();
  }

  return result;
};

exports._stringToNumberBase = _stringToNumberBase;

var _stringToNumber = function _stringToNumber(value) {
  return _stringToNumberBase(value, function () {
    throw new RangeError('stringToNumber args(value) is not changeing number');
  });
};

exports._stringToNumber = _stringToNumber;

var stringToNumber = function stringToNumber(value) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value')) {
    var _value3 = value;
    value = _value3.value;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToNumber args(value) is not string');
  }

  return _stringToNumber(value);
};

exports.stringToNumber = stringToNumber;

var _stringToNumberDefault = function _stringToNumberDefault(value, defaultValue) {
  return _stringToNumberBase(value, function () {
    return defaultValue;
  });
};

exports._stringToNumberDefault = _stringToNumberDefault;

var stringToNumberDefault = function stringToNumberDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'defaultValue')) {
    var _value4 = value;
    value = _value4.value;
    defaultValue = _value4.defaultValue;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToNumberDefault args(value) is not string');
  }

  return _stringToNumberDefault(value, defaultValue);
};
/**
 * stringToInteger
 */


exports.stringToNumberDefault = stringToNumberDefault;

var _stringToIntegerBase = function _stringToIntegerBase(value, defaultValueFunc) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if (value === '') {
    return defaultValueFunc();
  }

  if (!(0, _string._matchFormat)(String(radix) + '_base_number', value)) {
    return defaultValueFunc();
  }

  var result = parseInt(value, radix);

  if (!(0, _type.isInteger)(result)) {
    return defaultValueFunc();
  }

  return result;
};

exports._stringToIntegerBase = _stringToIntegerBase;

var _stringToInteger = function _stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return _stringToIntegerBase(value, function () {
    throw new RangeError('stringToInteger args(value) is not changeing integer');
  }, radix);
};

exports._stringToInteger = _stringToInteger;

var stringToInteger = function stringToInteger(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'radix')) {
    var _value5 = value;
    value = _value5.value;
    var _value5$radix = _value5.radix;
    radix = _value5$radix === void 0 ? 10 : _value5$radix;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToInteger(value, radix);
};

exports.stringToInteger = stringToInteger;

var _stringToIntegerDefault = function _stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  return _stringToIntegerBase(value, function () {
    return defaultValue;
  }, radix);
};

exports._stringToIntegerDefault = _stringToIntegerDefault;

var stringToIntegerDefault = function stringToIntegerDefault(value, defaultValue) {
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  if ((0, _isObjectParameter.isObjectParameter)(value, 'value', 'defaultValue, radix')) {
    var _value6 = value;
    value = _value6.value;
    defaultValue = _value6.defaultValue;
    var _value6$radix = _value6.radix;
    radix = _value6$radix === void 0 ? 10 : _value6$radix;
  }

  if (!(0, _type.isString)(value)) {
    throw new TypeError('stringToInteger args(value) is not string');
  }

  if (!(0, _type.isInteger)(radix)) {
    throw new TypeError('stringToInteger args(radix) is not integer');
  }

  if (!(2 <= radix && radix <= 36)) {
    throw new RangeError('stringToInteger args(radix) must be between 2 and 36');
  }

  return _stringToIntegerDefault(value, defaultValue, radix);
};
/**
 * valueToNumber
 */


exports.stringToIntegerDefault = stringToIntegerDefault;

var valueToNumber = function valueToNumber(value) {
  if ((0, _type.isNull)(value)) {
    return NaN;
  }

  if ((0, _type.isArray)(value)) {
    return NaN;
  }

  if (!(0, _type.isString)(value)) {
    return Number(value);
  }

  return stringToNumberDefault(value, NaN);
};

exports.valueToNumber = valueToNumber;

var valueToNumberDefault = function valueToNumberDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,defaultValue')) {
    var _value7 = value;
    value = _value7.value;
    defaultValue = _value7.defaultValue;
  }

  if ((0, _type.isNaNStrict)(value)) {
    return value;
  }

  var result = valueToNumber(value);

  if ((0, _type.isNaNStrict)(result)) {
    return defaultValue;
  }

  return result;
};
/**
 * valueToInteger
 */


exports.valueToNumberDefault = valueToNumberDefault;

var valueToInteger = function valueToInteger(value) {
  var result = valueToNumber(value);

  if ((0, _type.isNaNStrict)(result)) {
    return NaN;
  }

  return (0, _number._round)(result);
};

exports.valueToInteger = valueToInteger;

var valueToIntegerDefault = function valueToIntegerDefault(value, defaultValue) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,defaultValue')) {
    var _value8 = value;
    value = _value8.value;
    defaultValue = _value8.defaultValue;
  }

  if ((0, _type.isNaNStrict)(value)) {
    return value;
  }

  var result = valueToInteger(value);

  if ((0, _type.isNaNStrict)(result)) {
    return defaultValue;
  }

  return result;
};

exports.valueToIntegerDefault = valueToIntegerDefault;
var numToString = numberToString;
exports.numToString = numToString;
var valToString = valueToString;
exports.valToString = valToString;
var strToNumber = stringToNumber;
exports.strToNumber = strToNumber;
var strToNumberDef = stringToNumberDefault;
exports.strToNumberDef = strToNumberDef;
var strToInteger = stringToInteger;
exports.strToInteger = strToInteger;
var strToIntegerDef = stringToIntegerDefault;
exports.strToIntegerDef = strToIntegerDef;
var valToNumber = valueToNumber;
exports.valToNumber = valToNumber;
var valToNumberDef = valueToNumberDefault;
exports.valToNumberDef = valToNumberDef;
var valToInteger = valueToInteger;
exports.valToInteger = valToInteger;
var valToIntegerDef = valueToIntegerDefault;
exports.valToIntegerDef = valToIntegerDef;
var numToStr = numberToString;
exports.numToStr = numToStr;
var valToStr = valueToString;
exports.valToStr = valToStr;
var strToNum = stringToNumber;
exports.strToNum = strToNum;
var strToNumDef = stringToNumberDefault;
exports.strToNumDef = strToNumDef;
var strToInt = stringToInteger;
exports.strToInt = strToInt;
var strToIntDef = stringToIntegerDefault;
exports.strToIntDef = strToIntDef;
var valToNum = valueToNumber;
exports.valToNum = valToNum;
var valToNumDef = valueToNumberDefault;
exports.valToNumDef = valToNumDef;
var valToInt = valueToInteger;
exports.valToInt = valToInt;
var valToIntDef = valueToIntegerDefault;
exports.valToIntDef = valToIntDef;
var _default = {
  numberToString: numberToString,
  valueToString: valueToString,
  stringToNumber: stringToNumber,
  stringToNumberDefault: stringToNumberDefault,
  stringToInteger: stringToInteger,
  stringToIntegerDefault: stringToIntegerDefault,
  valueToNumber: valueToNumber,
  valueToNumberDefault: valueToNumberDefault,
  valueToInteger: valueToInteger,
  valueToIntegerDefault: valueToIntegerDefault,
  numToString: numToString,
  valToString: valToString,
  strToNumber: strToNumber,
  strToNumberDef: strToNumberDef,
  strToInteger: strToInteger,
  strToIntegerDef: strToIntegerDef,
  valToNumber: valToNumber,
  valToNumberDef: valToNumberDef,
  valToInteger: valToInteger,
  valToIntegerDef: valToIntegerDef,
  numToStr: numToStr,
  valToStr: valToStr,
  valToNum: valToNum,
  valToNumDef: valToNumDef,
  valToInt: valToInt,
  valToIntDef: valToIntDef,
  strToNum: strToNum,
  strToNumDef: strToNumDef,
  strToInt: strToInt,
  strToIntDef: strToIntDef
};
exports["default"] = _default;