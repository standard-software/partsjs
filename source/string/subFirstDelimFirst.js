import {
  isString,
} from '../type/isType.js';

import {
  _subIndex,
  _indexOfFirst,
} from '../string/string.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

export const _subFirstDelimFirst = (str, delimiter) => {
  const index = _indexOfFirst(str, delimiter);
  if (index === -1) {
    return '';
  } else {
    return _subIndex(str, 0, index - 1);
  }
};

export const subFirstDelimFirst = (str, delimiter) => {
  if (isObjectParameter(str, 'str, delimiter')) {
    ({ str, delimiter } = str);
  } else if (isObjectParameter(delimiter, 'delimiter')) {
    ({ delimiter } = delimiter);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subFirstDelimFirst args(str) is not string',
    );
  }
  if (!isString(delimiter)) {
    throw new TypeError(
      'subFirstDelimFirst args(delimiter) is not string',
    );
  }

  return _subFirstDelimFirst(str, delimiter);
};

export default {
  _subFirstDelimFirst,
  subFirstDelimFirst,
};

