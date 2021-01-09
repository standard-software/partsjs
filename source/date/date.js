import TodayJs from './Today.js';
import isInvalidDateJs from './isInvalidDate.js';
import _DateTimeJs from './_DateTime.js';
import DateTimeJs from './DateTime.js';
import _datetimeToStringJs from './_datetimeToString.js';
import datetimeToStringJs from './datetimeToString.js';
import _dayOfWeekJs from './_dayOfWeek.js';
import dayOfWeekJs from './dayOfWeek.js';
import _dayOfWeekEnglishShortJs from './_dayOfWeekEnglishShort.js';
import dayOfWeekEnglishShortJs from './dayOfWeekEnglishShort.js';
import _dayOfWeekEnglishLongJs from './_dayOfWeekEnglishLong.js';
import dayOfWeekEnglishLongJs from './dayOfWeekEnglishLong.js';

const dateJs = {
  ...TodayJs,
  ...isInvalidDateJs,
  ..._DateTimeJs,
  ...DateTimeJs,
  ..._datetimeToStringJs,
  ...datetimeToStringJs,
  ..._dayOfWeekJs,
  ...dayOfWeekJs,
  ..._dayOfWeekEnglishShortJs,
  ...dayOfWeekEnglishShortJs,
  ..._dayOfWeekEnglishLongJs,
  ...dayOfWeekEnglishLongJs,
};

export const {
  _DateTime,
  _datetimeToString,
  _dayOfWeek,
  _dayOfWeekEnglishShort,
  _dayOfWeekEnglishLong,

  Today,
  isInvalidDate,
  DateTime,
  datetimeToString,
  dayOfWeek,
  dayOfWeekEnglishShort,
  dayOfWeekEnglishLong,
} = dateJs;

export default {
  _DateTime,
  _datetimeToString,
  _dayOfWeek,
  _dayOfWeekEnglishShort,
  _dayOfWeekEnglishLong,

  Today,
  isInvalidDate,
  DateTime,
  datetimeToString,
  dayOfWeek,
  dayOfWeekEnglishShort,
  dayOfWeekEnglishLong,
};
