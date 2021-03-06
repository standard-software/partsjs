"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.partial = exports.recursive = exports.Enum = exports.canUseWeakSet = exports.canUseSet = exports.canUseWeakMap = exports.canUseMap = exports.loop = exports.switch_ = exports.if_ = exports.sc = exports.guard = exports.assert = exports._partial = exports._recursive = exports._Enum = exports._assert = void 0;

var _assert2 = _interopRequireDefault(require("./assert.js"));

var _guard = _interopRequireDefault(require("./guard.js"));

var _sc = _interopRequireDefault(require("./sc.js"));

var _if_ = _interopRequireDefault(require("./if_.js"));

var _switch_ = _interopRequireDefault(require("./switch_.js"));

var _loop = _interopRequireDefault(require("./loop.js"));

var _canUseMap = _interopRequireDefault(require("./canUseMap.js"));

var _canUseSet = _interopRequireDefault(require("./canUseSet.js"));

var _Enum2 = _interopRequireDefault(require("./_Enum.js"));

var _Enum3 = _interopRequireDefault(require("./Enum.js"));

var _recursive2 = _interopRequireDefault(require("./_recursive.js"));

var _recursive3 = _interopRequireDefault(require("./recursive.js"));

var _partial2 = _interopRequireDefault(require("./_partial.js"));

var _partial3 = _interopRequireDefault(require("./partial.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var syntaxJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _assert2["default"]), _guard["default"]), _sc["default"]), _if_["default"]), _switch_["default"]), _loop["default"]), _canUseMap["default"]), _canUseSet["default"]), _Enum2["default"]), _Enum3["default"]), _recursive2["default"]), _recursive3["default"]), _partial2["default"]), _partial3["default"]);

var _assert = syntaxJs._assert,
    _Enum = syntaxJs._Enum,
    _recursive = syntaxJs._recursive,
    _partial = syntaxJs._partial,
    assert = syntaxJs.assert,
    guard = syntaxJs.guard,
    sc = syntaxJs.sc,
    if_ = syntaxJs.if_,
    switch_ = syntaxJs.switch_,
    loop = syntaxJs.loop,
    canUseMap = syntaxJs.canUseMap,
    canUseWeakMap = syntaxJs.canUseWeakMap,
    canUseSet = syntaxJs.canUseSet,
    canUseWeakSet = syntaxJs.canUseWeakSet,
    Enum = syntaxJs.Enum,
    recursive = syntaxJs.recursive,
    partial = syntaxJs.partial;
exports.partial = partial;
exports.recursive = recursive;
exports.Enum = Enum;
exports.canUseWeakSet = canUseWeakSet;
exports.canUseSet = canUseSet;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseMap = canUseMap;
exports.loop = loop;
exports.switch_ = switch_;
exports.if_ = if_;
exports.sc = sc;
exports.guard = guard;
exports.assert = assert;
exports._partial = _partial;
exports._recursive = _recursive;
exports._Enum = _Enum;
exports._assert = _assert;
var _default = {
  _assert: _assert,
  _Enum: _Enum,
  _recursive: _recursive,
  _partial: _partial,
  assert: assert,
  guard: guard,
  sc: sc,
  if_: if_,
  switch_: switch_,
  loop: loop,
  canUseMap: canUseMap,
  canUseWeakMap: canUseWeakMap,
  canUseSet: canUseSet,
  canUseWeakSet: canUseWeakSet,
  Enum: Enum,
  recursive: recursive,
  partial: partial
};
exports["default"] = _default;