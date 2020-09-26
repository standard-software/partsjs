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

/**
 * split
 */
export const _split = (
  str, separator,
  excludeEmptyStr = split.excludeEmptyStr.none,
  executeConvert = split.executeConvert.none,
) => {
  const result = str.split(separator);

  switch (executeConvert) {
  case split.executeConvert.none:
    break;
  case split.executeConvert.trimSpace:
    loop(result)((e, i) => {
      result[i] = _trimBothEnds(e, [' ']);
    });
    break;
  case split.executeConvert.trimSpaceCrlf:
    loop(result)((e, i) => {
      result[i] = _trimBothEnds(e);
    });
    break;
  case split.executeConvert.excludeSpace:
    loop(result)((e, i) => {
      result[i] = _replaceAll(e, ' ', '');
    });
    break;
  case split.executeConvert.excludeSpaceCrlf:
    loop(result)((e, i) => {
      result[i] = _replaceAll(
        _replaceAll(
          _replaceAll(
            e,
            '\n', '',
          ),
          '\r', '',
        ),
        ' ', '',
      );
    });
    break;
  default:
    throw new TypeError(
      '_split args(executeConvert) is not ["none"|"trim"|"all"]',
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

split.excludeEmptyStr = _Enum(['none', 'first', 'last', 'bothEnds', 'all']);

split.executeConvert = _Enum([
  'none',
  'trimSpace', 'trimSpaceCrlf',
  'excludeSpace', 'excludeSpaceCrlf',
]);

export default {
  _split, split,
};
