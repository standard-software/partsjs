import { __stringToDateRule } from './__stringToDateRule.js';
import { _stringToDate } from './_stringToDate.js';
import { _Year } from './_Year.js';

export const _stringToDateUTC = (
  str, format,
  sourceDate = _Year('this'),
  rule = _stringToDateRule.Default(),
) => {
  return _stringToDate(
    str, format, null, sourceDate, rule,
  );
};

_stringToDateUTC.rule = _stringToDate.rule;

export default { _stringToDateUTC };
