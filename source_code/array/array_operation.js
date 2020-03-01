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
  _min,
  _isFirst, _isLast, _isBothEdges,
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
    _insert(array, [value]);
  }
  return array;
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
    _add(array, [value]);
  }
  return array;
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
 * array.operation.includeBothEdges
 */
const _includeBothEdges = (
  array, valueFirst, valueLast = valueFirst,
) => {
  if (!_isBothEdges(array, valueFirst, valueLast)) {
    _insert(array, [valueFirst]);
    _add(array, [valueLast]);
  }
  return array;
};

const includeBothEdges = (
  array, valueFirst, valueLast = valueFirst,
) => {
  if (isObjectParameter(array, 'array, valueFirst', 'valueLast')) {
    ({ array, valueFirst, valueLast = valueFirst } = array);
  } else if (isObjectParameter(array, 'array, value')) {
    ({ array, value: valueFirst, valueLast = valueFirst } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'includeBothEdges args(array) is not array',
    );
  }

  return _includeBothEdges(array, valueFirst, valueLast);
};

const includeBothEnds = includeBothEdges;

/**
 * array.operation.excludeFirst
 */
const _excludeFirst = (array, value) => {
  if (_isFirst(array, value)) {
    _deleteIndex(array, 0);
  }
  return array;
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
    _deleteIndex(array, array.length - 1);
  }
  return array;
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

/**
 * array.operation.excludeBothEdges
 */
const _excludeBothEdges = (
  array, valueFirst, valueLast = valueFirst,
) => {
  if (_isBothEdges(array, valueFirst, valueLast)) {
    _deleteIndex(array, 0);
    _deleteIndex(array, array.length - 1);
  }
  return array;
};

const excludeBothEdges = (
  array, valueFirst, valueLast = valueFirst,
) => {
  if (isObjectParameter(array, 'array, valueFirst', 'valueLast')) {
    ({ array, valueFirst, valueLast = valueFirst } = array);
  } else if (isObjectParameter(array, 'array, value')) {
    ({ array, value: valueFirst, valueLast = valueFirst } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'excludeBothEdges args(array) is not array',
    );
  }

  return _excludeBothEdges(array, valueFirst, valueLast);
};

const excludeBothEnds = excludeBothEdges;

/**
 * array.operation.trimFirst
 */
const _trimFirst = (array, value) => {
  while (_isFirst(array, value)) {
    _deleteIndex(array, 0);
  }
  return array;
};

const trimFirst = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'trimFirst args(array) is not array',
    );
  }

  return _trimFirst(array, value);
};

/**
 * array.operation.trimLast
 */
const _trimLast = (array, value) => {
  while (_isLast(array, value)) {
    _deleteIndex(array, array.length - 1);
  }
  return array;
};

const trimLast = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'trimLast args(array) is not array',
    );
  }

  return _trimLast(array, value);
};

/**
 * array.operation.trimBothEdges
 */
const _trimBothEdges = (
  array, valueFirst, valueLast = valueFirst,
) => {
  while (_isFirst(array, valueFirst)) {
    _deleteIndex(array, 0);
  }
  while (_isLast(array, valueLast)) {
    _deleteIndex(array, array.length - 1);
  }
  return array;
};

const trimBothEdges = (
  array, valueFirst, valueLast = valueFirst,
) => {
  if (isObjectParameter(array, 'array, valueFirst', 'valueLast')) {
    ({ array, valueFirst, valueLast = valueFirst } = array);
  } else if (isObjectParameter(array, 'array, value')) {
    ({ array, value: valueFirst, valueLast = valueFirst } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'trimBothEdges args(array) is not array',
    );
  }

  return _trimBothEdges(array, valueFirst, valueLast);
};

const trimBothEnds = trimBothEdges;

/**
 * array.operation.popFirst
 */
const _popFirst = (array) => {
  return array.shift();
};

const popFirst = (array) => {
  if (!isArray(array)) {
    throw new TypeError(
      'popFirst args(array) is not array',
    );
  }

  return _popFirst(array);
};

/**
 * array.operation.popLast
 */
const _popLast = (array, value) => {
  return array.pop();
};

const popLast = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'popLast args(array) is not array',
    );
  }

  return _popLast(array, value);
};

/**
 * array.operation.pushFirst
 */
const _pushFirst = (array, value) => {
  array.unshift(value);
  return array.length;
  // WSH array.unshift is return undefined
};

const pushFirst = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'pushFirst args(array) is not array',
    );
  }

  return _pushFirst(array, value);
};

/**
 * array.operation.pushLast
 */
const _pushLast = (array, value) => {
  return array.push(value);
};

const pushLast = (array, value) => {
  if (isObjectParameter(array, 'array, value')) {
    ({ array, value } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'pushLast args(array) is not array',
    );
  }

  return _pushLast(array, value);
};

/**
 * array.operation.remainFirst
 */
const _remainFirst = (array, length) => {
  if (array.length <= length) {
    return array;
  }
  return _deleteIndex(array, length, array.length - 1);
};

const remainFirst = (array, length) => {
  if (isObjectParameter(array, 'array, length')) {
    ({ array, length } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'remainFirst args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      `remainFirst args(length) is not integer`,
    );
  }
  if (!(0 <= length)) {
    throw new RangeError(
      'remainFirst args(indexFirst) must be from 0 to array.length - 1',
    );
  }

  return _remainFirst(array, length);
};

/**
 * array.operation.remainLast
 */
const _remainLast = (array, length) => {
  if (array.length <= length) {
    return array;
  }
  return _deleteLength(array, 0, array.length - length);
};

const remainLast = (array, length) => {
  if (isObjectParameter(array, 'array, length')) {
    ({ array, length } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'remainLast args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      `remainLast args(length) is not integer`,
    );
  }
  if (!(0 <= length)) {
    throw new RangeError(
      'remainLast args(indexFirst) must be from 0 to array.length - 1',
    );
  }

  return _remainLast(array, length);
};

/**
 * filter
 */
const _filter = (array, func) => {
  for (let i = array.length -1; 0 <= i; i -= 1) {
    const resultFunc = func(array[i], i, array);
    if (!isBoolean(resultFunc)) {
      throw new TypeError(
        '_filter args(compareFunc) result is not boolean',
      );
    }
    if (!resultFunc) {
      _deleteIndex(array, i);
    }
  }
  return array;
};

const filter = (array, func) => {
  if (isObjectParameter(array, 'array, func')) {
    ({ array, func } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'filter args(array) is not array',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'filter args(compareFunc) is not function',
    );
  }
  return _filter(array, func);
};


module.exports = {
  _insert, _add,
  _deleteLength, _deleteIndex,
  _includeFirst, _includeLast, _includeBothEdges,
  _excludeFirst, _excludeLast, _excludeBothEdges,
  _trimFirst, _trimLast, _trimBothEdges,
  _popFirst, _popLast,
  _pushFirst, _pushLast,
  _remainFirst, _remainLast,
  _filter,

  insert, add,
  deleteLength, deleteIndex,
  includeFirst, includeLast, includeBothEdges,
  excludeFirst, excludeLast, excludeBothEdges,
  trimFirst, trimLast, trimBothEdges,
  popFirst, popLast,
  pushFirst, pushLast,
  remainFirst, remainLast,
  filter,

  includeBothEnds,
  excludeBothEnds,
  trimBothEnds,
};

