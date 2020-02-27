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
  _isFirst, _isLast,
} = require('../array/array_common.js');

/**
 * array.operation.insert
 */
const _insert = (array, values, index = 0) => {
  array.splice(index, 0, ...values);
  return array;
};

const insert = (array, values, index = 0) => {
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
 * array.operation.add
 */
const _add = (array, values, index = array.length - 1) => {
  array.splice(index + 1, 0, ...values);
  return array;
};

const add = (array, values, index = array.length - 1) => {
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
 * array.operation.deleteLength
 */
const _deleteLength = (array, index, length) => {
  array.splice(index, length);
  return array;
};

const deleteLength = (array, index, length) => {
  if (isObjectParameter(array, 'array, index, length')) {
    ({ array, index, length } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'deleteLength args(array) is not array',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'deleteLength args(index) is not integer',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'deleteLength args(length) is not integer',
    );
  }
  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError(
      'deleteLength args(index) must be from 0 to array.length - 1',
    );
  }
  if (!_inRange(length, 1, array.length - index)) {
    throw new RangeError(
      'deleteLength args(length) must be from 1 to array.length - index',
    );
  }

  return _deleteLength(array, index, length);
};

/**
 * array.operation.deleteIndex
 */
const _deleteIndex = (array, indexFirst, indexLast = indexFirst) => {
  array.splice(indexFirst, indexLast - indexFirst + 1);
  return array;
};

const deleteIndex = (array, indexFirst, indexLast = indexFirst) => {
  if (isObjectParameter(array, 'array, indexFirst', 'indexLast')) {
    ({ array, indexFirst, indexLast = indexFirst } = array);
  } else if (isObjectParameter(array, 'array, index')) {
    ({ array, index: indexFirst, indexLast = indexFirst } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'deleteIndex args(array) is not array',
    );
  }
  if (!isInteger(indexFirst)) {
    throw new TypeError(
      'deleteIndex args(indexFirst) is not integer',
    );
  }
  if (!isInteger(indexLast)) {
    throw new TypeError(
      `deleteIndex args(indexLast) is not integer`,
    );
  }
  if (!_inRange(indexFirst, 0, array.length - 1)) {
    throw new RangeError(
      'deleteIndex args(indexFirst) must be from 0 to array.length - 1',
    );
  }
  if (!_inRange(indexLast, indexFirst, array.length - 1)) {
    throw new RangeError(
      'deleteIndex args(indexLast) must be from indexFirst to array.length - 1',
    );
  }

  return _deleteIndex(array, indexFirst, indexLast);
};

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
  _insert, _add,
  _deleteLength, _deleteIndex,
  _includeFirst, _includeLast,
  _excludeFirst, _excludeLast,

  insert, add,
  deleteLength, deleteIndex,
  includeFirst, includeLast,
  excludeFirst, excludeLast,
};

