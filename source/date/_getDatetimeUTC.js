import { _getDatetime } from './_getDatetime.js';

export const _getDatetimeUTC = (
  date,
) => {
  return _getDatetime(
    date,
    null,
  );
};

