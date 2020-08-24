import assert_js from './assert.js';
import syntax_common_js from './syntax_common.js';

export const {
  _assert,
  assert,
} = assert_js;

export const {
  guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
} = syntax_common_js;

export default {
  ...assert_js,
  ...syntax_common_js,
};
