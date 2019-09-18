const {
  _isUndefined,
  _isNull,
  _isNaNStrict,
  _isBoolean,
  _isNumber,
  _isInteger,
  _isString,
  _isFunction,
  _isObject,
  _isArray,
  _isDate,
  _isRegExp,
  _isError,
  _isException,
} = require('./type.js');

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
const hookLog = (hookFunc) => {
  _hook('log', hookFunc);
};
const hookInfo = (hookFunc) => {
  _hook('info', hookFunc);
};
const hookWarn = (hookFunc) => {
  _hook('warn', hookFunc);
};
const hookError = (hookFunc) => {
  _hook('error', hookFunc);
};
const hookDebug = (hookFunc) => {
  _hook('debug', hookFunc);
};

const _unHook = (methodName) => {
  console[methodName] = original[methodName];
};
const unHookLog = () => {
  _unHook('log');
};
const unHookInfo = () => {
  _unHook('info');
};
const unHookWarn = () => {
  _unHook('warn');
};
const unHookError = () => {
  _unHook('error');
};
const unHookDebug = () => {
  _unHook('debug');
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
  hookFunc = original.log,
) => {
  accept('info', acceptArray, rejectArray, hookFunc);
};
const acceptWarn = (
  acceptArray,
  rejectArray,
  hookFunc = original.log,
) => {
  accept('warn', acceptArray, rejectArray, hookFunc);
};
const acceptError = (
  acceptArray,
  rejectArray,
  hookFunc = original.log,
) => {
  accept('error', acceptArray, rejectArray, hookFunc);
};
const acceptDebug = (
  acceptArray,
  rejectArray,
  hookFunc = original.log,
) => {
  accept('debug', acceptArray, rejectArray, hookFunc);
};

module.exports = {
  _hook,
  hookLog,
  hookInfo,
  hookWarn,
  hookError,
  hookDebug,

  _unHook,
  unHookLog,
  unHookInfo,
  unHookWarn,
  unHookError,
  unHookDebug,

  accept,
  acceptLog,
  acceptInfo,
  acceptWarn,
  acceptError,
  acceptDebug,
};