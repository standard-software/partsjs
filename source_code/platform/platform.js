import {
  _includes,
} from '../compare/includes.js';

import {
  _includesSome,
} from '../compare/includes_common.js';

export const isWebBrowser = () => {
  return typeof window !== 'undefined';
};

export const isWindowsScriptHost = () => {
  return typeof WScript !== 'undefined';
};

export const isGoogleAppsScript = () => {
  return typeof Browser !== 'undefined';
};

export const isNodeJs = () => {
  return name() === 'Node.js';
};

export const name = () => {
  let result;

  if (isWindowsScriptHost()) {
    result = 'WindowsScriptHost';
  } else if (isWebBrowser()) {
    result = 'WebBrowser';
  } else if (isGoogleAppsScript()) {
    result = 'GoogleAppsScript';
  } else {
    result = 'Node.js';
  };

  if (_includes([
    'WindowsScriptHost',
    'WebBrowser',
    'GoogleAppsScript',
    'Node.js',
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

  browserName,
  isChrome,
  isFirefox,
  isEdge,
  isInternetExplorer,
  isSafari,
  isOpera,

  buildMode: '',
}
