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

## type ES Modules

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

## 0.7.1
#### 2019/09/06(Fri)
- update match, matchValue Error handling

## 0.7.0
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

### 0.6.1
#### 2019/09/04(Wed)
- add sc, if_, switch_
  - add test code for each
- update test code

### 0.6.0
#### 2019/09/03(Tue)
- add syntax.js
  - assert
  - guard
  - functionValue
  - isThrown isThrownValue isThrownException isNotThrown
- add syntax.test.js
- update test code(html, wsf)

### 0.5.0
#### 2019/09/02(Mon)
- support wsh(Windows Scripting Host)
  /test_exec/release_wsh/test_index.html
- Rename folder test_code/ >> test_exec
- Uninstall @babel/polyfill
- update document "How to use WSH .wsf file"

### More Info
[VERSION.md](./VERSION.md)
