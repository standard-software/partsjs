import { __monthNames } from '../date/__monthNames.js';

export const _nameOfMonth = (
  date,
  isLocal = true,
  monthNames = __monthNames.EnglishChar3(),
) => {
  if (isLocal) {
    return monthNames[date.getMonth()];
  } else {
    return monthNames[date.getUTCMonth()];
  }
};

_nameOfMonth.names = __monthNames;

export default { _nameOfMonth };
