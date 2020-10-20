"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.merge = exports.functionValue = exports.cloneDeep = exports.clone = exports._merge = exports._cloneDeep = exports._clone = void 0;

var _clone2 = _interopRequireDefault(require("./clone.js"));

var _cloneDeep2 = _interopRequireDefault(require("./cloneDeep.js"));

var _functionValue = _interopRequireDefault(require("./functionValue.js"));

var _merge2 = _interopRequireDefault(require("./_merge.js"));

var _merge3 = _interopRequireDefault(require("./merge.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _clone2["default"]), _cloneDeep2["default"]), _functionValue["default"]), _merge2["default"]), _merge3["default"]);

var _clone = commonJs._clone,
    _cloneDeep = commonJs._cloneDeep,
    _merge = commonJs._merge,
    clone = commonJs.clone,
    cloneDeep = commonJs.cloneDeep,
    functionValue = commonJs.functionValue,
    merge = commonJs.merge;
exports.merge = merge;
exports.functionValue = functionValue;
exports.cloneDeep = cloneDeep;
exports.clone = clone;
exports._merge = _merge;
exports._cloneDeep = _cloneDeep;
exports._clone = _clone;
var _default = {
  _clone: _clone,
  _cloneDeep: _cloneDeep,
  _merge: _merge,
  clone: clone,
  cloneDeep: cloneDeep,
  functionValue: functionValue,
  merge: merge
};
exports["default"] = _default;