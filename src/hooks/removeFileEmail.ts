import { FilesystemDirectory, Plugins } from "@capacitor/core";

const { Filesystem } = Plugins;

export const removeFileEmail = async (id: string) => {
  try {
    await Filesystem.deleteFile({
      path: "emails/" + id,
      directory: FilesystemDirectory.External,
    });
  } catch (error) {
    console.error("error deleting file", error);
  }
};
