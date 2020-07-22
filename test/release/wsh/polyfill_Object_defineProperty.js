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
