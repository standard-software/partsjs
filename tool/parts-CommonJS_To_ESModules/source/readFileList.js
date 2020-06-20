'use strict';
const fs = require('fs');
const path = require('path');

const readTopDirSync = (folderPath) => {
  const result = fs.readdirSync(folderPath);
  return result.map((itemName) => {
    return path.join(folderPath, itemName);
  });
};

const readSubDirSync = (folderPath) => {
  const result = [];
  const readTopDirSync = ((folderPath) => {
    let items = fs.readdirSync(folderPath);
    items = items.map((itemName) => {
      return path.join(folderPath, itemName);
    });
    items.forEach((itemPath) => {
      result.push(itemPath);
      if (fs.statSync(itemPath).isDirectory()) {
        readTopDirSync(itemPath);
      }
    });
  });
  readTopDirSync(folderPath);
  return result;
};

const readTopDir = (folderPath, errorFunc, itemFunc, finishFunc) => {

  fs.readdir(folderPath, (err, items) => {
    if (err) {
      if (errorFunc) {
        errorFunc(err);
      }
    }

    items = items.map((itemName) => {
      return path.join(folderPath, itemName);
    });

    if (itemFunc) {
      items.forEach((itemPath) => {
        itemFunc(itemPath);
      });
    }

    if (finishFunc) {
      finishFunc(items);
    }

  });
};

const readSubDir = (folderPath, errorFunc, itemFunc, finishFunc) => {

  const result = [];
  let execCounter = 0;
  const readTopDir = (folderPath) => {
    execCounter += 1;
    fs.readdir(folderPath, function(err, items) {
      if (err) {
        if (errorFunc) {
          errorFunc(err);
        }
      }

      items = items.map((itemName) => {
        return path.join(folderPath, itemName);
      });

      items.forEach((itemPath) => {
        result.push(itemPath);
        if (itemFunc) {
          itemFunc(itemPath);
        }
        if (fs.statSync(itemPath).isDirectory()) {
          readTopDir(itemPath);
        }
      });
      execCounter -= 1;
      if (execCounter === 0) {
        if (finishFunc) {
          finishFunc(result);
        }
      }
    });
  };
  readTopDir(folderPath);
};

module.exports = {
  readTopDirSync,
  readSubDirSync,
  readTopDir,
  readSubDir,
};
