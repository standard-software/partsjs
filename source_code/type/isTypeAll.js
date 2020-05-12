const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction, isNotObject, isNotObjectType,
  isNotArray, isNotArrayType,
  isNotDate, isNotRegExp,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotEmptyObject, isNotEmptyArray,

} = require('../type/isType.js');

const {
  isException,
  isNotException,
} = require('../type/isException.js');

const {
  isSymbol, isNotSymbol,
} = require('../type/isSymbol.js');

const {
  isMap, isNotMap,
  isWeakMap, isNotWeakMap,
} = require('../type/isMap.js');

const {
  isSet, isNotSet,
  isWeakSet, isNotWeakSet,
} = require('../type/isSet.js');

/**
 * _isTypeArray
 * check type for array argument.
 */
const _isTypeArray = (isTypeFunc, argsArray) => {
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

const _isTypeAllCheckFunc = func => {
  return (...args) => _isTypeArray(func, args);
};

const isUndefinedAll        = _isTypeAllCheckFunc(isUndefined);
const isNullAll             = _isTypeAllCheckFunc(isNull);
const isNaNStrictAll        = _isTypeAllCheckFunc(isNaNStrict);
const isBooleanAll          = _isTypeAllCheckFunc(isBoolean);
const isNumberAll           = _isTypeAllCheckFunc(isNumber);
const isIntegerAll          = _isTypeAllCheckFunc(isInteger);
const isStringAll           = _isTypeAllCheckFunc(isString);
const isFunctionAll         = _isTypeAllCheckFunc(isFunction);
const isObjectAll           = _isTypeAllCheckFunc(isObject);
const isObjectTypeAll       = _isTypeAllCheckFunc(isObjectType);
const isArrayAll            = _isTypeAllCheckFunc(isArray);
const isArrayTypeAll        = _isTypeAllCheckFunc(isArrayType);
const isDateAll             = _isTypeAllCheckFunc(isDate);
const isRegExpAll           = _isTypeAllCheckFunc(isRegExp);
const isExceptionAll        = _isTypeAllCheckFunc(isException);
const isBooleanObjectAll    = _isTypeAllCheckFunc(isBooleanObject);
const isNumberObjectAll     = _isTypeAllCheckFunc(isNumberObject);
const isStringObjectAll     = _isTypeAllCheckFunc(isStringObject);
const isEmptyObjectAll      = _isTypeAllCheckFunc(isEmptyObject);
const isEmptyArrayAll       = _isTypeAllCheckFunc(isEmptyArray);
const isSymbolAll           = _isTypeAllCheckFunc(isSymbol);
const isMapAll              = _isTypeAllCheckFunc(isMap);
const isWeakMapAll          = _isTypeAllCheckFunc(isWeakMap);
const isSetAll              = _isTypeAllCheckFunc(isSet);
const isWeakSetAll          = _isTypeAllCheckFunc(isWeakSet);

const isNotUndefinedAll     = _isTypeAllCheckFunc(isNotUndefined);
const isNotNullAll          = _isTypeAllCheckFunc(isNotNull);
const isNotNaNStrictAll     = _isTypeAllCheckFunc(isNotNaNStrict);
const isNotBooleanAll       = _isTypeAllCheckFunc(isNotBoolean);
const isNotNumberAll        = _isTypeAllCheckFunc(isNotNumber);
const isNotIntegerAll       = _isTypeAllCheckFunc(isNotInteger);
const isNotStringAll        = _isTypeAllCheckFunc(isNotString);
const isNotFunctionAll      = _isTypeAllCheckFunc(isNotFunction);
const isNotObjectAll        = _isTypeAllCheckFunc(isNotObject);
const isNotObjectTypeAll    = _isTypeAllCheckFunc(isNotObjectType);
const isNotArrayAll         = _isTypeAllCheckFunc(isNotArray);
const isNotArrayTypeAll     = _isTypeAllCheckFunc(isNotArrayType);
const isNotDateAll          = _isTypeAllCheckFunc(isNotDate);
const isNotRegExpAll        = _isTypeAllCheckFunc(isNotRegExp);
const isNotExceptionAll     = _isTypeAllCheckFunc(isNotException);
const isNotBooleanObjectAll = _isTypeAllCheckFunc(isNotBooleanObject);
const isNotNumberObjectAll  = _isTypeAllCheckFunc(isNotNumberObject);
const isNotStringObjectAll  = _isTypeAllCheckFunc(isNotStringObject);
const isNotEmptyObjectAll   = _isTypeAllCheckFunc(isNotEmptyObject);
const isNotEmptyArrayAll    = _isTypeAllCheckFunc(isNotEmptyArray);
const isNotSymbolAll        = _isTypeAllCheckFunc(isNotSymbol);
const isNotMapAll           = _isTypeAllCheckFunc(isNotMap);
const isNotWeakMapAll       = _isTypeAllCheckFunc(isNotWeakMap);
const isNotSetAll           = _isTypeAllCheckFunc(isNotSet);
const isNotWeakSetAll       = _isTypeAllCheckFunc(isNotWeakSet);

const isUndefAll        = isUndefinedAll;
const isBoolAll         = isBooleanAll;
const isNumAll          = isNumberAll;
const isIntAll          = isIntegerAll;
const isStrAll          = isStringAll;
const isFuncAll         = isFunctionAll;
const isObjAll          = isObjectAll;
const isObjTypeAll      = isObjectTypeAll;
const isExceptAll       = isExceptionAll;
const isEmptyObjAll     = isEmptyObjectAll;

const isNotUndefAll     = isNotUndefinedAll;
const isNotBoolAll      = isNotBooleanAll;
const isNotNumAll       = isNotNumberAll;
const isNotIntAll       = isNotIntegerAll;
const isNotStrAll       = isNotStringAll;
const isNotFuncAll      = isNotFunctionAll;
const isNotObjAll       = isNotObjectAll;
const isNotObjTypeAll   = isNotObjectTypeAll;
const isNotExceptAll    = isNotExceptionAll;
const isNotEmptyObjAll  = isNotEmptyObjectAll;

module.exports = {
  _isTypeArray,

  isUndefinedAll, isNullAll, isNaNStrictAll,
  isBooleanAll, isNumberAll, isIntegerAll, isStringAll,
  isFunctionAll, isObjectAll, isObjectTypeAll,
  isArrayAll, isArrayTypeAll,
  isDateAll, isRegExpAll,
  isExceptionAll,
  isBooleanObjectAll, isNumberObjectAll, isStringObjectAll,
  isEmptyObjectAll, isEmptyArrayAll,
  isSymbolAll,
  isMapAll, isWeakMapAll,
  isSetAll, isWeakSetAll,

  isNotUndefinedAll, isNotNullAll, isNotNaNStrictAll,
  isNotBooleanAll, isNotNumberAll, isNotIntegerAll, isNotStringAll,
  isNotFunctionAll, isNotObjectAll, isNotObjectTypeAll,
  isNotArrayAll, isNotArrayTypeAll,
  isNotDateAll, isNotRegExpAll,
  isNotExceptionAll,
  isNotBooleanObjectAll, isNotNumberObjectAll, isNotStringObjectAll,
  isNotEmptyObjectAll, isNotEmptyArrayAll,
  isNotSymbolAll,
  isNotMapAll, isNotWeakMapAll,
  isNotSetAll, isNotWeakSetAll,

  isUndefAll,
  isBoolAll, isNumAll, isIntAll, isStrAll,
  isFuncAll, isObjAll, isObjTypeAll,
  isExceptAll,
  isEmptyObjAll,

  isNotUndefAll,
  isNotBoolAll, isNotNumAll, isNotIntAll, isNotStrAll,
  isNotFuncAll, isNotObjAll, isNotObjTypeAll,
  isNotExceptAll,
  isNotEmptyObjAll,

};

