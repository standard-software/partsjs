import cloneJs from './clone.js';
import cloneDeepJs from './cloneDeep.js';
import functionValueJs from './functionValue.js';

export const {
  _clone,
  clone,
} = cloneJs;

export const {
  _cloneDeep,
  cloneDeep,
} = cloneDeepJs;

export const {
  functionValue,
} = functionValueJs;

export default {
  ...cloneJs,
  ...cloneDeepJs,
  ...functionValueJs,
};
