"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propCount = exports.fixProp = exports.inProp = exports.setProp = exports.getProp = exports.copyProp = exports.objectToValueArray = exports.objectToKeyArray = exports.objectFromKeyValueArray = exports.objectToKeyValueArray = exports.has = exports.hasPrototype = exports.hasOwn = exports.objectValues = exports.objectKeys = exports.objectFromEntries = exports.objectEntries = exports.propertyList = exports.propertyCount = exports.fixProperty = exports.inProperty = exports.setProperty = exports.getProperty = exports.copyProperty = exports.isObjectParameter = exports._has = exports._hasPrototype = exports._hasOwn = exports._objectValues = exports._objectKeys = exports._objectFromEntries = exports._objectEntries = exports._propertyList = exports._propertyCount = exports._fixProperty = exports._inProperty = exports._setProperty = exports._getProperty = exports._copyProperty = exports._isObjectParameter = void 0;

var _object_common = _interopRequireDefault(require("./object_common.js"));

var _isObjectParameter2 = _interopRequireDefault(require("./isObjectParameter.js"));

var _inProperty2 = _interopRequireDefault(require("./inProperty.js"));

var _fixProperty2 = _interopRequireDefault(require("./fixProperty.js"));

var _objectEntries2 = _interopRequireDefault(require("./_objectEntries.js"));

var _objectEntries3 = _interopRequireDefault(require("./objectEntries.js"));

var _objectFromEntries2 = _interopRequireDefault(require("./_objectFromEntries.js"));

var _objectFromEntries3 = _interopRequireDefault(require("./objectFromEntries.js"));

var _objectKeys2 = _interopRequireDefault(require("./objectKeys.js"));

var _objectValues2 = _interopRequireDefault(require("./objectValues.js"));

var _getProperty2 = _interopRequireDefault(require("./getProperty.js"));

var _hasOwn2 = _interopRequireDefault(require("./_hasOwn.js"));

var _hasOwn3 = _interopRequireDefault(require("./hasOwn.js"));

var _has2 = _interopRequireDefault(require("./has.js"));

var _propertyCount2 = _interopRequireDefault(require("./_propertyCount.js"));

var _propertyCount3 = _interopRequireDefault(require("./propertyCount.js"));

var _propertyList2 = _interopRequireDefault(require("./propertyList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var objectJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _object_common["default"]), _isObjectParameter2["default"]), _inProperty2["default"]), _fixProperty2["default"]), _objectEntries2["default"]), _objectEntries3["default"]), _objectFromEntries2["default"]), _objectFromEntries3["default"]), _objectKeys2["default"]), _objectValues2["default"]), _getProperty2["default"]), _hasOwn2["default"]), _hasOwn3["default"]), _has2["default"]), _propertyCount2["default"]), _propertyCount3["default"]), _propertyList2["default"]);

var _isObjectParameter = objectJs._isObjectParameter,
    _copyProperty = objectJs._copyProperty,
    _getProperty = objectJs._getProperty,
    _setProperty = objectJs._setProperty,
    _inProperty = objectJs._inProperty,
    _fixProperty = objectJs._fixProperty,
    _propertyCount = objectJs._propertyCount,
    _propertyList = objectJs._propertyList,
    _objectEntries = objectJs._objectEntries,
    _objectFromEntries = objectJs._objectFromEntries,
    _objectKeys = objectJs._objectKeys,
    _objectValues = objectJs._objectValues,
    _hasOwn = objectJs._hasOwn,
    _hasPrototype = objectJs._hasPrototype,
    _has = objectJs._has,
    isObjectParameter = objectJs.isObjectParameter,
    copyProperty = objectJs.copyProperty,
    getProperty = objectJs.getProperty,
    setProperty = objectJs.setProperty,
    inProperty = objectJs.inProperty,
    fixProperty = objectJs.fixProperty,
    propertyCount = objectJs.propertyCount,
    propertyList = objectJs.propertyList,
    objectEntries = objectJs.objectEntries,
    objectFromEntries = objectJs.objectFromEntries,
    objectKeys = objectJs.objectKeys,
    objectValues = objectJs.objectValues,
    hasOwn = objectJs.hasOwn,
    hasPrototype = objectJs.hasPrototype,
    has = objectJs.has,
    objectToKeyValueArray = objectJs.objectToKeyValueArray,
    objectFromKeyValueArray = objectJs.objectFromKeyValueArray,
    objectToKeyArray = objectJs.objectToKeyArray,
    objectToValueArray = objectJs.objectToValueArray,
    copyProp = objectJs.copyProp,
    getProp = objectJs.getProp,
    setProp = objectJs.setProp,
    inProp = objectJs.inProp,
    fixProp = objectJs.fixProp,
    propCount = objectJs.propCount;
exports.propCount = propCount;
exports.fixProp = fixProp;
exports.inProp = inProp;
exports.setProp = setProp;
exports.getProp = getProp;
exports.copyProp = copyProp;
exports.objectToValueArray = objectToValueArray;
exports.objectToKeyArray = objectToKeyArray;
exports.objectFromKeyValueArray = objectFromKeyValueArray;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.has = has;
exports.hasPrototype = hasPrototype;
exports.hasOwn = hasOwn;
exports.objectValues = objectValues;
exports.objectKeys = objectKeys;
exports.objectFromEntries = objectFromEntries;
exports.objectEntries = objectEntries;
exports.propertyList = propertyList;
exports.propertyCount = propertyCount;
exports.fixProperty = fixProperty;
exports.inProperty = inProperty;
exports.setProperty = setProperty;
exports.getProperty = getProperty;
exports.copyProperty = copyProperty;
exports.isObjectParameter = isObjectParameter;
exports._has = _has;
exports._hasPrototype = _hasPrototype;
exports._hasOwn = _hasOwn;
exports._objectValues = _objectValues;
exports._objectKeys = _objectKeys;
exports._objectFromEntries = _objectFromEntries;
exports._objectEntries = _objectEntries;
exports._propertyList = _propertyList;
exports._propertyCount = _propertyCount;
exports._fixProperty = _fixProperty;
exports._inProperty = _inProperty;
exports._setProperty = _setProperty;
exports._getProperty = _getProperty;
exports._copyProperty = _copyProperty;
exports._isObjectParameter = _isObjectParameter;
var _default = {
  _isObjectParameter: _isObjectParameter,
  _copyProperty: _copyProperty,
  _getProperty: _getProperty,
  _setProperty: _setProperty,
  _inProperty: _inProperty,
  _fixProperty: _fixProperty,
  _propertyCount: _propertyCount,
  _propertyList: _propertyList,
  _objectEntries: _objectEntries,
  _objectFromEntries: _objectFromEntries,
  _objectKeys: _objectKeys,
  _objectValues: _objectValues,
  _hasOwn: _hasOwn,
  _hasPrototype: _hasPrototype,
  _has: _has,
  isObjectParameter: isObjectParameter,
  copyProperty: copyProperty,
  getProperty: getProperty,
  setProperty: setProperty,
  inProperty: inProperty,
  fixProperty: fixProperty,
  propertyCount: propertyCount,
  propertyList: propertyList,
  objectEntries: objectEntries,
  objectFromEntries: objectFromEntries,
  objectKeys: objectKeys,
  objectValues: objectValues,
  hasOwn: hasOwn,
  hasPrototype: hasPrototype,
  has: has,
  // Another name
  objectToKeyValueArray: objectToKeyValueArray,
  objectFromKeyValueArray: objectFromKeyValueArray,
  objectToKeyArray: objectToKeyArray,
  objectToValueArray: objectToValueArray,
  // Short name
  copyProp: copyProp,
  getProp: getProp,
  setProp: setProp,
  inProp: inProp,
  fixProp: fixProp,
  propCount: propCount
};
exports["default"] = _default;