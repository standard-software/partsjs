# Parts.js
JavaScript Code Parts

## URL

### GitHub
standard-software/partsjs: JavaScript Code Parts  
https://github.com/standard-software/partsjs

### npm
@standard-software/parts - npm  
https://www.npmjs.com/package/@standard-software/parts

## How to use Node.js

### npm install
    npm i @standard-software/parts

### type CommonJS

```
// index.js
const parts = require("@standard-software/parts");

console.log(
  'parts version is ', parts.VERSION
);
```
    node index.js

### type ES Modules

```
// index.mjs
import parts from '@standard-software/parts';

console.log(
  'parts version is ', parts.VERSION
);
```
    node --experimental-modules index.mjs

## How to use HTML Page

### refer to example
partjs/test_exec/release_web/test_index.html

### HTML file

```
<script>
  var module = {};
  var parts;
</script>

<script src="./release_build/parts.js"></script>
<script>
  parts = module.exports;
</script>
<script>
  document.write('parts version is ' + parts.VERSION)
</script>
```

You can now use the functions of the parts object.

## How to use WSH .wsf file

### refer to example
partjs/test_exec/release_wsh/test_index.wsf

### wsf file (ex. index.wsf)

```
<?xml version="1.0" encoding="shift-jis" ?>

<job>
<script language="JavaScript">
<![CDATA[
  var module = {};
  var parts;
]]>
</script>
<script language="JavaScript" src="../../release_build/parts.js"></script>
<script language="JavaScript">
<![CDATA[
  var parts = module.exports;

  var outputMessage = '';
  outputMessage += 'parts version is ' + parts.VERSION;
  WScript.Echo(outputMessage);

]]>
</script>
</job>
```

You can now use the functions of the parts object.


## Version

### 2.2.0
#### 2019/10/03(Thu)
- move webpack.config.js babel.config.js
- update test release_wsh
- move js file

### 2.1.1
#### 2019/10/03(Thu)
- update consoleHook.hookXxx

### 2.1.0
#### 2019/10/01(Tue)
- update copyProperty
- add inProperty
- add isObjectType
- add polyfill array.includes
- add polyfill Object.keys entries
- update polyfill array.some
- add propertyCount
- add isEmpty
- update consoleHook.hook,accept

### 2.0.1
#### 2019/09/26(Thu)
- document update
- update test code(html, wsf)

### 2.0.0
#### 2019/09/26(Thu)
- update consoleHook
- add object.js copyProperty
  - add test_copyProperty
- update Parameter Args
- define root function(property) name
- define public function(property) name
- update test_isObject
- add Shortcut Name

### 1.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)

### 0.9.0
#### 2019/09/17(Tue)
- add consoleHook.js

### 0.8.1
#### 2019/09/16(Mon)
- add string.includes
  - test code
- update string.matchFormat

### 0.8.0
#### 2019/09/15(Sun)
- add convert.js
  - numberToString,stringToNumber,stringToInteger,
- add string.js
  - matchFormat
- add _isNotXxx
- change defaultValue -> initalValue

### 0.7.2
#### 2019/09/14(Sat)
- update ErrorMessage
- add Polyfill Array.forEach
- add _text.js(discard)

### 0.7.1
#### 2019/09/12(Thu)
- update or, match, matchValue Error handling
  - SyntaxError -> TypeError, ReferenceError
- update ErrorMessage

### 0.7.0
#### 2019/09/05(Thu)
- add compare.js
  - equal, or, match, matchValue, defaultValue,
  - add test code for each
- support named arguemnt
  - equal and add test_sc
  - or
  - update match, matchValue
- add polyfill.js
  - String.includes startsWith endsWith
  - Array.some map


### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
