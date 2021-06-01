import { __dateToStringRule } from './__dateToStringRule.js';
import { __dateToString } from './__dateToString.js';

export const _dateToStringUTC = (
  date, format, formatRule = __dateToStringRule.Default(),
) => {
  return __dateToString(
    date, format, null, formatRule,
  );
};

_dateToStringUTC.func = __dateToString.func;

export default { _dateToStringUTC };
