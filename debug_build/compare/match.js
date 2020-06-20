"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.match = exports._match = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * match
 */
var _match = function _match(value, compare) {
  if ((0, _type.isString)(value)) {
    var result;

    if ((0, _type.isRegExp)(compare)) {
      result = value.match(compare) !== null;
    } else if ((0, _type.isFunction)(compare)) {
      result = compare(value);

      if (!(0, _type.isBoolean)(result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      result = value === compare;
    }

    return result;
  } else {
    var _result;

    if ((0, _type.isFunction)(compare)) {
      _result = compare(value);

      if (!(0, _type.isBoolean)(_result)) {
        throw new TypeError('_match args(compareArray element function result) is not boolean');
      }
    } else {
      _result = value === compare;
    }

    return _result;
  }
};

exports._match = _match;

var match = function match(value, compare) {
  if ((0, _isObjectParameter.isObjectParameter)(value, 'value, compare')) {
    var _value = value;
    value = _value.value;
    compare = _value.compare;
  } else if ((0, _isObjectParameter.isObjectParameter)(compare, 'compare')) {
    var _compare = compare;
    compare = _compare.compare;
  }

  return _match(value, compare);
};

exports.match = match;
var _default = {
  _match: _match,
  match: match
};
exports["default"] = _default;