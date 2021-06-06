import { __Datetime } from './__Datetime.js';

/**
 * Datetime
 */
export const _DatetimeUTC = function(
  year = 1970, month = 1, date = 1,
  hours = 0, minutes = 0, seconds = 0, milliseconds = 0,
) {
  return new __Datetime(
    year, month, date,
    hours, minutes, seconds, milliseconds,
    null,
  );
};

export default { _DatetimeUTC };
