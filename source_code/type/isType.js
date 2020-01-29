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
const isEmptyObject   = _isTypeCheckArgsFunc(_isEmptyObject);
const isEmptyArray    = _isTypeCheckArgsFunc(_isEmptyArray);
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
const isNotEmptyObject   = _isTypeCheckArgsFunc(_isNotEmptyObject);
const isNotEmptyArray    = _isTypeCheckArgsFunc(_isNotEmptyArray);
const isNotSymbol     = _isTypeCheckArgsFunc(_isNotSymbol);
const isNotMap         = _isTypeCheckArgsFunc(_isNotMap);
const isNotWeakMap     = _isTypeCheckArgsFunc(_isNotWeakMap);
const isNotSet         = _isTypeCheckArgsFunc(_isNotSet);
const isNotWeakSet     = _isTypeCheckArgsFunc(_isNotWeakSet);

const isUndef     = isUndefined;
const isBool      = isBoolean;
const isNum       = isNumber;
const isInt       = isInteger;
const isStr       = isString;
const isFunc      = isFunction;
const isObj       = isObject;
const isObjType   = isObjectType;
const isExcept    = isException;
const isEmptyObj  = isEmptyObject;

const isNotUndef    = isNotUndefined;
const isNotBool     = isNotBoolean;
const isNotNum      = isNotNumber;
const isNotInt      = isNotInteger;
const isNotStr      = isNotString;
const isNotFunc     = isNotFunction;
const isNotObj      = isNotObject;
const isNotObjType  = isNotObjectType;
const isNotExcept   = isNotException;
const isNotEmptyObj = isNotEmptyObject;

module.exports = {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isException,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,
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
  isNotEmptyObject, isNotEmptyArray,
  isNotSymbol,
  isNotMap, isNotWeakMap,
  isNotSet, isNotWeakSet,

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

