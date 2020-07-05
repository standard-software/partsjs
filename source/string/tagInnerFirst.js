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

export const _tagInnerFirstBase = (str, startTag, endTag) => {
  if (str === '') { return { find: false, value: '' }; }

  let indexStartTag = _indexOfFirst(str, startTag);
  if (indexStartTag === -1) {
    return { find: false, value: '' };
  }
  const indexEndTag = _indexOfFirst(str, endTag, indexStartTag + startTag.length);
  if (indexEndTag === -1) {
    return { find: false, value: '' };
  }
  indexStartTag = _indexOfLast(str, startTag, indexEndTag - startTag.length);
  if (indexStartTag === -1) {
    return { find: false, value: '' };
  }
  return {
    find: true,
    value: _subIndex(str, indexStartTag + startTag.length, indexEndTag - 1),
  };
};

export const _tagInnerFirst = (str, startTag, endTag) => {
  const result = _tagInnerFirstBase(str, startTag, endTag);
  return result.value;
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
  _tagInnerFirstBase,
  _tagInnerFirst,
  tagInnerFirst,
};

