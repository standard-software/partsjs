import { _Year } from './_Year.js';

/**
 * YearUTC
 */
export const _YearUTC = (
  value,
  sourceDate = (new Date()),
) => {
  return _Year(
    value,
    sourceDate,
    null,
  );
};

export default { _YearUTC };
