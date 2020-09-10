"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sortDictionaryDescending = exports.sortDictionaryAscending = exports.sortDictionary = exports._sortDictionary = void 0;

var _isType = require("../../type/isType.js");

var _or2 = require("../../compare/or.js");

var _isObjectParameter = require("../../object/isObjectParameter.js");

var _objectValues2 = require("../../object/objectValues.js");

var _Enum2 = require("../../syntax/Enum.js");

var _sort = require("./sort.js");

/**
 * array.operation.sortDictionary
 */
var _sortDictionary = function _sortDictionary(array) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _sort.sort.order.ascending;
  var casePriority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sortDictionary.casePriority.upperCase;
  var func = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _sort.sort.targetFunc.returnValueErrorNotIsString;

  switch (casePriority) {
    case sortDictionary.casePriority.ignoreCase:
      {
        var orderFunc = order === _sort.sort.order.descending ? sortDictionary.orderFunc.ignoreCase.descending : sortDictionary.orderFunc.ignoreCase.ascending;
        array.sort(function (a, b) {
          return orderFunc(func(a).toLowerCase(), func(b).toLowerCase());
        });
        return array;
      }

    case sortDictionary.casePriority.upperCase:
      {
        var _orderFunc = order === _sort.sort.order.descending ? sortDictionary.orderFunc.upperCase.descending : sortDictionary.orderFunc.upperCase.ascending;

        array.sort(function (a, b) {
          return _orderFunc(func(a), func(b));
        });
        return array;
      }

    case sortDictionary.casePriority.lowerCase:
      {
        var _orderFunc2 = order === _sort.sort.order.descending ? sortDictionary.orderFunc.lowerCase.descending : sortDictionary.orderFunc.lowerCase.ascending;

        array.sort(function (a, b) {
          return _orderFunc2(func(a), func(b));
        });
        return array;
      }
  }

  throw new TypeError('_sortDictionary args(casePriority) is not ["upperCase"|"lowerCase"|"ignoreCase"]');
};

exports._sortDictionary = _sortDictionary;

var sortDictionary = function sortDictionary(array) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _sort.sort.order.ascending;
  var casePriority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sortDictionary.casePriority.upperCase;
  var func = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _sort.sort.targetFunc.returnValueErrorNotIsString;

  if ((0, _isObjectParameter.isObjectParameter)(array, 'array', 'order, casePriority, func')) {
    var _array = array;
    array = _array.array;
    var _array$order = _array.order;
    order = _array$order === void 0 ? _sort.sort.order.ascending : _array$order;
    var _array$casePriority = _array.casePriority;
    casePriority = _array$casePriority === void 0 ? sortDictionary.casePriority.upperCase : _array$casePriority;
    var _array$func = _array.func;
    func = _array$func === void 0 ? _sort.sort.targetFunc.returnValue : _array$func;
  } else if ((0, _isObjectParameter.isObjectParameter)(order, '', 'order, casePriority, func')) {
    var _order = order;
    var _order$order = _order.order;
    order = _order$order === void 0 ? _sort.sort.order.ascending : _order$order;
    var _order$casePriority = _order.casePriority;
    casePriority = _order$casePriority === void 0 ? sortDictionary.casePriority.upperCase : _order$casePriority;
    var _order$func = _order.func;
    func = _order$func === void 0 ? _sort.sort.targetFunc.returnValue : _order$func;
  } else if ((0, _isObjectParameter.isObjectParameter)(casePriority, '', 'casePriority, func', 1)) {
    var _func = func;
    var _func$casePriority = _func.casePriority;
    casePriority = _func$casePriority === void 0 ? sortDictionary.casePriority.upperCase : _func$casePriority;
    var _func$func = _func.func;
    func = _func$func === void 0 ? _sort.sort.targetFunc.returnValue : _func$func;
  } else if ((0, _isObjectParameter.isObjectParameter)(func, 'func')) {
    var _func2 = func;
    var _func2$func = _func2.func;
    func = _func2$func === void 0 ? _sort.sort.targetFunc.returnValue : _func2$func;
  }

  if (!(0, _isType.isArray)(array)) {
    throw new TypeError('sortDictionary args(array) is not array');
  }

  if (!(0, _or2._or)(order, (0, _objectValues2._objectValues)(_sort.sort.order))) {
    throw new TypeError('sortDictionary args(order) is not ["ascending"|"descending"]');
  }

  if (!(0, _or2._or)(casePriority, (0, _objectValues2._objectValues)(sortDictionary.casePriority))) {
    throw new TypeError('sortDictionary args(casePriority) is not ["upperCase"|"lowerCase"|"ignoreCase"]');
  }

  if (!(0, _isType.isFunction)(func)) {
    throw new TypeError('sortDictionary args(func) is not function');
  }

  return _sortDictionary(array, order, casePriority, func);
};

exports.sortDictionary = sortDictionary;
sortDictionary.casePriority = (0, _Enum2._Enum)(['upperCase', 'lowerCase', 'ignoreCase']);
sortDictionary.orderFunc = {
  upperCase: {
    ascending: function ascending(a, b) {
      var al = a.toLowerCase();
      var bl = b.toLowerCase();

      if (al < bl) {
        return -1;
      }

      if (bl < al) {
        return 1;
      }

      if (a < b) {
        return -1;
      }

      if (b < a) {
        return 1;
      }

      return 0;
    },
    descending: function descending(a, b) {
      var al = a.toLowerCase();
      var bl = b.toLowerCase();

      if (al < bl) {
        return 1;
      }

      if (bl < al) {
        return -1;
      }

      if (a < b) {
        return -1;
      }

      if (b < a) {
        return 1;
      }

      return 0;
    }
  },
  lowerCase: {
    ascending: function ascending(a, b) {
      var al = a.toLowerCase();
      var bl = b.toLowerCase();

      if (al < bl) {
        return -1;
      }

      if (bl < al) {
        return 1;
      }

      if (a < b) {
        return 1;
      }

      if (b < a) {
        return -1;
      }

      return 0;
    },
    descending: function descending(a, b) {
      var al = a.toLowerCase();
      var bl = b.toLowerCase();

      if (al < bl) {
        return 1;
      }

      if (bl < al) {
        return -1;
      }

      if (a < b) {
        return 1;
      }

      if (b < a) {
        return -1;
      }

      return 0;
    }
  },
  ignoreCase: {
    ascending: function ascending(a, b) {
      var al = a.toLowerCase();
      var bl = b.toLowerCase();

      if (al < bl) {
        return -1;
      }

      if (bl < al) {
        return 1;
      }

      return 0;
    },
    descending: function descending(a, b) {
      var al = a.toLowerCase();
      var bl = b.toLowerCase();

      if (al < bl) {
        return 1;
      }

      if (bl < al) {
        return -1;
      }

      return 0;
    }
  }
};
sortDictionary.order = _sort.sort.order;
sortDictionary.targetFunc = _sort.sort.targetFunc;

var sortDictionaryAscending = function sortDictionaryAscending(array) {
  var casePriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sortDictionary.casePriority.upperCase;
  return sortDictionary(array, _sort.sort.order.ascending, casePriority);
};

exports.sortDictionaryAscending = sortDictionaryAscending;

var sortDictionaryDescending = function sortDictionaryDescending(array) {
  var casePriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sortDictionary.casePriority.upperCase;
  return sortDictionary(array, _sort.sort.order.descending, casePriority);
};

exports.sortDictionaryDescending = sortDictionaryDescending;
var _default = {
  _sortDictionary: _sortDictionary,
  sortDictionary: sortDictionary,
  sortDictionaryAscending: sortDictionaryAscending,
  sortDictionaryDescending: sortDictionaryDescending
};
exports["default"] = _default;