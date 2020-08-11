"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Shell = void 0;

var _isType = require("../type/isType.js");

var _platform = require("../platform/platform.js");

var _shell;

var Shell = function Shell() {
  if (!(0, _platform.isWindowsScriptHost)()) {
    throw new Error('wsh.Shell can be used only in wsh platform');
  }

  if (!(this instanceof Shell)) {
    return new Shell();
  }

  if ((0, _isType.isUndefined)(_shell)) {
    _shell = new ActiveXObject('WScript.Shell');
  }

  return _shell;
};

exports.Shell = Shell;
var _default = {
  Shell: Shell
};
exports["default"] = _default;