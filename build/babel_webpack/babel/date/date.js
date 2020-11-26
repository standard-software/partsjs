"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DateTime = exports.isInvalidDate = exports.Today = exports._DateTime = void 0;

var _Today = _interopRequireDefault(require("./Today.js"));

var _isInvalidDate = _interopRequireDefault(require("./isInvalidDate.js"));

var _DateTime2 = _interopRequireDefault(require("./_DateTime.js"));

var _DateTime3 = _interopRequireDefault(require("./DateTime.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dateJs = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _Today["default"]), _DateTime2["default"]), _DateTime3["default"]), _isInvalidDate["default"]);

var _DateTime = dateJs._DateTime,
    Today = dateJs.Today,
    isInvalidDate = dateJs.isInvalidDate,
    DateTime = dateJs.DateTime;
exports.DateTime = DateTime;
exports.isInvalidDate = isInvalidDate;
exports.Today = Today;
exports._DateTime = _DateTime;
var _default = {
  _DateTime: _DateTime,
  Today: Today,
  isInvalidDate: isInvalidDate,
  DateTime: DateTime
};
exports["default"] = _default;