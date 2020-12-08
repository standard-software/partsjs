"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._merge = void 0;

var _isType = require("../type/isType.js");

var _loop = require("../syntax/__loop.js");

var _recursive2 = require("../syntax/_recursive.js");

var _getProperty2 = require("../object/_getProperty.js");

var _setProperty2 = require("../object/_setProperty.js");

/**
 * merge
 */
var _merge = function _merge() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var targetArray = arguments.length > 1 ? arguments[1] : undefined;
  var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_, v) {
    return v;
  };
  (0, _loop.__loop)(targetArray)(function (target, targetIndex) {
    (0, _recursive2._recursive)(target, function (targetValue, key, level, path) {
      var propPath = path + '.' + key;
      var sourceValue = (0, _getProperty2._getProperty)(source, propPath);

      if ((0, _isType.isObject)(targetValue)) {
        if (!(0, _isType.isObject)(sourceValue)) {
          (0, _setProperty2._setProperty)(source, propPath, {});
        }

        return targetValue;
      } else if ((0, _isType.isArray)(targetValue)) {
        if (!(0, _isType.isArray)(sourceValue)) {
          (0, _setProperty2._setProperty)(source, propPath, []);
        }

        return targetValue;
      } else {
        if ((0, _isType.isUndefined)(sourceValue)) {
          (0, _setProperty2._setProperty)(source, propPath, targetValue);
        } else if ((0, _isType.isUndefined)(targetValue)) {// no set value
        } else {
          var setValue = func(sourceValue, targetValue, key, level, path, source, targetIndex, targetArray);
          (0, _setProperty2._setProperty)(source, propPath, setValue);
        }
      }
    });
  });
  return source;
};

exports._merge = _merge;
var _default = {
  _merge: _merge
};
exports["default"] = _default;