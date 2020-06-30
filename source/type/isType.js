import {
  _propertyCount,
} from '../object/_propertyCount.js';

export const objectToString = value => {
  return Object.prototype.toString.call(value);
};

export const isUndefined = (value) => typeof value === 'undefined';

export const isNull = (value) => (value === null);

export const isNaNStrict = (value) => value !== value;

export const isBoolean = (value) => typeof value === 'boolean';
export const isBooleanObject = value => {
  return (
    objectToString(value) === '[object Boolean]'
    && (!isBoolean(value))
  );
};

export const isNumber = (value) => {
  return (typeof value === 'number' && (isFinite(value)));
};
export const isNumberObject = (value) => {
  return (
    objectToString(value) === '[object Number]'
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
    objectToString(value) === '[object String]'
    && (typeof value !== 'string')
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

export const isObjectLike = (value) => {
  if (isNull(value)) {
    return false;
  }
  return typeof value === 'object'
    || typeof value === 'function';
};

export const isModule = (value) => {
  return objectToString(value) === '[object Module]';
};

export const isEmptyObject = value => {
  if (!isObject(value)) {
    return false;
  }
  return _propertyCount(value) === 0;
};

export const isArray = (value) => {
  return objectToString(value) === '[object Array]';
};

// Int8Array Uint16Array Float32Array Float64Array etc
export const isArraySeries = (value) => {
  if (objectToString(value).indexOf('Array]') !== -1 ) {
    return true;
  }
  return false;
};

export const isEmptyArray = value => {
  if (!isArraySeries(value)) {
    return false;
  }
  return value.length === 0;
};

export const isDate = (value) => {
  return objectToString(value) === '[object Date]';
};

export const isRegExp = (value) => {
  return objectToString(value) === '[object RegExp]';
};

export const isError = (value) => {
  return objectToString(value) === '[object Error]';
};

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
export const isNotObjectLike      = value => !isObjectLike(value);
export const isNotModule          = value => !isModule(value);
export const isNotArray           = value => !isArray(value);
export const isNotArraySeries     = value => !isArraySeries(value);
export const isNotDate            = value => !isDate(value);
export const isNotRegExp          = value => !isRegExp(value);
export const isNotBooleanObject   = value => !isBooleanObject(value);
export const isNotNumberObject    = value => !isNumberObject(value);
export const isNotStringObject    = value => !isStringObject(value);
export const isNotEmptyObject     = value => !isEmptyObject(value);
export const isNotEmptyArray      = value => !isEmptyArray(value);

export const isObjectType     = isObjectLike;
export const isArrayType      = isArraySeries;
export const isNotObjectType  = isNotObjectLike;
export const isNotArrayType   = isNotArraySeries;

export const isUndef          = isUndefined;
export const isBool           = isBoolean;
export const isNum            = isNumber;
export const isInt            = isInteger;
export const isStr            = isString;
export const isFunc           = isFunction;
export const isObj            = isObject;
export const isObjNormal      = isObjectNormal;
export const isObjFromNull    = isObjectFromNull;
export const isObjLike        = isObjectLike;
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
export const isNotObjLike     = isNotObjectLike;
export const isNotEmptyObj    = isNotEmptyObject;

export const isObjType        = isObjLike;
export const isNotObjType     = isNotObjLike;

export default {
  objectToString,

  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isError,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,

  isNotUndefined, isNotNull, isNotNaNStrict,
  isNotBoolean, isNotNumber, isNotInteger, isNotString,
  isNotFunction,
  isNotObject, isNotObjectNormal, isNotObjectFromNull,
  isNotObjectLike, isNotModule,
  isNotArray, isNotArraySeries,
  isNotDate, isNotRegExp,
  isNotBooleanObject, isNotNumberObject, isNotStringObject,
  isNotEmptyObject, isNotEmptyArray,

  isObjectType, isArrayType,
  isNotObjectType, isNotArrayType,

  isUndef,
  isBool, isNum, isInt, isStr,
  isFunc,
  isObj, isObjNormal, isObjFromNull,
  isObjLike,
  isEmptyObj,

  isNotUndef,
  isNotBool, isNotNum, isNotInt, isNotStr,
  isNotFunc,
  isNotObj, isNotObjNormal, isNotObjFromNull,
  isNotObjLike,
  isNotEmptyObj,

  isObjType,
  isNotObjType,
};

