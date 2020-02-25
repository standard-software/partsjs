"use strict";

var isWebBrowser = function isWebBrowser() {
  return typeof window !== 'undefined';
};

var isWindowsScriptHost = function isWindowsScriptHost() {
  return typeof WScript !== 'undefined';
};

var isGoogleAppsScript = function isGoogleAppsScript() {
  return typeof Browser !== 'undefined';
};

var isNodeJs = function isNodeJs() {
  return name() === 'Node.js';
};

var name = function name() {
  var result;

  if (isWindowsScriptHost()) {
    result = 'WindowsScriptHost';
  } else if (isWebBrowser()) {
    result = 'WebBrowser';
  } else if (isGoogleAppsScript()) {
    result = 'GoogleAppsScript';
  } else {
    result = 'Node.js';
  }

  ;

  if (['WindowsScriptHost', 'WebBrowser', 'GoogleAppsScript', 'Node.js'].indexOf(result) === -1) {
    throw new Error('platform name error');
  }

  return result;
};

var browserName = function browserName() {
  var result = '';

  if (isWebBrowser()) {
    var ua = window.navigator.userAgent.toLowerCase();

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

  if (['Chrome', 'Firefox', 'Edge', 'InternetExplorer', 'Safari', 'Opera', 'other', ''].indexOf(result) === -1) {
    throw new Error('platform browserName error');
  }

  return result;
};

var isChrome = function isChrome() {
  return browserName() === 'Chrome';
};

var isFirefox = function isFirefox() {
  return browserName() === 'Firefox';
};

var isEdge = function isEdge() {
  return browserName() === 'Edge';
};

var isInternetExplorer = function isInternetExplorer() {
  return browserName() === 'InternetExplorer';
};

var isSafari = function isSafari() {
  return browserName() === 'Safari';
};

var isOpera = function isOpera() {
  return browserName() === 'Opera';
};

module.exports = {
  name: name,
  isWebBrowser: isWebBrowser,
  isWindowsScriptHost: isWindowsScriptHost,
  isGoogleAppsScript: isGoogleAppsScript,
  isNodeJs: isNodeJs,
  browserName: browserName,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  buildMode: ''
};