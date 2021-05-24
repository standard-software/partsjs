// import { isDate, isString, isObject, isBoolean } from '../type/isType.js';
// import { isObjectParameter } from '../object/isObjectParameter.js';
import { _stringToDate } from './_stringToDate.js';

export const stringToDate = (str, format) => {
  return _stringToDate(str, format);
};

export default { stringToDate };
