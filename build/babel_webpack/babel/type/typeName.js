"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.typeName = void 0;

var _platform = require("../platform/platform.js");

var _includes = require("../compare/__includes.js");

var _replaceAll2 = require("../string/_replaceAll.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _objectToStr = function _objectToStr(value) {
  return (0, _replaceAll2._replaceAll)((0, _replaceAll2._replaceAll)(Object.prototype.toString.call(value), '[object ', ''), ']', '');
};

var _booleanType = function _booleanType(typeofValue, objectToStrValue) {
  if (objectToStrValue === 'Boolean') {
    if (typeofValue === 'boolean') {
      return 'Boolean';
    } else if (typeofValue === 'object') {
      return 'BooleanObject';
    }

    throw new Error('typeName');
  }
};

var _numberType = function _numberType(typeofValue, objectToStrValue, value) {
  if (objectToStrValue === 'Number') {
    if (typeofValue === 'number') {
      if (value !== value) {
        return 'NaN';
      }

      if (value === Infinity || value == -Infinity) {
        return 'Infinity';
      }

      return 'Number';
    } else if (typeofValue === 'object') {
      return 'NumberObject';
    }

    throw new Error('typeName');
  }
};

var _stringType = function _stringType(typeofValue, objectToStrValue) {
  if (objectToStrValue === 'String') {
    if (typeofValue === 'string') {
      return 'String';
    } else if (typeofValue === 'object') {
      return 'StringObject';
    }

    throw new Error('typeName');
  }
};

var _typeName;

switch ((0, _platform.platformName)()) {
  case 'WindowsScriptHost':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (value === null) {
        return 'Null';
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        return 'Object';
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  case 'GoogleAppsScriptRhino':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (value === null) {
        return 'Null';
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        if ('constructor' in value) {
          return 'Object';
        } else {
          return 'ObjectFromNull';
        }
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math', 'JSON'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  case 'InternetExplorer':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (objectToStrValue === 'Null') {
        return objectToStrValue;
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        if ('constructor' in value) {
          if (value.constructor === Map) {
            return 'Map';
          }

          if (value.constructor === WeakMap) {
            return 'WeakMap';
          }

          if (value.constructor === Set) {
            return 'Set';
          }

          return 'Object';
        } else {
          return 'ObjectFromNull';
        }
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math', 'JSON', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'Map', 'WeakMap', 'Set', 'WeakSet', 'Symbol', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'WebAssembly', 'Intl', 'Module'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  case 'Deno':
  case 'Node':
  case 'GoogleAppsScriptV8':
  case 'Jest':
  case 'Chrome':
  case 'Edge':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    _typeName = function _typeName(value) {
      var typeofValue = _typeof(value);

      var objectToStrValue = _objectToStr(value);

      if (typeofValue === 'undefined') {
        return 'Undefined';
      }

      if (objectToStrValue === 'Null') {
        return objectToStrValue;
      }

      var result;
      result = _booleanType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      result = _numberType(typeofValue, objectToStrValue, value);

      if (result) {
        return result;
      }

      result = _stringType(typeofValue, objectToStrValue);

      if (result) {
        return result;
      }

      if (objectToStrValue === 'Object') {
        if ('constructor' in value) {
          return 'Object';
        } else {
          return 'ObjectFromNull';
        }
      }

      if ((0, _includes.__includes)(['Function', 'Array', 'RegExp', 'Date', 'Math', 'JSON', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array', 'Map', 'WeakMap', 'Set', 'WeakSet', 'Symbol', 'ArrayBuffer', 'SharedArrayBuffer', 'Atomics', 'DataView', 'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflect', 'WebAssembly', 'Intl', 'Module'], objectToStrValue)) {
        return objectToStrValue;
      }

      throw new Error("typeName:".concat(typeofValue, ":").concat(objectToStrValue));
    };

    break;

  default:
    throw new Error("typeName:".concat((0, _platform.platformName)()));
}

var typeName = _typeName;
exports.typeName = typeName;
var _default = {
  typeName: typeName
};
exports["default"] = _default;