"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._merge = void 0;

var _isType = require("../type/isType.js");

var _loop = require("../syntax/__loop.js");

var _objectEntries2 = require("../object/objectEntries.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * merge
 */
var _merge = function _merge(dataArray) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (v) {
    return v;
  };
  var target = arguments.length > 2 ? arguments[2] : undefined;

  if (dataArray.length === 0) {
    return target;
  }

  if ((0, _isType.isUndefined)(target)) {
    target = (0, _isType.isObjectFromNull)(dataArray[0]) ? Object.create(null) : new dataArray[0].constructor();
  }

  (0, _loop.__loop)(dataArray)(function (data) {
    (0, _loop.__loop)((0, _objectEntries2._objectEntries)(data))(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      target[key] = func(value, target[key], key, data, target);
    });
  });
  return target;
};

exports._merge = _merge;
var _default = {
  _merge: _merge
};
exports["default"] = _default;