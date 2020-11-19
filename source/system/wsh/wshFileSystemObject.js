import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,
} from '../../type/isType.js';

import {
  isWindowsScriptHost,
} from '../../platform/platform.js';

let _fso;

export const FileSystemObject = function() {
  if (!isWindowsScriptHost()) {
    throw new Error('wsh.FileSystemObject can be used only in wsh platform');
  }

  if (!(this instanceof FileSystemObject)) {
    return new FileSystemObject();
  }
  if (isUndefined(_fso)) {
    _fso = new ActiveXObject('Scripting.FileSystemObject');
  }
  return _fso;
};

export default {
  FileSystemObject,
};
