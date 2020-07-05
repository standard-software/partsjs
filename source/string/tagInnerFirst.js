import {
  isString,
} from '../type/isType.js';

import {
  _subIndex,
  _indexOfFirst, _indexOfLast,
} from '../string/string.js';

import {
  isObjectParameter,
} from '../object/isObjectParameter.js';

import {
  _tagOuterFirst,
} from './tagOuterFirst.js';

export const _tagInnerFirst = (str, startTag, endTag) => {
  const result = _tagOuterFirst(str, startTag, endTag);
  if (result.length === 0) {
    return '';
  }
  return _subIndex(result, startTag.length, result.length - endTag.length - 1);
};

export const tagInnerFirst = (str, startTag, endTag) => {
  if (isObjectParameter(str, 'str, startTag, endTag')) {
    ({ str, startTag, endTag } = str);
  } else if (isObjectParameter(startTag, 'startTag, endTag')) {
    ({ startTag, endTag } = startTag);
  } else if (isObjectParameter(endTag, 'endTag')) {
    ({ endTag } = endTag);
  }

  if (!isString(str)) {
    throw new TypeError(
      'tagInnerFirst args(str) is not string',
    );
  }
  if (!isString(startTag)) {
    throw new TypeError(
      'tagInnerFirst args(startTag) is not string',
    );
  }
  if (!isString(endTag)) {
    throw new TypeError(
      'tagInnerFirst args(endTag) is not string',
    );
  }

  return _tagInnerFirst(str, startTag, endTag);
};

export default {
  _tagInnerFirst,
  tagInnerFirst,
};

