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

### 2.10.0
#### 2019/11/04(Mon)
- update compare.equal add compare.equalDeep
  - add equalFunction
  - support CircularReference
- update clone cloneDeep

### 2.9.1
#### 2019/11/04(Mon)
- update clone cloneDeep cloneFunction
  - support only object and arrayType
  - clone ignore Math Object etc

### 2.9.0
#### 2019/11/01(Fri)
- update clone cloneDeep cloneFunction
  - support Map Set
  - clone ignore WeakMap WeakSet

### 2.8.0
#### 2019/10/31(Thu)
- add getProperty(getProp)
- add setProperty(setProp)
- update some ErrorMessage
- bugfix matchSome matchSomeIndex

### 2.7.0
#### 2019/10/30(Wed)
- add
  - matchAll(matchEvery)
  - matchSome(matchAny)
  - matchSomeIndex(matchAnyIndex)
- delete isXxxArray, isNotXxxArray

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


### More Info
[VERSION.md](./VERSION.md)


### Before ver2.0.0
Verssion 1.x.x = Previous product  
[standard-software / Copipe.js](https://github.com/standard-software/copipejs)
