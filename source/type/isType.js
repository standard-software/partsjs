import {
  _propertyCount,
} from '../object/_propertyCount.js';

export const _typeofCheck = (typeName) => {
  return ((value) => typeof value === typeName);
};

export const objectToString = value => {
  return Object.prototype.toString.call(value);
};

export const _objectToStringCheck = (typeName) => {
  return (
    (value) =>
      objectToString(value) === `[object ${typeName}]`
  );
};

export const isUndefined = _typeofCheck('undefined');

export const isNull = (value) => (value === null);

export const isNaNStrict = (value) => value !== value;

export const isBoolean = _typeofCheck('boolean');
export const isBooleanObject = value => {
  return (
    _objectToStringCheck('Boolean')
    && (!isBoolean(value))
  );
};

export const isNumber = (value) => {
  return (_typeofCheck('number')(value) && (isFinite(value)));
};
export const isNumberObject = (value) => {
  return (
    _objectToStringCheck('Number')(value)
    && (!_typeofCheck('number')(value))
  );
};

export const isInteger = (value) => {
  if (!isNumber(value)) {
    return false;
  }
  return Math.round(value) === value;
};

export const isString = _typeofCheck('string');
export const isStringObject = value => {
  return (
    _objectToStringCheck('String')
    && (!isString(value))
  );
};

export const isFunction = _typeofCheck('function');

export const isObject = (value) => {
  if (
    (_objectToStringCheck('Object')(value))
    && (!isNull(value))
    && (!isUndefined(value))
  ) {
    return true;
  }
  return false;
};

export const isObjectType = (value) => {
  if (isNull(value)) {
    return false;
  }
  return ['function', 'object'].indexOf(typeof value) !== -1;
};

export const isModule = (value) => {
  if (_objectToStringCheck('Module')(value)) {
    return true;
  }
  return false;
};

export const isEmptyObject = value => {
  if (!isObject(value)) {
    return false;
  }
  return _propertyCount(value) === 0;
};

export const isArray = _objectToStringCheck('Array');

// Int8Array Uint16Array Float32Array Float64Array etc...
export const isArrayType = (value) => {
  if (objectToString(value).indexOf('Array]') !== -1 ) {
    return true;
  }
  return false;
};

export const isEmptyArray = value => {
  if (!isArrayType(value)) {
    return false;
  }
  return value.length === 0;
};

export const isDate = _objectToStringCheck('Date');

export const isRegExp = _objectToStringCheck('RegExp');

export const isError = _objectToStringCheck('Error');

export const isNotUndefined   = value => !isUndefined(value);
export const isNotNull        = value => !isNull(value);
export const isNotNaNStrict   = value => !isNaNStrict(value);
export const isNotBoolean     = value => !isBoolean(value);
export const isNotNumber      = value => !isNumber(value);
export const isNotInteger     = value => !isInteger(value);
export const isNotString      = value => !isString(value);
export const isNotFunction    = value => !isFunction(value);
export const isNotObject      = value => !isObject(value);
export const isNotObjectType  = value => !isObjectType(value);
export const isNotModule      = value => !isModule(value);
export const isNotArray       = value => !isArray(value);
export const isNotArrayType   = value => !isArrayType(value);
export const isNotDate        = value => !isDate(value);
export const isNotRegExp      = value => !isRegExp(value);
export const isNotBooleanObject = value => !isBooleanObject(value);
export const isNotNumberObject  = value => !isNumberObject(value);
export const isNotStringObject  = value => !isStringObject(value);
export const isNotEmptyObject   = value => !isEmptyObject(value);
export const isNotEmptyArray    = value => !isEmptyArray(value);

export const isUndef     = isUndefined;
export const isBool      = isBoolean;
export const isNum       = isNumber;
export const isInt       = isInteger;
export const isStr       = isString;
export const isFunc      = isFunction;
export const isObj       = isObject;
export const isObjType   = isObjectType;
export const isEmptyObj  = isEmptyObject;

export const isNotUndef    = isNotUndefined;
export const isNotBool     = isNotBoolean;
export const isNotNum      = isNotNumber;
export const isNotInt      = isNotInteger;
export const isNotStr      = isNotString;
export const isNotFunc     = isNotFunction;
export const isNotObj      = isNotObject;
export const isNotObjType  = isNotObjectType;
export const isNotEmptyObj = isNotEmptyObject;

export default {
  _typeofCheck, _objectToStringCheck, objectToString,

  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isObjectType, isModule,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction, isNotObject, isNotObjectType, isNotModule,
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
}

