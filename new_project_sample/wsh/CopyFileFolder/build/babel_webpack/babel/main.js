"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var main = function main(parts) {
  // console.log('parts version is ' + parts.VERSION);
  var pathFileFolders = [['..\\..\\data\\test1\\source\\file\\test1_file.txt', '..\\..\\data\\test1\\dest\\file\\test1_file.txt'], ['..\\..\\data\\test1\\source\\folder\\test1_folder', '..\\..\\data\\test1\\dest\\folder\\test1_folder']];
  var fso = new ActiveXObject('Scripting.FileSystemObject');
  var shell = new ActiveXObject('WScript.Shell');

  var absoluteFileFolderPath = function absoluteFileFolderPath(fso, relativeFileFolderPath) {
    return fso.GetAbsolutePathName(relativeFileFolderPath);
  };

  var forceCreateFolder = function forceCreateFolder(fso, folderPath) {
    var parentFolderPath = fso.GetParentFolderName(folderPath);

    if (!fso.FolderExists(parentFolderPath)) {
      forceCreateFolder(fso, parentFolderPath);
    }

    if (!fso.FolderExists(folderPath)) {
      fso.CreateFolder(folderPath);
    }
  };

  for (var _i = 0, _pathFileFolders = pathFileFolders; _i < _pathFileFolders.length; _i++) {
    var _pathFileFolders$_i = _slicedToArray(_pathFileFolders[_i], 2),
        fromPath = _pathFileFolders$_i[0],
        toPath = _pathFileFolders$_i[1];

    var fromFullPath = absoluteFileFolderPath(fso, fromPath);
    var toFullPath = absoluteFileFolderPath(fso, toPath);

    if (fso.FileExists(fromPath)) {
      forceCreateFolder(fso, fso.GetParentFolderName(toFullPath));
      fso.CopyFile(fromFullPath, toFullPath, true);
    } else if (fso.FolderExists(fromPath)) {
      shell.Run('robocopy ' + fromPath + ' ' + toPath + ' /MIR /XD node_modules', 0, true);
    } else {
      console.log("It is not file or folder ".concat(fromPath));
    }
  }
};

exports.main = main;