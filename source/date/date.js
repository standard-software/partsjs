import TodayJs from './Today.js';
import isInvalidDateJs from './isInvalidDate.js';
import _DateTimeJs from './_DateTime.js';
import DateTimeJs from './DateTime.js';
import _datetimeToStringJs from './_datetimeToString.js';
import datetimeToStringJs from './datetimeToString.js';

const dateJs = {
  ...TodayJs,
  ...isInvalidDateJs,
  ..._DateTimeJs,
  ...DateTimeJs,
  ..._datetimeToStringJs,
  ...datetimeToStringJs,
};

export const {
  _DateTime,
  _datetimeToString,

  Today,
  isInvalidDate,
  DateTime,
  datetimeToString,
} = dateJs;

export default {
  _DateTime,
  _datetimeToString,

  Today,
  isInvalidDate,
  DateTime,
  datetimeToString,
};
