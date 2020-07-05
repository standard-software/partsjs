import {
  isString,
} from '../type/isType.js';

import {
  _subLength,
  _indexOfLast,
} from '../string/string.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

export const _subLastDelimLast = (str, delimiter) => {
  const index = _indexOfLast(str, delimiter);
  if (index === -1) {
    return '';
  } else {
    return _subLength(str, index + delimiter.length);
  }
};

export const subLastDelimLast = (str, delimiter) => {
  if (isObjectParameter(str, 'str, delimiter')) {
    ({ str, delimiter } = str);
  } else if (isObjectParameter(delimiter, 'delimiter')) {
    ({ delimiter } = delimiter);
  }

  if (!isString(str)) {
    throw new TypeError(
      'subLastDelimLast args(str) is not string',
    );
  }
  if (!isString(delimiter)) {
    throw new TypeError(
      'subLastDelimLast args(delimiter) is not string',
    );
  }

  return _subLastDelimLast(str, delimiter);
};

export default {
  _subLastDelimLast,
  subLastDelimLast,
};

