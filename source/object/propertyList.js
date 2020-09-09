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

import {
  loop,
} from '../syntax/loop.js';

import {
  objectEntries,
} from '../object/objectEntries.js';

/**
 * propertyList
 */
export const _propertyList = (object) => {
  let result = '';
  const lineHead = '';
  const __propertyList = (object, lineHead) => {
    loop(objectEntries(object))(([key, value]) => {
      if (isObject(value) || isModule(value)) {
        __propertyList(value, lineHead + '.' + key);
      } else {
        result += `${lineHead}.${key}:${objectToString(value)}:${typeof value}\n`;
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
