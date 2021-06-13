import { isDate, isString, isObject, isInteger } from '../type/isType.js';
import { isObjectParameter } from '../object/isObjectParameter.js';
import { _Year } from './_Year.js';
import { __stringToDateRule } from './__stringToDateRule.js';
import { _stringToDateUTC } from './_stringToDateUTC.js';

export const stringToDateUTC = (
  str, format,
  sourceDate = _Year('this'),
  rule = __stringToDateRule.Default(),
) => {
  if (isObjectParameter(str, 'str, format', 'sourceDate, rule')) {
    ({
      str, format,
      sourceDate = _Year('this'),
      rule = __stringToDateRule.Default(),
    } = str);
  } else if (isObjectParameter(format, 'format', 'sourceDate, rule')) {
    ({
      format,
      sourceDate = _Year('this'),
      rule = __stringToDateRule.Default(),
    } = format);
  } else if (isObjectParameter(sourceDate, '', 'sourceDate, rule', 1)) {
    ({
      sourceDate = _Year('this'),
      rule = __stringToDateRule.Default(),
    } = sourceDate);
  } else if (isObjectParameter(rule, 'rule')) {
    ({ rule } = rule);
  }

  if (!isString(str)) {
    throw new TypeError(
      `stringToDateUTC args(str:${str}) is not string`,
    );
  }
  if (!isString(format)) {
    throw new TypeError(
      `stringToDateUTC args(format:${format}) is not string`,
    );
  }
  if (!isDate(sourceDate)) {
    throw new TypeError(
      `stringToDateUTC args(sourceDate:${sourceDate}) is not date`,
    );
  }
  if (!isObject(rule)) {
    throw new TypeError(
      `stringToDateUTC args(rule:${rule}) is not object`,
    );
  }

  return _stringToDateUTC(str, format, sourceDate, rule);
};

stringToDateUTC.rule = _stringToDateUTC.rule;

export default { stringToDateUTC };
