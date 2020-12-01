import { serviceData } from "../data/data";
export const getServiceData = (
  serviceId: string
): { type: "default" | "fs"; nImages: number } => {
  // retrieve data from filesystem or default to data.ts constt
  return {
    type: "default",
    nImages: serviceData[serviceId].imgSlideSize,
  };
};
