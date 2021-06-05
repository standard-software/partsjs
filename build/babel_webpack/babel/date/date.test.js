"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_date = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var test_execute_date = function test_execute_date(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException,
      testCounter = _parts$test.testCounter;
  var _parts$date = parts.date,
      ThisYear = _parts$date.ThisYear,
      ThisMonth = _parts$date.ThisMonth,
      Today = _parts$date.Today,
      isInvalidDate = _parts$date.isInvalidDate,
      Datetime = _parts$date.Datetime,
      dateToString = _parts$date.dateToString,
      dateToStringUTC = _parts$date.dateToStringUTC,
      dayOfWeek = _parts$date.dayOfWeek,
      dayOfWeekEnglishShort = _parts$date.dayOfWeekEnglishShort,
      dayOfWeekEnglishLong = _parts$date.dayOfWeekEnglishLong,
      dayOfWeekJapaneseShort = _parts$date.dayOfWeekJapaneseShort,
      dayOfWeekJapaneseLong = _parts$date.dayOfWeekJapaneseLong,
      nameOfMonth = _parts$date.nameOfMonth,
      nameOfMonthEnglishChar3 = _parts$date.nameOfMonthEnglishChar3,
      nameOfMonthEnglishChar4 = _parts$date.nameOfMonthEnglishChar4,
      nameOfMonthEnglishLong = _parts$date.nameOfMonthEnglishLong,
      stringToDate = _parts$date.stringToDate,
      minutesToTexts = _parts$date.minutesToTexts,
      textsToMinutes = _parts$date.textsToMinutes;
  var isDate = parts.isDate;
  describe('test_execute_date', function () {
    var test_ThisYear = function test_ThisYear() {
      it('test_ThisYear', function () {
        var now = new Date();
        checkEqual(new Date(now.getFullYear(), 0, 1), ThisYear());
        checkEqual(new Date(Date.UTC(now.getUTCFullYear(), 0, 1)), ThisYear(false));
        checkEqual(new Date(Date.UTC(now.getUTCFullYear(), 0, 1)), ThisYear({
          isLocal: false
        }));
      });
    };

    var test_ThisMonth = function test_ThisMonth() {
      it('test_ThisMonth', function () {
        var now = new Date();
        checkEqual(new Date(now.getFullYear(), now.getMonth(), 1), ThisMonth());
        checkEqual(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)), ThisMonth(false));
        checkEqual(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)), ThisMonth({
          isLocal: false
        }));
      });
    };

    var test_Today = function test_Today() {
      it('test_Today', function () {
        var now = new Date();
        checkEqual(new Date(now.getFullYear(), now.getMonth(), now.getDate()), Today());
        checkEqual(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())), Today(false));
        checkEqual(new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())), Today({
          isLocal: false
        }));
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

        var _minutesToTexts = minutesToTexts(-1 * new Date().getTimezoneOffset()),
            _minutesToTexts2 = _slicedToArray(_minutesToTexts, 3),
            s = _minutesToTexts2[0],
            h = _minutesToTexts2[1],
            m = _minutesToTexts2[2];

        if (s === '+') {
          if (!parts.platform.isWindowsScriptHost()) {
            checkEqual(0, new Date(0).toString().indexOf("Thu Jan 01 1970 ".concat(h, ":").concat(m, ":00 GMT").concat(s + h + m))); // checkEqual(
            //   new Date(0).toString(),
            //   `Thu Jan 01 1970 ${h}:${m}:00 GMT${s + h + m}`,
            // );
          } else {
            checkEqual("Thu Jan 1 ".concat(h, ":").concat(m, ":00 UTC").concat(s + h + m, " 1970"), new Date(0).toString());
          }
        }

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

    var test_Datetime = function test_Datetime() {
      it('test_Datetime', function () {
        checkEqual(0, new Date(0).getTime());
        var dt = Datetime(undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
        checkEqual(0, dt.getTime());
        checkEqual('1970-01-01T00:00:00.000Z', dt.toISOString());
        var dt = Datetime();
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(0, dt.getTime());
        checkEqual('1970-01-01T00:00:00.000Z', dt.toISOString());
        var dt = Datetime(2020, 11, 21, 11, 35, 10, 400);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-11-21T11:35:10.400Z', dt.toISOString());
        var dt = Datetime(2020, 11, 21, 11, 35, 10, 400);
        checkEqual(new Date(2020, 10, 21, 11, 35, 10, 400).toISOString(), dt.toISOString());
        var dt = Datetime(2020, 11, 21, 11, 35, 10, 400, false);
        checkEqual(new Date(Date.UTC(2020, 10, 21, 11, 35, 10, 400)).toISOString(), dt.toISOString());
        var dt = Datetime(2020);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = Datetime(2020, 2);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T00:00:00.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T00:00:00.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:00:00.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:00.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, 6);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, 6, 7);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, 6, 7, true);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, 6, 7, false);
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, 6, 7, true);

        if (dt.getTimezoneOffset() === -540) {
          checkEqual('2020-02-02T19:05:06.007Z', dt.toISOString());
        } // zero


        var dt = Datetime(2020, 0, 3, 4, 5, 6, 7, false);
        checkEqual('2019-12-03T04:05:06.007Z', dt.toISOString());
        var dt = Datetime(2020, 3, 0, 4, 5, 6, 7, false);
        checkEqual('2020-02-29T04:05:06.007Z', dt.toISOString()); // minus

        var dt = Datetime(2020, -1, 3, 4, 5, 6, 7, false);
        checkEqual('2019-11-03T04:05:06.007Z', dt.toISOString());
        var dt = Datetime(2020, 3, -1, 4, 5, 6, 7, false);
        checkEqual('2020-02-28T04:05:06.007Z', dt.toISOString());
        var dt = Datetime(2020, 3, 4, -2, 5, 6, 7, false);
        checkEqual('2020-03-03T22:05:06.007Z', dt.toISOString()); // object parameter

        var dt = Datetime({
          year: 2020
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = Datetime({
          year: 2020,
          isLocal: false
        });
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = Datetime({
          year: 2020,
          month: 2,
          hour: 13,
          second: 59,
          isLocal: false
        });
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = Datetime({
          year: 2020,
          month: 2,
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = Datetime(2020, {
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T13:00:59.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, {
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, {
          minute: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T00:13:59.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, {
          isLocal: false
        });
        checkEqual('2020-02-03T00:00:00.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, {
          minute: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:13:59.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, {
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:59.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, {
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:59.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, 6, {
          isLocal: false
        });
        checkEqual('2020-02-03T04:05:06.000Z', dt.toISOString());
        var dt = Datetime(2020, 2, 3, 4, 5, 6, 7, {
          isLocal: false
        });
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString()); // exception

        checkEqual(false, isThrown(function () {
          return Datetime(2020, 2, 3, 4, 5, 6, 7, {
            isLocal: false
          });
        }));
        checkEqual(true, isThrown(function () {
          return Datetime(2020, 2, 3, 4, 5, 6, 7, {
            isLocal: 1
          });
        }));
        checkEqual(true, isThrown(function () {
          return Datetime(2020, '2', 3, 4, 5, 6, 7, {
            isLocal: true
          });
        }));
      });
    };

    var test_dateToString = function test_dateToString() {
      it('test_dateToString', function () {
        var dt = Datetime(2001, 2, 4, 9, 5, 8, 45);
        checkEqual('2001/02/04 09:05:08.045', dateToString(dt, 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual('2001/02/04 09:05:08.04', dateToString(dt, 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual('2001/02/04 09:05:08.0', dateToString(dt, 'YYYY/MM/DD HH:mm:ss.S'));
        checkEqual('01/2/4 9:5:8 am', dateToString(dt, 'YY/M/D H:m:s aa'));
        checkEqual('01/2/4 9:5:8 a', dateToString(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 9:5:8 AM', dateToString(dt, 'YY/M/D H:m:s AA'));
        checkEqual('01/2/4 9:5:8 A', dateToString(dt, 'YY/M/D H:m:s A'));
        var dt = Datetime(2001, 2, 4, 16, 5, 8, 45);
        checkEqual('01/2/4 16:5:8 pm', dateToString(dt, 'YY/M/D H:m:s aa'));
        checkEqual('01/2/4 16:5:8 p', dateToString(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 16:5:8 PM', dateToString(dt, 'YY/M/D H:m:s AA'));
        checkEqual('01/2/4 16:5:8 P', dateToString(dt, 'YY/M/D H:m:s A'));
        checkEqual('01/2/4 16:5:8 Sun', dateToString(dt, 'YY/M/D H:m:s ddd'));
        checkEqual('01/2/4 16:5:8 Sunday', dateToString(dt, 'YY/M/D H:m:s dddd'));
        checkEqual('01/2/4 16:5:8 Feb', dateToString(dt, 'YY/M/D H:m:s MMM'));
        checkEqual('01/2/4 16:5:8 Feb.', dateToString(dt, 'YY/M/D H:m:s MMMM'));
        checkEqual('01/2/4 16:5:8 February', dateToString(dt, 'YY/M/D H:m:s MMMMM')); // quote

        var dt = Datetime(2021, 1, 6);
        checkEqual('YYYYMMDD = 20210106', dateToString(dt, '"YYYYMMDD = "YYYYMMDD'));
        checkEqual('YYYYMMDD = 20210106', dateToString(dt, "'YYYYMMDD = 'YYYYMMDD")); // timezone

        var _minutesToTexts3 = minutesToTexts(-1 * dt.getTimezoneOffset()),
            _minutesToTexts4 = _slicedToArray(_minutesToTexts3, 3),
            s = _minutesToTexts4[0],
            h = _minutesToTexts4[1],
            m = _minutesToTexts4[2]; // '+0900' etc


        checkEqual(s + h + ':' + m, dateToString(dt, 'Z'));
        checkEqual(s + h + m, dateToString(dt, 'ZZ'));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, dt.toString().indexOf('UTC' + dateToString(dt, 'ZZ')) !== -1);
        } else {
          checkEqual(true, dt.toString().indexOf('GMT' + dateToString(dt, 'ZZ')) !== -1);
        }

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(0, dt.toString().indexOf(dateToString(dt, 'ddd MMM DD YYYY HH:mm:ss "GMT"ZZ')));
        } else {
          checkEqual(0, dt.toString().indexOf(dateToString(dt, 'ddd MMM D HH:mm:ss "UTC"ZZ YYYY')));
        } // exception
        // quote


        var dt = Datetime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          dateToString(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(function () {
          dateToString(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));
      });
    };

    var test_dateToString_MomemtLike = function test_dateToString_MomemtLike() {
      it('test_dateToString_MomemtLike', function () {
        var dateToStringMoment = function dateToStringMoment(date, format) {
          return dateToString(date, format, undefined, dateToString.func.MomentLike());
        };

        var dt = Datetime(2001, 2, 4, 9, 5, 8, 45);
        checkEqual('2001/02/04 09:05:08.045', dateToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual('2001/02/04 09:05:08.04', dateToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual('2001/02/04 09:05:08.0', dateToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.S'));
        checkEqual('01/2/4 9:5:8 am', dateToStringMoment(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 9:5:8 AM', dateToStringMoment(dt, 'YY/M/D H:m:s A'));
        var dt = Datetime(2001, 2, 4, 16, 5, 8, 45);
        checkEqual('01/2/4 16:5:8 pm', dateToStringMoment(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 16:5:8 PM', dateToStringMoment(dt, 'YY/M/D H:m:s A'));
        checkEqual('01/2/4 16:5:8 Sun', dateToStringMoment(dt, 'YY/M/D H:m:s ddd'));
        checkEqual('01/2/4 16:5:8 Sunday', dateToStringMoment(dt, 'YY/M/D H:m:s dddd'));
        checkEqual('01/2/4 16:5:8 Feb', dateToStringMoment(dt, 'YY/M/D H:m:s MMM'));
        checkEqual('01/2/4 16:5:8 February', dateToStringMoment(dt, 'YY/M/D H:m:s MMMM')); // quote

        var dt = Datetime(2021, 1, 6);
        checkEqual('YYYYMMDD = 20210106', dateToStringMoment(dt, '"YYYYMMDD = "YYYYMMDD'));
        checkEqual('YYYYMMDD = 20210106', dateToStringMoment(dt, "'YYYYMMDD = 'YYYYMMDD")); // timezone

        var _minutesToTexts5 = minutesToTexts(-1 * dt.getTimezoneOffset()),
            _minutesToTexts6 = _slicedToArray(_minutesToTexts5, 3),
            s = _minutesToTexts6[0],
            h = _minutesToTexts6[1],
            m = _minutesToTexts6[2];

        checkEqual(s + h + ':' + m, dateToStringMoment(dt, 'Z'));
        checkEqual(s + h + m, dateToStringMoment(dt, 'ZZ'));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, dt.toString().indexOf('UTC' + dateToStringMoment(dt, 'ZZ')) !== -1);
        } else {
          checkEqual(true, dt.toString().indexOf('GMT' + dateToStringMoment(dt, 'ZZ')) !== -1);
        }

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(0, dt.toString().indexOf(dateToStringMoment(dt, 'ddd MMM DD YYYY HH:mm:ss "GMT"ZZ')));
        } else {
          checkEqual(0, dt.toString().indexOf(dateToStringMoment(dt, 'ddd MMM D HH:mm:ss "UTC"ZZ YYYY')));
        } // exception
        // quote


        var dt = Datetime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          dateToStringMoment(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(function () {
          dateToStringMoment(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));
      });
    };

    var test_dateToString_timezoneOffset = function test_dateToString_timezoneOffset() {
      it('test_dateToString', function () {
        var dt = Datetime(2021, 6, 1, 0, 20, 30);
        checkEqual('2021/06/01 00:20:30', dateToString(dt, 'YYYY/MM/DD HH:mm:ss'));
        checkEqual('2021/06/01 00:20:30', dateToString(dt, 'YYYY/MM/DD HH:mm:ss'));
        checkEqual('2021/06/01 00:20:30', dateToString(dt, 'YYYY/MM/DD HH:mm:ss', dt.getTimezoneOffset()));
        var dt = Datetime(2021, 6, 1, 0, 20, 30, 0, false);
        checkEqual('2021/06/01 09:20:30 +09:00', dateToString(dt, 'YYYY/MM/DD HH:mm:ss Z', -1 * 9 * 60));
        checkEqual('2021/06/01 08:20:30 +0800', dateToString(dt, 'YYYY/MM/DD HH:mm:ss ZZ', -1 * 8 * 60));
        checkEqual('2021/06/01 07:20:30 +07:00', dateToString(dt, 'YYYY/MM/DD HH:mm:ss Z', -1 * 7 * 60));
        checkEqual('2021/06/01 01:20:30 +01:00', dateToString(dt, 'YYYY/MM/DD HH:mm:ss Z', -1 * 1 * 60));
        checkEqual('2021/06/01 00:20:30 +00:00', dateToString(dt, 'YYYY/MM/DD HH:mm:ss Z', 0));
        checkEqual('2021/05/31 23:20:30 -01:00', dateToString(dt, 'YYYY/MM/DD HH:mm:ss Z', 1 * 60));
        checkEqual('2021/05/31 12:20:30 -12:00', dateToString(dt, 'YYYY/MM/DD HH:mm:ss Z', 12 * 60));
        checkEqual('2021/06/01 00:20:30 Z', dateToStringUTC(dt, 'YYYY/MM/DD HH:mm:ss Z')); // quote

        var dt = Datetime(2021, 1, 6);
        checkEqual('YYYYMMDD = 20210106', dateToString(dt, '"YYYYMMDD = "YYYYMMDD', dt.getTimezoneOffset()));
        checkEqual('YYYYMMDD = 20210106', dateToString(dt, "'YYYYMMDD = 'YYYYMMDD", dt.getTimezoneOffset())); // exception
        // quote

        var dt = Datetime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          dateToString(dt, '"YYYYMMDD = "YYYYMMDD', dt.getTimezoneOffset());
        }));
        checkEqual(true, isThrown(function () {
          dateToString(dt, '"YYYY"MMDD = "YYYYMMDD', dt.getTimezoneOffset());
        }));
      });
    };

    var test_dateToStringUTC = function test_dateToStringUTC() {
      it('test_dateToStringUTC', function () {
        var dt = new Date(Date.UTC(2021, 1, 3, 4, 5, 6, 789));
        checkEqual('2021/02/03 04:05:06.789', dateToStringUTC(dt, 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual('2021/02/03 04:05:06.78', dateToStringUTC(dt, 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual('2021/02/03 04:05:06.7', dateToStringUTC(dt, 'YYYY/MM/DD HH:mm:ss.S'));
        var dt = new Date(Date.UTC(2021, 4, 31, 13, 2, 3));
        checkEqual('21/5/31 1:2:3 pm', dateToStringUTC(dt, 'YY/M/D h:m:s aa'));
        checkEqual('21/5/31 13:2:3', dateToStringUTC(dt, 'YY/M/D H:m:s'));
        var dt = new Date(2021, 4, 31, 9, 10, 11);
        checkEqual('21/5/31 0:10:11', dateToStringUTC(dt, 'YY/M/D h:m:s')); // timezone

        var dt = new Date(2021, 4, 31, 9, 10, 11);
        checkEqual('21/5/31 0:10:11', dateToStringUTC(dt, 'YY/M/D h:m:s'));
        checkEqual('21/5/31 0:10:11 Z', dateToStringUTC(dt, 'YY/M/D h:m:s Z'));
        checkEqual('21/5/31 0:10:11 Z', dateToStringUTC(dt, 'YY/M/D h:m:s ZZ')); // quote

        var dt = new Date(Date.UTC(2021, 4, 31));
        checkEqual('YYYYMMDD = 20210531', dateToStringUTC(dt, '"YYYYMMDD = "YYYYMMDD'));
        checkEqual('YYYYMMDD = 20210531', dateToStringUTC(dt, "'YYYYMMDD = 'YYYYMMDD")); // exception
        // quote

        var dt = Datetime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          dateToStringUTC(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(function () {
          dateToStringUTC(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));
      });
    };

    var test_stringToDate = function test_stringToDate() {
      it('test_stringToDate', function () {
        checkEqual(new Date(2021, 4, 1), stringToDate('2021/05/01', 'YYYY/MM/DD'));
        checkEqual(new Date(2021, 3, 30), stringToDate('2021/04/30', 'YYYY/MM/DD'));
        checkEqual(new Date(''), stringToDate('2021/05/00', 'YYYY/MM/DD'));
        checkEqual(new Date(''), stringToDate('2021/04/31', 'YYYY/MM/DD'));
        checkEqual(new Date(''), stringToDate('2021/5/01', 'YYYY/MM/DD'));
        checkEqual(new Date(2021, 4, 1), stringToDate('2021/5/01', 'YYYY/M/DD'));
        checkEqual(new Date(''), stringToDate('2021/05/01', 'YYYY/M/DD'));
        checkEqual(new Date(2021, 10, 1), stringToDate('2021/11/01', 'YYYY/M/DD'));
        checkEqual(new Date(2021, 10, 1), stringToDate('2021/11/01', 'YYYY/MM/DD'));
        checkEqual(new Date(2020, 11, 1), stringToDate('1-12-20', 'D-M-YY'));
        checkEqual(new Date(2020, 11, 1), stringToDate('12-1-20', 'M-D-YY'));
        checkEqual(new Date(2020, 0, 21), stringToDate('21-1-20', 'D-M-YY'));
        checkEqual(new Date(2020, 0, 21), stringToDate('1-21-20', 'M-D-YY'));
        checkEqual(new Date(2020, 0, 12), stringToDate('1-12-20', 'M-D-YY'));
        checkEqual(new Date(''), stringToDate('21-1-20', 'M-D-YY'));
        checkEqual(new Date(2021, 4, 1, 3, 4, 5), stringToDate('2021/05/01 03:04:05', 'YYYY/MM/DD HH:mm:ss'));
        checkEqual(new Date(2021, 4, 1, 11, 8, 9), stringToDate('2021/05/01 11:08:09(Sat)', 'YYYY/MM/DD HH:mm:ss(ddd)'));
        checkEqual(new Date(''), stringToDate('2021/05/01 11:08:09(Mon)', 'YYYY/MM/DD HH:mm:ss(ddd)')); // testCounter();

        checkEqual(Datetime(2001, 2, 4, 9, 5, 8, 45), stringToDate('2001/02/04 09:05:08.045', 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual(Datetime(2001, 2, 4, 9, 5, 8, 40), stringToDate('2001/02/04 09:05:08.04', 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual(Datetime(2001, 2, 4, 9, 5, 8, 0), stringToDate('2001/02/04 09:05:08.0', 'YYYY/MM/DD HH:mm:ss.S'));
        checkEqual(Datetime(2001, 2, 4), stringToDate('Sun, 04 Feb 2001', 'ddd, DD MMM YYYY'));
        checkEqual(Datetime(2001, 2, 4), stringToDate('[Sun]|/\\ 04 Feb 2001', '[ddd]|/\\ DD MMM YYYY'));
        checkEqual(Datetime(2001, 2, 4), stringToDate('Sunday, 04 Feb 2001', 'dddd, DD MMM YYYY'));
        checkEqual(Datetime(2001, 9, 4), stringToDate('September4 2001', 'MMMMMD YYYY')); // am pm

        testCounter();
        checkEqual('20210526 8 59 40 p', dateToString(Datetime(2021, 5, 26, 20, 59, 40), 'YYYYMMDD h mm ss a'));
        checkEqual(Datetime(2021, 5, 26, 8, 59, 40), stringToDate('20210526 8 59 40 a', 'YYYYMMDD h mm ss a'));
        checkEqual(Datetime(2021, 5, 26, 8, 59, 40), stringToDate('20210526 8 59 40 AM', 'YYYYMMDD h mm ss AA'));
        checkEqual(Datetime(2021, 5, 26, 20, 59, 40), stringToDate('20210526 8 59 40 p', 'YYYYMMDD h mm ss a'));
        checkEqual(Datetime(2021, 5, 26, 20, 59, 40), stringToDate('20210526 08 59 40 P', 'YYYYMMDD hh mm ss A'));
        checkEqual(Datetime(2021, 5, 26, 23, 59, 40), stringToDate('20210526 11 59 40 PM', 'YYYYMMDD h mm ss AA'));
        checkEqual(Datetime(2021, 5, 26, 23, 59, 40), stringToDate('20210526 11 59 40 pm', 'YYYYMMDD hh mm ss aa'));
        checkEqual(Datetime(2021, 5, 26, 23, 59, 40), stringToDate('20210526 11 59 40 p p p', 'YYYYMMDD hh mm ss a a a'));
        checkEqual(Datetime(2021, 5, 26, 8, 59, 40), stringToDate('20210526 8 59 40', 'YYYYMMDD h mm ss')); // checkNotEqual(
        //   Datetime(2021, 5, 26, 13, 59, 40),
        //   stringToDate('20210526 13 59 40', 'YYYYMMDD h mm ss'),
        // );

        checkEqual(Datetime(2021, 5, 26, 13, 59, 40), stringToDate('20210526 1 59 40 p', 'YYYYMMDD h mm ss a'));
        checkEqual(Datetime(2021, 5, 26, 13, 59, 40), stringToDate('20210526 13 59 40', 'YYYYMMDD H mm ss')); // timezone

        testCounter();
        var dt = Datetime(2021, 6, 1, 23, 45, 6);

        var _minutesToTexts7 = minutesToTexts(-1 * dt.getTimezoneOffset()),
            _minutesToTexts8 = _slicedToArray(_minutesToTexts7, 3),
            s = _minutesToTexts8[0],
            h = _minutesToTexts8[1],
            m = _minutesToTexts8[2];

        var timezoneText = s + h + ':' + m;
        checkEqual(dateToString(dt, 'YYYY/MM/DD HH:mm:ss Z'), '2021/06/01 23:45:06 ' + timezoneText);
        var dt = Datetime(2021, 6, 1, 0, 12, 34, 0, false);
        checkEqual(dt, stringToDate('2021/06/01 09:12:34 +09:00', 'YYYY/MM/DD HH:mm:ss Z'));
        checkEqual(dt, stringToDate('2021/06/01 08:12:34 +08:00', 'YYYY/MM/DD HH:mm:ss Z'));
        checkEqual(dt, stringToDate('2021/06/01 00:12:34 +00:00', 'YYYY/MM/DD HH:mm:ss Z'));
        checkEqual(dt, stringToDate('2021/05/31 23:12:34 -01:00', 'YYYY/MM/DD HH:mm:ss Z'));
        checkEqual(dt, stringToDate('2021/06/01 00:12:34 Z', 'YYYY/MM/DD HH:mm:ss Z'));
        checkEqual(dt, stringToDate('2021/06/01 09:12:34 +0900', 'YYYY/MM/DD HH:mm:ss ZZ'));
        checkEqual(dt, stringToDate('2021/06/01 08:12:34 +0800', 'YYYY/MM/DD HH:mm:ss ZZ'));
        checkEqual(dt, stringToDate('2021/06/01 00:12:34 +0000', 'YYYY/MM/DD HH:mm:ss ZZ'));
        checkEqual(dt, stringToDate('2021/05/31 23:12:34 -0100', 'YYYY/MM/DD HH:mm:ss ZZ'));
        checkEqual(dt, stringToDate('2021/06/01 00:12:34 Z', 'YYYY/MM/DD HH:mm:ss ZZ')); // init

        checkEqual(new Date(2021, 0, 1), stringToDate('2021', 'YYYY'));
        checkEqual(new Date(2021, 5, 1), stringToDate('2021/06', 'YYYY/MM'));
        checkEqual(new Date(2021, 5, 2), stringToDate('06/02', 'MM/DD'));
      });
    };

    var test_dayOfWeek = function test_dayOfWeek() {
      it('test_dayOfWeek', function () {
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 9);
        checkEqual('Sat', dayOfWeek(dt));
        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, true)); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeek(dt, false)); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeek(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 9);
        checkEqual('Sat', dayOfWeekEnglishShort(dt));
        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, true)); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeekEnglishShort(dt, false)); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeekEnglishShort(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 9);
        checkEqual('Saturday', dayOfWeekEnglishLong(dt));
        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, true)); // local Sat UTC Fri

        checkEqual('Friday', dayOfWeekEnglishLong(dt, false)); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Friday', dayOfWeekEnglishLong(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 9);
        checkEqual('土', dayOfWeekJapaneseShort(dt));
        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土', dayOfWeekJapaneseShort(dt, true)); // local Sat UTC Fri

        checkEqual('金', dayOfWeekJapaneseShort(dt, false)); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('土', dayOfWeekJapaneseShort(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 9);
        checkEqual('土', dayOfWeekJapaneseShort(dt));
        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土', dayOfWeekJapaneseShort(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('金', dayOfWeekJapaneseShort(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 9);
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt));
        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt, true)); // local Sat UTC Fri

        checkEqual('金曜日', dayOfWeekJapaneseLong(dt, false)); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 9);
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt));
        var dt = Datetime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('土曜日', dayOfWeekJapaneseLong(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('金曜日', dayOfWeekJapaneseLong(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = Datetime(2021, 1, 9, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 1);
        checkEqual('Jan', nameOfMonth(dt));
        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, true)); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonth(dt, false)); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonth(dt, {
          isLocal: false
        })); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 1);
        checkEqual('Jan', nameOfMonthEnglishChar3(dt));
        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, true)); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonthEnglishChar3(dt, false)); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonthEnglishChar3(dt, {
          isLocal: false
        })); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 1);
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt));
        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, true)); // local Jan UTC Dec

        checkEqual('Dec.', nameOfMonthEnglishChar4(dt, false)); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec.', nameOfMonthEnglishChar4(dt, {
          isLocal: false
        })); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
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
        if (new Date().getTimezoneOffset() !== -540) {
          return;
        }

        var dt = Datetime(2021, 1, 1);
        checkEqual('January', nameOfMonthEnglishLong(dt));
        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, true)); // local Jan UTC Dec

        checkEqual('December', nameOfMonthEnglishLong(dt, false)); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, false)); // Object Parameter

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('December', nameOfMonthEnglishLong(dt, {
          isLocal: false
        })); // UTC

        var dt = Datetime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, {
          isLocal: false
        }));
      });
    };

    var test_minutesToTexts = function test_minutesToTexts() {
      it('test_minutesToTexts', function () {
        checkEqual('+0900', minutesToTexts(540).join(''));
        checkEqual('-:09:00', minutesToTexts(-540).join(':'));
      });
    };

    var test_textsToMinutes = function test_textsToMinutes() {
      it('test_textsToMinutes', function () {
        checkEqual(540, textsToMinutes(['+', '09', '00']));
        checkEqual(-540, textsToMinutes('-:09:00'.split(':')));
      });
    };

    test_ThisYear();
    test_ThisMonth();
    test_Today();
    test_isInvalidDate();
    test_Date_standard();
    test_Datetime();
    test_dateToString();
    test_dateToString_MomemtLike();
    test_dateToString_timezoneOffset();
    test_dateToStringUTC();
    test_stringToDate();
    test_dayOfWeek();
    test_dayOfWeekEnglishShort();
    test_dayOfWeekEnglishLong();
    test_dayOfWeekJapaneseShort();
    test_dayOfWeekJapaneseLong();
    test_nameOfMonth();
    test_nameOfMonthEnglishChar3();
    test_nameOfMonthEnglishChar4();
    test_nameOfMonthEnglishLong();
    test_minutesToTexts();
    test_textsToMinutes();
  });
};

exports.test_execute_date = test_execute_date;
var _default = {
  test_execute_date: test_execute_date
};
exports["default"] = _default;