"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Enum = exports._Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = exports._assert = void 0;

var _assert2 = _interopRequireDefault(require("./assert.js"));

var _guard = _interopRequireDefault(require("./guard.js"));

var _functionValue = _interopRequireDefault(require("./functionValue.js"));

var _sc = _interopRequireDefault(require("./sc.js"));

var _if_ = _interopRequireDefault(require("./if_.js"));

var _switch_ = _interopRequireDefault(require("./switch_.js"));

var _loop = _interopRequireDefault(require("./loop.js"));

var _canUseMap = _interopRequireDefault(require("./canUseMap.js"));

var _canUseSet = _interopRequireDefault(require("./canUseSet.js"));

var _Enum2 = _interopRequireDefault(require("./Enum.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _assert = _assert2["default"]._assert,
    assert = _assert2["default"].assert;
exports.assert = assert;
exports._assert = _assert;
var guard = _guard["default"].guard;
exports.guard = guard;
var functionValue = _functionValue["default"].functionValue;
exports.functionValue = functionValue;
var sc = _sc["default"].sc;
exports.sc = sc;
var if_ = _if_["default"].if_;
exports.if_ = if_;
var switch_ = _switch_["default"].switch_;
exports.switch_ = switch_;
var loop = _loop["default"].loop;
exports.loop = loop;
var canUseMap = _canUseMap["default"].canUseMap,
    canUseWeakMap = _canUseMap["default"].canUseWeakMap;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseMap = canUseMap;
var canUseSet = _canUseSet["default"].canUseSet,
    canUseWeakSet = _canUseSet["default"].canUseWeakSet;
exports.canUseWeakSet = canUseWeakSet;
exports.canUseSet = canUseSet;
var _Enum = _Enum2["default"]._Enum,
    Enum = _Enum2["default"].Enum;
exports.Enum = Enum;
exports._Enum = _Enum;

var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _assert2["default"]), _guard["default"]), _functionValue["default"]), _sc["default"]), _if_["default"]), _switch_["default"]), _loop["default"]), _canUseMap["default"]), _canUseSet["default"]), _Enum2["default"]);

exports["default"] = _default;