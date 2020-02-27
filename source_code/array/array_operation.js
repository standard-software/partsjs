const {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} = require('../type/type.js');

const {
  _inRange,
} = require('../number/number.js');

const {
  isObjectParameter,
} = require('../object/isObjectParameter.js');

const {
  _clone, _cloneDeep,
} = require('../root/clone.js');

/**
 * array.insert
 */
const _insert = (
  array,
  values,
  index = 0,
) => {
  array.splice(index, 0, ...values);
  return array;
};

const insert = (
  array,
  values,
  index = 0,
) => {
  if (isObjectParameter(array, 'array, values, index')) {
    ({ array, values, index } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'insert args(array) is not array',
    );
  }
  if (!isArray(values)) {
    throw new TypeError(
      'insert args(values) is not array',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'insert args(index) is not integer',
    );
  }
  if (!_inRange(index, 0, array.length)) {
    throw new RangeError(
      'insert args(index) must be from 0 to array.length',
    );
  }

  return _insert(array, values, index);
};

/**
 * array.add
 */
const _add = (
  array,
  values,
  index = array.length - 1,
) => {
  array.splice(index + 1, 0, ...values);
  return array;
};

const add = (
  array,
  values,
  index = array.length - 1,
) => {
  if (isObjectParameter(array, 'array, values, index')) {
    ({ array, values, index } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'add args(array) is not array',
    );
  }
  if (!isArray(values)) {
    throw new TypeError(
      'add args(values) is not array',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'add args(index) is not integer',
    );
  }
  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError(
      'add args(index) must be from 0 to array.length - 1',
    );
  }

  return _add(array, values, index);
};

/**
 * array.delete
 */
const _delete = (
  array,
  index,
  deleteCount = 1,
) => {
  array.splice(index, deleteCount);
  return array;
};

const deleteLength = (
  array,
  index,
  deleteCount = 1,
) => {
  if (isObjectParameter(array, 'array, index, deleteCount')) {
    ({ array, index, deleteCount } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'delete args(array) is not array',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'delete args(index) is not integer',
    );
  }
  if (!isInteger(deleteCount)) {
    throw new TypeError(
      'delete args(deleteCount) is not integer',
    );
  }
  if (!_inRange(index, 0, array.length - deleteCount)) {
    throw new RangeError(
      'delete args(index) must be from 0 to array.length - args deleteCount',
    );
  }
  if (deleteCount <= 0) {
    throw new RangeError(

/**
 * array.operation.includeFirst
 */
const _includeFirst = (array, value) => {
  if (!_isFirst(array, value)) {
    _insert(array, value);
  }
};

const includeFirst = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'includeFirst args(array) is not array',
    );
  }

  return _includeFirst(array, value);
};

/**
 * array.operation.includeLast
 */
const _includeLast = (array, value) => {
  if (!_isLast(array, value)) {
    _add(array, value);
  }
};

const includeLast = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'includeLast args(array) is not array',
    );
  }

  return _includeLast(array, value);
};

/**
 * array.operation.excludeFirst
 */
const _excludeFirst = (array, value) => {
  if (_isFirst(array, value)) {
    _deleteLength(array, 0);
  }
};

const excludeFirst = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'excludeFirst args(array) is not array',
    );
  }

  return _excludeFirst(array, value);
};

/**
 * array.operation.excludeLast
 */
const _excludeLast = (array, value) => {
  if (_isLast(array, value)) {
    _deleteLength(array, array.length - 1);
  }
};

const excludeLast = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'excludeLast args(array) is not array',
    );
  }

  return _excludeLast(array, value);
};

module.exports = {
  _includeFirst, _includeLast,
  _excludeFirst, _excludeLast,

  insert, add,
  includeFirst, includeLast,
  excludeFirst, excludeLast,
};

