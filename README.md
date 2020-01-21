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

### 3.5.0
#### 2020/01/21(Tue)
- add includes includesSome inclludesAll
- _inProperty >> isObjectParameter
_ update getProperty inProperty

### 3.4.0
#### 2020/01/15(Wed)
- delete isEmpty
- add isEmptyObject
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

### 3.2.0
#### 2020/01/02(Thu)
- delete Array.prototype.map polifill
- string
  - add repeat
  - add isLowerCase isUpperCase
- array
  - update unique
  - add findIndex
  - add findIndex(findIndexFirst)
  - add findBackjIndex(findIndexLast)
  - add find(findFirst)
  - add findBack(findLast)
- test
  - add testFrame
  - update describe it
  - update wsh test

### 3.1.0
#### 2019/12/20(Fri)
- array.js
  - add filter
  - add map
  - add unique
  - add single
  - add multiple
  - add mode
- update isOdd
- add jest test code
  - debug build
  - release build

### 3.0.0
#### 2019/12/18(Wed)
- delete array.equal
- array.js
  - add from
  - add sum average midian
- support eslint format fix
- support jest

### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
