const {
  _propertyCount,
} = require('../object/_propertyCount.js');

const _typeofCheck = (typeName) => {
  return ((value) => typeof value === typeName);
};

const objectToString = value => {
  return Object.prototype.toString.call(value);
};

const _objectToStringCheck = (typeName) => {
  return (
    (value) =>
      objectToString(value) === `[object ${typeName}]`
  );
};

const isUndefined = _typeofCheck('undefined');

const isNull = (value) => (value === null);

const isNaNStrict = (value) => value !== value;

const isBoolean = _typeofCheck('boolean');
const isBooleanObject = value => {
  return (
    _objectToStringCheck('Boolean')
    && (!isBoolean(value))
  );
};

const isNumber = (value) => {
  return (_typeofCheck('number')(value) && (isFinite(value)));
};
const isNumberObject = (value) => {
  return (
    _objectToStringCheck('Number')(value)
    && (!_typeofCheck('number')(value))
  );
};

const isInteger = (value) => {
  if (!isNumber(value)) {
    return false;
  }
  return Math.round(value) === value;
};

const isString = _typeofCheck('string');
const isStringObject = value => {
  return (
    _objectToStringCheck('String')
    && (!isString(value))
  );
};

const isFunction = _typeofCheck('function');

const isObject = (value) => {
  if (
    (_objectToStringCheck('Object')(value))
    && (!isNull(value))
    && (!isUndefined(value))
  ) {
    return true;
  }
  return false;
};

const isObjectType = (value) => {
  if (isNull(value)) {
    return false;
  }
  return ['function', 'object'].indexOf(typeof value) !== -1;
};

const isEmptyObject = value => {
  if (!isObject(value)) {
    return false;
  }
  return _propertyCount(value) === 0;
};

const isArray = _objectToStringCheck('Array');

// Int8Array Uint16Array Float32Array Float64Array etc...
const isArrayType = (value) => {
  if (objectToString(value).indexOf('Array]') !== -1 ) {
    return true;
  }
  return false;
};

const isEmptyArray = value => {
  if (!isArrayType(value)) {
    return false;
  }
  return value.length === 0;
};

const isDate = _objectToStringCheck('Date');

const isRegExp = _objectToStringCheck('RegExp');

const isError = _objectToStringCheck('Error');

const isNotUndefined   = value => !isUndefined(value);
const isNotNull        = value => !isNull(value);
const isNotNaNStrict   = value => !isNaNStrict(value);
const isNotBoolean     = value => !isBoolean(value);
const isNotNumber      = value => !isNumber(value);
const isNotInteger     = value => !isInteger(value);
const isNotString      = value => !isString(value);
const isNotFunction    = value => !isFunction(value);
const isNotObject      = value => !isObject(value);
const isNotObjectType  = value => !isObjectType(value);
const isNotArray       = value => !isArray(value);
const isNotArrayType   = value => !isArrayType(value);
const isNotDate        = value => !isDate(value);
const isNotRegExp      = value => !isRegExp(value);
const isNotBooleanObject = value => !isBooleanObject(value);
const isNotNumberObject  = value => !isNumberObject(value);
const isNotStringObject  = value => !isStringObject(value);
const isNotEmptyObject   = value => !isEmptyObject(value);
const isNotEmptyArray    = value => !isEmptyArray(value);

const isUndef     = isUndefined;
const isBool      = isBoolean;
const isNum       = isNumber;
const isInt       = isInteger;
const isStr       = isString;
const isFunc      = isFunction;
const isObj       = isObject;
const isObjType   = isObjectType;
const isEmptyObj  = isEmptyObject;

const isNotUndef    = isNotUndefined;
const isNotBool     = isNotBoolean;
const isNotNum      = isNotNumber;
const isNotInt      = isNotInteger;
const isNotStr      = isNotString;
const isNotFunc     = isNotFunction;
const isNotObj      = isNotObject;
const isNotObjType  = isNotObjectType;
const isNotEmptyObj = isNotEmptyObject;

module.exports = {
  _typeofCheck, _objectToStringCheck, objectToString,

  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction, isNotObject, isNotObjectType,
  isNotArray, isNotArrayType,
  isNotDate, isNotRegExp,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotEmptyObject, isNotEmptyArray,

  isUndef,
  isBool, isNum, isInt, isStr,
  isFunc, isObj, isObjType,
  isEmptyObj,

  isNotUndef,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc, isNotObj, isNotObjType,
  isNotEmptyObj,
};

