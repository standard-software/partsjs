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
  excludeEmptyStr = _split.excludeEmptyStr.none,
  executeConvert = _split.executeConvert.none,
) => {
  const result = str.split(separator);

  switch (executeConvert) {
  case _split.executeConvert.none:
    break;
  case _split.executeConvert.trimSpace:
    loop(result)((e, i) => {
      result[i] = _trimBothEnds(e, [' ']);
    });
    break;
  case _split.executeConvert.trimSpaceCrlf:
    loop(result)((e, i) => {
      result[i] = _trimBothEnds(e);
    });
    break;
  case _split.executeConvert.excludeSpace:
    loop(result)((e, i) => {
      result[i] = _replaceAll(e, ' ', '');
    });
    break;
  case _split.executeConvert.excludeSpaceCrlf:
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
  case _split.excludeEmptyStr.none:
    break;
  case _split.excludeEmptyStr.first:
    if (1 <= result.length) {
      if (_isFirst(result, [''])) {
        _deleteFirst(result);
      }
    }
    break;
  case _split.excludeEmptyStr.last:
    if (2 <= result.length) {
      if (_isLast(result, [''])) {
        _deleteLast(result);
      }
    }
    break;
  case _split.excludeEmptyStr.bothEnds:
    if (2 <= result.length) {
      if (_isFirst(result, [''])) {
        _deleteFirst(result);
      }
      if (_isLast(result, [''])) {
        _deleteLast(result);
      }
    }
    break;
  case _split.excludeEmptyStr.all:
    _filter(result, element => element !== '');
    break;
  default:
    throw new TypeError(
      '_split args(excludeEmptyStr) is not ["none"|"first"|"last"|"bothEnds"|"all"]',
    );
  }

  return result;
};

_split.excludeEmptyStr = _Enum(['none', 'first', 'last', 'bothEnds', 'all']);

_split.executeConvert = _Enum([
  'none',
  'trimSpace', 'trimSpaceCrlf',
  'excludeSpace', 'excludeSpaceCrlf',
]);

export default {
  _split,
};
