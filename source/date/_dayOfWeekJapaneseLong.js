import { _dayOfWeek } from '../date/_dayOfWeek.js';

export const _dayOfWeekJapaneseLong = (date, isLocal = true) => {
  return _dayOfWeek(date, isLocal, _dayOfWeek.names.JapaneseLong());
};

export default { _dayOfWeekJapaneseLong };
