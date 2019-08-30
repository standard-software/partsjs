const objectToString = (value) => {
  return Object.prototype.toString.call(value);
};

const _primitiveTypeCheckFunc = (typeName) => {
  return ((value) => typeof value === typeName);
};

const _objectTypeCheckFunc = (typeName) => {
  return ((value) => objectToString(value) === `[object ${typeName}]`);
};

const _isUndefined = _primitiveTypeCheckFunc('undefined');

const _isNull = (value) => (value === null);

const _isNaNStrict = (value) => value !== value;

const _isBoolean = _primitiveTypeCheckFunc('boolean');

const _isNumber = (value) => {
  return (_primitiveTypeCheckFunc('number')(value) && (isFinite(value)));
};

const _isInteger = (value) => {
  if (!_isNumber(value)) {
    return false;
  }
  return Math.round(value) === value;
};

const _isString = _primitiveTypeCheckFunc('string');

const _isFunction = _primitiveTypeCheckFunc('function');

const _isObject = (value) => {
  if (
    (_objectTypeCheckFunc('Object')(value))
    && (!_isNull(value))
    && (!_isUndefined(value))
  ) {
    return true;
  }
  return false;
};

const _isArray = _objectTypeCheckFunc('Array');

const _isDate = _objectTypeCheckFunc('Date');

const _isRegExp = _objectTypeCheckFunc('RegExp');

const _isError = _objectTypeCheckFunc('Error');

/**
 * _isException
 * description:
 *  _isException can determine standard Error objects and user-specific exception objects.
 *  Only whether the object has name and message properties.
 */
const _isException = (value) => {
  if (_isObject(value)) {
    if (('name' in value) && ('message' in value)) {
        return true;
    }
  } else if (_isError(value)) {
    return true;
  }
  return false;
};

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

const isUndefined = _isTypeCheckArgsFunc(_isUndefined);
const isNull      = _isTypeCheckArgsFunc(_isNull);
const isNaNStrict = _isTypeCheckArgsFunc(_isNaNStrict);
const isBoolean   = _isTypeCheckArgsFunc(_isBoolean);
const isNumber    = _isTypeCheckArgsFunc(_isNumber);
const isInteger   = _isTypeCheckArgsFunc(_isInteger);
const isString    = _isTypeCheckArgsFunc(_isString);
const isFunction  = _isTypeCheckArgsFunc(_isFunction);
const isObject    = _isTypeCheckArgsFunc(_isObject);
const isArray     = _isTypeCheckArgsFunc(_isArray);
const isDate      = _isTypeCheckArgsFunc(_isDate);
const isRegExp    = _isTypeCheckArgsFunc(_isRegExp);
const isException = _isTypeCheckArgsFunc(_isException);

const isNotUndefined  = _isTypeCheckArgsFunc(value => !_isUndefined(value));
const isNotNull       = _isTypeCheckArgsFunc(value => !_isNull(value));
const isNotNaNStrict  = _isTypeCheckArgsFunc(value => !_isNaNStrict(value));
const isNotBoolean    = _isTypeCheckArgsFunc(value => !_isBoolean(value));
const isNotNumber     = _isTypeCheckArgsFunc(value => !_isNumber(value));
const isNotInteger    = _isTypeCheckArgsFunc(value => !_isInteger(value));
const isNotString     = _isTypeCheckArgsFunc(value => !_isString(value));
const isNotFunction   = _isTypeCheckArgsFunc(value => !_isFunction(value));
const isNotObject     = _isTypeCheckArgsFunc(value => !_isObject(value));
const isNotArray      = _isTypeCheckArgsFunc(value => !_isArray(value));
const isNotDate       = _isTypeCheckArgsFunc(value => !_isDate(value));
const isNotRegExp     = _isTypeCheckArgsFunc(value => !_isRegExp(value));
const isNotException  = _isTypeCheckArgsFunc(value => !_isException(value));

const isUndefinedArray  = _isTypeCheckArrayFunc(_isUndefined);
const isNullArray       = _isTypeCheckArrayFunc(_isNull);
const isNaNStrictArray  = _isTypeCheckArrayFunc(_isNaNStrict);
const isBooleanArray    = _isTypeCheckArrayFunc(_isBoolean);
const isNumberArray     = _isTypeCheckArrayFunc(_isNumber);
const isIntegerArray    = _isTypeCheckArrayFunc(_isInteger);
const isStringArray     = _isTypeCheckArrayFunc(_isString);
const isFunctionArray   = _isTypeCheckArrayFunc(_isFunction);
const isObjectArray     = _isTypeCheckArrayFunc(_isObject);
const isArrayArray      = _isTypeCheckArrayFunc(_isArray);
const isDateArray       = _isTypeCheckArrayFunc(_isDate);
const isRegExpArray     = _isTypeCheckArrayFunc(_isRegExp);
const isExceptionArray  = _isTypeCheckArrayFunc(_isException);

const isNotUndefinedArray = _isTypeCheckArrayFunc(value => !_isUndefined(value));
const isNotNullArray      = _isTypeCheckArrayFunc(value => !_isNull(value));
const isNotNaNStrictArray = _isTypeCheckArrayFunc(value => !_isNaNStrict(value));
const isNotBooleanArray   = _isTypeCheckArrayFunc(value => !_isBoolean(value));
const isNotNumberArray    = _isTypeCheckArrayFunc(value => !_isNumber(value));
const isNotIntegerArray   = _isTypeCheckArrayFunc(value => !_isInteger(value));
const isNotStringArray    = _isTypeCheckArrayFunc(value => !_isString(value));
const isNotFunctionArray  = _isTypeCheckArrayFunc(value => !_isFunction(value));
const isNotObjectArray    = _isTypeCheckArrayFunc(value => !_isObject(value));
const isNotArrayArray     = _isTypeCheckArrayFunc(value => !_isArray(value));
const isNotDateArray      = _isTypeCheckArrayFunc(value => !_isDate(value));
const isNotRegExpArray    = _isTypeCheckArrayFunc(value => !_isRegExp(value));
const isNotExceptionArray = _isTypeCheckArrayFunc(value => !_isException(value));


module.exports = {
  _isUndefined,
  _isNull,
  _isNaNStrict,
  _isBoolean,
  _isNumber,
  _isInteger,
  _isString,
  _isFunction,
  _isObject,
  _isArray,
  _isDate,
  _isRegExp,
  _isError,
  _isException,

  isUndefined,
  isNull,
  isNaNStrict,
  isBoolean,
  isNumber,
  isInteger,
  isString,
  isFunction,
  isObject,
  isArray,
  isDate,
  isRegExp,
  isException,

  isNotUndefined,
  isNotNull,
  isNotNaNStrict,
  isNotBoolean,
  isNotNumber,
  isNotInteger,
  isNotString,
  isNotFunction,
  isNotObject,
  isNotArray,
  isNotDate,
  isNotRegExp,
  isNotException,

  isUndefinedArray,
  isNullArray,
  isNaNStrictArray,
  isBooleanArray,
  isNumberArray,
  isIntegerArray,
  isStringArray,
  isFunctionArray,
  isObjectArray,
  isArrayArray,
  isDateArray,
  isRegExpArray,
  isExceptionArray,

  isNotUndefinedArray,
  isNotNullArray,
  isNotNaNStrictArray,
  isNotBooleanArray,
  isNotNumberArray,
  isNotIntegerArray,
  isNotStringArray,
  isNotFunctionArray,
  isNotObjectArray,
  isNotArrayArray,
  isNotDateArray,
  isNotRegExpArray,
  isNotExceptionArray,

};

