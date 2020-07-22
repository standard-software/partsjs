import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  _inRange, _makeInRange,
} from '../number/number.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _min,
  _some,
  _isFirst, _isLast, _isBothEnds,
} from '../array/array_common.js';

/**
 * array.operation.insert
 */
export const _insert = (array, valueArray, index = 0) => {
  array.splice(index, 0, ...valueArray);
  return array;
};

export const insert = (array, valueArray, index = 0) => {
  if (isObjectParameter(array, 'array, valueArray, index')) {
    ({ array, valueArray, index } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'insert args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'insert args(valueArray) is not array',
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

  return _insert(array, valueArray, index);
};

/**
 * array.operation.add
 */
export const _add = (array, valueArray, index = array.length - 1) => {
  array.splice(index + 1, 0, ...valueArray);
  return array;
};

export const add = (array, valueArray, index = array.length - 1) => {
  if (isObjectParameter(array, 'array, valueArray, index')) {
    ({ array, valueArray, index } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'add args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'add args(valueArray) is not array',
    );
  }
  if (!isInteger(index)) {
    throw new TypeError(
      'add args(index) is not integer',
    );
  }
  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError(
      'add args(index) must be from -1 to array.length - 1',
    );
  }

  return _add(array, valueArray, index);
};

/**
 * array.operation.deleteIndex
 */
export const _deleteIndex = (
  array, indexStart, indexEnd = indexStart,
) => {
  array.splice(indexStart, indexEnd - indexStart + 1);
  return array;
};

export const deleteIndex = (array, indexStart, indexEnd = indexStart) => {
  if (isObjectParameter(array, 'array, indexStart', 'indexEnd')) {
    ({ array, indexStart, indexEnd = indexStart } = array);
  } else if (isObjectParameter(array, 'array, index')) {
    ({ array, index: indexStart, indexEnd = indexStart } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'deleteIndex args(array) is not array',
    );
  }
  if (!isInteger(indexStart)) {
    throw new TypeError(
      'deleteIndex args(indexStart) is not integer',
    );
  }
  if (!isInteger(indexEnd)) {
    throw new TypeError(
      'deleteIndex args(indexEnd) is not integer',
    );
  }
  if (!_inRange(indexStart, 0, array.length - 1)) {
    throw new RangeError(
      'deleteIndex args(indexStart) must be from 0 to array.length - 1',
    );
  }
  if (!_inRange(indexEnd, indexStart, array.length - 1)) {
    throw new RangeError(
      'deleteIndex args(indexEnd) must be from indexStart to array.length - 1',
    );
  }

  return _deleteIndex(array, indexStart, indexEnd);
};

/**
 * array.operation.deleteLength
 */
export const _deleteLength = (
  array, index, length = array.length - index,
) => {
  return _deleteIndex(array, index, index + length - 1);
  // same:
  //  array.splice(index, length);
  //  return array;
};

export const deleteLength = (
  array, index, length = array.length - index,
) => {
  if (isObjectParameter(array, 'array, index', 'length')) {
    ({
      array, index, length  = array.length - index,
    } = array);
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
  length = _min([length, array.length - index]);
  if (!_inRange(length, 0, array.length - index)) {
    throw new RangeError(
      'deleteLength args(length) must be from 0 to array.length - index',
    );
  }

  return _deleteLength(array, index, length);
};

/**
 * array.operation.deleteFirst
 */
export const _deleteFirst = (array, length) => {
  return _deleteLength(array, 0, length);
};

export const deleteFirst = (array, length) => {
  if (isObjectParameter(array, 'array, length')) {
    ({ array, length } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'deleteFirst args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'deleteFirst args(length) is not integer',
    );
  }
  if (!_inRange(length, 0, array.length)) {
    throw new RangeError(
      'deleteFirst args(length) must be from 0 to array.length',
    );
  }

  return _deleteFirst(array, length);
};

/**
 * array.operation.deleteLast
 */
export const _deleteLast = (array, length) => {
  return _deleteLength(array, array.length - length, length);
};

export const deleteLast = (array, length) => {
  if (isObjectParameter(array, 'array, length')) {
    ({ array, length } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'deleteLast args(array) is not array',
    );
  }
  if (!isInteger(length)) {
    throw new TypeError(
      'deleteLast args(length) is not integer',
    );
  }
  if (!_inRange(length, 0, array.length)) {
    throw new RangeError(
      'deleteLast args(length) must be from 0 to array.length',
    );
  }

  return _deleteLast(array, length);
};

/**
 * array.operation.includeFirst
 */
export const _includeFirst = (array, valueArray) => {
  if (!_isFirst(array, valueArray)) {
    _insert(array, valueArray);
  }
  return array;
};

export const includeFirst = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'includeFirst args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'includeFirst args(valueArray) is not array',
    );
  }

  return _includeFirst(array, valueArray);
};

/**
 * array.operation.includeLast
 */
export const _includeLast = (array, valueArray) => {
  if (!_isLast(array, valueArray)) {
    _add(array, valueArray);
  }
  return array;
};

export const includeLast = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'includeLast args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'includeLast args(valueArray) is not array',
    );
  }

  return _includeLast(array, valueArray);
};

/**
 * array.operation.includeBothEnds
 */
export const _includeBothEnds = (
  array,
  valueFirstArray,
  valueLastArray = valueFirstArray,
) => {
  if (!_isBothEnds(array, valueFirstArray, valueLastArray)) {
    _insert(array, valueFirstArray);
    _add(array, valueLastArray);
  }
  return array;
};

export const includeBothEnds = (
  array,
  valueFirstArray,
  valueLastArray = valueFirstArray,
) => {
  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    ({ array, valueFirstArray, valueLastArray = valueFirstArray } = array);
  } else if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray: valueFirstArray, valueLastArray = valueFirstArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'includeBothEnds args(array) is not array',
    );
  }
  if (!isArray(valueFirstArray)) {
    throw new TypeError(
      'includeBothEnds args(valueFirstArray) is not array',
    );
  }
  if (!isArray(valueLastArray)) {
    throw new TypeError(
      'includeBothEnds args(valueLastArray) is not array',
    );
  }

  return _includeBothEnds(
    array,
    valueFirstArray,
    valueLastArray,
  );
};

/**
 * array.operation.excludeFirst
 */
export const _excludeFirst = (array, valueArray) => {
  if (_isFirst(array, valueArray)) {
    _deleteFirst(array, valueArray.length);
  }
  return array;
};

export const excludeFirst = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'excludeFirst args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'excludeFirst args(valueArray) is not array',
    );
  }

  return _excludeFirst(array, valueArray);
};

/**
 * array.operation.excludeLast
 */
export const _excludeLast = (array, valueArray) => {
  if (_isLast(array, valueArray)) {
    _deleteLast(array, valueArray.length);
  }
  return array;
};

export const excludeLast = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'excludeLast args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'excludeLast args(valueArray) is not array',
    );
  }

  return _excludeLast(array, valueArray);
};

/**
 * array.operation.excludeBothEnds
 */
export const _excludeBothEnds = (
  array,
  valueFirstArray,
  valueLastArray = valueFirstArray,
) => {
  if (_isBothEnds(array, valueFirstArray, valueLastArray)) {
    deleteFirst(array, valueFirstArray.length);
    deleteLast(array, _min([valueLastArray.length, array.length]));
  }
  return array;
};

export const excludeBothEnds = (
  array,
  valueFirstArray,
  valueLastArray = valueFirstArray,
) => {
  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    ({ array, valueFirstArray, valueLastArray = valueFirstArray } = array);
  } else if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray: valueFirstArray, valueLastArray = valueFirstArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'excludeBothEnds args(array) is not array',
    );
  }
  if (!isArray(valueFirstArray)) {
    throw new TypeError(
      'excludeBothEnds args(valueFirstArray) is not array',
    );
  }
  if (!isArray(valueLastArray)) {
    throw new TypeError(
      'excludeBothEnds args(valueLastArray) is not array',
    );
  }

  return _excludeBothEnds(
    array,
    valueFirstArray,
    valueLastArray,
  );
};

/**
 * array.operation.trimFirst
 */
export const _trimFirst = (array, valueArray) => {
  while (_some(valueArray, value => _isFirst(array, [value]))) {
    _deleteIndex(array, 0);
  }
  return array;
};

export const trimFirst = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'trimFirst args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'trimFirst args(valueArray) is not array',
    );
  }

  return _trimFirst(array, valueArray);
};

/**
 * array.operation.trimLast
 */
export const _trimLast = (array, valueArray) => {
  while (_some(valueArray, value => _isLast(array, [value]))) {
    _deleteIndex(array, array.length - 1);
  }
  return array;
};

export const trimLast = (array, valueArray) => {
  if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'trimLast args(array) is not array',
    );
  }
  if (!isArray(valueArray)) {
    throw new TypeError(
      'trimLast args(valueArray) is not array',
    );
  }

  return _trimLast(array, valueArray);
};

/**
 * array.operation.trimBothEnds
 */
export const _trimBothEnds = (
  array, valueFirstArray, valueLastArray = valueFirstArray,
) => {
  while (_some(
    valueFirstArray,
    valueFirst => _isFirst(array, [valueFirst]),
  )) {
    _deleteIndex(array, 0);
  }
  while (_some(
    valueLastArray,
    valueLast => _isLast(array, [valueLast]),
  )) {
    _deleteIndex(array, array.length - 1);
  }
  return array;
};

export const trimBothEnds = (
  array, valueFirstArray, valueLastArray = valueFirstArray,
) => {
  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    ({ array, valueFirstArray, valueLastArray = valueFirstArray } = array);
  } else if (isObjectParameter(array, 'array, valueArray')) {
    ({ array, valueArray: valueFirstArray, valueLastArray = valueFirstArray } = array);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'trimBothEnds args(array) is not array',
    );
  }
  if (!isArray(valueFirstArray)) {
    throw new TypeError(
      'trimBothEnds args(valueFirstArray) is not array',
    );
  }
  if (!isArray(valueLastArray)) {
    throw new TypeError(
      'trimBothEnds args(valueLastArray) is not array',
    );
  }

  return _trimBothEnds(array, valueFirstArray, valueLastArray);
};

/**
 * array.operation.popFirst
 */
export const _popFirst = (array) => {
  return array.shift();
};

export const popFirst = (array) => {
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
export const _popLast = (array, value) => {
  return array.pop();
};

export const popLast = (array, value) => {
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
export const _pushFirst = (array, value) => {
  array.unshift(value);
  return array.length;
  // WSH array.unshift is return undefined
};

export const pushFirst = (array, value) => {
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
export const _pushLast = (array, value) => {
  return array.push(value);
};

export const pushLast = (array, value) => {
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
export const _remainFirst = (array, length) => {
  if (array.length <= length) {
    return array;
  }
  return _deleteIndex(array, length, array.length - 1);
};

export const remainFirst = (array, length) => {
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
      'remainFirst args(length) is not integer',
    );
  }
  if (!(0 <= length)) {
    throw new RangeError(
      'remainFirst args(length) must be from 0 to array.length - 1',
    );
  }

  return _remainFirst(array, length);
};

/**
 * array.operation.remainLast
 */
export const _remainLast = (array, length) => {
  if (array.length <= length) {
    return array;
  }
  return _deleteLength(array, 0, array.length - length);
};

export const remainLast = (array, length) => {
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
      'remainLast args(length) is not integer',
    );
  }
  if (!(0 <= length)) {
    throw new RangeError(
      'remainLast args(length) must be from 0 to array.length - 1',
    );
  }

  return _remainLast(array, length);
};

/**
 * filter
 */
export const _filter = (array, func) => {
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

export const filter = (array, func) => {
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


export default {
  _insert, _add,
  _deleteLength, _deleteIndex,
  _deleteFirst, _deleteLast,
  _includeFirst, _includeLast, _includeBothEnds,
  _excludeFirst, _excludeLast, _excludeBothEnds,
  _trimFirst, _trimLast, _trimBothEnds,
  _popFirst, _popLast,
  _pushFirst, _pushLast,
  _remainFirst, _remainLast,
  _filter,

  insert, add,
  deleteLength, deleteIndex,
  deleteFirst, deleteLast,
  includeFirst, includeLast, includeBothEnds,
  excludeFirst, excludeLast, excludeBothEnds,
  trimFirst, trimLast, trimBothEnds,
  popFirst, popLast,
  pushFirst, pushLast,
  remainFirst, remainLast,
  filter,
};

