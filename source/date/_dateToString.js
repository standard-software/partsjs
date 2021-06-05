import { __dateToStringRule } from './__dateToStringRule.js';
import { __dateToString } from './__dateToString.js';

export const _dateToString = (
  date, format,
  timezoneOffset = date.getTimezoneOffset(),
  rule = __dateToStringRule.Default(),
) => {
  return __dateToString(
    date, format, timezoneOffset, rule,
  );
};

_dateToString.rule = __dateToString.rule;

export default { _dateToString };
