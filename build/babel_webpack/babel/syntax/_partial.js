"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._partial = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _partial = function _partial(func, applyArgs) {
  return function () {
    var applyArray = _toConsumableArray(applyArgs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      var arg = _args[_i];
      var emptyIndex = applyArray.indexOf(_partial.empty);

      if (emptyIndex !== -1) {
        applyArray[emptyIndex] = arg;
      } else {
        applyArray.push(arg);
      }
    }

    return func.apply(void 0, _toConsumableArray(applyArray.map(function (e) {
      return e === _partial.empty ? undefined : e;
    })));
  };
};

exports._partial = _partial;
_partial.empty = {};
var _default = {
  _partial: _partial
};
exports["default"] = _default;