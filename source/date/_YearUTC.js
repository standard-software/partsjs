import { _Year } from './_Year.js';

/**
 * Year
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
