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

export const _tagOuterFirst = (str, startTag, endTag) => {
  if (str === '') { return ''; }

  let indexStartTag = _indexOfFirst(str, startTag);
  if (indexStartTag === -1) {
    return '';
  }
  const indexEndTag = _indexOfFirst(str, endTag, indexStartTag + startTag.length);
  if (indexEndTag === -1) {
    return '';
  }
  indexStartTag = _indexOfLast(str, startTag, indexEndTag - startTag.length);
  if (indexStartTag === -1) {
    return '';
  }
  return _subIndex(str, indexStartTag, indexEndTag + endTag.length - 1);
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

