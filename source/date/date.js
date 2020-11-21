import TodayJs from './Today.js';
import isInvalidDateJs from './isInvalidDate.js';
import _DateTimeJs from './_DateTime.js';
import DateTimeJs from './DateTime.js';

const dateJs = {
  ...TodayJs,
  ..._DateTimeJs,
  ...DateTimeJs,
  ...isInvalidDateJs,
};

export const {
  _DateTime,

  Today,
  isInvalidDate,
  DateTime,
} = dateJs;

export default {
  _DateTime,

  Today,
  isInvalidDate,
  DateTime,
};
