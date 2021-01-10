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
      dayOfWeekJapaneseShort = _parts$date.dayOfWeekJapaneseShort,
      dayOfWeekJapaneseLong = _parts$date.dayOfWeekJapaneseLong,
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

    var test_dayOfWeekJapaneseShort = function test_dayOfWeekJapaneseShort() {
      it('test_dayOfWeekJapaneseShort', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('土', dayOfWeekJapaneseShort(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土', dayOfWeekJapaneseShort(dt, true)); // local Sat UTC Fri

        checkEqual('金', dayOfWeekJapaneseShort(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('土', dayOfWeekJapaneseShort(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9);
        checkEqual('土', dayOfWeekJapaneseShort(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土', dayOfWeekJapaneseShort(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('金', dayOfWeekJapaneseShort(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('土', dayOfWeekJapaneseShort(dt, {
          isLocal: false
        }));
      });
    };

    var test_dayOfWeekJapaneseLong = function test_dayOfWeekJapaneseLong() {
      it('test_dayOfWeekJapaneseLong', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt, true)); // local Sat UTC Fri

        checkEqual('金曜日', dayOfWeekJapaneseLong(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9);
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('金曜日', dayOfWeekJapaneseLong(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt, {
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
    test_dayOfWeekJapaneseShort();
    test_dayOfWeekJapaneseLong();
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