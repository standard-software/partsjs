import { __dateToStringRule } from './__dateToStringRule.js';
import { _dateToString } from './_dateToString.js';

export const _dateToStringUTC = (
  date, format, rule = __dateToStringRule.Default(),
) => {
  return _dateToString(
    date, format, null, rule,
  );
};

_dateToStringUTC.rule = _dateToString.rule;

export default { _dateToStringUTC };
