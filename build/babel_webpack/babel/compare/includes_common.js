"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includesAll = exports._includesAll = exports.includesSome = exports._includesSome = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _array_common = require("../array/array_common.js");

var _match2 = require("../compare/match.js");

var _includes2 = require("../compare/includes.js");

/**
 * includesSome
 */
var _includesSome = function _includesSome(value, compareArray) {
  return (0, _array_common._some)(compareArray, function (compare) {
    return (0, _includes2.includes)(value, compare);
  });
};

exports._includesSome = _includesSome;

var includesSome = function includesSome(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value = value;
    value = _value.value;
    compareArray = _value.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('includesSome args(compareArray) is not array');
  }

  return _includesSome(value, compareArray);
};
/**
 * includesAll
 */


exports.includesSome = includesSome;

var _includesAll = function _includesAll(value, compareArray) {
  return (0, _array_common._all)(compareArray, function (compare) {
    return (0, _includes2.includes)(value, compare);
  });
};

exports._includesAll = _includesAll;

var includesAll = function includesAll(value, compareArray) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value,compareArray')) {
    var _value2 = value;
    value = _value2.value;
    compareArray = _value2.compareArray;
  }

  if (!(0, _type.isArray)(compareArray)) {
    throw new TypeError('includesAll args(compareArray) is not array');
  }

  return _includesAll(value, compareArray);
};

exports.includesAll = includesAll;
var _default = {
  _includesSome: _includesSome,
  _includesAll: _includesAll,
  includesSome: includesSome,
  includesAll: includesAll
};
exports["default"] = _default;