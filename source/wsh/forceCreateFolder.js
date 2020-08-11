import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,
} from '../type/isType.js';

import {
  isWindowsScriptHost,
} from '../platform/platform.js';

import {
  FileSystemObject,
} from './wshFileSystemObject.js';

export const _forceCreateFolder = (folderPath) => {

  const fso = FileSystemObject();

  const parentFolderPath = fso.GetParentFolderName(folderPath);
  if (!fso.FolderExists(parentFolderPath)) {
    _forceCreateFolder(parentFolderPath);
  }
  if (!fso.FolderExists(folderPath)) {
    fso.CreateFolder(folderPath);
  }
};

export const forceCreateFolder = (folderPath) => {
  if (!isWindowsScriptHost()) {
    throw new Error('wsh.forceCreateFolder can be used only in wsh platform');
  }

  if (!isString(folderPath)) {
    throw new Error('forceCreateFolder args(folderPath) is not string');
  }

  return _forceCreateFolder(folderPath);
};

export default {
  _forceCreateFolder,
  forceCreateFolder,
};
