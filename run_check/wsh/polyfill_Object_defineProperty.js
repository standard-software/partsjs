/* eslint-disable max-len */
/* eslint-disable no-extend-native */
/* eslint-disable prefer-rest-params */

// https://jonlabelle.com/snippets/view/javascript/ecmascript-5-polyfills
// ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
// Partial support for most common case - getters, setters, and values
if (!Object.defineProperty ||
    !(function() {
      try {
        Object.defineProperty({}, 'x', {});
        return true;
      }
      catch (e) {
        return false;
      }
    }())) {
  var orig = Object.defineProperty;
  Object.defineProperty = function(o, prop, desc) {
    // In IE8 try built-in implementation for defining properties on DOM prototypes.
    if (orig) {
      try {
        return orig(o, prop, desc);
      }
      catch (e) {}
    }

    if (o !== Object(o)) {
      throw TypeError('Object.defineProperty called on non-object');
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

// Function.prototype.bind() - JavaScript | MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
//  Does not work with `new funcA.bind(thisArg, args)`
if (!Function.prototype.bind) { (function() {
  var slice = Array.prototype.slice;
  Function.prototype.bind = function() {
    var thatFunc = this; var thatArg = arguments[0];
    var args = slice.call(arguments, 1);
    if (typeof thatFunc !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }
    return function() {
      var funcArgs = args.concat(slice.call(arguments));
      return thatFunc.apply(thatArg, funcArgs);
    };
  };
})(); }

