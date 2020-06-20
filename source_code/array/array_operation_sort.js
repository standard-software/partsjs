import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  allMatch,
} from '../compare/allMatch.js';

import {
  allMatchSome,
} from '../compare/allMatchSome.js';

import {
  _or,
} from '../compare/compare_common.js';

/**
 * array.sort
 */
export const _sort = (array, pattern, order) => {
  switch (pattern) {
  case 'number':
    switch (order) {
    case 'ascending':
      return array.sort((a, b) => (a - b));
    case 'descending':
      return array.sort((a, b) => (b - a));
    }
    break;
  case 'length':
    switch (order) {
    case 'ascending':
      return array.sort((a, b) => (a.length - b.length));
    case 'descending':
      return array.sort((a, b) => (b.length - a.length));
    }
    break;
  case 'dictionary':
    switch (order) {
    case 'ascending':
      return array.sort((a, b) => (
        a > b ? 1
        : a < b ? -1
        : 0
      ));
      // = array.sort();
    case 'descending':
      return array.sort((a, b) => (
        a > b ? -1
        : a < b ? 1
        : 0
      ));
    }
    break;
  }
};

export const sort =  (array, pattern, order) => {

  if (!isArray(array)) {
    throw new TypeError(
      'sortNumberAscending args(array) is not array',
    );
  }
  if (!_or(order, ['ascending', 'descending'])) {
    throw new TypeError(
      'sort args(order) is not [ascending|descending]',
    );
  }

  switch (pattern) {
  case 'number':
    if (!allMatch(array, isNumber)) {
      throw new TypeError(
        'sort number args(array) element is not number',
      );
    }
    break;
  case 'length':
    if (!allMatchSome(array, [isString, element => 'length' in element])) {
      throw new TypeError(
        'sort length args(array) element does not have length property',
      );
    }
    break;
  case 'dictionary':
    if (!allMatch(array, isString)) {
      throw new TypeError(
        'sort dictionary args(array) element is not string',
      );
    }
    break;
  default:
    throw new TypeError(
      'sort args(pattern) is not [number|length|dictionary]',
    );
  }

  return _sort(array, pattern, order);
};

export const _sortNumberAscending = (array) => {
  return _sort(array, 'number', 'ascending');
};

export const sortNumberAscending = (array) => {
  return sort(array, 'number', 'ascending');
};

export const _sortNumberDescending = (array) => {
  return _sort(array, 'number', 'descending');
};

export const sortNumberDescending = (array) => {
  return sort(array, 'number', 'descending');
};

export const _sortLengthAscending = (array) => {
  return _sort(array, 'length', 'ascending');
};

export const sortLengthAscending = (array) => {
  return sort(array, 'length', 'ascending');
};

export const _sortLengthDescending = (array) => {
  return _sort(array, 'length', 'descending');
};

export const sortLengthDescending = (array) => {
  return sort(array, 'length', 'descending');
};

export const _sortDictionaryAscending = (array) => {
  return _sort(array, 'dictionary', 'ascending');
};

export const sortDictionaryAscending = (array) => {
  return sort(array, 'dictionary', 'ascending');
};

export const _sortDictionaryDescending = (array) => {
  return _sort(array, 'dictionary', 'descending');
};

export const sortDictionaryDescending = (array) => {
  return sort(array, 'dictionary', 'descending');
};

export default {
  _sortNumberAscending, _sortNumberDescending,
  _sortLengthAscending, _sortLengthDescending,
  _sortDictionaryAscending, _sortDictionaryDescending,

  sortNumberAscending, sortNumberDescending,
  sortLengthAscending, sortLengthDescending,
  sortDictionaryAscending, sortDictionaryDescending,

}

