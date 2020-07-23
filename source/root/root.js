import clone_js from './clone.js';
import cloneDeep_js from './cloneDeep.js';

export const {
  _clone,
  clone,
} = clone_js;

export const {
  _cloneDeep,
  cloneDeep,
} = cloneDeep_js;

export default {
  ...clone_js,
  ...cloneDeep_js,
};
