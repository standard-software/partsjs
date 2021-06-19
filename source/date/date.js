import _YearJs from './_Year.js';
import YearJs from './Year.js';
import _YearUTCJs from './_YearUTC.js';
import YearUTCJs from './YearUTC.js';
import _MonthJs from './_Month.js';
import MonthJs from './Month.js';
import _MonthUTCJs from './_MonthUTC.js';
import MonthUTCJs from './MonthUTC.js';
import _DayJs from './_Day.js';
import DayJs from './Day.js';
import _DayUTCJs from './_DayUTC.js';
import DayUTCJs from './DayUTC.js';
import isInvalidDateJs from './isInvalidDate.js';
import InvalidDateJs from './InvalidDate.js';
import _DatetimeJs from './_Datetime.js';
import DatetimeJs from './Datetime.js';
import _DatetimeUTCJs from './_DatetimeUTC.js';
import DatetimeUTCJs from './DatetimeUTC.js';
import _dateToStringJs from './_dateToString.js';
import dateToStringJs from './dateToString.js';
import _dateToStringUTCJs from './_dateToStringUTC.js';
import dateToStringUTCJs from './dateToStringUTC.js';
import _dayOfWeekJs from './_dayOfWeek.js';
import dayOfWeekJs from './dayOfWeek.js';
import _nameOfMonthJs from './_nameOfMonth.js';
import nameOfMonthJs from './nameOfMonth.js';
import _stringToDateJs from './_stringToDate.js';
import stringToDateJs from './stringToDate.js';
import _stringToDateUTCJs from './_stringToDateUTC.js';
import stringToDateUTCJs from './stringToDateUTC.js';
import _minutesToTextsJs from './_minutesToTexts.js';
import minutesToTextsJs from './minutesToTexts.js';
import _textsToMinutesJs from './_textsToMinutes.js';
import textsToMinutesJs from './textsToMinutes.js';
import { _getDatetime } from './_getDatetime.js';
import { getDatetime } from './getDatetime.js';
import { _getDatetimeUTC } from './_getDatetimeUTC.js';
import { getDatetimeUTC } from './getDatetimeUTC.js';
import { _getTimezoneOffset } from './_getTimezoneOffset.js';
import { getTimezoneOffset } from './getTimezoneOffset.js';

const dateJs = {
  ..._DatetimeJs,
  ..._DatetimeUTCJs,
  ..._dateToStringJs,
  ..._dateToStringUTCJs,
  ..._dayOfWeekJs,
  ..._minutesToTextsJs,
  ..._nameOfMonthJs,
  ..._stringToDateJs,
  ..._stringToDateUTCJs,
  ..._textsToMinutesJs,
  ..._YearJs,
  ..._YearUTCJs,
  ..._MonthJs,
  ..._MonthUTCJs,
  ..._DayJs,
  ..._DayUTCJs,

  ...DatetimeJs,
  ...DatetimeUTCJs,
  ...dateToStringJs,
  ...dateToStringUTCJs,
  ...dayOfWeekJs,
  ...InvalidDateJs,
  ...isInvalidDateJs,
  ...minutesToTextsJs,
  ...nameOfMonthJs,
  ...stringToDateJs,
  ...stringToDateUTCJs,
  ...textsToMinutesJs,
  ...YearJs,
  ...YearUTCJs,
  ...MonthJs,
  ...MonthUTCJs,
  ...DayJs,
  ...DayUTCJs,
};

export const {
  _Datetime,
  _DatetimeUTC,
  _dateToString,
  _dateToStringUTC,
  _dayOfWeek,
  _minutesToTexts,
  _nameOfMonth,
  _stringToDate,
  _stringToDateUTC,
  _textsToMinutes,
  _Year,
  _YearUTC,
  _Month,
  _MonthUTC,
  _Day,
  _DayUTC,

  Datetime,
  DatetimeUTC,
  dateToString,
  dateToStringUTC,
  dayOfWeek,
  minutesToTexts,
  nameOfMonth,
  stringToDate,
  stringToDateUTC,
  textsToMinutes,
  Year,
  YearUTC,
  Month,
  MonthUTC,
  Day,
  DayUTC,

  isInvalidDate,
  InvalidDate,
} = dateJs;

export default {
  _Datetime,
  _DatetimeUTC,
  _dateToString,
  _dateToStringUTC,
  _dayOfWeek,
  _minutesToTexts,
  _nameOfMonth,
  _stringToDate,
  _stringToDateUTC,
  _textsToMinutes,
  _Year,
  _YearUTC,
  _Month,
  _MonthUTC,
  _Day,
  _DayUTC,

  Datetime,
  DatetimeUTC,
  dateToString,
  dateToStringUTC,
  dayOfWeek,
  minutesToTexts,
  nameOfMonth,
  stringToDate,
  stringToDateUTC,
  textsToMinutes,
  Year,
  YearUTC,
  Month,
  MonthUTC,
  Day,
  DayUTC,

  isInvalidDate,
  InvalidDate,

  _getDatetime,
  getDatetime,
  _getDatetimeUTC,
  getDatetimeUTC,
  _getTimezoneOffset,
  getTimezoneOffset,
};
