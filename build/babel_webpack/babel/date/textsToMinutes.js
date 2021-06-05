"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.textsToMinutes = void 0;

var _type = require("../type/type.js");

var _textsToMinutes2 = require("./_textsToMinutes.js");

/**
 * textsToMinutes
 */
var textsToMinutes = function textsToMinutes(texts) {
  if (!(0, _type.isStringArray)(texts)) {
    throw new TypeError('textsToMinutes args(texts) is not array');
  }

  if (texts.length !== 3) {
    throw new TypeError('textsToMinutes args(texts) is array.length !== 0');
  }

  return (0, _textsToMinutes2._textsToMinutes)(texts);
};

exports.textsToMinutes = textsToMinutes;
var _default = {
  textsToMinutes: textsToMinutes
};
exports["default"] = _default;