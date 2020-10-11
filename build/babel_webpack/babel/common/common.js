"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.functionValue = exports.cloneDeep = exports._cloneDeep = exports.clone = exports._clone = void 0;

var _clone2 = _interopRequireDefault(require("./clone.js"));

var _cloneDeep2 = _interopRequireDefault(require("./cloneDeep.js"));

var _functionValue = _interopRequireDefault(require("./functionValue.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _clone = _clone2["default"]._clone,
    clone = _clone2["default"].clone;
exports.clone = clone;
exports._clone = _clone;
var _cloneDeep = _cloneDeep2["default"]._cloneDeep,
    cloneDeep = _cloneDeep2["default"].cloneDeep;
exports.cloneDeep = cloneDeep;
exports._cloneDeep = _cloneDeep;
var functionValue = _functionValue["default"].functionValue;
exports.functionValue = functionValue;

var _default = _objectSpread(_objectSpread(_objectSpread({}, _clone2["default"]), _cloneDeep2["default"]), _functionValue["default"]);

exports["default"] = _default;