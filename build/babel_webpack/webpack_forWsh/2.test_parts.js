(this["webpackJsonptest_parts"] = this["webpackJsonptest_parts"] || []).push([[2],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_date = void 0;

var test_execute_date = function test_execute_date(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException,
      testCounter = _parts$test.testCounter;
  var _parts$date = parts.date,
      Today = _parts$date.Today,
      isInvalidDate = _parts$date.isInvalidDate,
      DateTime = _parts$date.DateTime,
      datetimeToString = _parts$date.datetimeToString,
      dayOfWeek = _parts$date.dayOfWeek,
      dayOfWeekEnglishShort = _parts$date.dayOfWeekEnglishShort,
      dayOfWeekEnglishLong = _parts$date.dayOfWeekEnglishLong,
      nameOfMonth = _parts$date.nameOfMonth,
      nameOfMonthEnglishChar3 = _parts$date.nameOfMonthEnglishChar3,
      nameOfMonthEnglishChar4 = _parts$date.nameOfMonthEnglishChar4,
      nameOfMonthEnglishLong = _parts$date.nameOfMonthEnglishLong;
  var isDate = parts.isDate;
  describe('test_execute_date', function () {
    var test_Today = function test_Today() {
      it('test_Today', function () {
        checkEqual(new Date().toString(), Today().toString());
      });
    };

    var test_isInvalidDate = function test_isInvalidDate() {
      it('test_isInvalidDate', function () {
        checkEqual(true, isDate(new Date(2020, 11, 21)));
        checkEqual(true, isDate(new Date('ABC')));
        checkEqual(false, isInvalidDate(new Date(2020, 11, 21)));
        checkEqual(true, isInvalidDate(new Date('ABC')));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual('NaN', new Date('ABC').toString());
          checkEqual('NaN-NaN-NaNTNaN:NaN:NaN.NZ', new Date('ABC').toISOString());
        } else {
          checkEqual('Invalid Date', new Date('ABC').toString());
          checkEqual(true, isThrown(function () {
            new Date('ABC').toISOString();
          }));
        }
      });
    };

    var test_Date_standard = function test_Date_standard() {
      it('test_Date_standard', function () {
        checkEqual(0, new Date(0).getTime());

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('Thu, 01 Jan 1970 00:00:00 GMT', new Date(0).toUTCString());
        } else {
          checkEqual('Thu, 1 Jan 1970 00:00:00 UTC', new Date(0).toUTCString());
        }

        checkEqual('1970-01-01T00:00:00.000Z', new Date(0).toISOString());
        var dt = new Date(Date.UTC(2020, 10, 21, 11, 35, 10));
        checkEqual('2020-11-21T11:35:10.000Z', dt.toISOString());
      });
    };

    var test_DateTime = function test_DateTime() {
      it('test_DateTime', function () {
        checkEqual(0, new Date(0).getTime());
        var dt = DateTime(undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
        checkEqual(0, dt.getTime());
        checkEqual('1970-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime();
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(0, dt.getTime());
        checkEqual('1970-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-11-21T11:35:10.400Z', dt.toISOString());
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400);
        checkEqual(new Date(2020, 10, 21, 11, 35, 10, 400).toISOString(), dt.toISOString());
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400, false);
        checkEqual(new Date(Date.UTC(2020, 10, 21, 11, 35, 10, 400)).toISOString(), dt.toISOString());
        var dt = DateTime(2020);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, true);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, false);
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, true);
        checkEqual('2020-02-02T19:05:06.007Z', dt.toISOString()); // zero

        var dt = DateTime(2020, 0, 3, 4, 5, 6, 7, false);
        checkEqual('2019-12-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 3, 0, 4, 5, 6, 7, false);
        checkEqual('2020-02-29T04:05:06.007Z', dt.toISOString()); // minus

        var dt = DateTime(2020, -1, 3, 4, 5, 6, 7, false);
        checkEqual('2019-11-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 3, -1, 4, 5, 6, 7, false);
        checkEqual('2020-02-28T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 3, 4, -2, 5, 6, 7, false);
        checkEqual('2020-03-03T22:05:06.007Z', dt.toISOString()); // object parameter

        var dt = DateTime({
          year: 2020
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime({
          year: 2020,
          isLocal: false
        });
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime({
          year: 2020,
          month: 2,
          hour: 13,
          second: 59,
          isLocal: false
        });
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime({
          year: 2020,
          month: 2,
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime(2020, {
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, {
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, {
          minute: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T00:13:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, {
          isLocal: false
        });
        checkEqual('2020-02-03T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, {
          minute: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:13:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, {
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, {
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, {
          isLocal: false
        });
        checkEqual('2020-02-03T04:05:06.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, {
          isLocal: false
        });
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString()); // exception

        checkEqual(false, isThrown(function () {
          return DateTime(2020, 2, 3, 4, 5, 6, 7, {
            isLocal: false
          });
        }));
        checkEqual(true, isThrown(function () {
          return DateTime(2020, 2, 3, 4, 5, 6, 7, {
            isLocal: 1
          });
        }));
        checkEqual(true, isThrown(function () {
          return DateTime(2020, '2', 3, 4, 5, 6, 7, {
            isLocal: true
          });
        }));
      });
    };

    var test_datetimeToString = function test_datetimeToString() {
      it('test_datetimeToString', function () {
        var dt = DateTime(2001, 2, 4, 9, 5, 8, 45);
        checkEqual('2001/02/04 09:05:08.045', datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual('2001/02/04 09:05:08.04', datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual('2001/02/04 09:05:08.0', datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.S'));
        checkEqual('01/2/4 9:5:8 am', datetimeToString(dt, 'YY/M/D H:m:s aa'));
        checkEqual('01/2/4 9:5:8 a', datetimeToString(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 9:5:8 AM', datetimeToString(dt, 'YY/M/D H:m:s AA'));
        checkEqual('01/2/4 9:5:8 A', datetimeToString(dt, 'YY/M/D H:m:s A'));
        var dt = DateTime(2001, 2, 4, 16, 5, 8, 45);
        checkEqual('01/2/4 16:5:8 pm', datetimeToString(dt, 'YY/M/D H:m:s aa'));
        checkEqual('01/2/4 16:5:8 p', datetimeToString(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 16:5:8 PM', datetimeToString(dt, 'YY/M/D H:m:s AA'));
        checkEqual('01/2/4 16:5:8 P', datetimeToString(dt, 'YY/M/D H:m:s A'));
        checkEqual('01/2/4 16:5:8 Sun', datetimeToString(dt, 'YY/M/D H:m:s ddd'));
        checkEqual('01/2/4 16:5:8 Sunday', datetimeToString(dt, 'YY/M/D H:m:s dddd'));
        checkEqual('01/2/4 16:5:8 Feb', datetimeToString(dt, 'YY/M/D H:m:s MMM'));
        checkEqual('01/2/4 16:5:8 Feb.', datetimeToString(dt, 'YY/M/D H:m:s MMMM'));
        checkEqual('01/2/4 16:5:8 February', datetimeToString(dt, 'YY/M/D H:m:s MMMMM')); // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual('YYYYMMDD = 20210106', datetimeToString(dt, '"YYYYMMDD = "YYYYMMDD'));
        checkEqual('YYYYMMDD = 20210106', datetimeToString(dt, "'YYYYMMDD = 'YYYYMMDD")); // timezone

        var timezoneOffset = -1 * new Date().getTimezoneOffset();
        var timezoneOffsetHour = (0 < timezoneOffset ? '+' : '') + parts.string.paddingFirst(String(Math.floor(timezoneOffset / 60)), 2, '0');
        var timezoneOffsetMin = parts.string.paddingFirst(String(timezoneOffset % 60), 2, '0');
        checkEqual(timezoneOffsetHour + timezoneOffsetMin, datetimeToString(dt, 'ZZ')); // '+0900' etc

        checkEqual(timezoneOffsetHour + ':' + timezoneOffsetMin, datetimeToString(dt, 'Z')); // '+09:00' etc
        // exception
        // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          datetimeToString(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(function () {
          datetimeToString(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));
      });
    };

    var test_datetimeToString_MomemtLike = function test_datetimeToString_MomemtLike() {
      it('test_datetimeToString_MomemtLike', function () {
        var datetimeToStringMoment = function datetimeToStringMoment(date, format, isLocal) {
          return datetimeToString(date, format, datetimeToString.func.MomentLikeObject(), isLocal);
        };

        var dt = DateTime(2001, 2, 4, 9, 5, 8, 45);
        checkEqual('2001/02/04 09:05:08.045', datetimeToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual('2001/02/04 09:05:08.04', datetimeToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual('2001/02/04 09:05:08.0', datetimeToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.S'));
        checkEqual('01/2/4 9:5:8 am', datetimeToStringMoment(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 9:5:8 AM', datetimeToStringMoment(dt, 'YY/M/D H:m:s A'));
        var dt = DateTime(2001, 2, 4, 16, 5, 8, 45);
        checkEqual('01/2/4 16:5:8 pm', datetimeToStringMoment(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 16:5:8 PM', datetimeToStringMoment(dt, 'YY/M/D H:m:s A'));
        checkEqual('01/2/4 16:5:8 Sun', datetimeToStringMoment(dt, 'YY/M/D H:m:s ddd'));
        checkEqual('01/2/4 16:5:8 Sunday', datetimeToStringMoment(dt, 'YY/M/D H:m:s dddd'));
        checkEqual('01/2/4 16:5:8 Feb', datetimeToStringMoment(dt, 'YY/M/D H:m:s MMM'));
        checkEqual('01/2/4 16:5:8 February', datetimeToStringMoment(dt, 'YY/M/D H:m:s MMMM')); // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual('YYYYMMDD = 20210106', datetimeToStringMoment(dt, '"YYYYMMDD = "YYYYMMDD'));
        checkEqual('YYYYMMDD = 20210106', datetimeToStringMoment(dt, "'YYYYMMDD = 'YYYYMMDD")); // timezone

        var timezoneOffset = -1 * new Date().getTimezoneOffset();
        var timezoneOffsetHour = (0 < timezoneOffset ? '+' : '') + parts.string.paddingFirst(String(Math.floor(timezoneOffset / 60)), 2, '0');
        var timezoneOffsetMin = parts.string.paddingFirst(String(timezoneOffset % 60), 2, '0');
        checkEqual(timezoneOffsetHour + timezoneOffsetMin, datetimeToStringMoment(dt, 'ZZ')); // '+0900' etc

        checkEqual(timezoneOffsetHour + ':' + timezoneOffsetMin, datetimeToStringMoment(dt, 'Z')); // '+09:00' etc
        // exception
        // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          datetimeToStringMoment(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(function () {
          datetimeToStringMoment(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));
      });
    };

    var test_dayOfWeek = function test_dayOfWeek() {
      it('test_dayOfWeek', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('Sat', dayOfWeek(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, true)); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeek(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeek(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, {
          isLocal: false
        }));
      });
    };

    var test_dayOfWeekEnglishShort = function test_dayOfWeekEnglishShort() {
      it('test_dayOfWeekEnglishShort', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('Sat', dayOfWeekEnglishShort(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, true)); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeekEnglishShort(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeekEnglishShort(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, {
          isLocal: false
        }));
      });
    };

    var test_dayOfWeekEnglishLong = function test_dayOfWeekEnglishLong() {
      it('test_dayOfWeekEnglishLong', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('Saturday', dayOfWeekEnglishLong(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, true)); // local Sat UTC Fri

        checkEqual('Friday', dayOfWeekEnglishLong(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Friday', dayOfWeekEnglishLong(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonth = function test_nameOfMonth() {
      it('test_nameOfMonth', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('Jan', nameOfMonth(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, true)); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonth(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonth(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonthEnglishChar3 = function test_nameOfMonthEnglishChar3() {
      it('test_nameOfMonthEnglishChar3', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('Jan', nameOfMonthEnglishChar3(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, true)); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonthEnglishChar3(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonthEnglishChar3(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonthEnglishChar4 = function test_nameOfMonthEnglishChar4() {
      it('test_nameOfMonthEnglishChar4', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, true)); // local Jan UTC Dec

        checkEqual('Dec.', nameOfMonthEnglishChar4(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec.', nameOfMonthEnglishChar4(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonthEnglishLong = function test_nameOfMonthEnglishLong() {
      it('test_nameOfMonthEnglishLong', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('January', nameOfMonthEnglishLong(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, true)); // local Jan UTC Dec

        checkEqual('December', nameOfMonthEnglishLong(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('December', nameOfMonthEnglishLong(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, {
          isLocal: false
        }));
      });
    };

    test_Today();
    test_isInvalidDate();
    test_Date_standard();
    test_DateTime();
    test_dayOfWeek();
    test_dayOfWeekEnglishShort();
    test_dayOfWeekEnglishLong();
    test_nameOfMonth();
    test_nameOfMonthEnglishChar3();
    test_nameOfMonthEnglishChar4();
    test_nameOfMonthEnglishLong();
    test_datetimeToString();
    test_datetimeToString_MomemtLike();
  });
};

exports.test_execute_date = test_execute_date;
var _default = {
  test_execute_date: test_execute_date
};
exports["default"] = _default;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_compare = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_compare = function test_execute_compare(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_compare', function () {
    var _parts$type = parts.type,
        isNull = _parts$type.isNull,
        isUndefined = _parts$type.isUndefined,
        isNaNStrict = _parts$type.isNaNStrict,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isObjectLike = _parts$type.isObjectLike,
        isArray = _parts$type.isArray,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
        isNotNull = _parts$type.isNotNull,
        isNotUndefined = _parts$type.isNotUndefined,
        isNotNaNStrict = _parts$type.isNotNaNStrict,
        isNotBoolean = _parts$type.isNotBoolean,
        isNotNumber = _parts$type.isNotNumber,
        isNotInteger = _parts$type.isNotInteger,
        isNotString = _parts$type.isNotString,
        isNotFunction = _parts$type.isNotFunction,
        isNotObject = _parts$type.isNotObject,
        isNotObjectType = _parts$type.isNotObjectType,
        isNotArray = _parts$type.isNotArray,
        isNotDate = _parts$type.isNotDate,
        isNotRegExp = _parts$type.isNotRegExp,
        isNotException = _parts$type.isNotException,
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray,
        isUndefinedArray = _parts$type.isUndefinedArray,
        isNullArray = _parts$type.isNullArray,
        isNaNStrictArray = _parts$type.isNaNStrictArray,
        isBooleanArray = _parts$type.isBooleanArray,
        isNumberArray = _parts$type.isNumberArray,
        isIntegerArray = _parts$type.isIntegerArray,
        isStringArray = _parts$type.isStringArray,
        isFunctionArray = _parts$type.isFunctionArray,
        isObjectArray = _parts$type.isObjectArray,
        isObjectNormalArray = _parts$type.isObjectNormalArray,
        isObjectFromNullArray = _parts$type.isObjectFromNullArray,
        isObjectLikeArray = _parts$type.isObjectLikeArray,
        isModuleArray = _parts$type.isModuleArray,
        isArrayArray = _parts$type.isArrayArray,
        isArraySeriesArray = _parts$type.isArraySeriesArray,
        isDateArray = _parts$type.isDateArray,
        isRegExpArray = _parts$type.isRegExpArray,
        isExceptionArray = _parts$type.isExceptionArray,
        isBooleanObjectArray = _parts$type.isBooleanObjectArray,
        isNumberObjectArray = _parts$type.isNumberObjectArray,
        isStringObjectArray = _parts$type.isStringObjectArray,
        isEmptyObjectArray = _parts$type.isEmptyObjectArray,
        isEmptyArrayArray = _parts$type.isEmptyArrayArray,
        isSymbolArray = _parts$type.isSymbolArray,
        isMapArray = _parts$type.isMapArray,
        isWeakMapArray = _parts$type.isWeakMapArray,
        isSetArray = _parts$type.isSetArray,
        isWeakSetArray = _parts$type.isWeakSetArray;
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        expect = _parts$test2.expect,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException;
    var _parts$compare = parts.compare,
        equal = _parts$compare.equal,
        or = _parts$compare.or,
        match = _parts$compare.match,
        matchValue = _parts$compare.matchValue,
        initialValue = _parts$compare.initialValue,
        allMatch = _parts$compare.allMatch,
        someMatch = _parts$compare.someMatch,
        indexOfMatch = _parts$compare.indexOfMatch,
        matchSome = _parts$compare.matchSome,
        matchSomeValue = _parts$compare.matchSomeValue,
        allMatchSome = _parts$compare.allMatchSome,
        someMatchSome = _parts$compare.someMatchSome,
        indexOfMatchSome = _parts$compare.indexOfMatchSome,
        matchAll = _parts$compare.matchAll,
        matchAllValue = _parts$compare.matchAllValue,
        allMatchAll = _parts$compare.allMatchAll,
        someMatchAll = _parts$compare.someMatchAll,
        indexOfMatchAll = _parts$compare.indexOfMatchAll,
        includes = _parts$compare.includes,
        includesSome = _parts$compare.includesSome,
        includesAll = _parts$compare.includesAll;
    var isFirst = parts.string.isFirst;

    var test_equal = function test_equal() {
      it('test_equal', function () {
        // Primitive value
        checkEqual(true, equal(1, 1));
        checkEqual(false, equal(1, 2));
        checkEqual(true, equal('1', '1'));
        checkEqual(false, equal('1', 1));
        checkEqual(true, equal(null, null));
        checkEqual(true, equal(undefined, undefined));
        checkEqual(true, equal(undefined));
        checkEqual(false, equal(null, undefined));
        checkEqual(false, equal(null)); // named argument

        checkEqual(true, equal({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equal({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equal({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equal_object = function test_equal_object() {
      it('test_equal_object', function () {
        // object
        checkEqual(true, equal({}, {}));
        checkEqual(false, equal({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equal({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 1');
        checkEqual(false, equal({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 2');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }), 'test_equal object 3');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }), 'test_equal object 4');
      });
    };

    var test_equal_array = function test_equal_array() {
      it('test_equal_array', function () {
        checkEqual(true, equal([], []));
        checkEqual(false, equal([[]], [[]]));
        checkEqual(true, equal([1], [1]));
        checkEqual(false, equal([1], [2]));
        checkEqual(true, equal([1, 2], [1, 2]));
        checkEqual(false, equal([1, 2], [2, 2]));
        checkEqual(true, equal([1, 2, 3], [1, 2, 3]));
        checkEqual(false, equal([[1, 2], 3], [[1, 2], 3]));
        checkEqual(false, equal([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(false, equal([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2, 3]], [1, 2, 3]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equal(['a'], ['a']));
        checkEqual(false, equal(['a'], ['b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal(['a', 'a'], ['a', 'b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equal([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equal([undefined], [undefined]));
        checkEqual(false, equal([undefined], [null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([undefined, undefined], [undefined, null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equal([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, ['a'], undefined]])); // Object Named Parameter

        checkEqual(true, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equal_date = function test_equal_date() {
      it('test_equal_date', function () {
        // date
        checkEqual(true, equal(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equal date'); // date ignore

        var equalFuncArray = [equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // date

        checkEqual(false, equal(new Date('2019/11/02'), new Date('2019/11/02'), equalFuncArray), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }, equalFuncArray), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')], equalFuncArray), 'test_equal date');
      });
    };

    var test_equal_regexp = function test_equal_regexp() {
      it('test_equal_regexp', function () {
        // regexp
        checkEqual(true, equal(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        var equalFuncArray = [equal.func.date, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // regexp

        checkEqual(false, equal(new RegExp(/^a/), new RegExp(/^a/), equalFuncArray), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }, equalFuncArray), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)], equalFuncArray), 'test_equal regexp');
      });
    };

    var test_equal_map = function test_equal_map() {
      it('test_equal_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equal(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map'); // ignore Map

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equal(map1, map2, equalFuncArray)); // Map in object

        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map');
      });
    };

    var test_equal_set = function test_equal_set() {
      it('test_equal_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equal(set1, set2), 'test_equal Set'); // Set in object

        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set'); // ignore Set

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equal(set1, set2, equalFuncArray)); // Set in object

        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set');
      });
    };

    var test_equalDeep = function test_equalDeep() {
      var objectParameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      it('test_equalDeep', function () {
        // Primitive value
        checkEqual(true, equalDeep(1, 1));
        checkEqual(false, equalDeep(1, 2));
        checkEqual(true, equalDeep('1', '1'));
        checkEqual(false, equalDeep('1', 1));
        checkEqual(true, equalDeep(null, null));
        checkEqual(true, equalDeep(undefined, undefined));
        checkEqual(true, equalDeep(undefined));
        checkEqual(false, equalDeep(null, undefined));
        checkEqual(false, equalDeep(null));

        if (objectParameter === false) {
          return;
        } // named argument


        checkEqual(true, equalDeep({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equalDeep({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equalDeep({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equalDeep_object = function test_equalDeep_object() {
      it('test_equalDeep_object', function () {
        // object
        checkEqual(true, equalDeep({}, {}));
        checkEqual(true, equalDeep({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }));
        checkEqual(false, equalDeep({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {},
          d: ''
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: [],
          d: ''
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: {},
          d: ''
        }, {
          a: '1',
          b: '2',
          c: {}
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: [],
          d: ''
        }, {
          a: '1',
          b: '2',
          c: []
        }));
        checkEqual(true, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B',
            c: 'C'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B',
            c: 'c'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B'
          }
        }, {
          a: {
            b: 'B',
            c: 'C'
          }
        }));
      });
    };

    var test_equalDeep_object_array_mix = function test_equalDeep_object_array_mix() {
      it('test_equalDeep_object_array_mix', function () {
        // equal false array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array object

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array object

        checkEqual(true, equalDeep(testValue1, testValue2));
      });
    };

    var test_equalDeep_object_CircularReference = function test_equalDeep_object_CircularReference() {
      it('test_equalDeep_object_CircularReference', function () {
        // CircularReference
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 1');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 2');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 3');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 4');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object3 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object3;
        checkEqual(false, equalDeep(object1, object2), 'test_equalDeep CircularReference 5');
      });
    };

    var test_equalDeep_array = function test_equalDeep_array() {
      var objectParameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      it('test_equalDeep_array', function () {
        checkEqual(true, equalDeep([1, 2, {}], [1, 2, {}]));
        checkEqual(true, equalDeep([1, 2, [3]], [1, 2, [3]]));
        checkEqual(true, equalDeep([], []));
        checkEqual(true, equalDeep([[]], [[]]));
        checkEqual(true, equalDeep([1], [1]));
        checkEqual(false, equalDeep([1], [2]));
        checkEqual(true, equalDeep([1, 2], [1, 2]));
        checkEqual(false, equalDeep([1, 2], [2, 2]));
        checkEqual(true, equalDeep([1, 2, 3], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, 2], 3], [[1, 2], 3]));
        checkEqual(true, equalDeep([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(true, equalDeep([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2, 3]], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equalDeep([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equalDeep(['a'], ['a']));
        checkEqual(false, equalDeep(['a'], ['b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(false, equalDeep(['a', 'a'], ['a', 'b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(true, equalDeep([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equalDeep([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(true, equalDeep([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equalDeep([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equalDeep([undefined], [undefined]));
        checkEqual(false, equalDeep([undefined], [null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(false, equalDeep([undefined, undefined], [undefined, null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(true, equalDeep([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equalDeep([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(true, equalDeep([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equalDeep([[undefined, [null], undefined]], [[undefined, ['a'], undefined]]));

        if (objectParameter === false) {
          return;
        } // Object Named Parameter


        checkEqual(true, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equalDeep_array_CircularReference = function test_equalDeep_array_CircularReference() {
      it('test_equalDeep_array_CircularReference', function () {
        // CircularReference
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 1');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 2');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 3');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 4');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array3 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array3);
        checkEqual(false, equalDeep(array1, array2), 'test_equalDeep array CircularReference 5');
      });
    };

    var test_equalDeep_date = function test_equalDeep_date() {
      it('test_equalDeep_date', function () {
        // date
        checkEqual(true, equalDeep(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equalDeep date'); // date in object

        checkEqual(true, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equalDeep date'); // date in array

        checkEqual(true, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equalDeep date'); // date ignore

        var equalFuncArray = [equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // date

        checkEqual(false, equalDeep(new Date('2019/11/02'), new Date('2019/11/02'), equalFuncArray), 'test_equalDeep date'); // date in object

        checkEqual(false, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }, equalFuncArray), 'test_equalDeep date in object'); // date in array

        checkEqual(false, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')], equalFuncArray), 'test_equalDeep date');
      });
    };

    var test_equalDeep_regexp = function test_equalDeep_regexp() {
      it('test_equalDeep_regexp', function () {
        // regexp
        checkEqual(true, equalDeep(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(true, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(true, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        var equalFuncArray = [equal.func.value, equal.func.object, equal.func.arraySeries, equal.func["function"], equal.func.date]; // regexp

        checkEqual(false, equalDeep(new RegExp(/^a/), new RegExp(/^a/), equalFuncArray), 'test_equal regexp'); // regexp in object

        checkEqual(false, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }, equalFuncArray), 'test_equal regexp'); // regexp in array

        checkEqual(false, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)], equalFuncArray), 'test_equal regexp');
      });
    };

    var test_equalDeep_map = function test_equalDeep_map() {
      it('test_equalDeep_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map'); // ignore Map

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equalDeep(map1, map2, equalFuncArray)); // Map in object

        checkEqual(false, equalDeep({
          map: map1
        }, {
          map: map2
        }, equalFuncArray)); // Map in array

        checkEqual(false, equalDeep([map1], [map2], equalFuncArray));
      });
    };

    var test_equalDeep_map_object_array = function test_equalDeep_map_object_array() {
      it('test_equalDeep_map_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map Object Array


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map object array'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map object array'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map object array'); // more map add object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map2.set('b', {
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map set object'); // more map set object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        map2.set('b', {
          c: 3,
          b: 4
        });
        checkEqual(false, equalDeep({
          map: map1
        }, {
          map: map2
        }));
      });
    };

    var test_equalDeep_map_CircularReference = function test_equalDeep_map_CircularReference() {
      it('test_equalDeep_map_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // CircularReference


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        var map3 = new Map();
        map3.set('a', {
          a: '1'
        });
        map3.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map3);
        checkEqual(false, equalDeep(map1, map2));
      });
    };

    var test_equalDeep_set = function test_equalDeep_set() {
      it('test_equalDeep_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set1'); // Set in object

        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set2'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set3'); // ignore Set

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equalDeep(set1, set2, equalFuncArray)); // Set in object

        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }, equalFuncArray)); // Set in array

        checkEqual(false, equalDeep([set1], [set2], equalFuncArray));
      });
    };

    var test_equalDeep_set_object_array = function test_equalDeep_set_object_array() {
      it('test_equalDeep_set_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set Object Array


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set object array'); // Set in object

        checkEqual(true, equalDeep({
          map: set1
        }, {
          map: set2
        }), 'test_equal Set object array'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set object array'); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set2.add({
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        })); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        set2.add({
          c: 3,
          b: 4
        });
        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }));
      });
    };

    var test_equalDeep_set_CircularReference = function test_equalDeep_set_CircularReference() {
      it('test_equalDeep_set_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // CircularReference


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        var set3 = new Set();
        set3.add({
          a: '1'
        });
        set3.add(['b']);
        set1.add(set2);
        set2.add(set3);
        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }));
      });
    };

    var test_or = function test_or() {
      it('test_or', function () {
        var value;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [null]));
        checkEqual(false, or(value, [null, null]));
        checkEqual(false, or(value, [null, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, undefined]));
        checkEqual(true, or(value, [undefined, 0]));
        value = null;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [undefined]));
        checkEqual(false, or(value, [undefined, undefined]));
        checkEqual(false, or(value, [undefined, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, null]));
        checkEqual(true, or(value, [null, 0]));
        value = 1;
        checkEqual(true, or(value, [1]));
        checkEqual(true, or(value, [1, 2]));
        checkEqual(true, or(value, [1, 2, 3]));
        checkEqual(false, or(value, [2]));
        checkEqual(false, or(value, [2, 3])); // exception

        checkEqual(true, isThrown(function () {
          or(123, 456);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, or({
          value: 1,
          compareArray: [1, 2]
        }));
        checkEqual(false, or({
          value: 0,
          compareArray: [1, 2]
        })); // exception

        checkEqual(false, isThrown(function () {
          or({
            value: 1,
            compareArray: [1, 2]
          });
        }));
        checkEqual(true, isThrown(function () {
          or({
            value: 1,
            array: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(false, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          }, []);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
      });
    };

    var test_match = function test_match() {
      it('test_match', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual(false, match('', null));
        checkEqual(true, match('', ''));
        checkEqual(false, match('123', null));
        checkEqual(false, match('123', undefined));
        checkEqual(false, match('123', 123));
        checkEqual(true, match('123', '123'));
        checkEqual(false, match(undefined, null));
        checkEqual(true, match(undefined, undefined));
        checkEqual(true, match(null, null));
        checkEqual(false, match(null, undefined));
        checkEqual(true, match('1', isString));
        checkEqual(false, match(1, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(true, match({}, isEmptyObject));
        checkEqual(false, match({
          a: 1
        }, isEmptyObject));
        checkEqual(true, match('100', '100'));
        checkEqual(false, match('200', '100'));
        checkEqual(false, match(100, '100'));
        checkEqual(false, match(200, '100'));
        checkEqual(false, match(null, '100'));
        checkEqual(true, match('100', isString));
        checkEqual(true, match('200', isString));
        checkEqual(false, match(100, isString));
        checkEqual(false, match(200, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(false, match('100', isInteger));
        checkEqual(false, match('200', isInteger));
        checkEqual(true, match(100, isInteger));
        checkEqual(true, match(200, isInteger));
        checkEqual(false, match(null, isInteger));
        checkEqual(false, match(undefined, isInteger));
        checkEqual(false, match({
          value: '123',
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match({
          value: null,
          compare: undefined
        })); // object parameter

        checkEqual(false, match({
          value: null,
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match(null, {
          compare: undefined
        }));
        checkEqual(true, match(undefined, {
          compare: undefined
        })); // checkEqual(101,
        //   matchValue({ value: null,       compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue({ value: undefined,  compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      { compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, { compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, { match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, { match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, { unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, { unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, 101));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_matchValue = function test_matchValue() {
      it('test_matchValue', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual('', matchValue('', null, 999));
        checkEqual(999, matchValue('', '', 999));
        checkEqual('123', matchValue('123', null, 999));
        checkEqual('123', matchValue('123', undefined, 999));
        checkEqual('123', matchValue('123', 123, 999));
        checkEqual(999, matchValue('123', '123', 999));
        checkEqual(undefined, matchValue(undefined, null, 999));
        checkEqual(999, matchValue(undefined, undefined, 999));
        checkEqual(999, matchValue(null, null, 999));
        checkEqual(null, matchValue(null, undefined, 999));
        checkEqual(1, matchValue('1', isString, stringToInteger));
        checkEqual(1, matchValue(1, isString, stringToInteger));
        checkEqual(null, matchValue(null, isString, stringToInteger));
        checkEqual(undefined, matchValue(undefined, isString, stringToInteger));
        checkEqual('test', matchValue({}, isEmptyObject, 'test'));
        checkEqual({
          a: 1
        }, matchValue({
          a: 1
        }, isEmptyObject, 'test'));
        checkEqual('$100', matchValue('100', '100', function (v) {
          return '$' + v;
        }));
        checkEqual('200', matchValue('200', '100', function (v) {
          return '$' + v;
        }));
        checkEqual(100, matchValue(100, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(200, matchValue(200, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(null, matchValue(null, '100', function (v) {
          return '$' + v;
        }));
        checkEqual('$100', matchValue('100', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('$200', matchValue('200', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(100, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(200, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(null, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(undefined, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('?100', matchValue('100', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?200', matchValue('200', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$100', matchValue(100, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$200', matchValue(200, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?null', matchValue(null, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?undefined', matchValue(undefined, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('123', matchValue({
          value: '123',
          compare: undefined,
          match: 999
        }));
        checkEqual(999, matchValue({
          value: undefined,
          compare: undefined,
          match: 999
        }));
        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 999
        })); // object parameter

        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, {
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, {
          match: 100
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, 100));
        checkEqual(200, matchValue(undefined, undefined, 200));
        checkEqual(101, matchValue({
          value: null,
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, {
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, {
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, {
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, 200, {
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, 101));
        checkEqual(200, matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_initialValue = function test_initialValue() {
      it('test_initialValue', function () {
        // almost test_matchSome done
        checkEqual('123', initialValue('123', 999));
        checkEqual(999, initialValue(undefined, 999));
        checkEqual(null, initialValue(null, 999));
        checkEqual('123', initialValue({
          value: '123',
          match: 999
        }));
        checkEqual(999, initialValue({
          value: undefined,
          match: 999
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 999
        }));
        checkEqual('[object Object]', String(initialValue({}, 'test')));
        checkEqual('null', String(initialValue(null, {})));
        checkEqual('[object Object]', String(initialValue(undefined, {}))); // object parameter

        checkEqual(null, initialValue({
          value: null,
          match: 100
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200
        }));
        checkEqual(null, initialValue(null, {
          match: 100
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200
        }));
        checkEqual(null, initialValue(null, 100));
        checkEqual(200, initialValue(undefined, 200));
        checkEqual(100, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, {
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, {
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, 100, {
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, 200, {
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, 100, {
          compareArray: [undefined]
        }));
      });
    };

    var test_allMatch = function test_allMatch() {
      it('test_allMatch', function () {
        checkEqual(true, allMatch([10, 20, 30], function (value) {
          return value > 5;
        }));
        checkEqual(false, allMatch([10, 20, 30], function (value) {
          return value > 15;
        }));
        checkEqual(true, allMatch([null, undefined], function (value) {
          return value == null;
        }));
        checkEqual(false, allMatch([null, undefined], null));
        checkEqual(false, isThrown(function () {
          allMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          allMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(true, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(true, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 15;
          }
        }));
      });
    };

    var test_someMatch = function test_someMatch() {
      it('test_someMatch', function () {
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 5;
        }), 'test_match');
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(false, someMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(true, someMatch([null, undefined], null));
        checkEqual(true, someMatch([null, undefined], isUndefined));
        checkEqual(true, someMatch([null, undefined], isNull));
        checkEqual(true, someMatch([null, undefined, NaN], isNaNStrict)); // object parameter

        checkEqual(true, someMatch({
          valueArray: [10, 20],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch({
          valueArray: [10, 15],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(true, someMatch([10, 20], {
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch([10, 15], {
          compare: function compare(v) {
            return v > 15;
          }
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          someMatch(10, function (value) {
            return value > 15;
          });
        }));
      });
    };

    var test_indexOfMatch = function test_indexOfMatch() {
      it('test_indexOfMatch', function () {
        checkEqual(0, indexOfMatch([10, 20, 30], function (value) {
          return value > 5;
        }));
        checkEqual(2, indexOfMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(0, indexOfMatch([null, undefined], null));
        checkEqual(1, indexOfMatch([null, undefined], isUndefined));
        checkEqual(0, indexOfMatch([null, undefined], isNull));
        checkEqual(2, indexOfMatch([null, undefined, NaN], isNaNStrict));
        checkEqual(false, isThrown(function () {
          indexOfMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(-1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 35;
          }
        }));
        checkEqual(2, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 25;
          }
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 35;
          }
        }));
      });
    };

    var test_matchSome = function test_matchSome() {
      it('test_matchSome', function () {
        // normal args string
        checkEqual(false, matchSome('abc', ['123', '456', '789']), 'test_match 1');
        checkEqual(true, matchSome('abc', ['123', '456', 'abc']), 'test_match 2');
        checkEqual(false, matchSome('abc', ['123', '456', /^b/]), 'test_match 3');
        checkEqual(true, matchSome('abc', ['123', '456', /^a/]), 'test_match 4');
        checkEqual(false, matchSome('abc', []), 'test_match 5');
        checkEqual(false, matchSome('123', [null, undefined, 123, 'abc']), 'test_match 6');
        checkEqual(true, matchSome('abc', [function (value) {
          return isFirst(value, 'a');
        }]), 'test_match 7');
        checkEqual(false, matchSome('abc', [function (value) {
          return isFirst(value, 'b');
        }]), 'test_match 8'); // normal args number

        checkEqual(false, matchSome(123, ['123', '456', '789']), 'test_match number 1');
        checkEqual(true, matchSome(123, [123, 456, 'abc']), 'test_match number 2');
        checkEqual(false, matchSome(123, ['123', '456', /^1/]), 'test_match number 3');
        checkEqual(true, matchSome(123, [123, '456', /^1/]), 'test_match number 4');
        checkEqual(false, matchSome(123, []), 'test_match number 5');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match number 6');
        checkEqual(true, matchSome(100, [function (value) {
          return 100 <= value;
        }]), 'test_match 7');
        checkEqual(false, matchSome(99, [function (value) {
          return 100 <= value;
        }]), 'test_match 8');
        checkEqual(true, matchSome(null, [null, undefined, 123, 'abc']), 'test_match 1');
        checkEqual(true, matchSome(undefined, [null, undefined, 123, 'abc']), 'test_match 2');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match 3');
        checkEqual(true, matchSome('abc', [null, undefined, 123, 'abc']), 'test_match 4');
        checkEqual(true, matchSome(1, [null, undefined, 1, '1']));
        checkEqual(false, matchSome(1, [null, undefined, 2, '1']));
        checkEqual(true, matchSome('1', [null, undefined, 1, '1']));
        checkEqual(false, matchSome('1', [null, undefined, 1, '2']));
        checkEqual(true, matchSome(null, [null, undefined, 0]));
        checkEqual(true, matchSome(undefined, [null, undefined, 0]));
        checkEqual(true, matchSome(0, [null, undefined, 0]));
        checkEqual(false, matchSome(null, [undefined, 0]));
        checkEqual(false, matchSome(undefined, [null, 0]));
        checkEqual(false, matchSome(0, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyObject]));
        checkEqual(true, matchSome(undefined, [null, undefined]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome([], [null, undefined]));
        checkEqual(true, matchSome([], [null, undefined, isEmptyArray]));
        checkEqual(false, matchSome([], [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome({}, [null, undefined]));
        checkEqual(false, matchSome({}, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome({}, [null, undefined, isEmptyObject])); // exception

        checkEqual(true, isThrownException(function () {
          matchSome('123', 'abc');
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', '789']
        }), 'test_match param 1');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', 'abc']
        }), 'test_match param 2');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^b/]
        }), 'test_match param 3');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^a/]
        }), 'test_match param 4');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: []
        }), 'test_match param 5');
        checkEqual(false, matchSome({
          value: '123',
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param 6');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'a');
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'b');
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome('abc', {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome('abc', {
          compareArray: ['123', '456', 'abc']
        })); // Object Named Parameter number

        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', '789']
        }), 'test_match param number 1');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, 456, 'abc']
        }), 'test_match param number 2');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', /^1/]
        }), 'test_match param number 3');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, '456', /^1/]
        }), 'test_match param number 4');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: []
        }), 'test_match param number 5');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param number 6');
        checkEqual(true, matchSome({
          value: 100,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 99,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome(123, {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome(123, {
          compareArray: [123, 456, 'abc']
        })); // exception

        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: ['123']
          });
        }), 'test_match thrown 1');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: []
          });
        }), 'test_match thrown 2');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 3');
        checkEqual(true, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: 123
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'matchSome args(compareArray) is not array';
        }), 'test_match thrown 4');
        checkEqual(true, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 5');
        checkEqual(false, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          }, []);
        }), 'test_match thrown 5');
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, []));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return true;
        }]));
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return false;
        }]));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function (value) {
          return isObject(value);
        }]));
      });
    };

    var test_matchSomeValue = function test_matchSomeValue() {
      it('test_matchSomeValue', function () {
        // almost test_matchSome done
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(98, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(97, [99, 98, 97], 999));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], {
          match: 999
        }));
      });
    };

    var test_allMatchSome = function test_allMatchSome() {
      it('test_allMatchSome', function () {
        checkEqual(true, allMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]));
        checkEqual(false, allMatchSome([10, 20, 30], [function (value) {
          return value > 15;
        }]));
        checkEqual(true, allMatchSome([null, undefined], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined], [null]));
        checkEqual(true, allMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(false, allMatchSome([null, undefined], [isNull]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, allMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict])); // object parameter

        checkEqual(true, allMatchSome({
          valueArray: [10, 30, 40],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, allMatchSome([10, 30, 40], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          allMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          allMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_someMatchSome = function test_someMatchSome() {
      it('test_someMatchSome', function () {
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSome');
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(false, someMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(true, someMatchSome([null, undefined], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined], [null]));
        checkEqual(true, someMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(true, someMatchSome([null, undefined], [isNull]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(false, someMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [isNaNStrict])); // object parameter

        checkEqual(true, someMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome({
          valueArray: [10, 20, 25],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, someMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome([10, 20, 25], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          someMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_indexOfMatchSome = function test_indexOfMatchSome() {
      it('test_indexOfMatchSome', function () {
        checkEqual(0, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSomeIndex');
        checkEqual(2, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(-1, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(0, indexOfMatchSome([null, undefined], [null, undefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [isUndefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(-1, indexOfMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(2, indexOfMatchSome([null, undefined, NaN], [isNaNStrict]));
        checkEqual(false, isThrown(function () {
          indexOfMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatchSome(10, [function (value) {
            return value > 15;
          }]);
        })); // object parameter

        checkEqual(2, indexOfMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome({
          valueArray: [5, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(2, indexOfMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome([1, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome([5, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
      });
    };

    var test_matchAll = function test_matchAll() {
      it('test_matchAll', function () {
        // normal args string
        checkEqual(false, matchAll('abc', []));
        checkEqual(true, matchAll('abc', ['abc']));
        checkEqual(false, matchAll('abc', ['abc', 'def']));
        checkEqual(false, matchAll('abc', ['abc', undefined]));
        checkEqual(false, matchAll('abc', ['abc', null]));
        checkEqual(false, matchAll('abc', ['abc', '']));
        checkEqual(true, matchAll('abc', [/^a/]));
        checkEqual(true, matchAll('abc', [/c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, matchAll('abc', [/^a/, /^b.*/, /c$/]));
        checkEqual(true, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(true, matchAll('aabcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(false, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }])); // normal args number

        checkEqual(false, matchAll(100, []));
        checkEqual(true, matchAll(100, [100]));
        checkEqual(false, matchAll(100, [100, 0]));
        checkEqual(false, matchAll(100, [100, undefined]));
        checkEqual(false, matchAll(100, [100, null]));
        checkEqual(false, matchAll(100, [100, NaN]));
        checkEqual(true, matchAll(100, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(110, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(false, matchAll(111, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(null, [null]));
        checkEqual(false, matchAll(null, [null, undefined]));
        checkEqual(false, matchAll(null, [undefined]));
        checkEqual(false, matchAll(undefined, [null]));
        checkEqual(false, matchAll(undefined, [null, undefined]));
        checkEqual(true, matchAll(undefined, [undefined])); // exception

        checkEqual(false, isThrownException(function () {
          matchAll('123', ['123']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll('123', '123');
        }, new TypeError().name));
        checkEqual(false, isThrownException(function () {
          matchAll(123, [123]);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll(123, 123);
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll({
          value: 'abc',
          compareArray: ['abc', '']
        }));
        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: [/^a/, /.*b.*/, /c$/]
        }));
        checkEqual(true, matchAll('abc', {
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll('abc', {
          compareArray: ['abc', '']
        })); // Object Named Parameter number

        checkEqual(true, matchAll({
          value: 100,
          compareArray: [10 * 10]
        }));
        checkEqual(false, matchAll({
          value: 100,
          compareArray: [100, 101]
        }));
        checkEqual(true, matchAll({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, matchAll(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, matchAll(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: ['abc']
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: 'abc'
          });
        }));
        checkEqual(false, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value >= 100;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
      });
    };

    var test_matchAllValue = function test_matchAllValue() {
      it('test_matchAllValue', function () {
        checkEqual(999, matchAllValue(99, [99], 999));
        checkEqual(98, matchAllValue(98, [99], 999));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999)); // Object Parameter

        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
      });
    };

    var test_allMatchAll = function test_allMatchAll() {
      it('test_allMatchAll', function () {
        checkEqual(false, allMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll(['abc', 'aabc', 'aabbcc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, allMatchAll(['abc', 'aabc', 'aacc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll([100, 105, 110], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, allMatchAll([100, 105, 111], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));

        var testAllMatchAll = function testAllMatchAll(replaceArray) {
          return allMatchAll(replaceArray, [isArray, function (element) {
            return element.length === 2;
          }, function (element) {
            return isStringArray(element);
          }]);
        };

        testCounter();
        checkEqual(false, testAllMatchAll([]));
        checkEqual(false, testAllMatchAll([1, 2]));
        checkEqual(false, testAllMatchAll(['a', 'b']));
        checkEqual(true, testAllMatchAll([['a', 'b']]));
        checkEqual(true, testAllMatchAll([['a', 'b'], ['c', 'd']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c', 1]])); // object parameter

        checkEqual(true, allMatchAll({
          valueArray: [100, 105, 110],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll({
          valueArray: [100, 105, 111],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, allMatchAll([100, 105, 110], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll([100, 105, 111], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_someMatchAll = function test_someMatchAll() {
      it('test_someMatchAll', function () {
        checkEqual(false, someMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, someMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, someMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(true, someMatchAll({
          valueArray: [111, 110, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll({
          valueArray: [111, 115, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, someMatchAll([111, 110, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll([111, 115, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_indexOfMatchAll = function test_indexOfMatchAll() {
      it('test_indexOfMatchAll', function () {
        checkEqual(-1, indexOfMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(-1, indexOfMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(1, indexOfMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll([105], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(-1, indexOfMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(1, indexOfMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(0, indexOfMatchAll({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll({
          valueArray: [5, 40, 50],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(0, indexOfMatchAll([10, 20, 30], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll([1, 10, 20], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll([5, 40, 50], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
      });
    };

    var test_includes = function test_includes() {
      it('test_includes', function () {
        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isInternetExplorer() && !parts.platform.isGasRhino()) {
          checkEqual(true, 'abc'.includes('a')); // string.includes strange empty string

          checkEqual(true, 'abc'.includes(''));
          checkEqual(false, 'abc'.includes(null));
          checkEqual(false, 'abc'.includes(undefined));
          checkEqual(false, 'abc'.includes());
        }

        checkEqual(false, includes('abc', ''));
        checkEqual(true, includes('abc', 'a'));
        checkEqual(true, includes('abc', 'b'));
        checkEqual(false, includes('abc', 'd'));
        checkEqual(false, includes('', ''));
        checkEqual(false, includes('', 'a'));
        checkEqual(false, includes([], null));
        checkEqual(false, includes([], undefined));
        checkEqual(false, includes([], []));
        checkEqual(true, includes([0, 1, 2], 0));
        checkEqual(false, includes([0, 1, 2], 4));
        checkEqual(false, includes([0, 1, 2], []));
        checkEqual(false, includes({
          value: 'abc',
          compare: ''
        }));
        checkEqual(true, includes({
          value: 'abc',
          compare: 'c'
        }));
        checkEqual(false, includes({
          value: [],
          compare: null
        }));
        checkEqual(true, includes({
          value: [0, 1],
          compare: 0
        }));
      });
    };

    var test_includesSome = function test_includesSome() {
      it('test_includesSome', function () {
        checkEqual(false, includesSome('abc', ['']));
        checkEqual(true, includesSome('abc', ['', 'a']));
        checkEqual(false, includesSome('abc', ['', 'd']));
        checkEqual(true, includesSome('abc', ['a']));
        checkEqual(true, includesSome('abc', ['b']));
        checkEqual(false, includesSome('abc', ['d']));
        checkEqual(true, includesSome('abc', ['d', 'a']));
        checkEqual(true, includesSome('abc', ['a', 'd']));
        checkEqual(false, includesSome('abc', ['e', 'd']));
        checkEqual(false, includesSome([], [null]));
        checkEqual(false, includesSome([], [undefined]));
        checkEqual(false, includesSome([], []));
        checkEqual(false, includesSome([0, 1, 2], []));
        checkEqual(true, includesSome([0, 1, 2], [0]));
        checkEqual(false, includesSome([0, 1, 2], [4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 1]));
        checkEqual(false, includesSome([0, 1, 2], [4, 5]));
        checkEqual(false, includesSome({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesSome({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesSome({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesSome({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesSome('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesSome('abc', 'a');
        }));
        checkEqual(false, isThrownException(function () {
          includesSome('123', ['1']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          includesSome('123', [1]);
        }, new TypeError().name));
        checkEqual(false, isThrown(function () {
          includesSome([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesSome([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesSome(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: [1]
          });
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    var test_includesAll = function test_includesAll() {
      it('test_includesAll', function () {
        checkEqual(false, includesAll('abc', ['']));
        checkEqual(false, includesAll('abc', ['', 'a']));
        checkEqual(false, includesAll('abc', ['', 'd']));
        checkEqual(true, includesAll('abc', ['a']));
        checkEqual(true, includesAll('abc', ['b']));
        checkEqual(false, includesAll('abc', ['d']));
        checkEqual(false, includesAll('abc', ['d', 'a']));
        checkEqual(false, includesAll('abc', ['a', 'd']));
        checkEqual(false, includesAll('abc', ['e', 'd']));
        checkEqual(true, includesAll('abc', ['c', 'a']));
        checkEqual(false, includesAll([], [null]));
        checkEqual(false, includesAll([], [undefined]));
        checkEqual(false, includesAll([], []));
        checkEqual(false, includesAll([0, 1, 2], []));
        checkEqual(true, includesAll([0, 1, 2], [0]));
        checkEqual(false, includesAll([0, 1, 2], [4]));
        checkEqual(false, includesAll([0, 1, 2], [0, 4]));
        checkEqual(true, includesAll([0, 1, 2], [0, 1]));
        checkEqual(false, includesAll([0, 1, 2], [4, 5]));
        checkEqual(false, includesAll({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesAll({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesAll({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesAll({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesAll('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesAll('abc', 'a');
        }));
        checkEqual(false, isThrown(function () {
          includesAll([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesAll([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesAll(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    var getProperty = parts.getProperty,
        recursive = parts.recursive,
        typeName = parts.typeName,
        isPrimitiveType = parts.isPrimitiveType;

    var equalDeepUseRecursive = function equalDeepUseRecursive(source, target) {
      var equalType = function equalType(value1, value2) {
        return typeName(value1) === typeName(value2);
      };

      var equalAccept = function equalAccept(source, target) {
        if (isPrimitiveType(source)) {
          if (source !== target) {
            return false;
          }

          return true;
        }

        if (!equalType(source, target)) {
          return false;
        }

        if (!(isObject(source) || isArray(source))) {
          return false;
        }

        if (isObject(source)) {
          if (Object.keys(source).length !== Object.keys(target).length) {
            return false;
          }
        }

        if (isArray(source)) {
          if (source.length !== target.length) {
            return false;
          }
        }

        return;
      };

      var accept = equalAccept(source, target);

      if (accept === true) {
        return true;
      }

      if (accept === false) {
        return false;
      }

      var result = true;
      recursive(source, function (value, key, level, path) {
        var targetValue = getProperty(target, path + '.' + key);
        var accept = equalAccept(value, targetValue);

        if (accept === true) {
          return;
        }

        if (accept === false) {
          result = false;
          return false;
        }

        return value;
      });
      return result;
    };

    test_equal();
    test_equal_object();
    test_equal_array();
    test_equal_date();
    test_equal_regexp();
    test_equal_map();
    test_equal_set();
    var equalDeep;
    equalDeep = equalDeepUseRecursive;
    test_equalDeep(false);
    test_equalDeep_object();
    test_equalDeep_array(false);
    test_equalDeep_object_array_mix();
    equalDeep = parts.compare.equalDeep;
    test_equalDeep();
    test_equalDeep_object();
    test_equalDeep_object_array_mix();
    test_equalDeep_object_CircularReference();
    test_equalDeep_array();
    test_equalDeep_array_CircularReference();
    test_equalDeep_date();
    test_equalDeep_regexp();
    test_equalDeep_map();
    test_equalDeep_map_object_array();
    test_equalDeep_map_CircularReference();
    test_equalDeep_set();
    test_equalDeep_set_object_array();
    test_equalDeep_set_CircularReference();
    test_or();
    test_match();
    test_matchValue();
    test_initialValue();
    test_allMatch();
    test_someMatch();
    test_indexOfMatch();
    test_matchSome();
    test_matchSomeValue();
    test_allMatchSome();
    test_someMatchSome();
    test_indexOfMatchSome();
    test_matchAll();
    test_matchAllValue();
    test_allMatchAll();
    test_someMatchAll();
    test_indexOfMatchAll();
    test_includes();
    test_includesSome();
    test_includesAll();
  });
};

exports.test_execute_compare = test_execute_compare;
var _default = {
  test_execute_compare: test_execute_compare
};
exports["default"] = _default;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_convert = void 0;

/* eslint-disable space-in-parens */

/* eslint-disable no-var */
var test_execute_convert = function test_execute_convert(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_convert', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$convert = parts.convert,
        numberToString = _parts$convert.numberToString,
        valueToString = _parts$convert.valueToString,
        stringToNumber = _parts$convert.stringToNumber,
        stringToNumberDefault = _parts$convert.stringToNumberDefault,
        stringToInteger = _parts$convert.stringToInteger,
        stringToIntegerDefault = _parts$convert.stringToIntegerDefault,
        valueToNumber = _parts$convert.valueToNumber,
        valueToNumberDefault = _parts$convert.valueToNumberDefault,
        valueToInteger = _parts$convert.valueToInteger,
        valueToIntegerDefault = _parts$convert.valueToIntegerDefault;

    var test_StringCast_standard = function test_StringCast_standard() {
      it('test_standardStringCast', function () {
        // Positive number
        checkEqual('32', String(32));
        checkEqual('31.5', String(31.5));
        checkEqual('255', String(255));
        checkEqual('11', String(11));
        checkEqual('255', String(0xFF));
        checkEqual('16', String(16));
        checkEqual('100000', String(1e+5));
        checkEqual('0.00001', String(1e-5));
        checkEqual('255', String(+0xFF));
        checkEqual('16', String(+16));
        checkEqual('100000', String(+1e+5));
        checkEqual('0.00001', String(+1e-5)); // Negative number

        checkEqual('-32', String(-32));
        checkEqual('-31.5', String(-31.5));
        checkEqual('-255', String(-255));
        checkEqual('-11', String(-11));
        checkEqual('-255', String(-0xFF));
        checkEqual('-16', String(-16));
        checkEqual('-100000', String(-1e+5));
        checkEqual('-0.00001', String(-1e-5)); // spacial number value

        checkEqual('NaN', String(NaN));
        checkEqual('Infinity', String(Infinity));
        checkEqual('-Infinity', String(-Infinity)); // other type

        checkEqual('null', String(null));
        checkEqual('undefined', String(undefined));
        checkEqual('[object Object]', String({}));
        checkEqual('', String([]));
        checkEqual('1', String([1]));
        checkEqual('1,2,3', String([1, 2, 3]));
        checkEqual('', String(''));
        checkEqual('a', String('a'));
        checkEqual('true', String(true));
        checkEqual('false', String(false));
      });
    };

    var test_toString_standard = function test_toString_standard() {
      it('test_standardToString', function () {
        // Positive number
        checkEqual('32', 32 .toString());
        checkEqual('31.5', 31.5.toString());
        checkEqual('255', 255 .toString());
        checkEqual('11', 11 .toString());
        checkEqual('255', 0xFF.toString());
        checkEqual('16', 16 .toString());
        checkEqual('100000', 1e+5.toString());
        checkEqual('0.00001', 1e-5.toString());
        checkEqual('255', (+0xFF).toString());
        checkEqual('16', (+16).toString());
        checkEqual('100000', (+1e+5).toString());
        checkEqual('0.00001', (+1e-5).toString()); // Negative number

        checkEqual('-32', (-32).toString());
        checkEqual('-31.5', (-31.5).toString());
        checkEqual('-255', (-255).toString());
        checkEqual('-11', (-11).toString());
        checkEqual('-255', (-0xFF).toString());
        checkEqual('-16', (-16).toString());
        checkEqual('-100000', (-1e+5).toString());
        checkEqual('-0.00001', (-1e-5).toString()); // spacial number value

        checkEqual('NaN', NaN.toString());
        checkEqual('Infinity', Infinity.toString());
        checkEqual('-Infinity', (-Infinity).toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -'Infinity'); // Decimal number other

        checkEqual('1010.01', 10.25.toString(2));
        checkEqual('22.1', 10.25.toString(4));
        checkEqual('12.2', 10.25.toString(8));
        checkEqual('a.4', 10.25.toString(16)); // other type

        checkEqual(true, isThrown(function () {
          return null.toString();
        }));
        checkEqual(true, isThrown(function () {
          return undefined.toString();
        }));
        checkEqual('[object Object]', {}.toString());
        checkEqual('', [].toString());
        checkEqual('1', [1].toString());
        checkEqual('1,2,3', [1, 2, 3].toString());
        checkEqual('', ''.toString());
        checkEqual('a', 'a'.toString());
        checkEqual('true', true.toString());
        checkEqual('false', false.toString());
      });
    };

    var test_numberToString = function test_numberToString() {
      it('test_numberToString', function () {
        // Positive number
        checkEqual('32', numberToString(32));
        checkEqual('32.5', numberToString(32.5));
        checkEqual('32', numberToString(32, 10));
        checkEqual('31.5', numberToString(31.5, 10));
        checkEqual('100000', numberToString(32, 2));
        checkEqual('11111', numberToString(31, 2));
        checkEqual('11111.1', numberToString(31.5, 2));
        checkEqual('11111.01', numberToString(31.25, 2));
        checkEqual('40', numberToString(32, 8));
        checkEqual('37', numberToString(31, 8));
        checkEqual('37.4', numberToString(31.5, 8));
        checkEqual('20', numberToString(32, 16));
        checkEqual('1f', numberToString(31, 16));
        checkEqual('1f.8', numberToString(31.5, 16));
        checkEqual('44', numberToString(32, 7));
        checkEqual('43', numberToString(31, 7));
        checkEqual('255', numberToString(255));
        checkEqual('11', numberToString(11));
        checkEqual('255', numberToString(0xFF));
        checkEqual('16', numberToString(16));
        checkEqual('ff', numberToString(255, 16));
        checkEqual('b', numberToString(11, 16));
        checkEqual('177', numberToString(127, 8));
        checkEqual('12', numberToString(10, 8));
        checkEqual('11', numberToString(3, 2));
        checkEqual('1111', numberToString(15, 2)); // Negative number

        checkEqual('-32', numberToString(-32));
        checkEqual('-32.5', numberToString(-32.5));
        checkEqual('-32', numberToString(-32, 10));
        checkEqual('-31.5', numberToString(-31.5, 10));
        checkEqual('-100000', numberToString(-32, 2));
        checkEqual('-11111', numberToString(-31, 2));
        checkEqual('-11111.1', numberToString(-31.5, 2));
        checkEqual('-11111.01', numberToString(-31.25, 2));
        checkEqual('-40', numberToString(-32, 8));
        checkEqual('-37', numberToString(-31, 8));
        checkEqual('-37.4', numberToString(-31.5, 8));
        checkEqual('-20', numberToString(-32, 16));
        checkEqual('-1f', numberToString(-31, 16));
        checkEqual('-1f.8', numberToString(-31.5, 16));
        checkEqual('-44', numberToString(-32, 7));
        checkEqual('-43', numberToString(-31, 7));
        checkEqual('-255', numberToString(-255));
        checkEqual('-11', numberToString(-11));
        checkEqual('-255', numberToString(-0xFF));
        checkEqual('-16', numberToString(-16));
        checkEqual('-ff', numberToString(-255, 16));
        checkEqual('-b', numberToString(-11, 16));
        checkEqual('-177', numberToString(-127, 8));
        checkEqual('-12', numberToString(-10, 8));
        checkEqual('-11', numberToString(-3, 2));
        checkEqual('-1111', numberToString(-15, 2)); // spacial value

        checkEqual(true, isThrown(function () {
          return numberToString(NaN);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(Infinity);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(-Infinity);
        })); // Exception

        checkEqual(true, isThrown(function () {
          return numberToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', numberToString({
          value: -32
        }));
        checkEqual('-100000', numberToString({
          value: -32,
          radix: 2
        })); // other type

        checkEqual(true, isThrown(function () {
          return numberToString(null);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(undefined);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString({});
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('a');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(true);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(false);
        }));
      });
    };

    var test_valueToString = function test_valueToString() {
      it('test_valueToString', function () {
        // Positive number
        checkEqual('32', valueToString(32));
        checkEqual('32.5', valueToString(32.5));
        checkEqual('32', valueToString(32, 10));
        checkEqual('31.5', valueToString(31.5, 10));
        checkEqual('100000', valueToString(32, 2));
        checkEqual('11111', valueToString(31, 2));
        checkEqual('11111.1', valueToString(31.5, 2));
        checkEqual('11111.01', valueToString(31.25, 2));
        checkEqual('40', valueToString(32, 8));
        checkEqual('37', valueToString(31, 8));
        checkEqual('37.4', valueToString(31.5, 8));
        checkEqual('20', valueToString(32, 16));
        checkEqual('1f', valueToString(31, 16));
        checkEqual('1f.8', valueToString(31.5, 16));
        checkEqual('44', valueToString(32, 7));
        checkEqual('43', valueToString(31, 7));
        checkEqual('255', valueToString(255));
        checkEqual('11', valueToString(11));
        checkEqual('255', valueToString(0xFF));
        checkEqual('16', valueToString(16));
        checkEqual('ff', valueToString(255, 16));
        checkEqual('b', valueToString(11, 16));
        checkEqual('177', valueToString(127, 8));
        checkEqual('12', valueToString(10, 8));
        checkEqual('11', valueToString(3, 2));
        checkEqual('1111', valueToString(15, 2)); // Negative number

        checkEqual('-32', valueToString(-32));
        checkEqual('-32.5', valueToString(-32.5));
        checkEqual('-32', valueToString(-32, 10));
        checkEqual('-31.5', valueToString(-31.5, 10));
        checkEqual('-100000', valueToString(-32, 2));
        checkEqual('-11111', valueToString(-31, 2));
        checkEqual('-11111.1', valueToString(-31.5, 2));
        checkEqual('-11111.01', valueToString(-31.25, 2));
        checkEqual('-40', valueToString(-32, 8));
        checkEqual('-37', valueToString(-31, 8));
        checkEqual('-37.4', valueToString(-31.5, 8));
        checkEqual('-20', valueToString(-32, 16));
        checkEqual('-1f', valueToString(-31, 16));
        checkEqual('-1f.8', valueToString(-31.5, 16));
        checkEqual('-44', valueToString(-32, 7));
        checkEqual('-43', valueToString(-31, 7));
        checkEqual('-255', valueToString(-255));
        checkEqual('-11', valueToString(-11));
        checkEqual('-255', valueToString(-0xFF));
        checkEqual('-16', valueToString(-16));
        checkEqual('-ff', valueToString(-255, 16));
        checkEqual('-b', valueToString(-11, 16));
        checkEqual('-177', valueToString(-127, 8));
        checkEqual('-12', valueToString(-10, 8));
        checkEqual('-11', valueToString(-3, 2));
        checkEqual('-1111', valueToString(-15, 2)); // spacial number value

        testCounter(0);
        checkEqual('NaN', valueToString(NaN));
        checkEqual('Infinity', valueToString(Infinity));
        checkEqual('-Infinity', valueToString(-Infinity)); // Exception

        checkEqual(false, isThrown(function () {
          return valueToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', valueToString({
          value: -32
        }));
        checkEqual('-100000', valueToString({
          value: -32,
          radix: 2
        })); // Decimal number other

        checkEqual('1010.01', valueToString(10.25, 2));
        checkEqual('22.1', valueToString(10.25, 4));
        checkEqual('12.2', valueToString(10.25, 8));
        checkEqual('a.4', valueToString(10.25, 16)); // other type

        checkEqual('null', valueToString(null));
        checkEqual('undefined', valueToString(undefined));
        checkEqual('[object Object]', valueToString({}));
        checkEqual('', valueToString([]));
        checkEqual('1', valueToString([1]));
        checkEqual('1,2,3', valueToString([1, 2, 3]));
        checkEqual('', valueToString(''));
        checkEqual('a', valueToString('a'));
        checkEqual('true', valueToString(true));
        checkEqual('false', valueToString(false));
      });
    };

    var test_NumberCast_standard = function test_NumberCast_standard() {
      it('test_NumberCast_standard', function () {
        // Integer
        checkEqual(123, Number('123'));
        checkEqual(123, Number('0123'));
        checkEqual(123, Number('+123'));
        checkEqual(-123, Number('-0123'));
        checkEqual(123, Number(' 123'), '1');
        checkEqual(123, Number('123 '), '2');
        checkEqual(123, Number(' 123 '), '3');
        checkEqual(123, Number('　123'), '4');
        checkEqual(123, Number('123　'), '5');
        checkEqual(123, Number('　123　'), '6');
        checkEqual(NaN, Number('123 0'));
        checkEqual(NaN, Number('0 123'));
        checkEqual(NaN, Number('1 123'));
        checkEqual(NaN, Number('123a'));
        checkEqual(NaN, Number('a123')); // Decimal

        checkEqual(123.4, Number('123.4'));
        checkEqual(123.4, Number('0123.4'));
        checkEqual(123.4, Number('+123.4'));
        checkEqual(-123.4, Number('-0123.4'));
        checkEqual(123.5, Number('123.5'));
        checkEqual(123.5, Number('0123.5'));
        checkEqual(123.5, Number('+123.5'));
        checkEqual(-123.5, Number('-0123.5'));
        checkEqual(123.4, Number(' 123.4'));
        checkEqual(123.4, Number('123.4 '));
        checkEqual(123.4, Number(' 123.4 '));
        checkEqual(123.4, Number('　123.4'));
        checkEqual(123.4, Number('123.4　'));
        checkEqual(123.4, Number('　123.4　'));
        checkEqual(NaN, Number('123.4 0'));
        checkEqual(NaN, Number('0 123.4'));
        checkEqual(NaN, Number('1 123.4'));
        checkEqual(NaN, Number('123 .4'));
        checkEqual(NaN, Number('123. 4'));
        checkEqual(NaN, Number('123.4a'));
        checkEqual(NaN, Number('a123.4'));
        checkEqual(123.45, Number('123.45'));
        checkEqual(NaN, Number('123.4.5')); // string default value

        checkEqual(NaN, Number('abc')); // space string

        checkEqual(0, Number('')); // ?

        checkEqual(0, Number(' ')); // ?

        checkEqual(0, Number('　')); // ?
        // exponential notation

        checkEqual(3.14, Number(3.14));
        checkEqual(3.14, Number('3.14'));
        checkEqual(3.14, Number('314e-2'));
        checkEqual(3.14, Number('0.0314E+2'));
        checkEqual(0.14, Number('.14'));
        checkEqual(0.00000000000000001, Number('1e-17'));
        checkEqual(1e-17, Number('1e-17')); // exponential notation detail

        checkEqual(1, Number('1.'));
        checkEqual(NaN, Number('1.1e'));
        checkEqual(NaN, Number('1.1e+'));
        checkEqual(100000, Number('1e+5'));
        checkEqual(0.00001, Number('1e-5'));
        checkEqual(NaN, Number('1.e'));
        checkEqual(NaN, Number('1.e+'));
        checkEqual(100000, Number('1.e+5')); // Number different

        checkEqual(291, Number('0x123'));

        if (parts.platform.isGasRhino()) {
          checkEqual(291, Number('+0x123'));
          checkEqual(-291, Number('-0x123'));
        } else {
          checkEqual(NaN, Number('+0x123'));
          checkEqual(NaN, Number('-0x123'));
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('0o123'));
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(NaN, Number('0o123'));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(NaN, Number('0o123'));
        } else {
          checkEqual(83, Number('0o123'));
        }

        checkEqual(NaN, Number('+0o123'));
        checkEqual(NaN, Number('-0o123'));
        checkEqual(Infinity, Number('Infinity'));
        checkEqual(NaN, Number('infinity'));
        checkEqual(NaN, Number('inf'));
        checkEqual(NaN, Number('info')); // Number

        checkEqual(123, Number(123));
        checkEqual(-123, Number(-123));
        checkEqual(1.23, Number(1.23));
        checkEqual(-1.23, Number(-1.23));
        checkEqual(Infinity, Number(Infinity));
        checkEqual(-Infinity, Number(-Infinity));
        checkEqual(NaN, Number(NaN)); // Other

        checkEqual(0, Number(null)); // !

        checkEqual(NaN, Number(undefined));
        checkEqual(NaN, Number({}));
        checkEqual(NaN, Number({
          a: 1
        }));
        checkEqual(0, Number([])); // ?

        checkEqual(1, Number([1])); // ?

        checkEqual(123, Number([123])); // ?

        checkEqual(NaN, Number([1, 2]));
      });
    };

    var test_parseFloat_standard = function test_parseFloat_standard() {
      it('test_parseFloat_standard', function () {
        // Integer
        checkEqual(123, parseFloat('123'));
        checkEqual(123, parseFloat('0123'));
        checkEqual(123, parseFloat('+123'));
        checkEqual(-123, parseFloat('-0123'));
        checkEqual(123, parseFloat(' 123'), '1');
        checkEqual(123, parseFloat('123 '), '2');
        checkEqual(123, parseFloat(' 123 '), '3');
        checkEqual(123, parseFloat('　123'), '4');
        checkEqual(123, parseFloat('123　'), '5');
        checkEqual(123, parseFloat('　123　'), '6');
        checkEqual(123, parseFloat('123 0'));
        checkEqual(0, parseFloat('0 123'));
        checkEqual(1, parseFloat('1 123'));
        checkEqual(123, parseFloat('123a'));
        checkEqual(NaN, parseFloat('a123')); // Decimal

        checkEqual(123.4, parseFloat('123.4'));
        checkEqual(123.4, parseFloat('0123.4'));
        checkEqual(123.4, parseFloat('+123.4'));
        checkEqual(-123.4, parseFloat('-0123.4'));
        checkEqual(123.5, parseFloat('123.5'));
        checkEqual(123.5, parseFloat('0123.5'));
        checkEqual(123.5, parseFloat('+123.5'));
        checkEqual(-123.5, parseFloat('-0123.5'));
        checkEqual(123.4, parseFloat(' 123.4'));
        checkEqual(123.4, parseFloat('123.4 '));
        checkEqual(123.4, parseFloat(' 123.4 '));
        checkEqual(123.4, parseFloat('　123.4'));
        checkEqual(123.4, parseFloat('123.4　'));
        checkEqual(123.4, parseFloat('　123.4　'));
        checkEqual(123.4, parseFloat('123.4 0'));
        checkEqual(0, parseFloat('0 123.4'));
        checkEqual(1, parseFloat('1 123.4'));
        checkEqual(123, parseFloat('123 .4'));
        checkEqual(123, parseFloat('123. 4'));
        checkEqual(123.4, parseFloat('123.4a'));
        checkEqual(NaN, parseFloat('a123.4'));
        checkEqual(123.45, parseFloat('123.45'));
        checkEqual(123.4, parseFloat('123.4.5')); // string default value

        checkEqual(NaN, parseFloat('abc')); // space string

        checkEqual(NaN, parseFloat(''));
        checkEqual(NaN, parseFloat(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　'));
        } else {
          checkEqual(NaN, parseFloat('　'));
        } // exponential notation


        checkEqual(3.14, parseFloat(3.14));
        checkEqual(3.14, parseFloat('3.14'));
        checkEqual(3.14, parseFloat('314e-2'));
        checkEqual(3.14, parseFloat('0.0314E+2'));
        checkEqual(0.14, parseFloat('.14'));
        checkEqual(0.00000000000000001, parseFloat('1e-17'));
        checkEqual(1e-17, parseFloat('1e-17')); // exponential notation detail

        checkEqual(1, parseFloat('1.'));
        checkEqual(1.1, parseFloat('1.1e'));
        checkEqual(1.1, parseFloat('1.1e+'));
        checkEqual(100000, parseFloat('1e+5'));
        checkEqual(0.00001, parseFloat('1e-5'));
        checkEqual(1, parseFloat('1.e'));
        checkEqual(1, parseFloat('1.e+'));
        checkEqual(100000, parseFloat('1.e+5')); // parseFloat different

        checkEqual(0, parseFloat('0x123'));
        checkEqual(0, parseFloat('+0x123'));
        checkEqual(-0, parseFloat('-0x123'));
        checkEqual(0, parseFloat('0o123'));
        checkEqual(0, parseFloat('+0o123'));
        checkEqual(-0, parseFloat('-0o123'));
        checkEqual(Infinity, parseFloat('Infinity'));
        checkEqual(NaN, parseFloat('infinity'));
        checkEqual(NaN, parseFloat('inf'));
        checkEqual(NaN, parseFloat('info')); // parseFloat

        checkEqual(123, parseFloat(123));
        checkEqual(-123, parseFloat(-123));
        checkEqual(1.23, parseFloat(1.23));
        checkEqual(-1.23, parseFloat(-1.23));
        checkEqual(Infinity, parseFloat(Infinity));
        checkEqual(-Infinity, parseFloat(-Infinity));
        checkEqual(NaN, parseFloat(NaN)); // Other

        checkEqual(NaN, parseFloat(null));
        checkEqual(NaN, parseFloat(undefined));
        checkEqual(NaN, parseFloat({}));
        checkEqual(NaN, parseFloat({
          a: 1
        }));
        checkEqual(NaN, parseFloat([]));
        checkEqual(1, parseFloat([1]));
        checkEqual(123, parseFloat([123]));
        checkEqual(1, parseFloat([1, 2]));
      });
    };

    var test_parseInt_standard = function test_parseInt_standard() {
      it('test_parseInt_standard', function () {
        var parseInt10 = function parseInt10(value) {
          return parseInt(value, 10);
        }; // Integer


        checkEqual(123, parseInt10('123'));
        checkEqual(123, parseInt10('0123'));
        checkEqual(123, parseInt10('+123'));
        checkEqual(-123, parseInt10('-0123'));
        checkEqual(123, parseInt10(' 123'), '1');
        checkEqual(123, parseInt10('123 '), '2');
        checkEqual(123, parseInt10(' 123 '), '3');
        checkEqual(123, parseInt10('　123'), '4');
        checkEqual(123, parseInt10('123　'), '5');
        checkEqual(123, parseInt10('　123　'), '6');
        checkEqual(123, parseInt10('123 0'));
        checkEqual(0, parseInt10('0 123'));
        checkEqual(1, parseInt10('1 123'));
        checkEqual(123, parseInt10('123a'));
        checkEqual(NaN, parseInt10('a123')); // Decimal

        checkEqual(123, parseInt10('123.4'));
        checkEqual(123, parseInt10('0123.4'));
        checkEqual(123, parseInt10('+123.4'));
        checkEqual(-123, parseInt10('-0123.4'));
        checkEqual(123, parseInt10('123.5'));
        checkEqual(123, parseInt10('0123.5'));
        checkEqual(123, parseInt10('+123.5'));
        checkEqual(-123, parseInt10('-0123.5'));
        checkEqual(123, parseInt10(' 123.4'));
        checkEqual(123, parseInt10('123.4 '));
        checkEqual(123, parseInt10(' 123.4 '));
        checkEqual(123, parseInt10('　123.4'));
        checkEqual(123, parseInt10('123.4　'));
        checkEqual(123, parseInt10('　123.4　'));
        checkEqual(123, parseInt10('123.4 0'));
        checkEqual(0, parseInt10('0 123.4'));
        checkEqual(1, parseInt10('1 123.4'));
        checkEqual(123, parseInt10('123 .4'));
        checkEqual(123, parseInt10('123. 4'));
        checkEqual(123, parseInt10('123.4a'));
        checkEqual(NaN, parseInt10('a123.4'));
        checkEqual(123, parseInt10('123.45'));
        checkEqual(123, parseInt10('123.4.5')); // string default value

        checkEqual(NaN, parseInt10('abc')); // space string

        checkEqual(NaN, parseInt10(''));
        checkEqual(NaN, parseInt10(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　'));
        } else {
          checkEqual(NaN, parseInt10('　'));
        } // exponential notation


        checkEqual(3, parseInt10(3.14));
        checkEqual(3, parseInt10('3.14'));
        checkEqual(314, parseInt10('314e-2'));
        checkEqual(0, parseInt10('0.0314E+2'));
        checkEqual(NaN, parseInt10('.14')); // ?

        checkEqual(1, parseInt10('1e-17'));
        checkEqual(1, parseInt10('1e-17')); // exponential notation detail

        checkEqual(1, parseInt10('1.'));
        checkEqual(1, parseInt10('1.1e'));
        checkEqual(1, parseInt10('1.1e+'));
        checkEqual(1, parseInt10('1e+5'));
        checkEqual(1, parseInt10('1e-5'));
        checkEqual(1, parseInt10('1.e'));
        checkEqual(1, parseInt10('1.e+'));
        checkEqual(1, parseInt10('1.e+5')); // parseFloat different

        checkEqual(0, parseInt10('0x123'));
        checkEqual(0, parseInt10('+0x123'));
        checkEqual(-0, parseInt10('-0x123'));
        checkEqual(0, parseInt10('0o123'));
        checkEqual(0, parseInt10('+0o123'));
        checkEqual(-0, parseInt10('-0o123'));
        checkEqual(NaN, parseInt10('Infinity')); // ?

        checkEqual(NaN, parseInt10('infinity'));
        checkEqual(NaN, parseInt10('inf'));
        checkEqual(NaN, parseInt10('info')); // parseFloat

        checkEqual(123, parseInt10(123));
        checkEqual(-123, parseInt10(-123));
        checkEqual(1, parseInt10(1.23));
        checkEqual(-1, parseInt10(-1.23));
        checkEqual(NaN, parseInt10(Infinity));
        checkEqual(NaN, parseInt10(-Infinity));
        checkEqual(NaN, parseInt10(NaN)); // Other

        checkEqual(NaN, parseInt10(null));
        checkEqual(NaN, parseInt10(undefined));
        checkEqual(NaN, parseInt10({}));
        checkEqual(NaN, parseInt10({
          a: 1
        }));
        checkEqual(NaN, parseInt10([]));
        checkEqual(1, parseInt10([1]));
        checkEqual(123, parseInt10([123]));
        checkEqual(1, parseInt10([1, 2])); // Decimal number other

        checkEqual(10, parseInt('1010', 2));
        checkEqual(10, parseInt('22', 4));
        checkEqual(10, parseInt('12', 8));
        checkEqual(10, parseInt('a', 16));
        checkEqual(10, parseInt('A', 16));
      });
    };

    var test_stringToNumber = function test_stringToNumber() {
      it('test_stringToNumber', function () {
        // Integer
        checkEqual(123, stringToNumber('123'));
        checkEqual(123, stringToNumber('0123'));
        checkEqual(123, stringToNumber('+123'));
        checkEqual(-123, stringToNumber('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123');
        })); // Decimal

        checkEqual(123.4, stringToNumber('123.4'));
        checkEqual(123.4, stringToNumber('0123.4'));
        checkEqual(123.4, stringToNumber('+123.4'));
        checkEqual(-123.4, stringToNumber('-0123.4'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123.4');
        }));
        checkEqual(123.45, stringToNumber('123.45'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4.5');
        })); // // string  value

        checkEqual(true, isThrown(function () {
          return stringToNumber('abc');
        })); // // space string

        checkEqual(true, isThrown(function () {
          return stringToNumber('');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　');
        })); // // exponential notation

        checkEqual(3.14, stringToNumber('3.14'));
        checkEqual(3.14, stringToNumber('314e-2'));
        checkEqual(3.14, stringToNumber('0.0314E+2'));
        checkEqual(0.14, stringToNumber('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumber('1e-17'));
        checkEqual(1e-17, stringToNumber('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumber('1.'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e+');
        }));
        checkEqual(100000, stringToNumber('1e+5'));
        checkEqual(0.00001, stringToNumber('1e-5'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e+');
        }));
        checkEqual(100000, stringToNumber('1.e+5')); // Number different

        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumber(123);
        }, new TypeError().name), "test stringToNumber exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumber({
          value: '-0123'
        }));
      });
    };

    var test_stringToNumberDefault = function test_stringToNumberDefault() {
      it('test_stringToNumberDefault', function () {
        // Integer
        checkEqual(123, stringToNumberDefault('123'));
        checkEqual(123, stringToNumberDefault('0123'));
        checkEqual(123, stringToNumberDefault('+123'));
        checkEqual(-123, stringToNumberDefault('-0123'));
        checkEqual(undefined, stringToNumberDefault(' 123'), '1');
        checkEqual(undefined, stringToNumberDefault('123 '), '2');
        checkEqual(undefined, stringToNumberDefault(' 123 '), '3');
        checkEqual(undefined, stringToNumberDefault('　123'), '4');
        checkEqual(undefined, stringToNumberDefault('123　'), '5');
        checkEqual(undefined, stringToNumberDefault('　123　'), '6');
        checkEqual(undefined, stringToNumberDefault('123 0'));
        checkEqual(undefined, stringToNumberDefault('0 123'));
        checkEqual(undefined, stringToNumberDefault('1 123'));
        checkEqual(undefined, stringToNumberDefault('123a'));
        checkEqual(undefined, stringToNumberDefault('a123')); // Decimal

        checkEqual(123.4, stringToNumberDefault('123.4'));
        checkEqual(123.4, stringToNumberDefault('0123.4'));
        checkEqual(123.4, stringToNumberDefault('+123.4'));
        checkEqual(-123.4, stringToNumberDefault('-0123.4'));
        checkEqual(undefined, stringToNumberDefault(' 123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4 '));
        checkEqual(undefined, stringToNumberDefault(' 123.4 '));
        checkEqual(undefined, stringToNumberDefault('　123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4　'));
        checkEqual(undefined, stringToNumberDefault('　123.4　'));
        checkEqual(undefined, stringToNumberDefault('123.4 0'));
        checkEqual(undefined, stringToNumberDefault('0 123.4'));
        checkEqual(undefined, stringToNumberDefault('1 123.4'));
        checkEqual(undefined, stringToNumberDefault('123 .4'));
        checkEqual(undefined, stringToNumberDefault('123. 4'));
        checkEqual(undefined, stringToNumberDefault('123.4a'));
        checkEqual(undefined, stringToNumberDefault('a123.4'));
        checkEqual(123.45, stringToNumberDefault('123.45'));
        checkEqual(undefined, stringToNumberDefault('123.4.5')); // string default value

        checkEqual(undefined, stringToNumberDefault('abc'));
        checkEqual(null, stringToNumberDefault('abc', null));
        checkEqual(NaN, stringToNumberDefault('abc', NaN)); // space string

        checkEqual(undefined, stringToNumberDefault(''));
        checkEqual(undefined, stringToNumberDefault(' '));
        checkEqual(undefined, stringToNumberDefault('　')); // exponential notation

        checkEqual(3.14, stringToNumberDefault('3.14'));
        checkEqual(3.14, stringToNumberDefault('314e-2'));
        checkEqual(3.14, stringToNumberDefault('0.0314E+2'));
        checkEqual(0.14, stringToNumberDefault('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumberDefault('1e-17'));
        checkEqual(1e-17, stringToNumberDefault('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumberDefault('1.'));
        checkEqual(undefined, stringToNumberDefault('1.1e'));
        checkEqual(undefined, stringToNumberDefault('1.1e+'));
        checkEqual(100000, stringToNumberDefault('1e+5'));
        checkEqual(0.00001, stringToNumberDefault('1e-5'));
        checkEqual(undefined, stringToNumberDefault('1.e'));
        checkEqual(undefined, stringToNumberDefault('1.e+'));
        checkEqual(100000, stringToNumberDefault('1.e+5')); // Number different

        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('Infinity'));
        checkEqual(undefined, stringToNumberDefault('infinity'));
        checkEqual(undefined, stringToNumberDefault('inf'));
        checkEqual(undefined, stringToNumberDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumberDefault(123);
        }, new TypeError().name), "test stringToNumberDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumberDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToNumberDefault({
          value: 'abc',
          defaultValue: null
        }));
      });
    };

    var test_valueToNumber = function test_valueToNumber() {
      it('test_valueToNumber', function () {
        // Integer
        checkEqual(123, valueToNumber('123'));
        checkEqual(123, valueToNumber('0123'));
        checkEqual(123, valueToNumber('+123'));
        checkEqual(-123, valueToNumber('-0123'));
        checkEqual(NaN, valueToNumber(' 123'), '1');
        checkEqual(NaN, valueToNumber('123 '), '2');
        checkEqual(NaN, valueToNumber(' 123 '), '3');
        checkEqual(NaN, valueToNumber('　123'), '4');
        checkEqual(NaN, valueToNumber('123　'), '5');
        checkEqual(NaN, valueToNumber('　123　'), '6');
        checkEqual(NaN, valueToNumber('123 0'));
        checkEqual(NaN, valueToNumber('0 123'));
        checkEqual(NaN, valueToNumber('1 123'));
        checkEqual(NaN, valueToNumber('123a'));
        checkEqual(NaN, valueToNumber('a123')); // Decimal

        checkEqual(123.4, valueToNumber('123.4'));
        checkEqual(123.4, valueToNumber('0123.4'));
        checkEqual(123.4, valueToNumber('+123.4'));
        checkEqual(-123.4, valueToNumber('-0123.4'));
        checkEqual(123.5, valueToNumber('123.5'));
        checkEqual(123.5, valueToNumber('0123.5'));
        checkEqual(123.5, valueToNumber('+123.5'));
        checkEqual(-123.5, valueToNumber('-0123.5'));
        checkEqual(NaN, valueToNumber(' 123.4'));
        checkEqual(NaN, valueToNumber('123.4 '));
        checkEqual(NaN, valueToNumber(' 123.4 '));
        checkEqual(NaN, valueToNumber('　123.4'));
        checkEqual(NaN, valueToNumber('123.4　'));
        checkEqual(NaN, valueToNumber('　123.4　'));
        checkEqual(NaN, valueToNumber('123.4 0'));
        checkEqual(NaN, valueToNumber('0 123.4'));
        checkEqual(NaN, valueToNumber('1 123.4'));
        checkEqual(NaN, valueToNumber('123 .4'));
        checkEqual(NaN, valueToNumber('123. 4'));
        checkEqual(NaN, valueToNumber('123.4a'));
        checkEqual(NaN, valueToNumber('a123.4'));
        checkEqual(123.45, valueToNumber('123.45'));
        checkEqual(NaN, valueToNumber('123.4.5')); // space string

        checkEqual(NaN, valueToNumber(''));
        checkEqual(NaN, valueToNumber(' '));
        checkEqual(NaN, valueToNumber('　')); // exponential notation

        checkEqual(3.14, valueToNumber(3.14));
        checkEqual(3.14, valueToNumber('3.14'));
        checkEqual(3.14, valueToNumber('314e-2'));
        checkEqual(3.14, valueToNumber('0.0314E+2'));
        checkEqual(0.14, valueToNumber('.14')); // exponential notation detail

        checkEqual(1, valueToNumber('1.'));
        checkEqual(NaN, valueToNumber('1.1e'));
        checkEqual(NaN, valueToNumber('1.1e+'));
        checkEqual(100000, valueToNumber('1e+5'));
        checkEqual(0.00001, valueToNumber('1e-5'));
        checkEqual(NaN, valueToNumber('1.e'));
        checkEqual(NaN, valueToNumber('1.e+'));
        checkEqual(100000, valueToNumber('1.e+5')); // Number different

        checkEqual(NaN, valueToNumber('0x123'));
        checkEqual(NaN, valueToNumber('+0x123'));
        checkEqual(NaN, valueToNumber('-0x123'));
        checkEqual(NaN, valueToNumber('0o123'));
        checkEqual(NaN, valueToNumber('+0o123'));
        checkEqual(NaN, valueToNumber('-0o123'));
        checkEqual(NaN, valueToNumber('Infinity'));
        checkEqual(NaN, valueToNumber('infinity'));
        checkEqual(NaN, valueToNumber('inf'));
        checkEqual(NaN, valueToNumber('info')); // Number

        checkEqual(123, valueToNumber(123));
        checkEqual(-123, valueToNumber(-123));
        checkEqual(1.23, valueToNumber(1.23));
        checkEqual(-1.23, valueToNumber(-1.23));
        checkEqual(Infinity, valueToNumber(Infinity));
        checkEqual(-Infinity, valueToNumber(-Infinity));
        checkEqual(NaN, valueToNumber(NaN)); // Default

        checkEqual(null, valueToNumberDefault('', null));
        checkEqual(null, valueToNumberDefault({
          value: '',
          defaultValue: null
        }));
        checkEqual(null, valueToNumberDefault('', {
          defaultValue: null
        }));
        checkEqual(1.5, valueToNumberDefault('1.5', null));
        checkEqual(1.5, valueToNumberDefault({
          value: '1.5',
          defaultValue: null
        }));
        checkEqual(1.5, valueToNumberDefault('1.5', {
          defaultValue: null
        }));
        checkEqual(NaN, valueToNumberDefault(NaN, null));
        checkEqual(NaN, valueToNumberDefault({
          value: NaN,
          defaultValue: null
        }));
        checkEqual(NaN, valueToNumberDefault(NaN, {
          defaultValue: null
        })); // Other

        checkEqual(NaN, valueToNumber(null));
        checkEqual(NaN, valueToNumber(undefined));
        checkEqual(NaN, valueToNumber({}));
        checkEqual(NaN, valueToNumber({
          a: 1
        }));
        checkEqual(NaN, valueToNumber([]));
        checkEqual(NaN, valueToNumber([1]));
        checkEqual(NaN, valueToNumber([123]));
        checkEqual(NaN, valueToNumber([1, 2]));
      });
    };

    var test_stringToInteger = function test_stringToInteger() {
      it('test_stringToInteger', function () {
        // Integer
        checkEqual(123, stringToInteger('123'));
        checkEqual(123, stringToInteger('0123'));
        checkEqual(123, stringToInteger('+123'));
        checkEqual(-123, stringToInteger('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123');
        })); // Decimal

        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.45');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4.5');
        })); // Positive number

        checkEqual(32, stringToInteger('32'));
        checkEqual(32, stringToInteger('32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('31.5', 10);
        }));
        checkEqual(32, stringToInteger('100000', 2));
        checkEqual(31, stringToInteger('11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.01', 2);
        }));
        checkEqual(32, stringToInteger('40', 8));
        checkEqual(31, stringToInteger('37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('37.4', 8);
        }));
        checkEqual(32, stringToInteger('20', 16));
        checkEqual(31, stringToInteger('1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1f.8', 16);
        }));
        checkEqual(32, stringToInteger('44', 7));
        checkEqual(31, stringToInteger('43', 7));
        checkEqual(255, stringToInteger('255', 10));
        checkEqual(11, stringToInteger('11', 10));
        checkEqual(255, stringToInteger('FF', 16));
        checkEqual(16, stringToInteger('20', 8));
        checkEqual(255, stringToInteger('ff', 16));
        checkEqual(11, stringToInteger('b', 16));
        checkEqual(127, stringToInteger('177', 8));
        checkEqual(10, stringToInteger('12', 8));
        checkEqual(3, stringToInteger('11', 2));
        checkEqual(15, stringToInteger('1111', 2)); // Negative number

        checkEqual(-32, stringToInteger('-32'));
        checkEqual(-32, stringToInteger('-32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-31.5', 10);
        }));
        checkEqual(-32, stringToInteger('-100000', 2));
        checkEqual(-31, stringToInteger('-11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.01', 2);
        }));
        checkEqual(-32, stringToInteger('-40', 8));
        checkEqual(-31, stringToInteger('-37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-37.4', 8);
        }));
        checkEqual(-32, stringToInteger('-20', 16));
        checkEqual(-31, stringToInteger('-1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-1f.8', 16);
        }));
        checkEqual(-32, stringToInteger('-44', 7));
        checkEqual(-31, stringToInteger('-43', 7));
        checkEqual(-255, stringToInteger('-255', 10));
        checkEqual(-11, stringToInteger('-11', 10));
        checkEqual(-255, stringToInteger('-FF', 16));
        checkEqual(-16, stringToInteger('-20', 8));
        checkEqual(-255, stringToInteger('-ff', 16));
        checkEqual(-11, stringToInteger('-b', 16));
        checkEqual(-127, stringToInteger('-177', 8));
        checkEqual(-10, stringToInteger('-12', 8));
        checkEqual(-3, stringToInteger('-11', 2));
        checkEqual(-15, stringToInteger('-1111', 2)); // // Default Value

        checkEqual(true, isThrown(function () {
          return stringToInteger('abc');
        })); // checkEqual(null,      stringToInteger('abc', null,  10));
        // checkEqual(NaN,       stringToInteger('abc', NaN,   10));

        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger(123);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 2);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 2.5);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 1);
        }, new RangeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 36);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 37);
        }, new RangeError().name), "test stringToInteger exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToInteger({
          value: '-0123'
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger({
            value: 'abc'
          });
        }));
        checkEqual(-15, stringToInteger({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_stringToIntegerDefault = function test_stringToIntegerDefault() {
      it('test_stringToIntegerDefault', function () {
        // Integer
        checkEqual(123, stringToIntegerDefault('123'));
        checkEqual(123, stringToIntegerDefault('0123'));
        checkEqual(123, stringToIntegerDefault('+123'));
        checkEqual(-123, stringToIntegerDefault('-0123'));
        checkEqual(undefined, stringToIntegerDefault(' 123'));
        checkEqual(undefined, stringToIntegerDefault('123 '));
        checkEqual(undefined, stringToIntegerDefault(' 123 '));
        checkEqual(undefined, stringToIntegerDefault('123 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123'));
        checkEqual(undefined, stringToIntegerDefault('1 123'));
        checkEqual(undefined, stringToIntegerDefault('123a'));
        checkEqual(undefined, stringToIntegerDefault('a123')); // Decimal

        checkEqual(undefined, stringToIntegerDefault('123.4'));
        checkEqual(undefined, stringToIntegerDefault('0123.4'));
        checkEqual(undefined, stringToIntegerDefault('+123.4'));
        checkEqual(undefined, stringToIntegerDefault('-0123.4'));
        checkEqual(undefined, stringToIntegerDefault(' 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.4 '));
        checkEqual(undefined, stringToIntegerDefault(' 123.4 '));
        checkEqual(undefined, stringToIntegerDefault('123.4 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123.4'));
        checkEqual(undefined, stringToIntegerDefault('1 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123 .4'));
        checkEqual(undefined, stringToIntegerDefault('123. 4'));
        checkEqual(undefined, stringToIntegerDefault('123.4a'));
        checkEqual(undefined, stringToIntegerDefault('a123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.45'));
        checkEqual(undefined, stringToIntegerDefault('123.4.5')); // Positive number

        checkEqual(32, stringToIntegerDefault('32'));
        checkEqual(32, stringToIntegerDefault('32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('31.5', undefined, 10));
        checkEqual(32, stringToIntegerDefault('100000', undefined, 2));
        checkEqual(31, stringToIntegerDefault('11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.01', undefined, 2));
        checkEqual(32, stringToIntegerDefault('40', undefined, 8));
        checkEqual(31, stringToIntegerDefault('37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('37.4', undefined, 8));
        checkEqual(32, stringToIntegerDefault('20', undefined, 16));
        checkEqual(31, stringToIntegerDefault('1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('1f.8', undefined, 16));
        checkEqual(32, stringToIntegerDefault('44', undefined, 7));
        checkEqual(31, stringToIntegerDefault('43', undefined, 7));
        checkEqual(255, stringToIntegerDefault('255', undefined, 10));
        checkEqual(11, stringToIntegerDefault('11', undefined, 10));
        checkEqual(255, stringToIntegerDefault('FF', undefined, 16));
        checkEqual(16, stringToIntegerDefault('20', undefined, 8));
        checkEqual(255, stringToIntegerDefault('ff', undefined, 16));
        checkEqual(11, stringToIntegerDefault('b', undefined, 16));
        checkEqual(127, stringToIntegerDefault('177', undefined, 8));
        checkEqual(10, stringToIntegerDefault('12', undefined, 8));
        checkEqual(3, stringToIntegerDefault('11', undefined, 2));
        checkEqual(15, stringToIntegerDefault('1111', undefined, 2)); // Negative number

        checkEqual(-32, stringToIntegerDefault('-32'));
        checkEqual(-32, stringToIntegerDefault('-32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('-31.5', undefined, 10));
        checkEqual(-32, stringToIntegerDefault('-100000', undefined, 2));
        checkEqual(-31, stringToIntegerDefault('-11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.01', undefined, 2));
        checkEqual(-32, stringToIntegerDefault('-40', undefined, 8));
        checkEqual(-31, stringToIntegerDefault('-37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('-37.4', undefined, 8));
        checkEqual(-32, stringToIntegerDefault('-20', undefined, 16));
        checkEqual(-31, stringToIntegerDefault('-1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('-1f.8', undefined, 16));
        checkEqual(-32, stringToIntegerDefault('-44', undefined, 7));
        checkEqual(-31, stringToIntegerDefault('-43', undefined, 7));
        checkEqual(-255, stringToIntegerDefault('-255', undefined, 10));
        checkEqual(-11, stringToIntegerDefault('-11', undefined, 10));
        checkEqual(-255, stringToIntegerDefault('-FF', undefined, 16));
        checkEqual(-16, stringToIntegerDefault('-20', undefined, 8));
        checkEqual(-255, stringToIntegerDefault('-ff', undefined, 16));
        checkEqual(-11, stringToIntegerDefault('-b', undefined, 16));
        checkEqual(-127, stringToIntegerDefault('-177', undefined, 8));
        checkEqual(-10, stringToIntegerDefault('-12', undefined, 8));
        checkEqual(-3, stringToIntegerDefault('-11', undefined, 2));
        checkEqual(-15, stringToIntegerDefault('-1111', undefined, 2)); // Default Value

        checkEqual(undefined, stringToIntegerDefault('abc'));
        checkEqual(null, stringToIntegerDefault('abc', null, 10));
        checkEqual(NaN, stringToIntegerDefault('abc', NaN, 10));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('Infinity'));
        checkEqual(undefined, stringToIntegerDefault('infinity'));
        checkEqual(undefined, stringToIntegerDefault('inf'));
        checkEqual(undefined, stringToIntegerDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault(123);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2.5);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 1);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 36);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 37);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToIntegerDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToIntegerDefault({
          value: 'abc',
          defaultValue: null
        }));
        checkEqual(undefined, stringToIntegerDefault({
          value: 'abc'
        }));
        checkEqual(-15, stringToIntegerDefault({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_valueToInteger = function test_valueToInteger() {
      it('test_valueToInteger', function () {
        // Integer
        checkEqual(123, valueToInteger('123'));
        checkEqual(123, valueToInteger('0123'));
        checkEqual(123, valueToInteger('+123'));
        checkEqual(-123, valueToInteger('-0123'));
        checkEqual(NaN, valueToInteger(' 123'), '1');
        checkEqual(NaN, valueToInteger('123 '), '2');
        checkEqual(NaN, valueToInteger(' 123 '), '3');
        checkEqual(NaN, valueToInteger('　123'), '4');
        checkEqual(NaN, valueToInteger('123　'), '5');
        checkEqual(NaN, valueToInteger('　123　'), '6');
        checkEqual(NaN, valueToInteger('123 0'));
        checkEqual(NaN, valueToInteger('0 123'));
        checkEqual(NaN, valueToInteger('1 123'));
        checkEqual(NaN, valueToInteger('123a'));
        checkEqual(NaN, valueToInteger('a123')); // Decimal

        checkEqual(123, valueToInteger('123.4'));
        checkEqual(123, valueToInteger('0123.4'));
        checkEqual(123, valueToInteger('+123.4'));
        checkEqual(-123, valueToInteger('-0123.4'));
        checkEqual(124, valueToInteger('123.5'));
        checkEqual(124, valueToInteger('0123.5'));
        checkEqual(124, valueToInteger('+123.5'));
        checkEqual(-124, valueToInteger('-0123.5'));
        checkEqual(NaN, valueToInteger(' 123.4'));
        checkEqual(NaN, valueToInteger('123.4 '));
        checkEqual(NaN, valueToInteger(' 123.4 '));
        checkEqual(NaN, valueToInteger('　123.4'));
        checkEqual(NaN, valueToInteger('123.4　'));
        checkEqual(NaN, valueToInteger('　123.4　'));
        checkEqual(NaN, valueToInteger('123.4 0'));
        checkEqual(NaN, valueToInteger('0 123.4'));
        checkEqual(NaN, valueToInteger('1 123.4'));
        checkEqual(NaN, valueToInteger('123 .4'));
        checkEqual(NaN, valueToInteger('123. 4'));
        checkEqual(NaN, valueToInteger('123.4a'));
        checkEqual(NaN, valueToInteger('a123.4'));
        checkEqual(123, valueToInteger('123.45'));
        checkEqual(NaN, valueToInteger('123.4.5')); // space string

        checkEqual(NaN, valueToInteger(''));
        checkEqual(NaN, valueToInteger(' '));
        checkEqual(NaN, valueToInteger('　')); // exponential notation

        checkEqual(3, valueToInteger(3.14));
        checkEqual(3, valueToInteger('3.14'));
        checkEqual(3, valueToInteger('314e-2'));
        checkEqual(3, valueToInteger('0.0314E+2'));
        checkEqual(0, valueToInteger('.14')); // exponential notation detail

        checkEqual(1, valueToInteger('1.'));
        checkEqual(NaN, valueToInteger('1.1e'));
        checkEqual(NaN, valueToInteger('1.1e+'));
        checkEqual(100000, valueToInteger('1e+5'));
        checkEqual(0, valueToInteger('1e-5'));
        checkEqual(NaN, valueToInteger('1.e'));
        checkEqual(NaN, valueToInteger('1.e+'));
        checkEqual(100000, valueToInteger('1.e+5')); // Number different

        checkEqual(NaN, valueToInteger('0x123'));
        checkEqual(NaN, valueToInteger('+0x123'));
        checkEqual(NaN, valueToInteger('-0x123'));
        checkEqual(NaN, valueToInteger('0o123'));
        checkEqual(NaN, valueToInteger('+0o123'));
        checkEqual(NaN, valueToInteger('-0o123'));
        checkEqual(NaN, valueToInteger('Infinity'));
        checkEqual(NaN, valueToInteger('infinity'));
        checkEqual(NaN, valueToInteger('inf'));
        checkEqual(NaN, valueToInteger('info')); // Number

        checkEqual(123, valueToInteger(123));
        checkEqual(-123, valueToInteger(-123));
        checkEqual(1, valueToInteger(1.23));
        checkEqual(2, valueToInteger(1.67));
        checkEqual(-1, valueToInteger(-1.23));
        checkEqual(-2, valueToInteger(-1.67));
        checkEqual(Infinity, valueToInteger(Infinity));
        checkEqual(-Infinity, valueToInteger(-Infinity));
        checkEqual(NaN, valueToInteger(NaN)); // Default

        checkEqual(null, valueToIntegerDefault('', null));
        checkEqual(null, valueToIntegerDefault({
          value: '',
          defaultValue: null
        }));
        checkEqual(null, valueToIntegerDefault('', {
          defaultValue: null
        }));
        checkEqual(2, valueToIntegerDefault('1.5', null));
        checkEqual(2, valueToIntegerDefault({
          value: '1.5',
          defaultValue: null
        }));
        checkEqual(2, valueToIntegerDefault('1.5', {
          defaultValue: null
        }));
        checkEqual(1, valueToIntegerDefault('1', null));
        checkEqual(1, valueToIntegerDefault({
          value: '1',
          defaultValue: null
        }));
        checkEqual(1, valueToIntegerDefault('1', {
          defaultValue: null
        }));
        checkEqual(NaN, valueToIntegerDefault(NaN, null));
        checkEqual(NaN, valueToIntegerDefault({
          value: NaN,
          defaultValue: null
        }));
        checkEqual(NaN, valueToIntegerDefault(NaN, {
          defaultValue: null
        })); // Other

        checkEqual(NaN, valueToInteger(null));
        checkEqual(NaN, valueToInteger(undefined));
        checkEqual(NaN, valueToInteger({}));
        checkEqual(NaN, valueToInteger({
          a: 1
        }));
        checkEqual(NaN, valueToInteger([]));
        checkEqual(NaN, valueToInteger([1]));
        checkEqual(NaN, valueToInteger([123]));
      });
    };

    test_numberToString();
    test_valueToString();
    test_StringCast_standard();
    test_toString_standard();
    test_NumberCast_standard();
    test_parseFloat_standard();
    test_parseInt_standard();
    test_stringToNumber();
    test_stringToNumberDefault();
    test_valueToNumber();
    test_stringToInteger();
    test_stringToIntegerDefault();
    test_valueToInteger();
  });
};

exports.test_execute_convert = test_execute_convert;
var _default = {
  test_execute_convert: test_execute_convert
};
exports["default"] = _default;

/***/ })

}]);