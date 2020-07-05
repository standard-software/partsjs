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
  _tagOuterLast,
} from './tagOuterLast.js';

export const _tagInnerLast = (str, startTag, endTag) => {
  const result = _tagOuterLast(str, startTag, endTag);
  if (result.length === 0) {
    return '';
  }
  return _subIndex(result, startTag.length, result.length - endTag.length - 1);
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
  _tagInnerLast,
  tagInnerLast,
};

