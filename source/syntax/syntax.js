import assert_js from './assert.js';
import guard_js from './guard.js';
import functionValue_js from './functionValue.js';
import sc_js from './sc.js';
import if__js from './if_.js';
import switch__js from './switch_.js';
import loop_js from './loop.js';
import canUseMap_js from './canUseMap.js';
import canUseSet_js from './canUseSet.js';
import _Enum_js from './_Enum.js';
import Enum_js from './Enum.js';

const syntaxJs = {
  ...assert_js,
  ...guard_js,
  ...functionValue_js,
  ...sc_js,
  ...if__js,
  ...switch__js,
  ...loop_js,
  ...canUseMap_js,
  ...canUseSet_js,
  ..._Enum_js,
  ...Enum_js,
};

export const {
  _assert,
  _Enum,
} = syntaxJs;

export const {
  assert, guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
} = syntaxJs;

export default {
  _assert,
  _Enum,

  assert, guard,
  functionValue,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
};
