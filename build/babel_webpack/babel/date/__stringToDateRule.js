"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.__stringToDateRule = void 0;

var _type = require("../type/type.js");

var _monthNames = require("../date/__monthNames.js");

var _dayOfWeekNames = require("../date/__dayOfWeekNames.js");

var _includes = require("../compare/__includes.js");

var _string_common = require("../string/string_common.js");

var _textsToMinutes2 = require("./_textsToMinutes.js");

var _defaultRule;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flagPM = false;
var datetimeInfo = {
  timezoneOffset: null,
  year: null,
  month: null,
  date: null,
  hours: null,
  minutes: null,
  seconds: null,
  milliseconds: null
};

var setTimezoneHH_MM = function setTimezoneHH_MM(UTCText) {
  return function (value) {
    if (value === UTCText) {
      datetimeInfo.timezoneOffset = null;
    } else {
      var _ref = [(0, _string_common._subLength)(value, 0, 1), (0, _string_common._subLength)(value, 1, 2), (0, _string_common._subLength)(value, 4, 2)],
          s = _ref[0],
          h = _ref[1],
          m = _ref[2];
      datetimeInfo.timezoneOffset = -1 * (0, _textsToMinutes2._textsToMinutes)([s, h, m]);
    }
  };
};

var setTimezoneHHMM = function setTimezoneHHMM(UTCText) {
  return function (value) {
    if (value === UTCText) {
      datetimeInfo.timezoneOffset = null;
    } else {
      var _ref2 = [(0, _string_common._subLength)(value, 0, 1), (0, _string_common._subLength)(value, 1, 2), (0, _string_common._subLength)(value, 3, 2)],
          s = _ref2[0],
          h = _ref2[1],
          m = _ref2[2];
      datetimeInfo.timezoneOffset = -1 * (0, _textsToMinutes2._textsToMinutes)([s, h, m]);
    }
  };
};

var setYear4 = function setYear4(value) {
  datetimeInfo.year = Number(value);
};

var setYear2 = function setYear2(value) {
  var plusValue = Math.floor(datetimeInfo.year / 100) * 100;
  datetimeInfo.year = Number(value) + plusValue;
};

var setMonth = function setMonth(value) {
  datetimeInfo.month = Number(value) - 1;
};

var setMonthEnglishChar3 = function setMonthEnglishChar3(value) {
  datetimeInfo.month = _monthNames.__monthNames.EnglishChar3().indexOf(value);
};

var setMonthEnglishChar4 = function setMonthEnglishChar4(value) {
  datetimeInfo.month = _monthNames.__monthNames.EnglishChar4().indexOf(value);
};

var setMonthEnglishLong = function setMonthEnglishLong(value) {
  datetimeInfo.month = _monthNames.__monthNames.EnglishLong().indexOf(value);
};

var setDate = function setDate(value) {
  datetimeInfo.date = Number(value);
};

var setHours = function setHours(value) {
  datetimeInfo.hours = Number(value);
};

var setAMPM = function setAMPM(value) {
  // console.log({ date, value, flagPM });
  if ((0, _includes.__includes)(value.toLowerCase(), 'p')) {
    flagPM = true;
  }
};

var setHours12 = function setHours12(value) {
  datetimeInfo.hours = Number(value);
};

var setMinutes = function setMinutes(value) {
  datetimeInfo.minutes = Number(value);
};

var setSec = function setSec(value) {
  datetimeInfo.seconds = Number(value);
};

var setMsec = function setMsec(value) {
  datetimeInfo.milliseconds = Number(value);
};

var setMsecX10 = function setMsecX10(value) {
  datetimeInfo.milliseconds = Number(value) * 10;
};

var setMsecX100 = function setMsecX100(value) {
  datetimeInfo.milliseconds = Number(value) * 100;
};

var __stringToDateRule = {
  setYear4: setYear4,
  setYear2: setYear2,
  setMonth: setMonth,
  setDate: setDate,
  setHours: setHours,
  setHours12: setHours12,
  setMinutes: setMinutes,
  setSec: setSec,
  setMsec: setMsec,
  setMsecX10: setMsecX10,
  setMsecX100: setMsecX100,
  setAMPM: setAMPM,
  setMonthEnglishChar3: setMonthEnglishChar3,
  setMonthEnglishChar4: setMonthEnglishChar4,
  setMonthEnglishLong: setMonthEnglishLong,
  setTimezoneHH_MM: setTimezoneHH_MM,
  setTimezoneHHMM: setTimezoneHHMM
};
exports.__stringToDateRule = __stringToDateRule;

__stringToDateRule.initialize = function (dateSource) {
  flagPM = false;
  datetimeInfo.year = dateSource.getFullYear();
  datetimeInfo.month = dateSource.getMonth();
  datetimeInfo.date = dateSource.getDate();
  datetimeInfo.hours = dateSource.getHours();
  datetimeInfo.minutes = dateSource.getMinutes();
  datetimeInfo.seconds = dateSource.getSeconds();
  datetimeInfo.milliseconds = dateSource.getMilliseconds();
  datetimeInfo.timezoneOffset = dateSource.getTimezoneOffset();
};

__stringToDateRule.finalize = function (dateSource) {
  var year = datetimeInfo.year,
      month = datetimeInfo.month,
      date = datetimeInfo.date,
      hours = datetimeInfo.hours,
      minutes = datetimeInfo.minutes,
      seconds = datetimeInfo.seconds,
      milliseconds = datetimeInfo.milliseconds,
      timezoneOffset = datetimeInfo.timezoneOffset; // console.log({ year, month, date, hours, minutes, seconds, milliseconds });

  dateSource.setUTCFullYear(year, month, date);
  dateSource.setUTCHours(flagPM === true ? hours + 12 : hours, minutes, seconds, milliseconds);

  if (!(0, _type.isNull)(datetimeInfo.timezoneOffset)) {
    dateSource.setMinutes(dateSource.getMinutes() + datetimeInfo.timezoneOffset);
  }

  return {
    timezoneOffset: timezoneOffset
  };
};

var r = __stringToDateRule;
var regDayOfWeekEnglishShort = "(".concat(_dayOfWeekNames.__dayOfWeekNames.EnglishShort().join('|'), ")");
var regDayOfWeekEnglishLong = "(".concat(_dayOfWeekNames.__dayOfWeekNames.EnglishLong().join('|'), ")");
var regMonthNameEnglishChar3 = "(".concat(_monthNames.__monthNames.EnglishChar3().join('|'), ")");
var regMonthNameEnglishChar4 = "(".concat(_monthNames.__monthNames.EnglishChar4().join('|'), ")");
var regMonthNameEnglishLong = "(".concat(_monthNames.__monthNames.EnglishLong().join('|'), ")");
var defaultRule = (_defaultRule = {}, _defineProperty(_defaultRule, 'YYYY', {
  reg: '(\\d{4})',
  func: r.setYear4
}), _defineProperty(_defaultRule, 'YY', {
  reg: '(\\d{2})',
  func: r.setYear2
}), _defineProperty(_defaultRule, 'MM', {
  reg: '(\\d{2})',
  func: r.setMonth
}), _defineProperty(_defaultRule, 'M', {
  reg: '(\\d{1,2})',
  func: r.setMonth
}), _defineProperty(_defaultRule, 'DD', {
  reg: '(\\d{2})',
  func: r.setDate
}), _defineProperty(_defaultRule, 'D', {
  reg: '(\\d{1,2})',
  func: r.setDate
}), _defineProperty(_defaultRule, 'HH', {
  reg: '(\\d{2})',
  func: r.setHours
}), _defineProperty(_defaultRule, 'H', {
  reg: '(\\d{1,2})',
  func: r.setHours
}), _defineProperty(_defaultRule, 'hh', {
  reg: '(\\d{2})',
  func: r.setHours12
}), _defineProperty(_defaultRule, 'h', {
  reg: '(\\d{1,2})',
  func: r.setHours12
}), _defineProperty(_defaultRule, 'mm', {
  reg: '(\\d{2})',
  func: r.setMinutes
}), _defineProperty(_defaultRule, 'm', {
  reg: '(\\d{1,2})',
  func: r.setMinutes
}), _defineProperty(_defaultRule, 'ss', {
  reg: '(\\d{2})',
  func: r.setSec
}), _defineProperty(_defaultRule, 's', {
  reg: '(\\d{1,2})',
  func: r.setSec
}), _defineProperty(_defaultRule, 'SSS', {
  reg: '(\\d{3})',
  func: r.setMsec
}), _defineProperty(_defaultRule, 'SS', {
  reg: '(\\d{2})',
  func: r.setMsecX10
}), _defineProperty(_defaultRule, 'S', {
  reg: '(\\d{1})',
  func: r.setMsecX100
}), _defineProperty(_defaultRule, 'aa', {
  reg: '(am|pm)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'AA', {
  reg: '(AM|PM)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'a', {
  reg: '(a|p)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'A', {
  reg: '(A|P)',
  func: r.setAMPM
}), _defineProperty(_defaultRule, 'ddd', {
  reg: regDayOfWeekEnglishShort,
  func: function func() {}
}), _defineProperty(_defaultRule, 'dddd', {
  reg: regDayOfWeekEnglishLong,
  func: function func() {}
}), _defineProperty(_defaultRule, 'MMM', {
  reg: regMonthNameEnglishChar3,
  func: r.setMonthEnglishChar3
}), _defineProperty(_defaultRule, 'MMMM', {
  reg: regMonthNameEnglishChar4,
  func: r.setMonthEnglishChar4
}), _defineProperty(_defaultRule, 'MMMMM', {
  reg: regMonthNameEnglishLong,
  func: r.setMonthEnglishLong
}), _defineProperty(_defaultRule, 'Z', {
  reg: '(Z|[+|-]\\d{2}:\\d{2})',
  func: r.setTimezoneHH_MM('Z')
}), _defineProperty(_defaultRule, 'ZZ', {
  reg: '(Z|[+|-]\\d{2}\\d{2})',
  func: r.setTimezoneHHMM('Z')
}), _defaultRule);
var momentLikeRule = [];

__stringToDateRule.Default = function () {
  return defaultRule;
};

var _default = {
  __stringToDateRule: __stringToDateRule
};
exports["default"] = _default;