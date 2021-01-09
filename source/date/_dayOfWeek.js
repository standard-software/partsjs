import { __dayOfWeekNames } from '../date/__dayOfWeekNames.js';

export const _dayOfWeek = (
  date,
  isLocal = true,
  dayOfWeekNames = __dayOfWeekNames.EnglishShort,
) => {
  if (isLocal) {
    return dayOfWeekNames[date.getDay()];
  } else {
    return dayOfWeekNames[date.getUTCDay()];
  }
};

_dayOfWeek.names = __dayOfWeekNames;

export default { _dayOfWeek };
