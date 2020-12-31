import { FilesystemDirectory, Plugins } from "@capacitor/core";
import fileType from "file-type";
import { isImage } from "../utils/isImage";
import { IsVideo } from "../utils/isVideo";
const { Filesystem } = Plugins;

export interface Media {
  filename: string;
  data: string;
  mediaType: "video" | "image" | "other";
}

const getMediaType = (filename: string) => {
  if (isImage(filename)) return "image";
  if (IsVideo(filename)) return "video";
  return "other";
};

export const getMediaFromDirectory = async (
  path: string,
  resultsAreFolders: boolean = false
): Promise<Media[] | undefined> => {
  if (path[path.length - 1] !== "/") path = path + "/";
  try {
    const result = await Filesystem.readdir({
      path,
      directory: FilesystemDirectory.External,
    });
    const mediaFiles: Media[] = [];
    if (resultsAreFolders) {
      for (let i = 0; i < result.files.length; i++) {
        const folder = result.files[i];
        const foldersFiles = await Filesystem.readdir({
          path: `${path}${folder}/`,
          directory: FilesystemDirectory.External,
        });
        for (let j = 0; j < foldersFiles.files.length; j++) {
          const f = foldersFiles.files[j];
          try {
            const file = await Filesystem.readFile({
              path: `${path}${folder}/${f}`,
              directory: FilesystemDirectory.External,
            });
            const mediaType = getMediaType(f);
            const mimeInfo = await fileType.fromBuffer(
              Buffer.from(file.data, "base64")
            );
            mediaFiles.push({
              filename: f,
              data: `data:${mimeInfo?.mime};base64,${file.data}`,
              mediaType,
            });
          } catch (error) {
            console.error("error trying to read file", error);
          }
        }
      }
    } else {
      for (let i = 0; i < result.files.length; i++) {
        const f = result.files[i];
        try {
          const file = await Filesystem.readFile({
            path: `${path}/${f}`,
            directory: FilesystemDirectory.External,
          });
          const mediaType = getMediaType(f);
          const mimeInfo = await fileType.fromBuffer(
            Buffer.from(file.data, "base64")
          );
          mediaFiles.push({
            filename: f,
            data: `data:${mimeInfo?.mime};base64,${file.data}`,
            mediaType,
          });
        } catch (error) {
          console.error("error trying to read file", error);
        }
      }
    }
    return mediaFiles;
  } catch (error) {
    console.error(`error trying to read path:${path}`, error);
    return undefined;
  }
};
