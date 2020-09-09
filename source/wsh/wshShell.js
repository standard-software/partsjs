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
} from '../type/isType.js';

import {
  isWindowsScriptHost,
} from '../platform/platform.js';

let _shell;

export const Shell = function() {
  if (!isWindowsScriptHost()) {
    throw new Error('wsh.Shell can be used only in wsh platform');
  }

  if (!(this instanceof Shell)) {
    return new Shell();
  }
  if (isUndefined(_shell)) {
    _shell = new ActiveXObject('WScript.Shell');
  }
  return _shell;
};

export default {
  Shell,
};
