import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const _dayOfWeekEnglishLong = (date, isLocal = true) => {
  return _dayOfWeek(date, isLocal, _dayOfWeek.names.EnglishLong());
};

export default { _dayOfWeekEnglishLong };
