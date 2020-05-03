/* eslint-disable brace-style */
/* eslint-disable space-before-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable curly */
/* eslint-disable new-cap */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
/* eslint-disable spaced-comment */
/* eslint-disable indent */
/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-extend-native */
const polyfillDefine = () => {

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, pos) {
      pos = !pos || pos < 0 ? 0 : +pos;
      return this.substring(pos, pos + search.length) === search;
    };
  }

  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(search, this_len) {
      if (this_len === undefined || this_len > this.length) {
        this_len = this.length;
      }
      return this.substring(this_len - search.length, this_len) === search;
    };
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
  if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }

  // update from: https://gist.github.com/hufyhang/c303ce1b80c7b6f8a73e
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
      'use strict';

      if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
      }

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      var array = this;
      thisArg = thisArg || this;
      for (var i = 0, l = array.length; i !== l; ++i) {
        callback.call(thisArg, array[i], i, array);
      }
    };
  }

  // https://github.com/kevlatus/polyfill-array-includes/blob/master/array-includes.js
  if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement, fromIndex) {

        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          // c. Increase k by 1.
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }

        // 8. Return false
        return false;
    }
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  // This version tries to optimize by only checking for "in" when looking for undefined and
  // skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
  // Whether it is actually faster remains to be seen.
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = (function(Object, max, min) {
      "use strict"
      return function indexOf(member, fromIndex) {
        if (this === null || this === undefined)
          throw TypeError("Array.prototype.indexOf called on null or undefined")

        var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len)
        if (i < 0) i = max(0, Len + i)
        else if (i >= Len) return -1

        if (member === void 0) {        // undefined
          for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i
        } else if (member !== member) { // NaN
          return -1 // Since NaN !== NaN, it will never be found. Fast-path it.
        } else                          // all else
          for (; i !== Len; ++i) if (that[i] === member) return i

        return -1 // if the value was not found, then return -1
      }
    })(Object, Math.max, Math.min)
  }

  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  if (!Object.keys) {
    Object.keys = (function() {
      'use strict';
      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
          dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
          ],
          dontEnumsLength = dontEnums.length;

      return function(obj) {
        if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }

        var result = [], prop, i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }
        return result;
      };
    }());
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  if (!Object.entries) {
    Object.entries = function( obj ){
      var ownProps = Object.keys( obj ),
          i = ownProps.length,
          resArray = new Array(i); // preallocate the Array
      while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];

      return resArray;
    };
  }

  // https://jonlabelle.com/snippets/view/javascript/ecmascript-5-polyfills
  // ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
  // Partial support for most common case - getters, setters, and values
  if (!Object.defineProperty ||
      !(function () {
          try {
              Object.defineProperty({}, 'x', {});
              return true;
          }
          catch (e) {
              return false;
          }
      }())) {
      var orig = Object.defineProperty;
      Object.defineProperty = function (o, prop, desc) {
          // In IE8 try built-in implementation for defining properties on DOM prototypes.
          if (orig) {
              try {
                  return orig(o, prop, desc);
              }
              catch (e) {}
          }

          if (o !== Object(o)) {
              throw TypeError("Object.defineProperty called on non-object");
          }
          if (Object.prototype.__defineGetter__ && ('get' in desc)) {
              Object.prototype.__defineGetter__.call(o, prop, desc.get);
          }
          if (Object.prototype.__defineSetter__ && ('set' in desc)) {
              Object.prototype.__defineSetter__.call(o, prop, desc.set);
          }
          if ('value' in desc) {
              o[prop] = desc.value;
          }
          return o;
      };
  }

  // https://jonlabelle.com/snippets/view/javascript/ecmascript-5-polyfills
  // ES 15.2.3.7 Object.defineProperties ( O, Properties )
  if (typeof Object.defineProperties !== "function") {
    Object.defineProperties = function (o, properties) {
        if (o !== Object(o)) {
            throw TypeError("Object.defineProperties called on non-object");
        }
        var name;
        for (name in properties) {
            if (Object.prototype.hasOwnProperty.call(properties, name)) {
                Object.defineProperty(o, name, properties[name]);
            }
        }
        return o;
    };
  }

  // https://jonlabelle.com/snippets/view/javascript/ecmascript-5-polyfills
  // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )
  if (typeof Object.getOwnPropertyDescriptor !== "function") {
      Object.getOwnPropertyDescriptor = function (o, name) {
          if (o !== Object(o)) { throw TypeError(); }
          if (o.hasOwnProperty(name)) {
              return {
                  value: o[name],
                  enumerable: true,
                  writable: true,
                  configurable: true
              };
          }
      };
  }

};

polyfillDefine();

module.exports = {};

