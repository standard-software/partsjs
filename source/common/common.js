import cloneJs from './clone.js';
import cloneDeepJs from './cloneDeep.js';
import functionValueJs from './functionValue.js';
import _mergeJs from './_merge.js';
import mergeJs from './merge.js';

const commonJs = {
  ...cloneJs,
  ...cloneDeepJs,
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
  functionValue,
  merge,
} = commonJs;

export default {
  _clone,
  _cloneDeep,
  _merge,

  clone,
  cloneDeep,
  functionValue,
  merge,
};
