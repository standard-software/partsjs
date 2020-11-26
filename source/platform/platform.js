import {
  __includes,
} from '../compare/__includes.js';

let _platformName;
export const platformName = () => {
  if (typeof _platformName !== 'undefined') {
    return _platformName;
  }

  if (typeof WScript !== 'undefined') {
    _platformName = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    _platformName = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    if (typeof Object.toSource === 'undefined') {
      _platformName = 'GoogleAppsScriptV8';
    } else {
      _platformName = 'GoogleAppsScriptRhino';
    }
  } else if (typeof window === 'undefined') {
    _platformName = 'Node';
  } else if (typeof jest !== 'undefined') {
    _platformName = 'Jest';
  } else if (typeof process !== 'undefined') {
    // WebBrowser
    const ua = window.navigator.userAgent.toLowerCase();
    if (__includes(ua, 'msie') || __includes(ua, 'trident')) {
      _platformName = 'InternetExplorer';
    } else if (__includes(ua, 'edg')) {
      _platformName = 'Edge';
    } else if (__includes(ua, 'opr')) {
      _platformName = 'Opera';
    } else if (__includes(ua, 'chrome')) {
      _platformName = 'Chrome';
    } else if (__includes(ua, 'safari')) {
      _platformName = 'Safari';
    } else if (__includes(ua, 'firefox')) {
      _platformName = 'Firefox';
    } else {
      _platformName = 'OtherBrowser';
    }
  } else {
    _platformName = 'Unknown';
  };
  return _platformName;
};

platformName.reset = () => {
  _platformName = undefined;
};

export const isWebBrowser = () => {
  return __includes([
    'InternetExplorer',
    'Edge',
    'Opera',
    'Chrome',
    'Safari',
    'Firefox',
    'OtherBrowser',
  ], platformName());
};

export const isWindowsScriptHost = () => {
  return platformName() === 'WindowsScriptHost';
};

export const isGoogleAppsScript = () => {
  return __includes([
    'GoogleAppsScriptV8',
    'GoogleAppsScriptRhino',
  ], platformName());
};

export const isGasV8 = () => {
  return platformName() === 'GoogleAppsScriptV8';
};

export const isGasRhino = () => {
  return platformName() === 'GoogleAppsScriptRhino';
};

export const isJest = () => {
  return platformName() === 'Jest';
};

export const isNode = () => {
  return platformName() === 'Node';
};

export const isDeno = () => {
  return platformName() === 'Deno';
};

export const isChrome = () => {
  return platformName() === 'Chrome';
};

export const isFirefox = () => {
  return platformName() === 'Firefox';
};

export const isEdge = () => {
  return platformName() === 'Edge';
};

export const isInternetExplorer = () => {
  return platformName() === 'InternetExplorer';
};

export const isSafari = () => {
  return platformName() === 'Safari';
};

export const isOpera = () => {
  return platformName() === 'Opera';
};

export default {
  platformName,
  isWebBrowser,
  isWindowsScriptHost,
  isGoogleAppsScript,
  isNode,
  isDeno,
  isJest,

  isChrome,
  isFirefox,
  isEdge,
  isInternetExplorer,
  isSafari,
  isOpera,

  isGasV8,
  isGasRhino,

  buildMode: '',
  testStartFileName: '',
};
