import wshFileSystemObject_js from './wshFileSystemObject.js';
import wshShell_js from './wshShell.js';
import forceCreateFolder_js from './forceCreateFolder.js';

const wshJs = {
  ...wshFileSystemObject_js,
  ...wshShell_js,
  ...forceCreateFolder_js,
};

export const {
  FileSystemObject,
  Shell,
  forceCreateFolder,
} = wshJs;

export default {
  FileSystemObject,
  Shell,
  forceCreateFolder,
};
