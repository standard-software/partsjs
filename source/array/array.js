import array_common_js from './array_common.js';
import _min_js from './_min.js';
import min_js from './min.js';
import _max_js from './_max.js';
import max_js from './max.js';
import _NumberArray_js from './_NumberArray.js';
import NumberArray_js from './NumberArray.js';
import _IntegerArray_js from './_IntegerArray.js';
import IntegerArray_js from './IntegerArray.js';
import arrayEntries_js from './arrayEntries.js';
import group_js from './group.js';
import unique_js from './unique.js';
import array_operation_js from './array_operation.js';
import sort_js from './operation/sort.js';
import sortDictionary_js from './operation/sortDictionary.js';

// import { _copyProperty } from './object/object_common.js';

const arrayJs = {
  ...array_common_js,
  ..._min_js,
  ...min_js,
  ..._max_js,
  ...max_js,
  ..._NumberArray_js,
  ...NumberArray_js,
  ..._IntegerArray_js,
  ...IntegerArray_js,
  ...arrayEntries_js,
  ...group_js,
  ...unique_js,
};

const arrayOperationJs = {
  ...array_operation_js,
  ...sort_js,
  ...sortDictionary_js,
};

export const {
  __unique,

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
  _group,
  _unique,

  _NumberArray,
  _IntegerArray,
  _arrayEntries,

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
  group,
  unique,

  NumberArray,
  IntegerArray,
  arrayEntries,

  // Another name
  findIndex, findBackIndex,
  find, findBack,
  every,
  arrayToIndexValueArray,
} = arrayJs;

// // Circular reference Error
// export const operation = _copyProperty(arrayOperationJs, `
//   _insert, _add,
//   _deleteLength, _deleteIndex,
//   _deleteFirst, _deleteLast,
//   _includeFirst, _includeLast, _includeBothEnds,
//   _excludeFirst, _excludeLast, _excludeBothEnds,
//   _trimFirst, _trimLast, _trimBothEnds,
//   _popFirst, _popLast,
//   _pushFirst, _pushLast,
//   _remainFirst, _remainLast,
//   _filter,

//   _sort,
//   _sortNumber,
//   _sortLength,

//   _sortDictionary,

//   insert, add,
//   deleteLength, deleteIndex,
//   deleteFirst, deleteLast,
//   includeFirst, includeLast, includeBothEnds,
//   excludeFirst, excludeLast, excludeBothEnds,
//   trimFirst, trimLast, trimBothEnds,
//   popFirst, popLast,
//   pushFirst, pushLast,
//   remainFirst, remainLast,
//   filter,

//   sort,
//   sortNumber,
//   sortLength,
//   sortNumberAscending, sortNumberDescending,
//   sortLengthAscending, sortLengthDescending,

//   sortDictionary,
//   sortDictionaryAscending, sortDictionaryDescending,
// `);
export const operation = arrayOperationJs;

export default {
  __unique,

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
  _group,
  _unique,

  _NumberArray,
  _IntegerArray,
  _arrayEntries,

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
  group,
  unique,

  NumberArray,
  IntegerArray,
  arrayEntries,

  // Another name
  findIndex, findBackIndex,
  find, findBack,
  every,
  arrayToIndexValueArray,

  operation,
};
