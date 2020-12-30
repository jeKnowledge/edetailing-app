import { FilesystemDirectory, Plugins } from "@capacitor/core";
const { Filesystem } = Plugins;

export const getMediaFromDirectory = async (
  path: string,
  resultsAreFolders: boolean = false
) => {
  if (path[path.length - 1] !== "/") path = path + "/";
  console.log(path);
  try {
    const result = await Filesystem.readdir({
      path,
      directory: FilesystemDirectory.External,
    });
    const mediaFiles: string[] = [];
    if (resultsAreFolders) {
      result.files.forEach(async (folder) => {
        const foldersFiles = await Filesystem.readdir({
          path: `${path}${folder}/`,
          directory: FilesystemDirectory.External,
        });
        foldersFiles.files.forEach(async (f) => {
          try {
            const file = await Filesystem.readFile({
              path: `${path}${folder}/${f}`,
              directory: FilesystemDirectory.External,
            });
            mediaFiles.push(`data:image/jpeg;base64,${file.data}`);
          } catch (error) {
            console.error("error trying to read file", error);
          }
        });
      });
    } else {
      result.files.forEach(async (f) => {
        try {
          const file = await Filesystem.readFile({
            path: `${path}/${f}`,
            directory: FilesystemDirectory.External,
          });
          mediaFiles.push(`data:image/jpeg;base64,${file.data}`);
        } catch (error) {
          console.error("error trying to read file", error);
        }
      });
    }
    return mediaFiles;
  } catch (error) {
    console.error(`error trying to read path:${path}`, error);
    return undefined;
  }
};
