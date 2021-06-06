import _ThisYearJs from './_ThisYear.js';
import ThisYearJs from './ThisYear.js';
import _ThisMonthJs from './_ThisMonth.js';
import ThisMonthJs from './ThisMonth.js';
import _TodayJs from './_Today.js';
import TodayJs from './Today.js';
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
  ..._ThisMonthJs,
  ..._ThisYearJs,
  ..._TodayJs,

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
  ...ThisMonthJs,
  ...ThisYearJs,
  ...TodayJs,
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
  _ThisMonth,
  _ThisYear,
  _Today,

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
  ThisMonth,
  ThisYear,
  Today,

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
  _ThisMonth,
  _ThisYear,
  _Today,

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
  ThisMonth,
  ThisYear,
  Today,

  isInvalidDate,
  InvalidDate,
};
