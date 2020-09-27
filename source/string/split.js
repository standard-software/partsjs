import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  _Enum,
} from '../syntax/Enum.js';

import {
  loop,
} from '../syntax/loop.js';

import {
  _deleteFirst, _deleteLast, _filter,
} from '../array/array_operation.js';

import {
  _isFirst, _isLast,
} from '../array/array_common.js';

import {
  _trimBothEnds,
} from '../string/string_common.js';

import {
  _replaceAll,
} from '../string/_replaceAll.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _or,
} from '../compare/or.js';

import {
  _objectValues,
} from '../object/objectValues.js';

import {
  _split,
} from '../string/_split.js';

/**
 * split
 */
export const split = (
  str, separator,
  excludeEmptyStr = split.excludeEmptyStr.none,
  executeConvert = split.executeConvert.none,
) => {
  if (
    isObjectParameter(str, 'str, separator', 'excludeEmptyStr, executeConvert')
  ) {
    ({
      str, separator,
      excludeEmptyStr = split.excludeEmptyStr.none,
      executeConvert = split.executeConvert.none,
    } = str);
  } else if (
    isObjectParameter(separator, 'separator', 'excludeEmptyStr, executeConvert')
  ) {
    ({ separator,
      excludeEmptyStr = split.excludeEmptyStr.none,
      executeConvert = split.executeConvert.none,
    } = separator);
  } else if (
    isObjectParameter(excludeEmptyStr, '', 'excludeEmptyStr, executeConvert', 1)
  ) {
    ({
      excludeEmptyStr = split.excludeEmptyStr.none,
      executeConvert = split.executeConvert.none,
    } = excludeEmptyStr);
  } else if (
    isObjectParameter(executeConvert, 'executeConvert')
  ) {
    ({ executeConvert } = executeConvert);
  }

  if (!isString(str)) {
    throw new TypeError('split args(str) is not string');
  }
  if (!isString(separator)) {
    throw new TypeError('split args(separator) is not string');
  }
  if (!_or(excludeEmptyStr, _objectValues(split.excludeEmptyStr))) {
    throw new TypeError(
      'split args(excludeEmptyStr) is not ["none","first","last","bothEnds","all"]',
    );
  }
  if (!_or(executeConvert, _objectValues(split.executeConvert))) {
    throw new TypeError(
      'split args(executeConvert) is not ["none","trim","all"]',
    );
  }

  return _split(str, separator, excludeEmptyStr, executeConvert);
};

split.excludeEmptyStr = _split.excludeEmptyStr;

split.executeConvert = _split.executeConvert;

export default {
  split,
};
