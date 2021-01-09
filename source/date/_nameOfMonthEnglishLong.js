import { _nameOfMonth } from '../date/_nameOfMonth.js';

export const _nameOfMonthEnglishLong = (date, isLocal = true) => {
  return _nameOfMonth(date, isLocal, _nameOfMonth.names.EnglishLong());
};

export default { _nameOfMonthEnglishLong };
