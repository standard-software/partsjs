import string_commonJs from './string_common.js';
import _indexOfFirstJs from './_indexOfFirst.js';
import indexOfFirstJs from './indexOfFirst.js';
import _indexOfLastJs from './_indexOfLast.js';
import indexOfLastJs from './indexOfLast.js';
import _indexOfAnyFirstJs from './_indexOfAnyFirst.js';
import indexOfAnyFirstJs from './indexOfAnyFirst.js';
import _indexOfAnyLastJs from './_indexOfAnyLast.js';
import indexOfAnyLastJs from './indexOfAnyLast.js';
import _includeCountJs from './_includeCount.js';
import includeCountJs from './includeCount.js';
import _replaceAllJs from './_replaceAll.js';
import replaceAllJs from './replaceAll.js';
import _replaceAllRepeatJs from './_replaceAllRepeat.js';
import replaceAllRepeatJs from './replaceAllRepeat.js';
import _replaceAllArrayJs from './_replaceAllArray.js';
import replaceAllArrayJs from './replaceAllArray.js';
import matchFormatJs from './matchFormat.js';
import subFirstDelimFirstJs from './subFirstDelimFirst.js';
import subFirstDelimLastJs from './subFirstDelimLast.js';
import subLastDelimFirstJs from './subLastDelimFirst.js';
import subLastDelimLastJs from './subLastDelimLast.js';
import tagInnerFirstJs from './tagInnerFirst.js';
import tagOuterFirstJs from './tagOuterFirst.js';
import tagInnerLastJs from './tagInnerLast.js';
import tagOuterLastJs from './tagOuterLast.js';
import _splitJs from './_split.js';
import splitJs from './split.js';
import splitCommaItemsJs from './splitCommaItems.js';
import splitDotItemsJs from './splitDotItems.js';
import _paddingFirstJs from './_paddingFirst.js';
import paddingFirstJs from './paddingFirst.js';
import _paddingLastJs from './_paddingLast.js';
import paddingLastJs from './paddingLast.js';

const stringJs = {
  ...string_commonJs,
  ..._indexOfFirstJs,
  ...indexOfFirstJs,
  ..._indexOfLastJs,
  ...indexOfLastJs,
  ..._indexOfAnyFirstJs,
  ...indexOfAnyFirstJs,
  ..._indexOfAnyLastJs,
  ...indexOfAnyLastJs,
  ..._includeCountJs,
  ...includeCountJs,
  ..._replaceAllJs,
  ...replaceAllJs,
  ..._replaceAllRepeatJs,
  ...replaceAllRepeatJs,
  ..._replaceAllArrayJs,
  ...replaceAllArrayJs,
  ...matchFormatJs,
  ...subFirstDelimFirstJs,
  ...subFirstDelimLastJs,
  ...subLastDelimFirstJs,
  ...subLastDelimLastJs,
  ...tagInnerFirstJs,
  ...tagOuterFirstJs,
  ...tagInnerLastJs,
  ...tagOuterLastJs,
  ..._splitJs,
  ...splitJs,
  ...splitCommaItemsJs,
  ...splitDotItemsJs,
  ..._paddingFirstJs,
  ...paddingFirstJs,
  ..._paddingLastJs,
  ...paddingLastJs,
};

export const {
  _repeat,
  _isLowerCase, _isUpperCase,
  _indexOfFirst, _indexOfLast,
  _indexOfAnyFirst, _indexOfAnyLast,
  _includeCount,
  _isFirst, _isLast, _isBothEnds,
  _includeFirst, _includeLast, _includeBothEnds,
  _excludeFirst, _excludeLast, _excludeBothEnds,
  _trimFirst, _trimLast, _trimBothEnds,
  _subIndex, _subLength, _subFirst, _subLast,
  _deleteIndex, _deleteLength, _deleteFirst, _deleteLast,
  _insert, _add,

  _replaceAll, _replaceAllRepeat, _replaceAllArray,
  _matchFormat,
  _subFirstDelimFirst,
  _subFirstDelimLast,
  _subLastDelimFirst,
  _subLastDelimLast,
  _tagInnerFirst,
  _tagOuterFirst,
  _tagInnerLast,
  _tagOuterLast,
  _split,
  _splitCommaItems,
  _splitDotItems,
  _paddingFirst,
  _paddingLast,
} = stringJs;

export const {
  repeat,
  isLowerCase, isUpperCase,
  indexOfFirst, indexOfLast,
  indexOfAnyFirst, indexOfAnyLast,
  includeCount,
  isFirst, isLast, isBothEnds,
  includeFirst, includeLast, includeBothEnds,
  excludeFirst, excludeLast, excludeBothEnds,
  trimFirst, trimLast, trimBothEnds,
  subIndex, subLength, subFirst, subLast,
  deleteIndex, deleteLength, deleteFirst, deleteLast,
  insert, add,

  replaceAll, replaceAllRepeat, replaceAllArray,
  matchFormat,
  subFirstDelimFirst,
  subFirstDelimLast,
  subLastDelimFirst,
  subLastDelimLast,
  tagInnerFirst,
  tagOuterFirst,
  tagInnerLast,
  tagOuterLast,
  split,
  splitCommaItems,
  splitDotItems,
  paddingFirst,
  paddingLast,
} = stringJs;

export default {
  _repeat,
  _isLowerCase, _isUpperCase,
  _indexOfFirst, _indexOfLast,
  _indexOfAnyFirst, _indexOfAnyLast,
  _includeCount,
  _isFirst, _isLast, _isBothEnds,
  _includeFirst, _includeLast, _includeBothEnds,
  _excludeFirst, _excludeLast, _excludeBothEnds,
  _trimFirst, _trimLast, _trimBothEnds,
  _subIndex, _subLength, _subFirst, _subLast,
  _deleteIndex, _deleteLength, _deleteFirst, _deleteLast,
  _insert, _add,

  _replaceAll, _replaceAllRepeat, _replaceAllArray,
  _matchFormat,
  _subFirstDelimFirst,
  _subFirstDelimLast,
  _subLastDelimFirst,
  _subLastDelimLast,
  _tagInnerFirst,
  _tagOuterFirst,
  _tagInnerLast,
  _tagOuterLast,
  _split,
  _splitCommaItems,
  _splitDotItems,
  _paddingFirst,
  _paddingLast,

  repeat,
  isLowerCase, isUpperCase,
  indexOfFirst, indexOfLast,
  indexOfAnyFirst, indexOfAnyLast,
  includeCount,
  isFirst, isLast, isBothEnds,
  includeFirst, includeLast, includeBothEnds,
  excludeFirst, excludeLast, excludeBothEnds,
  trimFirst, trimLast, trimBothEnds,
  subIndex, subLength, subFirst, subLast,
  deleteIndex, deleteLength, deleteFirst, deleteLast,
  insert, add,

  replaceAll, replaceAllRepeat, replaceAllArray,
  matchFormat,
  subFirstDelimFirst,
  subFirstDelimLast,
  subLastDelimFirst,
  subLastDelimLast,
  tagInnerFirst,
  tagOuterFirst,
  tagInnerLast,
  tagOuterLast,
  split,
  splitCommaItems,
  splitDotItems,
  paddingFirst,
  paddingLast,
};

