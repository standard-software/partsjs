import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const _dayOfWeekJapaneseShort = (date, isLocal = true) => {
  return _dayOfWeek(date, isLocal, _dayOfWeek.names.JapaneseShort());
};

export default { _dayOfWeekJapaneseShort };
