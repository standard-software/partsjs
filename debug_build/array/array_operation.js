"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require('../type/type.js'),
    isUndefined = _require.isUndefined,
    isNull = _require.isNull,
    isNaNStrict = _require.isNaNStrict,
    isBoolean = _require.isBoolean,
    isNumber = _require.isNumber,
    isInteger = _require.isInteger,
    isString = _require.isString,
    isFunction = _require.isFunction,
    isObject = _require.isObject,
    isArray = _require.isArray,
    isDate = _require.isDate,
    isRegExp = _require.isRegExp,
    isException = _require.isException;

var _require2 = require('../number/number.js'),
    _inRange = _require2._inRange;

var _require3 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = require('../array/array_common.js'),
    _min = _require4._min,
    _isFirst = _require4._isFirst,
    _isLast = _require4._isLast,
    _isBothEdges = _require4._isBothEdges;
/**
 * array.operation.insert
 */


var _insert = function _insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(values)));
  return array;
};

var insert = function insert(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(array, 'array, values, index')) {
    var _array = array;
    array = _array.array;
    values = _array.values;
    index = _array.index;
  }

  if (!isArray(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!isArray(values)) {
    throw new TypeError('insert args(values) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, values, index);
};
/**
 * array.operation.add
 */


var _add = function _add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(values)));
  return array;
};

var add = function add(array, values) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if (isObjectParameter(array, 'array, values, index')) {
    var _array2 = array;
    array = _array2.array;
    values = _array2.values;
    index = _array2.index;
  }

  if (!isArray(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!isArray(values)) {
    throw new TypeError('add args(values) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from 0 to array.length - 1');
  }

  return _add(array, values, index);
};
/**
 * array.operation.deleteLength
 */


var _deleteLength = function _deleteLength(array, index, length) {
  array.splice(index, length);
  return array;
};

var deleteLength = function deleteLength(array, index, length) {
  if (isObjectParameter(array, 'array, index, length')) {
    var _array3 = array;
    array = _array3.array;
    index = _array3.index;
    length = _array3.length;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteLength args(array) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('deleteLength args(index) is not integer');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLength args(length) is not integer');
  }

  if (!_inRange(index, 0, array.length - 1)) {
    throw new RangeError('deleteLength args(index) must be from 0 to array.length - 1');
  }

  if (!_inRange(length, 1, array.length - index)) {
    throw new RangeError('deleteLength args(length) must be from 1 to array.length - index');
  }

  return _deleteLength(array, index, length);
};
/**
 * array.operation.deleteIndex
 */


var _deleteIndex = function _deleteIndex(array, indexFirst) {
  var indexLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexFirst;
  array.splice(indexFirst, indexLast - indexFirst + 1);
  return array;
};

var deleteIndex = function deleteIndex(array, indexFirst) {
  var indexLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : indexFirst;

  if (isObjectParameter(array, 'array, indexFirst', 'indexLast')) {
    var _array4 = array;
    array = _array4.array;
    indexFirst = _array4.indexFirst;
    var _array4$indexLast = _array4.indexLast;
    indexLast = _array4$indexLast === void 0 ? indexFirst : _array4$indexLast;
  } else if (isObjectParameter(array, 'array, index')) {
    var _array5 = array;
    array = _array5.array;
    indexFirst = _array5.index;
    var _array5$indexLast = _array5.indexLast;
    indexLast = _array5$indexLast === void 0 ? indexFirst : _array5$indexLast;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteIndex args(array) is not array');
  }

  if (!isInteger(indexFirst)) {
    throw new TypeError('deleteIndex args(indexFirst) is not integer');
  }

  if (!isInteger(indexLast)) {
    throw new TypeError("deleteIndex args(indexLast) is not integer");
  }

  if (!_inRange(indexFirst, 0, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexFirst) must be from 0 to array.length - 1');
  }

  if (!_inRange(indexLast, indexFirst, array.length - 1)) {
    throw new RangeError('deleteIndex args(indexLast) must be from indexFirst to array.length - 1');
  }

  return _deleteIndex(array, indexFirst, indexLast);
};
/**
 * array.operation.includeFirst
 */


var _includeFirst = function _includeFirst(array, value) {
  if (!_isFirst(array, value)) {
    _insert(array, [value]);
  }

  return array;
};

var includeFirst = function includeFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array6 = array;
    array = _array6.array;
    value = _array6.value;
  }

  if (!isArray(array)) {
    throw new TypeError('includeFirst args(array) is not array');
  }

  return _includeFirst(array, value);
};
/**
 * array.operation.includeLast
 */


var _includeLast = function _includeLast(array, value) {
  if (!_isLast(array, value)) {
    _add(array, [value]);
  }

  return array;
};

var includeLast = function includeLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array7 = array;
    array = _array7.array;
    value = _array7.value;
  }

  if (!isArray(array)) {
    throw new TypeError('includeLast args(array) is not array');
  }

  return _includeLast(array, value);
};
/**
 * array.operation.includeBothEdges
 */


var _includeBothEdges = function _includeBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (!_isBothEdges(array, valueFirst, valueLast)) {
    _insert(array, [valueFirst]);

    _add(array, [valueLast]);
  }

  return array;
};

var includeBothEdges = function includeBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(array, 'array, valueFirst', 'valueLast')) {
    var _array8 = array;
    array = _array8.array;
    valueFirst = _array8.valueFirst;
    var _array8$valueLast = _array8.valueLast;
    valueLast = _array8$valueLast === void 0 ? valueFirst : _array8$valueLast;
  } else if (isObjectParameter(array, 'array, value')) {
    var _array9 = array;
    array = _array9.array;
    valueFirst = _array9.value;
    var _array9$valueLast = _array9.valueLast;
    valueLast = _array9$valueLast === void 0 ? valueFirst : _array9$valueLast;
  }

  if (!isArray(array)) {
    throw new TypeError('includeBothEdges args(array) is not array');
  }

  return _includeBothEdges(array, valueFirst, valueLast);
};

var includeBothEnds = includeBothEdges;
/**
 * array.operation.excludeFirst
 */

var _excludeFirst = function _excludeFirst(array, value) {
  if (_isFirst(array, value)) {
    _deleteIndex(array, 0);
  }

  return array;
};

var excludeFirst = function excludeFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array10 = array;
    array = _array10.array;
    value = _array10.value;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeFirst args(array) is not array');
  }

  return _excludeFirst(array, value);
};
/**
 * array.operation.excludeLast
 */


var _excludeLast = function _excludeLast(array, value) {
  if (_isLast(array, value)) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var excludeLast = function excludeLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array11 = array;
    array = _array11.array;
    value = _array11.value;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeLast args(array) is not array');
  }

  return _excludeLast(array, value);
};
/**
 * array.operation.excludeBothEdges
 */


var _excludeBothEdges = function _excludeBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (_isBothEdges(array, valueFirst, valueLast)) {
    _deleteIndex(array, 0);

    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var excludeBothEdges = function excludeBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(array, 'array, valueFirst', 'valueLast')) {
    var _array12 = array;
    array = _array12.array;
    valueFirst = _array12.valueFirst;
    var _array12$valueLast = _array12.valueLast;
    valueLast = _array12$valueLast === void 0 ? valueFirst : _array12$valueLast;
  } else if (isObjectParameter(array, 'array, value')) {
    var _array13 = array;
    array = _array13.array;
    valueFirst = _array13.value;
    var _array13$valueLast = _array13.valueLast;
    valueLast = _array13$valueLast === void 0 ? valueFirst : _array13$valueLast;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeBothEdges args(array) is not array');
  }

  return _excludeBothEdges(array, valueFirst, valueLast);
};

var excludeBothEnds = excludeBothEdges;
/**
 * array.operation.trimFirst
 */

var _trimFirst = function _trimFirst(array, value) {
  while (_isFirst(array, value)) {
    _deleteIndex(array, 0);
  }

  return array;
};

var trimFirst = function trimFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array14 = array;
    array = _array14.array;
    value = _array14.value;
  }

  if (!isArray(array)) {
    throw new TypeError('trimFirst args(array) is not array');
  }

  return _trimFirst(array, value);
};
/**
 * array.operation.trimLast
 */


var _trimLast = function _trimLast(array, value) {
  while (_isLast(array, value)) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var trimLast = function trimLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array15 = array;
    array = _array15.array;
    value = _array15.value;
  }

  if (!isArray(array)) {
    throw new TypeError('trimLast args(array) is not array');
  }

  return _trimLast(array, value);
};
/**
 * array.operation.trimBothEdges
 */


var _trimBothEdges = function _trimBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  while (_isFirst(array, valueFirst)) {
    _deleteIndex(array, 0);
  }

  while (_isLast(array, valueLast)) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var trimBothEdges = function trimBothEdges(array, valueFirst) {
  var valueLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirst;

  if (isObjectParameter(array, 'array, valueFirst', 'valueLast')) {
    var _array16 = array;
    array = _array16.array;
    valueFirst = _array16.valueFirst;
    var _array16$valueLast = _array16.valueLast;
    valueLast = _array16$valueLast === void 0 ? valueFirst : _array16$valueLast;
  } else if (isObjectParameter(array, 'array, value')) {
    var _array17 = array;
    array = _array17.array;
    valueFirst = _array17.value;
    var _array17$valueLast = _array17.valueLast;
    valueLast = _array17$valueLast === void 0 ? valueFirst : _array17$valueLast;
  }

  if (!isArray(array)) {
    throw new TypeError('trimBothEdges args(array) is not array');
  }

  return _trimBothEdges(array, valueFirst, valueLast);
};

var trimBothEnds = trimBothEdges;
/**
 * array.operation.popFirst
 */

var _popFirst = function _popFirst(array) {
  return array.shift();
};

var popFirst = function popFirst(array) {
  if (!isArray(array)) {
    throw new TypeError('popFirst args(array) is not array');
  }

  return _popFirst(array);
};
/**
 * array.operation.popLast
 */


var _popLast = function _popLast(array, value) {
  return array.pop();
};

var popLast = function popLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array18 = array;
    array = _array18.array;
    value = _array18.value;
  }

  if (!isArray(array)) {
    throw new TypeError('popLast args(array) is not array');
  }

  return _popLast(array, value);
};
/**
 * array.operation.pushFirst
 */


var _pushFirst = function _pushFirst(array, value) {
  array.unshift(value);
  return array.length; // WSH array.unshift is return undefined
};

var pushFirst = function pushFirst(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array19 = array;
    array = _array19.array;
    value = _array19.value;
  }

  if (!isArray(array)) {
    throw new TypeError('pushFirst args(array) is not array');
  }

  return _pushFirst(array, value);
};
/**
 * array.operation.pushLast
 */


var _pushLast = function _pushLast(array, value) {
  return array.push(value);
};

var pushLast = function pushLast(array, value) {
  if (isObjectParameter(array, 'array, value')) {
    var _array20 = array;
    array = _array20.array;
    value = _array20.value;
  }

  if (!isArray(array)) {
    throw new TypeError('pushLast args(array) is not array');
  }

  return _pushLast(array, value);
};
/**
 * array.operation.remainFirst
 */


var _remainFirst = function _remainFirst(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteIndex(array, length, array.length - 1);
};

var remainFirst = function remainFirst(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array21 = array;
    array = _array21.array;
    length = _array21.length;
  }

  if (!isArray(array)) {
    throw new TypeError('remainFirst args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError("remainFirst args(length) is not integer");
  }

  if (!(0 <= length)) {
    throw new RangeError('remainFirst args(indexFirst) must be from 0 to array.length - 1');
  }

  return _remainFirst(array, length);
};
/**
 * array.operation.remainLast
 */


var _remainLast = function _remainLast(array, length) {
  if (array.length <= length) {
    return array;
  }

  return _deleteLength(array, 0, array.length - length);
};

var remainLast = function remainLast(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array22 = array;
    array = _array22.array;
    length = _array22.length;
  }

  if (!isArray(array)) {
    throw new TypeError('remainLast args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError("remainLast args(length) is not integer");
  }

  if (!(0 <= length)) {
    throw new RangeError('remainLast args(indexFirst) must be from 0 to array.length - 1');
  }

  return _remainLast(array, length);
};
/**
 * filter
 */


var _filter = function _filter(array, func) {
  for (var i = array.length - 1; 0 <= i; i -= 1) {
    var resultFunc = func(array[i], i, array);

    if (!isBoolean(resultFunc)) {
      throw new TypeError('_filter args(compareFunc) result is not boolean');
    }

    if (!resultFunc) {
      _deleteIndex(array, i);
    }
  }

  return array;
};

var filter = function filter(array, func) {
  if (isObjectParameter(array, 'array, func')) {
    var _array23 = array;
    array = _array23.array;
    func = _array23.func;
  }

  if (!isArray(array)) {
    throw new TypeError('filter args(array) is not array');
  }

  if (!isFunction(func)) {
    throw new TypeError('filter args(compareFunc) is not function');
  }

  return _filter(array, func);
};

module.exports = {
  _insert: _insert,
  _add: _add,
  _deleteLength: _deleteLength,
  _deleteIndex: _deleteIndex,
  _includeFirst: _includeFirst,
  _includeLast: _includeLast,
  _includeBothEdges: _includeBothEdges,
  _excludeFirst: _excludeFirst,
  _excludeLast: _excludeLast,
  _excludeBothEdges: _excludeBothEdges,
  _trimFirst: _trimFirst,
  _trimLast: _trimLast,
  _trimBothEdges: _trimBothEdges,
  _popFirst: _popFirst,
  _popLast: _popLast,
  _pushFirst: _pushFirst,
  _pushLast: _pushLast,
  _remainFirst: _remainFirst,
  _remainLast: _remainLast,
  _filter: _filter,
  insert: insert,
  add: add,
  deleteLength: deleteLength,
  deleteIndex: deleteIndex,
  includeFirst: includeFirst,
  includeLast: includeLast,
  includeBothEdges: includeBothEdges,
  excludeFirst: excludeFirst,
  excludeLast: excludeLast,
  excludeBothEdges: excludeBothEdges,
  trimFirst: trimFirst,
  trimLast: trimLast,
  trimBothEdges: trimBothEdges,
  popFirst: popFirst,
  popLast: popLast,
  pushFirst: pushFirst,
  pushLast: pushLast,
  remainFirst: remainFirst,
  remainLast: remainLast,
  filter: filter,
  includeBothEnds: includeBothEnds,
  excludeBothEnds: excludeBothEnds,
  trimBothEnds: trimBothEnds
};