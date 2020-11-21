import TodayJs from './Today.js';
import _DateTimeJs from './_DateTime.js';
import DateTimeJs from './DateTime.js';

const dateJs = {
  ...TodayJs,
  ..._DateTimeJs,
  ...DateTimeJs,
};

export const {
  _DateTime,

  Today,
  DateTime,
} = dateJs;

export default {
  _DateTime,

  Today,
  DateTime,
};
