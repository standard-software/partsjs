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
  _tagInnerFirstBase,
} from './tagInnerFirst.js';

export const _tagOuterFirst = (str, startTag, endTag) => {
  const result = _tagInnerFirstBase(str, startTag, endTag);

  if (!result.find) {
    return '';
  }
  return startTag + result.value + endTag;
};

export const tagOuterFirst = (str, startTag, endTag) => {
  if (isObjectParameter(str, 'str, startTag, endTag')) {
    ({ str, startTag, endTag } = str);
  } else if (isObjectParameter(startTag, 'startTag, endTag')) {
    ({ startTag, endTag } = startTag);
  } else if (isObjectParameter(endTag, 'endTag')) {
    ({ endTag } = endTag);
  }

  if (!isString(str)) {
    throw new TypeError(
      'tagOuterFirst args(str) is not string',
    );
  }
  if (!isString(startTag)) {
    throw new TypeError(
      'tagOuterFirst args(startTag) is not string',
    );
  }
  if (!isString(endTag)) {
    throw new TypeError(
      'tagOuterFirst args(endTag) is not string',
    );
  }

  return _tagOuterFirst(str, startTag, endTag);
};

export default {
  _tagOuterFirst,
  tagOuterFirst,
};

