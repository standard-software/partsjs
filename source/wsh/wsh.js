import wshFileSystemObject_js from './wshFileSystemObject.js';
import wshShell_js from './wshShell.js';
import forceCreateFolder_js from './forceCreateFolder.js';

export const {
  FileSystemObject,
} = wshFileSystemObject_js;

export const {
  Shell,
} = wshShell_js;

export const {
  forceCreateFolder,
} = forceCreateFolder_js;

export default {
  ...wshFileSystemObject_js,
  ...wshShell_js,
  ...forceCreateFolder_js,
};
