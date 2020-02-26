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
  ].includes(result) === false) {
    throw new Error('platform name error');
  }
  return result;
};

const browserName = () => {
  let result = '';

  if (isWebBrowser()) {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes('msie') || ua.includes('trident')) {
      result = 'InternetExplorer';
    } else if (ua.includes('edge')) {
      result = 'Edge';
    } else if (ua.includes('opr')) {
      result = 'Opera';
    } else if (ua.includes('chrome')) {
      result = 'Chrome';
    } else if (ua.includes('safari')) {
      result = 'Safari';
    } else if (ua.includes('firefox')) {
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
  ].includes(result) === false) {
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
