/* eslint-disable prefer-const */
'use strict';
const fs = require('fs');
const path = require('path');

const { readTopDirSync, readSubDirSync, readSubDir } = require('./readFileList.js');

const parts = require('@standard-software/parts');
// console.log(parts.VERSION);
// return;

const { indexOfFirst, indexOfLast, subIndex, subLength } = parts.string;

const argsPath = path.resolve(process.argv[2]);
// console.log(argsPath);
// return;

const firstFirstDelim = function(str, delimiter) {
  const index = indexOfFirst(str, delimiter);
  if (index === -1) {
    return str;
  } else if (index === 0) {
    return '';
  } else {
    return subIndex(str, 0, index - 1);
  }
};

const lastFirstDelim = function(str, delimiter) {
  const index = indexOfFirst(str, delimiter);
  if (index === -1) {
    return str;
  } else if (index === str.length - 1) {
    return '';
  } else {
    return subLength(str, index + delimiter.length);
  }
};

const lastLastDelim = function(str, delimiter) {
  const index = indexOfLast(str, delimiter);
  if (index === -1) {
    return str;
  } else if (index === str.length - delimiter.length) {
    return '';
  } else {
    return subLength(str, index + delimiter.length);
  }
};

const tagInnerFirst = function(str, startTag, endTag) {
  if (str === '') { return ''; }

  let indexStartTag = indexOfFirst(str, startTag);
  if (indexStartTag === -1) {
    return '';
  }
  const indexEndTag = indexOfFirst(str, endTag, indexStartTag + startTag.length);
  if (indexEndTag === -1) {
    return '';
  }
  indexStartTag = indexOfLast(str, startTag, indexEndTag - 1);
  // console.log(str, indexStartTag + startTag.length, indexEndTag - 1);

  if (indexEndTag - 1 < indexStartTag + startTag.length) {
    return '';
  }
  return parts.string.subIndex(str, indexStartTag + startTag.length, indexEndTag - 1);
};
// console.log(tagInnerFirst('<<<>>><<<>>><a<<aaa>>><<<>>>', '<a', 'a>'))
// return;

const tagOuterFirst = (str, startTag, endTag) => {
  if (str === '') { return ''; }

  let indexStartTag = indexOfFirst(str, startTag);
  if (indexStartTag === -1) {
    return '';
  }
  const indexEndTag = indexOfFirst(str, endTag, indexStartTag + startTag.length);
  if (indexEndTag === -1) {
    return '';
  }
  indexStartTag = indexOfLast(str, startTag, indexEndTag - 1);
  return parts.string.subIndex(str, indexStartTag, indexEndTag + endTag.length - 1);
};
// console.log(tagOuterFirst('<<<>>><<<>>><a<<aaa>>><<<>>>', '<a', 'a>'))
// return;

const files = [];
const folders = [];

if (fs.statSync(argsPath).isDirectory()) {
  const items = readSubDirSync(argsPath);
  items.forEach((path) => {
    if (fs.statSync(path).isDirectory()) {
      folders.push(path);
    } else {
      files.push(path);
    }
  });
  console.log(folders.length, files.length);
} else if (fs.statSync(argsPath).isFile()) {
  files.push(argsPath);
} else {
  throw new Error('argsPath is not file directory');
}

for (let i = 0; i < files.length; i += 1) {
  const filePath = files[i];
  let source = fs.readFileSync(filePath, 'utf8').toString();

  while (true) {
    if (!source.includes('...require(')) { break; }

    let tagText; let replaceText;
    tagText = tagOuterFirst(source, '...require(', '),');
    replaceText = tagInnerFirst(source, '...require(', '),');
    replaceText = parts.string.excludeBothEnds(replaceText, '\'');
    replaceText = parts.string.excludeLast(replaceText, '.js');
    if (replaceText.includes('/')) {
      replaceText = lastLastDelim(replaceText, '/');
    }
    source = parts.string.replaceAll(source, tagText, '...' + replaceText + ',');

    // file head add const ... = require
    tagText = parts.string.excludeFirst(tagText, '...');
    tagText = parts.string.excludeLast(tagText, ',');
    source = `const ${replaceText} = ${tagText};\n${source}`;

    // file end add export * from
    tagText = parts.string.excludeFirst(tagText, 'require(');
    tagText = parts.string.excludeLast(tagText, ')');
    source = `${source}\nexport * from ${tagText}`;
  }

  while (true) {
    if (!source.includes(' = require(')) { break; }

    // const ... = require('...');
    // >> import ... from ...;
    let tagText; let replaceText;
    tagText = tagOuterFirst(source, 'const ', ' = require(');
    replaceText = tagInnerFirst(source, 'const ', ' = require(');
    source = parts.string.replaceAll(source, tagText, 'import ' + replaceText + ' from ');

    tagText = tagOuterFirst(source, ' from ', ')');
    replaceText = tagInnerFirst(source, ' from ', ')');
    source = parts.string.replaceAll(source, tagText, ' from ' + replaceText);
  }

  while (true) {
    if (!source.includes('module.exports = {')) { break; }

    let tagText; let replaceText;
    tagText = tagOuterFirst(source, 'module.exports = {', '};');
    replaceText = tagInnerFirst(source, 'module.exports = {', '};');
    source = parts.string.replaceAll(
      source, tagText, 'export default {' + replaceText + '}',
    );
  }

  while (true) {
    // file head const
    if (source.indexOf('const ') !== 0) { break; }

    let tagText; let replaceText;
    tagText = tagOuterFirst(source, 'const ', '\n');
    replaceText = tagInnerFirst(source, 'const ', '\n');
    source = parts.string.replaceAll(
      source, tagText, 'export const ' + replaceText+ '\n',
    );
  }

  while (true) {
    // line head const
    if (!source.includes('\nconst ')) { break; }

    let tagText; let replaceText;
    tagText = tagOuterFirst(source, '\nconst ', '\n');
    replaceText = tagInnerFirst(source, '\nconst ', '\n');
    source = parts.string.replaceAll(
      source, tagText, '\nexport const ' + replaceText+ '\n',
    );
  }

  // const lines = source.split('¥n');
  // for (let j = 0; j < lines.length; j += 1) {
  //   console.log(source);
  // }

  fs.writeFileSync(filePath, source, 'utf8');
}
