import or_js from './or.js';

import match_js from './match.js';
import matchValue_js from './matchValue.js';
import initialValue_js from './initialValue.js';
import indexOfMatch_js from './indexOfMatch.js';
import allMatch_js from './allMatch.js';
import someMatch_js from './someMatch.js';

import matchSome_js from './matchSome.js';
import matchSomeValue_js from './matchSomeValue.js';
import indexOfMatchSome_js from './indexOfMatchSome.js';
import allMatchSome_js from './allMatchSome.js';
import someMatchSome_js from './someMatchSome.js';

import matchAll_js from './matchAll.js';
import matchAllValue_js from './matchAllValue.js';
import indexOfMatchAll_js from './indexOfMatchAll.js';
import allMatchAll_js from './allMatchAll.js';
import someMatchAll_js from './someMatchAll.js';

import includes_js from './includes.js';
import includes_common_js from './includes_common.js';
import equal_js from './equal.js';
import equalDeep_js from './equalDeep.js';

const compareJs = {
  ...or_js,
  ...match_js,
  ...matchValue_js,
  ...initialValue_js,
  ...indexOfMatch_js,
  ...allMatch_js,
  ...someMatch_js,

  ...matchSome_js,
  ...matchSomeValue_js,
  ...indexOfMatchSome_js,
  ...allMatchSome_js,
  ...someMatchSome_js,

  ...matchAll_js,
  ...matchAllValue_js,
  ...indexOfMatchAll_js,
  ...allMatchAll_js,
  ...someMatchAll_js,

  ...includes_js,
  ...includes_common_js,

  ...equal_js,
  ...equalDeep_js,
};

export const {
  _or,
  _match,
  _matchValue,
  _initialValue,
  _indexOfMatch,
  _allMatch,
  _someMatch,
  _matchSome,
  _matchSomeValue,
  _indexOfMatchSome,
  _allMatchSome,
  _someMatchSome,
  _matchAll,
  _matchAllValue,
  _indexOfMatchAll,
  _allMatchAll,
  _someMatchAll,
  _includes,
  _includesSome,
  _includesAll,
  _equal,
  _equalDeep,
} = compareJs;

export const {
  or,
  match,
  matchValue,
  initialValue,
  indexOfMatch,
  allMatch,
  someMatch,
  matchSome,
  matchSomeValue,
  indexOfMatchSome,
  allMatchSome,
  someMatchSome,
  matchAll,
  matchAllValue,
  indexOfMatchAll,
  allMatchAll,
  someMatchAll,
  includes,
  includesSome,
  includesAll,
  equal,
  equalDeep,
} = compareJs;

export default {
  _or,
  _match,
  _matchValue,
  _initialValue,
  _indexOfMatch,
  _allMatch,
  _someMatch,
  _matchSome,
  _matchSomeValue,
  _indexOfMatchSome,
  _allMatchSome,
  _someMatchSome,
  _matchAll,
  _matchAllValue,
  _indexOfMatchAll,
  _allMatchAll,
  _someMatchAll,
  _includes,
  _includesSome,
  _includesAll,
  _equal,
  _equalDeep,

  or,
  match,
  matchValue,
  initialValue,
  indexOfMatch,
  allMatch,
  someMatch,
  matchSome,
  matchSomeValue,
  indexOfMatchSome,
  allMatchSome,
  someMatchSome,
  matchAll,
  matchAllValue,
  indexOfMatchAll,
  allMatchAll,
  someMatchAll,
  includes,
  includesSome,
  includesAll,
  equal,
  equalDeep,
};
