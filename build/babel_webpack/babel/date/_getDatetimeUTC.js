"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getDatetimeUTC = void 0;

var _getDatetime2 = require("./_getDatetime.js");

var _getDatetimeUTC = function _getDatetimeUTC(date) {
  return (0, _getDatetime2._getDatetime)(date, null);
};

exports._getDatetimeUTC = _getDatetimeUTC;