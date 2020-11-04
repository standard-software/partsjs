import assertJs from './assert.js';
import guardJs from './guard.js';
import scJs from './sc.js';
import if_Js from './if_.js';
import switch_Js from './switch_.js';
import loopJs from './loop.js';
import canUseMapJs from './canUseMap.js';
import canUseSetJs from './canUseSet.js';
import _EnumJs from './_Enum.js';
import EnumJs from './Enum.js';
import _recursiveCallJs from './_recursiveCall.js';
import recursiveCallJs from './recursiveCall.js';

const syntaxJs = {
  ...assertJs,
  ...guardJs,
  ...scJs,
  ...if_Js,
  ...switch_Js,
  ...loopJs,
  ...canUseMapJs,
  ...canUseSetJs,
  ..._EnumJs,
  ...EnumJs,
  ..._recursiveCallJs,
  ...recursiveCallJs,
};

export const {
  _assert,
  _Enum,
  _recursiveCall,

  assert, guard,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
  recursiveCall,
} = syntaxJs;

export default {
  _assert,
  _Enum,
  _recursiveCall,

  assert, guard,
  sc, if_, switch_,
  loop,
  canUseMap, canUseWeakMap,
  canUseSet, canUseWeakSet,
  Enum,
  recursiveCall,
};
