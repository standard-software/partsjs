"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isGasRhino = exports.isGasV8 = exports.googleAppScriptEngineName = exports.isOpera = exports.isSafari = exports.isInternetExplorer = exports.isEdge = exports.isFirefox = exports.isChrome = exports.browserName = exports.name = exports.isDeno = exports.isNodeJs = exports.isJest = exports.isGoogleAppsScript = exports.isWindowsScriptHost = exports.isWebBrowser = void 0;

var _includes2 = require("../compare/includes.js");

var _includes_common = require("../compare/includes_common.js");

var isWebBrowser = function isWebBrowser() {
  return name() === 'WebBrowser';
};

exports.isWebBrowser = isWebBrowser;

var isWindowsScriptHost = function isWindowsScriptHost() {
  return name() === 'WindowsScriptHost';
};

exports.isWindowsScriptHost = isWindowsScriptHost;

var isGoogleAppsScript = function isGoogleAppsScript() {
  return name() === 'GoogleAppsScript';
};

exports.isGoogleAppsScript = isGoogleAppsScript;

var isJest = function isJest() {
  return name() === 'Jest';
};

exports.isJest = isJest;

var isNodeJs = function isNodeJs() {
  return name() === 'Node.js';
};

exports.isNodeJs = isNodeJs;

var isDeno = function isDeno() {
  return name() === 'Deno';
};

exports.isDeno = isDeno;

var name = function name() {
  var result;

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
  }

  ;
  return result;
};

exports.name = name;

var browserName = function browserName() {
  if (!isWebBrowser()) {
    return '';
  }

  var ua = window.navigator.userAgent.toLowerCase();

  if ((0, _includes_common._includesSome)(ua, ['msie', 'trident'])) {
    return 'InternetExplorer';
  } else if ((0, _includes2._includes)(ua, 'edge')) {
    return 'Edge';
  } else if ((0, _includes2._includes)(ua, 'opr')) {
    return 'Opera';
  } else if ((0, _includes2._includes)(ua, 'chrome')) {
    return 'Chrome';
  } else if ((0, _includes2._includes)(ua, 'safari')) {
    return 'Safari';
  } else if ((0, _includes2._includes)(ua, 'firefox')) {
    return 'Firefox';
  } else {
    return 'other';
  }
};

exports.browserName = browserName;

var isChrome = function isChrome() {
  return browserName() === 'Chrome';
};

exports.isChrome = isChrome;

var isFirefox = function isFirefox() {
  return browserName() === 'Firefox';
};

exports.isFirefox = isFirefox;

var isEdge = function isEdge() {
  return browserName() === 'Edge';
};

exports.isEdge = isEdge;

var isInternetExplorer = function isInternetExplorer() {
  return browserName() === 'InternetExplorer';
};

exports.isInternetExplorer = isInternetExplorer;

var isSafari = function isSafari() {
  return browserName() === 'Safari';
};

exports.isSafari = isSafari;

var isOpera = function isOpera() {
  return browserName() === 'Opera';
};

exports.isOpera = isOpera;

var googleAppScriptEngineName = function googleAppScriptEngineName() {
  if (!isGoogleAppsScript()) {
    return '';
  }

  if (typeof Object.toSource === 'undefined') {
    return 'V8';
  } else {
    return 'Rhino';
  }
};

exports.googleAppScriptEngineName = googleAppScriptEngineName;

var isGasV8 = function isGasV8() {
  return googleAppScriptEngineName() === 'V8';
};

exports.isGasV8 = isGasV8;

var isGasRhino = function isGasRhino() {
  return googleAppScriptEngineName() === 'Rhino';
};

exports.isGasRhino = isGasRhino;
var _default = {
  name: name,
  isWebBrowser: isWebBrowser,
  isWindowsScriptHost: isWindowsScriptHost,
  isGoogleAppsScript: isGoogleAppsScript,
  isNodeJs: isNodeJs,
  isDeno: isDeno,
  isJest: isJest,
  browserName: browserName,
  isChrome: isChrome,
  isFirefox: isFirefox,
  isEdge: isEdge,
  isInternetExplorer: isInternetExplorer,
  isSafari: isSafari,
  isOpera: isOpera,
  buildMode: ''
};
exports["default"] = _default;