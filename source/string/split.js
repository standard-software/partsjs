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

/**
 * split
 */
export const _split = (
  str, separator,
  excludeEmptyStr = split.excludeEmptyStr.none,
  excludeSpace = split.excludeSpace.none,
) => {
  const result = str.split(separator);

  switch (excludeSpace) {
  case split.excludeSpace.none:
    break;
  case split.excludeSpace.trim:
    loop(result)((e, i) => {
      result[i] = _trimBothEnds(e, [' ']);
    });
    break;
  case split.excludeSpace.all:
    loop(result)((e, i) => {
      result[i] = _replaceAll(e, ' ', '');
    });
    break;
  default:
    throw new TypeError(
      '_split args(excludeSpace) is not ["none"|"trim"|"all"]',
    );
  }

  switch (excludeEmptyStr) {
  case split.excludeEmptyStr.none:
    break;
  case split.excludeEmptyStr.first:
    if (1 <= result.length) {
      if (_isFirst(result, [''])) {
        _deleteFirst(result);
      }
    }
    break;
  case split.excludeEmptyStr.last:
    if (2 <= result.length) {
      if (_isLast(result, [''])) {
        _deleteLast(result);
      }
    }
    break;
  case split.excludeEmptyStr.bothEnds:
    if (2 <= result.length) {
      if (_isFirst(result, [''])) {
        _deleteFirst(result);
      }
      if (_isLast(result, [''])) {
        _deleteLast(result);
      }
    }
    break;
  case split.excludeEmptyStr.all:
    _filter(result, element => element !== '');
    break;
  default:
    throw new TypeError(
      '_split args(excludeEmptyStr) is not ["none"|"first"|"last"|"bothEnds"|"all"]',
    );
  }

  return result;
};

export const split = (
  str, separator,
  excludeEmptyStr = split.excludeEmptyStr.none,
  excludeSpace = split.excludeSpace.none,
) => {
  if (
    isObjectParameter(str, 'str, separator', 'excludeEmptyStr, excludeSpace')
  ) {
    ({
      str, separator,
      excludeEmptyStr = split.excludeEmptyStr.none,
      excludeSpace = split.excludeSpace.none,
    } = str);
  } else if (
    isObjectParameter(separator, 'separator', 'excludeEmptyStr, excludeSpace')
  ) {
    ({ separator,
      excludeEmptyStr = split.excludeEmptyStr.none,
      excludeSpace = split.excludeSpace.none,
    } = separator);
  } else if (
    isObjectParameter(excludeEmptyStr, '', 'excludeEmptyStr, excludeSpace', 1)
  ) {
    ({
      excludeEmptyStr = split.excludeEmptyStr.none,
      excludeSpace = split.excludeSpace.none,
    } = excludeEmptyStr);
  } else if (
    isObjectParameter(excludeSpace, 'excludeSpace')
  ) {
    ({ excludeSpace } = excludeSpace);
  }

  return _split(str, separator, excludeEmptyStr, excludeSpace);
};

split.excludeEmptyStr = _Enum(['none', 'first', 'last', 'bothEnds', 'all']);

split.excludeSpace = _Enum(['none', 'trim', 'all']);

export default {
  _split, split,
};
