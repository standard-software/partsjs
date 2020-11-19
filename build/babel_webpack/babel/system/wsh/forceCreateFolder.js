"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.forceCreateFolder = exports._forceCreateFolder = void 0;

var _isType = require("../../type/isType.js");

var _platform = require("../../platform/platform.js");

var _wshFileSystemObject = require("./wshFileSystemObject.js");

var _forceCreateFolder = function _forceCreateFolder(folderPath) {
  var fso = (0, _wshFileSystemObject.FileSystemObject)();
  var parentFolderPath = fso.GetParentFolderName(folderPath);

  if (!fso.FolderExists(parentFolderPath)) {
    _forceCreateFolder(parentFolderPath);
  }

  if (!fso.FolderExists(folderPath)) {
    fso.CreateFolder(folderPath);
  }
};

exports._forceCreateFolder = _forceCreateFolder;

var forceCreateFolder = function forceCreateFolder(folderPath) {
  if (!(0, _platform.isWindowsScriptHost)()) {
    throw new Error('wsh.forceCreateFolder can be used only in wsh platform');
  }

  if (!(0, _isType.isString)(folderPath)) {
    throw new Error('forceCreateFolder args(folderPath) is not string');
  }

  return _forceCreateFolder(folderPath);
};

exports.forceCreateFolder = forceCreateFolder;
var _default = {
  _forceCreateFolder: _forceCreateFolder,
  forceCreateFolder: forceCreateFolder
};
exports["default"] = _default;