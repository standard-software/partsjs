"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    _inRange = _require2._inRange,
    _makeInRange = _require2._makeInRange;

var _require3 = require('../object/isObjectParameter.js'),
    isObjectParameter = _require3.isObjectParameter;

var _require4 = require('../array/array_common.js'),
    _min = _require4._min,
    _some = _require4._some,
    _isFirst = _require4._isFirst,
    _isLast = _require4._isLast,
    _isBothEdges = _require4._isBothEdges;
/**
 * array.operation.insert
 */


var _insert = function _insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  array.splice.apply(array, [index, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

var insert = function insert(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (isObjectParameter(array, 'array, valueArray, index')) {
    var _array = array;
    array = _array.array;
    valueArray = _array.valueArray;
    index = _array.index;
  }

  if (!isArray(array)) {
    throw new TypeError('insert args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('insert args(valueArray) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('insert args(index) is not integer');
  }

  if (!_inRange(index, 0, array.length)) {
    throw new RangeError('insert args(index) must be from 0 to array.length');
  }

  return _insert(array, valueArray, index);
};
/**
 * array.operation.add
 */


var _add = function _add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;
  array.splice.apply(array, [index + 1, 0].concat(_toConsumableArray(valueArray)));
  return array;
};

var add = function add(array, valueArray) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - 1;

  if (isObjectParameter(array, 'array, valueArray, index')) {
    var _array2 = array;
    array = _array2.array;
    valueArray = _array2.valueArray;
    index = _array2.index;
  }

  if (!isArray(array)) {
    throw new TypeError('add args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('add args(valueArray) is not array');
  }

  if (!isInteger(index)) {
    throw new TypeError('add args(index) is not integer');
  }

  if (!_inRange(index, -1, array.length - 1)) {
    throw new RangeError('add args(index) must be from 0 to array.length - 1');
  }

  return _add(array, valueArray, index);
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
 * array.operation.deleteFirst
 */


var _deleteFirst = function _deleteFirst(array, length) {
  return _deleteLength(array, 0, length);
};

var deleteFirst = function deleteFirst(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array6 = array;
    array = _array6.array;
    length = _array6.length;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteFirst args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteFirst args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('deleteFirst args(length) must be from 0 to array.length');
  }

  return _deleteFirst(array, length);
};
/**
 * array.operation.deleteFirst
 */


var _deleteLast = function _deleteLast(array, length) {
  return _deleteLength(array, array.length - length, length);
};

var deleteLast = function deleteLast(array, length) {
  if (isObjectParameter(array, 'array, length')) {
    var _array7 = array;
    array = _array7.array;
    length = _array7.length;
  }

  if (!isArray(array)) {
    throw new TypeError('deleteLast args(array) is not array');
  }

  if (!isInteger(length)) {
    throw new TypeError('deleteLast args(length) is not integer');
  }

  if (!_inRange(length, 0, array.length)) {
    throw new RangeError('deleteLast args(length) must be from 0 to array.length');
  }

  return _deleteLast(array, length);
};
/**
 * array.operation.includeFirst
 */


var _includeFirst = function _includeFirst(array, valueArray) {
  if (!_isFirst(array, valueArray)) {
    _insert(array, valueArray);
  }

  return array;
};

var includeFirst = function includeFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array8 = array;
    array = _array8.array;
    valueArray = _array8.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('includeFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('includeFirst args(valueArray) is not array');
  }

  return _includeFirst(array, valueArray);
};
/**
 * array.operation.includeLast
 */


var _includeLast = function _includeLast(array, valueArray) {
  if (!_isLast(array, valueArray)) {
    _add(array, valueArray);
  }

  return array;
};

var includeLast = function includeLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array9 = array;
    array = _array9.array;
    valueArray = _array9.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('includeLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('includeLast args(valueArray) is not array');
  }

  return _includeLast(array, valueArray);
};
/**
 * array.operation.includeBothEdges
 */


var _includeBothEdges = function _includeBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (!_isBothEdges(array, valueFirstArray, valueLastArray)) {
    _insert(array, valueFirstArray);

    _add(array, valueLastArray);
  }

  return array;
};

var includeBothEdges = function includeBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array10 = array;
    array = _array10.array;
    valueFirstArray = _array10.valueFirstArray;
    var _array10$valueLastArr = _array10.valueLastArray;
    valueLastArray = _array10$valueLastArr === void 0 ? valueFirstArray : _array10$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array11 = array;
    array = _array11.array;
    valueFirstArray = _array11.valueArray;
    var _array11$valueLastArr = _array11.valueLastArray;
    valueLastArray = _array11$valueLastArr === void 0 ? valueFirstArray : _array11$valueLastArr;
  }

  if (!isArray(array)) {
    throw new TypeError('includeBothEdges args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('includeBothEdges args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('includeBothEdges args(valueLastArray) is not array');
  }

  return _includeBothEdges(array, valueFirstArray, valueLastArray);
};

var includeBothEnds = includeBothEdges;
/**
 * array.operation.excludeFirst
 */

var _excludeFirst = function _excludeFirst(array, valueArray) {
  if (_isFirst(array, valueArray)) {
    _deleteFirst(array, valueArray.length);
  }

  return array;
};

var excludeFirst = function excludeFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array12 = array;
    array = _array12.array;
    valueArray = _array12.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('excludeFirst args(valueArray) is not array');
  }

  return _excludeFirst(array, valueArray);
};
/**
 * array.operation.excludeLast
 */


var _excludeLast = function _excludeLast(array, valueArray) {
  if (_isLast(array, valueArray)) {
    _deleteLast(array, valueArray.length);
  }

  return array;
};

var excludeLast = function excludeLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array13 = array;
    array = _array13.array;
    valueArray = _array13.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('excludeLast args(valueArray) is not array');
  }

  return _excludeLast(array, valueArray);
};
/**
 * array.operation.excludeBothEdges
 */


var _excludeBothEdges = function _excludeBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (_isBothEdges(array, valueFirstArray, valueLastArray)) {
    deleteFirst(array, valueFirstArray.length);
    deleteLast(array, _min([valueLastArray.length, array.length]));
  }

  return array;
};

var excludeBothEdges = function excludeBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array14 = array;
    array = _array14.array;
    valueFirstArray = _array14.valueFirstArray;
    var _array14$valueLastArr = _array14.valueLastArray;
    valueLastArray = _array14$valueLastArr === void 0 ? valueFirstArray : _array14$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array15 = array;
    array = _array15.array;
    valueFirstArray = _array15.valueArray;
    var _array15$valueLastArr = _array15.valueLastArray;
    valueLastArray = _array15$valueLastArr === void 0 ? valueFirstArray : _array15$valueLastArr;
  }

  if (!isArray(array)) {
    throw new TypeError('excludeBothEdges args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('excludeBothEdges args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('excludeBothEdges args(valueLastArray) is not array');
  }

  return _excludeBothEdges(array, valueFirstArray, valueLastArray);
};

var excludeBothEnds = excludeBothEdges;
/**
 * array.operation.trimFirst
 */

var _trimFirst = function _trimFirst(array, valueArray) {
  while (_some(valueArray, function (value) {
    return _isFirst(array, [value]);
  })) {
    _deleteIndex(array, 0);
  }

  return array;
};

var trimFirst = function trimFirst(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array16 = array;
    array = _array16.array;
    valueArray = _array16.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('trimFirst args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('trimFirst args(valueArray) is not array');
  }

  return _trimFirst(array, valueArray);
};
/**
 * array.operation.trimLast
 */


var _trimLast = function _trimLast(array, valueArray) {
  while (_some(valueArray, function (value) {
    return _isLast(array, [value]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var trimLast = function trimLast(array, valueArray) {
  if (isObjectParameter(array, 'array, valueArray')) {
    var _array17 = array;
    array = _array17.array;
    valueArray = _array17.valueArray;
  }

  if (!isArray(array)) {
    throw new TypeError('trimLast args(array) is not array');
  }

  if (!isArray(valueArray)) {
    throw new TypeError('trimLast args(valueArray) is not array');
  }

  return _trimLast(array, valueArray);
};
/**
 * array.operation.trimBothEdges
 */


var _trimBothEdges = function _trimBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  while (_some(valueFirstArray, function (valueFirst) {
    return _isFirst(array, [valueFirst]);
  })) {
    _deleteIndex(array, 0);
  }

  while (_some(valueLastArray, function (valueLast) {
    return _isLast(array, [valueLast]);
  })) {
    _deleteIndex(array, array.length - 1);
  }

  return array;
};

var trimBothEdges = function trimBothEdges(array, valueFirstArray) {
  var valueLastArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : valueFirstArray;

  if (isObjectParameter(array, 'array, valueFirstArray', 'valueLastArray')) {
    var _array18 = array;
    array = _array18.array;
    valueFirstArray = _array18.valueFirstArray;
    var _array18$valueLastArr = _array18.valueLastArray;
    valueLastArray = _array18$valueLastArr === void 0 ? valueFirstArray : _array18$valueLastArr;
  } else if (isObjectParameter(array, 'array, valueArray')) {
    var _array19 = array;
    array = _array19.array;
    valueFirstArray = _array19.valueArray;
    var _array19$valueLastArr = _array19.valueLastArray;
    valueLastArray = _array19$valueLastArr === void 0 ? valueFirstArray : _array19$valueLastArr;
  }

  if (!isArray(array)) {
    throw new TypeError('trimBothEdges args(array) is not array');
  }

  if (!isArray(valueFirstArray)) {
    throw new TypeError('trimBothEdges args(valueFirstArray) is not array');
  }

  if (!isArray(valueLastArray)) {
    throw new TypeError('trimBothEdges args(valueLastArray) is not array');
  }

  return _trimBothEdges(array, valueFirstArray, valueLastArray);
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
    var _array20 = array;
    array = _array20.array;
    value = _array20.value;
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
    var _array21 = array;
    array = _array21.array;
    value = _array21.value;
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
    var _array22 = array;
    array = _array22.array;
    value = _array22.value;
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
    var _array23 = array;
    array = _array23.array;
    length = _array23.length;
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
    var _array24 = array;
    array = _array24.array;
    length = _array24.length;
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
    var _array25 = array;
    array = _array25.array;
    func = _array25.func;
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
  _deleteFirst: _deleteFirst,
  _deleteLast: _deleteLast,
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
  deleteFirst: deleteFirst,
  deleteLast: deleteLast,
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