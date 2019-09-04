"use strict";

var polyfillDefine = function polyfillDefine() {
  if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
      'use strict';

      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      } else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
      pos = !pos || pos < 0 ? 0 : +pos;
      return this.substring(pos, pos + search.length) === search;
    };
  }

  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
      if (this_len === undefined || this_len > this.length) {
        this_len = this.length;
      }

      return this.substring(this_len - search.length, this_len) === search;
    };
  }

  if (!Array.prototype.some) {
    Array.prototype.some = function (fun, thisArg) {
      'use strict';

      if (this == null) {
        throw new TypeError('Array.prototype.some called on null or undefined');
      }

      if (typeof fun !== 'function') {
        throw new TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;

      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(thisArg, t[i], i, t)) {
          return true;
        }
      }

      return false;
    };
  } // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map


  if (!Array.prototype.map) {
    Array.prototype.map = function (callback
    /*, thisArg*/
    ) {
      var T, A, k;

      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);
      var len = O.length >>> 0;

      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }

      if (arguments.length > 1) {
        T = arguments[1];
      }

      A = new Array(len);
      k = 0;

      while (k < len) {
        var kValue, mappedValue;

        if (k in O) {
          kValue = O[k];
          mappedValue = callback.call(T, kValue, k, O);
          A[k] = mappedValue;
        }

        k++;
      }

      return A;
    };
  }
};

polyfillDefine();
module.exports = {};