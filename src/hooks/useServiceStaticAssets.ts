import { serviceData } from "../data/data";

export const useServiceStaticAssets = (serviceId: string) => {
  const thisServiceStaticData = serviceData[serviceId];

  return [...Array(thisServiceStaticData.imgSlideSize)].map(
    (_, index) =>
      `/assets/consultorias/${thisServiceStaticData.consultancyId}/${serviceId}/${serviceId}${index}.jpeg`
  );
};
