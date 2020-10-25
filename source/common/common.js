import cloneJs from './clone.js';
import _cloneDeepJs from './_cloneDeep.js';
import cloneDeepJs from './cloneDeep.js';
import cloneDeepFastJs from './cloneDeepFast.js';
import functionValueJs from './functionValue.js';
import _mergeJs from './_merge.js';
import mergeJs from './merge.js';

const commonJs = {
  ...cloneJs,
  ..._cloneDeepJs,
  ...cloneDeepJs,
  ...cloneDeepFastJs,
  ...functionValueJs,
  ..._mergeJs,
  ...mergeJs,
};

export const {
  _clone,
  _cloneDeep,
  _merge,

  clone,
  cloneDeep,
  cloneDeepFast,
  functionValue,
  merge,
} = commonJs;

export default {
  _clone,
  _cloneDeep,
  _merge,

  clone,
  cloneDeep,
  cloneDeepFast,
  functionValue,
  merge,
};
