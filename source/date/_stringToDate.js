import { __stringToDateRule } from './__stringToDateRule.js';
import { __stringToDate } from './__stringToDate.js';

export const _stringToDate = (
  str, format,
  timezoneOffset = (new Date()).getTimezoneOffset(),
  sourceDate = _ThisYear(true),
  rule = _stringToDateRule.Default(),
) => {
  return __stringToDate(
    str, format, timezoneOffset, sourceDate, rule,
  );
};

_stringToDate.rule = __stringToDate.rule;

export default { _stringToDate };
