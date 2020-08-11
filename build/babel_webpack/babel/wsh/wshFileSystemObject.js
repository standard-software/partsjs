"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileSystemObject = void 0;

var _isType = require("../type/isType.js");

var _platform = require("../platform/platform.js");

var _fso;

var FileSystemObject = function FileSystemObject() {
  if (!(0, _platform.isWindowsScriptHost)()) {
    throw new Error('wsh.FileSystemObject can be used only in wsh platform');
  }

  if (!(this instanceof FileSystemObject)) {
    return new FileSystemObject();
  }

  if ((0, _isType.isUndefined)(_fso)) {
    _fso = new ActiveXObject('Scripting.FileSystemObject');
  }

  return _fso;
};

exports.FileSystemObject = FileSystemObject;
var _default = {
  FileSystemObject: FileSystemObject
};
exports["default"] = _default;