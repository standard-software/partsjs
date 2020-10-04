import wshFileSystemObjectJs from './wshFileSystemObject.js';
import wshShellJs from './wshShell.js';
import forceCreateFolderJs from './forceCreateFolder.js';

const wshJs = {
  ...wshFileSystemObjectJs,
  ...wshShellJs,
  ...forceCreateFolderJs,
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
