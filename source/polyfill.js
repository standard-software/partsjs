/* eslint-disable brace-style */
/* eslint-disable space-before-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable curly */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-extend-native */
/* eslint-disable no-plusplus */
const polyfillDefine = () => {

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

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  // Production steps of ECMA-262, Edition 5, 15.4.4.19
  // Reference: http://es5.github.io/#x15.4.4.19
  if (!Array.prototype.map) {

    Array.prototype.map = function(callback/* , thisArg*/) {

      var T, A, k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      // 1. Let O be the result of calling ToObject passing the |this|
      //    value as the argument.
      var O = Object(this);

      // 2. Let lenValue be the result of calling the Get internal
      //    method of O with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = O.length >>> 0;

      // 4. If IsCallable(callback) is false, throw a TypeError exception.
      // See: http://es5.github.com/#x9.11
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
      if (arguments.length > 1) {
        T = arguments[1];
      }

      // 6. Let A be a new array created as if by the expression new Array(len)
      //    where Array is the standard built-in constructor with that name and
      //    len is the value of len.
      A = new Array(len);

      // 7. Let k be 0
      k = 0;

      // 8. Repeat, while k < len
      while (k < len) {

        var kValue, mappedValue;

        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {

          // i. Let kValue be the result of calling the Get internal
          //    method of O with argument Pk.
          kValue = O[k];

          // ii. Let mappedValue be the result of calling the Call internal
          //     method of callback with T as the this value and argument
          //     list containing kValue, k, and O.
          mappedValue = callback.call(T, kValue, k, O);

          // iii. Call the DefineOwnProperty internal method of A with arguments
          // Pk, Property Descriptor
          // { Value: mappedValue,
          //   Writable: true,
          //   Enumerable: true,
          //   Configurable: true },
          // and false.

          // In browsers that support Object.defineProperty, use the following:
          // Object.defineProperty(A, k, {
          //   value: mappedValue,
          //   writable: true,
          //   enumerable: true,
          //   configurable: true
          // });

          // For best browser support, use the following:
          A[k] = mappedValue;
        }
        // d. Increase k by 1.
        k++;
      }

      // 9. return A
      return A;
    };
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
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

  // https://jonlabelle.com/snippets/view/javascript/ecmascript-5-polyfills
  // ES5 15.2.3.3 Object.getOwnPropertyDescriptor ( O, P )
  if (typeof Object.getOwnPropertyDescriptor !== "function") {
    Object.getOwnPropertyDescriptor = function(o, name) {
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

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
  if (!Date.prototype.toISOString) {
    (function() {

      function pad(number) {
        if (number < 10) {
          return '0' + number;
        }
        return number;
      }

      Date.prototype.toISOString = function() {
        return this.getUTCFullYear() +
          '-' + pad(this.getUTCMonth() + 1) +
          '-' + pad(this.getUTCDate()) +
          'T' + pad(this.getUTCHours()) +
          ':' + pad(this.getUTCMinutes()) +
          ':' + pad(this.getUTCSeconds()) +
          '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
          'Z';
      };

    })();
  }

};

polyfillDefine();

export default {};
