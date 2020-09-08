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
      if (isObjectLike(value)) {
        __propertyList(value, lineHead + '.' + key);
      } else {
        result += lineHead + '.' + key + '\n';
      }
    });
    return result;
  };
  return __propertyList(object, '');
};

export const propertyList = (object) => {

  if (!isObjectLike(object)) {
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
