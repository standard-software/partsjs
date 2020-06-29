import {
  _propertyCount,
} from '../object/_propertyCount.js';

export const objectToString = value => {
  return Object.prototype.toString.call(value);
};

export const _objectToStringCheck = (typeName) => {
  return (
    (value) =>
      objectToString(value) === `[object ${typeName}]`
  );
};

export const isUndefined =
  (value) => typeof value === 'undefined';

export const isNull = (value) => (value === null);

export const isNaNStrict = (value) => value !== value;

export const isBoolean =
  (value) => typeof value === 'boolean';
export const isBooleanObject = value => {
  return (
    _objectToStringCheck('Boolean')
    && (!isBoolean(value))
  );
};

export const isNumber = (value) => {
  return (typeof value === 'number' && (isFinite(value)));
};
export const isNumberObject = (value) => {
  return (
    _objectToStringCheck('Number')(value)
    && (typeof value !== 'number')
  );
};

export const isInteger = (value) => {
  if (!isNumber(value)) {
    return false;
  }
  return Math.round(value) === value;
};

export const isString =
  (value) => typeof value === 'string';
export const isStringObject = value => {
  return (
    _objectToStringCheck('String')
    && (!isString(value))
  );
};

export const isFunction =
  (value) => typeof value === 'function';

export const isObject = (value) => {
  if (isNull(value)) { return false; }
  if (isUndefined(value)) { return false; }
  if (objectToString(value) === '[object Object]') {
    return true;
  }
  return false;
};

export const isObjectNormal = (value) => {
  if (!isObject(value)) { return false; }
  if ('constructor' in value) {
    return true;
  }
  return false;
};

export const isObjectFromNull = (value) => {
  if (!isObject(value)) { return false; }
  if ('constructor' in value) {
    return false;
  }
  return true;
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

// Int8Array Uint16Array Float32Array Float64Array etc
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

export const isNotUndefined       = value => !isUndefined(value);
export const isNotNull            = value => !isNull(value);
export const isNotNaNStrict       = value => !isNaNStrict(value);
export const isNotBoolean         = value => !isBoolean(value);
export const isNotNumber          = value => !isNumber(value);
export const isNotInteger         = value => !isInteger(value);
export const isNotString          = value => !isString(value);
export const isNotFunction        = value => !isFunction(value);
export const isNotObject          = value => !isObject(value);
export const isNotObjectNormal    = value => !isObjectNormal(value);
export const isNotObjectFromNull  = value => !isObjectFromNull(value);
export const isNotObjectType      = value => !isObjectType(value);
export const isNotModule          = value => !isModule(value);
export const isNotArray           = value => !isArray(value);
export const isNotArrayType       = value => !isArrayType(value);
export const isNotDate            = value => !isDate(value);
export const isNotRegExp          = value => !isRegExp(value);
export const isNotBooleanObject   = value => !isBooleanObject(value);
export const isNotNumberObject    = value => !isNumberObject(value);
export const isNotStringObject    = value => !isStringObject(value);
export const isNotEmptyObject     = value => !isEmptyObject(value);
export const isNotEmptyArray      = value => !isEmptyArray(value);

export const isUndef          = isUndefined;
export const isBool           = isBoolean;
export const isNum            = isNumber;
export const isInt            = isInteger;
export const isStr            = isString;
export const isFunc           = isFunction;
export const isObj            = isObject;
export const isObjNormal      = isObjectNormal;
export const isObjFromNull    = isObjectFromNull;
export const isObjType        = isObjectType;
export const isEmptyObj       = isEmptyObject;

export const isNotUndef       = isNotUndefined;
export const isNotBool        = isNotBoolean;
export const isNotNum         = isNotNumber;
export const isNotInt         = isNotInteger;
export const isNotStr         = isNotString;
export const isNotFunc        = isNotFunction;
export const isNotObj         = isNotObject;
export const isNotObjNormal   = isNotObjectNormal;
export const isNotObjFromNull = isNotObjectFromNull;
export const isNotObjType     = isNotObjectType;
export const isNotEmptyObj    = isNotEmptyObject;

export default {
  _objectToStringCheck, objectToString,

  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectType, isModule,
  isArray, isArrayType,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction,
  isNotObject, isNotObjectNormal, isNotObjectFromNull,
  isNotObjectType, isNotModule,
  isNotArray, isNotArrayType,
  isNotDate, isNotRegExp,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotEmptyObject, isNotEmptyArray,

  isUndef,
  isBool, isNum, isInt, isStr,
  isFunc,
  isObj, isObjNormal, isObjFromNull,
  isObjType,
  isEmptyObj,

  isNotUndef,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc,
  isNotObj, isNotObjNormal, isNotObjFromNull,
  isNotObjType,
  isNotEmptyObj,
};

