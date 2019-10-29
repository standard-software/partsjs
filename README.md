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

### 2.7.0
### 2019/10/29(Tue)
- add
  - matchAll(matchEvery)
  - matchSome(matchAny)
  - matchSomeIndex(matchAnyIndex)

### 2.6.2
#### 2019/10/28(Mon)
- add isArrayType
- update stringToNumber stringToInteger
- add stringToNumberDefault stringToIntegerDefault
  - strToNumberDef strToIntegerDef
  - strToNumDef strToIntDef

### 2.6.1
#### 2019/10/28(Mon)
- add isBooleanObject, isNumberObject, isStringObject
- add isMap isWeakMap isSet isWeakSet

### 2.6.0
#### 2019/10/20(Sun)
- add isSymbol
- update strintToNumber stringToInteger

### 2.5.3
#### 2019/10/17(Thu)
- update cloneDeep support CircularReference 
- update test code

### 2.5.2
#### 2019/10/14(Mon)
- update clone cloneDeep
- add cloneFunction

### 2.5.1
#### 2019/10/12(Sat)
- update match test
- update clone cloneDeep
- delete polifill Array.some

### 2.5.0
#### 2019/10/10(Thu)
- add root.js clone cloneDeep
  - support date type
- delete object.clone cloneDeep
- delete array.clone cloneDeep
- update test test_index.html test_index.wsf

### 2.4.0
#### 2019/10/09(Wed)
- add replaceAll
- add _inProperty.js
- update _copyProperty _inProperty 
- update test message output
- add array.js equal min max clone cloneDeep
- add object.clone cloneDeep
- update Package.json main

### 2.3.0
#### 2019/10/05(Sat)
- add number.js
  - isMultiples,isEven,isOdd,
  - round,nearEqual,inRange,randomInt

### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
