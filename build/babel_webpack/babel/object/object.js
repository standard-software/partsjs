"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propCount = exports.propertyCount = exports._propertyCount = exports.has = exports.hasPrototype = exports._has = exports._hasPrototype = exports.hasOwn = exports._hasOwn = exports.getProp = exports.getProperty = exports._getProperty = exports._getPropertyBase = exports.objectToValueArray = exports.objectValues = exports._objectValues = exports.objectToKeyArray = exports.objectKeys = exports._objectKeys = exports.objectToKeyValueArray = exports.objectEntries = exports._objectEntries = exports.fixProp = exports.fixProperty = exports._fixProperty = exports.inProp = exports.inProperty = exports._inProperty = exports.isObjectParameter = exports.setProp = exports.copyProp = exports.setProperty = exports.copyProperty = exports._setProperty = exports._copyProperty = void 0;

var _object_common = _interopRequireDefault(require("./object_common.js"));

var _isObjectParameter = _interopRequireDefault(require("./isObjectParameter.js"));

var _inProperty2 = _interopRequireDefault(require("./inProperty.js"));

var _fixProperty2 = _interopRequireDefault(require("./fixProperty.js"));

var _objectEntries2 = _interopRequireDefault(require("./objectEntries.js"));

var _objectKeys2 = _interopRequireDefault(require("./objectKeys.js"));

var _objectValues2 = _interopRequireDefault(require("./objectValues.js"));

var _getProperty2 = _interopRequireDefault(require("./getProperty.js"));

var _hasOwn2 = _interopRequireDefault(require("./_hasOwn.js"));

var _hasOwn3 = _interopRequireDefault(require("./hasOwn.js"));

var _has2 = _interopRequireDefault(require("./has.js"));

var _propertyCount2 = _interopRequireDefault(require("./_propertyCount.js"));

var _propertyCount3 = _interopRequireDefault(require("./propertyCount.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _copyProperty = _object_common["default"]._copyProperty,
    _setProperty = _object_common["default"]._setProperty,
    copyProperty = _object_common["default"].copyProperty,
    setProperty = _object_common["default"].setProperty,
    copyProp = _object_common["default"].copyProp,
    setProp = _object_common["default"].setProp;
exports.setProp = setProp;
exports.copyProp = copyProp;
exports.setProperty = setProperty;
exports.copyProperty = copyProperty;
exports._setProperty = _setProperty;
exports._copyProperty = _copyProperty;
var isObjectParameter = _isObjectParameter["default"].isObjectParameter;
exports.isObjectParameter = isObjectParameter;
var _inProperty = _inProperty2["default"]._inProperty,
    inProperty = _inProperty2["default"].inProperty,
    inProp = _inProperty2["default"].inProp;
exports.inProp = inProp;
exports.inProperty = inProperty;
exports._inProperty = _inProperty;
var _fixProperty = _fixProperty2["default"]._fixProperty,
    fixProperty = _fixProperty2["default"].fixProperty,
    fixProp = _fixProperty2["default"].fixProp;
exports.fixProp = fixProp;
exports.fixProperty = fixProperty;
exports._fixProperty = _fixProperty;
var _objectEntries = _objectEntries2["default"]._objectEntries,
    objectEntries = _objectEntries2["default"].objectEntries,
    objectToKeyValueArray = _objectEntries2["default"].objectToKeyValueArray;
exports.objectToKeyValueArray = objectToKeyValueArray;
exports.objectEntries = objectEntries;
exports._objectEntries = _objectEntries;
var _objectKeys = _objectKeys2["default"]._objectKeys,
    objectKeys = _objectKeys2["default"].objectKeys,
    objectToKeyArray = _objectKeys2["default"].objectToKeyArray;
exports.objectToKeyArray = objectToKeyArray;
exports.objectKeys = objectKeys;
exports._objectKeys = _objectKeys;
var _objectValues = _objectValues2["default"]._objectValues,
    objectValues = _objectValues2["default"].objectValues,
    objectToValueArray = _objectValues2["default"].objectToValueArray;
exports.objectToValueArray = objectToValueArray;
exports.objectValues = objectValues;
exports._objectValues = _objectValues;
var _getPropertyBase = _getProperty2["default"]._getPropertyBase,
    _getProperty = _getProperty2["default"]._getProperty,
    getProperty = _getProperty2["default"].getProperty,
    getProp = _getProperty2["default"].getProp;
exports.getProp = getProp;
exports.getProperty = getProperty;
exports._getProperty = _getProperty;
exports._getPropertyBase = _getPropertyBase;
var _hasOwn = _hasOwn2["default"]._hasOwn;
exports._hasOwn = _hasOwn;
var hasOwn = _hasOwn3["default"].hasOwn;
exports.hasOwn = hasOwn;
var _hasPrototype = _has2["default"]._hasPrototype,
    _has = _has2["default"]._has,
    hasPrototype = _has2["default"].hasPrototype,
    has = _has2["default"].has;
exports.has = has;
exports.hasPrototype = hasPrototype;
exports._has = _has;
exports._hasPrototype = _hasPrototype;
var _propertyCount = _propertyCount2["default"]._propertyCount;
exports._propertyCount = _propertyCount;
var propertyCount = _propertyCount3["default"].propertyCount,
    propCount = _propertyCount3["default"].propCount;
exports.propCount = propCount;
exports.propertyCount = propertyCount;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _object_common["default"]), _isObjectParameter["default"]), _inProperty2["default"]), _fixProperty2["default"]), _objectEntries2["default"]), _objectKeys2["default"]), _objectValues2["default"]), _getProperty2["default"]), _hasOwn2["default"]), _hasOwn3["default"]), _has2["default"]), _propertyCount2["default"]), _propertyCount3["default"]);

exports["default"] = _default;