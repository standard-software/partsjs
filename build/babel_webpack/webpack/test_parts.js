(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["test_parts"] = factory();
	else
		root["test_parts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_index = void 0;

var _commonTest = __webpack_require__(2);

var _typeTest = __webpack_require__(3);

var _syntaxTest = __webpack_require__(4);

var _testTest = __webpack_require__(5);

var _compareTest = __webpack_require__(6);

var _convertTest = __webpack_require__(7);

var _numberTest = __webpack_require__(8);

var _stringTest = __webpack_require__(9);

var _objectTest = __webpack_require__(10);

var _arrayTest = __webpack_require__(11);

var _dateTest = __webpack_require__(12);

var _consoleHookTest = __webpack_require__(13);

var _otherTest = __webpack_require__(14);

var test_execute_index = function test_execute_index(parts) {
  console.log("parts.js version: ".concat(parts.VERSION));
  console.log("platform: ".concat(parts.platform.platformName()));

  if (parts.platform.isWebBrowser()) {
    console.log("  User Agent: ".concat(window.navigator.userAgent));
  }

  console.log("  buildMode: ".concat(parts.platform.buildMode));
  console.log("  testStartFileName: ".concat(parts.platform.testStartFileName));
  console.log("test start datetime: ".concat(new Date().toString()));

  var test_execute_nameSpace = function test_execute_nameSpace(parts) {
    var _parts$test = parts.test,
        describe = _parts$test.describe,
        it = _parts$test.it,
        checkEqual = _parts$test.checkEqual;
    describe('test_execute_nameSpace', function () {
      var _parts$object = parts.object,
          propertyCount = _parts$object.propertyCount,
          inProperty = _parts$object.inProperty;
      it('test_execute_nameSpace 1', function () {
        var propertyCountForParts = function propertyCountForParts(parts) {
          var result = propertyCount(parts);

          if (parts.inProperty(parts, 'default')) {
            result -= 1;
          }

          if (parts.inProperty(parts, 'parts')) {
            result -= 1;
          }

          if (parts.platform.isWindowsScriptHost()) {
            if (parts.inProperty(parts, '__esModule')) {
              result -= 1;
            } // __esModule is "in" found but "for..in" or "Object.keys" not found
            // and WSH found

          }

          return result;
        };

        checkEqual(399, propertyCountForParts(parts));
        checkEqual(17, propertyCount(parts.platform));
        checkEqual(7, propertyCount(parts.common));
        checkEqual(262, propertyCount(parts.type));
        checkEqual(17, propertyCount(parts.syntax));
        checkEqual(12, propertyCount(parts.test));
        checkEqual(44, propertyCount(parts.compare));
        checkEqual(35, propertyCount(parts.convert));
        checkEqual(15, propertyCount(parts.number));
        checkEqual(94, propertyCount(parts.string));
        checkEqual(40, propertyCount(parts.object));
        checkEqual(68, propertyCount(parts.array));
        checkEqual(48, propertyCount(parts.array.operation));
        checkEqual(20, propertyCount(parts.date));
        checkEqual(2, propertyCount(parts.system));
        checkEqual(3, propertyCount(parts.system.wsh));
        checkEqual(20, propertyCount(parts.system.consoleHook));
        checkEqual(true, inProperty(parts, 'type,syntax,test,compare,convert,' + 'number,string,object,array,date'));
      });
      it('test_execute_nameSpace 2', function () {
        checkEqual(true, inProperty(parts, 'isUndefinedAll,isNotNullAll,' + 'isFunc,isNotObj,' + 'isThrown,isThrownValue,isThrownException,isNotThrown,' + 'assert,guard,' + 'sc,if_,switch_,' + 'equal,or,' + 'matchSome,matchSomeValue,initialValue,' + 'numberToString,' + 'stringToNumber,stringToInteger,' + 'numToString,' + 'strToNumber,strToInteger,' + 'numToStr,' + 'strToNum,strToInt,' + 'matchFormat,' + 'copyProperty,propertyCount,inProperty,' + 'copyProp,propCount,inProp,' + 'common'));
        checkEqual(false, inProperty(parts, 'abc,' + ''));
      });
    });
  };

  var test_execute_SelfReference = function test_execute_SelfReference(parts) {
    var _parts$test2 = parts.test,
        describe = _parts$test2.describe,
        it = _parts$test2.it,
        checkEqual = _parts$test2.checkEqual;
    describe('test_execute_SelfReference', function () {
      it('test_parts_SelfReference', function () {
        if (parts.isUndefined(parts.parts)) {
          return;
        }

        checkEqual(parts.VERSION, parts.parts.VERSION);

        if (parts.isModule(parts)) {
          return;
        }

        var parts1 = parts.cloneDeep(parts);
        delete parts1.parts;

        if (!parts.isUndefined(parts1["default"])) {
          delete parts1["default"];
        }

        if (!parts.isUndefined(parts1.__esModule)) {
          delete parts1.__esModule;
        }

        var parts2 = parts.cloneDeep(parts.parts);

        if (!parts2.isUndefined(parts2.parts)) {
          delete parts2.parts;
        }

        if (!parts.isUndefined(parts2["default"])) {
          delete parts2["default"];
        }

        if (!parts.isUndefined(parts2.__esModule)) {
          delete parts2.__esModule;
        }

        checkEqual(true, parts.equalDeep(parts1, parts2));
      });
    });
  };

  var _parts$test3 = parts.test,
      describe = _parts$test3.describe,
      testFrame = _parts$test3.testFrame;
  testFrame.outputDescribe = false;
  describe('test_execute_index', function () {
    (0, _commonTest.test_execute_common)(parts);
    (0, _typeTest.test_execute_type)(parts);
    (0, _syntaxTest.test_execute_syntax)(parts);
    (0, _testTest.test_execute_test)(parts);
    (0, _compareTest.test_execute_compare)(parts);
    (0, _convertTest.test_execute_convert)(parts);
    (0, _numberTest.test_execute_number)(parts);
    (0, _stringTest.test_execute_string)(parts);
    (0, _objectTest.test_execute_object)(parts);
    (0, _arrayTest.test_execute_array)(parts);
    (0, _dateTest.test_execute_date)(parts);
    (0, _otherTest.test_execute_other)(parts);
    (0, _consoleHookTest.test_execute_consoleHook)(parts);
    test_execute_nameSpace(parts);
    test_execute_SelfReference(parts);
    console.log('test finish');
  });
};

exports.test_execute_index = test_execute_index;
var _default = {
  test_execute_index: test_execute_index
};
exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_common = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */
// import moment from 'moment';
var test_execute_common = function test_execute_common(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      testCounter = _parts$test.testCounter;
  describe('test_execute_common', function () {
    var clone = parts.clone,
        merge = parts.merge,
        isUndefined = parts.isUndefined,
        isObject = parts.isObject,
        isArray = parts.isArray;
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        checkCompare = _parts$test2.checkCompare,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$object = parts.object,
        objectEntries = _parts$object.objectEntries,
        objectFromEntries = _parts$object.objectFromEntries;
    var map = parts.array.map;

    var test_clone_object = function test_clone_object() {
      it('test_clone_object', function () {
        var testObject1 = {
          a: 1,
          b: 2,
          c: 3
        }; // no clone

        var object1 = testObject1;
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(0, testObject1.a);
        testObject1.a = 1; // clone

        var object1 = clone(testObject1, clone.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c); // no clone deep

        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = clone(testObject3, clone.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d === testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(7, testObject3.d.a); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = 1;
          var object2 = clone(object1, clone.func.DefaultArray());
          object2.a = 0;
          checkEqual(1, object1.a);
          checkEqual(0, object2.a);
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = clone(object1, clone.func.DefaultArray());
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectFromNull(object2.a));
          testCounter();
          checkEqual(true, parts.isObjectFromNull(object2));
          checkEqual(false, object1 === object2);
          checkEqual(true, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        } // module object clone no support


        if (parts.isModule(parts)) {
          var cloneParts = parts.clone(parts, clone.func.DefaultArray());
          checkEqual(true, cloneParts === parts);
          checkEqual(true, parts.isModule(cloneParts));
          checkEqual(false, parts.isObjectNormal(cloneParts));
          checkEqual(false, parts.isObjectFromNull(cloneParts));
        }
      });
    };

    var test_clone_array = function test_clone_array() {
      it('test_clone_array', function () {
        var testArray1 = [1, 2, 3]; // no clone

        var array1 = testArray1;
        array1[0] = 0;
        checkEqual(0, array1[0], 'test');
        checkEqual(0, testArray1[0]);
        testArray1[0] = 1; // clone

        var array1 = clone(testArray1, clone.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray1[0]); // no clone deep

        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = clone(testArray3, clone.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(true, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('d,b,c', testArray3[3].join(','));
      });
    };

    var test_clone_date = function test_clone_date() {
      it('test_clone_date', function () {
        // no clone
        var testDate1 = new Date('2019/10/11');
        var date1 = testDate1;
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate());
        checkEqual(2019, testDate1.getFullYear());
        checkEqual(10, testDate1.getMonth() + 1);
        checkEqual(12, testDate1.getDate()); // date type clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, clone.func.DefaultArray());
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate()); // object array only clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, [clone.func.arraySeries, clone.func.object]);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(12, testDate1.getDate()); // object array date clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1, [clone.func.date, clone.func.arraySeries, clone.func.object]);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate());
      });
    };

    var test_clone_function = function test_clone_function() {
      it('test_clone_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var func1 = testFunc1;
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1()); // clone

        var func1 = clone(testFunc1, clone.func.DefaultArray());
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1());
      });
    };

    var test_clone_regexp = function test_clone_regexp() {
      it('test_clone_regexp', function () {
        var testRegExp1 = new RegExp('^a'); // no clone

        var regexp1 = testRegExp1;
        checkEqual(true, regexp1 === testRegExp1, 'test_clone_regexp 1');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone

        var regexp1 = clone(testRegExp1, clone.func.DefaultArray());
        checkEqual(false, regexp1 === testRegExp1);
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone no RegExpFunction

        var regexp1 = clone(testRegExp1, [clone.func.objectLike]);
        checkEqual(false, regexp1 === testRegExp1, 'test_clone_regexp clone');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(false, '^a' === regexp1.source); // clone

        var testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2, clone.func.DefaultArray());
        checkEqual(false, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(true, '^a' === regexp1.source); // clone no RegExpFunction

        var regexp1 = clone(testRegExp2, [clone.func.objectLike]);
        checkEqual(false, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(false, '^a' === regexp1.source);
      });
    };

    var test_clone_Fast_object = function test_clone_Fast_object() {
      it('test_clone_Fast_object', function () {
        var testObject1 = {
          a: 1,
          b: 2,
          c: 3
        }; // no clone

        var object1 = testObject1;
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(0, testObject1.a);
        testObject1.a = 1; // clone

        var object1 = clone(testObject1);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c); // no clone deep

        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = clone(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d === testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(7, testObject3.d.a); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = 1;
          var object2 = clone(object1);
          object2.a = 0;
          checkEqual(1, object1.a);
          checkEqual(0, object2.a);
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = clone(object1);
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectFromNull(object2.a));
          checkEqual(true, parts.isObjectNormal(object2)); // clone Fast is no support Object.create(null)

          checkEqual(false, object1 === object2);
          checkEqual(true, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        } // module object clone no support


        if (parts.isModule(parts)) {
          var cloneParts = parts.clone(parts);
          checkEqual(true, cloneParts === parts);
          checkEqual(true, parts.isModule(cloneParts));
          checkEqual(false, parts.isObjectNormal(cloneParts));
          checkEqual(false, parts.isObjectFromNull(cloneParts));
        }
      });
    };

    var test_clone_Fast_array = function test_clone_Fast_array() {
      it('test_clone_Fast_array', function () {
        var testArray1 = [1, 2, 3]; // no clone

        var array1 = testArray1;
        array1[0] = 0;
        checkEqual(0, array1[0], 'test');
        checkEqual(0, testArray1[0]);
        testArray1[0] = 1; // clone

        var array1 = clone(testArray1);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray1[0]); // no clone deep

        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = clone(testArray3);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(true, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('d,b,c', testArray3[3].join(','));
      });
    };

    var test_clone_Fast_date = function test_clone_Fast_date() {
      it('test_clone_Fast_date', function () {
        // no clone
        var testDate1 = new Date('2019/10/11');
        var date1 = testDate1;
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate());
        checkEqual(2019, testDate1.getFullYear());
        checkEqual(10, testDate1.getMonth() + 1);
        checkEqual(12, testDate1.getDate()); // date type clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone(testDate1);
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(12, testDate1.getDate()); // clone Fast is not support date clone
      });
    };

    var test_clone_Fast_function = function test_clone_Fast_function() {
      it('test_clone_Fast_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var func1 = testFunc1;
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1()); // clone

        var func1 = clone(testFunc1);
        checkEqual(true, func1 === testFunc1);
        checkEqual('ABC', func1());
      });
    };

    var test_clone_Fast_regexp = function test_clone_Fast_regexp() {
      it('test_clone_Fast_regexp', function () {
        var testRegExp1 = new RegExp('^a'); // no clone

        var regexp1 = testRegExp1;
        checkEqual(true, regexp1 === testRegExp1, 'test_clone_regexp 1');
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone

        var regexp1 = clone(testRegExp1);
        checkEqual(true, regexp1 === testRegExp1);
        checkEqual(true, '^a' === testRegExp1.source);
        checkEqual(true, '^a' === regexp1.source); // clone Fast is not support RegExp clone
        // clone

        var testRegExp2 = /^a/;
        var regexp1 = clone(testRegExp2);
        checkEqual(true, regexp1 === testRegExp2);
        checkEqual(true, '^a' === testRegExp2.source);
        checkEqual(true, '^a' === regexp1.source); // clone Fast is not support RegExp clone
      });
    };

    var test_clone_objectParameter = function test_clone_objectParameter() {
      it('test_clone_objectParameter', function () {
        var testObject1 = {
          a: 1,
          b: 2,
          c: 3
        }; // clone

        var object1 = clone({
          source: testObject1
        });
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(2, object1.b);
        checkEqual(3, object1.c);
        checkEqual(1, testObject1.a);
        checkEqual(2, testObject1.b);
        checkEqual(3, testObject1.c); // date type clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: clone.func.DefaultArray()
        });
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate()); // object array only clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: [clone.func.arraySeries, clone.func.object]
        });
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(12, testDate1.getDate()); // object array date clone

        var testDate1 = new Date('2019/10/11');
        var date1 = clone({
          source: testDate1,
          cloneFuncArray: [clone.func.date, clone.func.arraySeries, clone.func.object]
        });
        date1.setDate(12);
        checkEqual(12, date1.getDate());
        checkEqual(11, testDate1.getDate());
      });
    };

    var test_cloneDeep_object = function test_cloneDeep_object() {
      it('test_cloneDeep_object', function () {
        // clone deep
        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = cloneDeep(testObject3, cloneDeep.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = cloneDeep(object1, cloneDeep.func.DefaultArray());
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectFromNull(object2.a));
          checkEqual(true, parts.isObjectFromNull(object2));
          checkEqual(false, object1 === object2);
          checkEqual(false, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        }
      });
    };

    var test_cloneDeep_array = function test_cloneDeep_array() {
      it('test_cloneDeep_array', function () {
        // clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = cloneDeep(testArray3, cloneDeep.func.DefaultArray());
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(false, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('a,b,c', testArray3[3].join(','));
      });
    };

    var test_cloneDeep_object_array_mix = function test_cloneDeep_object_array_mix() {
      it('test_cloneDeep_object_array_mix', function () {
        // no clone deep array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = clone(testValue1, cloneDeep.func.DefaultArray());
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(4, testValue1[3].a); // clone deep array object

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = cloneDeep(testValue1, cloneDeep.func.DefaultArray());
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(1, testValue1[3].a); // no clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = clone(testValue2, cloneDeep.func.DefaultArray());
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]); // clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = cloneDeep(testValue2, cloneDeep.func.DefaultArray());
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(1, testValue2.d[0]); // no clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = clone(testValue1, cloneDeep.func.DefaultArray());
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(6, testValue1[3].c[0]); // clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = cloneDeep(testValue1, cloneDeep.func.DefaultArray());
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(3, testValue1[3].c[0]); // no clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = clone(testValue2, cloneDeep.func.DefaultArray());
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e); // clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = cloneDeep(testValue2, cloneDeep.func.DefaultArray());
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(4, testValue2.d[0].e);
      });
    };

    var test_cloneDeep_date = function test_cloneDeep_date() {
      it('test_cloneDeep_date', function () {
        // no clone
        var date1 = new Date('2019/10/11');
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate()); // clone array date no clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = clone(value1, cloneDeep.func.DefaultArray());
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep array date clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // cloneDeep ignore date

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, [clone.func.arraySeries, clone.func.object]);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep add cloneDate

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1, [clone.func.date, clone.func.arraySeries, clone.func.object]);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // date1 clone same object

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'date1 clone same object');
      });
    };

    var test_cloneDeep_regExp = function test_cloneDeep_regExp() {
      it('test_cloneDeep_regExp', function () {
        var regexp1 = new RegExp('^a'); // clone Deep

        var regexp2 = cloneDeep(regexp1, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep no RegExpFunction

        var regexp2 = cloneDeep(regexp1, [clone.func.objectLike]);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep no RegExpFunction in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, [clone.func.objectLike]);
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1], cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // clone Deep no RegExpFunction in Array

        var regexp2 = cloneDeep([regexp1], [clone.func.objectLike]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source);
        var regexp1 = /^a/; // clone Deep

        var regexp2 = cloneDeep(regexp1, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep no RegExpFunction

        var regexp2 = cloneDeep(regexp1, [clone.func.objectLike]);
        checkEqual(false, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep no RegExpFunction in Object

        var regexp2 = cloneDeep({
          value: regexp1
        }, [clone.func.objectLike]);
        checkEqual(false, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1], cloneDeep.func.DefaultArray());
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // clone Deep no RegExpFunction in Array

        var regexp2 = cloneDeep([regexp1], [clone.func.objectLike]);
        checkEqual(false, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(false, '^a' === regexp2[0].source); // regexp1 clone same object

        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'regexp1 clone same object');
      });
    };

    var test_cloneDeep_objectParameter = function test_cloneDeep_objectParameter() {
      it('test_cloneDeep_objectParameter', function () {
        // clone deep
        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = cloneDeep({
          source: testObject3
        }, cloneDeep.func.DefaultArray());
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a); // cloneDeep array date clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: cloneDeep.func.DefaultArray()
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // cloneDeep ignore date

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: [clone.func.arraySeries, clone.func.object]
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep add cloneDate

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: [clone.func.date, clone.func.arraySeries, clone.func.object]
        });
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(11, value1[3].getDate());
        checkEqual(false, value1[3] === value2[3]); // date1 clone same object

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep({
          source: value1,
          cloneFuncArray: cloneDeep.func.DefaultArray()
        });
        checkEqual(false, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'date1 clone same object');
      });
    };

    var test_cloneDeep_function = function test_cloneDeep_function() {
      it('test_cloneDeep_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var object1 = {
          func: testFunc1
        };
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone

        var object1 = clone({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone Deep

        var object1 = cloneDeep({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // no clone

        var array1 = [testFunc1];
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone

        var array1 = clone([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone Deep

        var array1 = cloneDeep([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());
      });
    };

    var test_cloneDeep_moment = function test_cloneDeep_moment() {// it('test_cloneDeep_moment', () => {
      //   if (parts.platform.isWindowsScriptHost()) {
      //     return;
      //   }
      //   if (parts.platform.isWebBrowser()) {
      //     return;
      //   }
      //   // moment type clone no
      //   var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
      //   var testValue1 = [1, 2, 3, moment1];
      //   var value1 = clone(testValue1);
      //   value1[3].set('year', 2018);
      //   checkEqual(true, value1[3] === testValue1[3]);
      //   checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
      //   checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
      //   // moment type cloneDeep
      //   var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
      //   var testValue1 = [1, 2, 3, moment1];
      //   // moment object fail
      //   // const cloneValue = new source.constructor();
      //   checkEqual(true,  isThrown(() => { cloneDeep(testValue1, cloneDeep.func.DefaultArray()); }));
      //   checkEqual(false, isThrown(() => { cloneDeep(testValue1); }));
      //   var value1 = cloneDeep(testValue1);
      //   value1[3].set('year', 2018);
      //   checkEqual(false, value1[3] === testValue1[3]); // clone
      //   checkEqual(true,  moment.isMoment(value1[3]));  // moment is simple clone OK
      //   checkEqual(true,  moment.isMoment(testValue1[3]));
      //   checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
      //   checkEqual('2018/10/11', testValue1[3].format('YYYY/MM/DD'));
      //   // but not correct
      //   // moment type cloneDeep moment clone function
      //   clone.func.moment = (source, bufferWrite) => {
      //     if (!moment.isMoment(source)) {
      //       return undefined;
      //     }
      //     const cloneValue = moment(source);
      //     bufferWrite(source, cloneValue);
      //     return cloneValue;
      //   };
      //   var moment1 = moment('2019/10/11', 'YYYY/MM/DD');
      //   var testValue1 = [1, 2, 3, moment1];
      //   var value1 = cloneDeep(testValue1, [
      //     cloneDeep.func.moment,
      //     ...cloneDeep.func.DefaultArray(),
      //   ]);
      //   value1[3].set('year', 2018);
      //   checkEqual(false, value1[3] === testValue1[3]); // clone
      //   checkEqual(true,  moment.isMoment(value1[3]));
      //   checkEqual(true,  moment.isMoment(testValue1[3]));
      //   checkEqual('2018/10/11', value1[3].format('YYYY/MM/DD'));
      //   checkEqual('2019/10/11', testValue1[3].format('YYYY/MM/DD'));
      // });
    };

    var test_cloneDeep_symbol = function test_cloneDeep_symbol() {
      it('test_cloneDeep_symbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true, parts.isSymbol(symbol1));
        var value1 = [symbol1];
        var value2 = cloneDeep(value1, cloneDeep.func.DefaultArray());
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(true, value1[0] === value2[0]);
        checkEqual(true, symbol1 === value2[0]);

        clone.func.forceSymbol = function (source) {
          var bufferWrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

          var __cloneDeep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
            return value;
          };

          if (!parts.isSymbol(source)) {
            return undefined;
            ;
          }

          var cloneValue = Symbol();
          bufferWrite(source, cloneValue);
          return cloneValue;
        };

        var value1 = [symbol1];
        var value2 = cloneDeep(value1, [cloneDeep.func.forceSymbol].concat(_toConsumableArray(cloneDeep.func.DefaultArray())));
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(false, value1[0] === value2[0] // cloneDeep and new symbol
        );
        checkEqual(false, symbol1 === value2[0] // cloneDeep and new symbol
        );
      });
    };

    var test_cloneDeep_map = function test_cloneDeep_map() {
      it('test_cloneDeep_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));
        checkEqual(false, parts.isObject(map1));
        checkEqual(true, parts.isObjectLike(map1));
        var map2 = clone(map1, [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.objectLike]);
        checkEqual(undefined, map2.get('key1'));
        checkEqual(false, map1 === map2);
        var map2 = cloneDeep(map1, [cloneDeep.func.date, cloneDeep.func.regExp, cloneDeep.func.ignoreFunction, cloneDeep.func.objectLike]);
        checkEqual(undefined, map2.get('key1')); // copy but no clone

        checkEqual(false, map1 === map2);
        var map2 = clone(map1, clone.func.DefaultArray());
        checkEqual('value1', map2.get('key1')); // clone

        checkEqual(false, map1 === map2);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual('value1', map2.get('key1')); // clone

        checkEqual(false, map1 === map2); // map object array

        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        map1.set('c', {
          a: [1, 2, 3, {
            b: 'c'
          }]
        });
        map1.set('d', [1, 2, 3, {
          b: 'c',
          d: [4, 5, 6]
        }]);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6, map2.get('d')[3].d[2]); // clone map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = clone(map1, clone.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(true, map1.get('a') === map2.get('a')); // cloneDeep map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1, cloneDeep.func.DefaultArray());
        checkEqual(false, map1 === map2);
        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(false, map1.get('a') === map2.get('a'));
      });
    };

    var test_cloneDeep_set = function test_cloneDeep_set() {
      it('test_cloneDeep_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true, set1.has('value1'));
        checkEqual(true, set1.has('value2'));
        checkEqual(false, set1.has('value3'));
        checkEqual(false, parts.isObject(set1));
        checkEqual(true, parts.isObjectLike(set1));
        var set2 = clone(set1, [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.objectLike]);
        checkEqual(false, set2.has('value1'));
        checkEqual(false, set1 === set2);
        var set2 = cloneDeep(set1, [clone.func.date, clone.func.regExp, clone.func.ignoreFunction, clone.func.objectLike]);
        checkEqual(false, set2.has('value1')); // no clone

        checkEqual(false, set1 === set2);
        var set2 = clone(set1, clone.func.DefaultArray());
        checkEqual(true, set2.has('value1')); // clone

        checkEqual(false, set1 === set2);
        var set2 = cloneDeep(set1, cloneDeep.func.DefaultArray());
        checkEqual(true, set2.has('value1')); // clone

        checkEqual(false, set1 === set2);
      });
    };

    var test_cloneDeep_CircularReference = function test_cloneDeep_CircularReference() {
      it('test_cloneDeep_CircularReference', function () {
        var object1 = {
          b: 'test'
        };
        object1.a = object1;
        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b);
        var object2 = cloneDeep(object1, cloneDeep.func.DefaultArray());
        checkEqual('test', object2.b);
        checkEqual('test', object2.a.b);
        checkEqual('test', object2.a.a.b);
        checkEqual(false, object1 === object2);
        checkEqual(true, object1.a === object1);
        checkEqual(true, object2.a === object2);
        checkEqual(false, object2.a === object1.a);
      });
    };

    var test_cloneDeep_Fast_object = function test_cloneDeep_Fast_object() {
      it('test_cloneDeep_Fast_object', function () {
        // clone deep
        var testObject2 = {
          a: 4,
          b: 5,
          c: 6
        };
        var testObject3 = {
          a: 1,
          b: 2,
          c: 3,
          d: testObject2
        };
        var object1 = cloneDeep(testObject3);
        object1.a = 0;
        checkEqual(0, object1.a);
        checkEqual(1, testObject3.a);
        checkEqual(true, object1.d !== testObject3.d);
        checkEqual(6, object1.d.c);
        checkEqual(6, testObject3.d.c);
        object1.d.a = 7;
        checkEqual(7, object1.d.a);
        checkEqual(4, testObject3.d.a); // object from null to object normal

        if (!parts.platform.isWindowsScriptHost()) {
          var object1 = Object.create(null);
          object1.a = Object.create(null);
          object1.a.b = 'test';
          var object2 = cloneDeep(object1);
          checkEqual(true, parts.isObjectFromNull(object1.a));
          checkEqual(true, parts.isObjectFromNull(object1));
          checkEqual(true, parts.isObjectNormal(object2.a));
          checkEqual(true, parts.isObjectNormal(object2));
          checkEqual(false, object1 === object2);
          checkEqual(false, object1.a === object2.a);
          checkEqual(true, object1.a.b === object2.a.b);
        }
      });
    };

    var test_cloneDeep_Fast_array = function test_cloneDeep_Fast_array() {
      it('test_cloneDeep_Fast_array', function () {
        // clone deep
        var testArray2 = ['a', 'b', 'c'];
        var testArray3 = [1, 2, 3, testArray2];
        var array1 = cloneDeep(testArray3);
        array1[0] = 0;
        checkEqual(0, array1[0]);
        checkEqual(1, testArray3[0]);
        checkEqual(false, array1[3] === testArray3[3]);
        array1[3][0] = 'd';
        checkEqual('d,b,c', array1[3].join(','));
        checkEqual('a,b,c', testArray3[3].join(','));
      });
    };

    var test_cloneDeep_Fast_object_array_mix = function test_cloneDeep_Fast_object_array_mix() {
      it('test_cloneDeep_Fast_object_array_mix', function () {
        // no clone deep array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = clone(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(4, testValue1[3].a); // clone deep array object

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var value1 = cloneDeep(testValue1);
        value1[0] = 0;
        checkEqual(0, value1[0]);
        checkEqual(1, testValue1[0]);
        value1[3].a = 4;
        checkEqual(4, value1[3].a);
        checkEqual(1, testValue1[3].a); // no clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = clone(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(4, testValue2.d[0]); // clone deep object array

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var value2 = cloneDeep(testValue2);
        value2.a = 0;
        checkEqual(0, value2.a);
        checkEqual(1, testValue2.a);
        value2.d[0] = 4;
        checkEqual(4, value2.d[0]);
        checkEqual(1, testValue2.d[0]); // no clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = clone(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(6, testValue1[3].c[0]); // clone deep array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var value1 = cloneDeep(testValue1);
        value1[3].c[0] = 6;
        checkEqual(6, value1[3].c[0]);
        checkEqual(3, testValue1[3].c[0]); // no clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = clone(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(7, testValue2.d[0].e); // clone deep object array object

        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var value2 = cloneDeep(testValue2);
        value2.d[0].e = 7;
        checkEqual(7, value2.d[0].e);
        checkEqual(4, testValue2.d[0].e);
      });
    };

    var test_cloneDeep_Fast_date = function test_cloneDeep_Fast_date() {
      it('test_cloneDeep_Fast_date', function () {
        // no clone
        var date1 = new Date('2019/10/11');
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(11, date1.getDate());
        date1.setDate(12);
        checkEqual(2019, date1.getFullYear());
        checkEqual(10, date1.getMonth() + 1);
        checkEqual(12, date1.getDate()); // clone array date no clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = clone(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // cloneDeep array date no clone

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1];
        var value2 = cloneDeep(value1);
        value2[3].setDate(13);
        checkEqual(13, value2[3].getDate());
        checkEqual(13, value1[3].getDate());
        checkEqual(true, value1[3] === value2[3]); // date1 clone same object

        var date1 = new Date('2019/10/11');
        var value1 = [1, 2, 3, date1, date1];
        var value2 = cloneDeep(value1);
        checkEqual(true, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'date1 clone same object');
      });
    };

    var test_cloneDeep_Fast_regExp = function test_cloneDeep_Fast_regExp() {
      it('test_cloneDeep_Fast_regExp', function () {
        var regexp1 = new RegExp('^a'); // clone Deep

        var regexp2 = cloneDeep(regexp1);
        checkEqual(true, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(true, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1]);
        checkEqual(true, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source);
        var regexp1 = /^a/; // clone Deep

        var regexp2 = cloneDeep(regexp1);
        checkEqual(true, regexp2 === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.source); // clone Deep in Object

        var regexp2 = cloneDeep({
          value: regexp1
        });
        checkEqual(true, regexp2.value === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2.value.source); // clone Deep in Array

        var regexp2 = cloneDeep([regexp1]);
        checkEqual(true, regexp2[0] === regexp1);
        checkEqual(true, '^a' === regexp1.source);
        checkEqual(true, '^a' === regexp2[0].source); // regexp1 clone same object

        var regexp1 = /^a/;
        var value1 = [1, 2, 3, regexp1, regexp1];
        var value2 = cloneDeep(value1);
        checkEqual(true, value1[3] === value2[3]);
        checkEqual(true, value1[3] === value1[4]);
        checkEqual(true, value2[3] === value2[4], 'regexp1 clone same object');
      });
    };

    var test_cloneDeep_Fast_function = function test_cloneDeep_Fast_function() {
      it('test_cloneDeep_Fast_function', function () {
        var testFunc1 = function testFunc1() {
          return 'ABC';
        }; // no clone


        var object1 = {
          func: testFunc1
        };
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone

        var object1 = clone({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // clone Deep

        var object1 = cloneDeep({
          func: testFunc1
        });
        checkEqual(true, object1.func === testFunc1);
        checkEqual('ABC', object1.func()); // no clone

        var array1 = [testFunc1];
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone

        var array1 = clone([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]()); // clone Deep

        var array1 = cloneDeep([testFunc1]);
        checkEqual(true, array1[0] === testFunc1);
        checkEqual('ABC', array1[0]());
      });
    };

    var test_cloneDeep_Fast_symbol = function test_cloneDeep_Fast_symbol() {
      it('test_cloneDeep_Fast_symbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var symbol1 = Symbol();
        checkEqual(true, parts.isSymbol(symbol1));
        var value1 = [symbol1];
        var value2 = cloneDeep(value1);
        checkEqual(true, symbol1 === value1[0]);
        checkEqual(true, value1[0] === value2[0]);
        checkEqual(true, symbol1 === value2[0]);
      });
    };

    var test_cloneDeep_Fast_map = function test_cloneDeep_Fast_map() {
      it('test_cloneDeep_Fast_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var map1 = new Map();
        map1.set('key1', 'value1');
        map1.set('key2', 'value2');
        checkEqual('value1', map1.get('key1'));
        checkEqual(false, parts.isObject(map1));
        checkEqual(true, parts.isObjectLike(map1));
        var map2 = cloneDeep(map1);
        checkEqual('value1', map2.get('key1'));
        checkEqual(true, map1 === map2); // no clone
        // map object array

        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        map1.set('c', {
          a: [1, 2, 3, {
            b: 'c'
          }]
        });
        map1.set('d', [1, 2, 3, {
          b: 'c',
          d: [4, 5, 6]
        }]);
        var map2 = cloneDeep(map1);
        checkEqual(true, map1 === map2); // no clone no copy

        checkEqual('1', map2.get('a').a);
        checkEqual('b', map2.get('b')[0]);
        checkEqual('c', map2.get('c').a[3].b);
        checkEqual(6, map2.get('d')[3].d[2]); // cloneDeep map

        var object1 = {
          a: '1'
        };
        var map1 = new Map();
        map1.set('a', object1);
        var map2 = cloneDeep(map1);
        checkEqual(true, map1 === map2); // no clone no copy

        checkEqual('1', map1.get('a').a);
        checkEqual('1', map2.get('a').a);
        checkEqual(true, map1.get('a') === map2.get('a'));
      });
    };

    var test_cloneDeep_Fast_set = function test_cloneDeep_Fast_set() {
      it('test_cloneDeep_Fast_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var set1 = new Set();
        set1.add('value1');
        set1.add('value2');
        checkEqual(true, set1.has('value1'));
        checkEqual(true, set1.has('value2'));
        checkEqual(false, set1.has('value3'));
        checkEqual(false, parts.isObject(set1));
        checkEqual(true, parts.isObjectLike(set1));
        var set2 = cloneDeep(set1);
        checkEqual(true, set2.has('value1')); // no copy no clone

        checkEqual(true, set1 === set2);
      });
    };

    var test_cloneDeep_Fast_CircularReference = function test_cloneDeep_Fast_CircularReference() {
      it('test_cloneDeep_Fast_CircularReference', function () {
        var object1 = {
          b: 'test'
        };
        object1.a = object1;
        checkEqual('test', object1.b);
        checkEqual('test', object1.a.b);
        checkEqual('test', object1.a.a.b); // thread 'main' has overflowed its stack
        // const object2 = cloneDeep(object1);
      });
    };

    var test_merge = function test_merge() {
      it('test_merge', function () {
        // object
        var testObjectArray = [{
          key1: 100,
          key2: 200,
          key3: 300
        }, {
          key1: 100,
          key2: 150,
          key3: 100
        }, {
          key1: 100,
          key3: 200,
          key4: 100
        }];
        checkEqual({
          key1: 100,
          key2: 150,
          key3: 200,
          key4: 100
        }, merge({}, testObjectArray));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, testObjectArray, function (source, target) {
          return source + target;
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({}, testObjectArray, function (source, target) {
          return isUndefined(source) ? target : source + target;
        }));
        checkEqual({
          key1: [3, 300],
          key2: [2, 350],
          key3: [3, 600],
          key4: [1, 100]
        }, merge({
          key1: [0, 0],
          key2: [0, 0],
          key3: [0, 0],
          key4: [0, 0]
        }, testObjectArray, function (source, target) {
          return [source[0] + 1, source[1] + target];
        }));
        checkEqual({
          key1: [3, 300],
          key2: [2, 350],
          key3: [3, 600],
          key4: [1, 100]
        }, merge({}, testObjectArray, function (source, target) {
          return isUndefined(source) ? [1, target] : [source[0] + 1, source[1] + target];
        }));
        checkEqual({
          key1: 100,
          key2: 175,
          key3: 200,
          key4: 100
        }, objectFromEntries(map(objectEntries(merge({
          key1: [0, 0],
          key2: [0, 0],
          key3: [0, 0],
          key4: [0, 0]
        }, testObjectArray, function (source, target) {
          return [source[0] + 1, source[1] + target];
        })), function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return [key, value[1] / value[0]];
        }))); // deep merge

        var names = {
          'characters': [{
            'name': 'Haru39'
          }, {
            'name': 'yutapon'
          }]
        };
        var ages = {
          'characters': [{
            'age': 26
          }, {
            'age': 18
          }]
        };
        checkEqual({
          characters: [{
            age: 26,
            name: 'Haru39'
          }, {
            age: 18,
            name: 'yutapon'
          }]
        }, merge({}, [names, ages])); // array

        var testArrayArray = [[100, 200, 300], [100, 150, 100], [100,, 200, 100]];
        checkEqual([100, 150, 200, 100], merge([], testArrayArray));
        checkEqual([300, 350, 600, 100], merge([], testArrayArray, function (source, target) {
          if (isUndefined(target)) {
            return;
          }

          return isUndefined(source) ? target : source + target;
        }));
        checkEqual([[3, 300], [2, 350], [3, 600], [1, 100]], merge([[0, 0], [0, 0], [0, 0], [0, 0]], testArrayArray, function (source, target) {
          if (isUndefined(target)) {
            return;
          }

          return [source[0] + 1, source[1] + target];
        }));
        checkEqual([[3, 300], [2, 350], [3, 600], [1, 100]], merge([], testArrayArray, function (source, target) {
          if (isUndefined(target)) {
            return;
          }

          return isUndefined(source) ? [1, target] : [source[0] + 1, source[1] + target];
        })); // object parameter

        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          source: {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          },
          targetArray: testObjectArray,
          func: function func(source, target) {
            return source + target;
          }
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, {
          targetArray: testObjectArray,
          func: function func(source, target) {
            return source + target;
          }
        }));
        checkEqual({
          key1: 300,
          key2: 350,
          key3: 600,
          key4: 100
        }, merge({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, testObjectArray, {
          func: function func(source, target) {
            return source + target;
          }
        })); // exception

        checkEqual({
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }, merge({}, [{
          key1: 0,
          key2: 0,
          key3: 0,
          key4: 0
        }], function (source, target) {
          return target;
        }));
        checkEqual(false, isThrown(function () {
          merge({}, [{
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }], function (source, target) {
            return target;
          });
        }));
        checkEqual(true, isThrown(function () {
          merge({}, ['123'], function (source, target) {
            return target;
          });
        }));
        checkEqual(true, isThrown(function () {
          merge({}, [{
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }], 123);
        }));
        checkEqual(true, isThrown(function () {
          merge(123, [{
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0
          }], function (source, target) {
            return target;
          });
        }));
      });
    };

    var setProperty = parts.setProperty,
        recursive = parts.recursive;

    var cloneDeepUseRecursive = function cloneDeepUseRecursive(source) {
      var result;

      if (isObject(source)) {
        result = {};
      } else if (isArray(source)) {
        result = [];
      } else {
        return source;
      }

      recursive(source, function (value, key, level, path) {
        if (isObject(value)) {
          setProperty(result, path + '.' + key, {});
          return value;
        } else if (isArray(value)) {
          setProperty(result, path + '.' + key, []);
          return value;
        } else {
          setProperty(result, path + '.' + key, value);
        }
      });
      return result;
    };

    test_clone_object();
    test_clone_array();
    test_clone_date();
    test_clone_function();
    test_clone_regexp();
    test_clone_objectParameter();
    test_clone_Fast_object();
    test_clone_Fast_array();
    test_clone_Fast_date();
    test_clone_Fast_function();
    test_clone_Fast_regexp();
    var cloneDeep;
    cloneDeep = parts.common.cloneDeep;
    test_cloneDeep_object();
    test_cloneDeep_array();
    test_cloneDeep_object_array_mix();
    test_cloneDeep_date();
    test_cloneDeep_regExp();
    test_cloneDeep_objectParameter();
    test_cloneDeep_function();
    test_cloneDeep_moment();
    test_cloneDeep_symbol();
    test_cloneDeep_map();
    test_cloneDeep_set();
    test_cloneDeep_CircularReference();
    cloneDeep = cloneDeepUseRecursive;
    test_cloneDeep_Fast_object();
    test_cloneDeep_Fast_array();
    test_cloneDeep_Fast_object_array_mix();
    test_cloneDeep_Fast_date();
    test_cloneDeep_Fast_regExp();
    test_cloneDeep_Fast_function();
    test_cloneDeep_Fast_symbol();
    test_cloneDeep_Fast_map();
    test_cloneDeep_Fast_set();
    test_cloneDeep_Fast_CircularReference();
    cloneDeep = parts.common.cloneDeep;
    test_cloneDeep_Fast_object();
    test_cloneDeep_Fast_array();
    test_cloneDeep_Fast_object_array_mix();
    test_cloneDeep_Fast_date();
    test_cloneDeep_Fast_regExp();
    test_cloneDeep_Fast_function();
    test_cloneDeep_Fast_symbol();
    test_cloneDeep_Fast_map();
    test_cloneDeep_Fast_set();
    test_cloneDeep_Fast_CircularReference();
    test_merge();
  });
};

exports.test_execute_common = test_execute_common;
var _default = {
  test_execute_common: test_execute_common
};
exports["default"] = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_type = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable new-cap */

/* eslint-disable no-array-constructor */

/* eslint-disable no-new-object */

/* eslint-disable no-new-wrappers */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_type = function test_execute_type(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_type', function () {
    var isThrown = parts.test.isThrown;
    var _parts$type = parts.type,
        typeName = _parts$type.typeName,
        isPrimitiveType = _parts$type.isPrimitiveType,
        isReferenceType = _parts$type.isReferenceType,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull,
        isNaNStrict = _parts$type.isNaNStrict,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isObjectNormal = _parts$type.isObjectNormal,
        isObjectFromNull = _parts$type.isObjectFromNull,
        isObjectLike = _parts$type.isObjectLike,
        isArray = _parts$type.isArray,
        isArraySeries = _parts$type.isArraySeries,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isBooleanObject = _parts$type.isBooleanObject,
        isNumberObject = _parts$type.isNumberObject,
        isStringObject = _parts$type.isStringObject,
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
        isSymbol = _parts$type.isSymbol,
        isMap = _parts$type.isMap,
        isWeakMap = _parts$type.isWeakMap,
        isSet = _parts$type.isSet,
        isWeakSet = _parts$type.isWeakSet,
        isNotUndefined = _parts$type.isNotUndefined,
        isNotNull = _parts$type.isNotNull,
        isNotNaNStrict = _parts$type.isNotNaNStrict,
        isNotBoolean = _parts$type.isNotBoolean,
        isNotNumber = _parts$type.isNotNumber,
        isNotInteger = _parts$type.isNotInteger,
        isNotString = _parts$type.isNotString,
        isNotFunction = _parts$type.isNotFunction,
        isNotObject = _parts$type.isNotObject,
        isNotObjectNormal = _parts$type.isNotObjectNormal,
        isNotObjectFromNull = _parts$type.isNotObjectFromNull,
        isNotObjectType = _parts$type.isNotObjectType,
        isNotArray = _parts$type.isNotArray,
        isNotArrayType = _parts$type.isNotArrayType,
        isNotDate = _parts$type.isNotDate,
        isNotRegExp = _parts$type.isNotRegExp,
        isNotException = _parts$type.isNotException,
        isNotBooleanObject = _parts$type.isNotBooleanObject,
        isNotNumberObject = _parts$type.isNotNumberObject,
        isNotStringObject = _parts$type.isNotStringObject,
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray,
        isNotSymbol = _parts$type.isNotSymbol,
        isNotMap = _parts$type.isNotMap,
        isNotWeakMap = _parts$type.isNotWeakMap,
        isNotSet = _parts$type.isNotSet,
        isNotWeakSet = _parts$type.isNotWeakSet,
        isUndefinedAll = _parts$type.isUndefinedAll,
        isNullAll = _parts$type.isNullAll,
        isNaNStrictAll = _parts$type.isNaNStrictAll,
        isBooleanAll = _parts$type.isBooleanAll,
        isNumberAll = _parts$type.isNumberAll,
        isIntegerAll = _parts$type.isIntegerAll,
        isStringAll = _parts$type.isStringAll,
        isFunctionAll = _parts$type.isFunctionAll,
        isObjectAll = _parts$type.isObjectAll,
        isObjectNormalAll = _parts$type.isObjectNormalAll,
        isObjectFromNullAll = _parts$type.isObjectFromNullAll,
        isObjectLikeAll = _parts$type.isObjectLikeAll,
        isArrayAll = _parts$type.isArrayAll,
        isArraySeriesAll = _parts$type.isArraySeriesAll,
        isDateAll = _parts$type.isDateAll,
        isRegExpAll = _parts$type.isRegExpAll,
        isExceptionAll = _parts$type.isExceptionAll,
        isBooleanObjectAll = _parts$type.isBooleanObjectAll,
        isNumberObjectAll = _parts$type.isNumberObjectAll,
        isStringObjectAll = _parts$type.isStringObjectAll,
        isEmptyObjectAll = _parts$type.isEmptyObjectAll,
        isEmptyArrayAll = _parts$type.isEmptyArrayAll,
        isSymbolAll = _parts$type.isSymbolAll,
        isMapAll = _parts$type.isMapAll,
        isWeakMapAll = _parts$type.isWeakMapAll,
        isSetAll = _parts$type.isSetAll,
        isWeakSetAll = _parts$type.isWeakSetAll,
        isNotUndefinedAll = _parts$type.isNotUndefinedAll,
        isNotNullAll = _parts$type.isNotNullAll,
        isNotNaNStrictAll = _parts$type.isNotNaNStrictAll,
        isNotBooleanAll = _parts$type.isNotBooleanAll,
        isNotNumberAll = _parts$type.isNotNumberAll,
        isNotIntegerAll = _parts$type.isNotIntegerAll,
        isNotStringAll = _parts$type.isNotStringAll,
        isNotFunctionAll = _parts$type.isNotFunctionAll,
        isNotObjectAll = _parts$type.isNotObjectAll,
        isNotObjectNormalAll = _parts$type.isNotObjectNormalAll,
        isNotObjectFromNullAll = _parts$type.isNotObjectFromNullAll,
        isNotObjectTypeAll = _parts$type.isNotObjectTypeAll,
        isNotArrayAll = _parts$type.isNotArrayAll,
        isNotArrayTypeAll = _parts$type.isNotArrayTypeAll,
        isNotDateAll = _parts$type.isNotDateAll,
        isNotRegExpAll = _parts$type.isNotRegExpAll,
        isNotExceptionAll = _parts$type.isNotExceptionAll,
        isNotBooleanObjectAll = _parts$type.isNotBooleanObjectAll,
        isNotNumberObjectAll = _parts$type.isNotNumberObjectAll,
        isNotStringObjectAll = _parts$type.isNotStringObjectAll,
        isNotEmptyObjectAll = _parts$type.isNotEmptyObjectAll,
        isNotEmptyArrayAll = _parts$type.isNotEmptyArrayAll,
        isNotSymbolAll = _parts$type.isNotSymbolAll,
        isNotMapAll = _parts$type.isNotMapAll,
        isNotWeakMapAll = _parts$type.isNotWeakMapAll,
        isNotSetAll = _parts$type.isNotSetAll,
        isNotWeakSetAll = _parts$type.isNotWeakSetAll,
        isUndefinedArray = _parts$type.isUndefinedArray,
        isNullArray = _parts$type.isNullArray,
        isNaNStrictArray = _parts$type.isNaNStrictArray,
        isBooleanArray = _parts$type.isBooleanArray,
        isNumberArray = _parts$type.isNumberArray,
        isIntegerArray = _parts$type.isIntegerArray,
        isStringArray = _parts$type.isStringArray,
        isFunctionArray = _parts$type.isFunctionArray,
        isObjectArray = _parts$type.isObjectArray,
        isObjectNormalArray = _parts$type.isObjectNormalArray,
        isObjectFromNullArray = _parts$type.isObjectFromNullArray,
        isObjectLikeArray = _parts$type.isObjectLikeArray,
        isArrayArray = _parts$type.isArrayArray,
        isArraySeriesArray = _parts$type.isArraySeriesArray,
        isDateArray = _parts$type.isDateArray,
        isRegExpArray = _parts$type.isRegExpArray,
        isExceptionArray = _parts$type.isExceptionArray,
        isBooleanObjectArray = _parts$type.isBooleanObjectArray,
        isNumberObjectArray = _parts$type.isNumberObjectArray,
        isStringObjectArray = _parts$type.isStringObjectArray,
        isEmptyObjectArray = _parts$type.isEmptyObjectArray,
        isEmptyArrayArray = _parts$type.isEmptyArrayArray,
        isSymbolArray = _parts$type.isSymbolArray,
        isMapArray = _parts$type.isMapArray,
        isWeakMapArray = _parts$type.isWeakMapArray,
        isSetArray = _parts$type.isSetArray,
        isWeakSetArray = _parts$type.isWeakSetArray,
        isNotUndefinedArray = _parts$type.isNotUndefinedArray,
        isNotNullArray = _parts$type.isNotNullArray,
        isNotNaNStrictArray = _parts$type.isNotNaNStrictArray,
        isNotBooleanArray = _parts$type.isNotBooleanArray,
        isNotNumberArray = _parts$type.isNotNumberArray,
        isNotIntegerArray = _parts$type.isNotIntegerArray,
        isNotStringArray = _parts$type.isNotStringArray,
        isNotFunctionArray = _parts$type.isNotFunctionArray,
        isNotObjectArray = _parts$type.isNotObjectArray,
        isNotObjectNormalArray = _parts$type.isNotObjectNormalArray,
        isNotObjectFromNullArray = _parts$type.isNotObjectFromNullArray,
        isNotObjectTypeArray = _parts$type.isNotObjectTypeArray,
        isNotArrayArray = _parts$type.isNotArrayArray,
        isNotArrayTypeArray = _parts$type.isNotArrayTypeArray,
        isNotDateArray = _parts$type.isNotDateArray,
        isNotRegExpArray = _parts$type.isNotRegExpArray,
        isNotExceptionArray = _parts$type.isNotExceptionArray,
        isNotBooleanObjectArray = _parts$type.isNotBooleanObjectArray,
        isNotNumberObjectArray = _parts$type.isNotNumberObjectArray,
        isNotStringObjectArray = _parts$type.isNotStringObjectArray,
        isNotEmptyObjectArray = _parts$type.isNotEmptyObjectArray,
        isNotEmptyArrayArray = _parts$type.isNotEmptyArrayArray,
        isNotSymbolArray = _parts$type.isNotSymbolArray,
        isNotMapArray = _parts$type.isNotMapArray,
        isNotWeakMapArray = _parts$type.isNotWeakMapArray,
        isNotSetArray = _parts$type.isNotSetArray,
        isNotWeakSetArray = _parts$type.isNotWeakSetArray;
    var allMatchSome = parts.compare.allMatchSome;
    var objectToString = parts.objectToString;

    var test_checkType = function test_checkType() {
      it('test_checkType', function () {
        var checkType = function checkType(typeofName, objectStringName, value) {
          checkEqual(typeofName, _typeof(value)); // checkEqual(true, parts.includes(objectStringName, objectToString(value)));

          checkEqual(objectStringName, objectToString(value));
        };

        if (parts.platform.isWindowsScriptHost()) {
          checkType('undefined', '[object Object]', undefined);
          checkType('object', '[object Object]', null);
        } else if (parts.platform.isGasRhino()) {
          checkType('undefined', '[object Object]', undefined);
          checkType('object', '[object Object]', null); // bad specification
        } else {
          checkType('undefined', '[object Undefined]', undefined);
          checkType('object', '[object Null]', null); // bad specification
        }

        checkType('boolean', '[object Boolean]', true);
        checkType('boolean', '[object Boolean]', false);
        checkType('object', '[object Boolean]', new Boolean());
        checkType('number', '[object Number]', 1);
        checkType('number', '[object Number]', NaN);
        checkType('number', '[object Number]', Infinity);
        checkType('object', '[object Number]', new Number(1));
        checkType('object', '[object Number]', new Number(NaN));
        checkType('object', '[object Number]', new Number(Infinity));
        checkType('object', '[object Number]', new Number(null));
        checkType('object', '[object Number]', new Number(undefined));
        checkType('string', '[object String]', '');
        checkType('string', '[object String]', '1');
        checkType('object', '[object String]', new String(''));
        checkType('object', '[object String]', new String('1'));
        checkType('object', '[object String]', new String(null));
        checkType('object', '[object String]', new String(undefined));

        function testFunc() {}

        checkType('function', '[object Function]', testFunc);
        checkType('function', '[object Function]', function () {});
        checkType('function', '[object Function]', function () {});
        checkType('object', '[object Object]', {});
        checkType('object', '[object Object]', new Object());
        checkType('object', '[object Array]', []);
        checkType('object', '[object Array]', new Array());
        checkType('object', '[object RegExp]', /^a/);
        checkType('object', '[object RegExp]', new RegExp('^a'));
        checkType('object', '[object Date]', new Date());
        checkType('object', '[object Math]', Math);

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            BigInt(100);
          }));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, isThrown(function () {
            BigInt(100);
          }));
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, isThrown(function () {
            BigInt(100);
          }));
        } else {
          // checkType('bigint',       '[object BigInt]', 100n);
          //  BigInt[n](for example 999n), it is compile error for wsh
          checkType('bigint', '[object BigInt]', BigInt(100));
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            JSON.stringify({});
          }));
        } else {
          checkType('object', '[object JSON]', JSON);
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            new Int8Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint8Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint8ClampedArray();
          }));
          checkEqual(true, isThrown(function () {
            new Int16Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint16Array();
          }));
          checkEqual(true, isThrown(function () {
            new Int32Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint32Array();
          }));
          checkEqual(true, isThrown(function () {
            new Float32Array();
          }));
          checkEqual(true, isThrown(function () {
            new Float64Array();
          }));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, isThrown(function () {
            new Int8Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint8Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint8ClampedArray();
          }));
          checkEqual(true, isThrown(function () {
            new Int16Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint16Array();
          }));
          checkEqual(true, isThrown(function () {
            new Int32Array();
          }));
          checkEqual(true, isThrown(function () {
            new Uint32Array();
          }));
          checkEqual(true, isThrown(function () {
            new Float32Array();
          }));
          checkEqual(true, isThrown(function () {
            new Float64Array();
          }));
        } else {
          checkType('object', '[object Int8Array]', new Int8Array());
          checkType('object', '[object Uint8Array]', new Uint8Array());
          checkType('object', '[object Uint8ClampedArray]', new Uint8ClampedArray());
          checkType('object', '[object Int16Array]', new Int16Array());
          checkType('object', '[object Uint16Array]', new Uint16Array());
          checkType('object', '[object Int32Array]', new Int32Array());
          checkType('object', '[object Uint32Array]', new Uint32Array());
          checkType('object', '[object Float32Array]', new Float32Array());
          checkType('object', '[object Float64Array]', new Float64Array());
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            new Map();
          }));
          checkEqual(true, isThrown(function () {
            new WeakMap();
          }));
          checkEqual(true, isThrown(function () {
            new Set();
          }));
          checkEqual(true, isThrown(function () {
            new WeakSet();
          }));
          checkEqual(true, isThrown(function () {
            Symbol();
          }));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, isThrown(function () {
            new Map();
          }));
          checkEqual(true, isThrown(function () {
            new WeakMap();
          }));
          checkEqual(true, isThrown(function () {
            new Set();
          }));
          checkEqual(true, isThrown(function () {
            new WeakSet();
          }));
          checkEqual(true, isThrown(function () {
            Symbol();
          }));
        } else if (parts.platform.isInternetExplorer()) {
          checkType('object', '[object Object]', new Map());
          checkType('object', '[object Object]', new WeakMap());
          checkType('object', '[object Object]', new Set());
        } else {
          checkType('object', '[object Map]', new Map());
          checkType('object', '[object WeakMap]', new WeakMap());
          checkType('object', '[object Set]', new Set());
          checkType('object', '[object WeakSet]', new WeakSet());
          checkType('symbol', '[object Symbol]', Symbol());
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            new ArrayBuffer(8);
          }));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, isThrown(function () {
            new ArrayBuffer(8);
          }));
        } else {
          checkType('object', '[object ArrayBuffer]', new ArrayBuffer(8));
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            new SharedArrayBuffer(8);
          }));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, isThrown(function () {
            new SharedArrayBuffer(8);
          }));
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, isThrown(function () {
            new SharedArrayBuffer(8);
          }));
        } else if (parts.platform.isFirefox()) {
          checkEqual(true, isThrown(function () {
            new SharedArrayBuffer(8);
          }));
        } else {
          checkType('object', '[object SharedArrayBuffer]', new SharedArrayBuffer(8));
          checkType('object', '[object Atomics]', Atomics);
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            new DataView();
          }));
          checkEqual(true, isThrown(function () {
            new Promise();
          }));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, isThrown(function () {
            new DataView();
          }));
          checkEqual(true, isThrown(function () {
            new Promise();
          }));
        } else if (parts.platform.isInternetExplorer()) {
          checkType('object', '[object Object]', new DataView(new ArrayBuffer(16)));
        } else {
          checkType('object', '[object DataView]', new DataView(new ArrayBuffer(16)));
          checkType('function', '[object Function]', Promise);
        }

        if (parts.platform.isDeno()) {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return 1;

                  case 2:
                    _context.next = 4;
                    return 2;

                  case 4:
                    _context.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2);
          }))).constructor;
          checkType('object', '[object Generator]', Generator());
          checkType('function', '[object GeneratorFunction]', new GeneratorFunction());
          checkType('function', '[object AsyncFunction]', new AsyncFunction());
        } // Proxy


        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isThrown(function () {
            new Proxy({}, {});
          }));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, isThrown(function () {
            new Proxy({}, {});
          }));
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, isThrown(function () {
            new Proxy({}, {});
          }));
        } else {
          checkType('object', '[object Object]', new Proxy({}, {}));
        } // WebAssembly


        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, typeof WebAssembly === 'undefined');
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, typeof WebAssembly === 'undefined');
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, typeof WebAssembly === 'undefined');
        } else if (parts.platform.isFirefox()) {
          checkType('object', '[object Object]', WebAssembly);
        } else {
          checkType('object', '[object WebAssembly]', WebAssembly);
        } // Reflect


        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, typeof Reflect === 'undefined');
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, typeof Reflect === 'undefined');
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, typeof Reflect === 'undefined');
        } else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkType('object', '[object Reflect]', Reflect);
        } else {
          checkType('object', '[object Object]', Reflect);
        } // Intl


        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(true, typeof Intl === 'undefined');
        } else if (parts.platform.isGasRhino()) {
          checkEqual(true, typeof Intl === 'undefined');
        } else if (parts.platform.isDeno()) {
          checkEqual(true, typeof Intl === 'undefined');
        } else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkType('object', '[object Intl]', Intl);
        } else {
          checkType('object', '[object Object]', Intl);
        }
      });
    };

    var test_typeName = function test_typeName() {
      it('test_typeName', function () {
        checkEqual('Undefined', typeName(undefined));
        checkEqual('Null', typeName(null));
        checkEqual('Boolean', typeName(true));
        checkEqual('Boolean', typeName(false));
        checkEqual('BooleanObject', typeName(new Boolean()));
        checkEqual('Number', typeName(1));
        checkEqual('NaN', typeName(NaN));
        checkEqual('Infinity', typeName(Infinity));
        checkEqual('Infinity', typeName(-Infinity));
        checkEqual('Infinity', typeName(Infinity / 2));
        checkEqual('NaN', typeName(Infinity / Infinity));
        checkEqual('NumberObject', typeName(new Number(0)));
        checkEqual('NumberObject', typeName(new Number(1)));
        checkEqual('NumberObject', typeName(new Number(NaN)));
        checkEqual('NumberObject', typeName(new Number(Infinity)));
        checkEqual('NumberObject', typeName(new Number(-Infinity)));
        checkEqual('NumberObject', typeName(new Number('')));
        checkEqual('NumberObject', typeName(new Number('0')));
        checkEqual('NumberObject', typeName(new Number('1')));
        checkEqual('NumberObject', typeName(new Number(null)));
        checkEqual('NumberObject', typeName(new Number()));
        checkEqual('String', typeName(''));
        checkEqual('String', typeName('a'));
        checkEqual('StringObject', typeName(new String('')));
        checkEqual('StringObject', typeName(new String('a')));
        checkEqual('StringObject', typeName(new String(1)));
        checkEqual('StringObject', typeName(new String(null)));
        checkEqual('StringObject', typeName(new String()));
        checkEqual('Object', typeName({}));
        checkEqual('Object', typeName(new Object()));
        checkEqual('Object', typeName(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('Object', typeName(Object.create({})));
          checkEqual('Object', typeName(Object.create({
            a: 'A'
          })));
          checkEqual('ObjectFromNull', typeName(Object.create(null)));
        }

        function testFunc() {}

        checkEqual('Function', typeName(testFunc));
        checkEqual('Function', typeName(function () {}));
        checkEqual('Function', typeName(function () {}));
        checkEqual('Array', typeName([]));
        checkEqual('Array', typeName([0, 1, 2]));
        checkEqual('Array', typeName(new Array()));
        checkEqual('RegExp', typeName(/^a/));
        checkEqual('RegExp', typeName(new RegExp('^a')));
        checkEqual('Date', typeName(new Date()));
        checkEqual('Math', typeName(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual('JSON', typeName(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual('Int8Array', typeName(new Int8Array()));
          checkEqual('Uint8Array', typeName(new Uint8Array()));
          checkEqual('Uint8ClampedArray', typeName(new Uint8ClampedArray()));
          checkEqual('Int16Array', typeName(new Int16Array()));
          checkEqual('Uint16Array', typeName(new Uint16Array()));
          checkEqual('Int32Array', typeName(new Int32Array()));
          checkEqual('Uint32Array', typeName(new Uint32Array()));
          checkEqual('Float32Array', typeName(new Float32Array()));
          checkEqual('Float64Array', typeName(new Float64Array()));
          checkEqual('ArrayBuffer', typeName(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual('Map', typeName(new Map()));
          checkEqual('WeakMap', typeName(new WeakMap()));
          checkEqual('Set', typeName(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual('WeakSet', typeName(new WeakSet()));
          checkEqual('Symbol', typeName(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual('SharedArrayBuffer', typeName(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual('Atomics', typeName(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual('Object', typeName(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual('DataView', typeName(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual('Function', typeName(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return 1;

                  case 2:
                    _context4.next = 4;
                    return 2;

                  case 4:
                    _context4.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee3);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee4);
          }))).constructor;
          checkEqual('Generator', typeName(Generator()));
          checkEqual('GeneratorFunction', typeName(new GeneratorFunction()));
          checkEqual('AsyncFunction', typeName(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual('Object', typeName(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual('Object', typeName(WebAssembly));
        } else {
          checkEqual('WebAssembly', typeName(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual('Reflect', typeName(Reflect));
        } else {
          checkEqual('Object', typeName(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual('Intl', typeName(Intl));
        } else {
          checkEqual('Object', typeName(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual('Module', typeName(parts));
        }
      });
    };

    var test_isObjectLike2 = function test_isObjectLike2() {
      it('test_isObjectLike2', function () {
        checkEqual(false, isObjectLike(undefined));
        checkEqual(false, isObjectLike(null));
        checkEqual(false, isObjectLike(true));
        checkEqual(false, isObjectLike(false));
        checkEqual(true, isObjectLike(new Boolean()));
        checkEqual(false, isObjectLike(1));
        checkEqual(false, isObjectLike(NaN));
        checkEqual(false, isObjectLike(Infinity));
        checkEqual(false, isObjectLike(-Infinity));
        checkEqual(false, isObjectLike(Infinity / 2));
        checkEqual(false, isObjectLike(Infinity / Infinity));
        checkEqual(true, isObjectLike(new Number(0)));
        checkEqual(true, isObjectLike(new Number(1)));
        checkEqual(true, isObjectLike(new Number(NaN)));
        checkEqual(true, isObjectLike(new Number(Infinity)));
        checkEqual(true, isObjectLike(new Number(-Infinity)));
        checkEqual(true, isObjectLike(new Number('')));
        checkEqual(true, isObjectLike(new Number('0')));
        checkEqual(true, isObjectLike(new Number('1')));
        checkEqual(true, isObjectLike(new Number(null)));
        checkEqual(true, isObjectLike(new Number()));
        checkEqual(false, isObjectLike(''));
        checkEqual(false, isObjectLike('a'));
        checkEqual(true, isObjectLike(new String('')));
        checkEqual(true, isObjectLike(new String('a')));
        checkEqual(true, isObjectLike(new String(1)));
        checkEqual(true, isObjectLike(new String(null)));
        checkEqual(true, isObjectLike(new String()));
        checkEqual(true, isObjectLike({}));
        checkEqual(true, isObjectLike(new Object()));
        checkEqual(true, isObjectLike(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObjectLike(Object.create({})));
          checkEqual(true, isObjectLike(Object.create({
            a: 'A'
          })));
          checkEqual(true, isObjectLike(Object.create(null)));
        }

        function testFunc() {}

        checkEqual(true, isObjectLike(testFunc));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike([]));
        checkEqual(true, isObjectLike([0, 1, 2]));
        checkEqual(true, isObjectLike(new Array()));
        checkEqual(true, isObjectLike(/^a/));
        checkEqual(true, isObjectLike(new RegExp('^a')));
        checkEqual(true, isObjectLike(new Date()));
        checkEqual(true, isObjectLike(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual(true, isObjectLike(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isObjectLike(new Int8Array()));
          checkEqual(true, isObjectLike(new Uint8Array()));
          checkEqual(true, isObjectLike(new Uint8ClampedArray()));
          checkEqual(true, isObjectLike(new Int16Array()));
          checkEqual(true, isObjectLike(new Uint16Array()));
          checkEqual(true, isObjectLike(new Int32Array()));
          checkEqual(true, isObjectLike(new Uint32Array()));
          checkEqual(true, isObjectLike(new Float32Array()));
          checkEqual(true, isObjectLike(new Float64Array()));
          checkEqual(true, isObjectLike(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isObjectLike(new Map()));
          checkEqual(true, isObjectLike(new WeakMap()));
          checkEqual(true, isObjectLike(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isObjectLike(new WeakSet()));
          checkEqual(false, isObjectLike(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isObjectLike(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isObjectLike(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, isObjectLike(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(true, isObjectLike(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isObjectLike(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return 1;

                  case 2:
                    _context7.next = 4;
                    return 2;

                  case 4:
                    _context7.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee5);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee6);
          }))).constructor;
          checkEqual(true, isObjectLike(Generator()));
          checkEqual(true, isObjectLike(new GeneratorFunction()));
          checkEqual(true, isObjectLike(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isObjectLike(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual(true, isObjectLike(WebAssembly));
        } else {
          checkEqual(true, isObjectLike(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isObjectLike(Reflect));
        } else {
          checkEqual(true, isObjectLike(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isObjectLike(Intl));
        } else {
          checkEqual(true, isObjectLike(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(true, isObjectLike(parts));
        }
      });
    };

    var test_isPrimitiveType = function test_isPrimitiveType() {
      it('test_isPrimitiveType', function () {
        checkEqual(true, isPrimitiveType(undefined));
        checkEqual(true, isPrimitiveType(null));
        checkEqual(true, isPrimitiveType(true));
        checkEqual(true, isPrimitiveType(false));
        checkEqual(false, isPrimitiveType(new Boolean()));
        checkEqual(true, isPrimitiveType(1));
        checkEqual(true, isPrimitiveType(NaN));
        checkEqual(true, isPrimitiveType(Infinity));
        checkEqual(true, isPrimitiveType(-Infinity));
        checkEqual(true, isPrimitiveType(Infinity / 2));
        checkEqual(true, isPrimitiveType(Infinity / Infinity));
        checkEqual(false, isPrimitiveType(new Number(0)));
        checkEqual(false, isPrimitiveType(new Number(1)));
        checkEqual(false, isPrimitiveType(new Number(NaN)));
        checkEqual(false, isPrimitiveType(new Number(Infinity)));
        checkEqual(false, isPrimitiveType(new Number(-Infinity)));
        checkEqual(false, isPrimitiveType(new Number('')));
        checkEqual(false, isPrimitiveType(new Number('0')));
        checkEqual(false, isPrimitiveType(new Number('1')));
        checkEqual(false, isPrimitiveType(new Number(null)));
        checkEqual(false, isPrimitiveType(new Number()));
        checkEqual(true, isPrimitiveType(''));
        checkEqual(true, isPrimitiveType('a'));
        checkEqual(false, isPrimitiveType(new String('')));
        checkEqual(false, isPrimitiveType(new String('a')));
        checkEqual(false, isPrimitiveType(new String(1)));
        checkEqual(false, isPrimitiveType(new String(null)));
        checkEqual(false, isPrimitiveType(new String()));
        checkEqual(false, isPrimitiveType({}));
        checkEqual(false, isPrimitiveType(new Object()));
        checkEqual(false, isPrimitiveType(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isPrimitiveType(Object.create({})));
          checkEqual(false, isPrimitiveType(Object.create({
            a: 'A'
          })));
          checkEqual(false, isPrimitiveType(Object.create(null)));
        }

        function testFunc() {}

        checkEqual(false, isPrimitiveType(testFunc));
        checkEqual(false, isPrimitiveType(function () {}));
        checkEqual(false, isPrimitiveType(function () {}));
        checkEqual(false, isPrimitiveType([]));
        checkEqual(false, isPrimitiveType([0, 1, 2]));
        checkEqual(false, isPrimitiveType(new Array()));
        checkEqual(false, isPrimitiveType(/^a/));
        checkEqual(false, isPrimitiveType(new RegExp('^a')));
        checkEqual(false, isPrimitiveType(new Date()));
        checkEqual(false, isPrimitiveType(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual(false, isPrimitiveType(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(false, isPrimitiveType(new Int8Array()));
          checkEqual(false, isPrimitiveType(new Uint8Array()));
          checkEqual(false, isPrimitiveType(new Uint8ClampedArray()));
          checkEqual(false, isPrimitiveType(new Int16Array()));
          checkEqual(false, isPrimitiveType(new Uint16Array()));
          checkEqual(false, isPrimitiveType(new Int32Array()));
          checkEqual(false, isPrimitiveType(new Uint32Array()));
          checkEqual(false, isPrimitiveType(new Float32Array()));
          checkEqual(false, isPrimitiveType(new Float64Array()));
          checkEqual(false, isPrimitiveType(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(false, isPrimitiveType(new Map()));
          checkEqual(false, isPrimitiveType(new WeakMap()));
          checkEqual(false, isPrimitiveType(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(false, isPrimitiveType(new WeakSet()));
          checkEqual(true, isPrimitiveType(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(false, isPrimitiveType(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(false, isPrimitiveType(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual(false, isPrimitiveType(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(false, isPrimitiveType(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(false, isPrimitiveType(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return 1;

                  case 2:
                    _context10.next = 4;
                    return 2;

                  case 4:
                    _context10.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context10.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee7);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee8);
          }))).constructor;
          checkEqual(false, isPrimitiveType(Generator()));
          checkEqual(false, isPrimitiveType(new GeneratorFunction()));
          checkEqual(false, isPrimitiveType(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(false, isPrimitiveType(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual(false, isPrimitiveType(WebAssembly));
        } else {
          checkEqual(false, isPrimitiveType(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(false, isPrimitiveType(Reflect));
        } else {
          checkEqual(false, isPrimitiveType(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(false, isPrimitiveType(Intl));
        } else {
          checkEqual(false, isPrimitiveType(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(false, isPrimitiveType(parts));
        }
      });
    };

    var test_isReferenceType = function test_isReferenceType() {
      it('test_isReferenceType', function () {
        // return value exactly matches isObjectLike
        checkEqual(false, isReferenceType(undefined));
        checkEqual(false, isReferenceType(null));
        checkEqual(false, isReferenceType(true));
        checkEqual(false, isReferenceType(false));
        checkEqual(true, isReferenceType(new Boolean()));
        checkEqual(false, isReferenceType(1));
        checkEqual(false, isReferenceType(NaN));
        checkEqual(false, isReferenceType(Infinity));
        checkEqual(false, isReferenceType(-Infinity));
        checkEqual(false, isReferenceType(Infinity / 2));
        checkEqual(false, isReferenceType(Infinity / Infinity));
        checkEqual(true, isReferenceType(new Number(0)));
        checkEqual(true, isReferenceType(new Number(1)));
        checkEqual(true, isReferenceType(new Number(NaN)));
        checkEqual(true, isReferenceType(new Number(Infinity)));
        checkEqual(true, isReferenceType(new Number(-Infinity)));
        checkEqual(true, isReferenceType(new Number('')));
        checkEqual(true, isReferenceType(new Number('0')));
        checkEqual(true, isReferenceType(new Number('1')));
        checkEqual(true, isReferenceType(new Number(null)));
        checkEqual(true, isReferenceType(new Number()));
        checkEqual(false, isReferenceType(''));
        checkEqual(false, isReferenceType('a'));
        checkEqual(true, isReferenceType(new String('')));
        checkEqual(true, isReferenceType(new String('a')));
        checkEqual(true, isReferenceType(new String(1)));
        checkEqual(true, isReferenceType(new String(null)));
        checkEqual(true, isReferenceType(new String()));
        checkEqual(true, isReferenceType({}));
        checkEqual(true, isReferenceType(new Object()));
        checkEqual(true, isReferenceType(new Object(null)));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isReferenceType(Object.create({})));
          checkEqual(true, isReferenceType(Object.create({
            a: 'A'
          })));
          checkEqual(true, isReferenceType(Object.create(null)));
        }

        function testFunc() {}

        checkEqual(true, isReferenceType(testFunc));
        checkEqual(true, isReferenceType(function () {}));
        checkEqual(true, isReferenceType(function () {}));
        checkEqual(true, isReferenceType([]));
        checkEqual(true, isReferenceType([0, 1, 2]));
        checkEqual(true, isReferenceType(new Array()));
        checkEqual(true, isReferenceType(/^a/));
        checkEqual(true, isReferenceType(new RegExp('^a')));
        checkEqual(true, isReferenceType(new Date()));
        checkEqual(true, isReferenceType(Math));

        if (parts.platform.isWindowsScriptHost()) {} else {
          checkEqual(true, isReferenceType(JSON));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isReferenceType(new Int8Array()));
          checkEqual(true, isReferenceType(new Uint8Array()));
          checkEqual(true, isReferenceType(new Uint8ClampedArray()));
          checkEqual(true, isReferenceType(new Int16Array()));
          checkEqual(true, isReferenceType(new Uint16Array()));
          checkEqual(true, isReferenceType(new Int32Array()));
          checkEqual(true, isReferenceType(new Uint32Array()));
          checkEqual(true, isReferenceType(new Float32Array()));
          checkEqual(true, isReferenceType(new Float64Array()));
          checkEqual(true, isReferenceType(new ArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else {
          checkEqual(true, isReferenceType(new Map()));
          checkEqual(true, isReferenceType(new WeakMap()));
          checkEqual(true, isReferenceType(new Set()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isReferenceType(new WeakSet()));
          checkEqual(false, isReferenceType(Symbol()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isReferenceType(new SharedArrayBuffer(1)));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {} else {
          checkEqual(true, isReferenceType(Atomics));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, isReferenceType(new DataView(new ArrayBuffer(1))));
        } else {
          checkEqual(true, isReferenceType(new DataView(new ArrayBuffer(1))));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isReferenceType(Promise));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isGasV8()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isNode()) {} else if (parts.platform.isChrome()) {} else if (parts.platform.isEdge()) {} else if (parts.platform.isFirefox()) {} else if (parts.platform.isOpera()) {} else if (parts.platform.isJest()) {} else {
          var Generator = /*#__PURE__*/regeneratorRuntime.mark(function Generator() {
            return regeneratorRuntime.wrap(function Generator$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return 1;

                  case 2:
                    _context13.next = 4;
                    return 2;

                  case 4:
                    _context13.next = 6;
                    return 3;

                  case 6:
                  case "end":
                    return _context13.stop();
                }
              }
            }, Generator);
          });
          var GeneratorFunction = Object.getPrototypeOf( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee9);
          })).constructor;
          var AsyncFunction = Object.getPrototypeOf( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee10);
          }))).constructor;
          checkEqual(true, isReferenceType(Generator()));
          checkEqual(true, isReferenceType(new GeneratorFunction()));
          checkEqual(true, isReferenceType(new AsyncFunction()));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else {
          checkEqual(true, isReferenceType(new Proxy({}, {})));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isFirefox()) {
          checkEqual(true, isReferenceType(WebAssembly));
        } else {
          checkEqual(true, isReferenceType(WebAssembly));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isInternetExplorer()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isReferenceType(Reflect));
        } else {
          checkEqual(true, isReferenceType(Reflect));
        }

        if (parts.platform.isWindowsScriptHost()) {} else if (parts.platform.isGasRhino()) {} else if (parts.platform.isDeno()) {} else if (parts.platform.isChrome() || parts.platform.isEdge() || parts.platform.isFirefox() || parts.platform.isOpera()) {
          checkEqual(true, isReferenceType(Intl));
        } else {
          checkEqual(true, isReferenceType(Intl));
        }

        if (parts.isModule(parts)) {
          checkEqual(true, isReferenceType(parts));
        }
      });
    };

    var test_isUndefinedAll = function test_isUndefinedAll() {
      it('test_isUndefinedAll', function () {
        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(true, isUndefinedAll(u1));
        checkEqual(false, isUndefinedAll(n1));
        checkEqual(false, isUndefinedAll(v1));
        checkEqual(true, isUndefinedArray([u1]));
        checkEqual(false, isUndefinedArray([n1]));
        checkEqual(false, isUndefinedArray([v1]));
        checkEqual(true, isUndefinedAll(u1, u1));
        checkEqual(false, isUndefinedAll(u1, n1));
        checkEqual(false, isUndefinedAll(u1, v1));
        checkEqual(true, isUndefinedArray([u1, u1]));
        checkEqual(false, isUndefinedArray([u1, n1]));
        checkEqual(false, isUndefinedArray([u1, v1]));
        checkEqual(false, isNotUndefinedAll(u1));
        checkEqual(true, isNotUndefinedAll(n1));
        checkEqual(true, isNotUndefinedAll(v1));
        checkEqual(false, isNotUndefinedArray([u1]));
        checkEqual(true, isNotUndefinedArray([n1]));
        checkEqual(true, isNotUndefinedArray([v1]));
        checkEqual(false, isNotUndefinedAll(u1, u1));
        checkEqual(false, isNotUndefinedAll(u1, n1));
        checkEqual(true, isNotUndefinedAll(n1, n1));
        checkEqual(false, isNotUndefinedAll(n1, u1));
        checkEqual(true, isNotUndefinedAll(v1, v1));
        checkEqual(true, isNotUndefinedAll(v1, n1));
        checkEqual(false, isNotUndefinedAll(v1, u1));
        checkEqual(false, isNotUndefinedArray([u1, u1]));
        checkEqual(false, isNotUndefinedArray([u1, n1]));
        checkEqual(true, isNotUndefinedArray([n1, n1]));
        checkEqual(false, isNotUndefinedArray([n1, u1]));
        checkEqual(true, isNotUndefinedArray([v1, v1]));
        checkEqual(true, isNotUndefinedArray([v1, n1]));
        checkEqual(false, isNotUndefinedArray([v1, u1]));
        checkEqual(false, isUndefinedAll([v1, v1]));
        checkEqual(false, isUndefinedAll([u1, u1]));
        checkEqual(true, isNotUndefinedAll([v1, v1]));
        checkEqual(true, isNotUndefinedAll([u1, u1]));
      });
    };

    var test_isNull = function test_isNull() {
      it('test_isNull', function () {
        var u1;
        var n1 = null;
        var v1 = 1;
        checkEqual(false, isNullAll(u1));
        checkEqual(true, isNullAll(n1));
        checkEqual(false, isNullAll(v1));
        checkEqual(false, isNullArray([u1]));
        checkEqual(true, isNullArray([n1]));
        checkEqual(false, isNullArray([v1]));
        checkEqual(true, isNullAll(n1, n1));
        checkEqual(false, isNullAll(n1, u1));
        checkEqual(false, isNullAll(n1, v1));
        checkEqual(true, isNullArray([n1, n1]));
        checkEqual(false, isNullArray([n1, u1]));
        checkEqual(false, isNullArray([n1, v1]));
        checkEqual(true, isNotNullAll(u1));
        checkEqual(false, isNotNullAll(n1));
        checkEqual(true, isNotNullAll(v1));
        checkEqual(true, isNotNullArray([u1]));
        checkEqual(false, isNotNullArray([n1]));
        checkEqual(true, isNotNullArray([v1]));
        checkEqual(true, isNotNullAll(u1, u1));
        checkEqual(false, isNotNullAll(u1, n1));
        checkEqual(false, isNotNullAll(n1, n1));
        checkEqual(false, isNotNullAll(n1, u1));
        checkEqual(true, isNotNullAll(v1, v1));
        checkEqual(false, isNotNullAll(v1, n1));
        checkEqual(true, isNotNullAll(v1, u1));
        checkEqual(true, isNotNullArray([u1, u1]));
        checkEqual(false, isNotNullArray([u1, n1]));
        checkEqual(false, isNotNullArray([n1, n1]));
        checkEqual(false, isNotNullArray([n1, u1]));
        checkEqual(true, isNotNullArray([v1, v1]));
        checkEqual(false, isNotNullArray([v1, n1]));
        checkEqual(true, isNotNullArray([v1, u1]));
      });
    };

    var test_isBoolean = function test_isBoolean() {
      it('test_isBoolean', function () {
        checkEqual(true, isBoolean(true));
        checkEqual(true, isBoolean(false));
        checkEqual(false, isBoolean(undefined));
        checkEqual(false, isBoolean(null));
        checkEqual(false, isBoolean(''));
        checkEqual(false, isBoolean('aaa'));
        checkEqual(false, isBoolean(123));
        checkEqual(false, isBoolean(0));
        checkEqual(false, isBoolean(-1));
        checkEqual(false, isBoolean([]));
        checkEqual(false, isBoolean({}));
        checkEqual(true, isBooleanAll(true, true));
        checkEqual(true, isBooleanAll(true, false));
        checkEqual(false, isBooleanAll(true, 1));
        checkEqual(false, isBooleanAll(true, {}));
        checkEqual(false, isBooleanAll(true, []));
        checkEqual(false, isBooleanAll(true, null));
        checkEqual(false, isBooleanAll(true, undefined));
        checkEqual(false, isBooleanAll(true, ''));
        checkEqual(true, isBooleanArray([true, true]));
        checkEqual(true, isBooleanArray([true, false]));
        checkEqual(false, isBooleanArray([true, 1]));
        checkEqual(false, isBooleanArray([true, {}]));
        checkEqual(false, isBooleanArray([true, []]));
        checkEqual(false, isBooleanArray([true, null]));
        checkEqual(false, isBooleanArray([true, undefined]));
        checkEqual(false, isBooleanArray([true, ''])); // boolean object

        checkEqual(false, isBoolean(new Boolean()));
        checkEqual(false, isBoolean(new Boolean(0)));
        checkEqual(false, isBoolean(new Boolean(1)));
        checkEqual(false, isBoolean(new Boolean(true)));
        checkEqual(false, isBoolean(new Boolean(false)));
        checkEqual(false, isBoolean(new Boolean('')));
        checkEqual(false, isBoolean(new Boolean('a')));
        checkEqual(false, isBoolean(new Boolean([])));
        checkEqual(false, isBoolean(new Boolean({})));
        checkEqual(true, isBooleanObject(new Boolean()));
        checkEqual(true, isBooleanObject(new Boolean(0)));
        checkEqual(true, isBooleanObject(new Boolean(1)));
        checkEqual(true, isBooleanObject(new Boolean(true)));
        checkEqual(true, isBooleanObject(new Boolean(false)));
        checkEqual(true, isBooleanObject(new Boolean('')));
        checkEqual(true, isBooleanObject(new Boolean('a')));
        checkEqual(true, isBooleanObject(new Boolean([])));
        checkEqual(true, isBooleanObject(new Boolean({})));
        checkEqual(false, isBooleanObject(true));
        checkEqual(false, isBooleanObject(false));
        checkEqual(false, isBooleanObject(undefined));
        checkEqual(false, isBooleanObject(null));
        checkEqual(false, isBooleanObject(''));
        checkEqual(false, isBooleanObject('aaa'));
        checkEqual(false, isBooleanObject(123));
        checkEqual(false, isBooleanObject(0));
        checkEqual(false, isBooleanObject(-1));
        checkEqual(false, isBooleanObject([]));
        checkEqual(false, isBooleanObject({}));
      });
    };

    var test_isNumber = function test_isNumber() {
      it('test_isNumber', function () {
        checkEqual(true, isNumberAll(123));
        checkEqual(true, isNumberAll(0));
        checkEqual(true, isNumberAll(-1));
        checkEqual(true, isNumberAll(123.4));
        checkEqual(true, isNumberAll(123.0));
        checkEqual(false, isNumberAll(true));
        checkEqual(false, isNumberAll(false));
        checkEqual(false, isNumberAll(null));
        checkEqual(false, isNumberAll(undefined));
        checkEqual(false, isNumberAll(Infinity)); // Infinity is not number

        checkEqual(false, isNumberAll(NaN));
        checkEqual(false, isNumberAll(''));
        checkEqual(false, isNumberAll('ABC'));
        checkEqual(false, isNumberAll('ABC10'));
        checkEqual(false, isNumberAll('10ABC'));
        checkEqual(false, isNumberAll('0ABC'));
        checkEqual(false, isNumberAll('0'));
        checkEqual(false, isNumberAll('5'));
        checkEqual(false, isNumberAll('-5'));
        checkEqual(false, isNumberAll('100'));
        checkEqual(false, isNumberAll('-100'));
        checkEqual(false, isNumberAll([]));
        checkEqual(false, isNumberAll({}));
        checkEqual(false, isNotNumberAll(123));
        checkEqual(false, isNotNumberAll(0));
        checkEqual(true, isNotNumberAll(true));
        checkEqual(true, isNotNumberAll(null));
        checkEqual(true, isNotNumberAll(undefined));
        checkEqual(true, isNotNumberAll(Infinity));
        checkEqual(true, isNotNumberAll(NaN));
        checkEqual(true, isNotNumberAll(''));
        checkEqual(true, isNumberAll(1, 2));
        checkEqual(true, isNumberAll(3, 4, 5));
        checkEqual(true, isNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNumberAll(1, 2, true));
        checkEqual(false, isNotNumberAll(1, 2));
        checkEqual(false, isNotNumberAll(3, 4, 5));
        checkEqual(false, isNotNumberAll(10.5, 20.5, 30.5));
        checkEqual(false, isNotNumberAll(1, 2, true));
        checkEqual(true, isNotNumberAll(false, true));
        checkEqual(true, isNotNumberAll('a', 'b'));
        checkEqual(false, isNumberAll([1, 2]));
        checkEqual(true, isNumberArray([1, 2]));
        checkEqual(true, isNumberArray([3, 4, 5]));
        checkEqual(true, isNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNumberArray([1, 2, true]));
        checkEqual(false, isNotNumberArray([1, 2]));
        checkEqual(false, isNotNumberArray([3, 4, 5]));
        checkEqual(false, isNotNumberArray([10.5, 20.5, 30.5]));
        checkEqual(false, isNotNumberArray([1, 2, true]));
        checkEqual(true, isNotNumberArray([false, true]));
        checkEqual(true, isNotNumberArray(['a', 'b']));
        checkEqual(0, Number(new Number()));
        checkEqual(0, Number(new Number('')));
        checkEqual(0, Number(new Number(' ')));
        checkEqual(0, Number(new Number('　')));
        checkEqual(1, Number(new Number('1')));
        checkEqual(1.1, Number(new Number('1.1')));
        checkEqual(NaN, Number(new Number(NaN)));
        checkEqual(Infinity, Number(new Number(Infinity)));
        checkEqual(NaN, Number(new Number(undefined)));
        checkEqual(0, Number(new Number(null)));
        checkEqual(false, isNumberAll(new Number()));
        checkEqual(false, isNumberAll(new Number('')));
        checkEqual(false, isNumberAll(new Number('1')));
        checkEqual(false, isNumberAll(new Number('1.1')));
        checkEqual(true, isNumberObjectAll(new Number()));
        checkEqual(true, isNumberObjectAll(new Number('')));
        checkEqual(true, isNumberObjectAll(new Number('1')));
        checkEqual(true, isNumberObjectAll(new Number('1.1')));
      });
    };

    var test_isInteger = function test_isInteger() {
      it('test_isInteger', function () {
        checkEqual(true, isIntegerAll(123));
        checkEqual(true, isIntegerAll(0));
        checkEqual(true, isIntegerAll(-1));
        checkEqual(false, isIntegerAll(123.4));
        checkEqual(true, isIntegerAll(123.0)); // .0 equal Integer

        checkEqual(false, isIntegerAll(true));
        checkEqual(false, isIntegerAll(false));
        checkEqual(false, isIntegerAll(null));
        checkEqual(false, isIntegerAll(undefined));
        checkEqual(false, isIntegerAll(''));
        checkEqual(false, isIntegerAll('ABC'));
        checkEqual(false, isIntegerAll('0'));
        checkEqual(false, isIntegerAll('5'));
        checkEqual(false, isIntegerAll('-5'));
        checkEqual(false, isIntegerAll('100'));
        checkEqual(false, isIntegerAll('-100'));
        checkEqual(false, isIntegerAll([]));
        checkEqual(false, isIntegerAll({}));
        checkEqual(true, isIntegerAll(1, 2));
        checkEqual(true, isIntegerAll(3, 4, 5));
        checkEqual(true, isIntegerAll(10, 20, 30));
        checkEqual(false, isIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2));
        checkEqual(false, isNotIntegerAll(3, 4, 5));
        checkEqual(false, isNotIntegerAll(10, 20, 30));
        checkEqual(false, isNotIntegerAll(1, 2, 3.5));
        checkEqual(false, isNotIntegerAll(1, 2.1, 3.5));
        checkEqual(true, isNotIntegerAll(1.1, 2.2, 3.5));
        checkEqual(false, isIntegerArray([]), '?');
        checkEqual(true, isIntegerArray([1]));
        checkEqual(true, isIntegerArray([1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3]));
        checkEqual(false, isIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(true, isIntegerArray([1, 2, 0]));
        checkEqual(false, isIntegerArray([1, 2, NaN]));
        checkEqual(false, isIntegerArray([1, 2, null]));
        checkEqual(false, isIntegerArray(['a', 'b', 1]));
        checkEqual(false, isIntegerArray(['a', 'b', 1.1]));
        checkEqual(false, isIntegerArray(['a', 'b', 'c']));
        checkEqual(false, isNotIntegerArray([]));
        checkEqual(false, isNotIntegerArray([1]));
        checkEqual(false, isNotIntegerArray([1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2, 3]));
        checkEqual(false, isNotIntegerArray([1.1, 2.2, 3]));
        checkEqual(true, isNotIntegerArray([1.1, 2.2, 3.3]));
        checkEqual(false, isNotIntegerArray([1, 2, 0]));
        checkEqual(false, isNotIntegerArray([1, 2, NaN]));
        checkEqual(false, isNotIntegerArray([1, 2, null]));
        checkEqual(false, isNotIntegerArray(['a', 'b', 1]));
        checkEqual(true, isNotIntegerArray(['a', 'b', 1.1]));
        checkEqual(true, isNotIntegerArray(['a', 'b', 'c']));
        checkEqual(false, isIntegerAll(new Number()));
        checkEqual(false, isIntegerAll(new Number('')));
        checkEqual(false, isIntegerAll(new Number('1')));
        checkEqual(false, isIntegerAll(new Number('1.1')));
        checkEqual(false, isIntegerAll(new Number(1)));
      });
    };

    var test_isString = function test_isString() {
      it('test_isString', function () {
        checkEqual(false, isString(true));
        checkEqual(false, isString(false));
        checkEqual(false, isString(undefined));
        checkEqual(false, isString(null));
        checkEqual(true, isString(''));
        checkEqual(true, isString('aaa'));
        checkEqual(false, isString(123));
        checkEqual(false, isString(0));
        checkEqual(false, isString(-1));
        checkEqual(false, isString([]));
        checkEqual(false, isString({}));
        checkEqual(true, isStringAll(''));
        checkEqual(true, isStringAll('a'));
        checkEqual(true, isStringAll('a', 'b', 'c'));
        checkEqual(true, isStringAll('a', 'b', ''));
        checkEqual(false, isStringAll('a', 'b', 0));
        checkEqual(false, isStringAll('a', 'b', 1));
        checkEqual(false, isStringAll('a', 'b', null));
        checkEqual(false, isStringAll('a', 'b', undefined));
        checkEqual(false, isStringArray([]));
        checkEqual(true, isStringArray(['']));
        checkEqual(true, isStringArray(['a']));
        checkEqual(true, isStringArray(['a', 'b', 'c']));
        checkEqual(true, isStringArray(['a', 'b', '']));
        checkEqual(false, isStringArray(['a', 'b', 0]));
        checkEqual(false, isStringArray(['a', 'b', 1]));
        checkEqual(false, isStringArray(['a', 'b', null]));
        checkEqual(false, isStringArray(['a', 'b', undefined]));
        checkEqual(false, isNotStringArray([]));
        checkEqual(false, isNotStringArray(['']));
        checkEqual(false, isNotStringArray(['a']));
        checkEqual(false, isNotStringArray(['a', 'b', 'c']));
        checkEqual(false, isNotStringArray(['a', 'b', '']));
        checkEqual(false, isNotStringArray(['a', 'b', 0]));
        checkEqual(false, isNotStringArray(['a', 'b', 1]));
        checkEqual(false, isNotStringArray(['a', 'b', null]));
        checkEqual(false, isNotStringArray(['a', 'b', undefined]));
        checkEqual(true, isNotStringArray([0, 1, 2]));
        checkEqual(true, isNotStringArray([0, null, undefined])); // string object

        checkEqual('', String(new String()));
        checkEqual('', String(new String('')));
        checkEqual(' ', String(new String(' ')));
        checkEqual('　', String(new String('　')));
        checkEqual('1', String(new String('1')));
        checkEqual('1.1', String(new String('1.1')));
        checkEqual('1', String(new String(1)));
        checkEqual('1.1', String(new String(1.1)));
        checkEqual('NaN', String(new String(NaN)));
        checkEqual('Infinity', String(new String(Infinity)));
        checkEqual('undefined', String(new String(undefined)));
        checkEqual('null', String(new String(null)));
        checkEqual(false, isString(new String()));
        checkEqual(false, isString(new String(undefined)));
        checkEqual(false, isString(new String(null)));
        checkEqual(false, isString(new String('')));
        checkEqual(false, isString(new String('1')));
        checkEqual(false, isString(new String(1)));
        checkEqual(true, isStringObject(new String()));
        checkEqual(true, isStringObject(new String(undefined)));
        checkEqual(true, isStringObject(new String(null)));
        checkEqual(true, isStringObject(new String('')));
        checkEqual(true, isStringObject(new String('1')));
        checkEqual(true, isStringObject(new String(1)));
        checkEqual(false, isStringObject(true));
        checkEqual(false, isStringObject(false));
        checkEqual(false, isStringObject(undefined));
        checkEqual(false, isStringObject(null));
        checkEqual(false, isStringObject(''));
        checkEqual(false, isStringObject('aaa'));
        checkEqual(false, isStringObject(123));
        checkEqual(false, isStringObject(0));
        checkEqual(false, isStringObject(-1));
        checkEqual(false, isStringObject([]));
        checkEqual(false, isStringObject({}));
      });
    };

    var test_isFunction = function test_isFunction() {
      it('test_isFunction', function () {
        checkEqual(true, isFunctionAll(function () {}));
        checkEqual(false, isFunctionAll({}));
        checkEqual(true, isFunctionAll(function () {}, test_isFunction));
        checkEqual(false, isFunctionAll({}, test_isFunction));
        checkEqual(true, isFunctionArray([function () {}, test_isFunction]));
        checkEqual(false, isFunctionArray([{}, test_isFunction]));
      });
    };

    var test_different_objectNormal_objectFromNull = function test_different_objectNormal_objectFromNull() {
      checkEqual(true, 'hasOwnProperty' in {});
      checkEqual(true, 'constructor' in {});

      if (!parts.platform.isWindowsScriptHost()) {
        checkEqual(false, 'hasOwnProperty' in Object.create(null));
        checkEqual(false, 'constructor' in Object.create(null));
        checkEqual(false, isThrown(function () {
          typeName(Object.create({}));
        }));
        checkEqual(false, isThrown(function () {
          typeName(Object.create(null));
        }));
        checkEqual(true, isThrown(function () {
          typeName(Object.create());
        }));
      } else {
        checkEqual(true, isThrown(function () {
          typeName(Object.create({}));
        }));
        checkEqual(true, isThrown(function () {
          typeName(Object.create(null));
        }));
        checkEqual(true, isThrown(function () {
          typeName(Object.create());
        }));
      }
    };

    var test_isObject = function test_isObject() {
      it('test_isObject', function () {
        // object other value
        checkEqual(false, isObject(null));
        checkEqual(false, isObject(undefined));
        checkEqual(false, isObject(undefined));
        checkEqual(false, isObject('a'));
        checkEqual(false, isObject(1));
        checkEqual(false, isObject(true)); // normal object

        checkEqual(true, isObject({}));
        checkEqual(true, isObject({
          a: 0
        }));
        checkEqual(true, isObject({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObject(Object.create(null)));
        } // object like


        checkEqual(false, isObject([]));
        checkEqual(false, isObject(function () {}));
        checkEqual(false, isObject(function () {}));
        checkEqual(false, isObject(new Error()));
        checkEqual(false, isObject(new Date()));
        checkEqual(false, isObject(new RegExp()));
        checkEqual(false, isObject(new String()));
        checkEqual(false, isObject(new Number()));
        checkEqual(false, isObject(new Boolean()));
        checkEqual(true, isObject(new Object()));
        checkEqual(false, isObject(new Array()));
        checkEqual(false, isObject(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObject(parts));
        } // is...All


        checkEqual(true, isObjectAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        })); // is...Array

        checkEqual(true, isObjectArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(false, isObjectArray([[], {
          a: 0,
          b: 1
        }]));

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObject(testObject1));
      });
    };

    var test_isObjectNormal = function test_isObjectNormal() {
      it('test_isObjectNormal', function () {
        // object other value
        checkEqual(false, isObjectNormal(null));
        checkEqual(false, isObjectNormal(undefined));
        checkEqual(false, isObjectNormal(undefined));
        checkEqual(false, isObjectNormal('a'));
        checkEqual(false, isObjectNormal(1));
        checkEqual(false, isObjectNormal(true)); // normal object

        checkEqual(true, isObjectNormal({}));
        checkEqual(true, isObjectNormal({
          a: 0
        }));
        checkEqual(true, isObjectNormal({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormal(Object.create(null)));
        } // object like


        checkEqual(false, isObjectNormal([]));
        checkEqual(false, isObjectNormal(function () {}));
        checkEqual(false, isObjectNormal(function () {}));
        checkEqual(false, isObjectNormal(new Error()));
        checkEqual(false, isObjectNormal(new Date()));
        checkEqual(false, isObjectNormal(new RegExp()));
        checkEqual(false, isObjectNormal(new String()));
        checkEqual(false, isObjectNormal(new Number()));
        checkEqual(false, isObjectNormal(new Boolean()));
        checkEqual(true, isObjectNormal(new Object()));
        checkEqual(false, isObjectNormal(new Array()));
        checkEqual(false, isObjectNormal(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObjectNormal(parts));
        } // is...All


        testCounter();
        checkEqual(true, isObjectNormalAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));
        checkEqual(false, isNotObjectNormalAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormalAll({}, Object.create(null)));
          checkEqual(false, isObjectNormalAll(Object.create(null), Object.create(null)));
          checkEqual(false, isNotObjectNormalAll({}, Object.create(null)));
          checkEqual(true, isNotObjectNormalAll(Object.create(null), Object.create(null)));
        } // is...Array


        checkEqual(true, isObjectNormalArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(false, isNotObjectNormalArray([{}, {
          a: 0,
          b: 1
        }]));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectNormalArray([{}, Object.create(null)]));
          checkEqual(false, isObjectNormalArray([Object.create(null), Object.create(null)]));
          checkEqual(false, isNotObjectNormalArray([{}, Object.create(null)]));
          checkEqual(true, isNotObjectNormalArray([Object.create(null), Object.create(null)]));
        }

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObjectNormal(testObject1));
      });
    };

    var test_isObjectFromNull = function test_isObjectFromNull() {
      it('test_isObjectFromNull', function () {
        // object other value
        checkEqual(false, isObjectFromNull(null));
        checkEqual(false, isObjectFromNull(undefined));
        checkEqual(false, isObjectFromNull(undefined));
        checkEqual(false, isObjectFromNull('a'));
        checkEqual(false, isObjectFromNull(1));
        checkEqual(false, isObjectFromNull(true)); // normal object

        checkEqual(false, isObjectFromNull({}));
        checkEqual(false, isObjectFromNull({
          a: 0
        }));
        checkEqual(false, isObjectFromNull({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObjectFromNull(Object.create(null)));
        } // object like


        checkEqual(false, isObjectFromNull([]));
        checkEqual(false, isObjectFromNull(function () {}));
        checkEqual(false, isObjectFromNull(function () {}));
        checkEqual(false, isObjectFromNull(new Error()));
        checkEqual(false, isObjectFromNull(new Date()));
        checkEqual(false, isObjectFromNull(new RegExp()));
        checkEqual(false, isObjectFromNull(new String()));
        checkEqual(false, isObjectFromNull(new Number()));
        checkEqual(false, isObjectFromNull(new Boolean()));
        checkEqual(false, isObjectFromNull(new Object()));
        checkEqual(false, isObjectFromNull(new Array()));
        checkEqual(false, isObjectFromNull(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(false, isObjectFromNull(parts));
        } // is...All


        testCounter();
        checkEqual(false, isObjectFromNullAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));
        checkEqual(true, isNotObjectFromNullAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        }));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectFromNullAll({}, Object.create(null)));
          checkEqual(true, isObjectFromNullAll(Object.create(null), Object.create(null)));
          checkEqual(false, isNotObjectFromNullAll({}, Object.create(null)));
          checkEqual(false, isNotObjectFromNullAll(Object.create(null), Object.create(null)));
        } // is...Array


        checkEqual(false, isObjectFromNullArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(true, isNotObjectFromNullArray([{}, {
          a: 0,
          b: 1
        }]));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(false, isObjectFromNullArray([{}, Object.create(null)]));
          checkEqual(true, isObjectFromNullArray([Object.create(null), Object.create(null)]));
          checkEqual(false, isNotObjectFromNullArray([{}, Object.create(null)]));
          checkEqual(false, isNotObjectFromNullArray([Object.create(null), Object.create(null)]));
        }

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(false, isObjectFromNull(testObject1));
      });
    };

    var test_isObjectLike1 = function test_isObjectLike1() {
      it('test_isObjectLike1', function () {
        // object other value
        checkEqual(false, isObjectLike(null));
        checkEqual(false, isObjectLike(undefined));
        checkEqual(false, isObjectLike('a'));
        checkEqual(false, isObjectLike(1));
        checkEqual(false, isObjectLike(true)); // normal object

        checkEqual(true, isObjectLike({}));
        checkEqual(true, isObjectLike({
          a: 0
        }));
        checkEqual(true, isObjectLike({
          a: 0,
          b: 1
        })); // object from null

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(true, isObjectLike(Object.create(null)));
        } // object like


        checkEqual(true, isObjectLike([]));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike(function () {}));
        checkEqual(true, isObjectLike(new Error()));
        checkEqual(true, isObjectLike(new Date()));
        checkEqual(true, isObjectLike(new RegExp()));
        checkEqual(true, isObjectLike(new String()));
        checkEqual(true, isObjectLike(new Number()));
        checkEqual(true, isObjectLike(new Boolean()));
        checkEqual(true, isObjectLike(new Object()));
        checkEqual(true, isObjectLike(new Array()));
        checkEqual(true, isObjectLike(new Function()));

        if (parts.isModule(parts)) {
          checkEqual(true, isObjectLike(parts));
        } // is...All


        checkEqual(true, isObjectLikeAll({
          a: 0,
          b: 1
        }, {
          c: 0,
          d: 1
        })); // is...Array

        checkEqual(true, isObjectLikeArray([{}, {
          a: 0,
          b: 1
        }]));
        checkEqual(true, isObjectLikeArray([[], {
          a: 0,
          b: 1
        }]));

        var TestObject = function TestObject() {
          this.a = 'a';
        };

        var testObject1 = new TestObject();
        checkEqual(true, isObjectLikeAll(testObject1));
      });
    };

    var test_isModule = function test_isModule() {
      it('test_isModule', function () {
        if (parts.isModule(parts)) {
          checkEqual(false, parts.platform.isWindowsScriptHost());
        }
      });
    };

    var test_isArray = function test_isArray() {
      it('test_isArray', function () {
        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(false, isArrayAll(123));
        checkEqual(false, isArrayAll('1,2,3'));
        checkEqual(true, isArrayAll([1], [2]));
        checkEqual(true, isArrayAll([3], [4], [5]));
        checkEqual(true, isArrayAll([10, 20], [30]));
        checkEqual(false, isArrayAll([1, 2], 3));
        checkEqual(true, isNotArrayAll(1, 2));
        checkEqual(false, isNotArrayAll([3], [4], 5));
        checkEqual(true, isNotArrayAll(10, 20, 30));
        checkEqual(false, isNotArrayAll(10, 20, [30]));
        checkEqual(true, isArrayArray([[1], [2]]));
        checkEqual(true, isArrayArray([[3], [4], [5]]));
        checkEqual(true, isArrayArray([[10, 20], [30]]));
        checkEqual(false, isArrayArray([[1, 2], 3]));
        checkEqual(true, isNotArrayArray([1, 2]));
        checkEqual(false, isNotArrayArray([[3], [4], 5]));
        checkEqual(true, isNotArrayArray([10, 20, 30]));
        checkEqual(false, isNotArrayArray([10, 20, [30]]));
      });
    };

    var test_ArrayisArray = function test_ArrayisArray() {
      it('test_ArrayisArray', function () {
        var ArrayisArrayAll = function ArrayisArrayAll() {
          for (var i = 0, l = arguments.length; i < l; i += 1) {
            var result = Array.isArray(i < 0 || arguments.length <= i ? undefined : arguments[i]);

            if (result === false) {
              return false;
            }
          }

          return true;
        };

        var NotArrayisArrayAll = function NotArrayisArrayAll() {
          for (var i = 0, l = arguments.length; i < l; i += 1) {
            var result = Array.isArray(i < 0 || arguments.length <= i ? undefined : arguments[i]);

            if (result === true) {
              return false;
            }
          }

          return true;
        };

        checkEqual(true, ArrayisArrayAll([123]));
        checkEqual(true, ArrayisArrayAll([]));
        checkEqual(true, ArrayisArrayAll([1, 2, 3]));
        checkEqual(false, ArrayisArrayAll(123));
        checkEqual(false, ArrayisArrayAll('1,2,3'));
        checkEqual(true, ArrayisArrayAll([1], [2]));
        checkEqual(true, ArrayisArrayAll([3], [4], [5]));
        checkEqual(true, ArrayisArrayAll([10, 20], [30]));
        checkEqual(false, ArrayisArrayAll([1, 2], 3));
        checkEqual(true, NotArrayisArrayAll(1, 2));
        checkEqual(false, NotArrayisArrayAll([3], [4], 5));
        checkEqual(true, NotArrayisArrayAll(10, 20, 30));
        checkEqual(false, NotArrayisArrayAll(10, 20, [30]));
      });
    };

    var test_isArraySeries = function test_isArraySeries() {
      it('test_isArraySeries', function () {
        checkEqual(true, Array.isArray([]));
        checkEqual(true, Array.isArray([123]));
        checkEqual(true, Array.isArray([1, 2, 3]));
        checkEqual(true, Array.isArray(new Array()));
        checkEqual(true, Array.isArray(new Array(1, 2, 3)));
        checkEqual(true, Array.isArray(new Array()));

        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isGasRhino()) {
          checkEqual(false, Array.isArray(new Int8Array()));
          checkEqual(false, Array.isArray(new Uint8Array()));
          checkEqual(false, Array.isArray(new Uint8ClampedArray()));
          checkEqual(false, Array.isArray(new Int16Array()));
          checkEqual(false, Array.isArray(new Uint16Array()));
          checkEqual(false, Array.isArray(new Int32Array()));
          checkEqual(false, Array.isArray(new Uint32Array()));
          checkEqual(false, Array.isArray(new Float32Array()));
          checkEqual(false, Array.isArray(new Float64Array()));
        }

        checkEqual(true, isArrayAll([]));
        checkEqual(true, isArrayAll([123]));
        checkEqual(true, isArrayAll([1, 2, 3]));
        checkEqual(true, isArrayAll(new Array()));
        checkEqual(true, isArrayAll(new Array(1, 2, 3)));
        checkEqual(true, isArrayAll(new Array()));

        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isGasRhino()) {
          checkEqual(false, isArrayAll(new Int8Array()));
          checkEqual(false, isArrayAll(new Uint8Array()));
          checkEqual(false, isArrayAll(new Uint8ClampedArray()));
          checkEqual(false, isArrayAll(new Int16Array()));
          checkEqual(false, isArrayAll(new Uint16Array()));
          checkEqual(false, isArrayAll(new Int32Array()));
          checkEqual(false, isArrayAll(new Uint32Array()));
          checkEqual(false, isArrayAll(new Float32Array()));
          checkEqual(false, isArrayAll(new Float64Array()));
        }

        checkEqual(true, isArraySeriesAll([]));
        checkEqual(true, isArraySeriesAll([123]));
        checkEqual(true, isArraySeriesAll([1, 2, 3]));
        checkEqual(true, isArraySeriesAll(new Array()));
        checkEqual(true, isArraySeriesAll(new Array(1, 2, 3)));
        checkEqual(true, isArraySeriesAll(new Array()));

        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isGasRhino()) {
          checkEqual(true, isArraySeriesAll(new Int8Array()));
          checkEqual(true, isArraySeriesAll(new Uint8Array()));
          checkEqual(true, isArraySeriesAll(new Uint8ClampedArray()));
          checkEqual(true, isArraySeriesAll(new Int16Array()));
          checkEqual(true, isArraySeriesAll(new Uint16Array()));
          checkEqual(true, isArraySeriesAll(new Int32Array()));
          checkEqual(true, isArraySeriesAll(new Uint32Array()));
          checkEqual(true, isArraySeriesAll(new Float32Array()));
          checkEqual(true, isArraySeriesAll(new Float64Array()));
        }
      });
    };

    var test_isDate = function test_isDate() {
      it('test_isDate', function () {
        checkEqual(true, isDateAll(new Date(2017, 1, 1)));
        checkEqual(true, isDateAll(new Date('2017/01')));
        checkEqual(true, isDateAll(new Date(2017, 1)));
        checkEqual(true, isDateAll(new Date(2017, 1)));
      });
    };

    var test_isExcection = function test_isExcection() {
      it('test_isExcection', function () {
        checkEqual(true, isExceptionAll({
          name: '',
          message: ''
        }));
        checkEqual(false, isExceptionAll({
          name: ''
        }));
        checkEqual(false, isExceptionAll({
          message: ''
        }));
        checkEqual(true, isExceptionAll(new Error()));
        checkEqual(true, isExceptionAll(new TypeError()));
        checkEqual(true, isExceptionAll(new SyntaxError()));
        checkEqual(true, isExceptionAll(new ReferenceError()));

        var UserException = function UserException(message) {
          this.message = message;
          this.name = 'UserException';
        };

        checkEqual(true, isExceptionAll(new UserException('message')));
      });
    };

    var test_isEmptyObject = function test_isEmptyObject() {
      it('test_isEmptyObject', function () {
        checkEqual(true, isEmptyObjectAll({}));
        checkEqual(false, isEmptyObjectAll({
          a: 1
        }));
        checkEqual(false, isEmptyObjectAll(null));
        checkEqual(false, isEmptyObjectAll(undefined));
        checkEqual(false, isEmptyObjectAll(123));
        checkEqual(false, isEmptyObjectAll('abc'));
        checkEqual(false, isEmptyObjectAll([]));
        checkEqual(false, isEmptyObjectAll([123]));
      });
    };

    var test_isEmptyArray = function test_isEmptyArray() {
      it('test_isEmptyArray', function () {
        checkEqual(false, isEmptyArrayAll({}));
        checkEqual(false, isEmptyArrayAll({
          a: 1
        }));
        checkEqual(false, isEmptyArrayAll(null));
        checkEqual(false, isEmptyArrayAll(undefined));
        checkEqual(false, isEmptyArrayAll(123));
        checkEqual(false, isEmptyArrayAll('abc'));
        checkEqual(true, isEmptyArrayAll([]));
        checkEqual(false, isEmptyArrayAll([123]));
      });
    };

    var test_isSymbol = function test_isSymbol() {
      it('test_isSymbol', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isSymbolAll(1));
        checkEqual(true, isSymbolAll(Symbol()));
      });
    };

    var test_isMap = function test_isMap() {
      it('test_isMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isMapAll({}));
        checkEqual(false, isWeakMapAll({}));
        checkEqual(true, isMapAll(new Map()));
        checkEqual(false, isWeakMapAll(new Map()));
        checkEqual(false, isMapAll(new WeakMap()));
        checkEqual(true, isWeakMapAll(new WeakMap()));
        checkEqual(true, isObjectAll({}));
        checkEqual(false, isObjectAll(new Map()));
        checkEqual(false, isObjectAll(new WeakMap()));
      });
    };

    var test_isSet = function test_isSet() {
      it('test_isSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual(false, isSetAll({}));
        checkEqual(true, isSetAll(new Set()));
        checkEqual(false, isWeakSetAll({}));
        checkEqual(false, isWeakSetAll(new Set()));
        checkEqual(true, isObjectAll({}));
        checkEqual(false, isObjectAll(new Set()));

        if (!parts.platform.isInternetExplorer()) {
          // IE11 no exist WeakSet
          checkEqual(false, isSetAll(new WeakSet()));
          checkEqual(true, isWeakSetAll(new WeakSet()));
          checkEqual(false, isObjectAll(new WeakSet()));
        }
      });
    };

    test_checkType();
    test_typeName();
    test_isObjectLike2();
    test_isPrimitiveType();
    test_isReferenceType();
    test_isUndefinedAll();
    test_isNull();
    test_isBoolean();
    test_isNumber();
    test_isInteger();
    test_isString();
    test_isFunction();
    test_different_objectNormal_objectFromNull();
    test_isObject();
    test_isObjectNormal();
    test_isObjectFromNull();
    test_isObjectLike1();
    test_isModule();
    test_isArray();
    test_ArrayisArray();
    test_isArraySeries();
    test_isDate();
    test_isExcection();
    test_isEmptyObject();
    test_isEmptyArray();
    test_isSymbol();
    test_isMap();
    test_isSet();
  });
};

exports.test_execute_type = test_execute_type;
var _default = {
  test_execute_type: test_execute_type
};
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_syntax = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_syntax = function test_execute_syntax(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      expect = _parts$test.expect;
  describe('test_execute_syntax', function () {
    var _parts$test2 = parts.test,
        isThrown = _parts$test2.isThrown,
        isThrownValue = _parts$test2.isThrownValue,
        isThrownException = _parts$test2.isThrownException,
        isNotThrown = _parts$test2.isNotThrown;
    var _parts$type = parts.type,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isArray = _parts$type.isArray,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isUndefinedAll = _parts$type.isUndefinedAll,
        isNullAll = _parts$type.isNullAll,
        isBooleanAll = _parts$type.isBooleanAll,
        isNumberAll = _parts$type.isNumberAll,
        isIntegerAll = _parts$type.isIntegerAll,
        isStringAll = _parts$type.isStringAll,
        isFunctionAll = _parts$type.isFunctionAll,
        isObjectAll = _parts$type.isObjectAll,
        isArrayAll = _parts$type.isArrayAll,
        isDateAll = _parts$type.isDateAll,
        isRegExpAll = _parts$type.isRegExpAll,
        isExceptionAll = _parts$type.isExceptionAll;
    var _parts$syntax = parts.syntax,
        assert = _parts$syntax.assert,
        guard = _parts$syntax.guard,
        sc = _parts$syntax.sc,
        if_ = _parts$syntax.if_,
        switch_ = _parts$syntax.switch_,
        canUseMap = _parts$syntax.canUseMap,
        canUseWeakMap = _parts$syntax.canUseWeakMap,
        canUseSet = _parts$syntax.canUseSet,
        canUseWeakSet = _parts$syntax.canUseWeakSet,
        Enum = _parts$syntax.Enum,
        recursive = _parts$syntax.recursive,
        partial = _parts$syntax.partial;
    var _parts$compare = parts.compare,
        equal = _parts$compare.equal,
        or = _parts$compare.or;

    var test_assert = function test_assert() {
      it('test_assert', function () {
        checkEqual(false, isThrown(function () {
          assert(true);
        }));
        checkEqual(false, isThrown(function () {
          assert(true, 'test');
        }));
        checkEqual(true, isThrown(function () {
          assert(false);
        }));
        checkEqual(true, isThrown(function () {
          assert(false, 'test');
        }));
        checkEqual(true, isThrown(function () {
          assert(false);
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false';
        }));
        checkEqual(true, isThrown(function () {
          assert(false, 'test');
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false message:test';
        })); // object parameter

        checkEqual(false, isThrown(function () {
          assert({
            value: true
          });
        }));
        checkEqual(false, isThrown(function () {
          assert({
            value: true,
            message: 'test'
          });
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false
          });
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false,
            message: 'test'
          });
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false
          });
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false';
        }));
        checkEqual(true, isThrown(function () {
          assert({
            value: false,
            message: 'test'
          });
        }, function (e) {
          // console.log(e);
          return e.name === 'Error' && e.message === 'assert error value:false message:test';
        })); // exception TypeError

        checkEqual(true, isThrown(function () {
          assert(0);
        }, function (e) {
          // console.log(e);
          return e.name === new TypeError().name && e.message === 'assert args(value) is not boolean. value:0';
        }));
        checkEqual(true, isThrown(function () {
          assert(0, 'abc');
        }, function (e) {
          // console.log(e);
          return e.name === new TypeError().name && e.message === 'assert args(value) is not boolean. value:0 message:abc';
        }));
        checkEqual(true, isThrown(function () {
          assert(false, 100);
        }, function (e) {
          // console.log(e);
          return e.name === new TypeError().name && e.message === 'assert args(message) is not string. value:false message:100';
        }));
      });
    };

    var test_guard = function test_guard() {
      it('test_guard', function () {
        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2), 'testmessage']];
        };

        {
          // no guard
          {
            var result1 = false;
            var value1 = 1;
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'no guard');
            checkEqual('', guard.message());
          } // guard

          {
            var result1 = false;
            var value1 = '1';
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(true, result1, 'guard 1');
            checkEqual('', guard.message());
            var result1 = false;
            var value1 = 1;
            var value2 = '2';

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(true, result1, 'guard 2');
            checkEqual('testmessage', guard.message());
          } // guard no run

          guard.off();
          {
            var result1 = false;
            var value1 = '1';
            var value2 = 2;

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'guard off 1');
            checkEqual('', guard.message());
            var result1 = false;
            var value1 = 1;
            var value2 = '2';

            if (guard(guardFunc)) {
              result1 = true;
            }

            checkEqual(false, result1, 'guard off 2');
            checkEqual('', guard.message());
          }
          guard.on();
        } // guard array length

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), isArrayAll(value2), 1 <= value2.length];
        };

        {
          var result1 = false;
          var value1 = 1;
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(false, result1, 'guard array length 1');
          var result1 = false;
          var value1 = 1;
          var value2 = [];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array length 2');
          var result1 = false;
          var value1 = [1];
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array length 3');
        } // guard array value etc

        var guardFunc = function guardFunc() {
          return [isArrayAll(value1), [1 <= value1.length], [value1[0] === 1, 'value1[0]error'], function () {
            return isArrayAll(value2);
          }, [function () {
            return 2 <= value2.length;
          }], [function () {
            return value2[0] === 1;
          }, 'value2[0]error']];
        };

        {
          var result1 = false;
          var value1 = [1];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(false, result1, 'guard array value etc 1');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = 1;
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 2');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 3');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [2];
          var value2 = [1, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 4');
          checkEqual('value1[0]error', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = '[1,2]';

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 5');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = [1];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 6');
          checkEqual('', guard.message());
          var result1 = false;
          var value1 = [1];
          var value2 = [2, 2];

          if (guard(guardFunc)) {
            result1 = true;
          }

          checkEqual(true, result1, 'guard array value etc 7');
          checkEqual('value2[0]error', guard.message());
        } // gurad exception args1

        {
          checkEqual(true, isNotThrown(function () {
            return guard(function () {
              return [];
            });
          }));
          checkEqual(true, isThrownException(function () {
            return guard(123);
          }, new TypeError().name));
          checkEqual(true, isThrown(function () {
            return guard(123);
          }));
          checkEqual(true, isThrown(function () {
            return guard(123);
          }, function (e) {
            return e.message === 'guard args(guardFunc) is not function';
          }), 'gurad exception args1 4');
        } // (new SyntaxError).name
        // environment
        //  normal: 'SyntaxError'
        //  wsh:    'Error'
        // gurad exception args1 result

        {
          checkEqual(true, isThrownException(function () {
            return guard(function () {
              return 123;
            });
          }, new TypeError().name));
          checkEqual(true, isThrown(function () {
            return guard(function () {
              return 123;
            });
          }));
          checkEqual(true, isThrown(function () {
            return guard(function () {
              return 123;
            });
          }, function (e) {
            return e.message === 'guard args(guardFunc result) is not array';
          }));
        } // gurad exception args1 function result array

        var value1 = 1;
        var value2 = 2;

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2), 'testmessage']];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 1');

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), [isIntegerAll(value2)]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 2');

        var guardFunc = function guardFunc() {
          return [isIntegerAll(value1), []];
        };

        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 3');
        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element) is not array.length >= 1';
        }), 'gurad exception args1 function result array 3-2');

        var guardFunc = function guardFunc() {
          return [[isIntegerAll(value2), 'testmessage'], isIntegerAll(value1)];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 4');

        var guardFunc = function guardFunc() {
          return [[isIntegerAll(value2)], isIntegerAll(value1)];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 5');

        var guardFunc = function guardFunc() {
          return [[], isIntegerAll(value1)];
        };

        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception args1 function result array 6');
        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element) is not array.length >= 1';
        }), 'gurad exception args1 function result array 6-2'); // gurad exception function result array function result

        var guardFunc = function guardFunc() {
          return [function () {
            return true;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc);
        }), 'gurad exception function result array function result 1');

        var guardFunc = function guardFunc() {
          return [function () {
            return 123;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element value) is not boolean';
        }), 'gurad exception function result array function result 2');

        var guardFunc = function guardFunc() {
          return [function () {
            return true;
          }, [function () {
            return 123;
          }]];
        };

        checkEqual(true, isThrown(function () {
          return guard(guardFunc);
        }, function (e) {
          return e.message === 'guard args(guardFunc resultArray element value) is not boolean';
        }), 'gurad exception function result array function result 3'); // gurad exception args2

        var guardFunc = function guardFunc() {
          return [function () {
            return false;
          }, [function () {
            return true;
          }]];
        };

        checkEqual(true, isNotThrown(function () {
          return guard(guardFunc, function () {});
        }), 'gurad exception args2(runFunc) 1');
        checkEqual(false, isNotThrown(function () {
          return guard(guardFunc, 'test');
        }), 'gurad exception args2(runFunc) 2');
      });
    };

    var test_sc = function test_sc() {
      it('test_sc', function () {
        checkEqual(true, sc(1, equal, 1));
        checkEqual(false, sc(1, equal, 2));
        checkEqual(true, sc('1', equal, '1'));
        checkEqual(false, sc(1, equal, '1'));
        checkEqual(false, sc('1', equal, 1));
        checkEqual(true, sc(1, or, [1, 2]));
        checkEqual(false, sc(0, or, [1, 2]));
      });
    };

    var test_if_ = function test_if_() {
      it('test_if_', function () {
        // { then: value, else: value }
        checkEqual('THEN', if_(true)({
          then: 'THEN',
          "else": 'ELSE'
        }));
        checkEqual('ELSE', if_(false)({
          then: 'THEN',
          "else": 'ELSE'
        }));
        checkEqual('THEN', if_(true)({
          then: 'THEN'
        }));
        checkEqual(undefined, if_(false)({
          then: 'ELSE'
        }));
        checkEqual(undefined, if_(true)({
          "else": 'ELSE'
        }));
        checkEqual('ELSE', if_(false)({
          "else": 'ELSE'
        })); // { then: function, else: function }

        checkEqual('THEN', if_(true)({
          then: function then() {
            return 'THEN';
          },
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('ELSE', if_(false)({
          then: function then() {
            return 'THEN';
          },
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('THEN', if_(true)({
          then: function then() {
            return 'THEN';
          }
        }));
        checkEqual(undefined, if_(false)({
          then: function then() {
            return 'THEN';
          }
        }));
        checkEqual(undefined, if_(true)({
          "else": function _else() {
            return 'ELSE';
          }
        }));
        checkEqual('ELSE', if_(false)({
          "else": function _else() {
            return 'ELSE';
          }
        })); // (value, value)

        checkEqual('THEN', if_(true)('THEN', 'ELSE'));
        checkEqual('ELSE', if_(false)('THEN', 'ELSE'));
        checkEqual('THEN', if_(true)('THEN'));
        checkEqual(undefined, if_(false)('THEN'));
        checkEqual(undefined, if_(true)(undefined, 'ELSE'));
        checkEqual('ELSE', if_(false)(undefined, 'ELSE')); // (function, function)

        checkEqual('THEN', if_(true)(function () {
          return 'THEN';
        }, function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false)(function () {
          return 'THEN';
        }, function () {
          return 'ELSE';
        }));
        checkEqual('THEN', if_(true)(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(false)(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(true)(undefined, function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false)(undefined, function () {
          return 'ELSE';
        })); // .then(value).else(value)

        checkEqual('THEN', if_(true).then('THEN')["else"]('ELSE'));
        checkEqual('ELSE', if_(false).then('THEN')["else"]('ELSE'));
        checkEqual('THEN', if_(true).then('THEN')["else"]());
        checkEqual(undefined, if_(false).then('THEN')["else"]());
        checkEqual(undefined, if_(true).then()["else"]('ELSE'));
        checkEqual('ELSE', if_(false).then()["else"]('ELSE')); // .then(function).else(function)

        checkEqual('THEN', if_(true).then(function () {
          return 'THEN';
        })["else"](function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false).then(function () {
          return 'THEN';
        })["else"](function () {
          return 'ELSE';
        }));
        checkEqual('THEN', if_(true).then(function () {
          return 'THEN';
        })["else"]());
        checkEqual(undefined, if_(false).then(function () {
          return 'THEN';
        })["else"]());
        checkEqual(undefined, if_(true).then()["else"](function () {
          return 'ELSE';
        }));
        checkEqual('ELSE', if_(false).then()["else"](function () {
          return 'ELSE';
        })); // .else(value).then(value)

        checkEqual('THEN', if_(true)["else"]('ELSE').then('THEN'));
        checkEqual('ELSE', if_(false)["else"]('ELSE').then('THEN'));
        checkEqual('THEN', if_(true)["else"]().then('THEN'));
        checkEqual(undefined, if_(false)["else"]().then('THEN'));
        checkEqual(undefined, if_(true)["else"]('ELSE').then());
        checkEqual('ELSE', if_(false)["else"]('ELSE').then()); // .else(function).then(function)

        checkEqual('THEN', if_(true)["else"](function () {
          return 'ELSE';
        }).then(function () {
          return 'THEN';
        }));
        checkEqual('ELSE', if_(false)["else"](function () {
          return 'ELSE';
        }).then(function () {
          return 'THEN';
        }));
        checkEqual('THEN', if_(true)["else"]().then(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(false)["else"]().then(function () {
          return 'THEN';
        }));
        checkEqual(undefined, if_(true)["else"](function () {
          return 'ELSE';
        }).then());
        checkEqual('ELSE', if_(false)["else"](function () {
          return 'ELSE';
        }).then());
      });
    };

    var test_switch_ = function test_switch_() {
      it('test_switch_', function () {
        var switchResultValue1 = [[1, 'number 1'], ['1', 'string 1']];
        checkEqual('number 1', switch_(1)(switchResultValue1));
        checkEqual('string 1', switch_('1')(switchResultValue1));
        checkEqual(undefined, switch_(2)(switchResultValue1));
        var switchResultValue2 = [[1, 'number 1'], ['1', 'string 1'], ['default']];
        checkEqual('number 1', switch_(1)(switchResultValue2));
        checkEqual('string 1', switch_('1')(switchResultValue2));
        checkEqual('default', switch_(2)(switchResultValue2));
        var switchResultValue3 = [[1, 'number 1'], ['1', 'string 1'], []];
        checkEqual('number 1', switch_(1)(switchResultValue3));
        checkEqual('string 1', switch_('1')(switchResultValue3));
        checkEqual(undefined, switch_(2)(switchResultValue3)); // Error

        var switchResultValue4 = [[1, '1'], 'default'];
        checkEqual(true, isThrownException(function () {
          switch_(1)(switchResultValue4);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          switch_(2)(switchResultValue4);
        }, new TypeError().name));
        var switchResultFunc1 = [[1, function () {
          return 'number 1';
        }], ['1', function () {
          return 'string 1';
        }]];
        checkEqual('number 1', switch_(1)(switchResultFunc1));
        checkEqual('string 1', switch_('1')(switchResultFunc1));
        checkEqual(undefined, switch_(2)(switchResultFunc1));
        var switchResultFunc2 = [[1, function () {
          return 'number 1';
        }], ['1', function () {
          return 'string 1';
        }], [function () {
          return 'default';
        }]];
        checkEqual('number 1', switch_(1)(switchResultFunc2));
        checkEqual('string 1', switch_('1')(switchResultFunc2));
        checkEqual('default', switch_(2)(switchResultFunc2));
        var switchResultFunc3 = [[1, 'number 1'], ['1', 'string 1'], [function () {}]];
        checkEqual('number 1', switch_(1)(switchResultFunc3));
        checkEqual('string 1', switch_('1')(switchResultFunc3));
        checkEqual(undefined, switch_(2)(switchResultFunc3));
      });
    };

    var test_loop = function test_loop() {
      it('test_loop', function () {
        var outputConsoleText = '';

        var console_log = function console_log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          for (var _i = 0, _args = args; _i < _args.length; _i++) {
            var arg = _args[_i];

            if (isArray(arg)) {
              var argsText = '';

              var _iterator = _createForOfIteratorHelper(arg),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var element = _step.value;

                  if (isArray(element)) {
                    argsText += "[".concat(element, "],");
                  } else {
                    argsText += "".concat(element, ",");
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              argsText = parts.string.deleteLast(argsText, 1);
              outputConsoleText += "[".concat(argsText, "] ");
            } else {
              outputConsoleText += "".concat(arg, " ");
            }
          }

          outputConsoleText += '\n';
        };

        outputConsoleText = '';
        {
          // 3 times loop
          parts.loop(3)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false \n' + '1 1 [0,1,2] false false \n' + '2 2 [0,1,2] false true \n' + '');
        outputConsoleText = '';
        {
          // 1 to 3 loop
          parts.loop(1, 3)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('1 0 [1,2,3] true false \n' + '2 1 [1,2,3] false false \n' + '3 2 [1,2,3] false true \n' + '');
        outputConsoleText = '';
        {
          // 1 times loop : first last flag
          parts.loop(1)(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0] true true \n' + '');
        outputConsoleText = '';
        {
          // 1 to 10 step 2 loop and continue and break
          parts.loop(1, 10, 2)(function (e, i, array, first, last) {
            if (i === 1) {
              return;
            }

            console_log(e, i, array, first, last);

            if (i === 3) {
              return {
                "break": true
              };
            }
          });
        }
        expect(outputConsoleText).toEqual('1 0 [1,3,5,7,9] true false \n' + '5 2 [1,3,5,7,9] false false \n' + '7 3 [1,3,5,7,9] false false \n' + '');
        outputConsoleText = '';
        {
          // double loop
          parts.loop(3)(function (e, j, array, first, last) {
            parts.loop(3)(function (e, i, array, first, last) {
              console_log(e, i, array, first, last, j);
            });
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false 0 \n' + '1 1 [0,1,2] false false 0 \n' + '2 2 [0,1,2] false true 0 \n' + '0 0 [0,1,2] true false 1 \n' + '1 1 [0,1,2] false false 1 \n' + '2 2 [0,1,2] false true 1 \n' + '0 0 [0,1,2] true false 2 \n' + '1 1 [0,1,2] false false 2 \n' + '2 2 [0,1,2] false true 2 \n' + '');
        outputConsoleText = '';
        {
          // Break from a double loop
          parts.loop(3)(function (e, j, array, first, last) {
            var loopResult = parts.loop(3)(function (e, i, array, first, last) {
              console_log(e, i, array, first, last, j);

              if (i === 0) {
                console_log('continue');
                return;
              }

              if (i === 1) {
                console_log('break');
                return {
                  "break": true,
                  parentLoopCounter: j
                };
              }
            });

            if (loopResult["break"] === true) {
              console_log('return break');

              if (loopResult.parentLoopCounter === 1) {
                console_log('break the double loop');
                return {
                  "break": true
                };
              } else {
                console_log('continue the double loop');
              }
            }
          });
        }
        expect(outputConsoleText).toEqual('0 0 [0,1,2] true false 0 \n' + 'continue \n' + '1 1 [0,1,2] false false 0 \n' + 'break \n' + 'return break \n' + 'continue the double loop \n' + '0 0 [0,1,2] true false 1 \n' + 'continue \n' + '1 1 [0,1,2] false false 1 \n' + 'break \n' + 'return break \n' + 'break the double loop \n' + '');
        outputConsoleText = '';
        {
          // loop array
          parts.loop(['A', 'B', 'C'])(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('A 0 [A,B,C] true false \n' + 'B 1 [A,B,C] false false \n' + 'C 2 [A,B,C] false true \n' + '');
        outputConsoleText = '';
        {
          // loop object
          parts.loop({
            a: 'A',
            b: 'B',
            c: 'C'
          })(function (e, i, array, first, last) {
            console_log(e, i, array, first, last);
          });
        }
        expect(outputConsoleText).toEqual('[a,A] 0 [[a,A],[b,B],[c,C]] true false \n' + '[b,B] 1 [[a,A],[b,B],[c,C]] false false \n' + '[c,C] 2 [[a,A],[b,B],[c,C]] false true \n' + '');
      });
    };

    var test_canUseMap = function test_canUseMap() {
      it('test_canUseMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseMap());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseMap());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, canUseMap());
        } else {
          checkEqual(true, canUseMap());
        }
      });
    };

    var test_canUseWeakMap = function test_canUseWeakMap() {
      it('test_canUseWeakMap', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseWeakMap());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseWeakMap());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, canUseWeakMap());
        } else {
          checkEqual(true, canUseWeakMap());
        }
      });
    };

    var test_canUseSet = function test_canUseSet() {
      it('test_canUseSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseSet());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseSet());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(true, canUseSet());
        } else {
          checkEqual(true, canUseSet());
        }
      });
    };

    var test_canUseWeakSet = function test_canUseWeakSet() {
      it('test_canUseWeakSet', function () {
        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(false, canUseWeakSet());
        } else if (parts.platform.isGasRhino()) {
          checkEqual(false, canUseWeakSet());
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(false, canUseWeakSet());
        } else {
          checkEqual(true, canUseWeakSet());
        }
      });
    };

    var test_Enum = function test_Enum() {
      it('test_Enum', function () {
        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, Enum(['a', 'b', 'c']));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, Enum(['a', 'b', 'c'], true));
        checkEqual({
          a: 2,
          b: 1,
          c: 0
        }, Enum(['c', 'b', 'a'], true)); // object parameter

        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, Enum({
          values: ['a', 'b', 'c']
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, Enum({
          values: ['a', 'b', 'c'],
          useIndex: true
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, Enum(['a', 'b', 'c'], {
          useIndex: true
        }));
        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, new Enum(['a', 'b', 'c']));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, new Enum(['a', 'b', 'c'], true));
        checkEqual({
          a: 'a',
          b: 'b',
          c: 'c'
        }, new Enum({
          values: ['a', 'b', 'c']
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, new Enum({
          values: ['a', 'b', 'c'],
          useIndex: true
        }));
        checkEqual({
          a: 0,
          b: 1,
          c: 2
        }, new Enum(['a', 'b', 'c'], {
          useIndex: true
        })); // exception TypeError

        checkEqual(false, isThrown(function () {
          Enum(['a', 'b', 'c']);
        }));
        checkEqual(true, isThrown(function () {
          Enum([0, 'b', 'c']);
        }));
      });
    };

    var test_recursive = function test_recursive() {
      it('test_recursive', function () {
        var data = [{
          'id': 1,
          'name': 'folderA',
          'folder': [{
            'id': 2,
            'name': 'folderA-2'
          }, {
            'id': 3,
            'name': 'folderA-3'
          }]
        }, {
          'id': 4,
          'name': 'folderB'
        }, {
          'id': 5,
          'name': 'folderC',
          'folder': [{
            'id': 6,
            'name': 'folderC-1',
            'folder': [{
              'id': 7,
              'name': 'folderC-1-1'
            }]
          }]
        }];
        var message = '';
        recursive(data, function (value, key, level, path, source) {
          checkEqual(data, source);
          message += "".concat(key, ":").concat(value.name, " ");

          if ('folder' in value) {
            return value.folder;
          }
        });
        checkEqual('0:folderA 0:folderA-2 1:folderA-3 ' + '1:folderB 2:folderC 0:folderC-1 0:folderC-1-1 ', message);
        var testObject = {
          a: 1,
          b: 2,
          c: {
            d: 3,
            e: {
              f: 4
            }
          },
          g: [5, [{
            h: 6
          }]]
        };
        var message = '';
        recursive(testObject, function (value, key) {
          message += "".concat(key, ":").concat(_typeof(value), " ");

          if (isObject(value)) {
            return value;
          }
        });
        checkEqual('a:number b:number c:object d:number e:object f:number g:object ', message);
        var message = '';
        recursive(testObject, function (value, key) {
          message += "".concat(key, ":").concat(_typeof(value), " ");

          if (isObject(value)) {
            return value;
          } else if (Array.isArray(value)) {
            return value;
          }
        });
        checkEqual('a:number b:number c:object d:number e:object f:number ' + 'g:object 0:number 1:object 0:object h:number ', message);
        var message = '';
        recursive(testObject, function (value, key, level) {
          message += "".concat(key, ":").concat(_typeof(value), " ");

          if (1 <= level) {
            return;
          }

          if (isObject(value)) {
            return value;
          } else if (Array.isArray(value)) {
            return value;
          }
        });
        checkEqual('a:number b:number c:object d:number e:object ' + 'g:object 0:number 1:object ', message);
        var data = {
          'children': [{
            'contents': {
              'A': 0,
              'B': 1,
              'C': 2
            },
            'children': [{
              'children': [],
              'name': 'test03',
              'id': 3
            }, {
              'children': [],
              'name': 'test04',
              'id': 4
            }],
            'name': 'test01',
            'id': 1
          }, {
            'contents': {
              'A': 0,
              'B': 1,
              'C': 2
            },
            'children': [{
              'children': [],
              'name': 'test05',
              'id': 5
            }, {
              'children': [],
              'name': 'test06',
              'id': 6
            }],
            'name': 'test02',
            'id': 2
          }]
        };
        var messages = [];
        recursive(data.children, function (value, key, level) {
          messages.push({
            name: value.name,
            level: level
          });

          if ('children' in value) {
            return value.children;
          }
        });
        var SortFunc = parts.array.SortFunc;
        messages.sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.level;
        }]]));
        var message = parts.array.map(messages, function (v) {
          return "name:".concat(v.name);
        }).join(' ');
        checkEqual('name:test01 name:test02 name:test03 name:test04 name:test05 name:test06', message);
        var data = [{
          id: 0,
          parent: null
        }, {
          id: 1,
          parent: 0
        }, {
          id: 2,
          parent: 0
        }, {
          id: 3,
          parent: 1
        }, {
          id: 4,
          parent: 1
        }, {
          id: 5,
          parent: 2
        }];
        var output = [{
          id: 0,
          children: [{
            id: 1,
            children: [{
              id: 3,
              children: []
            }, {
              id: 4,
              children: []
            }]
          }, {
            id: 2,
            children: [{
              id: 5,
              children: []
            }]
          }]
        }];
        var result = [];
        result.push({
          id: data[0].id,
          children: []
        });

        var _iterator2 = _createForOfIteratorHelper(data),
            _step2;

        try {
          var _loop = function _loop() {
            var dataItem = _step2.value;
            parts.syntax.recursive(result, function (item) {
              if (item.id === dataItem.parent) {
                item.children.push({
                  id: dataItem.id,
                  children: []
                });
              } else {
                return item.children;
              }
            });
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        checkEqual(output, result); // same logic no use parts.syntax.recursive

        var result = [];
        result.push({
          id: data[0].id,
          children: []
        });

        var _iterator3 = _createForOfIteratorHelper(data),
            _step3;

        try {
          var _loop2 = function _loop2() {
            var dataItem = _step3.value;

            var f = function f(array) {
              var _iterator4 = _createForOfIteratorHelper(array),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value;

                  if (item.id === dataItem.parent) {
                    item.children.push({
                      id: dataItem.id,
                      children: []
                    });
                  } else {
                    f(item.children);
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            };

            f(result);
          };

          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop2();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        checkEqual(output, result);
      });
    };

    var test_partial = function test_partial() {
      it('test_partial', function () {
        var testFunc = function testFunc(value1, value2, value3) {
          return "1:".concat(value1, " 2:").concat(value2, " 3:").concat(value3);
        };

        var partialTestFunc = partial(testFunc, [partial.empty, 'B1', partial.empty]);
        checkEqual('1:a 2:B1 3:c', partialTestFunc('a', 'c'));
        checkEqual('1:a 2:B1 3:undefined', partialTestFunc('a'));
        var partialTestFunc = partial(testFunc, [partial.empty, 'B2']);
        checkEqual('1:a 2:B2 3:c', partialTestFunc('a', 'c'));
        var partialTestFunc = partial(testFunc, ['A3', 'B3']);
        checkEqual('1:A3 2:B3 3:undefined', partialTestFunc());
        checkEqual('1:A3 2:B3 3:c', partialTestFunc('c'));
        var partialTestFunc = partial(testFunc, ['A4', 'B4', 'C4']);
        checkEqual('1:A4 2:B4 3:C4', partialTestFunc());
        checkEqual('1:A4 2:B4 3:C4', partialTestFunc('a'));
      });
    };

    test_assert();
    test_guard();
    test_sc();
    test_if_();
    test_switch_();
    test_loop();
    test_canUseMap();
    test_canUseWeakMap();
    test_canUseSet();
    test_canUseWeakSet();
    test_Enum();
    test_recursive();
    test_partial();
  });
};

exports.test_execute_syntax = test_execute_syntax;
var _default = {
  test_execute_syntax: test_execute_syntax
};
exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_test = void 0;

/* eslint-disable no-throw-literal */
var test_execute_test = function test_execute_test(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test,
      expect = _parts$test.expect;
  describe('test_execute_test', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;

    var test_isThrown = function test_isThrown() {
      it('test_isThrown', function () {
        checkEqual(true, isThrown(function () {
          throw 1;
        }, function (throwValue) {
          return throwValue === 1;
        }));
        checkEqual(false, isThrown(function () {
          throw 1;
        }, function (throwValue) {
          return throwValue !== 1;
        }));
        checkEqual(false, isThrown(function () {
          throw 2;
        }, function (throwValue) {
          return throwValue === 1;
        }));
        checkEqual(false, isThrown(function () {
          throw 1;
        }, function (throwValue) {
          return throwValue === '1';
        }));
        checkEqual(true, isThrown(function () {
          throw '1';
        }, function (throwValue) {
          return throwValue === '1';
        }));
        checkEqual(true, isThrown(function () {
          throw '';
        }, function (throwValue) {
          return throwValue === '';
        }));
        checkEqual(true, isThrown(function () {
          throw {
            test: 'TEST'
          };
        }, function (throwValue) {
          return throwValue.test === 'TEST';
        }));
        checkEqual(false, isThrown(function () {
          throw {
            test: 'TEST'
          };
        }, function (throwValue) {
          return throwValue.test === 'test';
        }));
        checkEqual(false, isThrown(function () {}, function () {}));
        checkEqual(true, isThrown(function () {
          throw 1;
        }));
        checkEqual(true, isThrown(function () {
          throw '1';
        }));
        checkEqual(false, isThrown(function () {}));
      });
    };

    var test_expect = function test_expect() {
      it('test_expect', function () {
        expect(123).toBe(123);
        expect([1, 2, 3]).not.toBe([1, 2, 3]);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect([1, 2, 3]).not.toEqual([1, 2, 2]);
      });
    };

    test_isThrown();
    test_expect();
  });
};

exports.test_execute_test = test_execute_test;
var _default = {
  test_execute_test: test_execute_test
};
exports["default"] = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_compare = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_compare = function test_execute_compare(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_compare', function () {
    var _parts$type = parts.type,
        isNull = _parts$type.isNull,
        isUndefined = _parts$type.isUndefined,
        isNaNStrict = _parts$type.isNaNStrict,
        isBoolean = _parts$type.isBoolean,
        isNumber = _parts$type.isNumber,
        isInteger = _parts$type.isInteger,
        isString = _parts$type.isString,
        isFunction = _parts$type.isFunction,
        isObject = _parts$type.isObject,
        isObjectLike = _parts$type.isObjectLike,
        isArray = _parts$type.isArray,
        isDate = _parts$type.isDate,
        isRegExp = _parts$type.isRegExp,
        isException = _parts$type.isException,
        isEmptyObject = _parts$type.isEmptyObject,
        isEmptyArray = _parts$type.isEmptyArray,
        isNotNull = _parts$type.isNotNull,
        isNotUndefined = _parts$type.isNotUndefined,
        isNotNaNStrict = _parts$type.isNotNaNStrict,
        isNotBoolean = _parts$type.isNotBoolean,
        isNotNumber = _parts$type.isNotNumber,
        isNotInteger = _parts$type.isNotInteger,
        isNotString = _parts$type.isNotString,
        isNotFunction = _parts$type.isNotFunction,
        isNotObject = _parts$type.isNotObject,
        isNotObjectType = _parts$type.isNotObjectType,
        isNotArray = _parts$type.isNotArray,
        isNotDate = _parts$type.isNotDate,
        isNotRegExp = _parts$type.isNotRegExp,
        isNotException = _parts$type.isNotException,
        isNotEmptyObject = _parts$type.isNotEmptyObject,
        isNotEmptyArray = _parts$type.isNotEmptyArray,
        isUndefinedArray = _parts$type.isUndefinedArray,
        isNullArray = _parts$type.isNullArray,
        isNaNStrictArray = _parts$type.isNaNStrictArray,
        isBooleanArray = _parts$type.isBooleanArray,
        isNumberArray = _parts$type.isNumberArray,
        isIntegerArray = _parts$type.isIntegerArray,
        isStringArray = _parts$type.isStringArray,
        isFunctionArray = _parts$type.isFunctionArray,
        isObjectArray = _parts$type.isObjectArray,
        isObjectNormalArray = _parts$type.isObjectNormalArray,
        isObjectFromNullArray = _parts$type.isObjectFromNullArray,
        isObjectLikeArray = _parts$type.isObjectLikeArray,
        isModuleArray = _parts$type.isModuleArray,
        isArrayArray = _parts$type.isArrayArray,
        isArraySeriesArray = _parts$type.isArraySeriesArray,
        isDateArray = _parts$type.isDateArray,
        isRegExpArray = _parts$type.isRegExpArray,
        isExceptionArray = _parts$type.isExceptionArray,
        isBooleanObjectArray = _parts$type.isBooleanObjectArray,
        isNumberObjectArray = _parts$type.isNumberObjectArray,
        isStringObjectArray = _parts$type.isStringObjectArray,
        isEmptyObjectArray = _parts$type.isEmptyObjectArray,
        isEmptyArrayArray = _parts$type.isEmptyArrayArray,
        isSymbolArray = _parts$type.isSymbolArray,
        isMapArray = _parts$type.isMapArray,
        isWeakMapArray = _parts$type.isWeakMapArray,
        isSetArray = _parts$type.isSetArray,
        isWeakSetArray = _parts$type.isWeakSetArray;
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        expect = _parts$test2.expect,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException;
    var _parts$compare = parts.compare,
        equal = _parts$compare.equal,
        or = _parts$compare.or,
        match = _parts$compare.match,
        matchValue = _parts$compare.matchValue,
        initialValue = _parts$compare.initialValue,
        allMatch = _parts$compare.allMatch,
        someMatch = _parts$compare.someMatch,
        indexOfMatch = _parts$compare.indexOfMatch,
        matchSome = _parts$compare.matchSome,
        matchSomeValue = _parts$compare.matchSomeValue,
        allMatchSome = _parts$compare.allMatchSome,
        someMatchSome = _parts$compare.someMatchSome,
        indexOfMatchSome = _parts$compare.indexOfMatchSome,
        matchAll = _parts$compare.matchAll,
        matchAllValue = _parts$compare.matchAllValue,
        allMatchAll = _parts$compare.allMatchAll,
        someMatchAll = _parts$compare.someMatchAll,
        indexOfMatchAll = _parts$compare.indexOfMatchAll,
        includes = _parts$compare.includes,
        includesSome = _parts$compare.includesSome,
        includesAll = _parts$compare.includesAll;
    var isFirst = parts.string.isFirst;

    var test_equal = function test_equal() {
      it('test_equal', function () {
        // Primitive value
        checkEqual(true, equal(1, 1));
        checkEqual(false, equal(1, 2));
        checkEqual(true, equal('1', '1'));
        checkEqual(false, equal('1', 1));
        checkEqual(true, equal(null, null));
        checkEqual(true, equal(undefined, undefined));
        checkEqual(true, equal(undefined));
        checkEqual(false, equal(null, undefined));
        checkEqual(false, equal(null)); // named argument

        checkEqual(true, equal({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equal({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equal({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equal_object = function test_equal_object() {
      it('test_equal_object', function () {
        // object
        checkEqual(true, equal({}, {}));
        checkEqual(false, equal({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equal({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 1');
        checkEqual(false, equal({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }), 'test_equal object 2');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }), 'test_equal object 3');
        checkEqual(false, equal({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }), 'test_equal object 4');
      });
    };

    var test_equal_array = function test_equal_array() {
      it('test_equal_array', function () {
        checkEqual(true, equal([], []));
        checkEqual(false, equal([[]], [[]]));
        checkEqual(true, equal([1], [1]));
        checkEqual(false, equal([1], [2]));
        checkEqual(true, equal([1, 2], [1, 2]));
        checkEqual(false, equal([1, 2], [2, 2]));
        checkEqual(true, equal([1, 2, 3], [1, 2, 3]));
        checkEqual(false, equal([[1, 2], 3], [[1, 2], 3]));
        checkEqual(false, equal([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(false, equal([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equal([[1, 2, 3]], [1, 2, 3]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equal([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equal(['a'], ['a']));
        checkEqual(false, equal(['a'], ['b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal(['a', 'a'], ['a', 'b']));
        checkEqual(true, equal(['a', 'b'], ['a', 'b']));
        checkEqual(false, equal([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equal([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equal([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equal([undefined], [undefined]));
        checkEqual(false, equal([undefined], [null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([undefined, undefined], [undefined, null]));
        checkEqual(true, equal([undefined, null], [undefined, null]));
        checkEqual(false, equal([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equal([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equal([[undefined, [null], undefined]], [[undefined, ['a'], undefined]])); // Object Named Parameter

        checkEqual(true, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equal({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equal_date = function test_equal_date() {
      it('test_equal_date', function () {
        // date
        checkEqual(true, equal(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equal date'); // date ignore

        var equalFuncArray = [equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // date

        checkEqual(false, equal(new Date('2019/11/02'), new Date('2019/11/02'), equalFuncArray), 'test_equal date'); // date in object

        checkEqual(false, equal({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }, equalFuncArray), 'test_equal date'); // date in array

        checkEqual(false, equal([new Date('2019/11/02')], [new Date('2019/11/02')], equalFuncArray), 'test_equal date');
      });
    };

    var test_equal_regexp = function test_equal_regexp() {
      it('test_equal_regexp', function () {
        // regexp
        checkEqual(true, equal(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        var equalFuncArray = [equal.func.date, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // regexp

        checkEqual(false, equal(new RegExp(/^a/), new RegExp(/^a/), equalFuncArray), 'test_equal regexp'); // regexp in object

        checkEqual(false, equal({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }, equalFuncArray), 'test_equal regexp'); // regexp in array

        checkEqual(false, equal([new RegExp(/^a/)], [new RegExp(/^a/)], equalFuncArray), 'test_equal regexp');
      });
    };

    var test_equal_map = function test_equal_map() {
      it('test_equal_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equal(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map'); // ignore Map

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equal(map1, map2, equalFuncArray)); // Map in object

        checkEqual(false, equal({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(false, equal([map1], [map2]), 'test_equal Map');
      });
    };

    var test_equal_set = function test_equal_set() {
      it('test_equal_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equal(set1, set2), 'test_equal Set'); // Set in object

        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set'); // ignore Set

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equal(set1, set2, equalFuncArray)); // Set in object

        checkEqual(false, equal({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set'); // Set in array

        checkEqual(false, equal([set1], [set2]), 'test_equal Set');
      });
    };

    var test_equalDeep = function test_equalDeep() {
      var objectParameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      it('test_equalDeep', function () {
        // Primitive value
        checkEqual(true, equalDeep(1, 1));
        checkEqual(false, equalDeep(1, 2));
        checkEqual(true, equalDeep('1', '1'));
        checkEqual(false, equalDeep('1', 1));
        checkEqual(true, equalDeep(null, null));
        checkEqual(true, equalDeep(undefined, undefined));
        checkEqual(true, equalDeep(undefined));
        checkEqual(false, equalDeep(null, undefined));
        checkEqual(false, equalDeep(null));

        if (objectParameter === false) {
          return;
        } // named argument


        checkEqual(true, equalDeep({
          value1: 1,
          value2: 1
        }));
        checkEqual(true, equalDeep({
          value1: '1',
          value2: '1'
        }));
        checkEqual(false, equalDeep({
          value1: '1',
          value2: 1
        }));
      });
    };

    var test_equalDeep_object = function test_equalDeep_object() {
      it('test_equalDeep_object', function () {
        // object
        checkEqual(true, equalDeep({}, {}));
        checkEqual(true, equalDeep({
          a: {}
        }, {
          a: {}
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }));
        checkEqual(false, equalDeep({
          a: '2',
          b: '2'
        }, {
          a: '1',
          b: '2'
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {}
        }));
        checkEqual(true, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: []
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: {}
        }, {
          a: '1',
          b: '2',
          c: {},
          d: ''
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: []
        }, {
          a: '1',
          b: '2',
          c: [],
          d: ''
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: {},
          d: ''
        }, {
          a: '1',
          b: '2',
          c: {}
        }));
        checkEqual(false, equalDeep({
          a: '1',
          b: '2',
          c: [],
          d: ''
        }, {
          a: '1',
          b: '2',
          c: []
        }));
        checkEqual(true, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B',
            c: 'C'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B',
            c: 'c'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B',
            c: 'C'
          }
        }, {
          a: {
            b: 'B'
          }
        }));
        checkEqual(false, equalDeep({
          a: {
            b: 'B'
          }
        }, {
          a: {
            b: 'B',
            c: 'C'
          }
        }));
      });
    };

    var test_equalDeep_object_array_mix = function test_equalDeep_object_array_mix() {
      it('test_equalDeep_object_array_mix', function () {
        // equal false array object
        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: 3
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [1, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false array object array

        var testValue1 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        var testValue2 = [1, 2, 3, {
          a: 1,
          b: 2,
          c: [3, 4, 5]
        }];
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true array object array

        checkEqual(true, equalDeep(testValue1, testValue2)); // equal false object array object

        var testValue1 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        var testValue2 = {
          a: 1,
          b: 2,
          c: 3,
          d: [{
            e: 4,
            f: 5,
            g: 6
          }, 2, 3]
        };
        checkEqual(false, equal(testValue1, testValue2)); // equalDeep true object array object

        checkEqual(true, equalDeep(testValue1, testValue2));
      });
    };

    var test_equalDeep_object_CircularReference = function test_equalDeep_object_CircularReference() {
      it('test_equalDeep_object_CircularReference', function () {
        // CircularReference
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 1');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object1;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 2');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object1;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 3');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object2;
        checkEqual(true, equalDeep(object1, object2), 'test_equalDeep CircularReference 4');
        var object1 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object2 = {
          a: '1',
          b: '2',
          c: {}
        };
        var object3 = {
          a: '1',
          b: '2',
          c: {}
        };
        object1.obj = object2;
        object2.obj = object3;
        checkEqual(false, equalDeep(object1, object2), 'test_equalDeep CircularReference 5');
      });
    };

    var test_equalDeep_array = function test_equalDeep_array() {
      var objectParameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      it('test_equalDeep_array', function () {
        checkEqual(true, equalDeep([1, 2, {}], [1, 2, {}]));
        checkEqual(true, equalDeep([1, 2, [3]], [1, 2, [3]]));
        checkEqual(true, equalDeep([], []));
        checkEqual(true, equalDeep([[]], [[]]));
        checkEqual(true, equalDeep([1], [1]));
        checkEqual(false, equalDeep([1], [2]));
        checkEqual(true, equalDeep([1, 2], [1, 2]));
        checkEqual(false, equalDeep([1, 2], [2, 2]));
        checkEqual(true, equalDeep([1, 2, 3], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, 2], 3], [[1, 2], 3]));
        checkEqual(true, equalDeep([[1, 2, 3]], [[1, 2, 3]]));
        checkEqual(true, equalDeep([1, [2, 3]], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2], 3], [1, [2, 3]]));
        checkEqual(false, equalDeep([[1, 2, 3]], [1, 2, 3]));
        checkEqual(true, equalDeep([[1, [2], 3]], [[1, [2], 3]]));
        checkEqual(false, equalDeep([[1, [2], 3]], [[1, [3], 3]]));
        checkEqual(true, equalDeep(['a'], ['a']));
        checkEqual(false, equalDeep(['a'], ['b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(false, equalDeep(['a', 'a'], ['a', 'b']));
        checkEqual(true, equalDeep(['a', 'b'], ['a', 'b']));
        checkEqual(true, equalDeep([['a', 'b'], 'c'], [['a', 'b'], 'c']));
        checkEqual(false, equalDeep([['a', 'b'], 'c'], ['a', ['b', 'c']]));
        checkEqual(true, equalDeep([['a', ['b'], 'c']], [['a', ['b'], 'c']]));
        checkEqual(false, equalDeep([['a', ['b'], 'c']], [['a', ['a'], 'c']]));
        checkEqual(true, equalDeep([undefined], [undefined]));
        checkEqual(false, equalDeep([undefined], [null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(false, equalDeep([undefined, undefined], [undefined, null]));
        checkEqual(true, equalDeep([undefined, null], [undefined, null]));
        checkEqual(true, equalDeep([[undefined, null], undefined], [[undefined, null], undefined]));
        checkEqual(false, equalDeep([[undefined, null], undefined], [undefined, [null, undefined]]));
        checkEqual(true, equalDeep([[undefined, [null], undefined]], [[undefined, [null], undefined]]));
        checkEqual(false, equalDeep([[undefined, [null], undefined]], [[undefined, ['a'], undefined]]));

        if (objectParameter === false) {
          return;
        } // Object Named Parameter


        checkEqual(true, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 4]
        }));
        checkEqual(false, equalDeep({
          value1: [1, 2, 3, 4],
          value2: [1, 2, 3, 5]
        }));
      });
    };

    var test_equalDeep_array_CircularReference = function test_equalDeep_array_CircularReference() {
      it('test_equalDeep_array_CircularReference', function () {
        // CircularReference
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 1');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array1);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 2');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array1);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 3');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array2);
        checkEqual(true, equalDeep(array1, array2), 'test_equalDeep array CircularReference 4');
        var array1 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array2 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        var array3 = [{
          a: '1',
          b: '2'
        }, 1, 2];
        array1.push(array2);
        array2.push(array3);
        checkEqual(false, equalDeep(array1, array2), 'test_equalDeep array CircularReference 5');
      });
    };

    var test_equalDeep_date = function test_equalDeep_date() {
      it('test_equalDeep_date', function () {
        // date
        checkEqual(true, equalDeep(new Date('2019/11/02'), new Date('2019/11/02')), 'test_equalDeep date'); // date in object

        checkEqual(true, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }), 'test_equalDeep date'); // date in array

        checkEqual(true, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')]), 'test_equalDeep date'); // date ignore

        var equalFuncArray = [equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value]; // date

        checkEqual(false, equalDeep(new Date('2019/11/02'), new Date('2019/11/02'), equalFuncArray), 'test_equalDeep date'); // date in object

        checkEqual(false, equalDeep({
          date: new Date('2019/11/02')
        }, {
          date: new Date('2019/11/02')
        }, equalFuncArray), 'test_equalDeep date in object'); // date in array

        checkEqual(false, equalDeep([new Date('2019/11/02')], [new Date('2019/11/02')], equalFuncArray), 'test_equalDeep date');
      });
    };

    var test_equalDeep_regexp = function test_equalDeep_regexp() {
      it('test_equalDeep_regexp', function () {
        // regexp
        checkEqual(true, equalDeep(new RegExp(/^a/), new RegExp(/^a/)), 'test_equal regexp'); // regexp in object

        checkEqual(true, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }), 'test_equal regexp'); // regexp in array

        checkEqual(true, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)]), 'test_equal regexp'); // regexp ignore

        var equalFuncArray = [equal.func.value, equal.func.object, equal.func.arraySeries, equal.func["function"], equal.func.date]; // regexp

        checkEqual(false, equalDeep(new RegExp(/^a/), new RegExp(/^a/), equalFuncArray), 'test_equal regexp'); // regexp in object

        checkEqual(false, equalDeep({
          reg: new RegExp(/^a/)
        }, {
          reg: new RegExp(/^a/)
        }, equalFuncArray), 'test_equal regexp'); // regexp in array

        checkEqual(false, equalDeep([new RegExp(/^a/)], [new RegExp(/^a/)], equalFuncArray), 'test_equal regexp');
      });
    };

    var test_equalDeep_map = function test_equalDeep_map() {
      it('test_equalDeep_map', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map


        var map1 = new Map();
        map1.set('a', 1);
        map1.set('b', 2);
        var map2 = new Map();
        map2.set('a', 1);
        map2.set('b', 2);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map'); // ignore Map

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equalDeep(map1, map2, equalFuncArray)); // Map in object

        checkEqual(false, equalDeep({
          map: map1
        }, {
          map: map2
        }, equalFuncArray)); // Map in array

        checkEqual(false, equalDeep([map1], [map2], equalFuncArray));
      });
    };

    var test_equalDeep_map_object_array = function test_equalDeep_map_object_array() {
      it('test_equalDeep_map_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Map Object Array


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        checkEqual(true, equalDeep(map1, map2), 'test_equal Map object array'); // Map in object

        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map object array'); // Map in array

        checkEqual(true, equalDeep([map1], [map2]), 'test_equal Map object array'); // more map add object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map2.set('b', {
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          map: map1
        }, {
          map: map2
        }), 'test_equal Map set object'); // more map set object

        var map1 = new Map();
        map1.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        map1.set('b', {
          c: 3,
          b: 4
        });
        var map2 = new Map();
        map2.set('a', {
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        map2.set('b', {
          c: 3,
          b: 4
        });
        checkEqual(false, equalDeep({
          map: map1
        }, {
          map: map2
        }));
      });
    };

    var test_equalDeep_map_CircularReference = function test_equalDeep_map_CircularReference() {
      it('test_equalDeep_map_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // CircularReference


        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map1);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map2);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map1);
        checkEqual(true, equalDeep(map1, map2));
        var map1 = new Map();
        map1.set('a', {
          a: '1'
        });
        map1.set('b', ['b']);
        var map2 = new Map();
        map2.set('a', {
          a: '1'
        });
        map2.set('b', ['b']);
        var map3 = new Map();
        map3.set('a', {
          a: '1'
        });
        map3.set('b', ['b']);
        map1.set('map', map2);
        map2.set('map', map3);
        checkEqual(false, equalDeep(map1, map2));
      });
    };

    var test_equalDeep_set = function test_equalDeep_set() {
      it('test_equalDeep_set', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set


        var set1 = new Set();
        set1.add('a');
        set1.add('b');
        var set2 = new Set();
        set2.add('a');
        set2.add('b');
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set1'); // Set in object

        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }), 'test_equal Set2'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set3'); // ignore Set

        var equalFuncArray = [equal.func.date, equal.func.regExp, equal.func["function"], equal.func.arraySeries, equal.func.object, equal.func.value];
        checkEqual(false, equalDeep(set1, set2, equalFuncArray)); // Set in object

        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }, equalFuncArray)); // Set in array

        checkEqual(false, equalDeep([set1], [set2], equalFuncArray));
      });
    };

    var test_equalDeep_set_object_array = function test_equalDeep_set_object_array() {
      it('test_equalDeep_set_object_array', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // Set Object Array


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        checkEqual(true, equalDeep(set1, set2), 'test_equal Set object array'); // Set in object

        checkEqual(true, equalDeep({
          map: set1
        }, {
          map: set2
        }), 'test_equal Set object array'); // Set in array

        checkEqual(true, equalDeep([set1], [set2]), 'test_equal Set object array'); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set2.add({
          c: 3,
          b: 4
        });
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        })); // more set add object object

        var set1 = new Set();
        set1.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          }
        });
        set1.add({
          c: 3,
          b: 4
        });
        var set2 = new Set();
        set2.add({
          a: 1,
          b: 2,
          c: {
            c1: 10
          },
          d: ''
        });
        set2.add({
          c: 3,
          b: 4
        });
        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }));
      });
    };

    var test_equalDeep_set_CircularReference = function test_equalDeep_set_CircularReference() {
      it('test_equalDeep_set_CircularReference', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        } // CircularReference


        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set1);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set2);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        set1.add(set2);
        set2.add(set1);
        checkEqual(true, equalDeep({
          set: set1
        }, {
          set: set2
        }));
        var set1 = new Set();
        set1.add({
          a: '1'
        });
        set1.add(['b']);
        var set2 = new Set();
        set2.add({
          a: '1'
        });
        set2.add(['b']);
        var set3 = new Set();
        set3.add({
          a: '1'
        });
        set3.add(['b']);
        set1.add(set2);
        set2.add(set3);
        checkEqual(false, equalDeep({
          set: set1
        }, {
          set: set2
        }));
      });
    };

    var test_or = function test_or() {
      it('test_or', function () {
        var value;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [null]));
        checkEqual(false, or(value, [null, null]));
        checkEqual(false, or(value, [null, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, undefined]));
        checkEqual(true, or(value, [undefined, 0]));
        value = null;
        checkEqual(false, or(value, []));
        checkEqual(false, or(value, [undefined]));
        checkEqual(false, or(value, [undefined, undefined]));
        checkEqual(false, or(value, [undefined, 0]));
        checkEqual(false, or(value, [0, '']));
        checkEqual(true, or(value, [null]));
        checkEqual(true, or(value, [null, undefined]));
        checkEqual(true, or(value, [undefined, null]));
        checkEqual(true, or(value, [null, null]));
        checkEqual(true, or(value, [null, 0]));
        value = 1;
        checkEqual(true, or(value, [1]));
        checkEqual(true, or(value, [1, 2]));
        checkEqual(true, or(value, [1, 2, 3]));
        checkEqual(false, or(value, [2]));
        checkEqual(false, or(value, [2, 3])); // exception

        checkEqual(true, isThrown(function () {
          or(123, 456);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, or({
          value: 1,
          compareArray: [1, 2]
        }));
        checkEqual(false, or({
          value: 0,
          compareArray: [1, 2]
        })); // exception

        checkEqual(false, isThrown(function () {
          or({
            value: 1,
            compareArray: [1, 2]
          });
        }));
        checkEqual(true, isThrown(function () {
          or({
            value: 1,
            array: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(true, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
        checkEqual(false, isThrown(function () {
          or({
            value1: 1,
            compareArray: [1, 2]
          }, []);
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'or args(compareArray) is not array';
        }));
      });
    };

    var test_match = function test_match() {
      it('test_match', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual(false, match('', null));
        checkEqual(true, match('', ''));
        checkEqual(false, match('123', null));
        checkEqual(false, match('123', undefined));
        checkEqual(false, match('123', 123));
        checkEqual(true, match('123', '123'));
        checkEqual(false, match(undefined, null));
        checkEqual(true, match(undefined, undefined));
        checkEqual(true, match(null, null));
        checkEqual(false, match(null, undefined));
        checkEqual(true, match('1', isString));
        checkEqual(false, match(1, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(true, match({}, isEmptyObject));
        checkEqual(false, match({
          a: 1
        }, isEmptyObject));
        checkEqual(true, match('100', '100'));
        checkEqual(false, match('200', '100'));
        checkEqual(false, match(100, '100'));
        checkEqual(false, match(200, '100'));
        checkEqual(false, match(null, '100'));
        checkEqual(true, match('100', isString));
        checkEqual(true, match('200', isString));
        checkEqual(false, match(100, isString));
        checkEqual(false, match(200, isString));
        checkEqual(false, match(null, isString));
        checkEqual(false, match(undefined, isString));
        checkEqual(false, match('100', isInteger));
        checkEqual(false, match('200', isInteger));
        checkEqual(true, match(100, isInteger));
        checkEqual(true, match(200, isInteger));
        checkEqual(false, match(null, isInteger));
        checkEqual(false, match(undefined, isInteger));
        checkEqual(false, match({
          value: '123',
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match({
          value: null,
          compare: undefined
        })); // object parameter

        checkEqual(false, match({
          value: null,
          compare: undefined
        }));
        checkEqual(true, match({
          value: undefined,
          compare: undefined
        }));
        checkEqual(false, match(null, {
          compare: undefined
        }));
        checkEqual(true, match(undefined, {
          compare: undefined
        })); // checkEqual(101,
        //   matchValue({ value: null,       compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue({ value: undefined,  compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      { compare: undefined, match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, { compare: undefined, match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, { match: 100, unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, { match: 200, unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, { unmatch: 101 }));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, { unmatch: 201 }));
        // checkEqual(101,
        //   matchValue(null,      undefined, 100, 101));
        // checkEqual(200,
        //   matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_matchValue = function test_matchValue() {
      it('test_matchValue', function () {
        var stringToInteger = parts.stringToInteger;
        checkEqual('', matchValue('', null, 999));
        checkEqual(999, matchValue('', '', 999));
        checkEqual('123', matchValue('123', null, 999));
        checkEqual('123', matchValue('123', undefined, 999));
        checkEqual('123', matchValue('123', 123, 999));
        checkEqual(999, matchValue('123', '123', 999));
        checkEqual(undefined, matchValue(undefined, null, 999));
        checkEqual(999, matchValue(undefined, undefined, 999));
        checkEqual(999, matchValue(null, null, 999));
        checkEqual(null, matchValue(null, undefined, 999));
        checkEqual(1, matchValue('1', isString, stringToInteger));
        checkEqual(1, matchValue(1, isString, stringToInteger));
        checkEqual(null, matchValue(null, isString, stringToInteger));
        checkEqual(undefined, matchValue(undefined, isString, stringToInteger));
        checkEqual('test', matchValue({}, isEmptyObject, 'test'));
        checkEqual({
          a: 1
        }, matchValue({
          a: 1
        }, isEmptyObject, 'test'));
        checkEqual('$100', matchValue('100', '100', function (v) {
          return '$' + v;
        }));
        checkEqual('200', matchValue('200', '100', function (v) {
          return '$' + v;
        }));
        checkEqual(100, matchValue(100, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(200, matchValue(200, '100', function (v) {
          return '$' + v;
        }));
        checkEqual(null, matchValue(null, '100', function (v) {
          return '$' + v;
        }));
        checkEqual('$100', matchValue('100', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('$200', matchValue('200', isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(100, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(200, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(null, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('', matchValue(undefined, isString, function (v) {
          return '$' + v;
        }, ''));
        checkEqual('?100', matchValue('100', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?200', matchValue('200', isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$100', matchValue(100, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('$200', matchValue(200, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?null', matchValue(null, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('?undefined', matchValue(undefined, isInteger, function (v) {
          return '$' + v;
        }, function (v) {
          return '?' + v;
        }));
        checkEqual('123', matchValue({
          value: '123',
          compare: undefined,
          match: 999
        }));
        checkEqual(999, matchValue({
          value: undefined,
          compare: undefined,
          match: 999
        }));
        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 999
        })); // object parameter

        checkEqual(null, matchValue({
          value: null,
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, {
          compare: undefined,
          match: 100
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, {
          match: 100
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200
        }));
        checkEqual(null, matchValue(null, undefined, 100));
        checkEqual(200, matchValue(undefined, undefined, 200));
        checkEqual(101, matchValue({
          value: null,
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue({
          value: undefined,
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, {
          compare: undefined,
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, {
          compare: undefined,
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, {
          match: 100,
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, {
          match: 200,
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, {
          unmatch: 101
        }));
        checkEqual(200, matchValue(undefined, undefined, 200, {
          unmatch: 201
        }));
        checkEqual(101, matchValue(null, undefined, 100, 101));
        checkEqual(200, matchValue(undefined, undefined, 200, 201));
      });
    };

    var test_initialValue = function test_initialValue() {
      it('test_initialValue', function () {
        // almost test_matchSome done
        checkEqual('123', initialValue('123', 999));
        checkEqual(999, initialValue(undefined, 999));
        checkEqual(null, initialValue(null, 999));
        checkEqual('123', initialValue({
          value: '123',
          match: 999
        }));
        checkEqual(999, initialValue({
          value: undefined,
          match: 999
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 999
        }));
        checkEqual('[object Object]', String(initialValue({}, 'test')));
        checkEqual('null', String(initialValue(null, {})));
        checkEqual('[object Object]', String(initialValue(undefined, {}))); // object parameter

        checkEqual(null, initialValue({
          value: null,
          match: 100
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200
        }));
        checkEqual(null, initialValue(null, {
          match: 100
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200
        }));
        checkEqual(null, initialValue(null, 100));
        checkEqual(200, initialValue(undefined, 200));
        checkEqual(100, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue({
          value: undefined,
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue({
          value: null,
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, {
          match: 100,
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, {
          match: 200,
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, {
          match: 100,
          compareArray: [undefined]
        }));
        checkEqual(100, initialValue(null, 100, {
          compareArray: [undefined, null]
        }));
        checkEqual(200, initialValue(undefined, 200, {
          compareArray: [undefined, null]
        }));
        checkEqual(null, initialValue(null, 100, {
          compareArray: [undefined]
        }));
      });
    };

    var test_allMatch = function test_allMatch() {
      it('test_allMatch', function () {
        checkEqual(true, allMatch([10, 20, 30], function (value) {
          return value > 5;
        }));
        checkEqual(false, allMatch([10, 20, 30], function (value) {
          return value > 15;
        }));
        checkEqual(true, allMatch([null, undefined], function (value) {
          return value == null;
        }));
        checkEqual(false, allMatch([null, undefined], null));
        checkEqual(false, isThrown(function () {
          allMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          allMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(true, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(true, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 5;
          }
        }));
        checkEqual(false, allMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 15;
          }
        }));
      });
    };

    var test_someMatch = function test_someMatch() {
      it('test_someMatch', function () {
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 5;
        }), 'test_match');
        checkEqual(true, someMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(false, someMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(true, someMatch([null, undefined], null));
        checkEqual(true, someMatch([null, undefined], isUndefined));
        checkEqual(true, someMatch([null, undefined], isNull));
        checkEqual(true, someMatch([null, undefined, NaN], isNaNStrict)); // object parameter

        checkEqual(true, someMatch({
          valueArray: [10, 20],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch({
          valueArray: [10, 15],
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(true, someMatch([10, 20], {
          compare: function compare(v) {
            return v > 15;
          }
        }));
        checkEqual(false, someMatch([10, 15], {
          compare: function compare(v) {
            return v > 15;
          }
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          someMatch(10, function (value) {
            return value > 15;
          });
        }));
      });
    };

    var test_indexOfMatch = function test_indexOfMatch() {
      it('test_indexOfMatch', function () {
        checkEqual(0, indexOfMatch([10, 20, 30], function (value) {
          return value > 5;
        }));
        checkEqual(2, indexOfMatch([10, 20, 30], function (value) {
          return value > 25;
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], function (value) {
          return value > 35;
        }));
        checkEqual(0, indexOfMatch([null, undefined], null));
        checkEqual(1, indexOfMatch([null, undefined], isUndefined));
        checkEqual(0, indexOfMatch([null, undefined], isNull));
        checkEqual(2, indexOfMatch([null, undefined, NaN], isNaNStrict));
        checkEqual(false, isThrown(function () {
          indexOfMatch([10], function (value) {
            return value > 15;
          });
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatch(10, function (value) {
            return value > 15;
          });
        })); // object parameter

        checkEqual(1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 15;
          }
        }));
        checkEqual(-1, indexOfMatch({
          valueArray: [10, 20, 30],
          compare: function compare(value) {
            return value > 35;
          }
        }));
        checkEqual(2, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 25;
          }
        }));
        checkEqual(-1, indexOfMatch([10, 20, 30], {
          compare: function compare(value) {
            return value > 35;
          }
        }));
      });
    };

    var test_matchSome = function test_matchSome() {
      it('test_matchSome', function () {
        // normal args string
        checkEqual(false, matchSome('abc', ['123', '456', '789']), 'test_match 1');
        checkEqual(true, matchSome('abc', ['123', '456', 'abc']), 'test_match 2');
        checkEqual(false, matchSome('abc', ['123', '456', /^b/]), 'test_match 3');
        checkEqual(true, matchSome('abc', ['123', '456', /^a/]), 'test_match 4');
        checkEqual(false, matchSome('abc', []), 'test_match 5');
        checkEqual(false, matchSome('123', [null, undefined, 123, 'abc']), 'test_match 6');
        checkEqual(true, matchSome('abc', [function (value) {
          return isFirst(value, 'a');
        }]), 'test_match 7');
        checkEqual(false, matchSome('abc', [function (value) {
          return isFirst(value, 'b');
        }]), 'test_match 8'); // normal args number

        checkEqual(false, matchSome(123, ['123', '456', '789']), 'test_match number 1');
        checkEqual(true, matchSome(123, [123, 456, 'abc']), 'test_match number 2');
        checkEqual(false, matchSome(123, ['123', '456', /^1/]), 'test_match number 3');
        checkEqual(true, matchSome(123, [123, '456', /^1/]), 'test_match number 4');
        checkEqual(false, matchSome(123, []), 'test_match number 5');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match number 6');
        checkEqual(true, matchSome(100, [function (value) {
          return 100 <= value;
        }]), 'test_match 7');
        checkEqual(false, matchSome(99, [function (value) {
          return 100 <= value;
        }]), 'test_match 8');
        checkEqual(true, matchSome(null, [null, undefined, 123, 'abc']), 'test_match 1');
        checkEqual(true, matchSome(undefined, [null, undefined, 123, 'abc']), 'test_match 2');
        checkEqual(true, matchSome(123, [null, undefined, 123, 'abc']), 'test_match 3');
        checkEqual(true, matchSome('abc', [null, undefined, 123, 'abc']), 'test_match 4');
        checkEqual(true, matchSome(1, [null, undefined, 1, '1']));
        checkEqual(false, matchSome(1, [null, undefined, 2, '1']));
        checkEqual(true, matchSome('1', [null, undefined, 1, '1']));
        checkEqual(false, matchSome('1', [null, undefined, 1, '2']));
        checkEqual(true, matchSome(null, [null, undefined, 0]));
        checkEqual(true, matchSome(undefined, [null, undefined, 0]));
        checkEqual(true, matchSome(0, [null, undefined, 0]));
        checkEqual(false, matchSome(null, [undefined, 0]));
        checkEqual(false, matchSome(undefined, [null, 0]));
        checkEqual(false, matchSome(0, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(null, [null, undefined, isEmptyObject]));
        checkEqual(true, matchSome(undefined, [null, undefined]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome(undefined, [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome([], [null, undefined]));
        checkEqual(true, matchSome([], [null, undefined, isEmptyArray]));
        checkEqual(false, matchSome([], [null, undefined, isEmptyObject]));
        checkEqual(false, matchSome({}, [null, undefined]));
        checkEqual(false, matchSome({}, [null, undefined, isEmptyArray]));
        checkEqual(true, matchSome({}, [null, undefined, isEmptyObject])); // exception

        checkEqual(true, isThrownException(function () {
          matchSome('123', 'abc');
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', '789']
        }), 'test_match param 1');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', 'abc']
        }), 'test_match param 2');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^b/]
        }), 'test_match param 3');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: ['123', '456', /^a/]
        }), 'test_match param 4');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: []
        }), 'test_match param 5');
        checkEqual(false, matchSome({
          value: '123',
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param 6');
        checkEqual(true, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'a');
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 'abc',
          compareArray: [function (value) {
            return isFirst(value, 'b');
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome('abc', {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome('abc', {
          compareArray: ['123', '456', 'abc']
        })); // Object Named Parameter number

        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', '789']
        }), 'test_match param number 1');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, 456, 'abc']
        }), 'test_match param number 2');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: ['123', '456', /^1/]
        }), 'test_match param number 3');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [123, '456', /^1/]
        }), 'test_match param number 4');
        checkEqual(false, matchSome({
          value: 123,
          compareArray: []
        }), 'test_match param number 5');
        checkEqual(true, matchSome({
          value: 123,
          compareArray: [null, undefined, 123, 'abc']
        }), 'test_match param number 6');
        checkEqual(true, matchSome({
          value: 100,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 7');
        checkEqual(false, matchSome({
          value: 99,
          compareArray: [function (value) {
            return 100 <= value;
          }]
        }), 'test_match param 8');
        checkEqual(false, matchSome(123, {
          compareArray: ['123', '456', '789']
        }));
        checkEqual(true, matchSome(123, {
          compareArray: [123, 456, 'abc']
        })); // exception

        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: ['123']
          });
        }), 'test_match thrown 1');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: []
          });
        }), 'test_match thrown 2');
        checkEqual(false, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 3');
        checkEqual(true, isThrown(function () {
          matchSome({
            value: '123',
            compareArray: 123
          });
        }, function (e) {
          return e.name === new TypeError().name && e.message === 'matchSome args(compareArray) is not array';
        }), 'test_match thrown 4');
        checkEqual(true, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          });
        }), 'test_match thrown 5');
        checkEqual(false, isThrown(function () {
          matchSome({
            value1: '123',
            compareArray: [123]
          }, []);
        }), 'test_match thrown 5');
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, []));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return true;
        }]));
        checkEqual(false, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function () {
          return false;
        }]));
        checkEqual(true, matchSome({
          value1: '123',
          compareArray: [123]
        }, [function (value) {
          return isObject(value);
        }]));
      });
    };

    var test_matchSomeValue = function test_matchSomeValue() {
      it('test_matchSomeValue', function () {
        // almost test_matchSome done
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(98, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue(97, [99, 98, 97], 999));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], 999));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], {
          match: 999,
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(100, matchSomeValue(96, [99, 98, 97], 999, {
          unmatch: 100
        }));
        checkEqual(999, matchSomeValue({
          value: 99,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue({
          value: 96,
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, {
          compareArray: [99, 98, 97],
          match: 999
        }));
        checkEqual(999, matchSomeValue(99, [99, 98, 97], {
          match: 999
        }));
        checkEqual(96, matchSomeValue(96, [99, 98, 97], {
          match: 999
        }));
      });
    };

    var test_allMatchSome = function test_allMatchSome() {
      it('test_allMatchSome', function () {
        checkEqual(true, allMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]));
        checkEqual(false, allMatchSome([10, 20, 30], [function (value) {
          return value > 15;
        }]));
        checkEqual(true, allMatchSome([null, undefined], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined], [null]));
        checkEqual(true, allMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(false, allMatchSome([null, undefined], [isNull]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(false, allMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, allMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict])); // object parameter

        checkEqual(true, allMatchSome({
          valueArray: [10, 30, 40],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, allMatchSome([10, 30, 40], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, allMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 15;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          allMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          allMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_someMatchSome = function test_someMatchSome() {
      it('test_someMatchSome', function () {
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSome');
        checkEqual(true, someMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(false, someMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(true, someMatchSome([null, undefined], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined], [null]));
        checkEqual(true, someMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(true, someMatchSome([null, undefined], [isNull]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(false, someMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(true, someMatchSome([null, undefined, NaN], [isNaNStrict])); // object parameter

        checkEqual(true, someMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome({
          valueArray: [10, 20, 25],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(true, someMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(false, someMatchSome([10, 20, 25], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          someMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          someMatchSome(10, [function (value) {
            return value > 15;
          }]);
        }));
      });
    };

    var test_indexOfMatchSome = function test_indexOfMatchSome() {
      it('test_indexOfMatchSome', function () {
        checkEqual(0, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 5;
        }]), 'test_matchSomeIndex');
        checkEqual(2, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 25;
        }]));
        checkEqual(-1, indexOfMatchSome([10, 20, 30], [function (value) {
          return value > 35;
        }]));
        checkEqual(0, indexOfMatchSome([null, undefined], [null, undefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined], [isNull, isUndefined]));
        checkEqual(1, indexOfMatchSome([null, undefined], [isUndefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, NaN]));
        checkEqual(0, indexOfMatchSome([null, undefined, NaN], [null, undefined, isNaNStrict]));
        checkEqual(-1, indexOfMatchSome([null, undefined, NaN], [NaN]));
        checkEqual(2, indexOfMatchSome([null, undefined, NaN], [isNaNStrict]));
        checkEqual(false, isThrown(function () {
          indexOfMatchSome([10], [function (value) {
            return value > 15;
          }]);
        }));
        checkEqual(true, isThrown(function () {
          indexOfMatchSome(10, [function (value) {
            return value > 15;
          }]);
        })); // object parameter

        checkEqual(2, indexOfMatchSome({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome({
          valueArray: [5, 10, 20],
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(2, indexOfMatchSome([10, 20, 30], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(0, indexOfMatchSome([1, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
        checkEqual(-1, indexOfMatchSome([5, 10, 20], {
          compareArray: [function (v) {
            return v < 5;
          }, function (v) {
            return 25 < v;
          }]
        }));
      });
    };

    var test_matchAll = function test_matchAll() {
      it('test_matchAll', function () {
        // normal args string
        checkEqual(false, matchAll('abc', []));
        checkEqual(true, matchAll('abc', ['abc']));
        checkEqual(false, matchAll('abc', ['abc', 'def']));
        checkEqual(false, matchAll('abc', ['abc', undefined]));
        checkEqual(false, matchAll('abc', ['abc', null]));
        checkEqual(false, matchAll('abc', ['abc', '']));
        checkEqual(true, matchAll('abc', [/^a/]));
        checkEqual(true, matchAll('abc', [/c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, matchAll('abc', [/^a/, /^b.*/, /c$/]));
        checkEqual(true, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, matchAll('abc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(true, matchAll('aabcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }]));
        checkEqual(false, matchAll('aabbcc', [/^a/, /.*b.*/, /c$/, function (value) {
          return value.length >= 3;
        }, function (value) {
          return value.length <= 5;
        }])); // normal args number

        checkEqual(false, matchAll(100, []));
        checkEqual(true, matchAll(100, [100]));
        checkEqual(false, matchAll(100, [100, 0]));
        checkEqual(false, matchAll(100, [100, undefined]));
        checkEqual(false, matchAll(100, [100, null]));
        checkEqual(false, matchAll(100, [100, NaN]));
        checkEqual(true, matchAll(100, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(110, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(false, matchAll(111, [function (value) {
          return value >= 100;
        }, function (value) {
          return value <= 110;
        }]));
        checkEqual(true, matchAll(null, [null]));
        checkEqual(false, matchAll(null, [null, undefined]));
        checkEqual(false, matchAll(null, [undefined]));
        checkEqual(false, matchAll(undefined, [null]));
        checkEqual(false, matchAll(undefined, [null, undefined]));
        checkEqual(true, matchAll(undefined, [undefined])); // exception

        checkEqual(false, isThrownException(function () {
          matchAll('123', ['123']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll('123', '123');
        }, new TypeError().name));
        checkEqual(false, isThrownException(function () {
          matchAll(123, [123]);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          matchAll(123, 123);
        }, new TypeError().name)); // Object Named Parameter string

        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll({
          value: 'abc',
          compareArray: ['abc', '']
        }));
        checkEqual(true, matchAll({
          value: 'abc',
          compareArray: [/^a/, /.*b.*/, /c$/]
        }));
        checkEqual(true, matchAll('abc', {
          compareArray: ['abc']
        }));
        checkEqual(false, matchAll('abc', {
          compareArray: ['abc', '']
        })); // Object Named Parameter number

        checkEqual(true, matchAll({
          value: 100,
          compareArray: [10 * 10]
        }));
        checkEqual(false, matchAll({
          value: 100,
          compareArray: [100, 101]
        }));
        checkEqual(true, matchAll({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, matchAll(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, matchAll(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        })); // exception

        checkEqual(false, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: ['abc']
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 'abc',
            compareArray: 'abc'
          });
        }));
        checkEqual(false, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value >= 100;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
        checkEqual(true, isThrown(function () {
          matchAll({
            value: 100,
            compareArray: [function (value) {
              return value;
            }, function (value) {
              return value <= 110;
            }]
          });
        }));
      });
    };

    var test_matchAllValue = function test_matchAllValue() {
      it('test_matchAllValue', function () {
        checkEqual(999, matchAllValue(99, [99], 999));
        checkEqual(98, matchAllValue(98, [99], 999));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999)); // Object Parameter

        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999,
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(888, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], 999, {
          unmatch: 888
        }));
        checkEqual(999, matchAllValue({
          value: 100,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue({
          value: 110,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue({
          value: 111,
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(110, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(111, matchAllValue(111, {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }],
          match: 999
        }));
        checkEqual(999, matchAllValue(100, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(999, matchAllValue(110, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
        checkEqual(111, matchAllValue(111, [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }], {
          match: 999
        }));
      });
    };

    var test_allMatchAll = function test_allMatchAll() {
      it('test_allMatchAll', function () {
        checkEqual(false, allMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll(['abc', 'aabc', 'aabbcc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, allMatchAll(['abc', 'aabc', 'aacc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, allMatchAll([100, 105, 110], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, allMatchAll([100, 105, 111], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));

        var testAllMatchAll = function testAllMatchAll(replaceArray) {
          return allMatchAll(replaceArray, [isArray, function (element) {
            return element.length === 2;
          }, function (element) {
            return isStringArray(element);
          }]);
        };

        testCounter();
        checkEqual(false, testAllMatchAll([]));
        checkEqual(false, testAllMatchAll([1, 2]));
        checkEqual(false, testAllMatchAll(['a', 'b']));
        checkEqual(true, testAllMatchAll([['a', 'b']]));
        checkEqual(true, testAllMatchAll([['a', 'b'], ['c', 'd']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c']]));
        checkEqual(false, testAllMatchAll([['a', 'b'], ['c', 1]])); // object parameter

        checkEqual(true, allMatchAll({
          valueArray: [100, 105, 110],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll({
          valueArray: [100, 105, 111],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, allMatchAll([100, 105, 110], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, allMatchAll([100, 105, 111], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_someMatchAll = function test_someMatchAll() {
      it('test_someMatchAll', function () {
        checkEqual(false, someMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(false, someMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(true, someMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(false, someMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(true, someMatchAll({
          valueArray: [111, 110, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll({
          valueArray: [111, 115, 120],
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(true, someMatchAll([111, 110, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
        checkEqual(false, someMatchAll([111, 115, 120], {
          compareArray: [function (v) {
            return 100 <= v;
          }, function (v) {
            return v <= 110;
          }]
        }));
      });
    };

    var test_indexOfMatchAll = function test_indexOfMatchAll() {
      it('test_indexOfMatchAll', function () {
        checkEqual(-1, indexOfMatchAll([], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll(['abc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(-1, indexOfMatchAll(['aaa', 'bbb', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(1, indexOfMatchAll(['aaa', 'abc', 'ccc'], [/^a/, /.*b.*/, /c$/]));
        checkEqual(0, indexOfMatchAll([105], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(-1, indexOfMatchAll([111, 115, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }]));
        checkEqual(1, indexOfMatchAll([111, 110, 120], [function (v) {
          return 100 <= v;
        }, function (v) {
          return v <= 110;
        }])); // object parameter

        checkEqual(0, indexOfMatchAll({
          valueArray: [10, 20, 30],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll({
          valueArray: [1, 10, 20],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll({
          valueArray: [5, 40, 50],
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(0, indexOfMatchAll([10, 20, 30], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(1, indexOfMatchAll([1, 10, 20], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
        checkEqual(-1, indexOfMatchAll([5, 40, 50], {
          compareArray: [function (v) {
            return 10 <= v;
          }, function (v) {
            return v <= 30;
          }]
        }));
      });
    };

    var test_includes = function test_includes() {
      it('test_includes', function () {
        if (!parts.platform.isWindowsScriptHost() && !parts.platform.isInternetExplorer() && !parts.platform.isGasRhino()) {
          checkEqual(true, 'abc'.includes('a')); // string.includes strange empty string

          checkEqual(true, 'abc'.includes(''));
          checkEqual(false, 'abc'.includes(null));
          checkEqual(false, 'abc'.includes(undefined));
          checkEqual(false, 'abc'.includes());
        }

        checkEqual(false, includes('abc', ''));
        checkEqual(true, includes('abc', 'a'));
        checkEqual(true, includes('abc', 'b'));
        checkEqual(false, includes('abc', 'd'));
        checkEqual(false, includes('', ''));
        checkEqual(false, includes('', 'a'));
        checkEqual(false, includes([], null));
        checkEqual(false, includes([], undefined));
        checkEqual(false, includes([], []));
        checkEqual(true, includes([0, 1, 2], 0));
        checkEqual(false, includes([0, 1, 2], 4));
        checkEqual(false, includes([0, 1, 2], []));
        checkEqual(false, includes({
          value: 'abc',
          compare: ''
        }));
        checkEqual(true, includes({
          value: 'abc',
          compare: 'c'
        }));
        checkEqual(false, includes({
          value: [],
          compare: null
        }));
        checkEqual(true, includes({
          value: [0, 1],
          compare: 0
        }));
      });
    };

    var test_includesSome = function test_includesSome() {
      it('test_includesSome', function () {
        checkEqual(false, includesSome('abc', ['']));
        checkEqual(true, includesSome('abc', ['', 'a']));
        checkEqual(false, includesSome('abc', ['', 'd']));
        checkEqual(true, includesSome('abc', ['a']));
        checkEqual(true, includesSome('abc', ['b']));
        checkEqual(false, includesSome('abc', ['d']));
        checkEqual(true, includesSome('abc', ['d', 'a']));
        checkEqual(true, includesSome('abc', ['a', 'd']));
        checkEqual(false, includesSome('abc', ['e', 'd']));
        checkEqual(false, includesSome([], [null]));
        checkEqual(false, includesSome([], [undefined]));
        checkEqual(false, includesSome([], []));
        checkEqual(false, includesSome([0, 1, 2], []));
        checkEqual(true, includesSome([0, 1, 2], [0]));
        checkEqual(false, includesSome([0, 1, 2], [4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 4]));
        checkEqual(true, includesSome([0, 1, 2], [0, 1]));
        checkEqual(false, includesSome([0, 1, 2], [4, 5]));
        checkEqual(false, includesSome({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesSome({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesSome({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesSome({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesSome('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesSome('abc', 'a');
        }));
        checkEqual(false, isThrownException(function () {
          includesSome('123', ['1']);
        }, new TypeError().name));
        checkEqual(true, isThrownException(function () {
          includesSome('123', [1]);
        }, new TypeError().name));
        checkEqual(false, isThrown(function () {
          includesSome([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesSome([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesSome(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 'abc',
            compareArray: [1]
          });
        }));
        checkEqual(false, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesSome({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    var test_includesAll = function test_includesAll() {
      it('test_includesAll', function () {
        checkEqual(false, includesAll('abc', ['']));
        checkEqual(false, includesAll('abc', ['', 'a']));
        checkEqual(false, includesAll('abc', ['', 'd']));
        checkEqual(true, includesAll('abc', ['a']));
        checkEqual(true, includesAll('abc', ['b']));
        checkEqual(false, includesAll('abc', ['d']));
        checkEqual(false, includesAll('abc', ['d', 'a']));
        checkEqual(false, includesAll('abc', ['a', 'd']));
        checkEqual(false, includesAll('abc', ['e', 'd']));
        checkEqual(true, includesAll('abc', ['c', 'a']));
        checkEqual(false, includesAll([], [null]));
        checkEqual(false, includesAll([], [undefined]));
        checkEqual(false, includesAll([], []));
        checkEqual(false, includesAll([0, 1, 2], []));
        checkEqual(true, includesAll([0, 1, 2], [0]));
        checkEqual(false, includesAll([0, 1, 2], [4]));
        checkEqual(false, includesAll([0, 1, 2], [0, 4]));
        checkEqual(true, includesAll([0, 1, 2], [0, 1]));
        checkEqual(false, includesAll([0, 1, 2], [4, 5]));
        checkEqual(false, includesAll({
          value: 'abc',
          compareArray: ['']
        }));
        checkEqual(true, includesAll({
          value: 'abc',
          compareArray: ['c']
        }));
        checkEqual(false, includesAll({
          value: [],
          compareArray: [null]
        }));
        checkEqual(true, includesAll({
          value: [0, 1],
          compareArray: [0]
        })); // exception

        checkEqual(false, isThrown(function () {
          includesAll('abc', ['a']);
        }));
        checkEqual(true, isThrown(function () {
          includesAll('abc', 'a');
        }));
        checkEqual(false, isThrown(function () {
          includesAll([0, 1, 2], [0, 10]);
        }));
        checkEqual(true, isThrown(function () {
          includesAll([0, 1, 2], 0);
        }));
        checkEqual(true, isThrown(function () {
          includesAll(0, [0, 10]);
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: ['a']
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 'abc',
            compareArray: 'a'
          });
        }));
        checkEqual(false, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: [0, 10]
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: [0, 1, 2],
            compareArray: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          includesAll({
            value: 0,
            compareArray: [0, 10]
          });
        }));
      });
    };

    var getProperty = parts.getProperty,
        recursive = parts.recursive,
        typeName = parts.typeName,
        isPrimitiveType = parts.isPrimitiveType;

    var equalDeepUseRecursive = function equalDeepUseRecursive(source, target) {
      var equalType = function equalType(value1, value2) {
        return typeName(value1) === typeName(value2);
      };

      var equalAccept = function equalAccept(source, target) {
        if (isPrimitiveType(source)) {
          if (source !== target) {
            return false;
          }

          return true;
        }

        if (!equalType(source, target)) {
          return false;
        }

        if (!(isObject(source) || isArray(source))) {
          return false;
        }

        if (isObject(source)) {
          if (Object.keys(source).length !== Object.keys(target).length) {
            return false;
          }
        }

        if (isArray(source)) {
          if (source.length !== target.length) {
            return false;
          }
        }

        return;
      };

      var accept = equalAccept(source, target);

      if (accept === true) {
        return true;
      }

      if (accept === false) {
        return false;
      }

      var result = true;
      recursive(source, function (value, key, level, path) {
        var targetValue = getProperty(target, path + '.' + key);
        var accept = equalAccept(value, targetValue);

        if (accept === true) {
          return;
        }

        if (accept === false) {
          result = false;
          return false;
        }

        return value;
      });
      return result;
    };

    test_equal();
    test_equal_object();
    test_equal_array();
    test_equal_date();
    test_equal_regexp();
    test_equal_map();
    test_equal_set();
    var equalDeep;
    equalDeep = equalDeepUseRecursive;
    test_equalDeep(false);
    test_equalDeep_object();
    test_equalDeep_array(false);
    test_equalDeep_object_array_mix();
    equalDeep = parts.compare.equalDeep;
    test_equalDeep();
    test_equalDeep_object();
    test_equalDeep_object_array_mix();
    test_equalDeep_object_CircularReference();
    test_equalDeep_array();
    test_equalDeep_array_CircularReference();
    test_equalDeep_date();
    test_equalDeep_regexp();
    test_equalDeep_map();
    test_equalDeep_map_object_array();
    test_equalDeep_map_CircularReference();
    test_equalDeep_set();
    test_equalDeep_set_object_array();
    test_equalDeep_set_CircularReference();
    test_or();
    test_match();
    test_matchValue();
    test_initialValue();
    test_allMatch();
    test_someMatch();
    test_indexOfMatch();
    test_matchSome();
    test_matchSomeValue();
    test_allMatchSome();
    test_someMatchSome();
    test_indexOfMatchSome();
    test_matchAll();
    test_matchAllValue();
    test_allMatchAll();
    test_someMatchAll();
    test_indexOfMatchAll();
    test_includes();
    test_includesSome();
    test_includesAll();
  });
};

exports.test_execute_compare = test_execute_compare;
var _default = {
  test_execute_compare: test_execute_compare
};
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_convert = void 0;

/* eslint-disable space-in-parens */

/* eslint-disable no-var */
var test_execute_convert = function test_execute_convert(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_convert', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$convert = parts.convert,
        numberToString = _parts$convert.numberToString,
        valueToString = _parts$convert.valueToString,
        stringToNumber = _parts$convert.stringToNumber,
        stringToNumberDefault = _parts$convert.stringToNumberDefault,
        stringToInteger = _parts$convert.stringToInteger,
        stringToIntegerDefault = _parts$convert.stringToIntegerDefault,
        valueToNumber = _parts$convert.valueToNumber,
        valueToNumberDefault = _parts$convert.valueToNumberDefault,
        valueToInteger = _parts$convert.valueToInteger,
        valueToIntegerDefault = _parts$convert.valueToIntegerDefault;

    var test_StringCast_standard = function test_StringCast_standard() {
      it('test_standardStringCast', function () {
        // Positive number
        checkEqual('32', String(32));
        checkEqual('31.5', String(31.5));
        checkEqual('255', String(255));
        checkEqual('11', String(11));
        checkEqual('255', String(0xFF));
        checkEqual('16', String(16));
        checkEqual('100000', String(1e+5));
        checkEqual('0.00001', String(1e-5));
        checkEqual('255', String(+0xFF));
        checkEqual('16', String(+16));
        checkEqual('100000', String(+1e+5));
        checkEqual('0.00001', String(+1e-5)); // Negative number

        checkEqual('-32', String(-32));
        checkEqual('-31.5', String(-31.5));
        checkEqual('-255', String(-255));
        checkEqual('-11', String(-11));
        checkEqual('-255', String(-0xFF));
        checkEqual('-16', String(-16));
        checkEqual('-100000', String(-1e+5));
        checkEqual('-0.00001', String(-1e-5)); // spacial number value

        checkEqual('NaN', String(NaN));
        checkEqual('Infinity', String(Infinity));
        checkEqual('-Infinity', String(-Infinity)); // other type

        checkEqual('null', String(null));
        checkEqual('undefined', String(undefined));
        checkEqual('[object Object]', String({}));
        checkEqual('', String([]));
        checkEqual('1', String([1]));
        checkEqual('1,2,3', String([1, 2, 3]));
        checkEqual('', String(''));
        checkEqual('a', String('a'));
        checkEqual('true', String(true));
        checkEqual('false', String(false));
      });
    };

    var test_toString_standard = function test_toString_standard() {
      it('test_standardToString', function () {
        // Positive number
        checkEqual('32', 32 .toString());
        checkEqual('31.5', 31.5.toString());
        checkEqual('255', 255 .toString());
        checkEqual('11', 11 .toString());
        checkEqual('255', 0xFF.toString());
        checkEqual('16', 16 .toString());
        checkEqual('100000', 1e+5.toString());
        checkEqual('0.00001', 1e-5.toString());
        checkEqual('255', (+0xFF).toString());
        checkEqual('16', (+16).toString());
        checkEqual('100000', (+1e+5).toString());
        checkEqual('0.00001', (+1e-5).toString()); // Negative number

        checkEqual('-32', (-32).toString());
        checkEqual('-31.5', (-31.5).toString());
        checkEqual('-255', (-255).toString());
        checkEqual('-11', (-11).toString());
        checkEqual('-255', (-0xFF).toString());
        checkEqual('-16', (-16).toString());
        checkEqual('-100000', (-1e+5).toString());
        checkEqual('-0.00001', (-1e-5).toString()); // spacial number value

        checkEqual('NaN', NaN.toString());
        checkEqual('Infinity', Infinity.toString());
        checkEqual('-Infinity', (-Infinity).toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -Infinity.toString());
        checkEqual(-Infinity, -'Infinity'); // Decimal number other

        checkEqual('1010.01', 10.25.toString(2));
        checkEqual('22.1', 10.25.toString(4));
        checkEqual('12.2', 10.25.toString(8));
        checkEqual('a.4', 10.25.toString(16)); // other type

        checkEqual(true, isThrown(function () {
          return null.toString();
        }));
        checkEqual(true, isThrown(function () {
          return undefined.toString();
        }));
        checkEqual('[object Object]', {}.toString());
        checkEqual('', [].toString());
        checkEqual('1', [1].toString());
        checkEqual('1,2,3', [1, 2, 3].toString());
        checkEqual('', ''.toString());
        checkEqual('a', 'a'.toString());
        checkEqual('true', true.toString());
        checkEqual('false', false.toString());
      });
    };

    var test_numberToString = function test_numberToString() {
      it('test_numberToString', function () {
        // Positive number
        checkEqual('32', numberToString(32));
        checkEqual('32.5', numberToString(32.5));
        checkEqual('32', numberToString(32, 10));
        checkEqual('31.5', numberToString(31.5, 10));
        checkEqual('100000', numberToString(32, 2));
        checkEqual('11111', numberToString(31, 2));
        checkEqual('11111.1', numberToString(31.5, 2));
        checkEqual('11111.01', numberToString(31.25, 2));
        checkEqual('40', numberToString(32, 8));
        checkEqual('37', numberToString(31, 8));
        checkEqual('37.4', numberToString(31.5, 8));
        checkEqual('20', numberToString(32, 16));
        checkEqual('1f', numberToString(31, 16));
        checkEqual('1f.8', numberToString(31.5, 16));
        checkEqual('44', numberToString(32, 7));
        checkEqual('43', numberToString(31, 7));
        checkEqual('255', numberToString(255));
        checkEqual('11', numberToString(11));
        checkEqual('255', numberToString(0xFF));
        checkEqual('16', numberToString(16));
        checkEqual('ff', numberToString(255, 16));
        checkEqual('b', numberToString(11, 16));
        checkEqual('177', numberToString(127, 8));
        checkEqual('12', numberToString(10, 8));
        checkEqual('11', numberToString(3, 2));
        checkEqual('1111', numberToString(15, 2)); // Negative number

        checkEqual('-32', numberToString(-32));
        checkEqual('-32.5', numberToString(-32.5));
        checkEqual('-32', numberToString(-32, 10));
        checkEqual('-31.5', numberToString(-31.5, 10));
        checkEqual('-100000', numberToString(-32, 2));
        checkEqual('-11111', numberToString(-31, 2));
        checkEqual('-11111.1', numberToString(-31.5, 2));
        checkEqual('-11111.01', numberToString(-31.25, 2));
        checkEqual('-40', numberToString(-32, 8));
        checkEqual('-37', numberToString(-31, 8));
        checkEqual('-37.4', numberToString(-31.5, 8));
        checkEqual('-20', numberToString(-32, 16));
        checkEqual('-1f', numberToString(-31, 16));
        checkEqual('-1f.8', numberToString(-31.5, 16));
        checkEqual('-44', numberToString(-32, 7));
        checkEqual('-43', numberToString(-31, 7));
        checkEqual('-255', numberToString(-255));
        checkEqual('-11', numberToString(-11));
        checkEqual('-255', numberToString(-0xFF));
        checkEqual('-16', numberToString(-16));
        checkEqual('-ff', numberToString(-255, 16));
        checkEqual('-b', numberToString(-11, 16));
        checkEqual('-177', numberToString(-127, 8));
        checkEqual('-12', numberToString(-10, 8));
        checkEqual('-11', numberToString(-3, 2));
        checkEqual('-1111', numberToString(-15, 2)); // spacial value

        checkEqual(true, isThrown(function () {
          return numberToString(NaN);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(Infinity);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(-Infinity);
        })); // Exception

        checkEqual(true, isThrown(function () {
          return numberToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return numberToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', numberToString({
          value: -32
        }));
        checkEqual('-100000', numberToString({
          value: -32,
          radix: 2
        })); // other type

        checkEqual(true, isThrown(function () {
          return numberToString(null);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(undefined);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString({});
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString('a');
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(true);
        }));
        checkEqual(true, isThrown(function () {
          return numberToString(false);
        }));
      });
    };

    var test_valueToString = function test_valueToString() {
      it('test_valueToString', function () {
        // Positive number
        checkEqual('32', valueToString(32));
        checkEqual('32.5', valueToString(32.5));
        checkEqual('32', valueToString(32, 10));
        checkEqual('31.5', valueToString(31.5, 10));
        checkEqual('100000', valueToString(32, 2));
        checkEqual('11111', valueToString(31, 2));
        checkEqual('11111.1', valueToString(31.5, 2));
        checkEqual('11111.01', valueToString(31.25, 2));
        checkEqual('40', valueToString(32, 8));
        checkEqual('37', valueToString(31, 8));
        checkEqual('37.4', valueToString(31.5, 8));
        checkEqual('20', valueToString(32, 16));
        checkEqual('1f', valueToString(31, 16));
        checkEqual('1f.8', valueToString(31.5, 16));
        checkEqual('44', valueToString(32, 7));
        checkEqual('43', valueToString(31, 7));
        checkEqual('255', valueToString(255));
        checkEqual('11', valueToString(11));
        checkEqual('255', valueToString(0xFF));
        checkEqual('16', valueToString(16));
        checkEqual('ff', valueToString(255, 16));
        checkEqual('b', valueToString(11, 16));
        checkEqual('177', valueToString(127, 8));
        checkEqual('12', valueToString(10, 8));
        checkEqual('11', valueToString(3, 2));
        checkEqual('1111', valueToString(15, 2)); // Negative number

        checkEqual('-32', valueToString(-32));
        checkEqual('-32.5', valueToString(-32.5));
        checkEqual('-32', valueToString(-32, 10));
        checkEqual('-31.5', valueToString(-31.5, 10));
        checkEqual('-100000', valueToString(-32, 2));
        checkEqual('-11111', valueToString(-31, 2));
        checkEqual('-11111.1', valueToString(-31.5, 2));
        checkEqual('-11111.01', valueToString(-31.25, 2));
        checkEqual('-40', valueToString(-32, 8));
        checkEqual('-37', valueToString(-31, 8));
        checkEqual('-37.4', valueToString(-31.5, 8));
        checkEqual('-20', valueToString(-32, 16));
        checkEqual('-1f', valueToString(-31, 16));
        checkEqual('-1f.8', valueToString(-31.5, 16));
        checkEqual('-44', valueToString(-32, 7));
        checkEqual('-43', valueToString(-31, 7));
        checkEqual('-255', valueToString(-255));
        checkEqual('-11', valueToString(-11));
        checkEqual('-255', valueToString(-0xFF));
        checkEqual('-16', valueToString(-16));
        checkEqual('-ff', valueToString(-255, 16));
        checkEqual('-b', valueToString(-11, 16));
        checkEqual('-177', valueToString(-127, 8));
        checkEqual('-12', valueToString(-10, 8));
        checkEqual('-11', valueToString(-3, 2));
        checkEqual('-1111', valueToString(-15, 2)); // spacial number value

        testCounter(0);
        checkEqual('NaN', valueToString(NaN));
        checkEqual('Infinity', valueToString(Infinity));
        checkEqual('-Infinity', valueToString(-Infinity)); // Exception

        checkEqual(false, isThrown(function () {
          return valueToString('123', 10);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 2);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 2.5);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 1);
        }));
        checkEqual(false, isThrown(function () {
          return valueToString(32, 36);
        }));
        checkEqual(true, isThrown(function () {
          return valueToString(32, 37);
        })); // Object Named Parameter

        checkEqual('-32', valueToString({
          value: -32
        }));
        checkEqual('-100000', valueToString({
          value: -32,
          radix: 2
        })); // Decimal number other

        checkEqual('1010.01', valueToString(10.25, 2));
        checkEqual('22.1', valueToString(10.25, 4));
        checkEqual('12.2', valueToString(10.25, 8));
        checkEqual('a.4', valueToString(10.25, 16)); // other type

        checkEqual('null', valueToString(null));
        checkEqual('undefined', valueToString(undefined));
        checkEqual('[object Object]', valueToString({}));
        checkEqual('', valueToString([]));
        checkEqual('1', valueToString([1]));
        checkEqual('1,2,3', valueToString([1, 2, 3]));
        checkEqual('', valueToString(''));
        checkEqual('a', valueToString('a'));
        checkEqual('true', valueToString(true));
        checkEqual('false', valueToString(false));
      });
    };

    var test_NumberCast_standard = function test_NumberCast_standard() {
      it('test_NumberCast_standard', function () {
        // Integer
        checkEqual(123, Number('123'));
        checkEqual(123, Number('0123'));
        checkEqual(123, Number('+123'));
        checkEqual(-123, Number('-0123'));
        checkEqual(123, Number(' 123'), '1');
        checkEqual(123, Number('123 '), '2');
        checkEqual(123, Number(' 123 '), '3');
        checkEqual(123, Number('　123'), '4');
        checkEqual(123, Number('123　'), '5');
        checkEqual(123, Number('　123　'), '6');
        checkEqual(NaN, Number('123 0'));
        checkEqual(NaN, Number('0 123'));
        checkEqual(NaN, Number('1 123'));
        checkEqual(NaN, Number('123a'));
        checkEqual(NaN, Number('a123')); // Decimal

        checkEqual(123.4, Number('123.4'));
        checkEqual(123.4, Number('0123.4'));
        checkEqual(123.4, Number('+123.4'));
        checkEqual(-123.4, Number('-0123.4'));
        checkEqual(123.5, Number('123.5'));
        checkEqual(123.5, Number('0123.5'));
        checkEqual(123.5, Number('+123.5'));
        checkEqual(-123.5, Number('-0123.5'));
        checkEqual(123.4, Number(' 123.4'));
        checkEqual(123.4, Number('123.4 '));
        checkEqual(123.4, Number(' 123.4 '));
        checkEqual(123.4, Number('　123.4'));
        checkEqual(123.4, Number('123.4　'));
        checkEqual(123.4, Number('　123.4　'));
        checkEqual(NaN, Number('123.4 0'));
        checkEqual(NaN, Number('0 123.4'));
        checkEqual(NaN, Number('1 123.4'));
        checkEqual(NaN, Number('123 .4'));
        checkEqual(NaN, Number('123. 4'));
        checkEqual(NaN, Number('123.4a'));
        checkEqual(NaN, Number('a123.4'));
        checkEqual(123.45, Number('123.45'));
        checkEqual(NaN, Number('123.4.5')); // string default value

        checkEqual(NaN, Number('abc')); // space string

        checkEqual(0, Number('')); // ?

        checkEqual(0, Number(' ')); // ?

        checkEqual(0, Number('　')); // ?
        // exponential notation

        checkEqual(3.14, Number(3.14));
        checkEqual(3.14, Number('3.14'));
        checkEqual(3.14, Number('314e-2'));
        checkEqual(3.14, Number('0.0314E+2'));
        checkEqual(0.14, Number('.14'));
        checkEqual(0.00000000000000001, Number('1e-17'));
        checkEqual(1e-17, Number('1e-17')); // exponential notation detail

        checkEqual(1, Number('1.'));
        checkEqual(NaN, Number('1.1e'));
        checkEqual(NaN, Number('1.1e+'));
        checkEqual(100000, Number('1e+5'));
        checkEqual(0.00001, Number('1e-5'));
        checkEqual(NaN, Number('1.e'));
        checkEqual(NaN, Number('1.e+'));
        checkEqual(100000, Number('1.e+5')); // Number different

        checkEqual(291, Number('0x123'));

        if (parts.platform.isGasRhino()) {
          checkEqual(291, Number('+0x123'));
          checkEqual(-291, Number('-0x123'));
        } else {
          checkEqual(NaN, Number('+0x123'));
          checkEqual(NaN, Number('-0x123'));
        }

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, Number('0o123'));
        } else if (parts.platform.isInternetExplorer()) {
          checkEqual(NaN, Number('0o123'));
        } else if (parts.platform.isGasRhino()) {
          checkEqual(NaN, Number('0o123'));
        } else {
          checkEqual(83, Number('0o123'));
        }

        checkEqual(NaN, Number('+0o123'));
        checkEqual(NaN, Number('-0o123'));
        checkEqual(Infinity, Number('Infinity'));
        checkEqual(NaN, Number('infinity'));
        checkEqual(NaN, Number('inf'));
        checkEqual(NaN, Number('info')); // Number

        checkEqual(123, Number(123));
        checkEqual(-123, Number(-123));
        checkEqual(1.23, Number(1.23));
        checkEqual(-1.23, Number(-1.23));
        checkEqual(Infinity, Number(Infinity));
        checkEqual(-Infinity, Number(-Infinity));
        checkEqual(NaN, Number(NaN)); // Other

        checkEqual(0, Number(null)); // !

        checkEqual(NaN, Number(undefined));
        checkEqual(NaN, Number({}));
        checkEqual(NaN, Number({
          a: 1
        }));
        checkEqual(0, Number([])); // ?

        checkEqual(1, Number([1])); // ?

        checkEqual(123, Number([123])); // ?

        checkEqual(NaN, Number([1, 2]));
      });
    };

    var test_parseFloat_standard = function test_parseFloat_standard() {
      it('test_parseFloat_standard', function () {
        // Integer
        checkEqual(123, parseFloat('123'));
        checkEqual(123, parseFloat('0123'));
        checkEqual(123, parseFloat('+123'));
        checkEqual(-123, parseFloat('-0123'));
        checkEqual(123, parseFloat(' 123'), '1');
        checkEqual(123, parseFloat('123 '), '2');
        checkEqual(123, parseFloat(' 123 '), '3');
        checkEqual(123, parseFloat('　123'), '4');
        checkEqual(123, parseFloat('123　'), '5');
        checkEqual(123, parseFloat('　123　'), '6');
        checkEqual(123, parseFloat('123 0'));
        checkEqual(0, parseFloat('0 123'));
        checkEqual(1, parseFloat('1 123'));
        checkEqual(123, parseFloat('123a'));
        checkEqual(NaN, parseFloat('a123')); // Decimal

        checkEqual(123.4, parseFloat('123.4'));
        checkEqual(123.4, parseFloat('0123.4'));
        checkEqual(123.4, parseFloat('+123.4'));
        checkEqual(-123.4, parseFloat('-0123.4'));
        checkEqual(123.5, parseFloat('123.5'));
        checkEqual(123.5, parseFloat('0123.5'));
        checkEqual(123.5, parseFloat('+123.5'));
        checkEqual(-123.5, parseFloat('-0123.5'));
        checkEqual(123.4, parseFloat(' 123.4'));
        checkEqual(123.4, parseFloat('123.4 '));
        checkEqual(123.4, parseFloat(' 123.4 '));
        checkEqual(123.4, parseFloat('　123.4'));
        checkEqual(123.4, parseFloat('123.4　'));
        checkEqual(123.4, parseFloat('　123.4　'));
        checkEqual(123.4, parseFloat('123.4 0'));
        checkEqual(0, parseFloat('0 123.4'));
        checkEqual(1, parseFloat('1 123.4'));
        checkEqual(123, parseFloat('123 .4'));
        checkEqual(123, parseFloat('123. 4'));
        checkEqual(123.4, parseFloat('123.4a'));
        checkEqual(NaN, parseFloat('a123.4'));
        checkEqual(123.45, parseFloat('123.45'));
        checkEqual(123.4, parseFloat('123.4.5')); // string default value

        checkEqual(NaN, parseFloat('abc')); // space string

        checkEqual(NaN, parseFloat(''));
        checkEqual(NaN, parseFloat(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseFloat('　'));
        } else {
          checkEqual(NaN, parseFloat('　'));
        } // exponential notation


        checkEqual(3.14, parseFloat(3.14));
        checkEqual(3.14, parseFloat('3.14'));
        checkEqual(3.14, parseFloat('314e-2'));
        checkEqual(3.14, parseFloat('0.0314E+2'));
        checkEqual(0.14, parseFloat('.14'));
        checkEqual(0.00000000000000001, parseFloat('1e-17'));
        checkEqual(1e-17, parseFloat('1e-17')); // exponential notation detail

        checkEqual(1, parseFloat('1.'));
        checkEqual(1.1, parseFloat('1.1e'));
        checkEqual(1.1, parseFloat('1.1e+'));
        checkEqual(100000, parseFloat('1e+5'));
        checkEqual(0.00001, parseFloat('1e-5'));
        checkEqual(1, parseFloat('1.e'));
        checkEqual(1, parseFloat('1.e+'));
        checkEqual(100000, parseFloat('1.e+5')); // parseFloat different

        checkEqual(0, parseFloat('0x123'));
        checkEqual(0, parseFloat('+0x123'));
        checkEqual(-0, parseFloat('-0x123'));
        checkEqual(0, parseFloat('0o123'));
        checkEqual(0, parseFloat('+0o123'));
        checkEqual(-0, parseFloat('-0o123'));
        checkEqual(Infinity, parseFloat('Infinity'));
        checkEqual(NaN, parseFloat('infinity'));
        checkEqual(NaN, parseFloat('inf'));
        checkEqual(NaN, parseFloat('info')); // parseFloat

        checkEqual(123, parseFloat(123));
        checkEqual(-123, parseFloat(-123));
        checkEqual(1.23, parseFloat(1.23));
        checkEqual(-1.23, parseFloat(-1.23));
        checkEqual(Infinity, parseFloat(Infinity));
        checkEqual(-Infinity, parseFloat(-Infinity));
        checkEqual(NaN, parseFloat(NaN)); // Other

        checkEqual(NaN, parseFloat(null));
        checkEqual(NaN, parseFloat(undefined));
        checkEqual(NaN, parseFloat({}));
        checkEqual(NaN, parseFloat({
          a: 1
        }));
        checkEqual(NaN, parseFloat([]));
        checkEqual(1, parseFloat([1]));
        checkEqual(123, parseFloat([123]));
        checkEqual(1, parseFloat([1, 2]));
      });
    };

    var test_parseInt_standard = function test_parseInt_standard() {
      it('test_parseInt_standard', function () {
        var parseInt10 = function parseInt10(value) {
          return parseInt(value, 10);
        }; // Integer


        checkEqual(123, parseInt10('123'));
        checkEqual(123, parseInt10('0123'));
        checkEqual(123, parseInt10('+123'));
        checkEqual(-123, parseInt10('-0123'));
        checkEqual(123, parseInt10(' 123'), '1');
        checkEqual(123, parseInt10('123 '), '2');
        checkEqual(123, parseInt10(' 123 '), '3');
        checkEqual(123, parseInt10('　123'), '4');
        checkEqual(123, parseInt10('123　'), '5');
        checkEqual(123, parseInt10('　123　'), '6');
        checkEqual(123, parseInt10('123 0'));
        checkEqual(0, parseInt10('0 123'));
        checkEqual(1, parseInt10('1 123'));
        checkEqual(123, parseInt10('123a'));
        checkEqual(NaN, parseInt10('a123')); // Decimal

        checkEqual(123, parseInt10('123.4'));
        checkEqual(123, parseInt10('0123.4'));
        checkEqual(123, parseInt10('+123.4'));
        checkEqual(-123, parseInt10('-0123.4'));
        checkEqual(123, parseInt10('123.5'));
        checkEqual(123, parseInt10('0123.5'));
        checkEqual(123, parseInt10('+123.5'));
        checkEqual(-123, parseInt10('-0123.5'));
        checkEqual(123, parseInt10(' 123.4'));
        checkEqual(123, parseInt10('123.4 '));
        checkEqual(123, parseInt10(' 123.4 '));
        checkEqual(123, parseInt10('　123.4'));
        checkEqual(123, parseInt10('123.4　'));
        checkEqual(123, parseInt10('　123.4　'));
        checkEqual(123, parseInt10('123.4 0'));
        checkEqual(0, parseInt10('0 123.4'));
        checkEqual(1, parseInt10('1 123.4'));
        checkEqual(123, parseInt10('123 .4'));
        checkEqual(123, parseInt10('123. 4'));
        checkEqual(123, parseInt10('123.4a'));
        checkEqual(NaN, parseInt10('a123.4'));
        checkEqual(123, parseInt10('123.45'));
        checkEqual(123, parseInt10('123.4.5')); // string default value

        checkEqual(NaN, parseInt10('abc')); // space string

        checkEqual(NaN, parseInt10(''));
        checkEqual(NaN, parseInt10(' '));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual(NaN, parseInt10('　'));
        } else {
          checkEqual(NaN, parseInt10('　'));
        } // exponential notation


        checkEqual(3, parseInt10(3.14));
        checkEqual(3, parseInt10('3.14'));
        checkEqual(314, parseInt10('314e-2'));
        checkEqual(0, parseInt10('0.0314E+2'));
        checkEqual(NaN, parseInt10('.14')); // ?

        checkEqual(1, parseInt10('1e-17'));
        checkEqual(1, parseInt10('1e-17')); // exponential notation detail

        checkEqual(1, parseInt10('1.'));
        checkEqual(1, parseInt10('1.1e'));
        checkEqual(1, parseInt10('1.1e+'));
        checkEqual(1, parseInt10('1e+5'));
        checkEqual(1, parseInt10('1e-5'));
        checkEqual(1, parseInt10('1.e'));
        checkEqual(1, parseInt10('1.e+'));
        checkEqual(1, parseInt10('1.e+5')); // parseFloat different

        checkEqual(0, parseInt10('0x123'));
        checkEqual(0, parseInt10('+0x123'));
        checkEqual(-0, parseInt10('-0x123'));
        checkEqual(0, parseInt10('0o123'));
        checkEqual(0, parseInt10('+0o123'));
        checkEqual(-0, parseInt10('-0o123'));
        checkEqual(NaN, parseInt10('Infinity')); // ?

        checkEqual(NaN, parseInt10('infinity'));
        checkEqual(NaN, parseInt10('inf'));
        checkEqual(NaN, parseInt10('info')); // parseFloat

        checkEqual(123, parseInt10(123));
        checkEqual(-123, parseInt10(-123));
        checkEqual(1, parseInt10(1.23));
        checkEqual(-1, parseInt10(-1.23));
        checkEqual(NaN, parseInt10(Infinity));
        checkEqual(NaN, parseInt10(-Infinity));
        checkEqual(NaN, parseInt10(NaN)); // Other

        checkEqual(NaN, parseInt10(null));
        checkEqual(NaN, parseInt10(undefined));
        checkEqual(NaN, parseInt10({}));
        checkEqual(NaN, parseInt10({
          a: 1
        }));
        checkEqual(NaN, parseInt10([]));
        checkEqual(1, parseInt10([1]));
        checkEqual(123, parseInt10([123]));
        checkEqual(1, parseInt10([1, 2])); // Decimal number other

        checkEqual(10, parseInt('1010', 2));
        checkEqual(10, parseInt('22', 4));
        checkEqual(10, parseInt('12', 8));
        checkEqual(10, parseInt('a', 16));
        checkEqual(10, parseInt('A', 16));
      });
    };

    var test_stringToNumber = function test_stringToNumber() {
      it('test_stringToNumber', function () {
        // Integer
        checkEqual(123, stringToNumber('123'));
        checkEqual(123, stringToNumber('0123'));
        checkEqual(123, stringToNumber('+123'));
        checkEqual(-123, stringToNumber('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123');
        })); // Decimal

        checkEqual(123.4, stringToNumber('123.4'));
        checkEqual(123.4, stringToNumber('0123.4'));
        checkEqual(123.4, stringToNumber('+123.4'));
        checkEqual(-123.4, stringToNumber('-0123.4'));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　123.4　');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('a123.4');
        }));
        checkEqual(123.45, stringToNumber('123.45'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('123.4.5');
        })); // // string  value

        checkEqual(true, isThrown(function () {
          return stringToNumber('abc');
        })); // // space string

        checkEqual(true, isThrown(function () {
          return stringToNumber('');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber(' ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('　');
        })); // // exponential notation

        checkEqual(3.14, stringToNumber('3.14'));
        checkEqual(3.14, stringToNumber('314e-2'));
        checkEqual(3.14, stringToNumber('0.0314E+2'));
        checkEqual(0.14, stringToNumber('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumber('1e-17'));
        checkEqual(1e-17, stringToNumber('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumber('1.'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.1e+');
        }));
        checkEqual(100000, stringToNumber('1e+5'));
        checkEqual(0.00001, stringToNumber('1e-5'));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('1.e+');
        }));
        checkEqual(100000, stringToNumber('1.e+5')); // Number different

        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToNumber('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumber(123);
        }, new TypeError().name), "test stringToNumber exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumber({
          value: '-0123'
        }));
      });
    };

    var test_stringToNumberDefault = function test_stringToNumberDefault() {
      it('test_stringToNumberDefault', function () {
        // Integer
        checkEqual(123, stringToNumberDefault('123'));
        checkEqual(123, stringToNumberDefault('0123'));
        checkEqual(123, stringToNumberDefault('+123'));
        checkEqual(-123, stringToNumberDefault('-0123'));
        checkEqual(undefined, stringToNumberDefault(' 123'), '1');
        checkEqual(undefined, stringToNumberDefault('123 '), '2');
        checkEqual(undefined, stringToNumberDefault(' 123 '), '3');
        checkEqual(undefined, stringToNumberDefault('　123'), '4');
        checkEqual(undefined, stringToNumberDefault('123　'), '5');
        checkEqual(undefined, stringToNumberDefault('　123　'), '6');
        checkEqual(undefined, stringToNumberDefault('123 0'));
        checkEqual(undefined, stringToNumberDefault('0 123'));
        checkEqual(undefined, stringToNumberDefault('1 123'));
        checkEqual(undefined, stringToNumberDefault('123a'));
        checkEqual(undefined, stringToNumberDefault('a123')); // Decimal

        checkEqual(123.4, stringToNumberDefault('123.4'));
        checkEqual(123.4, stringToNumberDefault('0123.4'));
        checkEqual(123.4, stringToNumberDefault('+123.4'));
        checkEqual(-123.4, stringToNumberDefault('-0123.4'));
        checkEqual(undefined, stringToNumberDefault(' 123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4 '));
        checkEqual(undefined, stringToNumberDefault(' 123.4 '));
        checkEqual(undefined, stringToNumberDefault('　123.4'));
        checkEqual(undefined, stringToNumberDefault('123.4　'));
        checkEqual(undefined, stringToNumberDefault('　123.4　'));
        checkEqual(undefined, stringToNumberDefault('123.4 0'));
        checkEqual(undefined, stringToNumberDefault('0 123.4'));
        checkEqual(undefined, stringToNumberDefault('1 123.4'));
        checkEqual(undefined, stringToNumberDefault('123 .4'));
        checkEqual(undefined, stringToNumberDefault('123. 4'));
        checkEqual(undefined, stringToNumberDefault('123.4a'));
        checkEqual(undefined, stringToNumberDefault('a123.4'));
        checkEqual(123.45, stringToNumberDefault('123.45'));
        checkEqual(undefined, stringToNumberDefault('123.4.5')); // string default value

        checkEqual(undefined, stringToNumberDefault('abc'));
        checkEqual(null, stringToNumberDefault('abc', null));
        checkEqual(NaN, stringToNumberDefault('abc', NaN)); // space string

        checkEqual(undefined, stringToNumberDefault(''));
        checkEqual(undefined, stringToNumberDefault(' '));
        checkEqual(undefined, stringToNumberDefault('　')); // exponential notation

        checkEqual(3.14, stringToNumberDefault('3.14'));
        checkEqual(3.14, stringToNumberDefault('314e-2'));
        checkEqual(3.14, stringToNumberDefault('0.0314E+2'));
        checkEqual(0.14, stringToNumberDefault('.14'));
        checkEqual('1e-17', 0.00000000000000001.toString());
        checkEqual(0.00000000000000001, stringToNumberDefault('1e-17'));
        checkEqual(1e-17, stringToNumberDefault('1e-17')); // exponential notation detail

        checkEqual(1, stringToNumberDefault('1.'));
        checkEqual(undefined, stringToNumberDefault('1.1e'));
        checkEqual(undefined, stringToNumberDefault('1.1e+'));
        checkEqual(100000, stringToNumberDefault('1e+5'));
        checkEqual(0.00001, stringToNumberDefault('1e-5'));
        checkEqual(undefined, stringToNumberDefault('1.e'));
        checkEqual(undefined, stringToNumberDefault('1.e+'));
        checkEqual(100000, stringToNumberDefault('1.e+5')); // Number different

        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('0x123'));
        checkEqual(undefined, stringToNumberDefault('+0x123'));
        checkEqual(undefined, stringToNumberDefault('-0x123'));
        checkEqual(undefined, stringToNumberDefault('Infinity'));
        checkEqual(undefined, stringToNumberDefault('infinity'));
        checkEqual(undefined, stringToNumberDefault('inf'));
        checkEqual(undefined, stringToNumberDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToNumberDefault(123);
        }, new TypeError().name), "test stringToNumberDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToNumberDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToNumberDefault({
          value: 'abc',
          defaultValue: null
        }));
      });
    };

    var test_valueToNumber = function test_valueToNumber() {
      it('test_valueToNumber', function () {
        // Integer
        checkEqual(123, valueToNumber('123'));
        checkEqual(123, valueToNumber('0123'));
        checkEqual(123, valueToNumber('+123'));
        checkEqual(-123, valueToNumber('-0123'));
        checkEqual(NaN, valueToNumber(' 123'), '1');
        checkEqual(NaN, valueToNumber('123 '), '2');
        checkEqual(NaN, valueToNumber(' 123 '), '3');
        checkEqual(NaN, valueToNumber('　123'), '4');
        checkEqual(NaN, valueToNumber('123　'), '5');
        checkEqual(NaN, valueToNumber('　123　'), '6');
        checkEqual(NaN, valueToNumber('123 0'));
        checkEqual(NaN, valueToNumber('0 123'));
        checkEqual(NaN, valueToNumber('1 123'));
        checkEqual(NaN, valueToNumber('123a'));
        checkEqual(NaN, valueToNumber('a123')); // Decimal

        checkEqual(123.4, valueToNumber('123.4'));
        checkEqual(123.4, valueToNumber('0123.4'));
        checkEqual(123.4, valueToNumber('+123.4'));
        checkEqual(-123.4, valueToNumber('-0123.4'));
        checkEqual(123.5, valueToNumber('123.5'));
        checkEqual(123.5, valueToNumber('0123.5'));
        checkEqual(123.5, valueToNumber('+123.5'));
        checkEqual(-123.5, valueToNumber('-0123.5'));
        checkEqual(NaN, valueToNumber(' 123.4'));
        checkEqual(NaN, valueToNumber('123.4 '));
        checkEqual(NaN, valueToNumber(' 123.4 '));
        checkEqual(NaN, valueToNumber('　123.4'));
        checkEqual(NaN, valueToNumber('123.4　'));
        checkEqual(NaN, valueToNumber('　123.4　'));
        checkEqual(NaN, valueToNumber('123.4 0'));
        checkEqual(NaN, valueToNumber('0 123.4'));
        checkEqual(NaN, valueToNumber('1 123.4'));
        checkEqual(NaN, valueToNumber('123 .4'));
        checkEqual(NaN, valueToNumber('123. 4'));
        checkEqual(NaN, valueToNumber('123.4a'));
        checkEqual(NaN, valueToNumber('a123.4'));
        checkEqual(123.45, valueToNumber('123.45'));
        checkEqual(NaN, valueToNumber('123.4.5')); // space string

        checkEqual(NaN, valueToNumber(''));
        checkEqual(NaN, valueToNumber(' '));
        checkEqual(NaN, valueToNumber('　')); // exponential notation

        checkEqual(3.14, valueToNumber(3.14));
        checkEqual(3.14, valueToNumber('3.14'));
        checkEqual(3.14, valueToNumber('314e-2'));
        checkEqual(3.14, valueToNumber('0.0314E+2'));
        checkEqual(0.14, valueToNumber('.14')); // exponential notation detail

        checkEqual(1, valueToNumber('1.'));
        checkEqual(NaN, valueToNumber('1.1e'));
        checkEqual(NaN, valueToNumber('1.1e+'));
        checkEqual(100000, valueToNumber('1e+5'));
        checkEqual(0.00001, valueToNumber('1e-5'));
        checkEqual(NaN, valueToNumber('1.e'));
        checkEqual(NaN, valueToNumber('1.e+'));
        checkEqual(100000, valueToNumber('1.e+5')); // Number different

        checkEqual(NaN, valueToNumber('0x123'));
        checkEqual(NaN, valueToNumber('+0x123'));
        checkEqual(NaN, valueToNumber('-0x123'));
        checkEqual(NaN, valueToNumber('0o123'));
        checkEqual(NaN, valueToNumber('+0o123'));
        checkEqual(NaN, valueToNumber('-0o123'));
        checkEqual(NaN, valueToNumber('Infinity'));
        checkEqual(NaN, valueToNumber('infinity'));
        checkEqual(NaN, valueToNumber('inf'));
        checkEqual(NaN, valueToNumber('info')); // Number

        checkEqual(123, valueToNumber(123));
        checkEqual(-123, valueToNumber(-123));
        checkEqual(1.23, valueToNumber(1.23));
        checkEqual(-1.23, valueToNumber(-1.23));
        checkEqual(Infinity, valueToNumber(Infinity));
        checkEqual(-Infinity, valueToNumber(-Infinity));
        checkEqual(NaN, valueToNumber(NaN)); // Default

        checkEqual(null, valueToNumberDefault('', null));
        checkEqual(null, valueToNumberDefault({
          value: '',
          defaultValue: null
        }));
        checkEqual(null, valueToNumberDefault('', {
          defaultValue: null
        }));
        checkEqual(1.5, valueToNumberDefault('1.5', null));
        checkEqual(1.5, valueToNumberDefault({
          value: '1.5',
          defaultValue: null
        }));
        checkEqual(1.5, valueToNumberDefault('1.5', {
          defaultValue: null
        }));
        checkEqual(NaN, valueToNumberDefault(NaN, null));
        checkEqual(NaN, valueToNumberDefault({
          value: NaN,
          defaultValue: null
        }));
        checkEqual(NaN, valueToNumberDefault(NaN, {
          defaultValue: null
        })); // Other

        checkEqual(NaN, valueToNumber(null));
        checkEqual(NaN, valueToNumber(undefined));
        checkEqual(NaN, valueToNumber({}));
        checkEqual(NaN, valueToNumber({
          a: 1
        }));
        checkEqual(NaN, valueToNumber([]));
        checkEqual(NaN, valueToNumber([1]));
        checkEqual(NaN, valueToNumber([123]));
        checkEqual(NaN, valueToNumber([1, 2]));
      });
    };

    var test_stringToInteger = function test_stringToInteger() {
      it('test_stringToInteger', function () {
        // Integer
        checkEqual(123, stringToInteger('123'));
        checkEqual(123, stringToInteger('0123'));
        checkEqual(123, stringToInteger('+123'));
        checkEqual(-123, stringToInteger('-0123'));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123');
        })); // Decimal

        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger(' 123.4 ');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4 0');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1 123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123 .4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123. 4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4a');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('a123.4');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.45');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('123.4.5');
        })); // Positive number

        checkEqual(32, stringToInteger('32'));
        checkEqual(32, stringToInteger('32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('31.5', 10);
        }));
        checkEqual(32, stringToInteger('100000', 2));
        checkEqual(31, stringToInteger('11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('11111.01', 2);
        }));
        checkEqual(32, stringToInteger('40', 8));
        checkEqual(31, stringToInteger('37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('37.4', 8);
        }));
        checkEqual(32, stringToInteger('20', 16));
        checkEqual(31, stringToInteger('1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('1f.8', 16);
        }));
        checkEqual(32, stringToInteger('44', 7));
        checkEqual(31, stringToInteger('43', 7));
        checkEqual(255, stringToInteger('255', 10));
        checkEqual(11, stringToInteger('11', 10));
        checkEqual(255, stringToInteger('FF', 16));
        checkEqual(16, stringToInteger('20', 8));
        checkEqual(255, stringToInteger('ff', 16));
        checkEqual(11, stringToInteger('b', 16));
        checkEqual(127, stringToInteger('177', 8));
        checkEqual(10, stringToInteger('12', 8));
        checkEqual(3, stringToInteger('11', 2));
        checkEqual(15, stringToInteger('1111', 2)); // Negative number

        checkEqual(-32, stringToInteger('-32'));
        checkEqual(-32, stringToInteger('-32', 10));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-31.5', 10);
        }));
        checkEqual(-32, stringToInteger('-100000', 2));
        checkEqual(-31, stringToInteger('-11111', 2));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.1', 2);
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-11111.01', 2);
        }));
        checkEqual(-32, stringToInteger('-40', 8));
        checkEqual(-31, stringToInteger('-37', 8));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-37.4', 8);
        }));
        checkEqual(-32, stringToInteger('-20', 16));
        checkEqual(-31, stringToInteger('-1f', 16));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-1f.8', 16);
        }));
        checkEqual(-32, stringToInteger('-44', 7));
        checkEqual(-31, stringToInteger('-43', 7));
        checkEqual(-255, stringToInteger('-255', 10));
        checkEqual(-11, stringToInteger('-11', 10));
        checkEqual(-255, stringToInteger('-FF', 16));
        checkEqual(-16, stringToInteger('-20', 8));
        checkEqual(-255, stringToInteger('-ff', 16));
        checkEqual(-11, stringToInteger('-b', 16));
        checkEqual(-127, stringToInteger('-177', 8));
        checkEqual(-10, stringToInteger('-12', 8));
        checkEqual(-3, stringToInteger('-11', 2));
        checkEqual(-15, stringToInteger('-1111', 2)); // // Default Value

        checkEqual(true, isThrown(function () {
          return stringToInteger('abc');
        })); // checkEqual(null,      stringToInteger('abc', null,  10));
        // checkEqual(NaN,       stringToInteger('abc', NaN,   10));

        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('+0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('-0x123');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('Infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('infinity');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('inf');
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger('info');
        })); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger(123);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 2);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 2.5);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 1);
        }, new RangeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToInteger('123', 36);
        }, new TypeError().name), "test stringToInteger exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToInteger('123', 37);
        }, new RangeError().name), "test stringToInteger exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToInteger({
          value: '-0123'
        }));
        checkEqual(true, isThrown(function () {
          return stringToInteger({
            value: 'abc'
          });
        }));
        checkEqual(-15, stringToInteger({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_stringToIntegerDefault = function test_stringToIntegerDefault() {
      it('test_stringToIntegerDefault', function () {
        // Integer
        checkEqual(123, stringToIntegerDefault('123'));
        checkEqual(123, stringToIntegerDefault('0123'));
        checkEqual(123, stringToIntegerDefault('+123'));
        checkEqual(-123, stringToIntegerDefault('-0123'));
        checkEqual(undefined, stringToIntegerDefault(' 123'));
        checkEqual(undefined, stringToIntegerDefault('123 '));
        checkEqual(undefined, stringToIntegerDefault(' 123 '));
        checkEqual(undefined, stringToIntegerDefault('123 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123'));
        checkEqual(undefined, stringToIntegerDefault('1 123'));
        checkEqual(undefined, stringToIntegerDefault('123a'));
        checkEqual(undefined, stringToIntegerDefault('a123')); // Decimal

        checkEqual(undefined, stringToIntegerDefault('123.4'));
        checkEqual(undefined, stringToIntegerDefault('0123.4'));
        checkEqual(undefined, stringToIntegerDefault('+123.4'));
        checkEqual(undefined, stringToIntegerDefault('-0123.4'));
        checkEqual(undefined, stringToIntegerDefault(' 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.4 '));
        checkEqual(undefined, stringToIntegerDefault(' 123.4 '));
        checkEqual(undefined, stringToIntegerDefault('123.4 0'));
        checkEqual(undefined, stringToIntegerDefault('0 123.4'));
        checkEqual(undefined, stringToIntegerDefault('1 123.4'));
        checkEqual(undefined, stringToIntegerDefault('123 .4'));
        checkEqual(undefined, stringToIntegerDefault('123. 4'));
        checkEqual(undefined, stringToIntegerDefault('123.4a'));
        checkEqual(undefined, stringToIntegerDefault('a123.4'));
        checkEqual(undefined, stringToIntegerDefault('123.45'));
        checkEqual(undefined, stringToIntegerDefault('123.4.5')); // Positive number

        checkEqual(32, stringToIntegerDefault('32'));
        checkEqual(32, stringToIntegerDefault('32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('31.5', undefined, 10));
        checkEqual(32, stringToIntegerDefault('100000', undefined, 2));
        checkEqual(31, stringToIntegerDefault('11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('11111.01', undefined, 2));
        checkEqual(32, stringToIntegerDefault('40', undefined, 8));
        checkEqual(31, stringToIntegerDefault('37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('37.4', undefined, 8));
        checkEqual(32, stringToIntegerDefault('20', undefined, 16));
        checkEqual(31, stringToIntegerDefault('1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('1f.8', undefined, 16));
        checkEqual(32, stringToIntegerDefault('44', undefined, 7));
        checkEqual(31, stringToIntegerDefault('43', undefined, 7));
        checkEqual(255, stringToIntegerDefault('255', undefined, 10));
        checkEqual(11, stringToIntegerDefault('11', undefined, 10));
        checkEqual(255, stringToIntegerDefault('FF', undefined, 16));
        checkEqual(16, stringToIntegerDefault('20', undefined, 8));
        checkEqual(255, stringToIntegerDefault('ff', undefined, 16));
        checkEqual(11, stringToIntegerDefault('b', undefined, 16));
        checkEqual(127, stringToIntegerDefault('177', undefined, 8));
        checkEqual(10, stringToIntegerDefault('12', undefined, 8));
        checkEqual(3, stringToIntegerDefault('11', undefined, 2));
        checkEqual(15, stringToIntegerDefault('1111', undefined, 2)); // Negative number

        checkEqual(-32, stringToIntegerDefault('-32'));
        checkEqual(-32, stringToIntegerDefault('-32', undefined, 10));
        checkEqual(undefined, stringToIntegerDefault('-31.5', undefined, 10));
        checkEqual(-32, stringToIntegerDefault('-100000', undefined, 2));
        checkEqual(-31, stringToIntegerDefault('-11111', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.1', undefined, 2));
        checkEqual(undefined, stringToIntegerDefault('-11111.01', undefined, 2));
        checkEqual(-32, stringToIntegerDefault('-40', undefined, 8));
        checkEqual(-31, stringToIntegerDefault('-37', undefined, 8));
        checkEqual(undefined, stringToIntegerDefault('-37.4', undefined, 8));
        checkEqual(-32, stringToIntegerDefault('-20', undefined, 16));
        checkEqual(-31, stringToIntegerDefault('-1f', undefined, 16));
        checkEqual(undefined, stringToIntegerDefault('-1f.8', undefined, 16));
        checkEqual(-32, stringToIntegerDefault('-44', undefined, 7));
        checkEqual(-31, stringToIntegerDefault('-43', undefined, 7));
        checkEqual(-255, stringToIntegerDefault('-255', undefined, 10));
        checkEqual(-11, stringToIntegerDefault('-11', undefined, 10));
        checkEqual(-255, stringToIntegerDefault('-FF', undefined, 16));
        checkEqual(-16, stringToIntegerDefault('-20', undefined, 8));
        checkEqual(-255, stringToIntegerDefault('-ff', undefined, 16));
        checkEqual(-11, stringToIntegerDefault('-b', undefined, 16));
        checkEqual(-127, stringToIntegerDefault('-177', undefined, 8));
        checkEqual(-10, stringToIntegerDefault('-12', undefined, 8));
        checkEqual(-3, stringToIntegerDefault('-11', undefined, 2));
        checkEqual(-15, stringToIntegerDefault('-1111', undefined, 2)); // Default Value

        checkEqual(undefined, stringToIntegerDefault('abc'));
        checkEqual(null, stringToIntegerDefault('abc', null, 10));
        checkEqual(NaN, stringToIntegerDefault('abc', NaN, 10));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('0x123'));
        checkEqual(undefined, stringToIntegerDefault('+0x123'));
        checkEqual(undefined, stringToIntegerDefault('-0x123'));
        checkEqual(undefined, stringToIntegerDefault('Infinity'));
        checkEqual(undefined, stringToIntegerDefault('infinity'));
        checkEqual(undefined, stringToIntegerDefault('inf'));
        checkEqual(undefined, stringToIntegerDefault('info')); // Exception

        var i = 0;
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault(123);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 2.5);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 1);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(false, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 36);
        }, new TypeError().name), "test stringToIntegerDefault exception ".concat(i));
        i += 1;
        checkEqual(true, isThrownException(function () {
          stringToIntegerDefault('123', undefined, 37);
        }, new RangeError().name), "test stringToIntegerDefault exception ".concat(i)); // Object Named Parameter

        checkEqual(-123, stringToIntegerDefault({
          value: '-0123'
        }));
        checkEqual(null, stringToIntegerDefault({
          value: 'abc',
          defaultValue: null
        }));
        checkEqual(undefined, stringToIntegerDefault({
          value: 'abc'
        }));
        checkEqual(-15, stringToIntegerDefault({
          value: '-1111',
          radix: 2
        }));
      });
    };

    var test_valueToInteger = function test_valueToInteger() {
      it('test_valueToInteger', function () {
        // Integer
        checkEqual(123, valueToInteger('123'));
        checkEqual(123, valueToInteger('0123'));
        checkEqual(123, valueToInteger('+123'));
        checkEqual(-123, valueToInteger('-0123'));
        checkEqual(NaN, valueToInteger(' 123'), '1');
        checkEqual(NaN, valueToInteger('123 '), '2');
        checkEqual(NaN, valueToInteger(' 123 '), '3');
        checkEqual(NaN, valueToInteger('　123'), '4');
        checkEqual(NaN, valueToInteger('123　'), '5');
        checkEqual(NaN, valueToInteger('　123　'), '6');
        checkEqual(NaN, valueToInteger('123 0'));
        checkEqual(NaN, valueToInteger('0 123'));
        checkEqual(NaN, valueToInteger('1 123'));
        checkEqual(NaN, valueToInteger('123a'));
        checkEqual(NaN, valueToInteger('a123')); // Decimal

        checkEqual(123, valueToInteger('123.4'));
        checkEqual(123, valueToInteger('0123.4'));
        checkEqual(123, valueToInteger('+123.4'));
        checkEqual(-123, valueToInteger('-0123.4'));
        checkEqual(124, valueToInteger('123.5'));
        checkEqual(124, valueToInteger('0123.5'));
        checkEqual(124, valueToInteger('+123.5'));
        checkEqual(-124, valueToInteger('-0123.5'));
        checkEqual(NaN, valueToInteger(' 123.4'));
        checkEqual(NaN, valueToInteger('123.4 '));
        checkEqual(NaN, valueToInteger(' 123.4 '));
        checkEqual(NaN, valueToInteger('　123.4'));
        checkEqual(NaN, valueToInteger('123.4　'));
        checkEqual(NaN, valueToInteger('　123.4　'));
        checkEqual(NaN, valueToInteger('123.4 0'));
        checkEqual(NaN, valueToInteger('0 123.4'));
        checkEqual(NaN, valueToInteger('1 123.4'));
        checkEqual(NaN, valueToInteger('123 .4'));
        checkEqual(NaN, valueToInteger('123. 4'));
        checkEqual(NaN, valueToInteger('123.4a'));
        checkEqual(NaN, valueToInteger('a123.4'));
        checkEqual(123, valueToInteger('123.45'));
        checkEqual(NaN, valueToInteger('123.4.5')); // space string

        checkEqual(NaN, valueToInteger(''));
        checkEqual(NaN, valueToInteger(' '));
        checkEqual(NaN, valueToInteger('　')); // exponential notation

        checkEqual(3, valueToInteger(3.14));
        checkEqual(3, valueToInteger('3.14'));
        checkEqual(3, valueToInteger('314e-2'));
        checkEqual(3, valueToInteger('0.0314E+2'));
        checkEqual(0, valueToInteger('.14')); // exponential notation detail

        checkEqual(1, valueToInteger('1.'));
        checkEqual(NaN, valueToInteger('1.1e'));
        checkEqual(NaN, valueToInteger('1.1e+'));
        checkEqual(100000, valueToInteger('1e+5'));
        checkEqual(0, valueToInteger('1e-5'));
        checkEqual(NaN, valueToInteger('1.e'));
        checkEqual(NaN, valueToInteger('1.e+'));
        checkEqual(100000, valueToInteger('1.e+5')); // Number different

        checkEqual(NaN, valueToInteger('0x123'));
        checkEqual(NaN, valueToInteger('+0x123'));
        checkEqual(NaN, valueToInteger('-0x123'));
        checkEqual(NaN, valueToInteger('0o123'));
        checkEqual(NaN, valueToInteger('+0o123'));
        checkEqual(NaN, valueToInteger('-0o123'));
        checkEqual(NaN, valueToInteger('Infinity'));
        checkEqual(NaN, valueToInteger('infinity'));
        checkEqual(NaN, valueToInteger('inf'));
        checkEqual(NaN, valueToInteger('info')); // Number

        checkEqual(123, valueToInteger(123));
        checkEqual(-123, valueToInteger(-123));
        checkEqual(1, valueToInteger(1.23));
        checkEqual(2, valueToInteger(1.67));
        checkEqual(-1, valueToInteger(-1.23));
        checkEqual(-2, valueToInteger(-1.67));
        checkEqual(Infinity, valueToInteger(Infinity));
        checkEqual(-Infinity, valueToInteger(-Infinity));
        checkEqual(NaN, valueToInteger(NaN)); // Default

        checkEqual(null, valueToIntegerDefault('', null));
        checkEqual(null, valueToIntegerDefault({
          value: '',
          defaultValue: null
        }));
        checkEqual(null, valueToIntegerDefault('', {
          defaultValue: null
        }));
        checkEqual(2, valueToIntegerDefault('1.5', null));
        checkEqual(2, valueToIntegerDefault({
          value: '1.5',
          defaultValue: null
        }));
        checkEqual(2, valueToIntegerDefault('1.5', {
          defaultValue: null
        }));
        checkEqual(1, valueToIntegerDefault('1', null));
        checkEqual(1, valueToIntegerDefault({
          value: '1',
          defaultValue: null
        }));
        checkEqual(1, valueToIntegerDefault('1', {
          defaultValue: null
        }));
        checkEqual(NaN, valueToIntegerDefault(NaN, null));
        checkEqual(NaN, valueToIntegerDefault({
          value: NaN,
          defaultValue: null
        }));
        checkEqual(NaN, valueToIntegerDefault(NaN, {
          defaultValue: null
        })); // Other

        checkEqual(NaN, valueToInteger(null));
        checkEqual(NaN, valueToInteger(undefined));
        checkEqual(NaN, valueToInteger({}));
        checkEqual(NaN, valueToInteger({
          a: 1
        }));
        checkEqual(NaN, valueToInteger([]));
        checkEqual(NaN, valueToInteger([1]));
        checkEqual(NaN, valueToInteger([123]));
      });
    };

    test_numberToString();
    test_valueToString();
    test_StringCast_standard();
    test_toString_standard();
    test_NumberCast_standard();
    test_parseFloat_standard();
    test_parseInt_standard();
    test_stringToNumber();
    test_stringToNumberDefault();
    test_valueToNumber();
    test_stringToInteger();
    test_stringToIntegerDefault();
    test_valueToInteger();
  });
};

exports.test_execute_convert = test_execute_convert;
var _default = {
  test_execute_convert: test_execute_convert
};
exports["default"] = _default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_number = void 0;

/* eslint-disable space-in-parens */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_number = function test_execute_number(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_number', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$number = parts.number,
        isMultiples = _parts$number.isMultiples,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd,
        round = _parts$number.round,
        nearEqual = _parts$number.nearEqual,
        inRange = _parts$number.inRange,
        randomInt = _parts$number.randomInt;

    var test_isMultiples = function test_isMultiples() {
      it('test_isMultiples', function () {
        checkEqual(true, isMultiples(10, 2));
        checkEqual(true, isMultiples(10, 5));
        checkEqual(false, isMultiples(10, 3));
        checkEqual(false, isMultiples(9, 2));
        checkEqual(false, isMultiples(9, 5));
        checkEqual(true, isMultiples(9, 3));
        checkEqual(true, isMultiples(0, 2));
        checkEqual(false, isMultiples(-1, 2));
        checkEqual(true, isMultiples(-2, 2)); // Object Named Parameter

        checkEqual(true, isMultiples({
          number: 10,
          radix: 2
        }));
        checkEqual(false, isMultiples({
          number: 9,
          radix: 2
        })); // exception

        checkEqual(false, isThrown(function () {
          isMultiples(10, 2);
        }));
        checkEqual(true, isThrown(function () {
          isMultiples(10.1, 2);
        }));
        checkEqual(true, isThrown(function () {
          isMultiples(10, 2.2);
        }));
      });
    };

    var test_Math_round = function test_Math_round() {
      it('test_Math_round', function () {
        checkEqual(5, Math.round(5));
        checkEqual(5, Math.round(5.4));
        checkEqual(6, Math.round(5.5));
        checkEqual(-5, Math.round(-5));
        checkEqual(-5, Math.round(-5.4));
        checkEqual(-5, Math.round(-5.5));
      });
    };

    var test_round = function test_round() {
      it('test_round', function () {
        checkEqual(5, round(5));
        checkEqual(5, round(5.4));
        checkEqual(6, round(5.5));
        checkEqual(5, round(5, 0));
        checkEqual(5, round(5.4, 0));
        checkEqual(6, round(5.5, 0));
        checkEqual(5.4, round(5.44, 1));
        checkEqual(5.5, round(5.45, 1));
        checkEqual(5.5, round(5.54, 1));
        checkEqual(5.6, round(5.55, 1));
        checkEqual(5.04, round(5.044, 2));
        checkEqual(5.05, round(5.045, 2));
        checkEqual(5.05, round(5.054, 2));
        checkEqual(5.06, round(5.055, 2));
        checkEqual(540, round(544, -1));
        checkEqual(550, round(545, -1));
        checkEqual(550, round(554, -1));
        checkEqual(560, round(555, -1));
        checkEqual(5400, round(5440, -2));
        checkEqual(5500, round(5450, -2));
        checkEqual(5500, round(5540, -2));
        checkEqual(5600, round(5550, -2));
        checkEqual(-5, round(-5));
        checkEqual(-5, round(-5.4));
        checkEqual(-6, round(-5.5));
        checkEqual(-5, round(-5, 0));
        checkEqual(-5, round(-5.4, 0));
        checkEqual(-6, round(-5.5, 0));
        checkEqual(-5.4, round(-5.44, 1));
        checkEqual(-5.5, round(-5.45, 1));
        checkEqual(-5.5, round(-5.54, 1));
        checkEqual(-5.6, round(-5.55, 1));
        checkEqual(-5.04, round(-5.044, 2));
        checkEqual(-5.05, round(-5.045, 2));
        checkEqual(-5.05, round(-5.054, 2));
        checkEqual(-5.06, round(-5.055, 2));
        checkEqual(-540, round(-544, -1));
        checkEqual(-550, round(-545, -1));
        checkEqual(-550, round(-554, -1));
        checkEqual(-560, round(-555, -1));
        checkEqual(-5400, round(-5440, -2));
        checkEqual(-5500, round(-5450, -2));
        checkEqual(-5500, round(-5540, -2));
        checkEqual(-5600, round(-5550, -2)); // Object Named Parameter

        checkEqual(6, round({
          value: 5.5
        }));
        checkEqual(5.06, round({
          value: 5.055,
          digit: 2
        }));
        checkEqual(5600, round({
          value: 5550,
          digit: -2
        })); // exception

        checkEqual(false, isThrown(function () {
          round(5.5, 2);
        }));
        checkEqual(true, isThrown(function () {
          round(5.5, 2.2);
        }));
      });
    };

    var test_nearEqual = function test_nearEqual() {
      it('test_nearEqual', function () {
        checkEqual(true, nearEqual(0.049999, 0.050011, 0.001));
        checkEqual(true, nearEqual(0.050, 0.051, 0.001));
        checkEqual(true, nearEqual(0.050, 0.0509, 0.001));
        checkEqual(true, nearEqual(0.050, 0.0510, 0.001));
        checkEqual(false, nearEqual(0.050, 0.051000001, 0.001));
        checkEqual(true, nearEqual(0.050011, 0.049999, 0.001));
        checkEqual(true, nearEqual(0.051, 0.050, 0.001));
        checkEqual(true, nearEqual(0.0509, 0.050, 0.001));
        checkEqual(true, nearEqual(0.0510, 0.050, 0.001));
        checkEqual(false, nearEqual(0.05100001, 0.050, 0.001)); // Object Named Parameter

        checkEqual(false, nearEqual({
          value1: 0.050,
          value2: 0.051000001,
          diff: 0.001
        }));
        checkEqual(true, nearEqual({
          value1: 0.050011,
          value2: 0.049999,
          diff: 0.001
        })); // exception

        checkEqual(false, isThrown(function () {
          nearEqual(0.50, 0.51, 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual('0.50', 0.51, 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, '0.51', 0.001);
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, 0.51, '0.001');
        }));
        checkEqual(true, isThrown(function () {
          nearEqual(0.50, 0.51, -0.001);
        }));
      });
    };

    var test_inRange = function test_inRange() {
      it('test_inRange', function () {
        checkEqual(true, inRange(20, 10, 30));
        checkEqual(true, inRange(10, 10, 30));
        checkEqual(true, inRange(30, 10, 30));
        checkEqual(false, inRange(9, 10, 30));
        checkEqual(false, inRange(31, 10, 30));
        checkEqual(false, inRange(9.99, 10, 30));
        checkEqual(false, inRange(30.01, 10, 30));
        checkEqual(true, inRange(10, 10, 10)); // Object Named Parameter

        checkEqual(true, inRange({
          value: 30,
          from: 10,
          to: 30
        }));
        checkEqual(false, inRange({
          value: 9,
          from: 10,
          to: 30
        })); // exception

        checkEqual(false, isThrown(function () {
          inRange(20, 10, 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange('20', 10, 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange(20, '10', 30);
        }));
        checkEqual(true, isThrown(function () {
          inRange(20, 10, '30');
        }));
      });
    };

    var test_randomInt = function test_randomInt() {
      it('test_randomInt', function () {
        checkEqual(5, randomInt(5, 5));
        var result = randomInt(1, 10);
        checkEqual(true, inRange(result, 1, 10)); // Object Named Parameter

        checkEqual(10, randomInt({
          min: 10,
          max: 10
        })); // exception

        checkEqual(false, isThrown(function () {
          randomInt(10, 10);
        }));
        checkEqual(true, isThrown(function () {
          randomInt('10', 10);
        }));
        checkEqual(true, isThrown(function () {
          randomInt(10, '10');
        }));
      });
    };

    test_isMultiples();
    test_Math_round();
    test_round();
    test_nearEqual();
    test_inRange();
    test_randomInt();
  });
};

exports.test_execute_number = test_execute_number;
var _default = {
  test_execute_number: test_execute_number
};
exports["default"] = _default;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_string = void 0;

/* eslint-disable space-in-parens */

/* eslint-disable max-len */
var test_execute_string = function test_execute_string(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_string', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var _parts$string = parts.string,
        matchFormat = _parts$string.matchFormat,
        replaceAll = _parts$string.replaceAll,
        replaceAllRepeat = _parts$string.replaceAllRepeat,
        replaceAllArray = _parts$string.replaceAllArray,
        indexOfFirst = _parts$string.indexOfFirst,
        indexOfLast = _parts$string.indexOfLast,
        includeCount = _parts$string.includeCount,
        isFirst = _parts$string.isFirst,
        isLast = _parts$string.isLast,
        isBothEnds = _parts$string.isBothEnds,
        includeFirst = _parts$string.includeFirst,
        includeLast = _parts$string.includeLast,
        includeBothEnds = _parts$string.includeBothEnds,
        excludeFirst = _parts$string.excludeFirst,
        excludeLast = _parts$string.excludeLast,
        excludeBothEnds = _parts$string.excludeBothEnds,
        trimFirst = _parts$string.trimFirst,
        trimLast = _parts$string.trimLast,
        trimBothEnds = _parts$string.trimBothEnds,
        subIndex = _parts$string.subIndex,
        subLength = _parts$string.subLength,
        subFirst = _parts$string.subFirst,
        subLast = _parts$string.subLast,
        deleteIndex = _parts$string.deleteIndex,
        deleteLength = _parts$string.deleteLength,
        deleteFirst = _parts$string.deleteFirst,
        deleteLast = _parts$string.deleteLast,
        insert = _parts$string.insert,
        add = _parts$string.add,
        subFirstDelimFirst = _parts$string.subFirstDelimFirst,
        subFirstDelimLast = _parts$string.subFirstDelimLast,
        subLastDelimFirst = _parts$string.subLastDelimFirst,
        subLastDelimLast = _parts$string.subLastDelimLast,
        tagInnerFirst = _parts$string.tagInnerFirst,
        tagOuterFirst = _parts$string.tagOuterFirst,
        tagInnerLast = _parts$string.tagInnerLast,
        tagOuterLast = _parts$string.tagOuterLast,
        split = _parts$string.split,
        splitCommaItems = _parts$string.splitCommaItems,
        splitDotItems = _parts$string.splitDotItems,
        indexOfAnyFirst = _parts$string.indexOfAnyFirst,
        indexOfAnyLast = _parts$string.indexOfAnyLast,
        paddingFirst = _parts$string.paddingFirst,
        paddingLast = _parts$string.paddingLast;

    var test_matchFormat = function test_matchFormat() {
      it('test_matchFormat', function () {
        checkEqual(true, matchFormat('number', '123'));
        checkEqual(false, matchFormat('number', '12a'));
        checkEqual(false, matchFormat('number', '-123'));
        checkEqual(true, matchFormat('integer', '-123'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_y/m/d', '2019/9/5'));
        checkEqual(true, matchFormat('date_y/m/d', '19/1/1'));
        checkEqual(true, matchFormat('date_y/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_y/m/d', '9//1'));
        checkEqual(false, matchFormat('date_y/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_y/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/11/05'));
        checkEqual(true, matchFormat('date_yyyy/m/d', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/m/d', '2019-9-9'));
        checkEqual(true, matchFormat('date_yyyy/mm/dd', '2019/11/05'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019/9/5'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '19/1/1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '/11/11'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9//1'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '9/1/'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-09-09'));
        checkEqual(false, matchFormat('date_yyyy/mm/dd', '2019-9-9'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_y-m-d', '2019-9-5'));
        checkEqual(true, matchFormat('date_y-m-d', '19-1-1'));
        checkEqual(true, matchFormat('date_y-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_y-m-d', '9--1'));
        checkEqual(false, matchFormat('date_y-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_y-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-11-05'));
        checkEqual(true, matchFormat('date_yyyy-m-d', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-m-d', '2019/9/9'));
        checkEqual(true, matchFormat('date_yyyy-mm-dd', '2019-11-05'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019-9-5'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '19-1-1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '-11-11'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9--1'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '9-1-'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/09/09'));
        checkEqual(false, matchFormat('date_yyyy-mm-dd', '2019/9/9')); // Object Named Parameter

        checkEqual(false, matchFormat({
          formatName: 'number',
          value: '-123'
        }));
        checkEqual(true, matchFormat({
          formatName: 'integer',
          value: '-123'
        })); // Exception

        checkEqual(false, isThrownException(function () {
          matchFormat('integer', 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat(null, 'abc');
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('integer', 123);
        }, new TypeError().name), 'test matchFormat exception');
        checkEqual(true, isThrownException(function () {
          matchFormat('aaa', 'abc');
        }, new RangeError().name), 'test matchFormat exception');
      });
    };

    var test_replaceAll = function test_replaceAll() {
      it('test_replaceAll', function () {
        checkEqual('aaaa', replaceAll('abab', 'b', 'a'));
        checkEqual('aaaa', replaceAll('abab', 'ab', 'aa'));
        checkEqual('abcabc', replaceAll('abab', 'ab', 'abc'));
        checkEqual('acccb', replaceAll('accccccb', 'cc', 'c'));
        checkEqual('ac', replaceAll('abc', 'b', '')); // Object Named Parameter

        checkEqual('aaaa', replaceAll({
          str: 'abab',
          before: 'b',
          after: 'a'
        }));
        checkEqual('aaaa', replaceAll('abab', {
          before: 'b',
          after: 'a'
        }));
        checkEqual('aaaa', replaceAll('abab', 'b', {
          after: 'a'
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAllRepeat('1212', '2', '3');
        }));
        checkEqual(false, isThrown(function () {
          replaceAll('1212', '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll(1212, '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', 12, '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('1212', '12', 123);
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('abc', '', 'c');
        }));
        checkEqual(true, isThrown(function () {
          replaceAll('', 'a', 'c');
        }));
      });
    };

    var test_replaceAllRepeat = function test_replaceAllRepeat() {
      it('test_replaceAllRepeat', function () {
        checkEqual('aaaa', replaceAllRepeat('abab', 'b', 'a'));
        checkEqual('aaaa', replaceAllRepeat('abab', 'ab', 'aa'));
        checkEqual('acb', replaceAllRepeat('accccccb', 'cc', 'c'));
        checkEqual('ac', replaceAllRepeat('abc', 'b', '')); // Object Named Parameter

        checkEqual('aaaa', replaceAllRepeat({
          str: 'abab',
          before: 'b',
          after: 'a'
        }));
        checkEqual('aaaa', replaceAllRepeat('abab', {
          before: 'b',
          after: 'a'
        }));
        checkEqual('aaaa', replaceAllRepeat('abab', 'b', {
          after: 'a'
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAllRepeat('1212', '2', '3');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllRepeat('1212', '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllRepeat(1212, '12', '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllRepeat('1212', 12, '123');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllRepeat('1212', '12', 123);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllRepeat('abc', '', 'c');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllRepeat('', 'a', 'c');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllRepeat('abab', 'ab', 'abc');
        }));
      });
    };

    var test_replaceAllArray = function test_replaceAllArray() {
      it('test_replaceAllArray', function () {
        checkEqual('aaaa', replaceAllArray('abab', [['b', 'a']]));
        checkEqual('aaaa', replaceAllArray('abab', [['ab', 'aa']]));
        checkEqual('abcabc', replaceAllArray('abab', [['ab', 'abc']]));
        checkEqual('baba', replaceAllArray('abab', [['b', 'a'], ['a', 'b']]));
        checkEqual('bbbb', replaceAllArray('abab', [['a', 'b'], ['d', 'b']]));
        checkEqual('cbcb', replaceAllArray('abab', [['a', 'c'], ['d', 'b']]));
        checkEqual('acac', replaceAllArray('abab', [['c', 'a'], ['b', 'c']]));
        checkEqual('abab', replaceAllArray('abab', [['c', 'a'], ['d', 'b']]));
        checkEqual('abab', replaceAllArray('abcabc', [['abc', 'ab'], ['bca', 'b']]));
        checkEqual('abab', replaceAllArray('abcabc', [['bca', 'b'], ['abc', 'ab']]));
        checkEqual('abbc', replaceAllArray('abcabc', [['bca', 'b']]));
        checkEqual('ecec', replaceAllArray('abcabc', [['ab', 'e']]));
        checkEqual('ecec', replaceAllArray('abcabc', [['ab', 'e'], ['abc', 'd']]));
        checkEqual('dd', replaceAllArray('abcabc', [['abc', 'd'], ['ab', 'e']]));
        checkEqual('abcabcabcabc', replaceAllArray('abc\r\n abc\r abc \n a b c\r  \n', [[' ', ''], ['\n', ''], ['\r', '']])); // Object Named Parameter

        checkEqual('abcabc', replaceAllArray({
          str: 'abab',
          replaceArray: [['ab', 'abc']]
        })); // exception

        checkEqual(false, isThrown(function () {
          replaceAllArray('1212', [['12', '123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', 'a');
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', 123);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', ['12', '123']);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray(1212, [['12', '123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', [['123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', [[12, '123']]);
        }));
        checkEqual(true, isThrown(function () {
          replaceAllArray('1212', [['12', 123]]);
        }));
      });
    };

    var test_indexOf_standard = function test_indexOf_standard() {
      it('test_indexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.indexOf('a'));
        checkEqual(0, 'a'.indexOf('')); // strange

        checkEqual(-1, ''.indexOf('a'));
        checkEqual(0, ''.indexOf('')); // strange

        checkEqual(0, 'abc'.indexOf('a'));
        checkEqual(1, 'abc'.indexOf('b'));
        checkEqual(2, 'abc'.indexOf('c'));
        checkEqual(-1, 'abc'.indexOf('d'));
        checkEqual(0, 'abc'.indexOf('')); // strange

        checkEqual(0, 'abcabc'.indexOf('a'));
        checkEqual(1, 'abcabc'.indexOf('b'));
        checkEqual(2, 'abcabc'.indexOf('c'));
        checkEqual(-1, 'abcabc'.indexOf('d'));
        checkEqual(0, 'abcabc'.indexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.indexOf('a', -1)); // ?

        checkEqual(0, 'abcabc'.indexOf('a', 0));
        checkEqual(3, 'abcabc'.indexOf('a', 1));
        checkEqual(3, 'abcabc'.indexOf('a', 2));
        checkEqual(3, 'abcabc'.indexOf('a', 3));
        checkEqual(-1, 'abcabc'.indexOf('a', 4));
        checkEqual(-1, 'abcabc'.indexOf('a', 5));
        checkEqual(-1, 'abcabc'.indexOf('a', 6)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', -1)); // ?

        checkEqual(1, 'abcabc'.indexOf('b', 0));
        checkEqual(1, 'abcabc'.indexOf('b', 1));
        checkEqual(4, 'abcabc'.indexOf('b', 2));
        checkEqual(4, 'abcabc'.indexOf('b', 3));
        checkEqual(4, 'abcabc'.indexOf('b', 4));
        checkEqual(-1, 'abcabc'.indexOf('b', 5));
        checkEqual(-1, 'abcabc'.indexOf('b', 6)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', -1)); // ?

        checkEqual(2, 'abcabc'.indexOf('c', 0));
        checkEqual(2, 'abcabc'.indexOf('c', 1));
        checkEqual(2, 'abcabc'.indexOf('c', 2));
        checkEqual(5, 'abcabc'.indexOf('c', 3));
        checkEqual(5, 'abcabc'.indexOf('c', 4));
        checkEqual(5, 'abcabc'.indexOf('c', 5));
        checkEqual(-1, 'abcabc'.indexOf('c', 6)); // ?
      });
    };

    var test_indexOfFirst = function test_indexOfFirst() {
      it('test_indexOfFirst', function () {
        checkEqual(0, indexOfFirst('a', 'a'));
        checkEqual(-1, indexOfFirst('a', '')); // not strange

        checkEqual(-1, indexOfFirst('', 'a'));
        checkEqual(-1, indexOfFirst('', '')); // not strange

        checkEqual(0, indexOfFirst('abc', 'a'));
        checkEqual(1, indexOfFirst('abc', 'b'));
        checkEqual(2, indexOfFirst('abc', 'c'));
        checkEqual(-1, indexOfFirst('abc', 'd'));
        checkEqual(-1, indexOfFirst('abc', '')); // not strange

        checkEqual(0, indexOfFirst('abcabc', 'a'));
        checkEqual(1, indexOfFirst('abcabc', 'b'));
        checkEqual(2, indexOfFirst('abcabc', 'c'));
        checkEqual(-1, indexOfFirst('abcabc', 'd'));
        checkEqual(-1, indexOfFirst('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfFirst('abcabc', 'a', 0));
        checkEqual(3, indexOfFirst('abcabc', 'a', 1));
        checkEqual(3, indexOfFirst('abcabc', 'a', 2));
        checkEqual(3, indexOfFirst('abcabc', 'a', 3));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', -1);
        }));
        checkEqual(1, indexOfFirst('abcabc', 'b', 0));
        checkEqual(1, indexOfFirst('abcabc', 'b', 1));
        checkEqual(4, indexOfFirst('abcabc', 'b', 2));
        checkEqual(4, indexOfFirst('abcabc', 'b', 3));
        checkEqual(4, indexOfFirst('abcabc', 'b', 4));
        checkEqual(-1, indexOfFirst('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', -1);
        }));
        checkEqual(2, indexOfFirst('abcabc', 'c', 0));
        checkEqual(2, indexOfFirst('abcabc', 'c', 1));
        checkEqual(2, indexOfFirst('abcabc', 'c', 2));
        checkEqual(5, indexOfFirst('abcabc', 'c', 3));
        checkEqual(5, indexOfFirst('abcabc', 'c', 4));
        checkEqual(5, indexOfFirst('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfFirst('abcabc', 'c', 6);
        }));
      });
    };

    var test_lastIndexOf_standard = function test_lastIndexOf_standard() {
      it('test_lastIndexOf_standard', function () {
        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        checkEqual(0, 'a'.lastIndexOf('a'));
        checkEqual(1, 'a'.lastIndexOf('')); // strange

        checkEqual(-1, ''.lastIndexOf('a'));
        checkEqual(0, ''.lastIndexOf('')); // strange

        checkEqual(0, 'abc'.lastIndexOf('a'));
        checkEqual(1, 'abc'.lastIndexOf('b'));
        checkEqual(2, 'abc'.lastIndexOf('c'));
        checkEqual(-1, 'abc'.lastIndexOf('d'));
        checkEqual(3, 'abc'.lastIndexOf('')); // strange

        checkEqual(3, 'abcabc'.lastIndexOf('a'));
        checkEqual(4, 'abcabc'.lastIndexOf('b'));
        checkEqual(5, 'abcabc'.lastIndexOf('c'));
        checkEqual(-1, 'abcabc'.lastIndexOf('d'));
        checkEqual(6, 'abcabc'.lastIndexOf('')); // strange
        // startIndex

        checkEqual(0, 'abcabc'.lastIndexOf('a', -1)); // ??

        checkEqual(0, 'abcabc'.lastIndexOf('a', 0));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 1));
        checkEqual(0, 'abcabc'.lastIndexOf('a', 2));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 3));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 4));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 5));
        checkEqual(3, 'abcabc'.lastIndexOf('a', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('b', 0));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 1));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 2));
        checkEqual(1, 'abcabc'.lastIndexOf('b', 3));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 4));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 5));
        checkEqual(4, 'abcabc'.lastIndexOf('b', 6)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', -1)); // ?

        checkEqual(-1, 'abcabc'.lastIndexOf('c', 0));
        checkEqual(-1, 'abcabc'.lastIndexOf('c', 1));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 2));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 3));
        checkEqual(2, 'abcabc'.lastIndexOf('c', 4));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 5));
        checkEqual(5, 'abcabc'.lastIndexOf('c', 6)); // ?
      });
    };

    var test_indexOfLast = function test_indexOfLast() {
      it('test_indexOfLast', function () {
        checkEqual(0, indexOfLast('a', 'a'));
        checkEqual(-1, indexOfLast('a', '')); // not strange

        checkEqual(-1, indexOfLast('', 'a'));
        checkEqual(-1, indexOfLast('', '')); // not strange

        checkEqual(0, indexOfLast('abc', 'a'));
        checkEqual(1, indexOfLast('abc', 'b'));
        checkEqual(2, indexOfLast('abc', 'c'));
        checkEqual(-1, indexOfLast('abc', 'd'));
        checkEqual(-1, indexOfLast('abc', '')); // not strange

        checkEqual(3, indexOfLast('abcabc', 'a'));
        checkEqual(4, indexOfLast('abcabc', 'b'));
        checkEqual(5, indexOfLast('abcabc', 'c'));
        checkEqual(-1, indexOfLast('abcabc', 'd'));
        checkEqual(-1, indexOfLast('abcabc', '')); // not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', -1);
        }));
        checkEqual(0, indexOfLast('abcabc', 'a', 0));
        checkEqual(0, indexOfLast('abcabc', 'a', 1));
        checkEqual(0, indexOfLast('abcabc', 'a', 2));
        checkEqual(3, indexOfLast('abcabc', 'a', 3));
        checkEqual(3, indexOfLast('abcabc', 'a', 4));
        checkEqual(3, indexOfLast('abcabc', 'a', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'a', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'b', 0));
        checkEqual(1, indexOfLast('abcabc', 'b', 1));
        checkEqual(1, indexOfLast('abcabc', 'b', 2));
        checkEqual(1, indexOfLast('abcabc', 'b', 3));
        checkEqual(4, indexOfLast('abcabc', 'b', 4));
        checkEqual(4, indexOfLast('abcabc', 'b', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'b', 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', -1);
        }));
        checkEqual(-1, indexOfLast('abcabc', 'c', 0));
        checkEqual(-1, indexOfLast('abcabc', 'c', 1));
        checkEqual(2, indexOfLast('abcabc', 'c', 2));
        checkEqual(2, indexOfLast('abcabc', 'c', 3));
        checkEqual(2, indexOfLast('abcabc', 'c', 4));
        checkEqual(5, indexOfLast('abcabc', 'c', 5));
        checkEqual(true, isThrown(function () {
          return indexOfLast('abcabc', 'c', 6);
        }));
      });
    };

    var test_indexOfAnyFirst = function test_indexOfAnyFirst() {
      it('test_indexOfAnyFirst', function () {
        // element 1
        checkEqual(0, indexOfAnyFirst('a', ['a']).index);
        checkEqual(-1, indexOfAnyFirst('a', ['']).index); // ]not strange

        checkEqual(-1, indexOfAnyFirst('', ['a']).index);
        checkEqual(-1, indexOfAnyFirst('', ['']).index); // [not strange

        checkEqual(0, indexOfAnyFirst('abc', ['a']).index);
        checkEqual(1, indexOfAnyFirst('abc', ['b']).index);
        checkEqual(2, indexOfAnyFirst('abc', ['c']).index);
        checkEqual(-1, indexOfAnyFirst('abc', ['d']).index);
        checkEqual(-1, indexOfAnyFirst('abc', ['']).index); // ]not strange

        checkEqual(0, indexOfAnyFirst('abcabc', ['a']).index);
        checkEqual(1, indexOfAnyFirst('abcabc', ['b']).index);
        checkEqual(2, indexOfAnyFirst('abcabc', ['c']).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['d']).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['']).index); // ]not strange
        // startIndex

        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['a'], -1);
        }));
        checkEqual(0, indexOfAnyFirst('abcabc', ['a'], 0).index);
        checkEqual(3, indexOfAnyFirst('abcabc', ['a'], 1).index);
        checkEqual(3, indexOfAnyFirst('abcabc', ['a'], 2).index);
        checkEqual(3, indexOfAnyFirst('abcabc', ['a'], 3).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['a'], 4).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['a'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['a'], 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['b'], -1);
        }));
        checkEqual(1, indexOfAnyFirst('abcabc', ['b'], 0).index);
        checkEqual(1, indexOfAnyFirst('abcabc', ['b'], 1).index);
        checkEqual(4, indexOfAnyFirst('abcabc', ['b'], 2).index);
        checkEqual(4, indexOfAnyFirst('abcabc', ['b'], 3).index);
        checkEqual(4, indexOfAnyFirst('abcabc', ['b'], 4).index);
        checkEqual(-1, indexOfAnyFirst('abcabc', ['b'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['b'], 6);
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['c'], -1);
        }));
        checkEqual(2, indexOfAnyFirst('abcabc', ['c'], 0).index);
        checkEqual(2, indexOfAnyFirst('abcabc', ['c'], 1).index);
        checkEqual(2, indexOfAnyFirst('abcabc', ['c'], 2).index);
        checkEqual(5, indexOfAnyFirst('abcabc', ['c'], 3).index);
        checkEqual(5, indexOfAnyFirst('abcabc', ['c'], 4).index);
        checkEqual(5, indexOfAnyFirst('abcabc', ['c'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyFirst('abcabc', ['c'], 6);
        })); // element many

        var _checkEqual = function _checkEqual(result, functionResult) {
          checkEqual({
            index: result[0],
            searchIndex: result[1]
          }, functionResult);
        };

        _checkEqual([-1, -1], indexOfAnyFirst('abc', ['d', 'e']));

        _checkEqual([0, 0], indexOfAnyFirst('abc', ['a', 'c']));

        _checkEqual([0, 1], indexOfAnyFirst('abc', ['c', 'a']));

        _checkEqual([1, 0], indexOfAnyFirst('abc', ['b', 'c']));

        _checkEqual([1, 1], indexOfAnyFirst('abc', ['c', 'b']));

        _checkEqual([2, 1], indexOfAnyFirst('abc', ['', 'c']));

        _checkEqual([2, 0], indexOfAnyFirst('abc', ['c', '']));

        _checkEqual([-1, -1], indexOfAnyFirst('abc', ['', '']));

        _checkEqual([-1, -1], indexOfAnyFirst('abc', ['']));

        _checkEqual([0, 0], indexOfAnyFirst('abcabc', ['a', 'c'], 0));

        _checkEqual([2, 1], indexOfAnyFirst('abcabc', ['a', 'c'], 1));

        _checkEqual([2, 1], indexOfAnyFirst('abcabc', ['a', 'c'], 2));

        _checkEqual([3, 0], indexOfAnyFirst('abcabc', ['a', 'c'], 3));

        _checkEqual([1, 0], indexOfAnyFirst('abcabc', ['b'], 1));

        _checkEqual([4, 0], indexOfAnyFirst('abcabc', ['b'], 2)); // exception


        checkEqual(true, isThrown(function () {
          indexOfAnyFirst('abc', 'ab');
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyFirst('abc', []);
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyFirst('abc', [123]);
        }));
      });
    };

    var test_indexOfAnyLast = function test_indexOfAnyLast() {
      it('test_indexOfAnyLast', function () {
        // element 1
        checkEqual(0, indexOfAnyLast('a', ['a']).index);
        checkEqual(-1, indexOfAnyLast('a', ['']).index); // not strange

        checkEqual(-1, indexOfAnyLast('', ['a']).index);
        checkEqual(-1, indexOfAnyLast('', ['']).index); // not strange

        checkEqual(0, indexOfAnyLast('abc', ['a']).index);
        checkEqual(1, indexOfAnyLast('abc', ['b']).index);
        checkEqual(2, indexOfAnyLast('abc', ['c']).index);
        checkEqual(-1, indexOfAnyLast('abc', ['d']).index);
        checkEqual(-1, indexOfAnyLast('abc', ['']).index); // not strange

        checkEqual(3, indexOfAnyLast('abcabc', ['a']).index);
        checkEqual(4, indexOfAnyLast('abcabc', ['b']).index);
        checkEqual(5, indexOfAnyLast('abcabc', ['c']).index);
        checkEqual(-1, indexOfAnyLast('abcabc', ['d']).index);
        checkEqual(-1, indexOfAnyLast('abcabc', ['']).index); // not strange

        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['a'], -1).index;
        }));
        checkEqual(0, indexOfAnyLast('abcabc', ['a'], 0).index);
        checkEqual(0, indexOfAnyLast('abcabc', ['a'], 1).index);
        checkEqual(0, indexOfAnyLast('abcabc', ['a'], 2).index);
        checkEqual(3, indexOfAnyLast('abcabc', ['a'], 3).index);
        checkEqual(3, indexOfAnyLast('abcabc', ['a'], 4).index);
        checkEqual(3, indexOfAnyLast('abcabc', ['a'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['a'], 6).index;
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['b'], -1).index;
        }));
        checkEqual(-1, indexOfAnyLast('abcabc', ['b'], 0).index);
        checkEqual(1, indexOfAnyLast('abcabc', ['b'], 1).index);
        checkEqual(1, indexOfAnyLast('abcabc', ['b'], 2).index);
        checkEqual(1, indexOfAnyLast('abcabc', ['b'], 3).index);
        checkEqual(4, indexOfAnyLast('abcabc', ['b'], 4).index);
        checkEqual(4, indexOfAnyLast('abcabc', ['b'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['b'], 6).index;
        }));
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['c'], -1).index;
        }));
        checkEqual(-1, indexOfAnyLast('abcabc', ['c'], 0).index);
        checkEqual(-1, indexOfAnyLast('abcabc', ['c'], 1).index);
        checkEqual(2, indexOfAnyLast('abcabc', ['c'], 2).index);
        checkEqual(2, indexOfAnyLast('abcabc', ['c'], 3).index);
        checkEqual(2, indexOfAnyLast('abcabc', ['c'], 4).index);
        checkEqual(5, indexOfAnyLast('abcabc', ['c'], 5).index);
        checkEqual(true, isThrown(function () {
          return indexOfAnyLast('abcabc', ['c'], 6).index;
        })); // element many

        testCounter();

        var _checkEqual = function _checkEqual(result, functionResult) {
          checkEqual({
            index: result[0],
            searchIndex: result[1]
          }, functionResult);
        };

        _checkEqual([-1, -1], indexOfAnyLast('abc', ['d', 'e']));

        _checkEqual([2, 1], indexOfAnyLast('abc', ['a', 'c']));

        _checkEqual([2, 0], indexOfAnyLast('abc', ['c', 'a']));

        _checkEqual([2, 1], indexOfAnyLast('abc', ['b', 'c']));

        _checkEqual([2, 0], indexOfAnyLast('abc', ['c', 'b']));

        _checkEqual([2, 1], indexOfAnyLast('abc', ['', 'c']));

        _checkEqual([2, 0], indexOfAnyLast('abc', ['c', '']));

        _checkEqual([-1, -1], indexOfAnyLast('abc', ['', '']));

        _checkEqual([-1, -1], indexOfAnyLast('abc', ['']));

        _checkEqual([5, 1], indexOfAnyLast('abcabc', ['a', 'c']));

        _checkEqual([5, 1], indexOfAnyLast('abcabc', ['a', 'c'], 5));

        _checkEqual([3, 0], indexOfAnyLast('abcabc', ['a', 'c'], 4));

        _checkEqual([3, 0], indexOfAnyLast('abcabc', ['a', 'c'], 3));

        _checkEqual([2, 1], indexOfAnyLast('abcabc', ['a', 'c'], 2));

        _checkEqual([0, 0], indexOfAnyLast('abcabc', ['a', 'c'], 1));

        _checkEqual([0, 0], indexOfAnyLast('abcabc', ['a', 'c'], 0));

        _checkEqual([4, 0], indexOfAnyLast('abcabc', ['b'], 5));

        _checkEqual([4, 0], indexOfAnyLast('abcabc', ['b'], 4));

        _checkEqual([1, 0], indexOfAnyLast('abcabc', ['b'], 3)); // exception


        checkEqual(true, isThrown(function () {
          indexOfAnyLast('abc', 'ab');
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyLast('abc', []);
        }));
        checkEqual(true, isThrown(function () {
          indexOfAnyLast('abc', [123]);
        }));
      });
    };

    var test_isFirst = function test_isFirst() {
      it('test_isFirst', function () {
        checkEqual(true, isFirst('123', '1'));
        checkEqual(true, isFirst('123', '12'));
        checkEqual(false, isFirst('123', '13'));
        checkEqual(false, isFirst('123', '2'));
        checkEqual(true, isFirst('ABC', 'A'));
        checkEqual(true, isFirst('ABC', 'AB'));
        checkEqual(false, isFirst('ABC', 'AC'));
        checkEqual(false, isFirst('ABC', 'a'));
        checkEqual(false, isFirst('ABC', 'B'));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast('123', '3'));
        checkEqual(true, isLast('123', '23'));
        checkEqual(false, isLast('123', '13'));
        checkEqual(false, isLast('123', '2'));
        checkEqual(true, isLast('ABC', 'C'));
        checkEqual(true, isLast('ABC', 'BC'));
        checkEqual(false, isLast('ABC', 'AC'));
        checkEqual(false, isLast('ABC', 'c'));
        checkEqual(false, isLast('ABC', 'B'));
        checkEqual(false, isLast('1', '23'));
      });
    };

    var test_isBothEnds = function test_isBothEnds() {
      it('test_isBothEnds', function () {
        checkEqual(true, isBothEnds('121', '1'));
        checkEqual(false, isBothEnds('121', '2'));
        checkEqual(true, isBothEnds('121', '12', '21'));
        checkEqual(true, isBothEnds('ABA', 'A'));
        checkEqual(false, isBothEnds('ABA', 'a'));
        checkEqual(false, isBothEnds('ABA', 'B'));
        checkEqual(true, isBothEnds('ABAB', 'AB'));
        checkEqual(false, isBothEnds('ABAD', 'A'));
        checkEqual(true, isBothEnds('ABAD', 'A', 'D'));
        checkEqual(true, isBothEnds('{AB}', '{', '}'));
        checkEqual(true, isBothEnds('{{}}', '{', '}'));
        checkEqual(false, isBothEnds('A{B}', '{', '}'));
        checkEqual(false, isBothEnds('{AB}', '}', '}'));
        checkEqual(false, isBothEnds('{AB}', '{', '{'));
        checkEqual(false, isBothEnds('1', '1'));
        checkEqual(true, isBothEnds('11', '1')); // Object Named Parameter

        checkEqual(true, isBothEnds({
          str: 'ABA',
          search: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABA',
          search: 'a'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABA',
          searchFirst: 'A'
        }));
        checkEqual(false, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A'
        }));
        checkEqual(true, isBothEnds({
          str: 'ABAD',
          searchFirst: 'A',
          searchLast: 'D'
        }));
      });
    };

    var test_includeFirst = function test_includeFirst() {
      it('test_includeFirst', function () {
        checkEqual('123', includeFirst('123', '1'));
        checkEqual('123', includeFirst('123', '12'));
        checkEqual('13123', includeFirst('123', '13'));
        checkEqual('2123', includeFirst('123', '2'));
        checkEqual('ABC', includeFirst('ABC', 'A'));
        checkEqual('ABC', includeFirst('ABC', 'AB'));
        checkEqual('ACABC', includeFirst('ABC', 'AC'));
        checkEqual('aABC', includeFirst('ABC', 'a'));
        checkEqual('BABC', includeFirst('ABC', 'B'));
      });
    };

    var test_includeLast = function test_includeLast() {
      it('test_includeLast', function () {
        checkEqual('123', includeLast('123', '3'));
        checkEqual('123', includeLast('123', '23'));
        checkEqual('12313', includeLast('123', '13'));
        checkEqual('1232', includeLast('123', '2'));
        checkEqual('ABC', includeLast('ABC', 'C'));
        checkEqual('ABC', includeLast('ABC', 'BC'));
        checkEqual('ABCAC', includeLast('ABC', 'AC'));
        checkEqual('ABCc', includeLast('ABC', 'c'));
        checkEqual('ABCB', includeLast('ABC', 'B'));
      });
    };

    var test_includeBothEnds = function test_includeBothEnds() {
      it('test_includeBothEnds', function () {
        checkEqual('121', includeBothEnds('121', '1'));
        checkEqual('21212', includeBothEnds('121', '2'));
        checkEqual('121', includeBothEnds('121', '12', '21'));
        checkEqual('ABA', includeBothEnds('ABA', 'A'));
        checkEqual('aABAa', includeBothEnds('ABA', 'a'));
        checkEqual('BABAB', includeBothEnds('ABA', 'B'));
        checkEqual('ABAB', includeBothEnds('ABAB', 'AB'));
        checkEqual('AABADA', includeBothEnds('ABAD', 'A'));
        checkEqual('ABAD', includeBothEnds('ABAD', 'A', 'D'));
        checkEqual('{AB}', includeBothEnds('{AB}', '{', '}'));
        checkEqual('{{}}', includeBothEnds('{{}}', '{', '}'));
        checkEqual('{A{B}}', includeBothEnds('A{B}', '{', '}'));
        checkEqual('}{AB}}', includeBothEnds('{AB}', '}', '}'));
        checkEqual('{{AB}{', includeBothEnds('{AB}', '{', '{'));
        checkEqual('111', includeBothEnds('1', '1'));
        checkEqual('11', includeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('aABAa', includeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('ABA', includeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('AABADA', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', includeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_excludeFirst = function test_excludeFirst() {
      it('test_excludeFirst', function () {
        checkEqual('23', excludeFirst('123', '1'));
        checkEqual('3', excludeFirst('123', '12'));
        checkEqual('123', excludeFirst('123', '13'));
        checkEqual('123', excludeFirst('123', '2'));
        checkEqual('BC', excludeFirst('ABC', 'A'));
        checkEqual('C', excludeFirst('ABC', 'AB'));
        checkEqual('ABC', excludeFirst('ABC', 'AC'));
        checkEqual('ABC', excludeFirst('ABC', 'a'));
        checkEqual('ABC', excludeFirst('ABC', 'B'));
      });
    };

    var test_excludeLast = function test_excludeLast() {
      it('test_excludeLast', function () {
        checkEqual('12', excludeLast('123', '3'));
        checkEqual('1', excludeLast('123', '23'));
        checkEqual('123', excludeLast('123', '13'));
        checkEqual('123', excludeLast('123', '2'));
        checkEqual('AB', excludeLast('ABC', 'C'));
        checkEqual('A', excludeLast('ABC', 'BC'));
        checkEqual('ABC', excludeLast('ABC', 'AC'));
        checkEqual('ABC', excludeLast('ABC', 'c'));
        checkEqual('ABC', excludeLast('ABC', 'B'));
      });
    };

    var test_excludeBothEnds = function test_excludeBothEnds() {
      it('test_excludeBothEnds', function () {
        checkEqual('2', excludeBothEnds('121', '1'));
        checkEqual('121', excludeBothEnds('121', '2'));
        checkEqual('', excludeBothEnds('121', '12', '21'));
        checkEqual('B', excludeBothEnds('ABA', 'A'));
        checkEqual('ABA', excludeBothEnds('ABA', 'a'));
        checkEqual('ABA', excludeBothEnds('ABA', 'B'));
        checkEqual('', excludeBothEnds('ABAB', 'AB'));
        checkEqual('ABAD', excludeBothEnds('ABAD', 'A'));
        checkEqual('BA', excludeBothEnds('ABAD', 'A', 'D'));
        testCounter();
        checkEqual('AB', excludeBothEnds('{AB}', '{', '}'));
        checkEqual('{}', excludeBothEnds('{{}}', '{', '}'));
        checkEqual('A{B}', excludeBothEnds('A{B}', '{', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '}', '}'));
        checkEqual('{AB}', excludeBothEnds('{AB}', '{', '{'));
        checkEqual('1', excludeBothEnds('1', '1'));
        checkEqual('', excludeBothEnds('11', '1')); // Object Named Parameter

        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          value: 'A'
        }));
        checkEqual('ABA', excludeBothEnds({
          str: 'ABA',
          value: 'a'
        }));
        checkEqual('B', excludeBothEnds({
          str: 'ABA',
          valueFirst: 'A'
        }));
        checkEqual('ABAD', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A'
        }));
        checkEqual('BA', excludeBothEnds({
          str: 'ABAD',
          valueFirst: 'A',
          valueLast: 'D'
        }));
      });
    };

    var test_trimFirst = function test_trimFirst() {
      it('test_trimFirst', function () {
        checkEqual('23', trimFirst('123', ['1']));
        checkEqual('3', trimFirst('123', ['12']));
        checkEqual('123', trimFirst('123', ['13']));
        checkEqual('123', trimFirst('123', ['2']));
        checkEqual('BC', trimFirst('ABC', ['A']));
        checkEqual('C', trimFirst('ABC', ['AB']));
        checkEqual('ABC', trimFirst('ABC', ['AC']));
        checkEqual('ABC', trimFirst('ABC', ['a']));
        checkEqual('ABC', trimFirst('ABC', ['B']));
        checkEqual('C', trimFirst('ABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABC', ['B', 'A']));
        checkEqual('C', trimFirst('AABBC', ['A', 'B']));
        checkEqual('C', trimFirst('ABABC', ['A', 'B']));
        checkEqual('C', trimFirst('BABAC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBAC', ['A', 'B']));
        checkEqual('C', trimFirst('BAABC', ['A', 'B']));
        checkEqual('C', trimFirst('AAABC', ['A', 'B']));
        checkEqual('C', trimFirst('ABBBC', ['A', 'B']));
        checkEqual('CABC', trimFirst('CABC', ['A', 'B']));
        checkEqual('ABC', trimFirst('ABC', []));
        checkEqual('', trimFirst('ABC', ['ABC']));
        checkEqual('', trimFirst('ABC', ['A', 'B', 'C']));
        checkEqual('', trimFirst('', []));
        checkEqual('', trimFirst('', ['ABC']));
        checkEqual('', trimFirst('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimFirst('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimFirst('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimLast = function test_trimLast() {
      it('test_trimLast', function () {
        checkEqual('12', trimLast('123', ['3']));
        checkEqual('1', trimLast('123', ['23']));
        checkEqual('123', trimLast('123', ['13']));
        checkEqual('123', trimLast('123', ['2']));
        checkEqual('AB', trimLast('ABC', ['C']));
        checkEqual('A', trimLast('ABC', ['BC']));
        checkEqual('ABC', trimLast('ABC', ['AC']));
        checkEqual('ABC', trimLast('ABC', ['c']));
        checkEqual('ABC', trimLast('ABC', ['B']));
        checkEqual('C', trimLast('CAB', ['A', 'B']));
        checkEqual('C', trimLast('CAB', ['B', 'A']));
        checkEqual('C', trimLast('CAABB', ['A', 'B']));
        checkEqual('C', trimLast('CABAB', ['A', 'B']));
        checkEqual('C', trimLast('CBABA', ['A', 'B']));
        checkEqual('C', trimLast('CABBA', ['A', 'B']));
        checkEqual('C', trimLast('CBAAB', ['A', 'B']));
        checkEqual('C', trimLast('CAAAB', ['A', 'B']));
        checkEqual('C', trimLast('CABBB', ['A', 'B']));
        checkEqual('CABC', trimLast('CABC', ['A', 'B']));
        checkEqual('ABC', trimLast('ABC', []));
        checkEqual('', trimLast('ABC', ['ABC']));
        checkEqual('', trimLast('ABC', ['A', 'B', 'C']));
        checkEqual('', trimLast('', []));
        checkEqual('', trimLast('', ['ABC']));
        checkEqual('', trimLast('', ['A', 'B', 'C']));
        checkEqual(true, isThrown(function () {
          return trimLast('ABC', [0, 'B', 'C']);
        }));
        checkEqual(true, isThrown(function () {
          return trimLast('', [0, 'B', 'C']);
        }));
      });
    };

    var test_trimBothEnds = function test_trimBothEnds() {
      it('test_trimBothEnds', function () {
        checkEqual('2', trimBothEnds('121', ['1']));
        checkEqual('121', trimBothEnds('121', ['2']));
        checkEqual('1', trimBothEnds('121', ['12'], ['21']));
        checkEqual('3', trimBothEnds('123', ['12'], ['23']));
        checkEqual('B', trimBothEnds('ABA', ['A']));
        checkEqual('ABA', trimBothEnds('ABA', ['a']));
        checkEqual('ABA', trimBothEnds('ABA', ['B']));
        checkEqual('', trimBothEnds('ABAB', ['AB']));
        checkEqual('BAD', trimBothEnds('ABAD', ['A']));
        checkEqual('BA', trimBothEnds('ABAD', ['A'], ['D']));
        checkEqual('AB', trimBothEnds('{AB}', ['{'], ['}']));
        checkEqual('', trimBothEnds('{{}}', ['{'], ['}']));
        checkEqual('A{B', trimBothEnds('A{B}', ['{'], ['}']));
        checkEqual('{AB', trimBothEnds('{AB}', ['}'], ['}']));
        checkEqual('AB}', trimBothEnds('{AB}', ['{'], ['{']));
        checkEqual('232', trimBothEnds('12321', ['1']));
        checkEqual('12321', trimBothEnds('12321', ['2']));
        checkEqual('3', trimBothEnds('12321', ['2', '1']));
        checkEqual('232', trimBothEnds('12321', ['', '1']));
        checkEqual('32', trimBothEnds('12321', ['2', '1'], ['1']));
        checkEqual('321', trimBothEnds('12321', ['2', '1'], ['2']));
        checkEqual('', trimBothEnds('1', ['1']));
        checkEqual('', trimBothEnds('11', ['1']));
        checkEqual('abc', trimBothEnds('  abc\n  \n', [' ', '\n']));
        checkEqual('abc', trimBothEnds('  abc\n  \n', ['\n', ' '])); // Object Named Parameter

        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueArray: ['A']
        }));
        checkEqual('ABA', trimBothEnds({
          str: 'ABA',
          valueArray: ['a']
        }));
        checkEqual('B', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABA',
          valueFirstArray: ['A'],
          valueLastArray: []
        }));
        checkEqual('AB', trimBothEnds({
          str: 'ABA',
          valueFirstArray: [],
          valueLastArray: ['A']
        }));
        checkEqual('BAD', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A']
        }));
        checkEqual('BA', trimBothEnds({
          str: 'ABAD',
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_substring_stardard = function test_substring_stardard() {
      it('test_substring_stardard', function () {
        checkEqual('01234', '01234'.substring(-2));
        checkEqual('01234', '01234'.substring(-1));
        checkEqual('01234', '01234'.substring(0));
        checkEqual('1234', '01234'.substring(1));
        checkEqual('234', '01234'.substring(2));
        checkEqual('34', '01234'.substring(3));
        checkEqual('4', '01234'.substring(4));
        checkEqual('', '01234'.substring(5));
        checkEqual('', '01234'.substring(6));
        checkEqual('', '01234'.substring(-2, 0));
        checkEqual('', '01234'.substring(-1, 0));
        checkEqual('', '01234'.substring(0, 0));
        checkEqual('0', '01234'.substring(1, 0));
        checkEqual('01', '01234'.substring(2, 0));
        checkEqual('012', '01234'.substring(3, 0));
        checkEqual('0123', '01234'.substring(4, 0));
        checkEqual('01234', '01234'.substring(5, 0));
        checkEqual('01234', '01234'.substring(6, 0));
        checkEqual('012', '01234'.substring(-2, 3));
        checkEqual('012', '01234'.substring(-1, 3));
        checkEqual('012', '01234'.substring(0, 3));
        checkEqual('12', '01234'.substring(1, 3));
        checkEqual('2', '01234'.substring(2, 3));
        checkEqual('', '01234'.substring(3, 3));
        checkEqual('3', '01234'.substring(4, 3));
        checkEqual('34', '01234'.substring(5, 3));
        checkEqual('34', '01234'.substring(6, 3));
        checkEqual('01234', '01234'.substring(-2, 5));
        checkEqual('01234', '01234'.substring(-1, 5));
        checkEqual('01234', '01234'.substring(0, 5));
        checkEqual('1234', '01234'.substring(1, 5));
        checkEqual('234', '01234'.substring(2, 5));
        checkEqual('34', '01234'.substring(3, 5));
        checkEqual('4', '01234'.substring(4, 5));
        checkEqual('', '01234'.substring(5, 5));
        checkEqual('', '01234'.substring(6, 5));
        checkEqual('01234', '01234'.substring(-2, 6));
        checkEqual('01234', '01234'.substring(-1, 6));
        checkEqual('01234', '01234'.substring(0, 6));
        checkEqual('1234', '01234'.substring(1, 6));
        checkEqual('234', '01234'.substring(2, 6));
        checkEqual('34', '01234'.substring(3, 6));
        checkEqual('4', '01234'.substring(4, 6));
        checkEqual('', '01234'.substring(5, 6));
        checkEqual('', '01234'.substring(6, 6));
      });
    };

    var test_substr_stardard = function test_substr_stardard() {
      it('test_substr_stardard', function () {
        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2)); // ?

          checkEqual('4', '01234'.substr(-1)); // ?
        } else {
          checkEqual('01234', '01234'.substr(-2)); // ?

          checkEqual('01234', '01234'.substr(-1)); // ?
        }

        checkEqual('01234', '01234'.substr(0));
        checkEqual('1234', '01234'.substr(1));
        checkEqual('234', '01234'.substr(2));
        checkEqual('34', '01234'.substr(3));
        checkEqual('4', '01234'.substr(4));
        checkEqual('', '01234'.substr(5)); // ?

        checkEqual('', '01234'.substr(6)); // ?

        checkEqual('', '01234'.substr(-2, 0));
        checkEqual('', '01234'.substr(-1, 0));
        checkEqual('', '01234'.substr(0, 0));
        checkEqual('', '01234'.substr(1, 0));
        checkEqual('', '01234'.substr(2, 0));
        checkEqual('', '01234'.substr(3, 0));
        checkEqual('', '01234'.substr(4, 0));
        checkEqual('', '01234'.substr(5, 0));
        checkEqual('', '01234'.substr(6, 0));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 3)); // ?

          checkEqual('4', '01234'.substr(-1, 3)); // ?
        } else {
          checkEqual('012', '01234'.substr(-2, 3)); // ?

          checkEqual('012', '01234'.substr(-1, 3)); // ?
        }

        checkEqual('012', '01234'.substr(0, 3));
        checkEqual('123', '01234'.substr(1, 3));
        checkEqual('234', '01234'.substr(2, 3));
        checkEqual('34', '01234'.substr(3, 3));
        checkEqual('4', '01234'.substr(4, 3));
        checkEqual('', '01234'.substr(5, 3)); // ?

        checkEqual('', '01234'.substr(6, 3)); // ?

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 5));
          checkEqual('4', '01234'.substr(-1, 5));
        } else {
          checkEqual('01234', '01234'.substr(-2, 5));
          checkEqual('01234', '01234'.substr(-1, 5));
        }

        checkEqual('01234', '01234'.substr(0, 5));
        checkEqual('1234', '01234'.substr(1, 5));
        checkEqual('234', '01234'.substr(2, 5));
        checkEqual('34', '01234'.substr(3, 5));
        checkEqual('4', '01234'.substr(4, 5));
        checkEqual('', '01234'.substr(5, 5));
        checkEqual('', '01234'.substr(6, 5));
        testCounter();

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('34', '01234'.substr(-2, 6));
          checkEqual('4', '01234'.substr(-1, 6));
        } else {
          checkEqual('01234', '01234'.substr(-2, 6));
          checkEqual('01234', '01234'.substr(-1, 6));
        }

        checkEqual('01234', '01234'.substr(0, 6));
        checkEqual('1234', '01234'.substr(1, 6));
        checkEqual('234', '01234'.substr(2, 6));
        checkEqual('34', '01234'.substr(3, 6));
        checkEqual('4', '01234'.substr(4, 6));
        checkEqual('', '01234'.substr(5, 6));
        checkEqual('', '01234'.substr(6, 6));
      });
    };

    var test_subIndex = function test_subIndex() {
      it('test_subIndex', function () {
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1);
        }));
        checkEqual('0', subIndex('01234', 0));
        checkEqual('1', subIndex('01234', 1));
        checkEqual('2', subIndex('01234', 2));
        checkEqual('3', subIndex('01234', 3));
        checkEqual('4', subIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 0);
        }));
        checkEqual('0', subIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 3);
        }));
        checkEqual('0123', subIndex('01234', 0, 3));
        checkEqual('123', subIndex('01234', 1, 3));
        checkEqual('23', subIndex('01234', 2, 3));
        checkEqual('3', subIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex('01234', 6, 6);
        }));
      });
    };

    var test_subLength = function test_subLength() {
      it('test_subLength', function () {
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1);
        }));
        checkEqual('01234', subLength('01234', 0));
        checkEqual('1234', subLength('01234', 1));
        checkEqual('234', subLength('01234', 2));
        checkEqual('34', subLength('01234', 3));
        checkEqual('4', subLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 0);
        }));
        checkEqual('', subLength('01234', 0, 0));
        checkEqual('', subLength('01234', 1, 0));
        checkEqual('', subLength('01234', 2, 0));
        checkEqual('', subLength('01234', 3, 0));
        checkEqual('', subLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 3);
        }));
        checkEqual('012', subLength('01234', 0, 3));
        checkEqual('123', subLength('01234', 1, 3));
        checkEqual('234', subLength('01234', 2, 3));
        checkEqual('34', subLength('01234', 3, 3));
        checkEqual('4', subLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 5);
        }));
        checkEqual('01234', subLength('01234', 0, 5));
        checkEqual('1234', subLength('01234', 1, 5));
        checkEqual('234', subLength('01234', 2, 5));
        checkEqual('34', subLength('01234', 3, 5));
        checkEqual('4', subLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', -1, 6);
        }));
        checkEqual('01234', subLength('01234', 0, 6));
        checkEqual('1234', subLength('01234', 1, 6));
        checkEqual('234', subLength('01234', 2, 6));
        checkEqual('34', subLength('01234', 3, 6));
        checkEqual('4', subLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength('01234', 6, 6);
        }));
      });
    };

    var test_subFirst = function test_subFirst() {
      it('test_subFirst', function () {
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', -1);
        }));
        checkEqual('', subFirst('01234', 0));
        checkEqual('0', subFirst('01234', 1));
        checkEqual('01', subFirst('01234', 2));
        checkEqual('012', subFirst('01234', 3));
        checkEqual('0123', subFirst('01234', 4));
        checkEqual('01234', subFirst('01234', 5));
        checkEqual(true, isThrown(function () {
          return subFirst('01234', 6);
        }));
      });
    };

    var test_subLast = function test_subLast() {
      it('test_subLast', function () {
        checkEqual(true, isThrown(function () {
          return subLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLast('01234', -1);
        }));
        checkEqual('', subLast('01234', 0));
        checkEqual('4', subLast('01234', 1));
        checkEqual('34', subLast('01234', 2));
        checkEqual('234', subLast('01234', 3));
        checkEqual('1234', subLast('01234', 4));
        checkEqual('01234', subLast('01234', 5));
        checkEqual(true, isThrown(function () {
          return subLast('01234', 6);
        }));
      });
    };

    var test_deleteIndex = function test_deleteIndex() {
      it('test_deleteIndex', function () {
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1);
        }));
        checkEqual('1234', deleteIndex('01234', 0));
        checkEqual('0234', deleteIndex('01234', 1));
        checkEqual('0134', deleteIndex('01234', 2));
        checkEqual('0124', deleteIndex('01234', 3));
        checkEqual('0123', deleteIndex('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 0);
        }));
        checkEqual('1234', deleteIndex('01234', 0, 0));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 0);
        }));
        testCounter();
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 3);
        }));
        checkEqual('4', deleteIndex('01234', 0, 3));
        checkEqual('04', deleteIndex('01234', 1, 3));
        checkEqual('014', deleteIndex('01234', 2, 3));
        checkEqual('0124', deleteIndex('01234', 3, 3));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex('01234', 6, 6);
        }));
      });
    };

    var test_deleteLength = function test_deleteLength() {
      it('test_deleteLength', function () {
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1);
        }));
        checkEqual('', deleteLength('01234', 0));
        checkEqual('0', deleteLength('01234', 1));
        checkEqual('01', deleteLength('01234', 2));
        checkEqual('012', deleteLength('01234', 3));
        checkEqual('0123', deleteLength('01234', 4));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 0);
        }));
        checkEqual('01234', deleteLength('01234', 0, 0));
        checkEqual('01234', deleteLength('01234', 1, 0));
        checkEqual('01234', deleteLength('01234', 2, 0));
        checkEqual('01234', deleteLength('01234', 3, 0));
        checkEqual('01234', deleteLength('01234', 4, 0));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 3);
        }));
        checkEqual('34', deleteLength('01234', 0, 3));
        checkEqual('04', deleteLength('01234', 1, 3));
        checkEqual('01', deleteLength('01234', 2, 3));
        checkEqual('012', deleteLength('01234', 3, 3));
        checkEqual('0123', deleteLength('01234', 4, 3));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 5);
        }));
        checkEqual('', deleteLength('01234', 0, 5));
        checkEqual('0', deleteLength('01234', 1, 5));
        checkEqual('01', deleteLength('01234', 2, 5));
        checkEqual('012', deleteLength('01234', 3, 5));
        checkEqual('0123', deleteLength('01234', 4, 5));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', -1, 6);
        }));
        checkEqual('', deleteLength('01234', 0, 6));
        checkEqual('0', deleteLength('01234', 1, 6));
        checkEqual('01', deleteLength('01234', 2, 6));
        checkEqual('012', deleteLength('01234', 3, 6));
        checkEqual('0123', deleteLength('01234', 4, 6));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength('01234', 6, 6);
        })); // Object Named Parameter

        checkEqual('03', deleteLength({
          str: '0123',
          index: 1,
          length: 2
        }));
        checkEqual('03', deleteLength('0123', {
          index: 1,
          length: 2
        }));
        checkEqual('03', deleteLength('0123', 1, {
          length: 2
        }));
        checkEqual('01', deleteLength({
          str: '0123',
          index: 2
        }));
        checkEqual('01', deleteLength('0123', {
          index: 2
        }));
      });
    };

    var test_deleteFirst = function test_deleteFirst() {
      it('test_deleteFirst', function () {
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', -1);
        }));
        checkEqual('01234', deleteFirst('01234', 0));
        checkEqual('1234', deleteFirst('01234', 1));
        checkEqual('234', deleteFirst('01234', 2));
        checkEqual('34', deleteFirst('01234', 3));
        checkEqual('4', deleteFirst('01234', 4));
        checkEqual('', deleteFirst('01234', 5));
        checkEqual('1234', deleteFirst('01234'));
        checkEqual(true, isThrown(function () {
          return deleteFirst('01234', 6);
        })); // Object Named Parameter

        checkEqual('123', deleteFirst({
          str: '0123',
          length: 1
        }));
        checkEqual('123', deleteFirst('0123', {
          length: 1
        }));
      });
    };

    var test_deleteLast = function test_deleteLast() {
      it('test_deleteLast', function () {
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', -1);
        }));
        checkEqual('01234', deleteLast('01234', 0));
        checkEqual('0123', deleteLast('01234', 1));
        checkEqual('012', deleteLast('01234', 2));
        checkEqual('01', deleteLast('01234', 3));
        checkEqual('0', deleteLast('01234', 4));
        checkEqual('', deleteLast('01234', 5));
        checkEqual('0123', deleteLast('01234'));
        checkEqual(true, isThrown(function () {
          return deleteLast('01234', 6);
        })); // Object Named Parameter

        checkEqual('012', deleteLast({
          str: '0123',
          length: 1
        }));
        checkEqual('012', deleteLast('0123', {
          length: 1
        }));
      });
    };

    var test_insert = function test_insert() {
      it('test_insert', function () {
        checkEqual('A01234', insert('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', -1);
        }));
        checkEqual('A01234', insert('01234', 'A', 0));
        checkEqual('0A1234', insert('01234', 'A', 1));
        checkEqual('01A234', insert('01234', 'A', 2));
        checkEqual('012A34', insert('01234', 'A', 3));
        checkEqual('0123A4', insert('01234', 'A', 4));
        checkEqual('01234A', insert('01234', 'A', 5));
        checkEqual(true, isThrown(function () {
          return insert('01234', 'A', 6);
        }));
      });
    };

    var test_add = function test_add() {
      it('test_add', function () {
        checkEqual('01234A', add('01234', 'A'));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', -2);
        }));
        checkEqual('A01234', add('01234', 'A', -1));
        checkEqual('0A1234', add('01234', 'A', 0));
        checkEqual('01A234', add('01234', 'A', 1));
        checkEqual('012A34', add('01234', 'A', 2));
        checkEqual('0123A4', add('01234', 'A', 3));
        checkEqual('01234A', add('01234', 'A', 4));
        checkEqual(true, isThrown(function () {
          return add('01234', 'A', 5);
        }));
      });
    };

    var test_subFirstDelimFirst = function test_subFirstDelimFirst() {
      it('test_subFirstDelimFirst', function () {
        checkEqual('123', subFirstDelimFirst('123,456', ','));
        checkEqual('123', subFirstDelimFirst('123,456,789', ','));
        checkEqual('123', subFirstDelimFirst('123ttt456', 'ttt'));
        checkEqual('123', subFirstDelimFirst('123ttt456', 'tt'));
        checkEqual('123', subFirstDelimFirst('123ttt456', 't'));
        checkEqual('', subFirstDelimFirst('123ttt456', ','));
        checkEqual('123', subFirstDelimFirst('123,,', ','));
        checkEqual('', subFirstDelimFirst(',,123', ','));
        checkEqual('', subFirstDelimFirst(',,123,,', ','));
        checkEqual('123', subFirstDelimFirst('123,,', ',,'));
        checkEqual('', subFirstDelimFirst(',,123', ',,'));
        checkEqual('', subFirstDelimFirst(',,123,,', ',,')); // object parameter

        checkEqual('123', subFirstDelimFirst({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('123', subFirstDelimFirst('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_subFirstDelimLast = function test_subFirstDelimLast() {
      it('test_subFirstDelimLast', function () {
        checkEqual('123', subFirstDelimLast('123,456', ','));
        checkEqual('123,456', subFirstDelimLast('123,456,789', ','));
        checkEqual('123', subFirstDelimLast('123ttt456', 'ttt'));
        checkEqual('123t', subFirstDelimLast('123ttt456', 'tt'));
        checkEqual('123tt', subFirstDelimLast('123ttt456', 't'));
        checkEqual('', subFirstDelimLast('123ttt456', ','));
        checkEqual('123,', subFirstDelimLast('123,,', ','));
        checkEqual(',', subFirstDelimLast(',,123', ','));
        checkEqual(',,123,', subFirstDelimLast(',,123,,', ','));
        checkEqual('123', subFirstDelimLast('123,,', ',,'));
        checkEqual('', subFirstDelimLast(',,123', ',,'));
        checkEqual(',,123', subFirstDelimLast(',,123,,', ',,')); // object parameter

        checkEqual('123', subFirstDelimLast({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('123', subFirstDelimLast('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_subLastDelimFirst = function test_subLastDelimFirst() {
      it('test_subLastDelimFirst', function () {
        checkEqual('456', subLastDelimFirst('123,456', ','));
        checkEqual('456,789', subLastDelimFirst('123,456,789', ','));
        checkEqual('456', subLastDelimFirst('123ttt456', 'ttt'));
        checkEqual('t456', subLastDelimFirst('123ttt456', 'tt'));
        checkEqual('tt456', subLastDelimFirst('123ttt456', 't'));
        checkEqual('', subLastDelimFirst('123ttt456', ','));
        checkEqual(',', subLastDelimFirst('123,,', ','));
        checkEqual(',123', subLastDelimFirst(',,123', ','));
        checkEqual(',123,,', subLastDelimFirst(',,123,,', ','));
        checkEqual('', subLastDelimFirst('123,,', ',,'));
        checkEqual('123', subLastDelimFirst(',,123', ',,'));
        checkEqual('123,,', subLastDelimFirst(',,123,,', ',,')); // object parameter

        checkEqual('456', subLastDelimFirst({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('456', subLastDelimFirst('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_subLastDelimLast = function test_subLastDelimLast() {
      it('test_subLastDelimLast', function () {
        checkEqual('456', subLastDelimLast('123,456', ','));
        checkEqual('789', subLastDelimLast('123,456,789', ','));
        checkEqual('456', subLastDelimLast('123ttt456', 'ttt'));
        checkEqual('456', subLastDelimLast('123ttt456', 'tt'));
        checkEqual('456', subLastDelimLast('123ttt456', 't'));
        checkEqual('', subLastDelimLast('123ttt456', ','));
        checkEqual('', subLastDelimLast('123,,', ','));
        checkEqual('123', subLastDelimLast(',,123', ','));
        checkEqual('', subLastDelimLast(',,123,,', ','));
        checkEqual('', subLastDelimLast('123,,', ',,'));
        checkEqual('123', subLastDelimLast(',,123', ',,'));
        checkEqual('', subLastDelimLast(',,123,,', ',,')); // object parameter

        checkEqual('456', subLastDelimLast({
          str: '123,456',
          delimiter: ','
        }));
        checkEqual('456', subLastDelimLast('123,456', {
          delimiter: ','
        }));
      });
    };

    var test_tagInnerFirst = function test_tagInnerFirst() {
      it('test_tagInnerFirst', function () {
        checkEqual('b', tagInnerFirst('  <aba>  ', '<a', 'a>'));
        checkEqual('', tagInnerFirst('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagInnerFirst('  <a>  ', '<a', 'a>'));
        checkEqual('b', tagInnerFirst('<<>>>a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>'));
        checkEqual('<<<', tagInnerFirst('<<>><a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('b', tagInnerFirst({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerFirst('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerFirst('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_tagOuterFirst = function test_tagOuterFirst() {
      it('test_tagOuterFirst', function () {
        checkEqual('<aba>', tagOuterFirst('  <aba>  ', '<a', 'a>'));
        checkEqual('<aa>', tagOuterFirst('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagOuterFirst('  <a>  ', '<a', 'a>'));
        checkEqual('<aba>', tagOuterFirst('<<>>>a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>'));
        checkEqual('<a<<<a>', tagOuterFirst('<<>><a<<<a>><<aba>><<a>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('<aba>', tagOuterFirst({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterFirst('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterFirst('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_tagInnerLast = function test_tagInnerLast() {
      it('test_tagInnerLast', function () {
        checkEqual('b', tagInnerLast('  <aba>  ', '<a', 'a>'));
        checkEqual('', tagInnerLast('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagInnerLast('  <a>  ', '<a', 'a>'));
        checkEqual('b', tagInnerLast('<<>>>a<<<a>><<aba>><<a>>>a<<<>>', '<a', 'a>'));
        checkEqual('>>>', tagInnerLast('<<>><a<<<a>><<aba>><<a>>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('b', tagInnerLast({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerLast('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('b', tagInnerLast('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_tagOuterLast = function test_tagOuterLast() {
      it('test_tagOuterLast', function () {
        checkEqual('<aba>', tagOuterLast('  <aba>  ', '<a', 'a>'));
        checkEqual('<aa>', tagOuterLast('  <aa>  ', '<a', 'a>'));
        checkEqual('', tagOuterLast('  <a>  ', '<a', 'a>'));
        checkEqual('<aba>', tagOuterLast('<<>>>a<<<a>><<aba>><<a>>>a<<<>>', '<a', 'a>'));
        checkEqual('<a>>>a>', tagOuterLast('<<>><a<<<a>><<aba>><<a>>>a><<>>', '<a', 'a>')); // object parameter

        checkEqual('<aba>', tagOuterLast({
          str: '  <aba>  ',
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterLast('  <aba>  ', {
          startTag: '<a',
          endTag: 'a>'
        }));
        checkEqual('<aba>', tagOuterLast('  <aba>  ', '<a', {
          endTag: 'a>'
        }));
      });
    };

    var test_split = function test_split() {
      it('test_split', function () {
        checkEqual(['ABC', 'DEF', 'GHI'], split('ABC,DEF,GHI', ','));
        checkEqual(['ABC', 'DEF', 'GHI'], split('ABC.DEF.GHI', '.'));
        checkEqual(['ABC', 'DEF', 'GHI'], split('ABC DEF GHI', ' '));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',,ABC,,DEF,,GHI,,', ','));
        checkEqual(['', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.first));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', ''], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.last));
        checkEqual(['', 'ABC', '', 'DEF', '', 'GHI', ''], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.bothEnds));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',,ABC,,DEF,,GHI,,', ',', split.excludeEmptyStr.all));
        checkEqual(['', '', ' A B C ', '', ' DE F ', '', ' G HI ', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.none, split.executeConvert.none));
        checkEqual(['', '', 'A B C', '', 'DE F', '', 'G HI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.none, split.executeConvert.trimSpace));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.none, split.executeConvert.excludeSpace));
        checkEqual(['ABC', 'DEF', 'GHI'], split(' , , A B C , , DE F ,, G HI , , ', ',', split.excludeEmptyStr.all, split.executeConvert.excludeSpace));
        checkEqual([''], split('', ',', split.excludeEmptyStr.none));
        checkEqual([], split('', ',', split.excludeEmptyStr.first));
        checkEqual([''], split('', ',', split.excludeEmptyStr.last));
        checkEqual([''], split('', ',', split.excludeEmptyStr.bothEnds));
        checkEqual([], split('', ',', split.excludeEmptyStr.all));
        checkEqual(['', ''], split(',', ',', split.excludeEmptyStr.none));
        checkEqual([''], split(',', ',', split.excludeEmptyStr.first));
        checkEqual([''], split(',', ',', split.excludeEmptyStr.last));
        checkEqual([], split(',', ',', split.excludeEmptyStr.bothEnds));
        checkEqual([], split(',', ',', split.excludeEmptyStr.all));
        checkEqual(['', '', ''], split(',,', ',', split.excludeEmptyStr.none));
        checkEqual(['', ''], split(',,', ',', split.excludeEmptyStr.first));
        checkEqual(['', ''], split(',,', ',', split.excludeEmptyStr.last));
        checkEqual([''], split(',,', ',', split.excludeEmptyStr.bothEnds));
        checkEqual([], split(',,', ',', split.excludeEmptyStr.all));
        checkEqual(['', 'A', ''], split(',A,', ',', split.excludeEmptyStr.none));
        checkEqual(['A', ''], split(',A,', ',', split.excludeEmptyStr.first));
        checkEqual(['', 'A'], split(',A,', ',', split.excludeEmptyStr.last));
        checkEqual(['A'], split(',A,', ',', split.excludeEmptyStr.bothEnds));
        checkEqual(['A'], split(',A,', ',', split.excludeEmptyStr.all)); // object parameter

        testCounter();
        checkEqual(['ABC', 'DEF', 'GHI'], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all,
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all,
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',, A B C ,, DE F ,, G HI ,,', ',', {
          excludeEmptyStr: split.excludeEmptyStr.all,
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['ABC', 'DEF', 'GHI'], split(',, A B C ,, DE F ,, G HI ,,', ',', split.excludeEmptyStr.all, {
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual([' A B C ', ' DE F ', ' G HI '], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all
        }));
        checkEqual([' A B C ', ' DE F ', ' G HI '], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ',',
          excludeEmptyStr: split.excludeEmptyStr.all
        }));
        checkEqual([' A B C ', ' DE F ', ' G HI '], split(',, A B C ,, DE F ,, G HI ,,', ',', {
          excludeEmptyStr: split.excludeEmptyStr.all
        }));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ',',
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ',',
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['', '', 'ABC', '', 'DEF', '', 'GHI', '', ''], split(',, A B C ,, DE F ,, G HI ,,', ',', {
          executeConvert: split.executeConvert.excludeSpace
        }));
        checkEqual(['', '', ' A B C ', '', ' DE F ', '', ' G HI ', '', ''], split({
          str: ',, A B C ,, DE F ,, G HI ,,',
          separator: ','
        }));
        checkEqual(['', '', ' A B C ', '', ' DE F ', '', ' G HI ', '', ''], split(',, A B C ,, DE F ,, G HI ,,', {
          separator: ','
        }));
      });
    };

    var test_splitCommaItems = function test_splitCommaItems() {
      it('test_splitCommaItems', function () {
        checkEqual(['A'], splitCommaItems('A'));
        checkEqual(['A'], splitCommaItems('A,'));
        checkEqual(['A', 'B'], splitCommaItems('A,B'));
        checkEqual(['A', 'B'], splitCommaItems('A,B,'));
        checkEqual(['A', 'B'], splitCommaItems('A ,B ,'));
        checkEqual(['A', 'B'], splitCommaItems('\r\n A \r\n, B \r ,\r\n'));
        checkEqual(['A B', 'B'], splitCommaItems('\r\n A B\r\n, B \r ,\r\n'));
        checkEqual([], splitCommaItems(''));
        checkEqual(true, isThrown(function () {
          splitCommaItems(',A');
        }));
        checkEqual(true, isThrown(function () {
          splitCommaItems(',');
        }));
        checkEqual(true, isThrown(function () {
          splitCommaItems(',,');
        }));
        checkEqual(true, isThrown(function () {
          splitCommaItems('A,,B');
        }));
      });
    };

    var test_splitDotItems = function test_splitDotItems() {
      it('test_splitDotItems', function () {
        checkEqual(['A'], splitDotItems('A'));
        checkEqual(['A'], splitDotItems('.A'));
        checkEqual(['A', 'B'], splitDotItems('A.B'));
        checkEqual(['A', 'B'], splitDotItems('.A.B'));
        checkEqual([' '], splitDotItems(' '));
        checkEqual([], splitDotItems(''));
        checkEqual(true, isThrown(function () {
          splitDotItems('A.');
        }));
        checkEqual(false, isThrown(function () {
          splitDotItems('A. ');
        }));
        checkEqual(true, isThrown(function () {
          splitDotItems('.');
        }));
        checkEqual(true, isThrown(function () {
          splitDotItems('..');
        }));
        checkEqual(true, isThrown(function () {
          splitDotItems('A..B');
        }));
        checkEqual(false, isThrown(function () {
          splitDotItems('A. .B');
        }));
      });
    };

    var test_paddingFirst = function test_paddingFirst() {
      it('test_paddingFirst', function () {
        checkEqual('123', paddingFirst('123', 1, '0'));
        checkEqual('123', paddingFirst('123', 2, '0'));
        checkEqual('123', paddingFirst('123', 3, '0'));
        checkEqual('0123', paddingFirst('123', 4, '0'));
        checkEqual('00123', paddingFirst('123', 5, '0'));
        checkEqual(true, isThrown(function () {
          paddingFirst('123', 0, '0');
        }));
        checkEqual('00123', paddingFirst({
          str: '123',
          length: 5,
          fill: '0'
        }));
        checkEqual('00123', paddingFirst('123', {
          length: 5,
          fill: '0'
        }));
        checkEqual('00123', paddingFirst('123', 5, {
          fill: '0'
        }));
      });
    };

    var test_paddingLast = function test_paddingLast() {
      it('test_paddingLast', function () {
        checkEqual('123', paddingLast('123', 1, '0'));
        checkEqual('123', paddingLast('123', 2, '0'));
        checkEqual('123', paddingLast('123', 3, '0'));
        checkEqual('1230', paddingLast('123', 4, '0'));
        checkEqual('12300', paddingLast('123', 5, '0'));
        checkEqual(true, isThrown(function () {
          paddingLast('123', 0, '0');
        }));
        checkEqual('12300', paddingLast({
          str: '123',
          length: 5,
          fill: '0'
        }));
        checkEqual('12300', paddingLast('123', {
          length: 5,
          fill: '0'
        }));
        checkEqual('12300', paddingLast('123', 5, {
          fill: '0'
        }));
      });
    };

    var test_includeCount = function test_includeCount() {
      it('test_includeCount', function () {
        checkEqual(0, includeCount('a', ''));
        checkEqual(3, includeCount('aaa', 'a'));
        checkEqual(1, includeCount('aaa', 'aa'));
        checkEqual(2, includeCount('aaaa', 'aa'));
      });
    };

    test_matchFormat();
    test_replaceAll();
    test_replaceAllRepeat();
    test_replaceAllArray();
    test_indexOf_standard();
    test_indexOfFirst();
    test_lastIndexOf_standard();
    test_indexOfLast();
    test_indexOfAnyFirst();
    test_indexOfAnyLast();
    test_isFirst();
    test_isLast();
    test_isBothEnds();
    test_includeFirst();
    test_includeLast();
    test_includeBothEnds();
    test_excludeFirst();
    test_excludeLast();
    test_excludeBothEnds();
    test_trimFirst();
    test_trimLast();
    test_trimBothEnds();
    test_substring_stardard();
    test_substr_stardard();
    test_subIndex();
    test_subLength();
    test_subFirst();
    test_subLast();
    test_deleteIndex();
    test_deleteLength();
    test_deleteFirst();
    test_deleteLast();
    test_insert();
    test_add();
    test_subFirstDelimFirst();
    test_subFirstDelimLast();
    test_subLastDelimFirst();
    test_subLastDelimLast();
    test_tagInnerFirst();
    test_tagOuterFirst();
    test_tagInnerLast();
    test_tagOuterLast();
    test_split();
    test_splitCommaItems();
    test_splitDotItems();
    test_paddingFirst();
    test_paddingLast();
    test_includeCount();
  });
};

exports.test_execute_string = test_execute_string;
var _default = {
  test_execute_string: test_execute_string
};
exports["default"] = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_object = void 0;

/* eslint-disable space-in-parens */

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_object = function test_execute_object(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      testCounter = _parts$test.testCounter;
  describe('test_execute_object', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var _parts$object = parts.object,
        copyProperty = _parts$object.copyProperty,
        inProperty = _parts$object.inProperty,
        fixProperty = _parts$object.fixProperty,
        propertyCount = _parts$object.propertyCount,
        getProperty = _parts$object.getProperty,
        setProperty = _parts$object.setProperty,
        isEmptyObjectAll = _parts$object.isEmptyObjectAll,
        isObjectParameter = _parts$object.isObjectParameter,
        objectEntries = _parts$object.objectEntries,
        objectFromEntries = _parts$object.objectFromEntries,
        objectKeys = _parts$object.objectKeys,
        objectValues = _parts$object.objectValues,
        has = _parts$object.has,
        hasOwn = _parts$object.hasOwn,
        hasPrototype = _parts$object.hasPrototype,
        propertyList = _parts$object.propertyList;

    var test_has = function test_has() {
      it('test_has', function () {
        var object1 = {
          a: '1'
        };
        checkEqual(true, has(object1, 'a'));
        checkEqual(true, has(object1, 'a', true));
        checkEqual(true, hasOwn(object1, 'a'));
        checkEqual(false, hasPrototype(object1, 'a'));
        checkEqual(false, has(object1, 'b'));
        checkEqual(false, has(object1, 'b', true));
        checkEqual(false, hasOwn(object1, 'b'));
        checkEqual(false, hasPrototype(object1, 'b'));
        checkEqual(true, has(object1, 'constructor'));
        checkEqual(false, has(object1, 'constructor', true));
        checkEqual(false, hasOwn(object1, 'constructor'));
        checkEqual(true, hasPrototype(object1, 'constructor')); // object parameter

        checkEqual(true, has({
          object: object1,
          propertyName: 'constructor'
        }));
        checkEqual(false, has({
          object: object1,
          propertyName: 'constructor',
          hasOwn: true
        }));
        checkEqual(true, has(object1, {
          propertyName: 'constructor'
        }));
        checkEqual(false, has(object1, {
          propertyName: 'constructor',
          hasOwn: true
        }));
        checkEqual(true, has(object1, 'constructor', {
          hasOwn: false
        }));
        checkEqual(false, has(object1, 'constructor', {
          hasOwn: true
        }));
        checkEqual(false, hasOwn({
          object: object1,
          propertyName: 'constructor'
        }));
        checkEqual(false, hasOwn(object1, {
          propertyName: 'constructor'
        }));
        checkEqual(true, hasPrototype({
          object: object1,
          propertyName: 'constructor'
        }));
        checkEqual(true, hasPrototype(object1, {
          propertyName: 'constructor'
        }));
      });
    };

    var test_copyProperty = function test_copyProperty() {
      it('test_copyProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2',
          c: '3'
        };
        var destObject = {};
        copyProperty(sourceObject, 'a', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,b', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(true, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a,c,', destObject);
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(true, 'c' in destObject); // Object Named Parameter

        var destObject = {};
        copyProperty({
          fromObject: sourceObject,
          propertyNames: 'a',
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, {
          propertyNames: 'a',
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = {};
        copyProperty(sourceObject, 'a', {
          toObject: destObject
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = copyProperty({
          fromObject: sourceObject,
          propertyNames: 'a'
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject);
        var destObject = copyProperty(sourceObject, {
          propertyNames: 'a'
        });
        checkEqual(true, 'a' in destObject);
        checkEqual(false, 'b' in destObject);
        checkEqual(false, 'c' in destObject); // exception

        checkEqual(false, isThrown(function () {
          copyProperty({}, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty(1, 'a', {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 1, {});
        }));
        checkEqual(true, isThrown(function () {
          copyProperty({}, 'a', 1);
        }));
      });
    };

    var test_inProperty = function test_inProperty() {
      it('test_inProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,')); // other object function

        checkEqual(false, inProperty(test_inProperty, 'constructor'));
        checkEqual(true, inProperty(test_inProperty, 'constructor', false)); // other object Module

        if (parts.isModule(parts)) {
          checkEqual(true, inProperty(parts, 'VERSION'));
          checkEqual(true, inProperty(parts, 'VERSION', false));
        } // array


        checkEqual(true, inProperty(sourceObject, ['a']));
        checkEqual(true, inProperty(sourceObject, ['a', 'b']));
        checkEqual(false, inProperty(sourceObject, ['a', 'b', 'c'])); // Object Named Parameter

        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPaths: 'b,a'
        }));
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPaths: 'd'
        }));
        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPaths: ['b', 'a']
        }));
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPaths: ['d']
        })); // exception

        checkEqual(false, isThrown(function () {
          inProperty({}, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty(1, 'a');
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, 1);
        }));
        checkEqual(false, isThrown(function () {
          inProperty({}, ['a']);
        }));
        checkEqual(true, isThrown(function () {
          inProperty({}, [1]);
        })); // property exist value undefined

        var sourceObject = {
          a: '1',
          b: undefined
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        var sourceObject = {
          a: '1'
        };
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(false, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd')); // hasOwn

        function First() {
          this.a = '1';
          this.b = '2';
        }

        function Second() {
          this.c = '3';
        }

        First.prototype = new Second();
        Second.prototype.d = '4';
        var sourceObject = new First();
        checkEqual('1', sourceObject.a);
        checkEqual('2', sourceObject.b);
        checkEqual('3', sourceObject.c);
        checkEqual('4', sourceObject.d);
        checkEqual(false, inProperty(sourceObject, ''));
        checkEqual(true, inProperty(sourceObject, 'a'));
        checkEqual(true, inProperty(sourceObject, 'b'));
        checkEqual(false, inProperty(sourceObject, 'c'));
        checkEqual(false, inProperty(sourceObject, 'd'));
        checkEqual(true, inProperty(sourceObject, 'a,b'));
        checkEqual(false, inProperty(sourceObject, 'b,c'));
        checkEqual(false, inProperty(sourceObject, 'a,c'));
        checkEqual(true, inProperty(sourceObject, 'b,a'));
        checkEqual(false, inProperty(sourceObject, 'a,d'));
        testCounter();
        checkEqual(true, inProperty(sourceObject, 'a,b,'));
        checkEqual(false, inProperty(sourceObject, 'b,c,'));
        checkEqual(false, inProperty(sourceObject, 'a,c,'));
        checkEqual(true, inProperty(sourceObject, 'b,a,'));
        checkEqual(false, inProperty(sourceObject, 'a,d,'));
        checkEqual(true, inProperty(sourceObject, 'a', false));
        checkEqual(true, inProperty(sourceObject, 'b', false));
        checkEqual(true, inProperty(sourceObject, 'c', false));
        checkEqual(true, inProperty(sourceObject, 'd', false));
        checkEqual(true, inProperty(sourceObject, 'a,b', false));
        checkEqual(true, inProperty(sourceObject, 'b,c', false));
        checkEqual(true, inProperty(sourceObject, 'a,c', false));
        checkEqual(true, inProperty(sourceObject, 'b,a', false));
        checkEqual(true, inProperty(sourceObject, 'a,d', false));
        checkEqual(true, inProperty(sourceObject, 'a,b,', false));
        checkEqual(true, inProperty(sourceObject, 'b,c,', false));
        checkEqual(true, inProperty(sourceObject, 'a,c,', false));
        checkEqual(true, inProperty(sourceObject, 'b,a,', false));
        checkEqual(true, inProperty(sourceObject, 'a,d,', false)); // property path

        var sourceObject2 = {
          a: '1',
          b: '2',
          c: {
            d: {
              e: 'E'
            }
          }
        };
        checkEqual(true, inProperty(sourceObject2, 'a'));
        checkEqual(true, inProperty(sourceObject2, 'a,b'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c.d'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c.d.e'));
        checkEqual(false, inProperty(sourceObject2, 'a,b,c.d.f'));
        checkEqual(true, isThrown(function () {
          return inProperty(sourceObject2, 'a,b,c.d.');
        }));
        checkEqual(true, isThrown(function () {
          return inProperty(sourceObject2, 'a,b,c.d..e');
        }));
        checkEqual(false, inProperty(sourceObject2, 'a,b,.d'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,'));
        checkEqual(true, inProperty(sourceObject2, 'a,b,c.d.e,')); // object parameter

        testCounter();
        checkEqual(false, inProperty({
          object: sourceObject,
          propertyPaths: 'b,c'
        }));
        checkEqual(true, inProperty({
          object: sourceObject,
          propertyPaths: 'b,c',
          hasOwn: false
        }));
        checkEqual(true, inProperty(sourceObject, {
          propertyPaths: 'b,c',
          hasOwn: false
        }));
        checkEqual(true, inProperty(sourceObject, 'b,c', {
          hasOwn: false
        }));
      });
    };

    var test_fixProperty = function test_fixProperty() {
      it('test_fixProperty', function () {
        var sourceObject = {
          a: '1',
          b: '2'
        };
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'd'));
        checkEqual(true, fixProperty(sourceObject, 'a,b'));
        checkEqual(false, fixProperty(sourceObject, 'b,c'));
        checkEqual(false, fixProperty(sourceObject, 'a,c'));
        checkEqual(true, fixProperty(sourceObject, 'b,a'));
        checkEqual(false, fixProperty(sourceObject, 'a,d'));
        checkEqual(true, fixProperty(sourceObject, 'a,b,'));
        checkEqual(false, fixProperty(sourceObject, 'b,c,'));
        checkEqual(false, fixProperty(sourceObject, 'a,c,'));
        checkEqual(true, fixProperty(sourceObject, 'b,a,'));
        checkEqual(false, fixProperty(sourceObject, 'a,d,')); // other object function

        checkEqual(false, fixProperty(test_fixProperty, 'constructor')); // array

        checkEqual(false, fixProperty(sourceObject, ['a']));
        checkEqual(true, fixProperty(sourceObject, ['a', 'b']));
        checkEqual(false, fixProperty(sourceObject, ['a', 'b', 'c'])); // Object Named Parameter

        checkEqual(true, fixProperty({
          object: sourceObject,
          propertyNames: 'b,a'
        }));
        checkEqual(false, fixProperty({
          object: sourceObject,
          propertyNames: 'd'
        }));
        checkEqual(true, fixProperty({
          object: sourceObject,
          propertyNames: ['b', 'a']
        }));
        checkEqual(false, fixProperty({
          object: sourceObject,
          propertyNames: ['d']
        })); // exception

        checkEqual(false, isThrown(function () {
          fixProperty({}, 'a');
        }));
        checkEqual(true, isThrown(function () {
          fixProperty(1, 'a');
        }));
        checkEqual(true, isThrown(function () {
          fixProperty({}, 1);
        }));
        checkEqual(false, isThrown(function () {
          fixProperty({}, ['a']);
        }));
        checkEqual(true, isThrown(function () {
          fixProperty({}, [1]);
        })); // property exist value undefined

        var sourceObject = {
          a: '1',
          b: undefined
        };
        testCounter();
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(true, fixProperty(sourceObject, 'a,b'));
        var sourceObject = {
          a: '1'
        };
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(true, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'a,b')); // hasOwn

        function First() {
          this.a = '1';
          this.b = '2';
        }

        function Second() {
          this.c = '3';
        }

        First.prototype = new Second();
        Second.prototype.d = '4';
        var sourceObject = new First();
        testCounter();
        checkEqual('1', sourceObject.a);
        checkEqual('2', sourceObject.b);
        checkEqual('3', sourceObject.c);
        checkEqual('4', sourceObject.d);
        checkEqual(false, fixProperty(sourceObject, ''));
        checkEqual(false, fixProperty(sourceObject, 'a'));
        checkEqual(false, fixProperty(sourceObject, 'b'));
        checkEqual(false, fixProperty(sourceObject, 'c'));
        checkEqual(false, fixProperty(sourceObject, 'd'));
        checkEqual(true, fixProperty(sourceObject, 'a,b'));
        checkEqual(false, fixProperty(sourceObject, 'b,c'));
        checkEqual(false, fixProperty(sourceObject, 'a,c'));
        checkEqual(true, fixProperty(sourceObject, 'b,a'));
        checkEqual(false, fixProperty(sourceObject, 'a,d'));
        testCounter();
        checkEqual(true, fixProperty(sourceObject, 'a,b,'));
        checkEqual(false, fixProperty(sourceObject, 'b,c,'));
        checkEqual(false, fixProperty(sourceObject, 'a,c,'));
        checkEqual(true, fixProperty(sourceObject, 'b,a,'));
        checkEqual(false, fixProperty(sourceObject, 'a,d,')); // property path

        var sourceObject2 = {
          a: '1',
          b: '2',
          c: {
            d: {
              e: 'E'
            }
          }
        };
        checkEqual(false, fixProperty(sourceObject2, 'a'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b'));
        checkEqual(true, fixProperty(sourceObject2, 'a,b,c'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.e'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.f'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d..e'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,.d'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,'));
        checkEqual(true, fixProperty(sourceObject2, 'a,b,c,'));
        checkEqual(false, fixProperty(sourceObject2, 'a,b,c.d.e,')); // object parameter

        testCounter();
        checkEqual(false, fixProperty({
          object: sourceObject,
          propertyNames: 'b,c'
        }));
        checkEqual(true, fixProperty({
          object: sourceObject,
          propertyNames: 'a,b'
        }));
        checkEqual(true, fixProperty(sourceObject, {
          propertyNames: 'a,b,'
        }));
      });
    };

    var test_propertyCount = function test_propertyCount() {
      it('test_propertyCount', function () {
        var object1 = {
          a: 1,
          b: 2,
          c: 3
        };

        function Object2() {
          this.d = 'red';
        }

        Object2.prototype = object1;
        var object2 = new Object2();
        checkEqual(3, propertyCount(object1));
        checkEqual(3, propertyCount(object1, false));
        checkEqual(1, propertyCount(object2));
        checkEqual(4, propertyCount(object2, false));
        checkEqual(0, propertyCount({}));
        checkEqual(0, propertyCount({}, false)); // other object function

        checkEqual(0, propertyCount(test_propertyCount));

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual(0, propertyCount(test_propertyCount, false));
        } else {
          checkEqual(1, propertyCount(test_propertyCount, false));
        } // other object Module


        if (parts.isModule(parts)) {
          checkEqual(true, 0 !== propertyCount(parts));
          checkEqual(true, 0 !== propertyCount(parts, false));
        } // exception


        checkEqual(false, isThrown(function () {
          propertyCount({});
        }));
        checkEqual(false, isThrown(function () {
          propertyCount([]);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount(10);
        }));
        checkEqual(true, isThrown(function () {
          propertyCount('abc');
        })); // object parameter

        checkEqual(1, propertyCount({
          object: object2
        }));
        checkEqual(4, propertyCount({
          object: object2,
          hasOwn: false
        }));
        checkEqual(4, propertyCount(object2, {
          hasOwn: false
        }));
      });
    };

    var test_getProperty = function test_getProperty() {
      it('test_getProperty', function () {
        var testObj1 = {
          a: {
            b: {
              c: false
            }
          }
        };
        checkEqual(false, getProperty(testObj1, 'a').b.c);
        checkEqual(false, getProperty(testObj1, 'a.b').c);
        checkEqual(false, getProperty(testObj1, 'a.b.c'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.c.d'));
        checkEqual(undefined, getProperty(testObj1, 'a.b.b'));
        checkEqual(undefined, getProperty(testObj1, ''));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, '.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, '..');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, 'a.b.c.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj1, 'a.');
        }));
        checkEqual(false, getProperty(testObj1, '.a').b.c);
        checkEqual(undefined, getProperty(testObj1, 'a.c'));
        checkEqual(undefined, getProperty(testObj1, 'b'));
        checkEqual(undefined, getProperty(testObj1, 'b.c'));
        var testObj2 = {
          a: {
            b: {
              c: undefined
            }
          }
        };
        checkEqual(undefined, getProperty(testObj2, 'a').b.c);
        checkEqual(undefined, getProperty(testObj2, 'a.b').c);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c'));
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d'));
        checkEqual(undefined, getProperty(testObj2, 'a.b.b'));
        checkEqual(undefined, getProperty(testObj2, ''));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, '.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, '..');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, 'a.b.c.');
        }));
        checkEqual(true, isThrown(function () {
          return getProperty(testObj2, 'a.');
        }));
        checkEqual(undefined, getProperty(testObj2, '.a').b.c);
        checkEqual(undefined, getProperty(testObj2, 'a.c'));
        checkEqual(undefined, getProperty(testObj2, 'b'));
        checkEqual(undefined, getProperty(testObj2, 'b.c'));
        /* eslint-disable comma-spacing */

        checkEqual(undefined, getProperty(testObj2, 'a', true, false).b.c);
        checkEqual(undefined, getProperty(testObj2, 'a.b', true, false).c);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c', true, false));
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d', true, false));
        checkEqual(undefined, getProperty(testObj2, 'a.b.b', true, false));
        checkEqual({
          b: {
            c: undefined
          }
        }, getProperty(testObj2, 'a', true, true).value);
        checkEqual(undefined, getProperty(testObj2, 'a.b', true, true).value.c);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c', true, true).value);
        checkEqual(undefined, getProperty(testObj2, 'a.b.c.d', true, true).value);
        checkEqual(undefined, getProperty(testObj2, 'a.b.b', true, true).value);
        testCounter();
        checkEqual(true, getProperty(testObj2, 'a', true, true).exist);
        checkEqual(true, getProperty(testObj2, 'a.b', true, true).exist);
        checkEqual(true, getProperty(testObj2, 'a.b.c', true, true).exist);
        checkEqual(false, getProperty(testObj2, 'a.b.c.d', true, true).exist);
        checkEqual(false, getProperty(testObj2, 'a.b.b', true, true).exist);
        /* eslint-enable comma-spacing */
        // include array

        var testObj3 = {
          a: [{
            b: 'B'
          }, {
            c: 'C'
          }]
        };
        checkEqual([{
          b: 'B'
        }, {
          c: 'C'
        }], getProperty(testObj3, 'a'));
        checkEqual({
          b: 'B'
        }, getProperty(testObj3, 'a.0'));
        checkEqual({
          c: 'C'
        }, getProperty(testObj3, 'a.1'));
        checkEqual('B', getProperty(testObj3, 'a.0.b'));
        checkEqual('C', getProperty(testObj3, 'a.1.c')); // same test include array

        var testObj3 = {
          a: {
            0: {
              b: 'B'
            },
            1: {
              c: 'C'
            }
          }
        };
        checkEqual({
          0: {
            b: 'B'
          },
          1: {
            c: 'C'
          }
        }, getProperty(testObj3, 'a'));
        checkEqual({
          b: 'B'
        }, getProperty(testObj3, 'a.0'));
        checkEqual({
          c: 'C'
        }, getProperty(testObj3, 'a.1'));
        checkEqual('B', getProperty(testObj3, 'a.0.b'));
        checkEqual('C', getProperty(testObj3, 'a.1.c')); // object parameter

        var object1 = {
          a: {
            b: {
              c: false
            }
          }
        };

        function Object2() {
          this.d = true;
        }

        Object2.prototype = object1;
        var object2 = new Object2();
        checkEqual(undefined, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: true
        }));
        checkEqual(false, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: false
        }));
        checkEqual(false, getProperty(object2, {
          propertyPath: 'a.b.c',
          hasOwn: false
        }));
        checkEqual(false, getProperty(object2, 'a.b.c', {
          hasOwn: false
        }));
        checkEqual({
          exist: false
        }, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: true,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          hasOwn: false,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty(object2, {
          propertyPath: 'a.b.c',
          hasOwn: false,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty(object2, 'a.b.c', {
          hasOwn: false,
          detail: true
        }));
        checkEqual({
          exist: true,
          value: false
        }, getProperty(object2, 'a.b.c', false, {
          detail: true
        }));
        checkEqual({
          exist: false
        }, getProperty({
          object: object2,
          propertyPath: 'a.b.c',
          detail: true
        }));
        checkEqual({
          exist: false
        }, getProperty(object2, {
          propertyPath: 'a.b.c',
          detail: true
        }));
        checkEqual({
          exist: false
        }, getProperty(object2, 'a.b.c', {
          detail: true
        }));
      });
    };

    var test_setProperty = function test_setProperty() {
      it('test_setProperty', function () {
        var testObj1 = {};
        setProperty(testObj1, 'a.b', true);
        checkEqual(true, testObj1.a.b);
        setProperty(testObj1, 'a', true);
        checkEqual(true, testObj1.a);
        setProperty(testObj1, '.a', 'A');
        checkEqual('A', testObj1.a);
        setProperty(testObj1, 'a.b.c', true);
        checkEqual(true, testObj1.a.b.c);
        setProperty(testObj1, 'a.c', true);
        checkEqual(true, testObj1.a.c);
        setProperty(testObj1, 'b', true);
        checkEqual(true, testObj1.b);
        setProperty(testObj1, 'b.c', true);
        checkEqual(true, testObj1.b.c);
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, '', true);
        }));
        checkEqual(true, isThrown(function () {
          return setProperty(testObj1, 'a.', true);
        }));
        checkEqual(false, isThrown(function () {
          return setProperty(testObj1, '.a', true);
        }));
        checkEqual(false, isThrown(function () {
          return setProperty(testObj1, 'a', true);
        }));
        var testObj1 = {
          a: ['abc', {
            b: 'b'
          }]
        };
        checkEqual('abc', testObj1.a[0]);
        setProperty(testObj1, 'a.0', 'def');
        checkEqual('def', testObj1.a[0]);
        checkEqual('b', testObj1.a[1].b);
        setProperty(testObj1, 'a.1.b', 'c');
        checkEqual('c', testObj1.a[1].b); // array

        var array1 = [];
        setProperty(array1, '1.a', 'A');
        checkEqual([, {
          a: 'A'
        }], array1);
        checkEqual([undefined, {
          a: 'A'
        }], array1);
        var array1 = [];
        setProperty(array1, 'a.1', 'one');
        var array2 = [];
        array2.a = {
          '1': 'one'
        };
        checkEqual(array2, array1);
        var array1 = [];
        array1.a = [];
        setProperty(array1, 'a.1', 'one');
        var array2 = [];
        array2.a = [, 'one'];
        checkEqual(array2, array1);
      });
    };

    var test_isObjectParameter = function test_isObjectParameter() {
      it('test_isObjectParameter', function () {
        var testFunction01 = function testFunction01(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a = a;
            a = _a.a;
            b = _a.b;
            var _a$c = _a.c;
            c = _a$c === void 0 ? '' : _a$c;
            var _a$d = _a.d;
            d = _a$d === void 0 ? '' : _a$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction01('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction01('A', 'B', 'C'));
        checkEqual('AB', testFunction01('A', 'B'));
        checkEqual('ABCD', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction01({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction01({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction01({
          a: 'A',
          b: 'B'
        }));

        var testFunction02 = function testFunction02(a, b) {
          var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

          if (isObjectParameter(a, 'a, b', 'c, d')) {
            var _a2 = a;
            a = _a2.a;
            b = _a2.b;
            var _a2$c = _a2.c;
            c = _a2$c === void 0 ? '' : _a2$c;
            var _a2$d = _a2.d;
            d = _a2$d === void 0 ? '' : _a2$d;
          } else if (isObjectParameter(b, 'b', 'c, d')) {
            var _b = b;
            b = _b.b;
            var _b$c = _b.c;
            c = _b$c === void 0 ? '' : _b$c;
            var _b$d = _b.d;
            d = _b$d === void 0 ? '' : _b$d;
          } else if (isObjectParameter(c, '', 'c, d', 1)) {
            var _c = c;
            var _c$c = _c.c;
            c = _c$c === void 0 ? '' : _c$c;
            var _c$d = _c.d;
            d = _c$d === void 0 ? '' : _c$d;
          } else if (isObjectParameter(d, '', 'd', 1)) {
            var _d = d;
            var _d$d = _d.d;
            d = _d$d === void 0 ? '' : _d$d;
          }

          return a + b + c + d;
        };

        checkEqual('ABCD', testFunction02('A', 'B', 'C', 'D'));
        checkEqual('ABC', testFunction02('A', 'B', 'C'));
        checkEqual('AB', testFunction02('A', 'B')); // object parameter a

        checkEqual('ABCD', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02({
          a: 'A',
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02({
          a: 'A',
          b: 'B'
        })); // object parameter b

        checkEqual('ABCD', testFunction02('A', {
          b: 'B',
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', {
          b: 'B',
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', {
          b: 'B',
          d: 'D'
        }));
        checkEqual('AB', testFunction02('A', {
          b: 'B'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('ABC', testFunction02('A', 'B', {
          c: 'C'
        }));
        checkEqual('ABD', testFunction02('A', 'B', {
          d: 'D'
        })); // object parameter c

        checkEqual('ABCD', testFunction02('A', 'B', 'C', {
          d: 'D'
        })); // miss patern

        checkEqual('[object Object]undefined', testFunction02({
          a: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'A'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          c: 'C'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          b: 'B',
          d: 'D'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          c: 'C',
          d: 'D',
          e: 'E'
        }));
        checkEqual('[object Object]undefined', testFunction02({
          a: 'A',
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {}));
        checkEqual('A[object Object]', testFunction02('A', {
          b: 'B',
          e: 'E'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          a: 'A',
          b: 'B'
        }));
        checkEqual('A[object Object]', testFunction02('A', {
          c: 'C',
          d: 'D'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {}));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          a: 'A'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          b: 'B'
        }));
        checkEqual('AB[object Object]', testFunction02('A', 'B', {
          e: 'D'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          c: 'C'
        }));
        checkEqual('ABC[object Object]', testFunction02('A', 'B', 'C', {
          e: 'E'
        }));
      });
    };

    var test_ObjectEntries_standard = function test_ObjectEntries_standard() {
      it('test_ObjectEntries_standard', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        checkEqual([['a', '1'], ['b', '2'], ['c', '3']], Object.entries({
          a: '1',
          b: '2',
          c: '3'
        }));
        checkEqual([['0', 'a'], ['1', 'b'], ['2', 'c']], Object.entries(['a', 'b', 'c']));
      });
    };

    var test_objectEntries = function test_objectEntries() {
      it('test_objectEntries', function () {
        checkEqual([['a', '1'], ['b', '2'], ['c', '3']], objectEntries({
          a: '1',
          b: '2',
          c: '3'
        })); // array ok

        checkEqual([['0', 'a'], ['1', 'b'], ['2', 'c']], objectEntries(['a', 'b', 'c'])); // exception

        checkEqual(true, isThrown(function () {
          return objectEntries('ABC');
        }));
      });
    };

    var test_objectFromEntries = function test_objectFromEntries() {
      it('test_objectFromEntries', function () {
        checkEqual({
          a: '1',
          b: '2',
          c: '3'
        }, objectFromEntries([['a', '1'], ['b', '2'], ['c', '3']]));
        checkEqual({}, objectFromEntries([]));
        checkEqual({
          '0': 'a',
          '1': 'b',
          '2': 'c'
        }, objectFromEntries([['0', 'a'], ['1', 'b'], ['2', 'c']])); // exception

        checkEqual(true, isThrown(function () {
          return objectFromEntries('ABC');
        }));
        checkEqual(false, isThrown(function () {
          return objectFromEntries([]);
        }));
        checkEqual(false, isThrown(function () {
          return objectFromEntries([['a', 1]]);
        }));
        checkEqual(true, isThrown(function () {
          return objectFromEntries([['a', 1], []]);
        }));
        checkEqual(true, isThrown(function () {
          return objectFromEntries([['a', 1], ['b']]);
        }));
        checkEqual(false, isThrown(function () {
          return objectFromEntries([['a', 1], ['b', 2]]);
        }));
        checkEqual(true, isThrown(function () {
          return objectFromEntries([['a', 1], ['b', 2, 3]]);
        }));
      });
    };

    var test_objectKeys = function test_objectKeys() {
      it('test_objectKeys', function () {
        var array1 = ['a', 'b', 'c'];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, objectKeys(object1)); // only object type

        checkEqual(true, isThrown(function () {
          return objectKeys(array1);
        })); // object parameter

        checkEqual(array1, objectKeys({
          object: object1
        }));
      });
    };

    var test_objectValues = function test_objectValues() {
      it('test_objectValues', function () {
        var array1 = ['1', '2', '3'];
        var object1 = {
          a: '1',
          b: '2',
          c: '3'
        };
        checkEqual(array1, objectValues(object1)); // only object type

        checkEqual(true, isThrown(function () {
          return objectValues(array1);
        })); // object parameter

        checkEqual(array1, objectValues({
          object: object1
        }));
      });
    };

    var test_propertyList = function test_propertyList() {
      it('test_propertyList', function () {
        // checkEqual('a\n b\n c', parts.string.trimBothEnds('\n a\n b\n c\n  ', ['\n', ' ']));
        // checkEqual('a\nb\nc', 'a\n b\n c'.split('\n').map(v => parts.string.trimFirst(v, [' '])).join('\n'));
        var object1 = {
          a: 'A',
          b: {
            b1: 'B1',
            b2: 'B2'
          },
          c: {
            c1: {
              c11: 'C11'
            },
            c2: 'C2'
          },
          d: 'D'
        };
        var testPattern = parts.string.trimBothEnds("\n          .a:[object String]:string\n          .b.b1:[object String]:string\n          .b.b2:[object String]:string\n          .c.c1.c11:[object String]:string\n          .c.c2:[object String]:string\n          .d:[object String]:string\n        ", ['\n', ' ']); // checkEqual(6, testPattern.split('\n').length);

        checkEqual(parts.array.map(testPattern.split('\n'), function (v) {
          return parts.string.trimFirst(v, [' ']);
        }).join('\n') + '\n', propertyList(object1));
        checkEqual(false, parts.isModule(object1));
      });
    };

    test_has();
    test_copyProperty();
    test_inProperty();
    test_fixProperty();
    test_propertyCount();
    test_getProperty();
    test_setProperty();
    test_isObjectParameter();
    test_ObjectEntries_standard();
    test_objectEntries();
    test_objectFromEntries();
    test_objectKeys();
    test_objectValues();
    test_propertyList();
  });
};

exports.test_execute_object = test_execute_object;
var _default = {
  test_execute_object: test_execute_object
};
exports["default"] = _default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_array = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable max-len */

/* eslint-disable no-var */

/* eslint-disable comma-spacing */

/* eslint-disable comma-dangle */
var test_execute_array = function test_execute_array(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      expect = _parts$test.expect;
  describe('test_execute_array', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        checkCompare = _parts$test2.checkCompare,
        isThrown = _parts$test2.isThrown,
        isThrownException = _parts$test2.isThrownException,
        testCounter = _parts$test2.testCounter;
    var isLowerCase = parts.isLowerCase,
        isUpperCase = parts.isUpperCase,
        array = parts.array;
    var _parts$array = parts.array,
        NumberArray = _parts$array.NumberArray,
        IntegerArray = _parts$array.IntegerArray,
        isFirst = _parts$array.isFirst,
        isLast = _parts$array.isLast,
        isBothEnds = _parts$array.isBothEnds,
        subIndex = _parts$array.subIndex,
        subLength = _parts$array.subLength,
        subFirst = _parts$array.subFirst,
        subLast = _parts$array.subLast,
        arrayEntries = _parts$array.arrayEntries,
        SortFunc = _parts$array.SortFunc;
    var _parts$array$operatio = parts.array.operation,
        insert = _parts$array$operatio.insert,
        add = _parts$array$operatio.add,
        deleteLength = _parts$array$operatio.deleteLength,
        deleteIndex = _parts$array$operatio.deleteIndex,
        deleteFirst = _parts$array$operatio.deleteFirst,
        deleteLast = _parts$array$operatio.deleteLast,
        includeFirst = _parts$array$operatio.includeFirst,
        includeLast = _parts$array$operatio.includeLast,
        includeBothEnds = _parts$array$operatio.includeBothEnds,
        excludeFirst = _parts$array$operatio.excludeFirst,
        excludeLast = _parts$array$operatio.excludeLast,
        excludeBothEnds = _parts$array$operatio.excludeBothEnds,
        trimFirst = _parts$array$operatio.trimFirst,
        trimLast = _parts$array$operatio.trimLast,
        trimBothEnds = _parts$array$operatio.trimBothEnds,
        popFirst = _parts$array$operatio.popFirst,
        popLast = _parts$array$operatio.popLast,
        popArrayFirst = _parts$array$operatio.popArrayFirst,
        popArrayLast = _parts$array$operatio.popArrayLast,
        pushFirst = _parts$array$operatio.pushFirst,
        pushLast = _parts$array$operatio.pushLast,
        remainFirst = _parts$array$operatio.remainFirst,
        remainLast = _parts$array$operatio.remainLast;
    var _parts$number = parts.number,
        isEven = _parts$number.isEven,
        isOdd = _parts$number.isOdd;
    var equal = parts.compare.equal;
    var _parts$type = parts.type,
        isUndefined = _parts$type.isUndefined,
        isNull = _parts$type.isNull;

    var test_array_NumberArray = function test_array_NumberArray() {
      it('test_array_NumberArray', function () {
        checkEqual([0, 1, 2], NumberArray(3));
        checkEqual([1, 2, 3], NumberArray(1, 3));
        checkEqual([0, 3, 6, 9], NumberArray(0, 10, 3));
        checkEqual([0, 3, 6, 9], NumberArray(0, 11, 3));
        checkEqual([0, 3, 6, 9, 12], NumberArray(0, 12, 3));
        checkEqual([5, 7, 9], NumberArray(5, 10, 2));
        checkEqual([-3, -2, -1, 0], NumberArray(-3, 0));
        checkEqual([-5, -3, -1], NumberArray(-5, 0, 2));
        checkEqual([-5, -3, -1], NumberArray(-5, -1, 2));
        checkEqual([-5, -3], NumberArray(-5, -2, 2));
        checkEqual([0, 0.1, 0.2, 0.30000000000000004, 0.4], NumberArray(0, 0.4, 0.1));
        checkEqual(true, isThrown(function () {
          return NumberArray(0, 10, 0);
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(0, 10, -0.1);
        }));
        checkEqual([3, 2, 1], NumberArray(3, 1));
        checkEqual([10, 7, 4, 1], NumberArray(10, 0, -3));
        checkEqual([10, 7, 4, 1], NumberArray(10, 1, -3));
        checkEqual([10, 7, 4], NumberArray(10, 2, -3));
        checkEqual([10, 8, 6], NumberArray(10, 5, -2));
        checkEqual([0, -1, -2, -3], NumberArray(0, -3));
        checkEqual([0, -2, -4], NumberArray(0, -5, -2));
        checkEqual([0, -2, -4], NumberArray(0, -4, -2));
        checkEqual([0, -2], NumberArray(0, -3, -2));
        checkEqual([0.3, 0.19999999999999998, 0.09999999999999998], NumberArray(0.3, 0, -0.1));
        checkEqual(true, isThrown(function () {
          return NumberArray(0.3, 0, 0);
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(0.3, 0, 0.1);
        })); // new

        checkEqual([0, 1, 2], new NumberArray(3));
        checkEqual([1, 2, 3], new NumberArray(1, 3)); // object parameter

        checkEqual([0, 1, 2], NumberArray({
          count: 3
        }));
        checkEqual([1, 2, 3], NumberArray({
          start: 1,
          end: 3
        }));
        checkEqual([0, 3, 6, 9], NumberArray({
          start: 0,
          end: 10,
          increment: 3
        }));
        checkEqual([7, 8, 9, 10], NumberArray(7, {
          end: 10
        }));
        checkEqual([7, 9], NumberArray(7, {
          end: 10,
          increment: 2
        }));
        checkEqual([7, 9], NumberArray(7, 10, {
          increment: 2
        })); // exception

        checkEqual(true, isThrown(function () {
          return NumberArray({
            count: 3,
            start: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray({
            end: 10
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, {
            start: 0,
            end: 10,
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, {
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return NumberArray(5, 10, {});
        }));
      });
    };

    var test_array_IntegerArray = function test_array_IntegerArray() {
      it('test_array_IntegerArray', function () {
        checkEqual([0, 1, 2], IntegerArray(3));
        checkEqual([1, 2, 3], IntegerArray(1, 3));
        checkEqual([0, 3, 6, 9], IntegerArray(0, 10, 3));
        checkEqual([0, 3, 6, 9], IntegerArray(0, 11, 3));
        checkEqual([0, 3, 6, 9, 12], IntegerArray(0, 12, 3));
        checkEqual([5, 7, 9], IntegerArray(5, 10, 2));
        checkEqual([-3, -2, -1, 0], IntegerArray(-3, 0));
        checkEqual([-5, -3, -1], IntegerArray(-5, 0, 2));
        checkEqual([-5, -3, -1], IntegerArray(-5, -1, 2));
        checkEqual([-5, -3], IntegerArray(-5, -2, 2));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 0.2, 0.1);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 10, 0);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0, 10, -0.1);
        }));
        checkEqual([3, 2, 1], IntegerArray(3, 1));
        checkEqual([10, 7, 4, 1], IntegerArray(10, 0, -3));
        checkEqual([10, 7, 4, 1], IntegerArray(10, 1, -3));
        checkEqual([10, 7, 4], IntegerArray(10, 2, -3));
        checkEqual([10, 8, 6], IntegerArray(10, 5, -2));
        checkEqual([0, -1, -2, -3], IntegerArray(0, -3));
        checkEqual([0, -2, -4], IntegerArray(0, -5, -2));
        checkEqual([0, -2, -4], IntegerArray(0, -4, -2));
        checkEqual([0, -2], IntegerArray(0, -3, -2));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.2, 0, -0.1);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.3, 0, 0);
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(0.3, 0, 0.1);
        })); // new

        checkEqual([0, 1, 2], new IntegerArray(3));
        checkEqual([1, 2, 3], new IntegerArray(1, 3)); // object parameter

        checkEqual([0, 1, 2], IntegerArray({
          count: 3
        }));
        checkEqual([1, 2, 3], IntegerArray({
          start: 1,
          end: 3
        }));
        checkEqual([0, 3, 6, 9], IntegerArray({
          start: 0,
          end: 10,
          increment: 3
        }));
        checkEqual([7, 8, 9, 10], IntegerArray(7, {
          end: 10
        }));
        checkEqual([7, 9], IntegerArray(7, {
          end: 10,
          increment: 2
        }));
        checkEqual([7, 9], IntegerArray(7, 10, {
          increment: 2
        })); // exception

        checkEqual(true, isThrown(function () {
          return IntegerArray({
            count: 3,
            start: 0
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray({
            end: 10
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, {
            start: 0,
            end: 10,
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, {
            increment: 3
          });
        }));
        checkEqual(true, isThrown(function () {
          return IntegerArray(5, 10, {});
        }));
      });
    };

    var test_array_from = function test_array_from() {
      it('test_array_from', function () {
        function test() {
          // eslint-disable-next-line prefer-rest-params
          return array.from(arguments);
        }

        checkEqual([10, 20], test(10, 20));
      });
    };

    var test_min = function test_min() {
      it('test_min', function () {
        checkEqual(null, array.min([]));
        checkEqual(5, array.min([5, 10, 15, 20]));
        checkEqual(1, array.min([5, 4, 3, 2, 1]));
        checkEqual(3, array.min([5, 4, 3])); // exception

        checkEqual(false, isThrown(function () {
          array.min([1, 2, 3]);
        }));
        checkEqual(false, isThrown(function () {
          array.min([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min('1,2,3');
        }));
        checkEqual(true, isThrown(function () {
          array.min([1, 2, '3']);
        }));
        checkEqual(true, isThrown(function () {
          array.min([1,, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min([, 1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.min([1,, 3]);
        })); // func

        checkEqual(-5, array.min([5, 4, 3], function (v) {
          return -1 * v;
        }));
        checkEqual(1, array.min([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }));
        checkEqual({
          index: 0,
          element: {
            num: 1
          },
          value: 1
        }, array.min([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }, true)); // func exception

        checkEqual(true, isThrown(function () {
          array.min([{
            num: 1
          }, {
            num: '2'
          }, {
            num: 3
          }], function (v) {
            return v.num;
          }, true);
        })); // object parameter

        checkEqual(3, array.min({
          array: [5, 4, 3]
        }));
        checkEqual(-5, array.min({
          array: [5, 4, 3],
          func: function func(v) {
            return -1 * v;
          }
        }));
        checkEqual(1, array.min({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          }
        }));
        checkEqual({
          index: 0,
          element: {
            num: 1
          },
          value: 1
        }, array.min({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          },
          detail: true
        }));
      });
    };

    var test_max = function test_max() {
      it('test_max', function () {
        checkEqual(null, array.max([]));
        checkEqual(20, array.max([5, 10, 15, 20]));
        checkEqual(5, array.max([5, 4, 3, 2, 1]));
        checkEqual(3, array.max([1, 2, 3])); // exception

        checkEqual(false, isThrown(function () {
          array.max([1, 2, 3]);
        }));
        checkEqual(false, isThrown(function () {
          array.max([1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max('1,2,3');
        }));
        checkEqual(true, isThrown(function () {
          array.max([1, 2, '3']);
        }));
        checkEqual(true, isThrown(function () {
          array.max([1,, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max([, 1, 2, 3]);
        }));
        checkEqual(true, isThrown(function () {
          array.max([1,, 3]);
        })); // func

        checkEqual(-3, array.max([5, 4, 3], function (v) {
          return -1 * v;
        }));
        checkEqual(3, array.max([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }));
        checkEqual({
          index: 2,
          element: {
            num: 3
          },
          value: 3
        }, array.max([{
          num: 1
        }, {
          num: 2
        }, {
          num: 3
        }], function (v) {
          return v.num;
        }, true)); // func exception

        checkEqual(true, isThrown(function () {
          array.max([{
            num: 1
          }, {
            num: '2'
          }, {
            num: 3
          }], function (v) {
            return v.num;
          }, true);
        })); // object parameter

        checkEqual(5, array.max({
          array: [5, 4, 3]
        }));
        checkEqual(-3, array.max({
          array: [5, 4, 3],
          func: function func(v) {
            return -1 * v;
          }
        }));
        checkEqual(3, array.max({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          }
        }));
        checkEqual({
          index: 2,
          element: {
            num: 3
          },
          value: 3
        }, array.max({
          array: [{
            num: 1
          }, {
            num: 2
          }, {
            num: 3
          }],
          func: function func(v) {
            return v.num;
          },
          detail: true
        }));
      });
    };

    var test_sum = function test_sum() {
      it('test_sum', function () {
        checkEqual(0, array.sum([]));
        checkEqual(1, array.sum([1]));
        checkEqual(0, array.sum([0]));
        checkEqual(7, array.sum([3, 4]));
        checkEqual(426, array.sum([52, 52, 70, 72, 80, 100]));
        checkEqual(154, array.sum([6, 9, 9, 10, 10, 10, 100]));
      });
    };

    var test_average = function test_average() {
      it('test_average', function () {
        checkEqual(null, array.average([]));
        checkEqual(1, array.average([1]));
        checkEqual(0, array.average([0]));
        checkEqual(3.5, array.average([3, 4]));
        checkEqual(71, array.average([70, 72, 80, 52, 52, 100]));
        checkEqual(22, array.average([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    var test_median = function test_median() {
      it('test_median', function () {
        checkEqual(null, array.median([]));
        checkEqual(71, array.median([70, 72, 80, 52, 52, 100]));
        checkEqual(10, array.median([9, 9, 10, 10, 10, 100, 6]));
      });
    };

    var test_mode = function test_mode() {
      it('test_mode', function () {
        checkEqual([], array.mode([]));
        checkEqual([70], array.mode([70]));
        checkEqual([70, 52], array.mode([70, 70, 80, 52, 52, 100]));
        checkEqual([52], array.mode([70, 70, 80, 52, 52, 52, 100]));
        checkEqual([9, 10], array.mode([9, 9, 10, 10, 10, 9, 6]));
      });
    };

    var test_unique = function test_unique() {
      it('test_unique', function () {
        checkEqual([1, 2, 3, 4, 0], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0]));
        checkEqual([1, 2, 3, 4, 0], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return v;
        }));
        checkEqual([1, 2], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }));
        checkEqual([1, 2], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, true).result);
        checkEqual([false, true], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, true).index);
        checkEqual({
          result: [{
            x: 1,
            y: 1
          }, {
            x: undefined,
            y: 4
          }, {
            x: 2,
            y: 2
          }],
          index: [1, undefined, 2],
          count: [2, 2, 1]
        }, array.unique([{
          x: 1,
          y: 1
        }, {
          x: undefined,
          y: 4
        }, {
          x: 2,
          y: 2
        }, {
          x: 1,
          y: 3
        }, {
          y: 5
        }], function (v) {
          return v.x;
        }, true));
        var data = [{
          name: 'aaa',
          age: 18
        }, {
          name: 'bbb',
          age: 20
        }, {
          name: 'bbb',
          age: 21
        }, {
          name: 'ccc',
          age: 21
        }, {
          name: 'bbb',
          age: 20
        }];
        checkEqual(array.unique(data, function (d) {
          return d.name;
        }, {
          detail: true
        }), {
          index: ['aaa', 'bbb', 'ccc'],
          result: [{
            name: 'aaa',
            age: 18
          }, {
            name: 'bbb',
            age: 20
          }, {
            name: 'ccc',
            age: 21
          }],
          count: [1, 3, 1]
        });
        var result = array.unique(data, function (d) {
          return d.name;
        }, {
          detail: true
        });
        checkEqual(result.result.map(function (e, i) {
          return {
            name: e.name,
            count: result.count[i]
          };
        }), [{
          name: 'aaa',
          count: 1
        }, {
          name: 'bbb',
          count: 3
        }, {
          name: 'ccc',
          count: 1
        }]);
        checkEqual(array.unique(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        }), {
          index: ['aaa18', 'bbb20', 'bbb21', 'ccc21'],
          result: [{
            name: 'aaa',
            age: 18
          }, {
            name: 'bbb',
            age: 20
          }, {
            name: 'bbb',
            age: 21
          }, {
            name: 'ccc',
            age: 21
          }],
          count: [1, 2, 1, 1]
        });
        var result = array.unique(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        });
        checkEqual(result.result.map(function (e, i) {
          return {
            name: e.name,
            age: e.age,
            count: result.count[i]
          };
        }), [{
          name: 'aaa',
          age: 18,
          count: 1
        }, {
          name: 'bbb',
          age: 20,
          count: 2
        }, {
          name: 'bbb',
          age: 21,
          count: 1
        }, {
          name: 'ccc',
          age: 21,
          count: 1
        }]); // Object Named Parameter

        checkEqual([1, 2, 3, 4, 0], array.unique({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0]
        }));
        checkEqual([1, 2], array.unique({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
          func: function func(v) {
            return parts.isEven(v);
          }
        }));
        checkEqual([1, 2], array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          func: function func(v) {
            return parts.isEven(v);
          }
        }));
        checkEqual({
          result: [1, 2],
          index: [false, true],
          count: [3, 6]
        }, array.unique({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [1, 2],
          index: [false, true],
          count: [3, 6]
        }, array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [1, 2],
          index: [false, true],
          count: [3, 6]
        }, array.unique([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, {
          detail: true
        }));
      });
    };

    var test_single = function test_single() {
      it('test_single', function () {
        checkEqual([1, 0], array.single([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_multiple = function test_multiple() {
      it('test_multiple', function () {
        checkEqual([2, 3, 4], array.multiple([1, 2, 3, 4, 4, 4, 3, 2, 0]));
      });
    };

    var test_group = function test_group() {
      it('test_group', function () {
        checkEqual([[1], [2, 2], [3, 3], [4, 4, 4], [0]], array.group([1, 2, 3, 4, 4, 4, 3, 2, 0]));
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]], array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, true));
        var data = [{
          name: 'aaa',
          age: 18
        }, {
          name: 'bbb',
          age: 20
        }, {
          name: 'bbb',
          age: 21
        }, {
          name: 'ccc',
          age: 21
        }, {
          name: 'bbb',
          age: 20
        }];
        checkEqual(array.group(data, function (d) {
          return d.name;
        }, {
          detail: true
        }), {
          index: ['aaa', 'bbb', 'ccc'],
          result: [[{
            name: 'aaa',
            age: 18
          }], [{
            name: 'bbb',
            age: 20
          }, {
            name: 'bbb',
            age: 21
          }, {
            name: 'bbb',
            age: 20
          }], [{
            name: 'ccc',
            age: 21
          }]]
        });
        checkEqual(array.group(data, function (d) {
          return d.name;
        }, {
          detail: true
        }).result.map(function (e) {
          return {
            name: e[0].name,
            count: e.length
          };
        }), [{
          name: 'aaa',
          count: 1
        }, {
          name: 'bbb',
          count: 3
        }, {
          name: 'ccc',
          count: 1
        }]);
        checkEqual(array.group(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        }), {
          index: ['aaa18', 'bbb20', 'bbb21', 'ccc21'],
          result: [[{
            name: 'aaa',
            age: 18
          }], [{
            name: 'bbb',
            age: 20
          }, {
            name: 'bbb',
            age: 20
          }], [{
            name: 'bbb',
            age: 21
          }], [{
            name: 'ccc',
            age: 21
          }]]
        });
        checkEqual(array.group(data, function (d) {
          return d.name + d.age.toString();
        }, {
          detail: true
        }).result.map(function (e) {
          return {
            name: e[0].name,
            age: e[0].age,
            count: e.length
          };
        }), [{
          name: 'aaa',
          age: 18,
          count: 1
        }, {
          name: 'bbb',
          age: 20,
          count: 2
        }, {
          name: 'bbb',
          age: 21,
          count: 1
        }, {
          name: 'ccc',
          age: 21,
          count: 1
        }]); // Object Named Parameter

        checkEqual([[1], [2, 2], [3, 3], [4, 4, 4], [0]], array.group({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0]
        }));
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]], array.group({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
          func: function func(v) {
            return parts.isEven(v);
          }
        }));
        checkEqual([[1, 3, 3], [2, 4, 4, 4, 2, 0]], array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          func: function func(v) {
            return parts.isEven(v);
          }
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group({
          array: [1, 2, 3, 4, 4, 4, 3, 2, 0],
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          func: function func(v) {
            return parts.isEven(v);
          },
          detail: true
        }));
        checkEqual({
          result: [[1, 3, 3], [2, 4, 4, 4, 2, 0]],
          index: [false, true]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], function (v) {
          return parts.isEven(v);
        }, {
          detail: true
        }));
        checkEqual({
          result: [[1], [2, 2], [3, 3], [4, 4, 4], [0]],
          index: [1, 2, 3, 4, 0]
        }, array.group([1, 2, 3, 4, 4, 4, 3, 2, 0], {
          detail: true
        }));
      });
    };

    var test_filter = function test_filter() {
      it('test_filter', function () {
        checkEqual([0, 2, 4], array.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([0, 2, 4], array.filter([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([1, 3, 5], array.filter([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual([0, 2, 4], array.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_map = function test_map() {
      it('test_map', function () {
        checkEqual([true, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([true, false, true, false, true, false], array.map([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([false, true, false, true, false, true], array.map([0, 1, 2, 3, 4, 5], isOdd));
        checkEqual([0, 2, 4, 6, 8, 10], array.map([0, 1, 2, 3, 4, 5], function (value) {
          return value * 2;
        })); // Object Named Parameter

        checkEqual([true, false, true, false, true, false], array.map({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_count = function test_count() {
      it('test_count', function () {
        checkEqual(3, array.count([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual(3, array.count([0, 1, 2, 3, 4, 5], isEven));
        checkEqual(3, array.count([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual(3, array.count({
          array: [0, 1, 2, 3, 4, 5],
          func: isOdd
        }));
      });
    };

    var test_findIndex = function test_findIndex() {
      it('test_findIndex', function () {
        checkEqual(0, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(1, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(2, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(-1, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(3, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(0, array.findIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual(3, array.findIndex({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_findBackIndex = function test_findBackIndex() {
      it('test_findBackIndex', function () {
        checkEqual(3, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(4, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(5, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(-1, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(5, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(2, array.findBackIndex(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual(2, array.findBackIndex({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isLowerCase
        }));
      });
    };

    var test_find = function test_find() {
      it('test_find', function () {
        checkEqual('a', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual('b', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual('c', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(undefined, array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual('A', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual('a', array.find(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual('A', array.find({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_findBack = function test_findBack() {
      it('test_findBack', function () {
        checkEqual('A', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual('B', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual('C', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'c';
        }));
        checkEqual(undefined, array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual('C', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual('c', array.findBack(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isLowerCase(value);
        })); // Object Named Parameter

        checkEqual('c', array.findBack({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isLowerCase
        }));
      });
    };

    var test_some = function test_some() {
      it('test_some', function () {
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'b';
        }));
        checkEqual(false, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(true, array.some(['a', 'b', 'c', 'A', 'B', 'C'], isLowerCase));
        checkEqual(false, array.some(['A', 'B', 'C'], isLowerCase));
        checkEqual(true, array.some(['A', 'B', 'C'], function () {
          return true;
        }));
        checkEqual(false, array.some([], function () {
          return true;
        })); // Object Named Parameter

        checkEqual(true, array.some({
          array: ['a', 'b', 'c', 'A', 'B', 'C'],
          func: isUpperCase
        }));
      });
    };

    var test_all = function test_all() {
      it('test_all', function () {
        checkEqual(false, array.all(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'a';
        }));
        checkEqual(false, array.all(['a', 'b', 'c', 'A', 'B', 'C'], function (value) {
          return value.toLowerCase() === 'd';
        }));
        checkEqual(true, array.all(['A', 'B', 'C'], function (value) {
          return isUpperCase(value);
        }));
        checkEqual(false, array.all(['A', 'B', 'C'], isLowerCase));
        checkEqual(true, array.all(['a', 'b', 'c'], isLowerCase));
        checkEqual(true, array.all(['A', 'B', 'C'], function () {
          return true;
        }));
        checkEqual(false, array.all([], function () {
          return true;
        })); // Object Named Parameter

        checkEqual(true, array.all({
          array: ['A', 'B', 'C'],
          func: isUpperCase
        }));
        checkEqual(false, array.all({
          array: ['A', 'B', 'c'],
          func: isUpperCase
        }));
      });
    };

    var test_isFirst = function test_isFirst() {
      it('test_isFirst', function () {
        checkEqual(true, isFirst([1, 2, 3], [1]));
        checkEqual(true, isFirst([1, 2, 3], [1, 2]));
        checkEqual(false, isFirst([1, 2, 3], [1, 3]));
        checkEqual(false, isFirst([1, 2, 3], [2]));
        checkEqual(true, isFirst(['A', 'B', 'C'], ['A']));
        checkEqual(true, isFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['a']));
        checkEqual(false, isFirst(['A', 'B', 'C'], ['B']));
        checkEqual(true, isFirst([undefined, 1, 2], [isUndefined]));
        checkEqual(true, isFirst([undefined, 1, 2], [undefined]));
        checkEqual(false, isFirst([undefined, 1, 2], [isNull]));
        checkEqual(false, isFirst([undefined, 1, 2], [null]));
        checkEqual(false, isFirst([null, 1, 2], [isUndefined]));
        checkEqual(false, isFirst([null, 1, 2], [undefined]));
        checkEqual(true, isFirst([null, 1, 2], [isNull]));
        checkEqual(true, isFirst([null, 1, 2], [null]));
        checkEqual(true, isFirst([undefined, 1, 2], [isUndefined, 1]));
        checkEqual(true, isFirst([undefined, 1, 2], [undefined, 1]));
        checkEqual(false, isFirst([undefined, 1, 2], [isNull, 1]));
        checkEqual(false, isFirst([undefined, 1, 2], [null, 1]));
        checkEqual(false, isFirst([null, 1, 2], [isUndefined, 1]));
        checkEqual(false, isFirst([null, 1, 2], [undefined, 1]));
        checkEqual(true, isFirst([null, 1, 2], [isNull, 1]));
        checkEqual(true, isFirst([null, 1, 2], [null, 1])); // Object Named Parameter

        checkEqual(true, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(false, isFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
        checkEqual(true, isFirst(['A', 'B', 'C'], {
          valueArray: ['A']
        }));
      });
    };

    var test_isLast = function test_isLast() {
      it('test_isLast', function () {
        checkEqual(true, isLast([1, 2, 3], [3]));
        checkEqual(true, isLast([1, 2, 3], [2, 3]));
        checkEqual(false, isLast([1, 2, 3], [1, 3]));
        checkEqual(false, isLast([1, 2, 3], [2]));
        checkEqual(true, isLast(['A', 'B', 'C'], ['C']));
        checkEqual(true, isLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['A', 'C']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['c']));
        checkEqual(false, isLast(['A', 'B', 'C'], ['B']));
        checkEqual(false, isLast([1], [2, 3]));
        checkEqual(true, isLast([0, 1, undefined], [isUndefined]));
        checkEqual(true, isLast([0, 1, undefined], [undefined]));
        checkEqual(false, isLast([0, 1, undefined], [isNull]));
        checkEqual(false, isLast([0, 1, undefined], [null]));
        checkEqual(false, isLast([0, 1, null], [isUndefined]));
        checkEqual(false, isLast([0, 1, null], [undefined]));
        checkEqual(true, isLast([0, 1, null], [isNull]));
        checkEqual(true, isLast([0, 1, null], [null]));
        checkEqual(true, isLast([0, 1, undefined], [1, isUndefined]));
        checkEqual(true, isLast([0, 1, undefined], [1, undefined]));
        checkEqual(false, isLast([0, 1, undefined], [1, isNull]));
        checkEqual(false, isLast([0, 1, undefined], [1, null]));
        checkEqual(false, isLast([0, 1, null], [1, isUndefined]));
        checkEqual(false, isLast([0, 1, null], [1, undefined]));
        checkEqual(true, isLast([0, 1, null], [1, isNull]));
        checkEqual(true, isLast([0, 1, null], [1, null])); // Object Named Parameter

        checkEqual(true, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(false, isLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
        checkEqual(true, isLast(['A', 'B', 'C'], {
          valueArray: ['C']
        }));
      });
    };

    var test_isBothEnds = function test_isBothEnds() {
      it('test_isBothEnds', function () {
        checkEqual(true, isBothEnds([1, 2, 1], [1]));
        checkEqual(false, isBothEnds([1, 2, 1], [2]));
        checkEqual(true, isBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(true, isBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(false, isBothEnds(['A', 'B', 'A'], ['B']));
        checkEqual(true, isBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual(false, isBothEnds(['A', 'B', 'A', 'D'], ['A']));
        checkEqual(true, isBothEnds(['A', 'B', 'A', 'D'], ['A'], ['D']));
        checkEqual(true, isBothEnds(['{', 'A', 'B', '}'], ['{'], ['}']));
        checkEqual(true, isBothEnds(['{', '{', '}', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['A', '{', 'B', '}'], ['{'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['}'], ['}']));
        checkEqual(false, isBothEnds(['{', 'A', 'B', '}'], ['{'], ['{']));
        checkEqual(false, isBothEnds([1], [1]));
        checkEqual(true, isBothEnds([1, 1], [1])); // Object Named Parameter

        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(false, isBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(false, isBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(true, isBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_array_subIndex = function test_array_subIndex() {
      it('test_array_subIndex', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1);
        }));
        checkEqual([0], subIndex(array1, 0));
        checkEqual([1], subIndex(array1, 1));
        checkEqual([2], subIndex(array1, 2));
        checkEqual([3], subIndex(array1, 3));
        checkEqual([4], subIndex(array1, 4));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 0);
        }));
        checkEqual([0], subIndex(array1, 0, 0));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 3);
        }));
        checkEqual([0, 1, 2, 3], subIndex(array1, 0, 3));
        checkEqual([1, 2, 3], subIndex(array1, 1, 3));
        checkEqual([2, 3], subIndex(array1, 2, 3));
        checkEqual([3], subIndex(array1, 3, 3));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subIndex(array1, 6, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subIndex({
          array: ['A', 'B', 'A'],
          indexStart: 0,
          indexEnd: 1
        }));
      });
    };

    var test_array_subLength = function test_array_subLength() {
      it('test_array_subLength', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1);
        }));
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0));
        checkEqual([1, 2, 3, 4], subLength(array1, 1));
        checkEqual([2, 3, 4], subLength(array1, 2));
        checkEqual([3, 4], subLength(array1, 3));
        checkEqual([4], subLength(array1, 4));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 0);
        }));
        checkEqual([], subLength(array1, 0, 0));
        checkEqual([], subLength(array1, 1, 0));
        checkEqual([], subLength(array1, 2, 0));
        checkEqual([], subLength(array1, 3, 0));
        checkEqual([], subLength(array1, 4, 0));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 3);
        }));
        checkEqual([0, 1, 2], subLength(array1, 0, 3));
        checkEqual([1, 2, 3], subLength(array1, 1, 3));
        checkEqual([2, 3, 4], subLength(array1, 2, 3));
        checkEqual([3, 4], subLength(array1, 3, 3));
        checkEqual([4], subLength(array1, 4, 3));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 5);
        }));
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0, 5));
        checkEqual([1, 2, 3, 4], subLength(array1, 1, 5));
        checkEqual([2, 3, 4], subLength(array1, 2, 5));
        checkEqual([3, 4], subLength(array1, 3, 5));
        checkEqual([4], subLength(array1, 4, 5));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, -1, 6);
        }));
        checkEqual([0, 1, 2, 3, 4], subLength(array1, 0, 6));
        checkEqual([1, 2, 3, 4], subLength(array1, 1, 6));
        checkEqual([2, 3, 4], subLength(array1, 2, 6));
        checkEqual([3, 4], subLength(array1, 3, 6));
        checkEqual([4], subLength(array1, 4, 6));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return subLength(array1, 6, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subLength({
          array: ['A', 'B', 'A'],
          index: 0,
          length: 2
        }));
      });
    };

    var test_array_subFirst = function test_array_subFirst() {
      it('test_array_subFirst', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subFirst(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subFirst(array1, -1);
        }));
        checkEqual([], subFirst(array1, 0));
        checkEqual([0], subFirst(array1, 1));
        checkEqual([0, 1], subFirst(array1, 2));
        checkEqual([0, 1, 2], subFirst(array1, 3));
        checkEqual([0, 1, 2, 3], subFirst(array1, 4));
        checkEqual([0, 1, 2, 3, 4], subFirst(array1, 5));
        checkEqual(true, isThrown(function () {
          return subFirst(array1, 6);
        })); // Object Named Parameter

        checkEqual(['A', 'B'], subFirst({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_array_subLast = function test_array_subLast() {
      it('test_array_subLast', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual(true, isThrown(function () {
          return subLast(array1, -2);
        }));
        checkEqual(true, isThrown(function () {
          return subLast(array1, -1);
        }));
        checkEqual([], subLast(array1, 0));
        checkEqual([4], subLast(array1, 1));
        checkEqual([3, 4], subLast(array1, 2));
        checkEqual([2, 3, 4], subLast(array1, 3));
        checkEqual([1, 2, 3, 4], subLast(array1, 4));
        checkEqual([0, 1, 2, 3, 4], subLast(array1, 5));
        checkEqual(true, isThrown(function () {
          return subLast(array1, 6);
        })); // Object Named Parameter

        checkEqual(['B', 'A'], subLast({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_operation_insert = function test_operation_insert() {
      it('test_operation_insert', function () {
        checkEqual([1, 2, 3], insert([1, 2, 3], []));
        checkEqual([0, 1, 2, 3], insert([1, 2, 3], [0]));
        checkEqual([0, 1, 2, 3], insert([1, 2, 3], [0], 0));
        checkEqual([1, 0, 2, 3], insert([1, 2, 3], [0], 1));
        checkEqual([1, 2, 0, 3], insert([1, 2, 3], [0], 2));
        checkEqual([1, 2, 3, 0], insert([1, 2, 3], [0], 3));
        checkEqual([-1, 0, 1, 2, 3], insert([1, 2, 3], [-1, 0]));
        checkEqual([1, -1, 0, 2, 3], insert([1, 2, 3], [-1, 0], 1)); // exception

        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], -1);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], [0], 4);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          insert([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual([1, 2, 3, 0], insert({
          array: [1, 2, 3],
          valueArray: [0],
          index: 3
        }));
      });
    };

    var test_operation_add = function test_operation_add() {
      it('test_operation_add', function () {
        checkEqual([1, 2, 3], add([1, 2, 3], []));
        checkEqual([1, 2, 3, 0], add([1, 2, 3], [0]));
        checkEqual([0, 1, 2, 3], add([1, 2, 3], [0], -1));
        checkEqual([1, 0, 2, 3], add([1, 2, 3], [0], 0));
        checkEqual([1, 2, 0, 3], add([1, 2, 3], [0], 1));
        checkEqual([1, 2, 3, 0], add([1, 2, 3], [0], 2));
        checkEqual([1, 2, 3, -1, 0], add([1, 2, 3], [-1, 0]));
        checkEqual([1, 2, -1, 0, 3], add([1, 2, 3], [-1, 0], 1)); // exception

        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], -2);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], [0], 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          add([1, 2, 3], 0, 4);
        }, 'TypeError')); // Object Named Parameter

        checkEqual([1, 2, 3, 0], add({
          array: [1, 2, 3],
          valueArray: [0],
          index: 2
        }));
      });
    };

    var test_operation_deleteIndex = function test_operation_deleteIndex() {
      it('test_operation_deleteIndex', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1, 3, 4], deleteIndex(array1, 2));
        checkEqual([0, 1, 3, 4], array1);
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([1, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 0));
        checkEqual([0, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1, 3, 4], deleteIndex([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1, 2, 4], deleteIndex([0, 1, 2, 3, 4], 3));
        checkEqual([0, 1, 2, 3], deleteIndex([0, 1, 2, 3, 4], 4));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 0);
        }));
        checkEqual([1, 2, 3, 4], deleteIndex([0, 1, 2, 3, 4], 0, 0));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 3);
        }));
        checkEqual([4], deleteIndex([0, 1, 2, 3, 4], 0, 3));
        checkEqual([0, 4], deleteIndex([0, 1, 2, 3, 4], 1, 3));
        checkEqual([0, 1, 4], deleteIndex([0, 1, 2, 3, 4], 2, 3));
        checkEqual([0, 1, 2, 4], deleteIndex([0, 1, 2, 3, 4], 3, 3));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 0, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], -1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 0, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 1, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 3, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 4, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteIndex([0, 1, 2, 3, 4], 6, 6);
        })); // exception

        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], 1, 0);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 2);
        }));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], 0, 3);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteIndex([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          index: 1
        }));
        checkEqual([0, 2, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexStart: 1
        }));
        checkEqual([0, 3], deleteIndex({
          array: [0, 1, 2, 3],
          indexStart: 1,
          indexEnd: 2
        }));
      });
    };

    var test_operation_deleteLength = function test_operation_deleteLength() {
      it('test_operation_deleteLength', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1], deleteLength(array1, 2));
        checkEqual([0, 1], array1);
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 0);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 0, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 1, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 2, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 3, 0));
        checkEqual([0, 1, 2, 3, 4], deleteLength([0, 1, 2, 3, 4], 4, 0));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 0);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 3);
        }));
        checkEqual([3, 4], deleteLength([0, 1, 2, 3, 4], 0, 3));
        checkEqual([0, 4], deleteLength([0, 1, 2, 3, 4], 1, 3));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 3));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 3));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 3));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 3);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 5);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0, 5));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1, 5));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 5));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 5));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 5));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 5);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -2, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], -1, 6);
        }));
        checkEqual([], deleteLength([0, 1, 2, 3, 4], 0, 6));
        checkEqual([0], deleteLength([0, 1, 2, 3, 4], 1, 6));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3, 4], 2, 6));
        checkEqual([0, 1, 2], deleteLength([0, 1, 2, 3, 4], 3, 6));
        checkEqual([0, 1, 2, 3], deleteLength([0, 1, 2, 3, 4], 4, 6));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 5, 6);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLength([0, 1, 2, 3, 4], 6, 6);
        }));
        testCounter(); // exception

        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], [0], 1);
        }, 'TypeError'));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 1);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 2);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 3);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 0);
        }));
        checkEqual(false, isThrownException(function () {
          deleteLength([1, 2, 3], 0, 4);
        }));
        checkEqual(true, isThrownException(function () {
          deleteLength([1, 2, 3], -1, 2);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 3], deleteLength({
          array: [0, 1, 2, 3],
          index: 1,
          length: 2
        }));
        checkEqual([0, 3], deleteLength([0, 1, 2, 3], {
          index: 1,
          length: 2
        }));
        checkEqual([0, 3], deleteLength([0, 1, 2, 3], 1, {
          length: 2
        }));
        checkEqual([0, 1], deleteLength({
          array: [0, 1, 2, 3],
          index: 2
        }));
        checkEqual([0, 1], deleteLength([0, 1, 2, 3], {
          index: 2
        }));
      });
    };

    var test_operation_deleteFirst = function test_operation_deleteFirst() {
      it('test_operation_deleteFirst', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([2, 3, 4], deleteFirst(array1, 2));
        checkEqual([2, 3, 4], array1);
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 0));
        checkEqual([1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 1));
        checkEqual([2, 3, 4], deleteFirst([0, 1, 2, 3, 4], 2));
        checkEqual([3, 4], deleteFirst([0, 1, 2, 3, 4], 3));
        checkEqual([4], deleteFirst([0, 1, 2, 3, 4], 4));
        checkEqual([], deleteFirst([0, 1, 2, 3, 4], 5));
        checkEqual([1, 2, 3, 4], deleteFirst([0, 1, 2, 3, 4]));
        checkEqual(true, isThrown(function () {
          return deleteFirst([0, 1, 2, 3, 4], 6);
        })); // exception

        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteFirst([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteFirst([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([1, 2, 3], deleteFirst({
          array: [0, 1, 2, 3],
          length: 1
        }));
        checkEqual([1, 2, 3], deleteFirst([0, 1, 2, 3], {
          length: 1
        }));
      });
    };

    var test_operation_deleteLast = function test_operation_deleteLast() {
      it('test_operation_deleteLast', function () {
        var array1 = [0, 1, 2, 3, 4];
        checkEqual([0, 1, 2], deleteLast(array1, 2));
        checkEqual([0, 1, 2], array1);
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], -2);
        }));
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], -1);
        }));
        checkEqual([0, 1, 2, 3, 4], deleteLast([0, 1, 2, 3, 4], 0));
        checkEqual([0, 1, 2, 3], deleteLast([0, 1, 2, 3, 4], 1));
        checkEqual([0, 1, 2], deleteLast([0, 1, 2, 3, 4], 2));
        checkEqual([0, 1], deleteLast([0, 1, 2, 3, 4], 3));
        checkEqual([0], deleteLast([0, 1, 2, 3, 4], 4));
        checkEqual([], deleteLast([0, 1, 2, 3, 4], 5));
        checkEqual([0, 1, 2, 3], deleteLast([0, 1, 2, 3, 4]));
        checkEqual(true, isThrown(function () {
          return deleteLast([0, 1, 2, 3, 4], 6);
        })); // exception

        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], [0]);
        }, 'TypeError'));
        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], 4);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 3);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 2);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 1);
        }, 'RangeError'));
        checkEqual(false, isThrownException(function () {
          deleteLast([1, 2, 3], 0);
        }, 'RangeError'));
        checkEqual(true, isThrownException(function () {
          deleteLast([1, 2, 3], -1);
        }, 'RangeError')); // Object Named Parameter

        checkEqual([0, 1, 2], deleteLast({
          array: [0, 1, 2, 3],
          length: 1
        }));
        checkEqual([0, 1, 2], deleteLast([0, 1, 2, 3], {
          length: 1
        }));
      });
    };

    var test_operation_includeFirst = function test_operation_includeFirst() {
      it('test_operation_includeFirst', function () {
        checkEqual([1, 2, 3], includeFirst([1, 2, 3], [1]));
        checkEqual([2, 1, 2, 3], includeFirst([1, 2, 3], [2]));
        checkEqual([1, 2, 3], includeFirst([1, 2, 3], [1, 2]));
        checkEqual([2, 1, 1, 2, 3], includeFirst([1, 2, 3], [2, 1]));
        checkEqual(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(['a', 'B', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['a', 'B']));
        checkEqual(['B', 'A', 'A', 'B', 'C'], includeFirst(['A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['a', 'A', 'B', 'C'], includeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_includeLast = function test_operation_includeLast() {
      it('test_operation_includeLast', function () {
        checkEqual([1, 2, 3], includeLast([1, 2, 3], [3]));
        checkEqual([1, 2, 3, 2], includeLast([1, 2, 3], [2]));
        checkEqual([1, 2, 3], includeLast([1, 2, 3], [2, 3]));
        checkEqual([1, 2, 3, 3, 2], includeLast([1, 2, 3], [3, 2]));
        checkEqual(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C', 'c'], includeLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C', 'B'], includeLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C'], includeLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(['A', 'B', 'C', 'B', 'c'], includeLast(['A', 'B', 'C'], ['B', 'c']));
        checkEqual(['A', 'B', 'C', 'C', 'B'], includeLast(['A', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B', 'C'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C', 'c'], includeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_includeBothEnds = function test_operation_includeBothEnds() {
      it('test_operation_includeBothEnds', function () {
        checkEqual([1, 2, 1], includeBothEnds([1, 2, 1], [1]));
        checkEqual([1, 1, 2, 3, 1], includeBothEnds([1, 2, 3], [1]));
        checkEqual([1, 2, 1, 2], includeBothEnds([1, 2, 1, 2], [1, 2]));
        checkEqual([1, 2, 1], includeBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(['A', 'B', 'A'], includeBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['A', 'A', 'B', 'C', 'A'], includeBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'A', 'B'], includeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual(['{', '}'], includeBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual(['{', 'A', '}'], includeBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['{', 'A', '{', '}', '}'], includeBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual(['A', 'A'], includeBothEnds(['A', 'A'], ['A']));
        checkEqual(['A', 'A', 'A'], includeBothEnds(['A'], ['A']));
        checkEqual(['A', '', 'A'], includeBothEnds([''], ['A']));
        checkEqual(['A', 'A'], includeBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          includeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['a', 'A', 'B', 'A', 'a'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['A', 'B', 'A'], includeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'A', 'B', 'A', 'D', 'A'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'B', 'A', 'D'], includeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_excludeFirst = function test_operation_excludeFirst() {
      it('test_operation_excludeFirst', function () {
        checkEqual([2, 3], excludeFirst([1, 2, 3], [1]));
        checkEqual([1, 2, 3], excludeFirst([1, 2, 3], [2]));
        checkEqual([3], excludeFirst([1, 2, 3], [1, 2]));
        checkEqual([1, 2, 3], excludeFirst([1, 2, 3], [2, 1]));
        checkEqual(['B', 'C'], excludeFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['C'], excludeFirst(['A', 'B', 'C'], ['A', 'B']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['a', 'B']));
        checkEqual(['A', 'B', 'C'], excludeFirst(['A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'C'], excludeFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_excludeLast = function test_operation_excludeLast() {
      it('test_operation_excludeLast', function () {
        checkEqual([1, 2], excludeLast([1, 2, 3], [3]));
        checkEqual([1, 2, 3], excludeLast([1, 2, 3], [2]));
        checkEqual([1], excludeLast([1, 2, 3], [2, 3]));
        checkEqual([1, 2, 3], excludeLast([1, 2, 3], [3, 2]));
        checkEqual(['A', 'B'], excludeLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A'], excludeLast(['A', 'B', 'C'], ['B', 'C']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['B', 'c']));
        checkEqual(['A', 'B', 'C'], excludeLast(['A', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C'], excludeLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_excludeBothEnds = function test_operation_excludeBothEnds() {
      it('test_operation_excludeBothEnds', function () {
        checkEqual([2], excludeBothEnds([1, 2, 1], [1]));
        checkEqual([1, 2, 3], excludeBothEnds([1, 2, 3], [1]));
        checkEqual([], excludeBothEnds([1, 2, 1, 2], [1, 2]));
        checkEqual([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [5]));
        checkEqual([1, 2, 3, 4, 5], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 5]));
        checkEqual([], excludeBothEnds([1, 2, 3, 4, 5], [1, 2, 3, 4], [3, 4, 5]));
        checkEqual([], excludeBothEnds([1, 2, 1], [1, 2], [2, 1]));
        checkEqual(['B'], excludeBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['A', 'B', 'A'], excludeBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['A', 'B', 'C'], excludeBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual([], excludeBothEnds(['A', 'B', 'A', 'B'], ['A', 'B']));
        checkEqual([], excludeBothEnds(['A', 'B', 'A'], ['A', 'B'], ['B', 'A']));
        checkEqual([], excludeBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual(['A'], excludeBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['A', '{', '}'], excludeBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual([], excludeBothEnds(['A', 'A'], ['A']));
        checkEqual(['A'], excludeBothEnds(['A'], ['A']));
        checkEqual([''], excludeBothEnds([''], ['A']));
        checkEqual([], excludeBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          excludeBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['B'], excludeBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['A', 'B', 'A', 'D'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A'], excludeBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_trimFirst = function test_operation_trimFirst() {
      it('test_operation_trimFirst', function () {
        checkEqual([2, 3], trimFirst([1, 2, 3], [1]));
        checkEqual([2, 3], trimFirst([1, 1, 1, 2, 3], [1]));
        checkEqual([], trimFirst([1, 1, 1, 1, 1], [1]));
        checkEqual([1, 2, 3], trimFirst([1, 2, 3], [2]));
        checkEqual([2, 1, 2, 3], trimFirst([1, 2, 1, 2, 3], [1]));
        checkEqual([3], trimFirst([1, 2, 1, 2, 3], [1, 2]));
        checkEqual([3], trimFirst([1, 2, 1, 2, 3], [2, 1]));
        checkEqual(['B', 'C'], trimFirst(['A', 'B', 'C'], ['A']));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['a']));
        checkEqual(['A', 'B', 'C'], trimFirst(['A', 'B', 'C'], ['B']));
        checkEqual(['B', 'A', 'B', 'C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A']));
        checkEqual(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['A', 'B']));
        checkEqual(['C'], trimFirst(['A', 'B', 'A', 'B', 'C'], ['B', 'A'])); // Object Named Parameter

        checkEqual(['B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'C'], trimFirst({
          array: ['A', 'B', 'C'],
          valueArray: ['a']
        }));
      });
    };

    var test_operation_trimLast = function test_operation_trimLast() {
      it('test_operation_trimLast', function () {
        checkEqual([1, 2], trimLast([1, 2, 3], [3]));
        checkEqual([1, 2], trimLast([1, 2, 3, 3, 3], [3]));
        checkEqual([], trimLast([3, 3, 3, 3, 3], [3]));
        checkEqual([1, 2, 3], trimLast([1, 2, 3], [2]));
        checkEqual([1, 2, 3, 2], trimLast([1, 2, 3, 2, 3], [3]));
        checkEqual([1], trimLast([1, 2, 3, 2, 3], [2, 3]));
        checkEqual([1], trimLast([1, 2, 3, 2, 3], [3, 2]));
        checkEqual(['A', 'B'], trimLast(['A', 'B', 'C'], ['C']));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['c']));
        checkEqual(['A', 'B', 'C'], trimLast(['A', 'B', 'C'], ['B']));
        checkEqual(['A', 'B', 'C', 'B'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C']));
        checkEqual(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['B', 'C']));
        checkEqual(['A'], trimLast(['A', 'B', 'C', 'B', 'C'], ['C', 'B'])); // Object Named Parameter

        checkEqual(['A', 'B'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['C']
        }));
        checkEqual(['A', 'B', 'C'], trimLast({
          array: ['A', 'B', 'C'],
          valueArray: ['c']
        }));
      });
    };

    var test_operation_trimBothEnds = function test_operation_trimBothEnds() {
      it('test_operation_trimBothEnds', function () {
        checkEqual([2], trimBothEnds([1, 2, 1], [1]));
        checkEqual([2], trimBothEnds([1, 1, 2, 1, 1, 1], [1]));
        checkEqual([], trimBothEnds([1, 1, 1], [1]));
        checkEqual([2, 3], trimBothEnds([1, 2, 3], [1]));
        checkEqual([2, 3, 1, 2], trimBothEnds([1, 2, 3, 1, 2], [1]));
        checkEqual([1, 2, 3, 1], trimBothEnds([1, 2, 3, 1, 2], [2]));
        checkEqual([3], trimBothEnds([1, 2, 3, 1, 2], [1, 2]));
        checkEqual([3], trimBothEnds([1, 2, 3, 1, 2], [2, 1]));
        checkEqual(['B'], trimBothEnds(['A', 'B', 'A'], ['A']));
        checkEqual(['A', 'B', 'A'], trimBothEnds(['A', 'B', 'A'], ['a']));
        checkEqual(['B', 'C'], trimBothEnds(['A', 'B', 'C'], ['A']));
        checkEqual(['B', 'C', 'A', 'B'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A']));
        checkEqual(['A', 'B', 'C', 'A'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B']));
        checkEqual(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['A', 'B']));
        checkEqual(['C'], trimBothEnds(['A', 'B', 'C', 'A', 'B'], ['B', 'A']));
        checkEqual([], trimBothEnds(['{', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['{', '{', '{', '}', '}', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['{', '{', '{', '}'], ['{'], ['}']));
        checkEqual(['A'], trimBothEnds(['{', 'A', '}'], ['{'], ['}']));
        checkEqual(['A', '{'], trimBothEnds(['A', '{', '}'], ['{'], ['}']));
        checkEqual([], trimBothEnds(['A', 'A'], ['A']));
        checkEqual([], trimBothEnds(['A'], ['A']));
        checkEqual([''], trimBothEnds([''], ['A']));
        checkEqual([], trimBothEnds([], ['A'])); // exception

        checkEqual(true, isThrownException(function () {
          trimBothEnds(0, 1);
        }, 'TypeError')); // Object Named Parameter

        checkEqual(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['A']
        }));
        checkEqual(['A', 'B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueArray: ['a']
        }));
        checkEqual(['B'], trimBothEnds({
          array: ['A', 'B', 'A'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A', 'D'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A']
        }));
        checkEqual(['B', 'A'], trimBothEnds({
          array: ['A', 'B', 'A', 'D'],
          valueFirstArray: ['A'],
          valueLastArray: ['D']
        }));
      });
    };

    var test_operation_popFirst = function test_operation_popFirst() {
      it('test_operation_popFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(1, popFirst(array1));
        checkEqual([2, 3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual('A', popFirst(array1));
        checkEqual(['B', 'C'], array1);
      });
    };

    var test_operation_popLast = function test_operation_popLast() {
      it('test_operation_popLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(3, popLast(array1));
        checkEqual([1, 2], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual('C', popLast(array1));
        checkEqual(['A', 'B'], array1);
      });
    };

    var test_operation_pushFirst = function test_operation_pushFirst() {
      it('test_operation_pushFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushFirst(array1, 0));
        checkEqual([0, 1, 2, 3], array1);
        checkEqual(5, pushFirst(array1, 0));
        checkEqual([0, 0, 1, 2, 3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushFirst(array1, 'D'));
        checkEqual(['D', 'A', 'B', 'C'], array1);
        checkEqual(5, pushFirst(array1, 'D'));
        checkEqual(['D', 'D', 'A', 'B', 'C'], array1);
      });
    };

    var test_operation_pushLast = function test_operation_pushLast() {
      it('test_operation_pushLast', function () {
        var array1 = [1, 2, 3];
        checkEqual(4, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4], array1);
        checkEqual(5, pushLast(array1, 4));
        checkEqual([1, 2, 3, 4, 4], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(4, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D'], array1);
        checkEqual(5, pushLast(array1, 'D'));
        checkEqual(['A', 'B', 'C', 'D', 'D'], array1);
      });
    };

    var test_operation_popArrayFirst = function test_operation_popArrayFirst() {
      it('test_operation_popArrayFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual([1], popArrayFirst(array1));
        checkEqual([2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2], popArrayFirst(array1, 2));
        checkEqual([3], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['A'], popArrayFirst(array1));
        checkEqual(['B', 'C'], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['A', 'B'], popArrayFirst(array1, 2));
        checkEqual(['C'], array1);
      });
    };

    var test_operation_popArrayLast = function test_operation_popArrayLast() {
      it('test_operation_popArrayLast', function () {
        var array1 = [1, 2, 3];
        checkEqual([3], popArrayLast(array1));
        checkEqual([1, 2], array1);
        var array1 = [1, 2, 3];
        checkEqual([2, 3], popArrayLast(array1, 2));
        checkEqual([1], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['C'], popArrayLast(array1));
        checkEqual(['A', 'B'], array1);
        var array1 = ['A', 'B', 'C'];
        checkEqual(['B', 'C'], popArrayLast(array1, 2));
        checkEqual(['A'], array1);
      });
    };

    var test_operation_remainFirst = function test_operation_remainFirst() {
      it('test_operation_remainFirst', function () {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 4));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainFirst(array1, 3));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2], remainFirst(array1, 2));
        checkEqual([1, 2], array1);
        var array1 = [1, 2, 3];
        checkEqual([1], remainFirst(array1, 1));
        checkEqual([1], array1);
        var array1 = [1, 2, 3];
        checkEqual([], remainFirst(array1, 0));
        checkEqual([], array1); // Object Named Parameter

        checkEqual(['A', 'B'], remainFirst({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_operation_remainLast = function test_operation_remainLast() {
      it('test_operation_remainLast', function () {
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 4));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([1, 2, 3], remainLast(array1, 3));
        checkEqual([1, 2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([2, 3], remainLast(array1, 2));
        checkEqual([2, 3], array1);
        var array1 = [1, 2, 3];
        checkEqual([3], remainLast(array1, 1));
        checkEqual([3], array1);
        var array1 = [1, 2, 3];
        checkEqual([], remainLast(array1, 0));
        checkEqual([], array1); // Object Named Parameter

        checkEqual(['B', 'A'], remainLast({
          array: ['A', 'B', 'A'],
          length: 2
        }));
      });
    };

    var test_operation_filter = function test_operation_filter() {
      it('test_operation_filter', function () {
        checkEqual([0, 2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], function (value) {
          return isEven(value);
        }));
        checkEqual([0, 2, 4], array.operation.filter([0, 1, 2, 3, 4, 5], isEven));
        checkEqual([1, 3, 5], array.operation.filter([0, 1, 2, 3, 4, 5], isOdd)); // Object Named Parameter

        checkEqual([0, 2, 4], array.operation.filter({
          array: [0, 1, 2, 3, 4, 5],
          func: function func(value) {
            return isEven(value);
          }
        }));
      });
    };

    var test_operation_sort = function test_operation_sort() {
      it('test_operation_sort', function () {
        checkEqual([0, 1, 2], [1, 2, 0].sort(SortFunc.order.normal.ascending));
        checkEqual([2, 1, 0], [1, 2, 0].sort(SortFunc.order.normal.descending));
        checkEqual(['', 'A', 'AA', 'Aa', 'a', 'aA', 'aa'], ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''].sort(SortFunc.order.normal.ascending));
        checkEqual(['', 'a', 'A', 'Aa', 'aa', 'aA', 'AA'], ['a', 'A', 'Aa', 'aa', 'aA', 'AA', ''].sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.length;
        }]])));
      });
    };

    var test_operation_sortNumber = function test_operation_sortNumber() {
      it('test_operation_sortNumber', function () {
        checkEqual([0, 1, 2, 3, 4, 5], [3, 4, 1, 2, 5, 0].sort(SortFunc.order.normal.ascending));
        checkEqual([5, 4, 3, 2, 1, 0], [3, 4, 1, 2, 5, 0].sort(SortFunc.order.normal.descending));
      });
    };

    var test_operation_sortLength = function test_operation_sortLength() {
      it('test_operation_sortLength', function () {
        checkEqual(['a', 'aa', 'aaa'], ['aaa', 'a', 'aa'].sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.length;
        }]])));
        checkEqual(['aaa', 'aa', 'a'], ['aaa', 'a', 'aa'].sort(SortFunc([[SortFunc.order.normal.descending, function (v) {
          return v.length;
        }]])));
        checkEqual(['a', [0, 1], 'aaa'], ['aaa', 'a', [0, 1]].sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.length;
        }]])));
        checkEqual(['aaa', [0, 1], 'a'], ['aaa', 'a', [0, 1]].sort(SortFunc([[SortFunc.order.normal.descending, function (v) {
          return v.length;
        }]])));
      });
    };

    var test_SortFunc = function test_SortFunc() {
      it('test_SortFunc', function () {
        var userList = [{
          name: 'c',
          age: 20
        }, {
          name: 'b',
          age: 20
        }, {
          name: 'a',
          age: 20
        }, {
          name: 'c',
          age: 21
        }];
        var sortedUserList = [].concat(userList).sort(SortFunc([[SortFunc.order.normal.ascending, function (v) {
          return v.name;
        }], [SortFunc.order.normal.descending, function (v) {
          return v.age;
        }]]));
        checkEqual(['a', 'b', 'c', 'c'], parts.array.map(sortedUserList, function (v) {
          return v.name;
        }));
        checkEqual([20, 20, 21, 20], parts.array.map(sortedUserList, function (v) {
          return v.age;
        }));
        var sortedUserList = [].concat(userList).sort(SortFunc([[SortFunc.order.normal.descending, function (v) {
          return v.name;
        }], [SortFunc.order.normal.ascending, function (v) {
          return v.age;
        }]]));
        checkEqual(['c', 'c', 'b', 'a'], parts.array.map(sortedUserList, function (v) {
          return v.name;
        }));
        checkEqual([20, 21, 20, 20], parts.array.map(sortedUserList, function (v) {
          return v.age;
        }));
        checkEqual(false, isThrown(function () {
          SortFunc([[SortFunc.order.normal.descending, function (v) {
            return v.name;
          }], [SortFunc.order.normal.ascending, function (v) {
            return v.age;
          }]]);
        }));
        checkEqual(false, isThrown(function () {
          SortFunc([[SortFunc.order.normal.descending, function (v) {
            return v.name;
          }, true], [SortFunc.order.normal.ascending, function (v) {
            return v.age;
          }]]);
        }));
        checkEqual(true, isThrown(function () {
          SortFunc([[SortFunc.order.normal.descending], [SortFunc.order.normal.ascending, function (v) {
            return v.age;
          }]]);
        }));
      });
    };

    var test_SortFunc_Dictionary = function test_SortFunc_Dictionary() {
      it('test_SortFunc_Dictionary', function () {
        var unsortedList = ['a', 'B', 'A', 'b', 'aa', 'Aa', 'AA', 'aA', 'aB', 'ab', 'Ab', 'AB'];
        var sortedList = [].concat(unsortedList).sort(SortFunc.order.dictionaryUpperCase.ascending);
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc.order.dictionaryUpperCase.descending);
        checkEqual(['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryUpperCase.ascending, function (v) {
          return v;
        }]]));
        checkEqual(['A', 'a', 'AA', 'Aa', 'aA', 'aa', 'AB', 'Ab', 'aB', 'ab', 'B', 'b'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryUpperCase.descending, function (v) {
          return v;
        }]]));
        checkEqual(['b', 'B', 'ab', 'aB', 'Ab', 'AB', 'aa', 'aA', 'Aa', 'AA', 'a', 'A'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryLowerCase.ascending, function (v) {
          return v;
        }]]));
        checkEqual(['a', 'A', 'aa', 'aA', 'Aa', 'AA', 'ab', 'aB', 'Ab', 'AB', 'b', 'B'], sortedList);
        var sortedList = [].concat(unsortedList).sort(SortFunc([[SortFunc.order.dictionaryLowerCase.descending, function (v) {
          return v;
        }]]));
        checkEqual(['B', 'b', 'AB', 'Ab', 'aB', 'ab', 'AA', 'Aa', 'aA', 'aa', 'A', 'a'], sortedList);
      });
    };

    var test_SortFunc_Version = function test_SortFunc_Version() {
      it('test_SortFunc_Version', function () {
        var versions = ['5.0.0.', '1.3.0.9', '0.2.0', '3.1.2', '0.1.6', '5.0.0', '3.3.3.3', '3.3.3.3.3', '3.10', '0.2.0', '0.2.0a', '0.2.0aa', '0.2.0AA', '0.2.0Aa', '0.2.0aA', '0.2.0c', '0.2.0b', '0.2.0A', '0.2.0C', '0.2.0B', '0.2.0.a', '0.2.0.c', '0.2.0.b', '0.2.0.A', '0.2.0.C', '0.2.0.B', '5.0.0.', '5.0.0.0'];
        var outputVersions = ['5.0.0.0', '5.0.0.', '5.0.0.', '5.0.0', '3.10', '3.3.3.3.3', '3.3.3.3', '3.1.2', '1.3.0.9', '0.2.0C', '0.2.0c', '0.2.0B', '0.2.0b', '0.2.0AA', '0.2.0Aa', '0.2.0aA', '0.2.0aa', '0.2.0A', '0.2.0a', '0.2.0.C', '0.2.0.c', '0.2.0.B', '0.2.0.b', '0.2.0.A', '0.2.0.a', '0.2.0', '0.2.0', '0.1.6'];
        var sortedVersions = [].concat(versions).sort(SortFunc.order.version.descending);
        checkEqual(outputVersions, sortedVersions);
        var sortedVersions = [].concat(versions).sort(SortFunc.order.version.ascending);
        checkEqual([].concat(outputVersions).reverse(), sortedVersions);
        var sortedVersions = [].concat(versions).sort(SortFunc([[SortFunc.order.version.descending, function (v) {
          return v;
        }]]));
        checkEqual(outputVersions, sortedVersions);
        var sortedVersions = [].concat(versions).sort(SortFunc([[SortFunc.order.version.ascending, function (v) {
          return v;
        }]]));
        checkEqual([].concat(outputVersions).reverse(), sortedVersions);
        var items = [{
          name: 'a',
          version: {
            major: '1',
            minor: '1',
            build: '1',
            revision: '1'
          }
        }, {
          name: 'b',
          version: {
            major: '1',
            minor: '10',
            build: '1',
            revision: '1'
          }
        }, {
          name: 'c',
          version: {
            major: '1',
            minor: '2',
            build: '1',
            revision: '1'
          }
        }, {
          name: 'd',
          version: {
            major: '1',
            minor: '1',
            build: '1',
            revision: '1b'
          }
        }, {
          name: 'e',
          version: {
            major: '1',
            minor: '1',
            build: '1',
            revision: '1a'
          }
        }];
        var sortedItems = [].concat(items).sort(SortFunc([[SortFunc.order.version.ascending, function (i) {
          var _i$version = i.version,
              major = _i$version.major,
              minor = _i$version.minor,
              build = _i$version.build,
              revision = _i$version.revision;
          return major + minor + build + revision;
        }]]));
        checkEqual(['a', 'e', 'd', 'c', 'b'], parts.array.map(sortedItems, function (i) {
          return i.name;
        }));
        var sortedItems = [].concat(items).sort(SortFunc([[SortFunc.order.version.descending, function (i) {
          var _i$version2 = i.version,
              major = _i$version2.major,
              minor = _i$version2.minor,
              build = _i$version2.build,
              revision = _i$version2.revision;
          return major + minor + build + revision;
        }]]));
        checkEqual(['b', 'c', 'd', 'e', 'a'], parts.array.map(sortedItems, function (i) {
          return i.name;
        }));
      });
    };

    var test_ArrayEntries_standard = function test_ArrayEntries_standard() {
      it('test_ArrayEntries_standard', function () {
        if (parts.platform.isWindowsScriptHost()) {
          return;
        }

        if (parts.platform.isInternetExplorer()) {
          return;
        }

        if (parts.platform.isGasRhino()) {
          return;
        }

        var arrayEntries = function arrayEntries(array) {
          var result = [];

          var _iterator = _createForOfIteratorHelper(array.entries()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  i = _step$value[0],
                  v = _step$value[1];

              result.push([i, v]);
            } // parts.loop(array)((v, i) => {
            //   result.push([i, v]);
            // });

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return result;
        };

        checkEqual([[0, 'a'], [1, 'b'], [2, 'c']], arrayEntries(['a', 'b', 'c']));
      });
    };

    var test_arrayEntries = function test_arrayEntries() {
      it('test_arrayToIndexValueArray', function () {
        checkEqual([[0, 'a'], [1, 'b'], [2, 'c']], arrayEntries(['a', 'b', 'c'])); // only array type

        checkEqual(true, isThrown(function () {
          return arrayEntries({});
        }));
      });
    };

    test_array_NumberArray();
    test_array_IntegerArray();
    test_array_from();
    test_min();
    test_max();
    test_sum();
    test_average();
    test_median();
    test_mode();
    test_unique();
    test_single();
    test_multiple();
    test_group();
    test_filter();
    test_map();
    test_count();
    test_findIndex();
    test_findBackIndex();
    test_find();
    test_findBack();
    test_some();
    test_all();
    test_isFirst();
    test_isLast();
    test_isBothEnds();
    test_array_subIndex();
    test_array_subLength();
    test_array_subFirst();
    test_array_subLast();
    test_operation_insert();
    test_operation_add();
    test_operation_deleteLength();
    test_operation_deleteIndex();
    test_operation_deleteFirst();
    test_operation_deleteLast();
    test_operation_includeFirst();
    test_operation_includeLast();
    test_operation_includeBothEnds();
    test_operation_excludeFirst();
    test_operation_excludeLast();
    test_operation_excludeBothEnds();
    test_operation_trimFirst();
    test_operation_trimLast();
    test_operation_trimBothEnds();
    test_operation_popFirst();
    test_operation_popLast();
    test_operation_pushFirst();
    test_operation_pushLast();
    test_operation_popArrayFirst();
    test_operation_popArrayLast();
    test_operation_remainFirst();
    test_operation_remainLast();
    test_operation_filter();
    test_operation_sort();
    test_operation_sortNumber();
    test_operation_sortLength();
    test_SortFunc();
    test_SortFunc_Dictionary();
    test_SortFunc_Version();
    test_ArrayEntries_standard();
    test_arrayEntries();
  });
};

exports.test_execute_array = test_execute_array;
var _default = {
  test_execute_array: test_execute_array
};
exports["default"] = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_date = void 0;

var test_execute_date = function test_execute_date(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it,
      checkEqual = _parts$test.checkEqual,
      isThrown = _parts$test.isThrown,
      isThrownException = _parts$test.isThrownException,
      testCounter = _parts$test.testCounter;
  var _parts$date = parts.date,
      Today = _parts$date.Today,
      isInvalidDate = _parts$date.isInvalidDate,
      DateTime = _parts$date.DateTime,
      datetimeToString = _parts$date.datetimeToString,
      dayOfWeek = _parts$date.dayOfWeek,
      dayOfWeekEnglishShort = _parts$date.dayOfWeekEnglishShort,
      dayOfWeekEnglishLong = _parts$date.dayOfWeekEnglishLong,
      nameOfMonth = _parts$date.nameOfMonth,
      nameOfMonthEnglishChar3 = _parts$date.nameOfMonthEnglishChar3,
      nameOfMonthEnglishChar4 = _parts$date.nameOfMonthEnglishChar4,
      nameOfMonthEnglishLong = _parts$date.nameOfMonthEnglishLong;
  var isDate = parts.isDate;
  describe('test_execute_date', function () {
    var test_Today = function test_Today() {
      it('test_Today', function () {
        checkEqual(new Date().toString(), Today().toString());
      });
    };

    var test_isInvalidDate = function test_isInvalidDate() {
      it('test_isInvalidDate', function () {
        checkEqual(true, isDate(new Date(2020, 11, 21)));
        checkEqual(true, isDate(new Date('ABC')));
        checkEqual(false, isInvalidDate(new Date(2020, 11, 21)));
        checkEqual(true, isInvalidDate(new Date('ABC')));

        if (parts.platform.isWindowsScriptHost()) {
          checkEqual('NaN', new Date('ABC').toString());
          checkEqual('NaN-NaN-NaNTNaN:NaN:NaN.NZ', new Date('ABC').toISOString());
        } else {
          checkEqual('Invalid Date', new Date('ABC').toString());
          checkEqual(true, isThrown(function () {
            new Date('ABC').toISOString();
          }));
        }
      });
    };

    var test_Date_standard = function test_Date_standard() {
      it('test_Date_standard', function () {
        checkEqual(0, new Date(0).getTime());

        if (!parts.platform.isWindowsScriptHost()) {
          checkEqual('Thu, 01 Jan 1970 00:00:00 GMT', new Date(0).toUTCString());
        } else {
          checkEqual('Thu, 1 Jan 1970 00:00:00 UTC', new Date(0).toUTCString());
        }

        checkEqual('1970-01-01T00:00:00.000Z', new Date(0).toISOString());
        var dt = new Date(Date.UTC(2020, 10, 21, 11, 35, 10));
        checkEqual('2020-11-21T11:35:10.000Z', dt.toISOString());
      });
    };

    var test_DateTime = function test_DateTime() {
      it('test_DateTime', function () {
        checkEqual(0, new Date(0).getTime());
        var dt = DateTime(undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
        checkEqual(0, dt.getTime());
        checkEqual('1970-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime();
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual(0, dt.getTime());
        checkEqual('1970-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-11-21T11:35:10.400Z', dt.toISOString());
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400);
        checkEqual(new Date(2020, 10, 21, 11, 35, 10, 400).toISOString(), dt.toISOString());
        var dt = DateTime(2020, 11, 21, 11, 35, 10, 400, false);
        checkEqual(new Date(Date.UTC(2020, 10, 21, 11, 35, 10, 400)).toISOString(), dt.toISOString());
        var dt = DateTime(2020);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, true);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, false);
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, true);
        checkEqual('2020-02-02T19:05:06.007Z', dt.toISOString()); // zero

        var dt = DateTime(2020, 0, 3, 4, 5, 6, 7, false);
        checkEqual('2019-12-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 3, 0, 4, 5, 6, 7, false);
        checkEqual('2020-02-29T04:05:06.007Z', dt.toISOString()); // minus

        var dt = DateTime(2020, -1, 3, 4, 5, 6, 7, false);
        checkEqual('2019-11-03T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 3, -1, 4, 5, 6, 7, false);
        checkEqual('2020-02-28T04:05:06.007Z', dt.toISOString());
        var dt = DateTime(2020, 3, 4, -2, 5, 6, 7, false);
        checkEqual('2020-03-03T22:05:06.007Z', dt.toISOString()); // object parameter

        var dt = DateTime({
          year: 2020
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime({
          year: 2020,
          isLocal: false
        });
        checkEqual('2020-01-01T00:00:00.000Z', dt.toISOString());
        var dt = DateTime({
          year: 2020,
          month: 2,
          hour: 13,
          second: 59,
          isLocal: false
        });
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime({
          year: 2020,
          month: 2,
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime(2020, {
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-01-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, {
          hour: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-01T13:00:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, {
          minute: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T00:13:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, {
          isLocal: false
        });
        checkEqual('2020-02-03T00:00:00.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, {
          minute: 13,
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:13:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, {
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, {
          second: 59
        });
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        checkEqual('2020-02-03T04:05:59.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, {
          isLocal: false
        });
        checkEqual('2020-02-03T04:05:06.000Z', dt.toISOString());
        var dt = DateTime(2020, 2, 3, 4, 5, 6, 7, {
          isLocal: false
        });
        checkEqual('2020-02-03T04:05:06.007Z', dt.toISOString()); // exception

        checkEqual(false, isThrown(function () {
          return DateTime(2020, 2, 3, 4, 5, 6, 7, {
            isLocal: false
          });
        }));
        checkEqual(true, isThrown(function () {
          return DateTime(2020, 2, 3, 4, 5, 6, 7, {
            isLocal: 1
          });
        }));
        checkEqual(true, isThrown(function () {
          return DateTime(2020, '2', 3, 4, 5, 6, 7, {
            isLocal: true
          });
        }));
      });
    };

    var test_datetimeToString = function test_datetimeToString() {
      it('test_datetimeToString', function () {
        var dt = DateTime(2001, 2, 4, 9, 5, 8, 45);
        checkEqual('2001/02/04 09:05:08.045', datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual('2001/02/04 09:05:08.04', datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual('2001/02/04 09:05:08.0', datetimeToString(dt, 'YYYY/MM/DD HH:mm:ss.S'));
        checkEqual('01/2/4 9:5:8 am', datetimeToString(dt, 'YY/M/D H:m:s aa'));
        checkEqual('01/2/4 9:5:8 a', datetimeToString(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 9:5:8 AM', datetimeToString(dt, 'YY/M/D H:m:s AA'));
        checkEqual('01/2/4 9:5:8 A', datetimeToString(dt, 'YY/M/D H:m:s A'));
        var dt = DateTime(2001, 2, 4, 16, 5, 8, 45);
        checkEqual('01/2/4 16:5:8 pm', datetimeToString(dt, 'YY/M/D H:m:s aa'));
        checkEqual('01/2/4 16:5:8 p', datetimeToString(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 16:5:8 PM', datetimeToString(dt, 'YY/M/D H:m:s AA'));
        checkEqual('01/2/4 16:5:8 P', datetimeToString(dt, 'YY/M/D H:m:s A'));
        checkEqual('01/2/4 16:5:8 Sun', datetimeToString(dt, 'YY/M/D H:m:s ddd'));
        checkEqual('01/2/4 16:5:8 Sunday', datetimeToString(dt, 'YY/M/D H:m:s dddd'));
        checkEqual('01/2/4 16:5:8 Feb', datetimeToString(dt, 'YY/M/D H:m:s MMM'));
        checkEqual('01/2/4 16:5:8 Feb.', datetimeToString(dt, 'YY/M/D H:m:s MMMM'));
        checkEqual('01/2/4 16:5:8 February', datetimeToString(dt, 'YY/M/D H:m:s MMMMM')); // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual('YYYYMMDD = 20210106', datetimeToString(dt, '"YYYYMMDD = "YYYYMMDD'));
        checkEqual('YYYYMMDD = 20210106', datetimeToString(dt, "'YYYYMMDD = 'YYYYMMDD")); // timezone

        var timezoneOffset = -1 * new Date().getTimezoneOffset();
        var timezoneOffsetHour = (0 < timezoneOffset ? '+' : '') + parts.string.paddingFirst(String(Math.floor(timezoneOffset / 60)), 2, '0');
        var timezoneOffsetMin = parts.string.paddingFirst(String(timezoneOffset % 60), 2, '0');
        checkEqual(timezoneOffsetHour + timezoneOffsetMin, datetimeToString(dt, 'ZZ')); // '+0900' etc

        checkEqual(timezoneOffsetHour + ':' + timezoneOffsetMin, datetimeToString(dt, 'Z')); // '+09:00' etc
        // exception
        // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          datetimeToString(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(function () {
          datetimeToString(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));
      });
    };

    var test_datetimeToString_MomemtLike = function test_datetimeToString_MomemtLike() {
      it('test_datetimeToString_MomemtLike', function () {
        var datetimeToStringMoment = function datetimeToStringMoment(date, format, isLocal) {
          return datetimeToString(date, format, datetimeToString.func.MomentLikeObject(), isLocal);
        };

        var dt = DateTime(2001, 2, 4, 9, 5, 8, 45);
        checkEqual('2001/02/04 09:05:08.045', datetimeToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.SSS'));
        checkEqual('2001/02/04 09:05:08.04', datetimeToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.SS'));
        checkEqual('2001/02/04 09:05:08.0', datetimeToStringMoment(dt, 'YYYY/MM/DD HH:mm:ss.S'));
        checkEqual('01/2/4 9:5:8 am', datetimeToStringMoment(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 9:5:8 AM', datetimeToStringMoment(dt, 'YY/M/D H:m:s A'));
        var dt = DateTime(2001, 2, 4, 16, 5, 8, 45);
        checkEqual('01/2/4 16:5:8 pm', datetimeToStringMoment(dt, 'YY/M/D H:m:s a'));
        checkEqual('01/2/4 16:5:8 PM', datetimeToStringMoment(dt, 'YY/M/D H:m:s A'));
        checkEqual('01/2/4 16:5:8 Sun', datetimeToStringMoment(dt, 'YY/M/D H:m:s ddd'));
        checkEqual('01/2/4 16:5:8 Sunday', datetimeToStringMoment(dt, 'YY/M/D H:m:s dddd'));
        checkEqual('01/2/4 16:5:8 Feb', datetimeToStringMoment(dt, 'YY/M/D H:m:s MMM'));
        checkEqual('01/2/4 16:5:8 February', datetimeToStringMoment(dt, 'YY/M/D H:m:s MMMM')); // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual('YYYYMMDD = 20210106', datetimeToStringMoment(dt, '"YYYYMMDD = "YYYYMMDD'));
        checkEqual('YYYYMMDD = 20210106', datetimeToStringMoment(dt, "'YYYYMMDD = 'YYYYMMDD")); // timezone

        var timezoneOffset = -1 * new Date().getTimezoneOffset();
        var timezoneOffsetHour = (0 < timezoneOffset ? '+' : '') + parts.string.paddingFirst(String(Math.floor(timezoneOffset / 60)), 2, '0');
        var timezoneOffsetMin = parts.string.paddingFirst(String(timezoneOffset % 60), 2, '0');
        checkEqual(timezoneOffsetHour + timezoneOffsetMin, datetimeToStringMoment(dt, 'ZZ')); // '+0900' etc

        checkEqual(timezoneOffsetHour + ':' + timezoneOffsetMin, datetimeToStringMoment(dt, 'Z')); // '+09:00' etc
        // exception
        // quote

        var dt = DateTime(2021, 1, 6);
        checkEqual(false, isThrown(function () {
          datetimeToStringMoment(dt, '"YYYYMMDD = "YYYYMMDD');
        }));
        checkEqual(true, isThrown(function () {
          datetimeToStringMoment(dt, '"YYYY"MMDD = "YYYYMMDD');
        }));
      });
    };

    var test_dayOfWeek = function test_dayOfWeek() {
      it('test_dayOfWeek', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('Sat', dayOfWeek(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, true)); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeek(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeek(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeek(dt, {
          isLocal: false
        }));
      });
    };

    var test_dayOfWeekEnglishShort = function test_dayOfWeekEnglishShort() {
      it('test_dayOfWeekEnglishShort', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('Sat', dayOfWeekEnglishShort(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, true)); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeekEnglishShort(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Fri', dayOfWeekEnglishShort(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Sat', dayOfWeekEnglishShort(dt, {
          isLocal: false
        }));
      });
    };

    var test_dayOfWeekEnglishLong = function test_dayOfWeekEnglishLong() {
      it('test_dayOfWeekEnglishLong', function () {
        var dt = DateTime(2021, 1, 9);
        checkEqual('Saturday', dayOfWeekEnglishLong(dt));
        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, true)); // local Sat UTC Fri

        checkEqual('Friday', dayOfWeekEnglishLong(dt, false)); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: true
        });
        checkEqual('2021-01-08T23:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, {
          isLocal: true
        })); // local Sat UTC Fri

        checkEqual('Friday', dayOfWeekEnglishLong(dt, {
          isLocal: false
        })); // UTC Sat

        var dt = DateTime(2021, 1, 9, 8, {
          isLocal: false
        });
        checkEqual('2021-01-09T08:00:00.000Z', dt.toISOString());
        checkEqual('Saturday', dayOfWeekEnglishLong(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonth = function test_nameOfMonth() {
      it('test_nameOfMonth', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('Jan', nameOfMonth(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, true)); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonth(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonth(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonth(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonthEnglishChar3 = function test_nameOfMonthEnglishChar3() {
      it('test_nameOfMonthEnglishChar3', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('Jan', nameOfMonthEnglishChar3(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, true)); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonthEnglishChar3(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec', nameOfMonthEnglishChar3(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan', nameOfMonthEnglishChar3(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonthEnglishChar4 = function test_nameOfMonthEnglishChar4() {
      it('test_nameOfMonthEnglishChar4', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, true)); // local Jan UTC Dec

        checkEqual('Dec.', nameOfMonthEnglishChar4(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('Dec.', nameOfMonthEnglishChar4(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('Jan.', nameOfMonthEnglishChar4(dt, {
          isLocal: false
        }));
      });
    };

    var test_nameOfMonthEnglishLong = function test_nameOfMonthEnglishLong() {
      it('test_nameOfMonthEnglishLong', function () {
        var dt = DateTime(2021, 1, 1);
        checkEqual('January', nameOfMonthEnglishLong(dt));
        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, true)); // local Jan UTC Dec

        checkEqual('December', nameOfMonthEnglishLong(dt, false)); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, false)); // Object Parameter

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: true
        });
        checkEqual('2020-12-31T23:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, {
          isLocal: true
        })); // local Jan UTC Dec

        checkEqual('December', nameOfMonthEnglishLong(dt, {
          isLocal: false
        })); // UTC

        var dt = DateTime(2021, 1, 1, 8, {
          isLocal: false
        });
        checkEqual('2021-01-01T08:00:00.000Z', dt.toISOString());
        checkEqual('January', nameOfMonthEnglishLong(dt, {
          isLocal: false
        }));
      });
    };

    test_Today();
    test_isInvalidDate();
    test_Date_standard();
    test_DateTime();
    test_dayOfWeek();
    test_dayOfWeekEnglishShort();
    test_dayOfWeekEnglishLong();
    test_nameOfMonth();
    test_nameOfMonthEnglishChar3();
    test_nameOfMonthEnglishChar4();
    test_nameOfMonthEnglishLong();
    test_datetimeToString();
    test_datetimeToString_MomemtLike();
  });
};

exports.test_execute_date = test_execute_date;
var _default = {
  test_execute_date: test_execute_date
};
exports["default"] = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_consoleHook = void 0;

/* eslint-disable max-len */

/* eslint-disable no-var */
var test_execute_consoleHook = function test_execute_consoleHook(parts) {
  var _parts$test = parts.test,
      describe = _parts$test.describe,
      it = _parts$test.it;
  describe('test_execute_consoleHook', function () {
    var _parts$test2 = parts.test,
        checkEqual = _parts$test2.checkEqual,
        isThrown = _parts$test2.isThrown;
    var consoleHook = parts.system.consoleHook;

    var test_consoleHook = function test_consoleHook(methodName) {
      it('test_consoleHook' + ' ' + methodName, function () {
        if (parts.platform.isGoogleAppsScript()) {
          return;
        }

        var consoleOutput = '';

        var consoleHook_hook = function consoleHook_hook() {
          consoleHook.hook(methodName, function (args) {
            consoleOutput += args + ';';
          });
        };

        var consoleMethod = console.log;

        var testConsoleMethod = function testConsoleMethod() {
          console[methodName]('debug1');
          console[methodName]('debug2');
          console[methodName]('release1');
          console[methodName]('release2');
        };

        consoleOutput = '';
        consoleHook_hook();
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;release1;release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug1'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug1', 'release1'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;release1;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [/debug?/], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [/debug?/], ['debug1'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [], ['release1'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [], [/debug?/], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('release1;release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug1', 'debug2'], ['debug1'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug2;', consoleOutput);

        var testConsoleMethod = function testConsoleMethod() {
          console[methodName]('debug1', 'a', 'messageA');
          console[methodName]('debug2', 'b', 'messageB');
          console[methodName]('release1', 'a', 'messageC');
          console[methodName]('release2', 'b', 'messageD');
        };

        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug', ' a '], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug1;debug2;release1;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['debug'], [' a '], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('debug2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, [' b '], ['messageB'], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('release2;', consoleOutput);
        consoleOutput = '';
        consoleHook_hook();
        consoleHook.accept(methodName, ['messageD'], [], console[methodName]);
        testConsoleMethod();
        consoleHook.unHook(methodName);
        checkEqual('release2;', consoleOutput);
        consoleHook.hook(methodName, consoleMethod);
      });
    };

    test_consoleHook('log');
    test_consoleHook('info');
    test_consoleHook('warn');
    test_consoleHook('error');
    test_consoleHook('debug');
  });
};

exports.test_execute_consoleHook = test_execute_consoleHook;
var _default = {
  test_execute_consoleHook: test_execute_consoleHook
};
exports["default"] = _default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.test_execute_other = void 0;

var test_execute_other = function test_execute_other(parts) {
  var _parts$test = parts.test,
      checkEqual = _parts$test.checkEqual,
      describe = _parts$test.describe,
      it = _parts$test.it,
      test = _parts$test.test;
  describe('test_execute_other', function () {
    var test_split = function test_split() {
      it('test_split', function () {
        checkEqual(3, 'a,b,c'.split(',').length);
        checkEqual(4, 'a,b,c,'.split(',').length);
        checkEqual('a', 'a,b,c,'.split(',')[0]);
        checkEqual('', 'a,b,c,'.split(',')[3]);
      });
    };

    test_split();
  });
};

exports.test_execute_other = test_execute_other;
var _default = {
  test_execute_other: test_execute_other
};
exports["default"] = _default;

/***/ })
/******/ ]);
});