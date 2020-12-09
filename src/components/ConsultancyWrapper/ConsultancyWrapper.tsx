import React, { useCallback } from "react";
import { consultancyData, ConsultancyID, serviceData } from "../../data/data";
import { getServiceData } from "../../hooks/getServiceData";
import HomePage from "../../pages/Home/HomePage";
import Consultancy from "../Consultancy";

interface ConsultancyWrapperProps {
  consultancyId: ConsultancyID;
}

const ConsultancyWrapper = ({ consultancyId }: ConsultancyWrapperProps) => {
  const generatePhotosUrl = useCallback(() => {
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
  }, [consultancyId]);

  switch (consultancyId) {
    case "ce-it":
      return (
        <Consultancy
          consultancyId="ce-it"
          variant={consultancyData["ce-it"].variant as "double"}
          photos={generatePhotosUrl()}
          rightInfoBox={consultancyData["ce-it"].rightInfoBox}
          leftInfoBox={consultancyData["ce-it"].leftInfoBox}
        />
      );
    case "cp":
      return (
        <Consultancy
          consultancyId="cp"
          variant={consultancyData["cp"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["cp"].centerInfoBox}
        />
      );
    case "af":
      return (
        <Consultancy
          consultancyId="af"
          variant={consultancyData["af"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["af"].centerInfoBox}
        />
      );
    case "ps":
      return (
        <Consultancy
          consultancyId="ps"
          variant={consultancyData["ps"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["ps"].centerInfoBox}
        />
      );
    case "cd":
      return (
        <Consultancy
          consultancyId="cd"
          variant={consultancyData["cd"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["cd"].centerInfoBox}
        />
      );
    case "cn":
      return (
        <Consultancy
          consultancyId="cn"
          variant={consultancyData["cn"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["cn"].centerInfoBox}
        />
      );
    case "ceo":
      return (
        <Consultancy
          consultancyId="ceo"
          variant={consultancyData["ceo"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["ceo"].centerInfoBox}
        />
      );
    case "fp":
      return (
        <Consultancy
          consultancyId="fp"
          variant={consultancyData["fp"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["fp"].centerInfoBox}
        />
      );
    case "mp":
      return (
        <Consultancy
          consultancyId="mp"
          variant={consultancyData["mp"].variant}
          photos={generatePhotosUrl()}
          centerInfoBox={consultancyData["mp"].centerInfoBox}
        />
      );
    default:
      return <HomePage />;
  }
};

export default React.memo(ConsultancyWrapper);
