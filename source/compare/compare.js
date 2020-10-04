import orJs from './or.js';

import matchJs from './match.js';
import matchValueJs from './matchValue.js';
import initialValueJs from './initialValue.js';
import indexOfMatchJs from './indexOfMatch.js';
import allMatchJs from './allMatch.js';
import someMatchJs from './someMatch.js';

import matchSomeJs from './matchSome.js';
import matchSomeValueJs from './matchSomeValue.js';
import indexOfMatchSomeJs from './indexOfMatchSome.js';
import allMatchSomeJs from './allMatchSome.js';
import someMatchSomeJs from './someMatchSome.js';

import matchAllJs from './matchAll.js';
import matchAllValueJs from './matchAllValue.js';
import indexOfMatchAllJs from './indexOfMatchAll.js';
import allMatchAllJs from './allMatchAll.js';
import someMatchAllJs from './someMatchAll.js';

import includesJs from './includes.js';
import includes_commonJs from './includes_common.js';
import equalJs from './equal.js';
import equalDeepJs from './equalDeep.js';

const compareJs = {
  ...orJs,
  ...matchJs,
  ...matchValueJs,
  ...initialValueJs,
  ...indexOfMatchJs,
  ...allMatchJs,
  ...someMatchJs,

  ...matchSomeJs,
  ...matchSomeValueJs,
  ...indexOfMatchSomeJs,
  ...allMatchSomeJs,
  ...someMatchSomeJs,

  ...matchAllJs,
  ...matchAllValueJs,
  ...indexOfMatchAllJs,
  ...allMatchAllJs,
  ...someMatchAllJs,

  ...includesJs,
  ...includes_commonJs,

  ...equalJs,
  ...equalDeepJs,
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
