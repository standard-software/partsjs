import { _Day } from './_Day.js';

/**
 * Day
 */
export const _DayUTC = (
  value,
  sourceDate = (new Date()),
) => {
  return _Day(
    value,
    sourceDate,
    null,
  );
};

export default { _DayUTC };
