import isType_js from './isType.js';
import isException_js from './isException.js';
import isSymbol_js from './isSymbol.js';
import isMap_js from './isMap.js';
import isSet_js from './isSet.js';
import isTypeAll_js from './isTypeAll.js';
import isTypeArray_js from './isTypeArray.js';

const {
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
} = isType_js;

// Another name
export const isObjectType     = isObjectLike;
export const isArrayType      = isArraySeries;

// Short name
export const isUndef          = isUndefined;
export const isBool           = isBoolean;
export const isNum            = isNumber;
export const isInt            = isInteger;
export const isStr            = isString;
export const isFunc           = isFunction;
export const isObj            = isObject;
export const isObjNormal      = isObjectNormal;
export const isObjFromNull    = isObjectFromNull;
export const isObjLike        = isObjectLike;
export const isEmptyObj       = isEmptyObject;
export const isObjType        = isObjectType;

// Not Another name
export const isNotObjectType  = isNotObjectLike;
export const isNotArrayType   = isNotArraySeries;

// Not Short name
export const isNotUndef       = isNotUndefined;
export const isNotBool        = isNotBoolean;
export const isNotNum         = isNotNumber;
export const isNotInt         = isNotInteger;
export const isNotStr         = isNotString;
export const isNotFunc        = isNotFunction;
export const isNotObj         = isNotObject;
export const isNotObjNormal   = isNotObjectNormal;
export const isNotObjFromNull = isNotObjectFromNull;
export const isNotObjLike     = isNotObjectLike;
export const isNotEmptyObj    = isNotEmptyObject;
export const isNotObjType     = isNotObjectType;

const {
  isException,
  isNotException,
} = isException_js;

export const isExcept         = isException;
export const isNotExcept      = isNotException;

const {
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
} = isTypeAll_js;

// Another name
export const isObjectTypeAll      = isObjectLikeAll;
export const isArrayTypeAll       = isArraySeriesAll;

// Short name
export const isUndefAll           = isUndefinedAll;
export const isBoolAll            = isBooleanAll;
export const isNumAll             = isNumberAll;
export const isIntAll             = isIntegerAll;
export const isStrAll             = isStringAll;
export const isFuncAll            = isFunctionAll;
export const isObjAll             = isObjectAll;
export const isObjNormalAll       = isObjectNormalAll;
export const isObjFromNullAll     = isObjectFromNullAll;
export const isObjLikeAll         = isObjectLikeAll;
export const isEmptyObjAll        = isEmptyObjectAll;
export const isObjTypeAll         = isObjectTypeAll;
export const isExceptAll          = isExceptionAll;

// Not Another name
export const isNotObjectTypeAll   = isNotObjectLikeAll;
export const isNotArrayTypeAll    = isNotArraySeriesAll;

// Not Short name
export const isNotUndefAll        = isNotUndefinedAll;
export const isNotBoolAll         = isNotBooleanAll;
export const isNotNumAll          = isNotNumberAll;
export const isNotIntAll          = isNotIntegerAll;
export const isNotStrAll          = isNotStringAll;
export const isNotFuncAll         = isNotFunctionAll;
export const isNotObjAll          = isNotObjectAll;
export const isNotObjNormalAll    = isNotObjectNormalAll;
export const isNotObjFromNullAll  = isNotObjectFromNullAll;
export const isNotObjLikeAll      = isNotObjectLikeAll;
export const isNotEmptyObjAll     = isNotEmptyObjectAll;
export const isNotObjTypeAll      = isNotObjectTypeAll;
export const isNotExceptAll       = isNotExceptionAll;

const {
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
} = isTypeArray_js;

// Another name
export const isObjectTypeArray      = isObjectLikeArray;
export const isArrayTypeArray       = isArraySeriesArray;

// Short name
export const isUndefArray           = isUndefinedArray;
export const isBoolArray            = isBooleanArray;
export const isNumArray             = isNumberArray;
export const isIntArray             = isIntegerArray;
export const isStrArray             = isStringArray;
export const isFuncArray            = isFunctionArray;
export const isObjArray             = isObjectArray;
export const isObjNormalArray       = isObjectNormalArray;
export const isObjFromNullArray     = isObjectFromNullArray;
export const isObjLikeArray         = isObjectLikeArray;
export const isEmptyObjArray        = isEmptyObjectArray;
export const isObjTypeArray         = isObjectTypeArray;
export const isExceptArray          = isExceptionArray;

// Not Another name
export const isNotObjectTypeArray   = isNotObjectLikeArray;
export const isNotArrayTypeArray    = isNotArraySeriesArray;

// Not Short name
export const isNotUndefArray        = isNotUndefinedArray;
export const isNotBoolArray         = isNotBooleanArray;
export const isNotNumArray          = isNotNumberArray;
export const isNotIntArray          = isNotIntegerArray;
export const isNotStrArray          = isNotStringArray;
export const isNotFuncArray         = isNotFunctionArray;
export const isNotObjArray          = isNotObjectArray;
export const isNotObjNormalArray    = isNotObjectNormalArray;
export const isNotObjFromNullArray  = isNotObjectFromNullArray;
export const isNotObjLikeArray      = isNotObjectLikeArray;
export const isNotEmptyObjArray     = isNotEmptyObjectArray;
export const isNotObjTypeArray      = isNotObjectTypeArray;
export const isNotExceptArray       = isNotExceptionArray;

export default {
  isObjectType, isArrayType,
  isUndef,
  isBool, isNum, isInt, isStr,
  isFunc,
  isObj, isObjNormal, isObjFromNull,
  isObjLike,
  isEmptyObj,
  isObjType,
  isExcept,
  // -----
  isObjectTypeAll, isArrayTypeAll,
  isUndefAll,
  isBoolAll, isNumAll, isIntAll, isStrAll,
  isFuncAll,
  isObjAll, isObjNormalAll, isObjFromNullAll,
  isObjLikeAll,
  isEmptyObjAll,
  isObjTypeAll,
  isExceptAll,
  // -----
  isObjectTypeArray, isArrayTypeArray,
  isUndefArray,
  isBoolArray, isNumArray, isIntArray, isStrArray,
  isFuncArray,
  isObjArray, isObjNormalArray, isObjFromNullArray,
  isObjLikeArray,
  isEmptyObjArray,
  isObjTypeArray,
  isExceptArray,
  // -----
  isNotObjectType, isNotArrayType,
  isNotUndef,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc,
  isNotObj, isNotObjNormal, isNotObjFromNull,
  isNotObjLike,
  isNotEmptyObj,
  isNotObjType,
  isNotExcept,
  // -----
  isNotObjectTypeAll, isNotArrayTypeAll,
  isNotUndefAll,
  isNotBoolAll, isNotNumAll, isNotIntAll, isNotStrAll,
  isNotFuncAll,
  isNotObjAll, isNotObjNormalAll, isNotObjFromNullAll,
  isNotObjLikeAll,
  isNotEmptyObjAll,
  isNotObjTypeAll,
  isNotExceptAll,
  // -----
  isNotObjectTypeArray, isNotArrayTypeArray,
  isNotUndefArray,
  isNotBoolArray, isNotNumArray, isNotIntArray, isNotStrArray,
  isNotFuncArray,
  isNotObjArray, isNotObjNormalArray, isNotObjFromNullArray,
  isNotObjLikeArray,
  isNotEmptyObjArray,
  isNotObjTypeArray,
  isNotExceptArray,
};
