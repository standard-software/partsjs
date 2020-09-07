import {
  __includes,
} from '../compare/__includes.js';

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
    _name = 'GoogleAppsScript';
  } else if (typeof window === 'undefined') {
    _name = 'Node.js';
  } else if (typeof jest !== 'undefined') {
    _name = 'Jest';
  } else if (typeof process !== 'undefined') {
    _name = 'WebBrowser';
  } else {
    _name = 'unknown';
  };
  return _name;
};

name.reset = () => {
  _name = undefined;
};

let _browserName;
export const browserName = () => {
  if (typeof _browserName !== 'undefined') {
    return _browserName;
  }

  if (!isWebBrowser()) {
    _browserName = '';
  } else {
    const ua = window.navigator.userAgent.toLowerCase();
    if (__includes(ua, 'msie') || __includes(ua, 'trident')) {
      _browserName = 'InternetExplorer';
    } else if (__includes(ua, 'edg')) {
      _browserName = 'Edge';
    } else if (__includes(ua, 'opr')) {
      _browserName = 'Opera';
    } else if (__includes(ua, 'chrome')) {
      _browserName = 'Chrome';
    } else if (__includes(ua, 'safari')) {
      _browserName = 'Safari';
    } else if (__includes(ua, 'firefox')) {
      _browserName = 'Firefox';
    } else {
      _browserName = 'other';
    }
  }

  return _browserName;
};

browserName.reset = () => {
  _browserName = undefined;
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
