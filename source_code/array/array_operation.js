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
      'delete args(deleteCount) must be >= 1',
    );
  }

  return _delete(array, index, deleteCount);
};

module.exports = {
  insert, add,
  delete: deleteLength,

};

