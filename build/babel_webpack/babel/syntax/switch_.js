"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.switch_ = void 0;

var _type = require("../type/type.js");

var _functionValue = require("./functionValue.js");

/**
 * switch_
 */
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
        return (0, _functionValue.functionValue)(args[_i][0]);
      }

      if (args[_i][0] === expression) {
        return (0, _functionValue.functionValue)(args[_i][1]);
      }
    }

    return undefined;
  };
};

exports.switch_ = switch_;
var _default = {
  switch_: switch_
};
exports["default"] = _default;