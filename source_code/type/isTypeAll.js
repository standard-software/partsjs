const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isObjectType,
  _isArray, _isArrayType,
  _isDate, _isRegExp,
  _isBooleanObject, _isNumberObject, _isStringObject,
  _isEmptyObject, _isEmptyArray,

  _isNotUndefined, _isNotNull, _isNotNaNStrict,
  _isNotBoolean, _isNotNumber, _isNotInteger, _isNotString,
  _isNotFunction, _isNotObject, _isNotObjectType,
  _isNotArray, _isNotArrayType,
  _isNotDate, _isNotRegExp,
  _isNotBooleanObject, _isNotNumberObject, _isNotStringObject,
  _isNotEmptyObject, _isNotEmptyArray,

} = require('../type/isType.js');

const {
  _isException,
  _isNotException,
} = require('../type/_isException.js');

const {
  _isSymbol, _isNotSymbol,
} = require('../type/_isSymbol.js');

const {
  _isMap, _isNotMap,
  _isWeakMap, _isNotWeakMap,
} = require('../type/_isMap.js');

const {
  _isSet, _isNotSet,
  _isWeakSet, _isNotWeakSet,
} = require('../type/_isSet.js');

/**
 * _isTypeCheck
 * description:
 *  check type for array argument.
 */
const _isTypeCheck = (func, argsArray) => {
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

const _isTypeCheckArgsFunc = (func) => {
  return (...args) => _isTypeCheck(func, args);
};

const isUndefinedAll   = _isTypeCheckArgsFunc(_isUndefined);
const isNullAll        = _isTypeCheckArgsFunc(_isNull);
const isNaNStrictAll   = _isTypeCheckArgsFunc(_isNaNStrict);
const isBooleanAll     = _isTypeCheckArgsFunc(_isBoolean);
const isNumberAll      = _isTypeCheckArgsFunc(_isNumber);
const isIntegerAll     = _isTypeCheckArgsFunc(_isInteger);
const isStringAll      = _isTypeCheckArgsFunc(_isString);
const isFunctionAll    = _isTypeCheckArgsFunc(_isFunction);
const isObjectAll      = _isTypeCheckArgsFunc(_isObject);
const isObjectTypeAll  = _isTypeCheckArgsFunc(_isObjectType);
const isArrayAll       = _isTypeCheckArgsFunc(_isArray);
const isArrayTypeAll   = _isTypeCheckArgsFunc(_isArrayType);
const isDateAll        = _isTypeCheckArgsFunc(_isDate);
const isRegExpAll      = _isTypeCheckArgsFunc(_isRegExp);
const isExceptionAll   = _isTypeCheckArgsFunc(_isException);
const isBooleanObjectAll = _isTypeCheckArgsFunc(_isBooleanObject);
const isNumberObjectAll  = _isTypeCheckArgsFunc(_isNumberObject);
const isStringObjectAll  = _isTypeCheckArgsFunc(_isStringObject);
const isEmptyObjectAll   = _isTypeCheckArgsFunc(_isEmptyObject);
const isEmptyArrayAll    = _isTypeCheckArgsFunc(_isEmptyArray);
const isSymbolAll      = _isTypeCheckArgsFunc(_isSymbol);
const isMapAll         = _isTypeCheckArgsFunc(_isMap);
const isWeakMapAll     = _isTypeCheckArgsFunc(_isWeakMap);
const isSetAll         = _isTypeCheckArgsFunc(_isSet);
const isWeakSetAll     = _isTypeCheckArgsFunc(_isWeakSet);

const isNotUndefinedAll  = _isTypeCheckArgsFunc(_isNotUndefined);
const isNotNullAll       = _isTypeCheckArgsFunc(_isNotNull);
const isNotNaNStrict  = _isTypeCheckArgsFunc(_isNotNaNStrict);
const isNotBooleanAll    = _isTypeCheckArgsFunc(_isNotBoolean);
const isNotNumberAll     = _isTypeCheckArgsFunc(_isNotNumber);
const isNotIntegerAll    = _isTypeCheckArgsFunc(_isNotInteger);
const isNotStringAll     = _isTypeCheckArgsFunc(_isNotString);
const isNotFunctionAll   = _isTypeCheckArgsFunc(_isNotFunction);
const isNotObjectAll     = _isTypeCheckArgsFunc(_isNotObject);
const isNotObjectTypeAll = _isTypeCheckArgsFunc(_isNotObjectType);
const isNotArrayAll      = _isTypeCheckArgsFunc(_isNotArray);
const isNotArrayTypeAll  = _isTypeCheckArgsFunc(_isNotArrayType);
const isNotDateAll       = _isTypeCheckArgsFunc(_isNotDate);
const isNotRegExpAll     = _isTypeCheckArgsFunc(_isNotRegExp);
const isNotExceptionAll  = _isTypeCheckArgsFunc(_isNotException);
const isNotBooleanObjectAll  = _isTypeCheckArgsFunc(_isNotBooleanObject);
const isNotNumberObjectAll   = _isTypeCheckArgsFunc(_isNotNumberObject);
const isNotStringObjectAll   = _isTypeCheckArgsFunc(_isNotStringObject);
const isNotEmptyObjectAll   = _isTypeCheckArgsFunc(_isNotEmptyObject);
const isNotEmptyArrayAll    = _isTypeCheckArgsFunc(_isNotEmptyArray);
const isNotSymbolAll     = _isTypeCheckArgsFunc(_isNotSymbol);
const isNotMapAll         = _isTypeCheckArgsFunc(_isNotMap);
const isNotWeakMapAll     = _isTypeCheckArgsFunc(_isNotWeakMap);
const isNotSetAll         = _isTypeCheckArgsFunc(_isNotSet);
const isNotWeakSetAll     = _isTypeCheckArgsFunc(_isNotWeakSet);

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

  isNotUndefinedAll, isNotNullAll, isNotNaNStrict,
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

