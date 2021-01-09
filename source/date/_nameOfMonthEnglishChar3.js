import { _nameOfMonth } from '../date/_nameOfMonth.js';

export const _nameOfMonthEnglishChar3 = (date, isLocal = true) => {
  return _nameOfMonth(date, isLocal, _nameOfMonth.names.EnglishChar3());
};

export default { _nameOfMonthEnglishChar3 };
