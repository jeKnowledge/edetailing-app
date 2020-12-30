import { consultancyData, serviceData } from "../data/data";
import { getServiceData } from "./getServiceData";

export const useStaticAssets = (consultancyId: string) => {
  if (consultancyData[consultancyId].centerInfoBox) {
    const service = consultancyData[consultancyId].centerInfoBox?.to;

    const centerServiceData = getServiceData(service as string);

    if (centerServiceData.type === "default")
      return [...Array(serviceData[service as string].imgSlideSize)].map(
        (_, index) =>
          `/assets/consultorias/${consultancyId}/${service}/${service}${index}.jpeg`
      );
    else return [];
  } else {
    const leftService = consultancyData[consultancyId].leftInfoBox?.to;
    const rightService = consultancyData[consultancyId].rightInfoBox?.to;

    const leftServiceData = getServiceData(leftService as string);
    const rightServiceData = getServiceData(rightService as string);

    const leftServiceImages =
      leftServiceData.type === "default"
        ? [...Array(serviceData[leftService as string].imgSlideSize)].map(
            (_, index) =>
              `/assets/consultorias/${consultancyId}/${leftService}/${leftService}${index}.jpeg`
          )
        : [];
    const rightServiceImages =
      rightServiceData.type === "default"
        ? [...Array(serviceData[rightService as string].imgSlideSize)].map(
            (_, index) =>
              `/assets/consultorias/${consultancyId}/${rightService}/${rightService}${index}.jpeg`
          )
        : [];

    return [...leftServiceImages, ...rightServiceImages];
  }
};
