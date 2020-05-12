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

const {
  _isTypeArray,
} = require('../type/isTypeAll.js');

const _isTypeArrayCheckFunc = (func) => {
  return (array) => {
    if (!isArray(array)) {
      return false;
    }
    return _isTypeArray(func, array);
  };
};

const isUndefinedArray        = _isTypeArrayCheckFunc(isUndefined);
const isNullArray             = _isTypeArrayCheckFunc(isNull);
const isNaNStrictArray        = _isTypeArrayCheckFunc(isNaNStrict);
const isBooleanArray          = _isTypeArrayCheckFunc(isBoolean);
const isNumberArray           = _isTypeArrayCheckFunc(isNumber);
const isIntegerArray          = _isTypeArrayCheckFunc(isInteger);
const isStringArray           = _isTypeArrayCheckFunc(isString);
const isFunctionArray         = _isTypeArrayCheckFunc(isFunction);
const isObjectArray           = _isTypeArrayCheckFunc(isObject);
const isObjectTypeArray       = _isTypeArrayCheckFunc(isObjectType);
const isArrayArray            = _isTypeArrayCheckFunc(isArray);
const isArrayTypeArray        = _isTypeArrayCheckFunc(isArrayType);
const isDateArray             = _isTypeArrayCheckFunc(isDate);
const isRegExpArray           = _isTypeArrayCheckFunc(isRegExp);
const isExceptionArray        = _isTypeArrayCheckFunc(isException);
const isBooleanObjectArray    = _isTypeArrayCheckFunc(isBooleanObject);
const isNumberObjectArray     = _isTypeArrayCheckFunc(isNumberObject);
const isStringObjectArray     = _isTypeArrayCheckFunc(isStringObject);
const isEmptyObjectArray      = _isTypeArrayCheckFunc(isEmptyObject);
const isEmptyArrayArray       = _isTypeArrayCheckFunc(isEmptyArray);
const isSymbolArray           = _isTypeArrayCheckFunc(isSymbol);
const isMapArray              = _isTypeArrayCheckFunc(isMap);
const isWeakMapArray          = _isTypeArrayCheckFunc(isWeakMap);
const isSetArray              = _isTypeArrayCheckFunc(isSet);
const isWeakSetArray          = _isTypeArrayCheckFunc(isWeakSet);

const isNotUndefinedArray     = _isTypeArrayCheckFunc(isNotUndefined);
const isNotNullArray          = _isTypeArrayCheckFunc(isNotNull);
const isNotNaNStrictArray     = _isTypeArrayCheckFunc(isNotNaNStrict);
const isNotBooleanArray       = _isTypeArrayCheckFunc(isNotBoolean);
const isNotNumberArray        = _isTypeArrayCheckFunc(isNotNumber);
const isNotIntegerArray       = _isTypeArrayCheckFunc(isNotInteger);
const isNotStringArray        = _isTypeArrayCheckFunc(isNotString);
const isNotFunctionArray      = _isTypeArrayCheckFunc(isNotFunction);
const isNotObjectArray        = _isTypeArrayCheckFunc(isNotObject);
const isNotObjectTypeArray    = _isTypeArrayCheckFunc(isNotObjectType);
const isNotArrayArray         = _isTypeArrayCheckFunc(isNotArray);
const isNotArrayTypeArray     = _isTypeArrayCheckFunc(isNotArrayType);
const isNotDateArray          = _isTypeArrayCheckFunc(isNotDate);
const isNotRegExpArray        = _isTypeArrayCheckFunc(isNotRegExp);
const isNotExceptionArray     = _isTypeArrayCheckFunc(isNotException);
const isNotBooleanObjectArray = _isTypeArrayCheckFunc(isNotBooleanObject);
const isNotNumberObjectArray  = _isTypeArrayCheckFunc(isNotNumberObject);
const isNotStringObjectArray  = _isTypeArrayCheckFunc(isNotStringObject);
const isNotEmptyObjectArray   = _isTypeArrayCheckFunc(isNotEmptyObject);
const isNotEmptyArrayArray    = _isTypeArrayCheckFunc(isNotEmptyArray);
const isNotSymbolArray        = _isTypeArrayCheckFunc(isNotSymbol);
const isNotMapArray           = _isTypeArrayCheckFunc(isNotMap);
const isNotWeakMapArray       = _isTypeArrayCheckFunc(isNotWeakMap);
const isNotSetArray           = _isTypeArrayCheckFunc(isNotSet);
const isNotWeakSetArray       = _isTypeArrayCheckFunc(isNotWeakSet);

const isUndefArray        = isUndefinedArray;
const isBoolArray         = isBooleanArray;
const isNumArray          = isNumberArray;
const isIntArray          = isIntegerArray;
const isStrArray          = isStringArray;
const isFuncArray         = isFunctionArray;
const isObjArray          = isObjectArray;
const isObjTypeArray      = isObjectTypeArray;
const isExceptArray       = isExceptionArray;
const isEmptyObjArray     = isEmptyObjectArray;

const isNotUndefArray     = isNotUndefinedArray;
const isNotBoolArray      = isNotBooleanArray;
const isNotNumArray       = isNotNumberArray;
const isNotIntArray       = isNotIntegerArray;
const isNotStrArray       = isNotStringArray;
const isNotFuncArray      = isNotFunctionArray;
const isNotObjArray       = isNotObjectArray;
const isNotObjTypeArray   = isNotObjectTypeArray;
const isNotExceptArray    = isNotExceptionArray;
const isNotEmptyObjArray  = isNotEmptyObjectArray;

module.exports = {
  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isObjectTypeArray,
  isArrayArray, isArrayTypeArray,
  isDateArray, isRegExpArray,
  isExceptionArray,
  isBooleanObjectArray, isNumberObjectArray, isStringObjectArray,
  isEmptyObjectArray, isEmptyArrayArray,
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
  isNotEmptyObjectArray, isNotEmptyArrayArray,
  isNotSymbolArray,
  isNotMapArray, isNotWeakMapArray,
  isNotSetArray, isNotWeakSetArray,

  isUndefArray,
  isBoolArray, isNumArray, isIntArray, isStrArray,
  isFuncArray, isObjArray, isObjTypeArray,
  isExceptArray,
  isEmptyObjArray,

  isNotUndefArray,
  isNotBoolArray, isNotNumArray, isNotIntArray, isNotStrArray,
  isNotFuncArray, isNotObjArray, isNotObjTypeArray,
  isNotExceptArray,
  isNotEmptyObjArray,

};

