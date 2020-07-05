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
  _tagInnerLastBase,
} from './tagInnerLast.js';

export const _tagOuterLast = (str, startTag, endTag) => {
  const result = _tagInnerLastBase(str, startTag, endTag);

  if (!result.find) {
    return '';
  }
  return startTag + result.value + endTag;
};

export const tagOuterLast = (str, startTag, endTag) => {
  if (isObjectParameter(str, 'str, startTag, endTag')) {
    ({ str, startTag, endTag } = str);
  } else if (isObjectParameter(startTag, 'startTag, endTag')) {
    ({ startTag, endTag } = startTag);
  } else if (isObjectParameter(endTag, 'endTag')) {
    ({ endTag } = endTag);
  }

  if (!isString(str)) {
    throw new TypeError(
      'tagOuterLast args(str) is not string',
    );
  }
  if (!isString(startTag)) {
    throw new TypeError(
      'tagOuterLast args(startTag) is not string',
    );
  }
  if (!isString(endTag)) {
    throw new TypeError(
      'tagOuterLast args(endTag) is not string',
    );
  }

  return _tagOuterLast(str, startTag, endTag);
};

export default {
  _tagOuterLast,
  tagOuterLast,
};

