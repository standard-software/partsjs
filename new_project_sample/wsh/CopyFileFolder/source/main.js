export const main = (parts) => {
  // console.log('parts version is ' + parts.VERSION);

  const pathFileFolders = [
    [
      '..\\..\\data\\test1\\source\\file\\test1_file.txt',
      '..\\..\\data\\test1\\dest\\file\\test1_file.txt',
    ],
    [
      '..\\..\\data\\test1\\source\\folder\\test1_folder',
      '..\\..\\data\\test1\\dest\\folder\\test1_folder',
    ],
  ];

  const fso = new ActiveXObject('Scripting.FileSystemObject');
  const shell = new ActiveXObject('WScript.Shell');

  const absoluteFileFolderPath = (fso, relativeFileFolderPath) => {
    return fso.GetAbsolutePathName(relativeFileFolderPath);
  };

  const forceCreateFolder = (fso, folderPath) => {
    const parentFolderPath = fso.GetParentFolderName(folderPath);
    if (!fso.FolderExists(parentFolderPath)) {
      forceCreateFolder(fso, parentFolderPath);
    }
    if (!fso.FolderExists(folderPath)) {
      fso.CreateFolder(folderPath);
    }
  };

  for (const [fromPath, toPath] of pathFileFolders) {
    const fromFullPath = absoluteFileFolderPath(fso, fromPath);
    const toFullPath = absoluteFileFolderPath(fso, toPath);

    if (fso.FileExists(fromPath)) {
      forceCreateFolder(fso, fso.GetParentFolderName(toFullPath));
      fso.CopyFile(fromFullPath, toFullPath, true);
    } else if (fso.FolderExists(fromPath)) {
      shell.Run(
        'robocopy ' +
        fromPath +
        ' ' +
        toPath +
        ' /MIR /XD node_modules'
        , 0, true,
      );
    } else {
      console.log(`It is not file or folder ${fromPath}`);
    }
  }

};

