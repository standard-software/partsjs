"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.includes = exports._includes = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _match2 = require("../compare/match.js");

var _includes2 = require("../compare/__includes.js");

/**
 * includes
 */
var _includes = function _includes(value, compare) {
  if ((0, _type.isString)(value)) {
    if (compare === '') {
      return false;
    }

    if ((0, _type.isRegExp)(compare)) {
      return (0, _match2._match)(value, compare);
    }

    return (0, _includes2.__includes)(value, compare);
  } else if ((0, _type.isArray)(value)) {
    return (0, _includes2.__includes)(value, compare);
  }
};

exports._includes = _includes;

var includes = function includes(value, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  }

  if ((0, _type.isString)(value)) {
    if (!((0, _type.isString)(compare) || (0, _type.isRegExp)(compare))) {
      throw new TypeError('includes args(compare) is not [string|RegExp]');
    }
  } else if ((0, _type.isArray)(value)) {//
  } else {
    throw new TypeError('includes args(value) is not [string|array]');
  }

  return _includes(value, compare);
};

exports.includes = includes;
var _default = {
  _includes: _includes,
  includes: includes
};
exports["default"] = _default;