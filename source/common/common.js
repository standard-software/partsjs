import cloneJs from './clone.js';
import cloneDeepJs from './cloneDeep.js';

export const {
  _clone,
  clone,
} = cloneJs;

export const {
  _cloneDeep,
  cloneDeep,
} = cloneDeepJs;

export default {
  ...cloneJs,
  ...cloneDeepJs,
};
