import assert_js from './assert.js';
import guard_js from './guard.js';
import functionValue_js from './functionValue.js';
import sc_js from './sc.js';
import if__js from './if_.js';
import switch__js from './switch_.js';
import loop_js from './loop.js';
import canUseMap_js from './canUseMap.js';
import canUseSet_js from './canUseSet.js';

export const {
  _assert,
  assert,
} = assert_js;

export const {
  guard,
} = guard_js;

export const {
  functionValue,
} = functionValue_js;

export const {
  sc,
} = sc_js;

export const {
  if_,
} = if__js;

export const {
  switch_,
} = switch__js;

export const {
  loop,
} = loop_js;

export const {
  canUseMap, canUseWeakMap,
} = canUseMap_js;

export const {
  canUseSet, canUseWeakSet,
} = canUseSet_js;

export default {
  ...assert_js,
  ...guard_js,
  ...functionValue_js,
  ...sc_js,
  ...if__js,
  ...switch__js,
  ...loop_js,
  ...canUseMap_js,
  ...canUseSet_js,
};
