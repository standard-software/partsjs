import {
  isWindowsScriptHost,
  isGasRhino,
  isInternetExplorer,
  isChrome,
  isNode,
  isDeno,
  isFirefox,
  platformName,
} from '../platform/platform.js';

import { __includes } from '../compare/__includes.js';
import { _replaceAll } from '../string/_replaceAll.js';

const _objectToStr = value => {
  return _replaceAll(
    _replaceAll(
      Object.prototype.toString.call(value), '[object ', '',
    ),
    ']', '',
  );
};

const _booleanType = (typeofValue, objectToStrValue) => {
  if (objectToStrValue === 'Boolean') {
    if (typeofValue === 'boolean') {
      return 'Boolean';
    } else if (typeofValue === 'object') {
      return 'BooleanObject';
    }
    throw new Error('typeName');
  }
};

const _numberType = (typeofValue, objectToStrValue, value) => {
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

const _stringType = (typeofValue, objectToStrValue) => {
  if (objectToStrValue === 'String') {
    if (typeofValue === 'string') {
      return 'String';
    } else if (typeofValue === 'object') {
      return 'StringObject';
    }
    throw new Error('typeName');
  }
};

let _typeName;
switch (platformName()) {
case 'WindowsScriptHost':
  _typeName = (value) => {
    const typeofValue = typeof value;
    const objectToStrValue = _objectToStr(value);

    if (typeofValue === 'undefined') { return 'Undefined'; }
    if (value === null) { return 'Null'; }

    let result;
    result = _booleanType(typeofValue, objectToStrValue);
    if (result) { return result; }

    result = _numberType(typeofValue, objectToStrValue, value);
    if (result) { return result; }

    result = _stringType(typeofValue, objectToStrValue);
    if (result) { return result; }

    if (objectToStrValue === 'Object') {
      return 'Object';
    }

    if (__includes([
      'Function', 'Array',
      'RegExp', 'Date', 'Math',
    ], objectToStrValue)) {
      return objectToStrValue;
    }

    throw new Error(`typeName:${typeofValue}:${objectToStrValue}`);
  };
  break;

case 'GoogleAppsScriptRhino':
  _typeName = (value) => {
    const typeofValue = typeof value;
    const objectToStrValue = _objectToStr(value);

    if (typeofValue === 'undefined') { return 'Undefined'; }
    if (value === null) { return 'Null'; }

    let result;
    result = _booleanType(typeofValue, objectToStrValue);
    if (result) { return result; }

    result = _numberType(typeofValue, objectToStrValue, value);
    if (result) { return result; }

    result = _stringType(typeofValue, objectToStrValue);
    if (result) { return result; }

    if (objectToStrValue === 'Object') {
      if ('constructor' in value) {
        return 'Object';
      } else {
        return 'ObjectFromNull';
      }
    }

    if (__includes([
      'Function', 'Array',
      'RegExp', 'Date', 'Math',
      'JSON',
    ], objectToStrValue)) {
      return objectToStrValue;
    }

    throw new Error(`typeName:${typeofValue}:${objectToStrValue}`);
  };
  break;

case 'InternetExplorer':
  _typeName = (value) => {
    const typeofValue = typeof value;
    const objectToStrValue = _objectToStr(value);

    if (typeofValue === 'undefined') { return 'Undefined'; }
    if (objectToStrValue === 'Null') { return objectToStrValue; }

    let result;
    result = _booleanType(typeofValue, objectToStrValue);
    if (result) { return result; }

    result = _numberType(typeofValue, objectToStrValue, value);
    if (result) { return result; }

    result = _stringType(typeofValue, objectToStrValue);
    if (result) { return result; }

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

    if (__includes([
      'Function', 'Array',
      'RegExp', 'Date', 'Math',
      'JSON',
      'Int8Array', 'Uint8Array', 'Uint8ClampedArray',
      'Int16Array', 'Uint16Array',
      'Int32Array', 'Uint32Array',
      'Float32Array', 'Float64Array',
      'Symbol',
      'ArrayBuffer',
      'Intl',
      'Module',
    ], objectToStrValue)) {
      return objectToStrValue;
    }

    throw new Error(`typeName:${typeofValue}:${objectToStrValue}`);
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
  _typeName = (value) => {
    const typeofValue = typeof value;
    const objectToStrValue = _objectToStr(value);

    if (typeofValue === 'undefined') { return 'Undefined'; }
    if (objectToStrValue === 'Null') { return objectToStrValue; }

    let result;
    result = _booleanType(typeofValue, objectToStrValue);
    if (result) { return result; }

    result = _numberType(typeofValue, objectToStrValue, value);
    if (result) { return result; }

    result = _stringType(typeofValue, objectToStrValue);
    if (result) { return result; }

    if (objectToStrValue === 'Object') {
      if ('constructor' in value) {
        return 'Object';
      } else {
        return 'ObjectFromNull';
      }
    }

    if (__includes([
      'Function', 'Array',
      'RegExp', 'Date', 'Math',
      'JSON',
      'Int8Array', 'Uint8Array', 'Uint8ClampedArray',
      'Int16Array', 'Uint16Array',
      'Int32Array', 'Uint32Array',
      'Float32Array', 'Float64Array',
      'Map', 'WeakMap',
      'Set', 'WeakSet',
      'Symbol',
      'ArrayBuffer',
      'SharedArrayBuffer',
      'Atomics',
      'DataView',
      'Generator', 'GeneratorFunction',
      'AsyncFunction',
      'Reflect',
      'WebAssembly',
      'Intl',
      'Module',
    ], objectToStrValue)) {
      return objectToStrValue;
    }

    throw new Error(`typeName:${typeofValue}:${objectToStrValue}`);
  };
  break;
default:
  throw new Error(`typeName:${platformName()}`);
}

export const typeName = _typeName;

export default { typeName };
