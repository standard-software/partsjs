import array_commonJs from './array_common.js';
import _minJs from './_min.js';
import minJs from './min.js';
import _maxJs from './_max.js';
import maxJs from './max.js';
import _NumberArrayJs from './_NumberArray.js';
import NumberArrayJs from './NumberArray.js';
import _IntegerArrayJs from './_IntegerArray.js';
import IntegerArrayJs from './IntegerArray.js';
import arrayEntriesJs from './arrayEntries.js';
import groupJs from './group.js';
import uniqueJs from './unique.js';
import array_operationJs from './array_operation.js';
import sortJs from './operation/sort.js';
import sortDictionaryJs from './operation/sortDictionary.js';

// import { _copyProperty } from './object/object_common.js';

const arrayJs = {
  ...array_commonJs,
  ..._minJs,
  ...minJs,
  ..._maxJs,
  ...maxJs,
  ..._NumberArrayJs,
  ...NumberArrayJs,
  ..._IntegerArrayJs,
  ...IntegerArrayJs,
  ...arrayEntriesJs,
  ...groupJs,
  ...uniqueJs,
};

const arrayOperationJs = {
  ...array_operationJs,
  ...sortJs,
  ...sortDictionaryJs,
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
