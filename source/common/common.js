import cloneJs from './clone.js';
import cloneDeepJs from './cloneDeep.js';
import functionValueJs from './functionValue.js';
import returnValueFunctionJs from './returnValueFunction.js';

const commonJs = {
  ...cloneJs,
  ...cloneDeepJs,
  ...functionValueJs,
  ...returnValueFunctionJs,
};

export const {
  _clone,
  _cloneDeep,

  clone,
  cloneDeep,
  functionValue,
  returnValueFunction,
} = commonJs;

export default {
  _clone,
  _cloneDeep,

  clone,
  cloneDeep,
  functionValue,
  returnValueFunction,
};
