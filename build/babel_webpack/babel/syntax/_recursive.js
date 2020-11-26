"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._recursive = void 0;

var _isType = require("../type/isType.js");

var _loop = require("../syntax/__loop.js");

var _objectEntries2 = require("../object/_objectEntries.js");

var _arrayEntries2 = require("../array/_arrayEntries.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _recursive = function _recursive(source, func) {
  var continueFlag = true;

  var _recursive_ = function _recursive_(value, level, path) {
    var loopArray;

    if ((0, _isType.isObject)(value)) {
      loopArray = (0, _objectEntries2._objectEntries)(value);
    } else if ((0, _isType.isArray)(value)) {
      loopArray = (0, _arrayEntries2._arrayEntries)(value);
    } else {
      return;
    }

    (0, _loop.__loop)(loopArray)(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var result = func(value, key, level, path, source);

      if (result === false) {
        continueFlag = false;
        return {
          "break": true
        };
      }

      _recursive_(result, level + 1, path + '.' + key);

      if (continueFlag === false) {
        return {
          "break": true
        };
      }
    });
  };

  _recursive_(source, 0, '');
};

exports._recursive = _recursive;
var _default = {
  _recursive: _recursive
};
exports["default"] = _default;