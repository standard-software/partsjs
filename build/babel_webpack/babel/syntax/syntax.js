"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.canUseSet = exports.canUseMap = exports.loop = exports._loopBase = exports.switch_ = exports.if_ = exports.sc = exports.functionValue = exports.guard = exports.assert = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _IntegerArray2 = require("../array/IntegerArray.js");

var _objectToKeyValueArray = require("../object/objectToKeyValueArray.js");

/**
 * assert
 */
var assert = function assert(value) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!(0, _type.isBoolean)(value)) {
    throw new TypeError('assert args(value) is not boolean|message:' + "|message:".concat(message));
  }

  if (!(0, _type.isString)(message)) {
    throw new TypeError('assert args(message) is not string|message:' + "|message:".concat(message));
  }

  if (!value) {
    throw new Error("assert error|message:".concat(message));
  }
};
/**
 * guard
 */


exports.assert = assert;
var guard_status = true;
var guard_message;

var guard = function guard(guardFunc, runFunc) {
  guard_message = '';

  if (guard_status === false) {
    return false;
  }

  if (!(0, _type.isFunction)(guardFunc)) {
    throw new TypeError('guard args(guardFunc) is not function');
  }

  var result = guardFunc();

  if (!(0, _type.isArray)(result)) {
    throw new TypeError('guard args(guardFunc result) is not array');
  }

  for (var i = 0; i < result.length; i += 1) {
    // support for wsh last comma in Array. [a,b,]
    if (i === result.length - 1 && (0, _type.isUndefined)(result[i])) {
      continue;
    }

    var resultValue = undefined;
    var message = '';

    if ((0, _type.isArray)(result[i])) {
      if (!(1 <= result[i].length)) {
        throw new TypeError('guard args(guardFunc resultArray element) is not array.length >= 1');
      }

      resultValue = result[i][0];

      if (2 <= result[i].length) {
        message = result[i][1];
      }
    } else {
      resultValue = result[i];
    }

    resultValue = functionValue(resultValue);

    if (!(0, _type.isBoolean)(resultValue)) {
      throw new TypeError('guard args(guardFunc resultArray element value) is not boolean');
    }

    if (resultValue === false) {
      guard_message = message;

      if (!(0, _type.isUndefined)(runFunc)) {
        if (!(0, _type.isFunction)(runFunc)) {
          throw new TypeError('guard args(runFunc) is not function');
        }

        runFunc();
      }

      return true;
    }
  }

  return false;
};

exports.guard = guard;

guard.message = function () {
  return guard_message;
};

guard.status = function (value) {
  return guard_status = value;
};

guard.on = function () {
  guard_status = true;
};

guard.off = function () {
  guard_status = false;
};
/**
 * function Value
 */


var functionValue = function functionValue(value) {
  if ((0, _type.isFunction)(value)) {
    return value();
  } else {
    return value;
  }
};
/**
 * sc (second call)
 */


exports.functionValue = functionValue;

var sc = function sc(argsFirst, func) {
  for (var _len = arguments.length, argsRest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    argsRest[_key - 2] = arguments[_key];
  }

  return func.apply(void 0, [argsFirst].concat(argsRest));
};
/**
 * if_
 */


exports.sc = sc;

var if_ = function if_(condition) {
  if (!(0, _type.isBoolean)(condition)) {
    throw new TypeError('if_ args(condition) is not boolean');
  }

  var returnFunc = function returnFunc(then_, else_) {
    if ((0, _isObjectParameter.isObjectParameter)(then_, '', 'then, else', 1)) {
      var _then_ = then_;
      then_ = _then_.then;
      else_ = _then_["else"];
    }

    return condition ? functionValue(then_) : functionValue(else_);
  };

  if (condition) {
    returnFunc.then = function (value) {
      return {
        "else": function _else() {
          return functionValue(value);
        }
      };
    };

    returnFunc["else"] = function () {
      return {
        then: function then(value) {
          return functionValue(value);
        }
      };
    };
  } else {
    returnFunc.then = function () {
      return {
        "else": function _else(value) {
          return functionValue(value);
        }
      };
    };

    returnFunc["else"] = function (value) {
      return {
        then: function then() {
          return functionValue(value);
        }
      };
    };
  }

  return returnFunc;
};
/**
 * switch_
 */


exports.if_ = if_;

var switch_ = function switch_(expression) {
  return function (args) {
    if (!(0, _type.isArray)(args)) {
      throw new TypeError('switch_() args is not array');
    }

    for (var i = 0; i < args.length; i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (i === args.length - 1 && (0, _type.isUndefined)(args[i])) {
        continue;
      }

      if (!(0, _type.isArray)(args[i])) {
        throw new TypeError('switch_() args is not array in array');
      }
    }

    for (var _i = 0; _i < args.length; _i += 1) {
      // support for wsh last comma in Array. [a,b,]
      if (_i === args.length - 1 && (0, _type.isUndefined)(args[_i])) {
        continue;
      }

      if (args[_i].length === 0) {
        return undefined;
      }

      if (args[_i].length === 1) {
        return functionValue(args[_i][0]);
      }

      if (args[_i][0] === expression) {
        return functionValue(args[_i][1]);
      }
    }

    return undefined;
  };
};
/**
 * loop
 */


exports.switch_ = switch_;

var _loopBase = function _loopBase(loopArray) {
  return function (func) {
    if (!(0, _type.isFunction)(func)) {
      throw new TypeError('loop()(func) func is not function');
    }

    for (var i = 0, l = loopArray.length; i < l; i += 1) {
      var element = loopArray[i];
      var index = i;
      var array = loopArray;
      var loopFirst = i === 0;
      var loopLast = i === loopArray.length - 1;
      var result = func(element, index, array, loopFirst, loopLast);

      if (!(0, _type.isUndefined)(result) && result["break"] === true) {
        return result;
      }
    }

    return {};
  };
};

exports._loopBase = _loopBase;

var loop = function loop(start, end, increment) {
  if ((0, _isObjectParameter.isObjectParameter)(start, 'count')) {
    var _start = start;
    start = _start.count;
    end = undefined;
    increment = undefined;
  } else if ((0, _isObjectParameter.isObjectParameter)(start, 'start, end', 'increment')) {
    var _start2 = start;
    start = _start2.start;
    end = _start2.end;
    increment = _start2.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(end, 'end', 'increment')) {
    var _end = end;
    end = _end.end;
    increment = _end.increment;
  } else if ((0, _isObjectParameter.isObjectParameter)(increment, 'increment')) {
    var _increment = increment;
    increment = _increment.increment;
  } else if ((0, _type.isObject)(start)) {
    return _loopBase((0, _objectToKeyValueArray.objectToKeyValueArray)(start));
  } else if ((0, _type.isArray)(start)) {
    return _loopBase(start);
  }

  if (!(0, _type.isInteger)(start)) {
    throw new TypeError('loop args(start) is not number');
  }

  if (!(0, _type.isUndefined)(end) && !(0, _type.isInteger)(end)) {
    throw new TypeError('loop args(end) is not number');
  }

  if (!(0, _type.isUndefined)(increment) && !(0, _type.isInteger)(increment)) {
    throw new TypeError('loop args(increment) is not number');
  }

  return _loopBase((0, _IntegerArray2._IntegerArray)(start, end, increment));
};
/**
 * canUseMap
 */


exports.loop = loop;

var _canUseMapFlag;

var canUseMap = function canUseMap() {
  if ((0, _type.isUndefined)(_canUseMapFlag)) {
    try {
      new Map();
      _canUseMapFlag = true;
    } catch (e) {
      _canUseMapFlag = false;
    }
  }

  return _canUseMapFlag;
};

exports.canUseMap = canUseMap;

canUseMap.reset = function () {
  _canUseMapFlag = undefined;
};
/**
 * canUseSet
 */


var _canUseSetFlag;

var canUseSet = function canUseSet() {
  if ((0, _type.isUndefined)(_canUseSetFlag)) {
    try {
      new Set();
      _canUseSetFlag = true;
    } catch (e) {
      _canUseSetFlag = false;
    }
  }

  return _canUseSetFlag;
};

exports.canUseSet = canUseSet;

canUseSet.reset = function () {
  _canUseSetFlag = undefined;
};

var _default = {
  assert: assert,
  guard: guard,
  functionValue: functionValue,
  sc: sc,
  if_: if_,
  switch_: switch_,
  loop: loop,
  canUseMap: canUseMap,
  canUseSet: canUseSet
};
exports["default"] = _default;