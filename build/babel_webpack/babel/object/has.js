"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hasPrototype = exports._hasPrototype = exports.hasOwn = exports._hasOwn = exports.has = exports._has = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

/**
 * has
 */
var _has = function _has(object, propertyName) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (hasOwn) {
    return _hasOwn(object, propertyName);
  } else {
    return propertyName in object;
  }
};

exports._has = _has;

var has = function has(object, propertyName) {
  var hasOwn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyName', 'hasOwn')) {
    var _object = object;
    object = _object.object;
    propertyName = _object.propertyName;
    var _object$hasOwn = _object.hasOwn;
    hasOwn = _object$hasOwn === void 0 ? false : _object$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyName, 'propertyName', 'hasOwn')) {
    var _propertyName = propertyName;
    propertyName = _propertyName.propertyName;
    var _propertyName$hasOwn = _propertyName.hasOwn;
    hasOwn = _propertyName$hasOwn === void 0 ? false : _propertyName$hasOwn;
  } else if ((0, _isObjectParameter.isObjectParameter)(hasOwn, 'hasOwn')) {
    var _hasOwn2 = hasOwn;
    hasOwn = _hasOwn2.hasOwn;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('has args(object) is not object type');
  }

  if (!(0, _type.isString)(propertyName)) {
    throw new TypeError('has args(propertyName) is not string');
  }

  if (!(0, _type.isBoolean)(hasOwn)) {
    throw new TypeError('has args(hasOwn) is not boolean');
  }

  return _has(object, propertyName, hasOwn);
};
/**
 * hasOwn
 */


exports.has = has;

var _hasOwn = function _hasOwn(object, propertyName) {
  return Object.prototype.hasOwnProperty.call(object, propertyName);
};

exports._hasOwn = _hasOwn;

var hasOwn = function hasOwn(object, propertyName) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyName')) {
    var _object2 = object;
    object = _object2.object;
    propertyName = _object2.propertyName;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyName, 'propertyName')) {
    var _propertyName2 = propertyName;
    propertyName = _propertyName2.propertyName;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('hasOwn args(object) is not object type');
  }

  if (!(0, _type.isString)(propertyName)) {
    throw new TypeError('hasOwn args(propertyName) is not string');
  }

  return _hasOwn(object, propertyName);
};
/**
 * hasPrototype
 */


exports.hasOwn = hasOwn;

var _hasPrototype = function _hasPrototype(object, propertyName) {
  if (!(propertyName in object)) {
    return false;
  }

  return !_hasOwn(object, propertyName);
};

exports._hasPrototype = _hasPrototype;

var hasPrototype = function hasPrototype(object, propertyName) {
  if ((0, _isObjectParameter.isObjectParameter)(object, 'object, propertyName')) {
    var _object3 = object;
    object = _object3.object;
    propertyName = _object3.propertyName;
  } else if ((0, _isObjectParameter.isObjectParameter)(propertyName, 'propertyName')) {
    var _propertyName3 = propertyName;
    propertyName = _propertyName3.propertyName;
  }

  if (!(0, _type.isObjectLike)(object)) {
    throw new TypeError('hasPrototype args(object) is not object type');
  }

  if (!(0, _type.isString)(propertyName)) {
    throw new TypeError('hasPrototype args(propertyName) is not string');
  }

  return _hasPrototype(object, propertyName);
};

exports.hasPrototype = hasPrototype;
var _default = {
  _hasOwn: _hasOwn,
  _hasPrototype: _hasPrototype,
  _has: _has,
  hasOwn: hasOwn,
  hasPrototype: hasPrototype,
  has: has
};
exports["default"] = _default;