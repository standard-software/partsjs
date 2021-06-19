import { _roundDown } from '../number/_roundDown.js';

export const _getTimezoneOffset = (
  date,
) => {
  const _date = new Date(Date.UTC(
    date.getFullYear(), date.getMonth(), date.getDate(),
    date.getHours(), date.getMinutes(), date.getSeconds(),
    date.getMilliseconds(),
  ));

  const diffMsec = date.getTime() - _date.getTime();
  const minutes = _roundDown(diffMsec / 60 / 1000);
  const seconds = diffMsec / 1000;

  return {
    minutes,
    seconds,
  };
};
