import equal from './equal.js';
import includes_common from './includes_common.js';
import includes from './includes.js';
import someMatchAll from './someMatchAll.js';
import allMatchAll from './allMatchAll.js';
import indexOfMatchAll from './indexOfMatchAll.js';
import matchAllValue from './matchAllValue.js';
import matchAll from './matchAll.js';
import someMatchSome from './someMatchSome.js';
import allMatchSome from './allMatchSome.js';
import indexOfMatchSome from './indexOfMatchSome.js';
import matchSomeValue from './matchSomeValue.js';
import matchSome from './matchSome.js';
import someMatch from './someMatch.js';
import allMatch from './allMatch.js';
import indexOfMatch from './indexOfMatch.js';
import initialValue from './initialValue.js';
import matchValue from './matchValue.js';
import match from './match.js';
import compare_common from './compare_common.js';
export default {
  ...compare_common,
  ...match,
  ...matchValue,
  ...initialValue,
  ...indexOfMatch,
  ...allMatch,
  ...someMatch,

  ...matchSome,
  ...matchSomeValue,
  ...indexOfMatchSome,
  ...allMatchSome,
  ...someMatchSome,

  ...matchAll,
  ...matchAllValue,
  ...indexOfMatchAll,
  ...allMatchAll,
  ...someMatchAll,

  ...includes,
  ...includes_common,
  ...equal,
};

export * from './compare_common.js';
export * from './match.js';
export * from './matchValue.js';
export * from './initialValue.js';
export * from './indexOfMatch.js';
export * from './allMatch.js';
export * from './someMatch.js';
export * from './matchSome.js';
export * from './matchSomeValue.js';
export * from './indexOfMatchSome.js';
export * from './allMatchSome.js';
export * from './someMatchSome.js';
export * from './matchAll.js';
export * from './matchAllValue.js';
export * from './indexOfMatchAll.js';
export * from './allMatchAll.js';
export * from './someMatchAll.js';
export * from './includes.js';
export * from './includes_common.js';
export * from './equal.js';
