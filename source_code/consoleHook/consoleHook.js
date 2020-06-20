import {
  isUndefined, isNull, isNaNStrict,
  isBoolean, isNumber, isInteger, isString,
  isFunction, isObject, isArray, isDate, isRegExp,
  isException,
} from '../type/type.js';

import {
  _or, _includes, _includesSome, _includesAll,
} from '../compare/compare.js';

import {
  map,
} from '../array/array.js';

export const original = {};
original.log = console.log;
original.info = console.info;
original.warn = console.warn;
original.error = console.error;
original.debug = console.debug;

export const _hook = (
  methodName,
  hookFunc,
) => {
  console[methodName] = hookFunc;
};

export const hook = (
  methodName,
  hookFunc = () => {},
) => {
  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError(
      'hook args(methodName) is not [log|info|warn|error|debug]',
    );
  }

  if (!isFunction(hookFunc)) {
    throw new TypeError(
      'hook args(hookFunc) is not function',
    );
  }

  _hook(methodName, hookFunc);
};

export const hookLog = (hookFunc) => {
  hook('log', hookFunc);
};
export const hookInfo = (hookFunc) => {
  hook('info', hookFunc);
};
export const hookWarn = (hookFunc) => {
  hook('warn', hookFunc);
};
export const hookError = (hookFunc) => {
  hook('error', hookFunc);
};
export const hookDebug = (hookFunc) => {
  hook('debug', hookFunc);
};

export const _unHook = (methodName) => {
  console[methodName] = original[methodName];
};

export const unHook = (methodName) => {
  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError(
      'unHook args(methodName) is not [log|info|warn|error|debug]',
    );
  }

  _unHook(methodName);
};

export const unHookLog = () => {
  unHook('log');
};
export const unHookInfo = () => {
  unHook('info');
};
export const unHookWarn = () => {
  unHook('warn');
};
export const unHookError = () => {
  unHook('error');
};
export const unHookDebug = () => {
  unHook('debug');
};

export const _accept = (
  methodName,
  acceptArray,
  rejectArray,
  hookFunc,
) => {
  _hook(methodName, (...messageArgs) => {
    const messageArgsAll = map(messageArgs, (value) => String(value)).join(' ');
    let acceptFlag = acceptArray.length === 0;
    if (acceptFlag === false) {
      acceptFlag = _includesSome(messageArgsAll, acceptArray);
    }
    if (acceptFlag &&isArray(rejectArray)) {
      acceptFlag = !_includesSome(messageArgsAll, rejectArray);
    }

    if (acceptFlag) {
      hookFunc(...messageArgs);
    }
  });
};

export const accept = (
  methodName,
  acceptArray,
  rejectArray,
  hookFunc,
) => {
  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new TypeError(
      'accept args(methodName) is not [log|info|warn|error|debug]',
    );
  }
  if (!isArray(acceptArray)) {
    throw new TypeError(
      'accept args(acceptArray) is not array',
    );
  }
  if (!(isUndefined(rejectArray) ||isArray(rejectArray))) {
    throw new TypeError(
      'accept args(rejectArray) is not array',
    );
  }
  if (!isFunction(hookFunc)) {
    throw new TypeError(
      'accept args(hookFunc) is not function',
    );
  }

  _accept(
    methodName,
    acceptArray,
    rejectArray,
    hookFunc,
  );
};

export const acceptLog = (
  acceptArray,
  rejectArray,
  hookFunc = original.log,
) => {
  accept('log', acceptArray, rejectArray, hookFunc);
};
export const acceptInfo = (
  acceptArray,
  rejectArray,
  hookFunc = original.info,
) => {
  accept('info', acceptArray, rejectArray, hookFunc);
};
export const acceptWarn = (
  acceptArray,
  rejectArray,
  hookFunc = original.warn,
) => {
  accept('warn', acceptArray, rejectArray, hookFunc);
};
export const acceptError = (
  acceptArray,
  rejectArray,
  hookFunc = original.error,
) => {
  accept('error', acceptArray, rejectArray, hookFunc);
};
export const acceptDebug = (
  acceptArray,
  rejectArray,
  hookFunc = original.debug,
) => {
  accept('debug', acceptArray, rejectArray, hookFunc);
};

export default {
  _hook,
  hook, hookLog, hookInfo, hookWarn, hookError, hookDebug,
  _unHook,
  unHook, unHookLog, unHookInfo, unHookWarn, unHookError, unHookDebug,
  accept, acceptLog, acceptInfo, acceptWarn, acceptError, acceptDebug,
}
