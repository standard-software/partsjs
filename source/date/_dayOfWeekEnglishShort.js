import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const _dayOfWeekEnglishShort = (date, isLocal = true) => {
  return _dayOfWeek(date, isLocal, _dayOfWeek.names.EnglishShort());
};

export default { _dayOfWeekEnglishShort };
