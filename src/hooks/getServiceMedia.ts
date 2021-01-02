import {
  consultancyDropboxName,
  serviceData,
  serviceDropboxName,
} from "../data/data";
import { getMediaFromDirectory, Media } from "./getMediaFromDirectory";

export const getServiceMedia = async (
  serviceId: string
): Promise<Media[] | undefined> => {
  const thisServiceData = serviceData[serviceId];
  const serviceDbxName = serviceDropboxName[serviceId];
  const consultancyDbxName =
    consultancyDropboxName[thisServiceData.consultancyId];
  const path = `/${consultancyDbxName}/${serviceDbxName}/`;
  try {
    const images = await getMediaFromDirectory(path, false);
    return images === undefined ? undefined : images;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
