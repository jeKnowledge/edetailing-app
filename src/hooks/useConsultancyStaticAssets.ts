import { consultancyData, serviceData } from "../data/data";

export const useConsultancyStaticAssets = (consultancyId: string) => {
  if (consultancyData[consultancyId].centerInfoBox) {
    const service = consultancyData[consultancyId].centerInfoBox?.to;
    return [...Array(serviceData[service as string].imgSlideSize)].map(
      (_, index) =>
        `/assets/consultorias/${consultancyId}/${service}/${service}${index}.jpeg`
    );
  } else {
    const leftService = consultancyData[consultancyId].leftInfoBox?.to;
    const rightService = consultancyData[consultancyId].rightInfoBox?.to;

    const leftServiceImages = [
      ...Array(serviceData[leftService as string].imgSlideSize),
    ].map(
      (_, index) =>
        `/assets/consultorias/${consultancyId}/${leftService}/${leftService}${index}.jpeg`
    );
    const rightServiceImages = [
      ...Array(serviceData[rightService as string].imgSlideSize),
    ].map(
      (_, index) =>
        `/assets/consultorias/${consultancyId}/${rightService}/${rightService}${index}.jpeg`
    );

    return [...leftServiceImages, ...rightServiceImages];
  }
};
