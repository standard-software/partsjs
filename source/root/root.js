import cloneFunction from './cloneFunction.js';
import clone from './clone.js';
import cloneDeep from './cloneDeep.js';

export default {
  ...cloneFunction,
  ...clone,
  ...cloneDeep,
};

export * from './cloneFunction.js';
export * from './clone.js';
export * from './cloneDeep.js';
