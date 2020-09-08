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

/**
 * propertyList
 */
export const _propertyList = (object) => {
  let result = '';
  const lineHead = '';
  const __propertyList = (object, lineHead) => {
    for (const [key, value] of Object.entries(object)) {
      if (isObject(value)) {
        __propertyList(value, lineHead + '.' + key);
        continue;
      }
      result += lineHead + '.' + key + '\n';
    }
    return result;
  };
  return __propertyList(object, '');
};

export const propertyList = (object) => {

  if (!isObject(object)) {
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
