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
 *isTypeCheck
 * description:
 *  check type for array argument.
 */
const isTypeCheck = (func, argsArray) => {
  const l = argsArray.length;
  if (l === 0) {
    return false;
  } else if (l === 1) {
    return func(argsArray[0]);
  } else {
    for (let i = 0; i < l; i += 1) {
      if (!func(argsArray[i])) {
        return false;
      }
    }
    return true;
  }
};

const isTypeCheckArgsFunc = (func) => {
  return (...args) =>isTypeCheck(func, args);
};

const isUndefinedAll   =isTypeCheckArgsFunc(isUndefined);
const isNullAll        =isTypeCheckArgsFunc(isNull);
const isNaNStrictAll   =isTypeCheckArgsFunc(isNaNStrict);
const isBooleanAll     =isTypeCheckArgsFunc(isBoolean);
const isNumberAll      =isTypeCheckArgsFunc(isNumber);
const isIntegerAll     =isTypeCheckArgsFunc(isInteger);
const isStringAll      =isTypeCheckArgsFunc(isString);
const isFunctionAll    =isTypeCheckArgsFunc(isFunction);
const isObjectAll      =isTypeCheckArgsFunc(isObject);
const isObjectTypeAll  =isTypeCheckArgsFunc(isObjectType);
const isArrayAll       =isTypeCheckArgsFunc(isArray);
const isArrayTypeAll   =isTypeCheckArgsFunc(isArrayType);
const isDateAll        =isTypeCheckArgsFunc(isDate);
const isRegExpAll      =isTypeCheckArgsFunc(isRegExp);
const isExceptionAll   =isTypeCheckArgsFunc(isException);
const isBooleanObjectAll =isTypeCheckArgsFunc(isBooleanObject);
const isNumberObjectAll  =isTypeCheckArgsFunc(isNumberObject);
const isStringObjectAll  =isTypeCheckArgsFunc(isStringObject);
const isEmptyObjectAll   =isTypeCheckArgsFunc(isEmptyObject);
const isEmptyArrayAll    =isTypeCheckArgsFunc(isEmptyArray);
const isSymbolAll      =isTypeCheckArgsFunc(isSymbol);
const isMapAll         =isTypeCheckArgsFunc(isMap);
const isWeakMapAll     =isTypeCheckArgsFunc(isWeakMap);
const isSetAll         =isTypeCheckArgsFunc(isSet);
const isWeakSetAll     =isTypeCheckArgsFunc(isWeakSet);

const isNotUndefinedAll  =isTypeCheckArgsFunc(isNotUndefined);
const isNotNullAll       =isTypeCheckArgsFunc(isNotNull);
const isNotNaNStrictAll  = isTypeCheckArgsFunc(isNotNaNStrict);
const isNotBooleanAll    =isTypeCheckArgsFunc(isNotBoolean);
const isNotNumberAll     =isTypeCheckArgsFunc(isNotNumber);
const isNotIntegerAll    =isTypeCheckArgsFunc(isNotInteger);
const isNotStringAll     =isTypeCheckArgsFunc(isNotString);
const isNotFunctionAll   =isTypeCheckArgsFunc(isNotFunction);
const isNotObjectAll     =isTypeCheckArgsFunc(isNotObject);
const isNotObjectTypeAll =isTypeCheckArgsFunc(isNotObjectType);
const isNotArrayAll      =isTypeCheckArgsFunc(isNotArray);
const isNotArrayTypeAll  =isTypeCheckArgsFunc(isNotArrayType);
const isNotDateAll       =isTypeCheckArgsFunc(isNotDate);
const isNotRegExpAll     =isTypeCheckArgsFunc(isNotRegExp);
const isNotExceptionAll  =isTypeCheckArgsFunc(isNotException);
const isNotBooleanObjectAll  =isTypeCheckArgsFunc(isNotBooleanObject);
const isNotNumberObjectAll   =isTypeCheckArgsFunc(isNotNumberObject);
const isNotStringObjectAll   =isTypeCheckArgsFunc(isNotStringObject);
const isNotEmptyObjectAll   =isTypeCheckArgsFunc(isNotEmptyObject);
const isNotEmptyArrayAll    =isTypeCheckArgsFunc(isNotEmptyArray);
const isNotSymbolAll     =isTypeCheckArgsFunc(isNotSymbol);
const isNotMapAll         =isTypeCheckArgsFunc(isNotMap);
const isNotWeakMapAll     =isTypeCheckArgsFunc(isNotWeakMap);
const isNotSetAll         =isTypeCheckArgsFunc(isNotSet);
const isNotWeakSetAll     =isTypeCheckArgsFunc(isNotWeakSet);

const isUndef     = isUndefinedAll;
const isBool      = isBooleanAll;
const isNum       = isNumberAll;
const isInt       = isIntegerAll;
const isStr       = isStringAll;
const isFunc      = isFunctionAll;
const isObj       = isObjectAll;
const isObjType   = isObjectTypeAll;
const isExcept    = isExceptionAll;
const isEmptyObj  = isEmptyObjectAll;

const isNotUndef    = isNotUndefinedAll;
const isNotBool     = isNotBooleanAll;
const isNotNum      = isNotNumberAll;
const isNotInt      = isNotIntegerAll;
const isNotStr      = isNotStringAll;
const isNotFunc     = isNotFunctionAll;
const isNotObj      = isNotObjectAll;
const isNotObjType  = isNotObjectTypeAll;
const isNotExcept   = isNotExceptionAll;
const isNotEmptyObj = isNotEmptyObjectAll;

module.exports = {
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

  isUndef,
  isBool, isNum, isInt, isStr,
  isFunc, isObj, isObjType,
  isExcept,
  isEmptyObj,

  isNotUndef,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc, isNotObj, isNotObjType,
  isNotExcept,
  isNotEmptyObj,

};

