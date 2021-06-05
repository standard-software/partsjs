"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.minutesToTexts = void 0;

var _type = require("../type/type.js");

var _minutesToTexts2 = require("./_minutesToTexts.js");

/**
 * minutesToTexts
 */
var minutesToTexts = function minutesToTexts(minutes) {
  if (!(0, _type.isInteger)(minutes)) {
    throw new TypeError('minutesToTexts args(minutes) is not integer');
  }

  return (0, _minutesToTexts2._minutesToTexts)(minutes);
};

exports.minutesToTexts = minutesToTexts;
var _default = {
  minutesToTexts: minutesToTexts
};
exports["default"] = _default;