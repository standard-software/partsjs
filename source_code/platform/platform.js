const isWebBrowser = () => {
  return typeof window !== 'undefined';
};

const isWindowsScriptHost = () => {
  return typeof WScript !== 'undefined';
};

const isGoogleAppsScript = () => {
  return typeof Browser !== 'undefined';
};

const isNodeJs = () => {
  return name() === 'Node.js';
};

const name = () => {
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

  if ([
    'WindowsScriptHost',
    'WebBrowser',
    'GoogleAppsScript',
    'Node.js',
  ].indexOf(result) === -1) {
    throw new Error('platform name error');
  }
  return result;
};

const browserName = () => {
  let result = '';

  if (isWebBrowser()) {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1) {
      result = 'InternetExplorer';
    } else if (ua.indexOf('edge') !== -1) {
      result = 'Edge';
    } else if (ua.indexOf('opr') !== -1) {
      result = 'Opera';
    } else if (ua.indexOf('chrome') !== -1) {
      result = 'Chrome';
    } else if (ua.indexOf('safari') !== -1) {
      result = 'Safari';
    } else if (ua.indexOf('firefox') !== -1) {
      result = 'Firefox';
    } else {
      result = 'other';
    }
  }

  if ([
    'Chrome',
    'Firefox',
    'Edge',
    'InternetExplorer',
    'Safari',
    'Opera',
    'other',
    '',
  ].indexOf(result) === -1) {
    throw new Error('platform browserName error');
  }
  return result;
};


const isChrome = () => {
  return browserName() === 'Chrome';
};

const isFirefox = () => {
  return browserName() === 'Firefox';
};

const isEdge = () => {
  return browserName() === 'Edge';
};

const isInternetExplorer = () => {
  return browserName() === 'InternetExplorer';
};

const isSafari = () => {
  return browserName() === 'Safari';
};

const isOpera = () => {
  return browserName() === 'Opera';
};

module.exports = {
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
};
