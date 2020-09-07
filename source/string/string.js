import string_common_js from './string_common.js';
import _replaceAll_js from './_replaceAll.js';
import replaceAll_js from './replaceAll.js';
import matchFormat_js from './matchFormat.js';
import subFirstDelimFirst_js from './subFirstDelimFirst.js';
import subFirstDelimLast_js from './subFirstDelimLast.js';
import subLastDelimFirst_js from './subLastDelimFirst.js';
import subLastDelimLast_js from './subLastDelimLast.js';
import tagInnerFirst_js from './tagInnerFirst.js';
import tagOuterFirst_js from './tagOuterFirst.js';
import tagInnerLast_js from './tagInnerLast.js';
import tagOuterLast_js from './tagOuterLast.js';
import split_js from './split.js';
import splitCommaItems_js from './splitCommaItems.js';
import splitDotItems_js from './splitDotItems.js';

export const {
  _repeat,
  _isLowerCase, _isUpperCase,
  _indexOfFirst, _indexOfLast,
  _isFirst, _isLast, _isBothEnds,
  _includeFirst, _includeLast, _includeBothEnds,
  _excludeFirst, _excludeLast, _excludeBothEnds,
  _trimFirst, _trimLast, _trimBothEnds,
  _subIndex, _subLength, _subFirst, _subLast,
  _deleteIndex, _deleteLength, _deleteFirst, _deleteLast,
  _insert, _add,

  repeat,
  isLowerCase, isUpperCase,
  indexOfFirst, indexOfLast,
  isFirst, isLast, isBothEnds,
  includeFirst, includeLast, includeBothEnds,
  excludeFirst, excludeLast, excludeBothEnds,
  trimFirst, trimLast, trimBothEnds,
  subIndex, subLength, subFirst, subLast,
  deleteIndex, deleteLength, deleteFirst, deleteLast,
  insert, add,
} = string_common_js;

export const {
  _replaceAll,
} = _replaceAll_js;

export const {
  replaceAll,
} = replaceAll_js;

export const {
  _matchFormat,
  matchFormat,
} = matchFormat_js;

export const {
  _subFirstDelimFirst,
  subFirstDelimFirst,
} = subFirstDelimFirst_js;

export const {
  _subFirstDelimLast,
  subFirstDelimLast,
} = subFirstDelimLast_js;

export const {
  _subLastDelimFirst,
  subLastDelimFirst,
} = subLastDelimFirst_js;

export const {
  _subLastDelimLast,
  subLastDelimLast,
} = subLastDelimLast_js;

export const {
  _tagInnerFirst,
  tagInnerFirst,
} = tagInnerFirst_js;

export const {
  _tagOuterFirst,
  tagOuterFirst,
} = tagOuterFirst_js;

export const {
  _tagInnerLast,
  tagInnerLast,
} = tagInnerLast_js;

export const {
  _tagOuterLast,
  tagOuterLast,
} = tagOuterLast_js;

export const {
  _split, split,
} = split_js;

export const {
  splitCommaItems,
} = splitCommaItems_js;

export const {
  splitDotItems,
} = splitDotItems_js;

export default {
  ...string_common_js,
  ..._replaceAll_js,
  ...replaceAll_js,
  ...matchFormat_js,
  ...subFirstDelimFirst_js,
  ...subFirstDelimLast_js,
  ...subLastDelimFirst_js,
  ...subLastDelimLast_js,
  ...tagInnerFirst_js,
  ...tagOuterFirst_js,
  ...tagInnerLast_js,
  ...tagOuterLast_js,
  ...split_js,
  ...splitCommaItems_js,
  ...splitDotItems_js,
};

