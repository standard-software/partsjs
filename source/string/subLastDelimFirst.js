import {
  isString,
} from '../type/isType.js';

import {
  _subLength,
  _indexOfFirst,
} from '../string/string.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

export const _subLastDelimFirst = (str, delimiter) => {
  const index = _indexOfFirst(str, delimiter);
  if (index === -1) {
    return '';
  } else {
    return _subLength(str, index + delimiter.length);
  }
};

export const subLastDelimFirst = (str, delimiter) => {
  if (isObjectParameter(str, 'str, delimiter')) {
    ({ str, delimiter } = str);
  } else if (isObjectParameter(delimiter, 'delimiter')) {
    ({ delimiter } = delimiter);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subLastDelimFirst args(str) is not string',
    );
  }
  if (!isString(delimiter)) {
    throw new TypeError(
      'subLastDelimFirst args(delimiter) is not string',
    );
  }

  return _subLastDelimFirst(str, delimiter);
};

export default {
  _subLastDelimFirst,
  subLastDelimFirst,
};

