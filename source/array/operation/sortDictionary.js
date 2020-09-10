import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction,
  isObject, isObjectNormal, isObjectFromNull,
  isObjectLike, isModule,
  isArray, isArraySeries,
  isDate, isRegExp,
  isBooleanObject, isNumberObject, isStringObject,
  isEmptyObject, isEmptyArray,
} from '../../type/isType.js';

import {
  switch_,
} from '../../syntax/syntax.js';

import {
  _or,
} from '../../compare/or.js';

import {
  isObjectParameter,
} from '../../object/isObjectParameter.js';

import {
  _objectValues,
} from '../../object/objectValues.js';

import {
  _Enum,
} from '../../syntax/Enum.js';

import {
  sort,
} from './sort.js';

/**
 * array.operation.sortDictionary
 */
export const _sortDictionary = (
  array,
  order = sort.order.ascending,
  casePriority = sortDictionary.casePriority.upperCase,
  func = sort.targetFunc.returnValueErrorNotIsString,
) => {
  switch (casePriority) {
  case sortDictionary.casePriority.ignoreCase: {
    const orderFunc =
      order === sort.order.descending
        ? sortDictionary.orderFunc.ignoreCase.descending
        : sortDictionary.orderFunc.ignoreCase.ascending;
    array.sort((a, b) => {
      return orderFunc(func(a).toLowerCase(), func(b).toLowerCase());
    });
    return array;
  }
  case sortDictionary.casePriority.upperCase: {
    const orderFunc =
      order === sort.order.descending
        ? sortDictionary.orderFunc.upperCase.descending
        : sortDictionary.orderFunc.upperCase.ascending;
    array.sort((a, b) => {
      return orderFunc(func(a), func(b));
    });
    return array;
  }
  case sortDictionary.casePriority.lowerCase: {
    const orderFunc =
      order === sort.order.descending
        ? sortDictionary.orderFunc.lowerCase.descending
        : sortDictionary.orderFunc.lowerCase.ascending;
    array.sort((a, b) => {
      return orderFunc(func(a), func(b));
    });
    return array;
  }
  }
  throw new TypeError(
    '_sortDictionary args(casePriority) is not ["upperCase"|"lowerCase"|"ignoreCase"]',
  );
};

export const sortDictionary = (
  array,
  order = sort.order.ascending,
  casePriority = sortDictionary.casePriority.upperCase,
  func = sort.targetFunc.returnValueErrorNotIsString,
) => {
  if (isObjectParameter(array, 'array', 'order, casePriority, func')) {
    ({
      array,
      order = sort.order.ascending,
      casePriority = sortDictionary.casePriority.upperCase,
      func = sort.targetFunc.returnValue,
    } = array);
  } else if (isObjectParameter(order, '', 'order, casePriority, func')) {
    ({ order = sort.order.ascending,
      casePriority = sortDictionary.casePriority.upperCase,
      func = sort.targetFunc.returnValue,
    } = order);
  } else if (isObjectParameter(casePriority, '', 'casePriority, func', 1)) {
    ({
      casePriority = sortDictionary.casePriority.upperCase,
      func = sort.targetFunc.returnValue,
    } = func);
  } else if (isObjectParameter(func, 'func')) {
    ({ func = sort.targetFunc.returnValue } = func);
  }

  if (!isArray(array)) {
    throw new TypeError(
      'sortDictionary args(array) is not array',
    );
  }
  if (!_or(order, _objectValues(sort.order))) {
    throw new TypeError(
      'sortDictionary args(order) is not ["ascending"|"descending"]',
    );
  }
  if (!_or(casePriority, _objectValues(sortDictionary.casePriority))) {
    throw new TypeError(
      'sortDictionary args(casePriority) is not ["upperCase"|"lowerCase"|"ignoreCase"]',
    );
  }
  if (!isFunction(func)) {
    throw new TypeError(
      'sortDictionary args(func) is not function',
    );
  }

  return _sortDictionary(array, order, casePriority, func);
};

sortDictionary.casePriority = _Enum(['upperCase', 'lowerCase', 'ignoreCase']);

sortDictionary.orderFunc = {
  upperCase: {
    ascending: (a, b) => {
      const al = a.toLowerCase();
      const bl = b.toLowerCase();
      if (al < bl) {
        return -1;
      }
      if (bl < al) {
        return 1;
      }
      a = a.split('');  // support for wsh
      b = b.split('');
      for (let i = 0, l = al.length; i < l; i += 1) {
        if (a[i] < b[i]) {
          return -1;
        }
        if (b[i] < a[i]) {
          return 1;
        }
      }
      return 0;
    },
    descending: (a, b) => {
      const al = a.toLowerCase();
      const bl = b.toLowerCase();
      if (al < bl) {
        return 1;
      }
      if (bl < al) {
        return -1;
      }
      a = a.split('');
      b = b.split('');
      for (let i = 0, l = al.length; i < l; i += 1) {
        if (a[i] < b[i]) {
          return -1;
        }
        if (b[i] < a[i]) {
          return 1;
        }
      }
      return 0;
    },
  },
  lowerCase: {
    ascending: (a, b) => {
      const al = a.toLowerCase();
      const bl = b.toLowerCase();
      if (al < bl) {
        return -1;
      }
      if (bl < al) {
        return 1;
      }
      a = a.split('');
      b = b.split('');
      for (let i = 0, l = al.length; i < l; i += 1) {
        if (a[i] < b[i]) {
          return 1;
        }
        if (b[i] < a[i]) {
          return -1;
        }
      }
      return 0;
    },
    descending: (a, b) => {
      const al = a.toLowerCase();
      const bl = b.toLowerCase();
      if (al < bl) {
        return 1;
      }
      if (bl < al) {
        return -1;
      }
      a = a.split('');
      b = b.split('');
      for (let i = 0, l = al.length; i < l; i += 1) {
        if (a[i] < b[i]) {
          return 1;
        }
        if (b[i] < a[i]) {
          return -1;
        }
      }
      return 0;
    },
  },
  ignoreCase: {
    ascending: (a, b) => {
      const al = a.toLowerCase();
      const bl = b.toLowerCase();
      if (al < bl) {
        return -1;
      }
      if (bl < al) {
        return 1;
      }
      return 0;
    },
    descending: (a, b) => {
      const al = a.toLowerCase();
      const bl = b.toLowerCase();
      if (al < bl) {
        return 1;
      }
      if (bl < al) {
        return -1;
      }
      return 0;
    },
  },
};

sortDictionary.order = sort.order;

sortDictionary.targetFunc = sort.targetFunc;


export const sortDictionaryAscending = (
  array,
  casePriority = sortDictionary.casePriority.upperCase,
) => {
  return sortDictionary(array, sort.order.ascending, casePriority);
};

export const sortDictionaryDescending = (
  array,
  casePriority = sortDictionary.casePriority.upperCase,
) => {
  return sortDictionary(array, sort.order.descending, casePriority);
};

export default {
  _sortDictionary,
  sortDictionary,
  sortDictionaryAscending, sortDictionaryDescending,
};
