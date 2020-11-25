import {
  __includes,
} from '../compare/__includes.js';

let _name;
export const name = () => {
  if (typeof _name !== 'undefined') {
    return _name;
  }

  if (typeof WScript !== 'undefined') {
    _name = 'WindowsScriptHost';
  } else if (typeof Deno !== 'undefined') {
    _name = 'Deno';
  } else if (typeof Browser !== 'undefined') {
    if (typeof Object.toSource === 'undefined') {
      _name = 'GoogleAppsScriptV8';
    } else {
      _name = 'GoogleAppsScriptRhino';
    }
  } else if (typeof window === 'undefined') {
    _name = 'Node';
  } else if (typeof jest !== 'undefined') {
    _name = 'Jest';
  } else if (typeof process !== 'undefined') {
    // WebBrowser
    const ua = window.navigator.userAgent.toLowerCase();
    if (__includes(ua, 'msie') || __includes(ua, 'trident')) {
      _name = 'InternetExplorer';
    } else if (__includes(ua, 'edg')) {
      _name = 'Edge';
    } else if (__includes(ua, 'opr')) {
      _name = 'Opera';
    } else if (__includes(ua, 'chrome')) {
      _name = 'Chrome';
    } else if (__includes(ua, 'safari')) {
      _name = 'Safari';
    } else if (__includes(ua, 'firefox')) {
      _name = 'Firefox';
    } else {
      _name = 'OtherBrowser';
    }
  } else {
    _name = 'Unknown';
  };
  return _name;
};

name.reset = () => {
  _name = undefined;
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
  ], name());
};

export const isWindowsScriptHost = () => {
  return name() === 'WindowsScriptHost';
};

export const isGoogleAppsScript = () => {
  return __includes([
    'GoogleAppsScriptV8',
    'GoogleAppsScriptRhino',
  ], name());
};

export const isGasV8 = () => {
  return name() === 'GoogleAppsScriptV8';
};

export const isGasRhino = () => {
  return name() === 'GoogleAppsScriptRhino';
};

export const isJest = () => {
  return name() === 'Jest';
};

export const isNode = () => {
  return name() === 'Node';
};

export const isDeno = () => {
  return name() === 'Deno';
};

export const isChrome = () => {
  return name() === 'Chrome';
};

export const isFirefox = () => {
  return name() === 'Firefox';
};

export const isEdge = () => {
  return name() === 'Edge';
};

export const isInternetExplorer = () => {
  return name() === 'InternetExplorer';
};

export const isSafari = () => {
  return name() === 'Safari';
};

export const isOpera = () => {
  return name() === 'Opera';
};

export default {
  name,
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
