import string_common from './string_common.js';
import _replaceAll from './_replaceAll.js';
import replaceAll from './replaceAll.js';
import matchFormat from './matchFormat.js';
import subFirstDelimFirst from './subFirstDelimFirst.js';
import subFirstDelimLast from './subFirstDelimLast.js';
import subLastDelimFirst from './subLastDelimFirst.js';
import subLastDelimLast from './subLastDelimLast.js';
import tagInnerFirst from './tagInnerFirst.js';
import tagOuterFirst from './tagOuterFirst.js';

export default {
  ...string_common,
  ..._replaceAll,
  ...replaceAll,
  ...matchFormat,
  ...subFirstDelimFirst,
  ...subFirstDelimLast,
  ...subLastDelimFirst,
  ...subLastDelimLast,
  ...tagInnerFirst,
  ...tagOuterFirst,
};

export * from './string_common.js';
export * from './_replaceAll.js';
export * from './replaceAll.js';
export * from './matchFormat.js';
