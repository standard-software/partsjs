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

/**
 * _isTypeArray
 * check type for array argument.
 */
export const _isTypeArray = (isTypeFunc, argsArray) => {
  const l = argsArray.length;
  if (l === 0) {
    return false;
  } else if (l === 1) {
    return isTypeFunc(argsArray[0]);
  } else {
    for (let i = 0; i < l; i += 1) {
      if (!isTypeFunc(argsArray[i])) {
        return false;
      }
    }
    return true;
  }
};

export const _isTypeAllCheckFunc = func => {
  return (...args) => _isTypeArray(func, args);
};

export const isUndefinedAll         = _isTypeAllCheckFunc(isUndefined);
export const isNullAll              = _isTypeAllCheckFunc(isNull);
export const isNaNStrictAll         = _isTypeAllCheckFunc(isNaNStrict);
export const isBooleanAll           = _isTypeAllCheckFunc(isBoolean);
export const isNumberAll            = _isTypeAllCheckFunc(isNumber);
export const isIntegerAll           = _isTypeAllCheckFunc(isInteger);
export const isStringAll            = _isTypeAllCheckFunc(isString);
export const isFunctionAll          = _isTypeAllCheckFunc(isFunction);
export const isObjectAll            = _isTypeAllCheckFunc(isObject);
export const isObjectNormalAll      = _isTypeAllCheckFunc(isObjectNormal);
export const isObjectFromNullAll    = _isTypeAllCheckFunc(isObjectFromNull);
export const isObjectLikeAll        = _isTypeAllCheckFunc(isObjectLike);
export const isModuleAll            = _isTypeAllCheckFunc(isModule);
export const isArrayAll             = _isTypeAllCheckFunc(isArray);
export const isArraySeriesAll       = _isTypeAllCheckFunc(isArraySeries);
export const isDateAll              = _isTypeAllCheckFunc(isDate);
export const isRegExpAll            = _isTypeAllCheckFunc(isRegExp);
export const isExceptionAll         = _isTypeAllCheckFunc(isException);
export const isBooleanObjectAll     = _isTypeAllCheckFunc(isBooleanObject);
export const isNumberObjectAll      = _isTypeAllCheckFunc(isNumberObject);
export const isStringObjectAll      = _isTypeAllCheckFunc(isStringObject);
export const isEmptyObjectAll       = _isTypeAllCheckFunc(isEmptyObject);
export const isEmptyArrayAll        = _isTypeAllCheckFunc(isEmptyArray);
export const isSymbolAll            = _isTypeAllCheckFunc(isSymbol);
export const isMapAll               = _isTypeAllCheckFunc(isMap);
export const isWeakMapAll           = _isTypeAllCheckFunc(isWeakMap);
export const isSetAll               = _isTypeAllCheckFunc(isSet);
export const isWeakSetAll           = _isTypeAllCheckFunc(isWeakSet);

export const isNotUndefinedAll      = _isTypeAllCheckFunc(isNotUndefined);
export const isNotNullAll           = _isTypeAllCheckFunc(isNotNull);
export const isNotNaNStrictAll      = _isTypeAllCheckFunc(isNotNaNStrict);
export const isNotBooleanAll        = _isTypeAllCheckFunc(isNotBoolean);
export const isNotNumberAll         = _isTypeAllCheckFunc(isNotNumber);
export const isNotIntegerAll        = _isTypeAllCheckFunc(isNotInteger);
export const isNotStringAll         = _isTypeAllCheckFunc(isNotString);
export const isNotFunctionAll       = _isTypeAllCheckFunc(isNotFunction);
export const isNotObjectAll         = _isTypeAllCheckFunc(isNotObject);
export const isNotObjectNormalAll   = _isTypeAllCheckFunc(isNotObjectNormal);
export const isNotObjectFromNullAll = _isTypeAllCheckFunc(isNotObjectFromNull);
export const isNotObjectLikeAll     = _isTypeAllCheckFunc(isNotObjectLike);
export const isNotModuleAll         = _isTypeAllCheckFunc(isNotModule);
export const isNotArrayAll          = _isTypeAllCheckFunc(isNotArray);
export const isNotArraySeriesAll    = _isTypeAllCheckFunc(isNotArraySeries);
export const isNotDateAll           = _isTypeAllCheckFunc(isNotDate);
export const isNotRegExpAll         = _isTypeAllCheckFunc(isNotRegExp);
export const isNotExceptionAll      = _isTypeAllCheckFunc(isNotException);
export const isNotBooleanObjectAll  = _isTypeAllCheckFunc(isNotBooleanObject);
export const isNotNumberObjectAll   = _isTypeAllCheckFunc(isNotNumberObject);
export const isNotStringObjectAll   = _isTypeAllCheckFunc(isNotStringObject);
export const isNotEmptyObjectAll    = _isTypeAllCheckFunc(isNotEmptyObject);
export const isNotEmptyArrayAll     = _isTypeAllCheckFunc(isNotEmptyArray);
export const isNotSymbolAll         = _isTypeAllCheckFunc(isNotSymbol);
export const isNotMapAll            = _isTypeAllCheckFunc(isNotMap);
export const isNotWeakMapAll        = _isTypeAllCheckFunc(isNotWeakMap);
export const isNotSetAll            = _isTypeAllCheckFunc(isNotSet);
export const isNotWeakSetAll        = _isTypeAllCheckFunc(isNotWeakSet);

export default {
  _isTypeArray,

  isUndefinedAll, isNullAll, isNaNStrictAll,
  isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
  isFunctionAll,
  isObjectAll, isObjectNormalAll, isObjectFromNullAll,
  isObjectLikeAll, isModuleAll,
  isArrayAll, isArraySeriesAll,
  isDateAll, isRegExpAll,
  isBooleanObjectAll, isNumberObjectAll, isStringObjectAll,
  isEmptyObjectAll, isEmptyArrayAll,

  isExceptionAll,
  isSymbolAll,
  isMapAll, isWeakMapAll,
  isSetAll, isWeakSetAll,

  isNotUndefinedAll, isNotNullAll, isNotNaNStrictAll,
  isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
  isNotFunctionAll,
  isNotObjectAll, isNotObjectNormalAll, isNotObjectFromNullAll,
  isNotObjectLikeAll, isNotModuleAll,
  isNotArrayAll, isNotArraySeriesAll,
  isNotDateAll, isNotRegExpAll,
  isNotBooleanObjectAll, isNotNumberObjectAll, isNotStringObjectAll,
  isNotEmptyObjectAll, isNotEmptyArrayAll,

  isNotExceptionAll,
  isNotSymbolAll,
  isNotMapAll, isNotWeakMapAll,
  isNotSetAll, isNotWeakSetAll,

};

