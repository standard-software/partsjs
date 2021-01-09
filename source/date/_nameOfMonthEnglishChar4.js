import { _nameOfMonth } from '../date/_nameOfMonth.js';

export const _nameOfMonthEnglishChar4 = (date, isLocal = true) => {
  return _nameOfMonth(date, isLocal, _nameOfMonth.names.EnglishChar4());
};

export default { _nameOfMonthEnglishChar4 };
