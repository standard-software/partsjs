"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.if_ = void 0;

var _type = require("../type/type.js");

var _isObjectParameter = require("../object/isObjectParameter.js");

var _functionValue = require("./functionValue.js");

/**
 * if_
 */
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

    return condition ? (0, _functionValue.functionValue)(then_) : (0, _functionValue.functionValue)(else_);
  };

  if (condition) {
    returnFunc.then = function (value) {
      return {
        "else": function _else() {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };

    returnFunc["else"] = function () {
      return {
        then: function then(value) {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };
  } else {
    returnFunc.then = function () {
      return {
        "else": function _else(value) {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };

    returnFunc["else"] = function (value) {
      return {
        then: function then() {
          return (0, _functionValue.functionValue)(value);
        }
      };
    };
  }

  return returnFunc;
};

exports.if_ = if_;
var _default = {
  if_: if_
};
exports["default"] = _default;