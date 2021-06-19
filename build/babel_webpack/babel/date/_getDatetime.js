"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getDatetime = void 0;

var _type = require("../type/type.js");

var _cloneDate = require("../common/__cloneDate.js");

var _roundDown2 = require("../number/_roundDown.js");

var _getDatetime = function _getDatetime(date, timezoneOffset) {
  var d = (0, _cloneDate.__cloneDate)(date);

  if ((0, _type.isUndefined)(timezoneOffset)) {
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      date: d.getDate(),
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
      milliseconds: d.getMilliseconds()
    };
  } else if ((0, _type.isNull)(timezoneOffset)) {
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      date: d.getUTCDate(),
      hours: d.getUTCHours(),
      minutes: d.getUTCMinutes(),
      seconds: d.getUTCSeconds(),
      milliseconds: d.getUTCMilliseconds()
    };
  } else {
    var timezoneOffsetSeconds = timezoneOffset * 60 - (0, _roundDown2._roundDown)(timezoneOffset) * 60;
    d.setUTCMinutes(d.getUTCMinutes() - timezoneOffset);
    d.setUTCSeconds(d.getUTCSeconds() - timezoneOffsetSeconds);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      date: d.getUTCDate(),
      hours: d.getUTCHours(),
      minutes: d.getUTCMinutes(),
      seconds: d.getUTCSeconds(),
      milliseconds: d.getUTCMilliseconds()
    };
  }
};

exports._getDatetime = _getDatetime;