import { _Month } from './_Month.js';

/**
 * Month
 */
export const _MonthUTC = (
  value,
  sourceDate = (new Date()),
) => {
  return _Month(
    value,
    sourceDate,
    null,
  );
};

export default { _MonthUTC };
