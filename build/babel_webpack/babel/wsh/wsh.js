"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports.Shell = exports.FileSystemObject = void 0;

var _wshFileSystemObject = _interopRequireDefault(require("./wshFileSystemObject.js"));

var _wshShell = _interopRequireDefault(require("./wshShell.js"));

var _forceCreateFolder = _interopRequireDefault(require("./forceCreateFolder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FileSystemObject = _wshFileSystemObject["default"].FileSystemObject;
exports.FileSystemObject = FileSystemObject;
var Shell = _wshShell["default"].Shell;
exports.Shell = Shell;
var forceCreateFolder = _forceCreateFolder["default"].forceCreateFolder;
exports.forceCreateFolder = forceCreateFolder;

var _default = _objectSpread(_objectSpread(_objectSpread({}, _wshFileSystemObject["default"]), _wshShell["default"]), _forceCreateFolder["default"]);

exports["default"] = _default;