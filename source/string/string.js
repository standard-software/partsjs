import matchFormat from './matchFormat.js';
import replaceAll from './replaceAll.js';
import _replaceAll from './_replaceAll.js';
import string_common from './string_common.js';
export default {
  ...string_common,
  ..._replaceAll,
  ...replaceAll,
  ...matchFormat,
};

export * from './string_common.js';
export * from './_replaceAll.js';
export * from './replaceAll.js';
export * from './matchFormat.js';
