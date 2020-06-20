"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isObjectParameter = void 0;

var _isType = require("../type/isType.js");

var _replaceAll2 = require("../string/_replaceAll.js");

var _propertyCount2 = require("../object/_propertyCount.js");

/**
 * isObjectParameter
 */
var isObjectParameter = function isObjectParameter(object, props) {
  var optionalProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var optionalMinCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!(0, _isType.isObject)(object)) {
    return false;
  }

  if (!(0, _isType.isString)(props)) {
    return false;
  }

  if (!(0, _isType.isString)(optionalProps)) {
    return false;
  }

  props = (0, _replaceAll2._replaceAll)(props, ' ', '').split(','); // last element === '' delete

  if (props[props.length - 1] === '') {
    props.splice(props.length - 1, 1);
  }

  optionalProps = (0, _replaceAll2._replaceAll)(optionalProps, ' ', '').split(',');

  if (optionalProps[optionalProps.length - 1] === '') {
    optionalProps.splice(optionalProps.length - 1, 1);
  }

  var propMatchCount = 0;
  var optionalPropMatchCount = 0;

  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      if (props.indexOf(property) !== -1) {
        propMatchCount += 1;
      } else if (optionalProps.indexOf(property) !== -1) {
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

exports.isObjectParameter = isObjectParameter;
var _default = {
  isObjectParameter: isObjectParameter
};
exports["default"] = _default;