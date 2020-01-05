const {
  _isUndefined, _isNull, _isNaNStrict,
  _isBoolean, _isNumber, _isInteger, _isString,
  _isFunction, _isObject, _isArray, _isDate, _isRegExp,
  _isException,
} = require('../type/type.js');

const {
  _inRange,
} = require('../number/number.js');

const {
  _inProperty,
} = require('../object/_inProperty.js');

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
  if (_inProperty(array, 'array, values, index')) {
    ({ array, values, index } = array);
  }

  if (!_isArray(array)) {
    throw new TypeError(
      'insert args(array) is not array',
    );
  }
  if (!_isArray(values)) {
    throw new TypeError(
      'insert args(values) is not array',
    );
  }
  if (!_isInteger(index)) {
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
  if (_inProperty(array, 'array, values, index')) {
    ({ array, values, index } = array);
  }

  if (!_isArray(array)) {
    throw new TypeError(
      'add args(array) is not array',
    );
  }
  if (!_isArray(values)) {
    throw new TypeError(
      'add args(values) is not array',
    );
  }
  if (!_isInteger(index)) {
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
  if (_inProperty(array, 'array, index, length')) {
    ({ array, index, length: deleteCount } = array);
  }

  if (!_isArray(array)) {
    throw new TypeError(
      'delete args(array) is not array',
    );
  }
  if (!_isInteger(index)) {
    throw new TypeError(
      'delete args(index) is not integer',
    );
  }
  if (!_isInteger(deleteCount)) {
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

