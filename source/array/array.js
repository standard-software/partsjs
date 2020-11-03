import array_commonJs from './array_common.js';
import _mapJs from './_map.js';
import mapJs from './map.js';
import _minJs from './_min.js';
import minJs from './min.js';
import _maxJs from './_max.js';
import maxJs from './max.js';
import _NumberArrayJs from './_NumberArray.js';
import NumberArrayJs from './NumberArray.js';
import _IntegerArrayJs from './_IntegerArray.js';
import IntegerArrayJs from './IntegerArray.js';
import arrayEntriesJs from './arrayEntries.js';
import _groupJs from './_group.js';
import groupJs from './group.js';
import _uniqueJs from './_unique.js';
import uniqueJs from './unique.js';
import __SortFuncOrderJs from './__SortFuncOrder.js';
import _SortFuncJs from './_SortFunc.js';
import SortFuncJs from './SortFunc.js';
import array_operationJs from './operation/array_operation.js';
import _popFirstJs from './operation/_popFirst.js';
import popFirstJs from './operation/popFirst.js';
import _popLastJs from './operation/_popLast.js';
import popLastJs from './operation/popLast.js';
import _popArrayFirstJs from './operation/_popArrayFirst.js';
import popArrayFirstJs from './operation/popArrayFirst.js';
import _popArrayLastJs from './operation/_popArrayLast.js';
import popArrayLastJs from './operation/popArrayLast.js';


const arrayJs = {
  ...array_commonJs,
  ..._mapJs,
  ...mapJs,
  ..._minJs,
  ...minJs,
  ..._maxJs,
  ...maxJs,
  ..._NumberArrayJs,
  ...NumberArrayJs,
  ..._IntegerArrayJs,
  ...IntegerArrayJs,
  ...arrayEntriesJs,
  ..._groupJs,
  ...groupJs,
  ..._uniqueJs,
  ...uniqueJs,
  ...__SortFuncOrderJs,
  ..._SortFuncJs,
  ...SortFuncJs,
};

const arrayOperationJs = {
  ...array_operationJs,
  ..._popFirstJs,
  ...popFirstJs,
  ..._popLastJs,
  ...popLastJs,
  ..._popArrayFirstJs,
  ...popArrayFirstJs,
  ..._popArrayLastJs,
  ...popArrayLastJs,
};

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
  _group,
  _unique,

  _NumberArray,
  _IntegerArray,
  _arrayEntries,

  _SortFunc,

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

  SortFunc,

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

// `);
export const operation = arrayOperationJs;

export default {
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

  _SortFunc,

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

  SortFunc,

  // Another name
  findIndex, findBackIndex,
  find, findBack,
  every,
  arrayToIndexValueArray,

  operation,
};
