import array_common_js from './array_common.js';
import _NumberArray_js from './_NumberArray.js';
import NumberArray_js from './NumberArray.js';
import _IntegerArray_js from './_IntegerArray.js';
import IntegerArray_js from './IntegerArray.js';
import arrayToIndexValueArray_js from './arrayToIndexValueArray.js';
import group_js from './group.js';
import unique_js from './unique.js';
import array_operation_js from './array_operation.js';
import sort_js from './operation/sort.js';
import sortDictionary_js from './operation/sortDictionary.js';

export const {
  _min, _max,
  _sum, _average, _median,
  _mode,
  _single, _multiple,
  _filter, _map, _count,
  _findFirstIndex, _findLastIndex,
  _findFirst, _findLast,
  _some, _all,
  _isFirst, _isLast, _isBothEnds,
  _subIndex, _subLength,
  _subFirst, _subLast,

  from,
  min, max,
  sum, average, median,
  mode,
  single, multiple,
  filter, map, count,
  findFirstIndex, findLastIndex,
  findFirst, findLast,
  some, all,
  isFirst, isLast, isBothEnds,
  subIndex, subLength,
  subFirst, subLast,

  findIndex, findBackIndex,
  find, findBack,
  every,
} = array_common_js;

export const {
  _NumberArray,
} = _NumberArray_js;

export const {
  NumberArray,
} = NumberArray_js;

export const {
  _IntegerArray,
} = _IntegerArray_js;

export const {
  IntegerArray,
} = IntegerArray_js;

export const {
  _arrayToIndexValueArray,
  arrayToIndexValueArray,
  arrayEntries,
} = arrayToIndexValueArray_js;

export const {
  _group,
  group,
} = group_js;

export const {
  __unique,
  _unique,
  unique,
} = unique_js;

export default {
  ...array_common_js,
  ...NumberArray_js,
  ...IntegerArray_js,
  ...arrayToIndexValueArray_js,
  ...group_js,
  ...unique_js,
  operation: {
    ...array_operation_js,
    ...sort_js,
    ...sortDictionary_js,
  },
};

export const operation = {
  ...array_operation_js,
  ...sort_js,
  ...sortDictionary_js,
};
