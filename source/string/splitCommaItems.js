import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  _split, split,
} from './split.js';

import {
  _trimBothEnds,
} from '../string/string_common.js';

import {
  __includes,
} from '../compare/__includes.js';

export const _splitCommaItems = (str) => {
  if (_trimBothEnds(str) === '') {
    return [];
  }

  const result = _split(
    str,
    ',',
    split.excludeEmptyStr.last,
    split.executeConvert.trimSpaceCrlf,
  );
  if (__includes(result, '')) {
    throw new Error('_splitCommaItems args(str) is not correct format');
  }
  return result;
};

export const splitCommaItems = (str) => {
  if (!isString(str)) {
    throw new TypeError('splitCommaItems args(str) is not string');
  }

  return _splitCommaItems(str);
};

export default {
  _splitCommaItems, splitCommaItems,
};
