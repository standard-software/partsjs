import { __dateToStringRule } from './__dateToStringRule.js';
import { __dateToString } from './__dateToString.js';

export const _dateToStringUTC = (
  date, format, rule = __dateToStringRule.Default(),
) => {
  return __dateToString(
    date, format, null, rule,
  );
};

_dateToStringUTC.rule = __dateToString.rule;

export default { _dateToStringUTC };
