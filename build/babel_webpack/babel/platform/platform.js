"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isOpera = exports.isSafari = exports.isInternetExplorer = exports.isEdge = exports.isFirefox = exports.isChrome = exports.isDeno = exports.isNode = exports.isJest = exports.isGasRhino = exports.isGasV8 = exports.isGoogleAppsScript = exports.isWindowsScriptHost = exports.isWebBrowser = exports.platformName = void 0;

var _includes = require("../compare/__includes.js");

var _platformName;

var platformName = function platformName() {
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
    var ua = window.navigator.userAgent.toLowerCase();

    if ((0, _includes.__includes)(ua, 'msie') || (0, _includes.__includes)(ua, 'trident')) {
      _platformName = 'InternetExplorer';
    } else if ((0, _includes.__includes)(ua, 'edg')) {
      _platformName = 'Edge';
    } else if ((0, _includes.__includes)(ua, 'opr')) {
      _platformName = 'Opera';
    } else if ((0, _includes.__includes)(ua, 'chrome')) {
      _platformName = 'Chrome';
    } else if ((0, _includes.__includes)(ua, 'safari')) {
      _platformName = 'Safari';
    } else if ((0, _includes.__includes)(ua, 'firefox')) {
      _platformName = 'Firefox';
    } else {
      _platformName = 'OtherBrowser';
    }
  } else {
    _platformName = 'Unknown';
  }

  ;
  return _platformName;
};

exports.platformName = platformName;

platformName.reset = function () {
  _platformName = undefined;
};

var isWebBrowser = function isWebBrowser() {
  return (0, _includes.__includes)(['InternetExplorer', 'Edge', 'Opera', 'Chrome', 'Safari', 'Firefox', 'OtherBrowser'], platformName());
};

exports.isWebBrowser = isWebBrowser;

var isWindowsScriptHost = function isWindowsScriptHost() {
  return platformName() === 'WindowsScriptHost';
};

exports.isWindowsScriptHost = isWindowsScriptHost;

var isGoogleAppsScript = function isGoogleAppsScript() {
  return (0, _includes.__includes)(['GoogleAppsScriptV8', 'GoogleAppsScriptRhino'], platformName());
};

exports.isGoogleAppsScript = isGoogleAppsScript;

var isGasV8 = function isGasV8() {
  return platformName() === 'GoogleAppsScriptV8';
};

exports.isGasV8 = isGasV8;

var isGasRhino = function isGasRhino() {
  return platformName() === 'GoogleAppsScriptRhino';
};

exports.isGasRhino = isGasRhino;

var isJest = function isJest() {
  return platformName() === 'Jest';
};

exports.isJest = isJest;

var isNode = function isNode() {
  return platformName() === 'Node';
};

exports.isNode = isNode;

var isDeno = function isDeno() {
  return platformName() === 'Deno';
};

exports.isDeno = isDeno;

var isChrome = function isChrome() {
  return platformName() === 'Chrome';
};

exports.isChrome = isChrome;

var isFirefox = function isFirefox() {
  return platformName() === 'Firefox';
};

exports.isFirefox = isFirefox;

var isEdge = function isEdge() {
  return platformName() === 'Edge';
};

exports.isEdge = isEdge;

var isInternetExplorer = function isInternetExplorer() {
  return platformName() === 'InternetExplorer';
};

exports.isInternetExplorer = isInternetExplorer;

var isSafari = function isSafari() {
  return platformName() === 'Safari';
};

exports.isSafari = isSafari;

var isOpera = function isOpera() {
  return platformName() === 'Opera';
};

exports.isOpera = isOpera;
var _default = {
  platformName: platformName,
  isWebBrowser: isWebBrowser,
  isWindowsScriptHost: isWindowsScriptHost,
  isGoogleAppsScript: isGoogleAppsScript,
  isNode: isNode,
  isDeno: isDeno,
  isJest: isJest,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  isGasV8: isGasV8,
  isGasRhino: isGasRhino,
  buildMode: '',
  testStartFileName: ''
};
exports["default"] = _default;