"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.wsh = exports.consoleHook = void 0;

var _consoleHook = _interopRequireDefault(require("./consoleHook/consoleHook.js"));

var _wsh = _interopRequireDefault(require("./wsh/wsh.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var consoleHook = _consoleHook["default"];
exports.consoleHook = consoleHook;
var wsh = _wsh["default"];
exports.wsh = wsh;
var _default = {
  consoleHook: consoleHook,
  wsh: wsh
};
exports["default"] = _default;