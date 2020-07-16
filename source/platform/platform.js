import {
  _includes,
} from '../compare/includes.js';

import {
  _includesSome,
} from '../compare/includes_common.js';

export const isWebBrowser = () => {
  return name() === 'WebBrowser';
};

export const isWindowsScriptHost = () => {
  return name() === 'WindowsScriptHost';
};

export const isGoogleAppsScript = () => {
  return name() === 'GoogleAppsScript';
};

export const isJest = () => {
  return name() === 'Jest';
};

export const isNodeJs = () => {
  return name() === 'Node.js';
};

export const isDeno = () => {
  return name() === 'Deno';
};

export const name = () => {
  let result;
  if (typeof WScript !== 'undefined') {
    result = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    result = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    result = 'GoogleAppsScript';
  } else if (typeof window === 'undefined') {
    result = 'Node.js';
  } else if (typeof jest !== 'undefined') {
    result = 'Jest';
  } else if (typeof process !== 'undefined') {
    result = 'WebBrowser';
  } else {
    result = 'unknown';
  };
  return result;
};

export const browserName = () => {
  if (!isWebBrowser()) {
    return '';
  }

  const ua = window.navigator.userAgent.toLowerCase();
  if (_includesSome(ua, ['msie', 'trident'])) {
    return 'InternetExplorer';
  } else if (_includes(ua, 'edg')) {
    return 'Edge';
  } else if (_includes(ua, 'opr')) {
    return 'Opera';
  } else if (_includes(ua, 'chrome')) {
    return 'Chrome';
  } else if (_includes(ua, 'safari')) {
    return 'Safari';
  } else if (_includes(ua, 'firefox')) {
    return 'Firefox';
  } else {
    return 'other';
  }
};


export const isChrome = () => {
  return browserName() === 'Chrome';
};

export const isFirefox = () => {
  return browserName() === 'Firefox';
};

export const isEdge = () => {
  return browserName() === 'Edge';
};

export const isInternetExplorer = () => {
  return browserName() === 'InternetExplorer';
};

export const isSafari = () => {
  return browserName() === 'Safari';
};

export const isOpera = () => {
  return browserName() === 'Opera';
};

export const googleAppScriptEngineName = () => {
  if (!isGoogleAppsScript()) {
    return '';
  }
  if (typeof Object.toSource === 'undefined') {
    return 'V8';
  } else {
    return 'Rhino';
  }
};

export const isGasV8 = () => {
  return googleAppScriptEngineName() === 'V8';
};

export const isGasRhino = () => {
  return googleAppScriptEngineName() === 'Rhino';
};

export default {
  name,
  isWebBrowser,
  isWindowsScriptHost,
  isGoogleAppsScript,
  isNodeJs,
  isDeno,
  isJest,

  browserName,
  isChrome,
  isFirefox,
  isEdge,
  isInternetExplorer,
  isSafari,
  isOpera,

  googleAppScriptEngineName,
  isGasV8,
  isGasRhino,

  buildMode: '',
};
