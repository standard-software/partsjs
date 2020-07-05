import {
  isString,
} from '../type/isType.js';

import {
  _subIndex,
  _indexOfLast,
} from '../string/string.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

export const _subFirstDelimLast = (str, delimiter) => {
  const index = _indexOfLast(str, delimiter);
  if (index === -1) {
    return '';
  } else {
    return _subIndex(str, 0, index - 1);
  }
};

export const subFirstDelimLast = (str, delimiter) => {
  if (isObjectParameter(str, 'str, delimiter')) {
    ({ str, delimiter } = str);
  } else if (isObjectParameter(delimiter, 'delimiter')) {
    ({ delimiter } = delimiter);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subFirstDelimLast args(str) is not string',
    );
  }
  if (!isString(delimiter)) {
    throw new TypeError(
      'subFirstDelimLast args(delimiter) is not string',
    );
  }

  return _subFirstDelimLast(str, delimiter);
};

export default {
  _subFirstDelimLast,
  subFirstDelimLast,
};

