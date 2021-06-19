"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getTimezoneOffset = void 0;

var _roundDown2 = require("../number/_roundDown.js");

var _getTimezoneOffset = function _getTimezoneOffset(date) {
  var _date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));

  var diffMsec = date.getTime() - _date.getTime();

  var minutes = (0, _roundDown2._roundDown)(diffMsec / 60 / 1000);
  var seconds = diffMsec / 1000;
  return {
    minutes: minutes,
    seconds: seconds
  };
};

exports._getTimezoneOffset = _getTimezoneOffset;