const _typeofCheck = (typeName) => {
  return ((value) => typeof value === typeName);
};

const _objectToStringCheck = (typeName) => {
  return (
    (value) =>
      Object.prototype.toString.call(value) === `[object ${typeName}]`
  );
};

const _isUndefined = _typeofCheck('undefined');

const _isNull = (value) => (value === null);

const _isNaNStrict = (value) => value !== value;

const _isBoolean = _typeofCheck('boolean');

const _isNumber = (value) => {
  return (_typeofCheck('number')(value) && (isFinite(value)));
};

const _isInteger = (value) => {
  if (!_isNumber(value)) {
    return false;
  }
  return Math.round(value) === value;
};

const _isString = _typeofCheck('string');

const _isFunction = _typeofCheck('function');

const _isObject = (value) => {
  if (
    (_objectToStringCheck('Object')(value))
    && (!_isNull(value))
    && (!_isUndefined(value))
  ) {
    return true;
  }
  return false;
};

const _isObjectType = (value) => {
  if (_isNull(value)) {
    return false;
  }
  return ['function', 'object'].includes(typeof value);
};

const _isArray = _objectToStringCheck('Array');

const _isDate = _objectToStringCheck('Date');

const _isRegExp = _objectToStringCheck('RegExp');

const _isError = _objectToStringCheck('Error');

/**
 * _isException
 * description:
 *  _isException can determine standard Error objects and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */
const _isException = (value) => {
  if (_isObject(value)
  && ('name' in value)
  && ('message' in value)) {
    return true;
  } else if (_isError(value)) {
    return true;
  }
  return false;
};

const _isNotUndefined   = value => !_isUndefined(value);
const _isNotNull        = value => !_isNull(value);
const _isNotNaNStrict   = value => !_isNaNStrict(value);
const _isNotBoolean     = value => !_isBoolean(value);
const _isNotNumber      = value => !_isNumber(value);
const _isNotInteger     = value => !_isInteger(value);
const _isNotString      = value => !_isString(value);
const _isNotFunction    = value => !_isFunction(value);
const _isNotObject      = value => !_isObject(value);
const _isNotObjectType  = value => !_isObjectType(value);
const _isNotArray       = value => !_isArray(value);
const _isNotDate        = value => !_isDate(value);
const _isNotRegExp      = value => !_isRegExp(value);
const _isNotException   = value => !_isException(value);

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
const isDate        = _isTypeCheckArgsFunc(_isDate);
const isRegExp      = _isTypeCheckArgsFunc(_isRegExp);
const isException   = _isTypeCheckArgsFunc(_isException);

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
const isNotDate       = _isTypeCheckArgsFunc(_isNotDate);
const isNotRegExp     = _isTypeCheckArgsFunc(_isNotRegExp);
const isNotException  = _isTypeCheckArgsFunc(_isNotException);

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
const isDateArray       = _isTypeCheckArrayFunc(_isDate);
const isRegExpArray     = _isTypeCheckArrayFunc(_isRegExp);
const isExceptionArray  = _isTypeCheckArrayFunc(_isException);

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
const isNotDateArray        = _isTypeCheckArrayFunc(value => !_isDate(value));
const isNotRegExpArray      = _isTypeCheckArrayFunc(value => !_isRegExp(value));
const isNotExceptionArray   = _isTypeCheckArrayFunc(value => !_isException(value));

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
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isObjectType,
  _isArray,_isDate,_isRegExp,
  _isException,

  _isNotUndefined,_isNotNull,_isNotNaNStrict,
  _isNotBoolean,_isNotNumber,_isNotInteger,_isNotString,
  _isNotFunction,_isNotObject,_isNotObjectType,
  _isNotArray,_isNotDate,_isNotRegExp,
  _isNotException,

  isUndefined,isNull,isNaNStrict,
  isBoolean,isNumber,isInteger,isString,
  isFunction,isObject,isObjectType,
  isArray,isDate,isRegExp,
  isException,

  isNotUndefined,isNotNull,isNotNaNStrict,
  isNotBoolean,isNotNumber,isNotInteger,isNotString,
  isNotFunction,isNotObject,isNotObjectType,
  isNotArray,isNotDate,isNotRegExp,
  isNotException,

  isUndefinedArray,isNullArray,isNaNStrictArray,
  isBooleanArray,isNumberArray,isIntegerArray,isStringArray,
  isFunctionArray,isObjectArray,isObjectTypeArray,
  isArrayArray,isDateArray,isRegExpArray,
  isExceptionArray,

  isNotUndefinedArray,isNotNullArray,isNotNaNStrictArray,
  isNotBooleanArray,isNotNumberArray,isNotIntegerArray,isNotStringArray,
  isNotFunctionArray,isNotObjectArray,isNotObjectTypeArray,
  isNotArrayArray,isNotDateArray,isNotRegExpArray,
  isNotExceptionArray,

  isUndef,
  isBool,isNum,isInt,isStr,
  isFunc,isObj,isObjType,
  isExcept,

  isNotUndef,
  isNotBool,isNotNum,isNotInt,isNotStr,
  isNotFunc,isNotObj,isNotObjType,
  isNotExcept,

};

