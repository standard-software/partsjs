import { __stringToDateRule } from './__stringToDateRule.js';
import { __stringToDate } from './__stringToDate.js';
import { _Year } from './_Year.js';

export const _stringToDateUTC = (
  str, format,
  sourceDate = _Year('this'),
  rule = _stringToDateRule.Default(),
) => {
  return __stringToDate(
    str, format, null, sourceDate, rule,
  );
};

_stringToDateUTC.rule = __stringToDate.rule;

export default { _stringToDateUTC };
