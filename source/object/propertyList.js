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

  objectToString,
} from '../type/isType.js';

import { loop } from '../syntax/loop.js';
import { objectEntries } from '../object/objectEntries.js';

/**
 * propertyList
 */
export const _propertyList = (
  object,
  func = value => {
    if (isObject(value) || isModule(value)) {
      return;
    }
    return `${objectToString(value)}:${typeof value}`;
  },
) => {
  let result = '';
  const __propertyList = (object, lineHead) => {
    loop(objectEntries(object))(([key, value]) => {
      const output = func(value);
      if (isString(output)) {
        result += `${lineHead}.${key}:${output}\n`;
      }
      if (isObject(value) || isModule(value)) {
        __propertyList(value, lineHead + '.' + key);
      }
    });
    return result;
  };
  return __propertyList(object, '');
};

export const propertyList = (object) => {
  if (!(isObject(object) || isModule(object))) {
    throw new TypeError(
      'propertyList args(object) is not object',
    );
  }

  return _propertyList(object);
};

export default {
  _propertyList,
  propertyList,
};
