const {
  _propertyCount
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

const _isUndefined = _typeofCheck('undefined');

const _isNull = (value) => (value === null);

const _isNaNStrict = (value) => value !== value;

const _isBoolean = _typeofCheck('boolean');
const _isBooleanObject = value => {
  return (
    _objectToStringCheck('Boolean')
    && (!_isBoolean(value))
  );
};

const _isNumber = (value) => {
  return (_typeofCheck('number')(value) && (isFinite(value)));
};
const _isNumberObject = (value) => {
  return (
    _objectToStringCheck('Number')(value)
    && (!_typeofCheck('number')(value))
  );
};

const _isInteger = (value) => {
  if (!_isNumber(value)) {
    return false;
  }
  return Math.round(value) === value;
};

const _isString = _typeofCheck('string');
const _isStringObject = value => {
  return (
    _objectToStringCheck('String')
    && (!_isString(value))
  );
};

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

const _isEmptyObject = value => {
  if (!_isObject(value)) {
    return false;
  }
  return _propertyCount(value) === 0;
};


const _isArray = _objectToStringCheck('Array');

// Int8Array Uint16Array Float32Array Float64Array etc...
const _isArrayType = (value) => {
  if (objectToString(value).includes('Array]')) {
    return true;
  }
  return false;
};

const _isEmptyArray = value => {
  if (!_isArrayType(value)) {
    return false;
  }
  return value.length === 0;
};

const _isDate = _objectToStringCheck('Date');

const _isRegExp = _objectToStringCheck('RegExp');

const _isError = _objectToStringCheck('Error');

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
const _isNotArrayType   = value => !_isArrayType(value);
const _isNotDate        = value => !_isDate(value);
const _isNotRegExp      = value => !_isRegExp(value);
const _isNotBooleanObject = value => !_isBooleanObject(value);
const _isNotNumberObject  = value => !_isNumberObject(value);
const _isNotStringObject  = value => !_isStringObject(value);
const _isNotEmptyObject   = value => !_isEmptyObject(value);
const _isNotEmptyArray    = value => !_isEmptyArray(value);

module.exports = {
  _typeofCheck, _objectToStringCheck, objectToString,

  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isObjectType,
  _isArray, _isArrayType,
  _isDate, _isRegExp,
  _isError,
  _isBooleanObject, _isNumberObject, _isStringObject,
  _isEmptyObject, _isEmptyArray,

  _isNotUndefined, _isNotNull, _isNotNaNStrict,
  _isNotBoolean, _isNotNumber, _isNotInteger, _isNotString,
  _isNotFunction, _isNotObject, _isNotObjectType,
  _isNotArray, _isNotArrayType,
  _isNotDate, _isNotRegExp,
  _isNotBooleanObject, _isNotNumberObject, _isNotStringObject,
  _isNotEmptyObject, _isNotEmptyArray,
};

