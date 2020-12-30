// import { Plugins } from "@capacitor/core";
import { consultancyDropboxName } from "../data/data";
import { getMediaFromDirectory } from "./getMediaFromDirectory";
import { useStaticAssets } from "./useStaticAssets";
// const { Filesystem } = Plugins;

export const getConsultancyData = async (
  consultancyId: string
): Promise<string[]> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const staticAssetPhotos = useStaticAssets(consultancyId);
  const consultancyDbxName = consultancyDropboxName[consultancyId];
  const path = `${consultancyDbxName}/`;
  try {
    const images = await getMediaFromDirectory(path, true);
    return images ?? staticAssetPhotos;
  } catch (error) {
    console.error(error);
    return staticAssetPhotos;
  }
};
