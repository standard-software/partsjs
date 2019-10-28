const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isObjectType,
  _isArray, _isArrayType,
  _isDate, _isRegExp,
  _isBooleanObject, _isNumberObject, _isStringObject,

  _isNotUndefined, _isNotNull, _isNotNaNStrict,
  _isNotBoolean, _isNotNumber, _isNotInteger, _isNotString,
  _isNotFunction, _isNotObject, _isNotObjectType,
  _isNotArray, _isNotArrayType,
  _isNotDate, _isNotRegExp,
  _isNotBooleanObject, _isNotNumberObject, _isNotStringObject,

} = require('../type/_isType.js');

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
  var l = argsArray.length;
  if (l === 0) {
    return false;
  } else if (l === 1) {
    return func(argsArray[0]);
  } else {
    for (var i = 0; i < l; i += 1) {
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

const _isTypeCheckArrayFunc = (func) => {
  return (value) => _isTypeCheck(func, value);
};

const isUndefined   = _isTypeCheckArgsFunc(_isUndefined);
const isNull        = _isTypeCheckArgsFunc(_isNull);
const isNaNStrict   = _isTypeCheckArgsFunc(_isNaNStrict);
const isBoolean     = _isTypeCheckArgsFunc(_isBoolean);
const isNumber      = _isTypeCheckArgsFunc(_isNumber);
const isInteger     = _isTypeCheckArgsFunc(_isInteger);
const isString      = _isTypeCheckArgsFunc(_isString);
const isFunction    = _isTypeCheckArgsFunc(_isFunction);
const isObject      = _isTypeCheckArgsFunc(_isObject);
const isObjectType  = _isTypeCheckArgsFunc(_isObjectType);
const isArray       = _isTypeCheckArgsFunc(_isArray);
const isArrayType   = _isTypeCheckArgsFunc(_isArrayType);
const isDate        = _isTypeCheckArgsFunc(_isDate);
const isRegExp      = _isTypeCheckArgsFunc(_isRegExp);
const isException   = _isTypeCheckArgsFunc(_isException);
const isBooleanObject = _isTypeCheckArgsFunc(_isBooleanObject);
const isNumberObject  = _isTypeCheckArgsFunc(_isNumberObject);
const isStringObject  = _isTypeCheckArgsFunc(_isStringObject);
const isSymbol      = _isTypeCheckArgsFunc(_isSymbol);
const isMap         = _isTypeCheckArgsFunc(_isMap);
const isWeakMap     = _isTypeCheckArgsFunc(_isWeakMap);
const isSet         = _isTypeCheckArgsFunc(_isSet);
const isWeakSet     = _isTypeCheckArgsFunc(_isWeakSet);

const isNotUndefined  = _isTypeCheckArgsFunc(_isNotUndefined);
const isNotNull       = _isTypeCheckArgsFunc(_isNotNull);
const isNotNaNStrict  = _isTypeCheckArgsFunc(_isNotNaNStrict);
const isNotBoolean    = _isTypeCheckArgsFunc(_isNotBoolean);
const isNotNumber     = _isTypeCheckArgsFunc(_isNotNumber);
const isNotInteger    = _isTypeCheckArgsFunc(_isNotInteger);
const isNotString     = _isTypeCheckArgsFunc(_isNotString);
const isNotFunction   = _isTypeCheckArgsFunc(_isNotFunction);
const isNotObject     = _isTypeCheckArgsFunc(_isNotObject);
const isNotObjectType = _isTypeCheckArgsFunc(_isNotObjectType);
const isNotArray      = _isTypeCheckArgsFunc(_isNotArray);
const isNotArrayType  = _isTypeCheckArgsFunc(_isNotArrayType);
const isNotDate       = _isTypeCheckArgsFunc(_isNotDate);
const isNotRegExp     = _isTypeCheckArgsFunc(_isNotRegExp);
const isNotException  = _isTypeCheckArgsFunc(_isNotException);
const isNotBooleanObject  = _isTypeCheckArgsFunc(_isNotBooleanObject);
const isNotNumberObject   = _isTypeCheckArgsFunc(_isNotNumberObject);
const isNotStringObject   = _isTypeCheckArgsFunc(_isNotStringObject);
const isNotSymbol     = _isTypeCheckArgsFunc(_isNotSymbol);
const isNotMap         = _isTypeCheckArgsFunc(_isNotMap);
const isNotWeakMap     = _isTypeCheckArgsFunc(_isNotWeakMap);
const isNotSet         = _isTypeCheckArgsFunc(_isNotSet);
const isNotWeakSet     = _isTypeCheckArgsFunc(_isNotWeakSet);

const isUndefinedArray  = _isTypeCheckArrayFunc(_isUndefined);
const isNullArray       = _isTypeCheckArrayFunc(_isNull);
const isNaNStrictArray  = _isTypeCheckArrayFunc(_isNaNStrict);
const isBooleanArray    = _isTypeCheckArrayFunc(_isBoolean);
const isNumberArray     = _isTypeCheckArrayFunc(_isNumber);
const isIntegerArray    = _isTypeCheckArrayFunc(_isInteger);
const isStringArray     = _isTypeCheckArrayFunc(_isString);
const isFunctionArray   = _isTypeCheckArrayFunc(_isFunction);
const isObjectArray     = _isTypeCheckArrayFunc(_isObject);
const isObjectTypeArray = _isTypeCheckArrayFunc(_isObjectType);
const isArrayArray      = _isTypeCheckArrayFunc(_isArray);
const isArrayTypeArray  = _isTypeCheckArrayFunc(_isArrayType);
const isDateArray       = _isTypeCheckArrayFunc(_isDate);
const isRegExpArray     = _isTypeCheckArrayFunc(_isRegExp);
const isExceptionArray  = _isTypeCheckArrayFunc(_isException);
const isBooleanObjectArray  = _isTypeCheckArrayFunc(_isBooleanObject);
const isNumberObjectArray   = _isTypeCheckArrayFunc(_isNumberObject);
const isStringObjectArray   = _isTypeCheckArrayFunc(_isStringObject);
const isSymbolArray     = _isTypeCheckArrayFunc(_isSymbol);
const isMapArray        = _isTypeCheckArrayFunc(_isMap);
const isWeakMapArray    = _isTypeCheckArrayFunc(_isWeakMap);
const isSetArray        = _isTypeCheckArrayFunc(_isSet);
const isWeakSetArray    = _isTypeCheckArrayFunc(_isWeakSet);

const isNotUndefinedArray   = _isTypeCheckArrayFunc(value => !_isUndefined(value));
const isNotNullArray        = _isTypeCheckArrayFunc(value => !_isNull(value));
const isNotNaNStrictArray   = _isTypeCheckArrayFunc(value => !_isNaNStrict(value));
const isNotBooleanArray     = _isTypeCheckArrayFunc(value => !_isBoolean(value));
const isNotNumberArray      = _isTypeCheckArrayFunc(value => !_isNumber(value));
const isNotIntegerArray     = _isTypeCheckArrayFunc(value => !_isInteger(value));
const isNotStringArray      = _isTypeCheckArrayFunc(value => !_isString(value));
const isNotFunctionArray    = _isTypeCheckArrayFunc(value => !_isFunction(value));
const isNotObjectArray      = _isTypeCheckArrayFunc(value => !_isObject(value));
const isNotObjectTypeArray  = _isTypeCheckArrayFunc(value => !_isObjectType(value));
const isNotArrayArray       = _isTypeCheckArrayFunc(value => !_isArray(value));
const isNotArrayTypeArray   = _isTypeCheckArrayFunc(value => !_isArrayType(value));
const isNotDateArray        = _isTypeCheckArrayFunc(value => !_isDate(value));
const isNotRegExpArray      = _isTypeCheckArrayFunc(value => !_isRegExp(value));
const isNotExceptionArray   = _isTypeCheckArrayFunc(value => !_isException(value));
const isNotBooleanObjectArray = _isTypeCheckArrayFunc(value => !_isBooleanObject(value));
const isNotNumberObjectArray  = _isTypeCheckArrayFunc(value => !_isNumberObject(value));
const isNotStringObjectArray  = _isTypeCheckArrayFunc(value => !_isStringObject(value));
const isNotSymbolArray      = _isTypeCheckArrayFunc(value => !_isSymbol(value));
const isNotMapArray         = _isTypeCheckArrayFunc(value => !_isMap(value));
const isNotWeakMapArray     = _isTypeCheckArrayFunc(value => !_isWeakMap(value));
const isNotSetArray         = _isTypeCheckArrayFunc(value => !_isSet(value));
const isNotWeakSetArray     = _isTypeCheckArrayFunc(value => !_isWeakSet(value));


const isUndef   = isUndefined;
const isBool    = isBoolean;
const isNum     = isNumber;
const isInt     = isInteger;
const isStr     = isString;
const isFunc    = isFunction;
const isObj     = isObject;
const isObjType = isObjectType;
const isExcept  = isException;

const isNotUndef    = isNotUndefined;
const isNotBool     = isNotBoolean;
const isNotNum      = isNotNumber;
const isNotInt      = isNotInteger;
const isNotStr      = isNotString;
const isNotFunc     = isNotFunction;
const isNotObj      = isNotObject;
const isNotObjType  = isNotObjectType;
const isNotExcept   = isNotException;

module.exports = {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isBooleanObject, isNumberObject, isStringObject,
  isSymbol,
  isMap, isWeakMap,
  isSet, isWeakSet,

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction, isNotObject, isNotObjectType,
  isNotArray, isNotArrayType,
  isNotDate, isNotRegExp,
  isNotException,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotSymbol,
  isNotMap, isNotWeakMap,
  isNotSet, isNotWeakSet,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isObjectTypeArray,
  isArrayArray, isArrayTypeArray,
  isDateArray, isRegExpArray,
  isExceptionArray,
  isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
  isSymbolArray,
  isMapArray, isWeakMapArray,
  isSetArray, isWeakSetArray,

  isNotUndefinedArray, isNotNullArray, isNotNaNStrictArray,
  isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
  isNotFunctionArray, isNotObjectArray, isNotObjectTypeArray,
  isNotArrayArray, isNotArrayTypeArray,
  isNotDateArray, isNotRegExpArray,
  isNotExceptionArray,
  isNotBooleanObjectArray, isNotNumberObjectArray, isNotStringObjectArray,
  isNotSymbolArray,
  isNotMapArray, isNotWeakMapArray,
  isNotSetArray, isNotWeakSetArray,

  isUndef,
  isBool, isNum, isInt, isStr,
  isFunc, isObj, isObjType,
  isExcept,

  isNotUndef,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc, isNotObj, isNotObjType,
  isNotExcept,

};

