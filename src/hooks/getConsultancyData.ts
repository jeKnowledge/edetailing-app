import { consultancyDropboxName } from "../data/data";
import { getMediaFromDirectory, Media } from "./getMediaFromDirectory";

export const getConsultancyData = async (
  consultancyId: string
): Promise<Media[] | undefined> => {
  const consultancyDbxName = consultancyDropboxName[consultancyId];
  const path = `${consultancyDbxName}/`;
  try {
    const images = await getMediaFromDirectory(path, true);
    return images === undefined ? undefined : images;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
