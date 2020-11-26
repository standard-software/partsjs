"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isObjectParameter = exports._isObjectParameter = void 0;

var _isType = require("../type/isType.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _propertyCount2 = require("../object/_propertyCount.js");

var _hasOwn2 = require("../object/_hasOwn.js");

var _includes = require("../compare/__includes.js");

/**
 * isObjectParameter
 */
var _isObjectParameter = function _isObjectParameter(object, props) {
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!(0, _isType.isObject)(object)) {
    return false;
  }

  props = (0, _replaceAll2._replaceAll)(props, ' ', '').split(',');

  if (props[props.length - 1] === '') {
    props.splice(props.length - 1, 1);
  } // props = _splitCommaItems(props); // Circular reference Error


  optionalProps = (0, _replaceAll2._replaceAll)(optionalProps, ' ', '').split(',');

  if (optionalProps[optionalProps.length - 1] === '') {
    optionalProps.splice(optionalProps.length - 1, 1);
  }

  var propMatchCount = 0;
  var optionalPropMatchCount = 0;

  for (var property in object) {
    if ((0, _hasOwn2._hasOwn)(object, property)) {
      if ((0, _includes.__includes)(props, property)) {
        propMatchCount += 1;
      } else if ((0, _includes.__includes)(optionalProps, property)) {
        optionalPropMatchCount += 1;
      } else {
        return false;
      }
    }
  }

  if (propMatchCount !== props.length) {
    return false;
  }

  if (optionalPropMatchCount < optionalMinCount) {
    return false;
  }

  return true;
};

exports._isObjectParameter = _isObjectParameter;

var isObjectParameter = function isObjectParameter(object, props) {
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!(0, _isType.isString)(props)) {
    throw new TypeError('isObjectParameter args(props) is not string');
  }

  if (!(0, _isType.isString)(optionalProps)) {
    throw new TypeError('isObjectParameter args(optionalProps) is not string');
  }

  if (!(0, _isType.isInteger)(optionalMinCount)) {
    throw new TypeError('isObjectParameter args(optionalMinCount) is not integer');
  }

  return _isObjectParameter(object, props, optionalProps, optionalMinCount);
};

exports.isObjectParameter = isObjectParameter;
var _default = {
  _isObjectParameter: _isObjectParameter,
  isObjectParameter: isObjectParameter
};
exports["default"] = _default;