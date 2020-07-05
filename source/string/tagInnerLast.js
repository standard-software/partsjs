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

export const _tagInnerLastBase = (str, startTag, endTag) => {
  if (str === '') { return { find: false, value: '' }; }

  let indexEndTag = _indexOfLast(str, endTag);
  if (indexEndTag === -1) {
    return { find: false, value: '' };
  }
  const indexStartTag = _indexOfLast(str, startTag, indexEndTag - startTag.length);
  if (indexStartTag === -1) {
    return { find: false, value: '' };
  }
  indexEndTag = _indexOfFirst(str, endTag, indexStartTag + startTag.length);
  if (indexEndTag === -1) {
    return { find: false, value: '' };
  }
  return {
    find: true,
    value: _subIndex(str, indexStartTag + startTag.length, indexEndTag - 1),
  };
};

export const _tagInnerLast = (str, startTag, endTag) => {
  const result = _tagInnerLastBase(str, startTag, endTag);
  return result.value;
};

export const tagInnerLast = (str, startTag, endTag) => {
  if (isObjectParameter(str, 'str, startTag, endTag')) {
    ({ str, startTag, endTag } = str);
  } else if (isObjectParameter(startTag, 'startTag, endTag')) {
    ({ startTag, endTag } = startTag);
  } else if (isObjectParameter(endTag, 'endTag')) {
    ({ endTag } = endTag);
  }

  if (!isString(str)) {
    throw new TypeError(
      'tagInnerLast args(str) is not string',
    );
  }
  if (!isString(startTag)) {
    throw new TypeError(
      'tagInnerLast args(startTag) is not string',
    );
  }
  if (!isString(endTag)) {
    throw new TypeError(
      'tagInnerLast args(endTag) is not string',
    );
  }

  return _tagInnerLast(str, startTag, endTag);
};

export default {
  _tagInnerLastBase,
  _tagInnerLast,
  tagInnerLast,
};

