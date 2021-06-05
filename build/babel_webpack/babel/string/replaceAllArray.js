"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.replaceAllArray = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _replaceAllArray2 = require("../string/_replaceAllArray.js");

var _allMatchAll = require("../compare/allMatchAll.js");

/**
 * replaceAllArray
 */
var replaceAllArray = function replaceAllArray(str, replaceArray) {
  var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _isObjectParameter.isObjectParameter)(str, 'str, replaceArray', 'detail')) {
    var _str = str;
    str = _str.str;
    replaceArray = _str.replaceArray;
    var _str$detail = _str.detail;
    detail = _str$detail === void 0 ? false : _str$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(replaceArray, 'replaceArray', 'detail')) {
    var _replaceArray = replaceArray;
    replaceArray = _replaceArray.replaceArray;
    var _replaceArray$detail = _replaceArray.detail;
    detail = _replaceArray$detail === void 0 ? false : _replaceArray$detail;
  } else if ((0, _isObjectParameter.isObjectParameter)(detail, 'detail')) {
    var _detail = detail;
    detail = _detail.detail;
  }

  if (!(0, _type.isString)(str)) {
    throw new TypeError('replaceAllArray args(str) is not string');
  }

  if (!(0, _allMatchAll.allMatchAll)(replaceArray, [_type.isArray, function (element) {
    return (0, _type.isStringArray)(element);
  }, function (element) {
    return element.length === 2;
  }])) {
    throw new TypeError('replaceAllArray args(replaceArray) element is not string array(length is 2)');
  }

  if (!(0, _type.isBoolean)(detail)) {
    throw new TypeError('replaceAllArray args(detail) is not boolean');
  }

  return (0, _replaceAllArray2._replaceAllArray)(str, replaceArray, detail);
};

exports.replaceAllArray = replaceAllArray;
var _default = {
  replaceAllArray: replaceAllArray
};
exports["default"] = _default;