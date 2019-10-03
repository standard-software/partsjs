const {
  _isUndefined,_isNull,_isNaNStrict,
  _isBoolean,_isNumber,_isInteger,_isString,
  _isFunction,_isObject,_isArray,_isDate,_isRegExp,
  _isException,
} = require('./type/type.js');

const {
  _or,
} = require('./compare.js');

const {
  _includes,
} = require('./string.js');

const original = {};
original.log = console.log;
original.info = console.info;
original.warn = console.warn;
original.error = console.error;
original.debug = console.debug;

const _hook = (
  methodName,
  hookFunc
) => {
  console[methodName] = hookFunc;
};

const hook = (
  methodName,
  hookFunc = () => {},
) => {
  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new RangeError(
      'hook args(methodName) is not [log|info|warn|error|debug]'
    );
  }

  if (!_isFunction(hookFunc)) {
    throw new TypeError(
      'hook args(hookFunc) is not function'
    );
  }

  _hook(methodName, hookFunc);
};

const hookLog = (hookFunc) => {
  hook('log', hookFunc);
};
const hookInfo = (hookFunc) => {
  hook('info', hookFunc);
};
const hookWarn = (hookFunc) => {
  hook('warn', hookFunc);
};
const hookError = (hookFunc) => {
  hook('error', hookFunc);
};
const hookDebug = (hookFunc) => {
  hook('debug', hookFunc);
};

const _unHook = (methodName) => {
  console[methodName] = original[methodName];
};

var unHook = (methodName) => {
  if (!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new RangeError('unHook args(methodName) is not [log|info|warn|error|debug]');
  }

  _unHook(methodName);
};

const unHookLog = () => {
  unHook('log');
};
const unHookInfo = () => {
  unHook('info');
};
const unHookWarn = () => {
  unHook('warn');
};
const unHookError = () => {
  unHook('error');
};
const unHookDebug = () => {
  unHook('debug');
};

const _accept = (
  methodName,
  acceptArray,
  rejectArray,
  hookFunc,
) => {
  _hook(methodName, (...messageArgs) => {
    const messageArgsAll = messageArgs.map((value) => String(value)).join(' ');
    let acceptFlag = acceptArray.length === 0;
    if (acceptFlag === false) {
      acceptFlag = _includes(messageArgsAll, acceptArray);
    }
    if (acceptFlag && _isArray(rejectArray)) {
      acceptFlag = !_includes(messageArgsAll, rejectArray);
    }

    if (acceptFlag) {
      hookFunc(...messageArgs);
    }
  });
};

const accept = (
  methodName,
  acceptArray,
  rejectArray,
  hookFunc,
) => {
  if(!_or(methodName, ['log', 'info', 'warn', 'error', 'debug'])) {
    throw new RangeError(
      'accept args(methodName) is not [log|info|warn|error|debug]'
    );
  }
  if (!_isArray(acceptArray)) {
    throw new TypeError(
      'accept args(acceptArray) is not array'
    );
  }
  if (!(_isUndefined(rejectArray) || _isArray(rejectArray))) {
    throw new TypeError(
      'accept args(rejectArray) is not array'
    );
  }
  if (!_isFunction(hookFunc)) {
    throw new TypeError(
      'accept args(hookFunc) is not function'
    );
  }

  _accept(
    methodName,
    acceptArray,
    rejectArray,
    hookFunc
  )
};

const acceptLog = (
  acceptArray,
  rejectArray,
  hookFunc = original.log,
) => {
  accept('log', acceptArray, rejectArray, hookFunc);
};
const acceptInfo = (
  acceptArray,
  rejectArray,
  hookFunc = original.info,
) => {
  accept('info', acceptArray, rejectArray, hookFunc);
};
const acceptWarn = (
  acceptArray,
  rejectArray,
  hookFunc = original.warn,
) => {
  accept('warn', acceptArray, rejectArray, hookFunc);
};
const acceptError = (
  acceptArray,
  rejectArray,
  hookFunc = original.error,
) => {
  accept('error', acceptArray, rejectArray, hookFunc);
};
const acceptDebug = (
  acceptArray,
  rejectArray,
  hookFunc = original.debug,
) => {
  accept('debug', acceptArray, rejectArray, hookFunc);
};

module.exports = {
  _hook,
  hook,hookLog,hookInfo,hookWarn,hookError,hookDebug,
  _unHook,
  unHook,unHookLog,unHookInfo,unHookWarn,unHookError,unHookDebug,
  accept,acceptLog,acceptInfo,acceptWarn,acceptError,acceptDebug,
};