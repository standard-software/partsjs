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

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction,
  isNotObject, isNotObjectNormal, isNotObjectFromNull,
  isNotObjectLike, isNotModule,
  isNotArray, isNotArraySeries,
  isNotDate, isNotRegExp,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotEmptyObject, isNotEmptyArray,

} from '../type/isType.js';

import {
  isException,
  isNotException,
} from '../type/isException.js';

import {
  isSymbol, isNotSymbol,
} from '../type/isSymbol.js';

import {
  isMap, isNotMap,
  isWeakMap, isNotWeakMap,
} from '../type/isMap.js';

import {
  isSet, isNotSet,
  isWeakSet, isNotWeakSet,
} from '../type/isSet.js';

import {
  _isTypeArray,
} from '../type/isTypeAll.js';

export const _isTypeArrayCheckFunc = (func) => {
  return (array) => {
    if (!isArray(array)) {
      return false;
    }
    return _isTypeArray(func, array);
  };
};

export const isUndefinedArray         = _isTypeArrayCheckFunc(isUndefined);
export const isNullArray              = _isTypeArrayCheckFunc(isNull);
export const isNaNStrictArray         = _isTypeArrayCheckFunc(isNaNStrict);
export const isBooleanArray           = _isTypeArrayCheckFunc(isBoolean);
export const isNumberArray            = _isTypeArrayCheckFunc(isNumber);
export const isIntegerArray           = _isTypeArrayCheckFunc(isInteger);
export const isStringArray            = _isTypeArrayCheckFunc(isString);
export const isFunctionArray          = _isTypeArrayCheckFunc(isFunction);
export const isObjectArray            = _isTypeArrayCheckFunc(isObject);
export const isObjectNormalArray      = _isTypeArrayCheckFunc(isObjectNormal);
export const isObjectFromNullArray    = _isTypeArrayCheckFunc(isObjectFromNull);
export const isObjectLikeArray        = _isTypeArrayCheckFunc(isObjectLike);
export const isModuleArray            = _isTypeArrayCheckFunc(isModule);
export const isArrayArray             = _isTypeArrayCheckFunc(isArray);
export const isArraySeriesArray       = _isTypeArrayCheckFunc(isArraySeries);
export const isDateArray              = _isTypeArrayCheckFunc(isDate);
export const isRegExpArray            = _isTypeArrayCheckFunc(isRegExp);
export const isExceptionArray         = _isTypeArrayCheckFunc(isException);
export const isBooleanObjectArray     = _isTypeArrayCheckFunc(isBooleanObject);
export const isNumberObjectArray      = _isTypeArrayCheckFunc(isNumberObject);
export const isStringObjectArray      = _isTypeArrayCheckFunc(isStringObject);
export const isEmptyObjectArray       = _isTypeArrayCheckFunc(isEmptyObject);
export const isEmptyArrayArray        = _isTypeArrayCheckFunc(isEmptyArray);
export const isSymbolArray            = _isTypeArrayCheckFunc(isSymbol);
export const isMapArray               = _isTypeArrayCheckFunc(isMap);
export const isWeakMapArray           = _isTypeArrayCheckFunc(isWeakMap);
export const isSetArray               = _isTypeArrayCheckFunc(isSet);
export const isWeakSetArray           = _isTypeArrayCheckFunc(isWeakSet);

export const isNotUndefinedArray      = _isTypeArrayCheckFunc(isNotUndefined);
export const isNotNullArray           = _isTypeArrayCheckFunc(isNotNull);
export const isNotNaNStrictArray      = _isTypeArrayCheckFunc(isNotNaNStrict);
export const isNotBooleanArray        = _isTypeArrayCheckFunc(isNotBoolean);
export const isNotNumberArray         = _isTypeArrayCheckFunc(isNotNumber);
export const isNotIntegerArray        = _isTypeArrayCheckFunc(isNotInteger);
export const isNotStringArray         = _isTypeArrayCheckFunc(isNotString);
export const isNotFunctionArray       = _isTypeArrayCheckFunc(isNotFunction);
export const isNotObjectArray         = _isTypeArrayCheckFunc(isNotObject);
export const isNotObjectNormalArray   = _isTypeArrayCheckFunc(isNotObjectNormal);
export const isNotObjectFromNullArray = _isTypeArrayCheckFunc(isNotObjectFromNull);
export const isNotObjectLikeArray     = _isTypeArrayCheckFunc(isNotObjectLike);
export const isNotModuleArray         = _isTypeArrayCheckFunc(isNotModule);
export const isNotArrayArray          = _isTypeArrayCheckFunc(isNotArray);
export const isNotArraySeriesArray      = _isTypeArrayCheckFunc(isNotArraySeries);
export const isNotDateArray           = _isTypeArrayCheckFunc(isNotDate);
export const isNotRegExpArray         = _isTypeArrayCheckFunc(isNotRegExp);
export const isNotExceptionArray      = _isTypeArrayCheckFunc(isNotException);
export const isNotBooleanObjectArray  = _isTypeArrayCheckFunc(isNotBooleanObject);
export const isNotNumberObjectArray   = _isTypeArrayCheckFunc(isNotNumberObject);
export const isNotStringObjectArray   = _isTypeArrayCheckFunc(isNotStringObject);
export const isNotEmptyObjectArray    = _isTypeArrayCheckFunc(isNotEmptyObject);
export const isNotEmptyArrayArray     = _isTypeArrayCheckFunc(isNotEmptyArray);
export const isNotSymbolArray         = _isTypeArrayCheckFunc(isNotSymbol);
export const isNotMapArray            = _isTypeArrayCheckFunc(isNotMap);
export const isNotWeakMapArray        = _isTypeArrayCheckFunc(isNotWeakMap);
export const isNotSetArray            = _isTypeArrayCheckFunc(isNotSet);
export const isNotWeakSetArray        = _isTypeArrayCheckFunc(isNotWeakSet);

export default {
  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray,
  isObjectArray, isObjectNormalArray, isObjectFromNullArray,
  isObjectLikeArray, isModuleArray,
  isArrayArray, isArraySeriesArray,
  isDateArray, isRegExpArray,
  isExceptionArray,
  isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
  isEmptyObjectArray, isEmptyArrayArray,
  isSymbolArray,
  isMapArray, isWeakMapArray,
  isSetArray, isWeakSetArray,

  isNotUndefinedArray, isNotNullArray, isNotNaNStrictArray,
  isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
  isNotFunctionArray,
  isNotObjectArray, isNotObjectNormalArray, isNotObjectFromNullArray,
  isNotObjectLikeArray, isNotModuleArray,
  isNotArrayArray, isNotArraySeriesArray,
  isNotDateArray, isNotRegExpArray,
  isNotExceptionArray,
  isNotBooleanObjectArray, isNotNumberObjectArray, isNotStringObjectArray,
  isNotEmptyObjectArray, isNotEmptyArrayArray,
  isNotSymbolArray,
  isNotMapArray, isNotWeakMapArray,
  isNotSetArray, isNotWeakSetArray,

};

