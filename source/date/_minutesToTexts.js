import { _paddingFirst } from '../string/_paddingFirst.js';

/**
 * minutesToTexts
 */
export const _minutesToTexts = (minutes) => {
  const sign = 0 < minutes ? '+' : '-';
  const hourStr = _paddingFirst(String(
    Math.floor(Math.abs(minutes / 60)),
  ), 2, '0');
  const minStr = _paddingFirst(String(
    minutes % 60,
  ), 2, '0');
  return [sign, hourStr, minStr];
};

export default { _minutesToTexts };
