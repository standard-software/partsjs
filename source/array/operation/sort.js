import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,

  isUndefinedArray, isNullArray, isNaNStrictArray,
  isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
  isFunctionArray, isObjectArray, isArrayArray, isDateArray, isRegExpArray,
  isExceptionArray,
} from '../../type/type.js';

import {
  allMatch,
} from '../../compare/allMatch.js';

import {
  allMatchSome,
} from '../../compare/allMatchSome.js';

import {
  sortOrderFunction,
} from '../../array/operation/sortOrderFunction.js';

/**
 * array.operation.sort
 */
export const _sort = (array, sortOrderFunc, func = v => v ) => {
  array.sort((a, b) => {
    return sortOrderFunc(func(a), func(b));
  });
  return array;
};

export const sort = (array, sortOrderFunc, func) => {

  if (!isArray(array)) {
    throw new TypeError(
      'sort args(array) is not array',
    );
  }
  if (!(isFunction(func) || isUndefined(func))) {
    throw new TypeError(
      'sort args(func) is not function',
    );
  }
  if (!isFunction(sortOrderFunc)) {
    throw new TypeError(
      'sort args(sortOrderFunc) is not function',
    );
  }

  if (isUndefined(func)) {
    if (Object.values(sortOrderFunction.number).includes(sortOrderFunc)) {
      if (!allMatch(array, isNumber)) {
        throw new TypeError(
          'sort args(array) element is not number',
        );
      }
    }
    if (Object.values(sortOrderFunction.length).includes(sortOrderFunc)) {
      if (!allMatchSome(array, [isString, v => 'length' in v])) {
        throw new TypeError(
          'sort args(array) element has not length property',
        );
      }
    }
    if (Object.values(sortOrderFunction.dictionary).includes(sortOrderFunc)) {
      if (!allMatch(array, isString)) {
        throw new TypeError(
          'sort args(array) element is not string',
        );
      }
    }
  }

  return _sort(array, sortOrderFunc, func);
};

export const _sortNumberAscending = (array) => {
  return _sort(array, sortOrderFunction.number.ascending);
};

export const sortNumberAscending = (array) => {
  return sort(array, sortOrderFunction.number.ascending);
};

export const _sortNumberDescending = (array) => {
  return _sort(array, sortOrderFunction.number.descending);
};

export const sortNumberDescending = (array) => {
  return sort(array, sortOrderFunction.number.descending);
};

export const _sortLengthAscending = (array) => {
  return _sort(array, sortOrderFunction.length.ascending);
};

export const sortLengthAscending = (array) => {
  return sort(array, sortOrderFunction.length.ascending);
};

export const _sortLengthDescending = (array) => {
  return _sort(array, sortOrderFunction.length.descending);
};

export const sortLengthDescending = (array) => {
  return sort(array, sortOrderFunction.length.descending);
};

export const _sortDictionaryAscending = (array) => {
  return _sort(array, sortOrderFunction.dictionary.ascending);
};

export const sortDictionaryAscending = (array) => {
  return sort(array, sortOrderFunction.dictionary.ascending);
};

export const _sortDictionaryDescending = (array) => {
  return _sort(array, sortOrderFunction.dictionary.descending);
};

export const sortDictionaryDescending = (array) => {
  return sort(array, sortOrderFunction.dictionary.descending);
};

export default {
  _sort,
  _sortNumberAscending, _sortNumberDescending,
  _sortLengthAscending, _sortLengthDescending,
  _sortDictionaryAscending, _sortDictionaryDescending,

  sort,
  sortNumberAscending, sortNumberDescending,
  sortLengthAscending, sortLengthDescending,
  sortDictionaryAscending, sortDictionaryDescending,
};
