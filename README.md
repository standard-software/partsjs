# Parts.js
JavaScript Code Parts TypeSafe Library

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

## How to use parts.js in HTML page

### refer to example
partsjs/how_to_use.html
partsjs/test_exec/release_web/test_index.html

### HTML file

```
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>how_to_use.html</title>
</head>
<body>
  <script src="./release_build/parts.js"></script>
  <script>
    document.write('parts version is ' + parts.VERSION)
  </script>
</body>
```

You can now use the functions of the parts.js object.

## How to use parts in WSH (.wsf file)

### refer to example
partsjs/how_to_use.wsf
partsjs/test_exec/release_wsh/test_index.wsf

### wsf file (ex. index.wsf)

```
<?xml version="1.0" encoding="shift-jis" ?>
<job>
  <script language="JavaScript">
  <![CDATA[
    var console = {};
  ]]>
  </script>
  <script language="JavaScript" src="./release_build/parts.js"></script>
  <script language="JavaScript">
  <![CDATA[
    WScript.Echo('parts version is ' + parts.VERSION)
  ]]>
  </script>
</job>
```

You can now use the functions of the parts.js object.


## Version

### 4.0.1
#### 2020/01/30(Thu)
- update isObjectParameter
- rename filename _isXxx.js >> isXxx.js
- eslint fix

### 4.0.0
#### 2020/01/29(Wed)
- change build webpack config
  - change How to use HTML script tag
  - change How to use WSH
  - more simple
- add how_to_use.html how_to_use.wsf
- add _propertyCount.js
  - update propertyCount (hasOwn)
- update isObjectParameter
- update isEmptyObject object.js >> isType.js
- add isEmptyArray
- update isXxx >> isXxxAll
- update _isXxx >> isXxx

### 3.5.0
#### 2020/01/24(Fri)
- add includes includesSome inclludesAll
- delete string.includes
- update consoleHook
- _inProperty >> isObjectParameter
- update getProperty inProperty
- update polyfill String.prototype.includes
- update test output message
- update test output testname
- update propertyCount

### 3.4.0
#### 2020/01/15(Wed)
- delete isEmpty
- add isEmptyObjectAll
- update setProperty return value
- findIndexFirst >> findFirstIndex
- findIndexLast >> findLastIndex
- add match.js
  - match >> matchSome
  - matchValue >> matchSomeValue
  - matchAll >> allMatchSome
  - matchSomeIndex >> indexOfMatchSome
  - matchSome >> someMatchSome
  - add match matchValue
  - add matchAll matchAllValue
  - add allMatchAll someMatchAll indexOfMatchAll
  - delete matchEvery matchAnyIndex matchAny
- add array .some .all

### 3.3.0
#### 2020/01/05(Sun)
- update checkEqual
  - update equal
  - add equalFunction.equalValue
- update array support Object Named Arguemnt
  - filter map count
  - findIndex findBackIndex find findBack
- add array operation
  - insert
  - add
  - delete
- test
  - support exception continue

### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
