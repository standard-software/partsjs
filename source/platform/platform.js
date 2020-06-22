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
}

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

  if (_includes([
    'WindowsScriptHost',
    'WebBrowser',
    'GoogleAppsScript',
    'Deno',
    'Node.js',
    'Jest',
    'unknown',
  ], result) === false) {
    throw new Error('platform name error');
  }
  return result;
};

export const browserName = () => {
  let result = '';

  if (isWebBrowser()) {
    const ua = window.navigator.userAgent.toLowerCase();
    if (_includesSome(ua, ['msie', 'trident'])) {
      result = 'InternetExplorer';
    } else if (_includes(ua, 'edge')) {
      result = 'Edge';
    } else if (_includes(ua, 'opr')) {
      result = 'Opera';
    } else if (_includes(ua, 'chrome')) {
      result = 'Chrome';
    } else if (_includes(ua, 'safari')) {
      result = 'Safari';
    } else if (_includes(ua, 'firefox')) {
      result = 'Firefox';
    } else {
      result = 'other';
    }
  }

  if (_includes([
    'Chrome',
    'Firefox',
    'Edge',
    'InternetExplorer',
    'Safari',
    'Opera',
    'other',
    '',
  ], result) === false) {
    throw new Error('platform browserName error');
  }
  return result;
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

  buildMode: '',
}
