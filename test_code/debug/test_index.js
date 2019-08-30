const parts = require('../../debug_build/index.js');

console.log(parts.VERSION);
console.log(parts.test_babel());
var valueA;
console.log(parts.type._isUndefined(valueA));
var valueA = 'valA';
console.log(parts.type._isUndefined(valueA));
