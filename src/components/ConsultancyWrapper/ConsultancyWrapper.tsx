import React from "react";
import { consultancyData, ConsultancyID } from "../../data/data";
import HomePage from "../../pages/HomePage";
import Consultancy from "../Consultancy";

interface ConsultancyWrapperProps {
  consultancyId: ConsultancyID;
}

const ConsultancyWrapper = ({ consultancyId }: ConsultancyWrapperProps) => {
  switch (consultancyId) {
    case "ce-it":
      return (
        <Consultancy
          variant={consultancyData["ce-it"].variant as "double"}
          bottomRightPhotos={consultancyData["ce-it"].bottomRightPhotos}
          topRightPhotos={consultancyData["ce-it"].topRightPhotos}
          rightInfoBox={consultancyData["ce-it"].rightInfoBox}
          leftInfoBox={consultancyData["ce-it"].leftInfoBox}
        />
      );
    case "cp":
      return (
        <Consultancy
          variant={consultancyData["cp"].variant}
          bottomRightPhotos={consultancyData["cp"].bottomRightPhotos}
          topRightPhotos={consultancyData["cp"].topRightPhotos}
          centerInfoBox={consultancyData["cp"].centerInfoBox}
        />
      );
    case "af":
      return (
        <Consultancy
          variant={consultancyData["af"].variant}
          bottomRightPhotos={consultancyData["af"].bottomRightPhotos}
          topRightPhotos={consultancyData["af"].topRightPhotos}
          centerInfoBox={consultancyData["af"].centerInfoBox}
        />
      );
    case "ps":
      return (
        <Consultancy
          variant={consultancyData["ps"].variant}
          bottomRightPhotos={consultancyData["ps"].bottomRightPhotos}
          topRightPhotos={consultancyData["ps"].topRightPhotos}
          centerInfoBox={consultancyData["ps"].centerInfoBox}
        />
      );
    case "cd":
      return (
        <Consultancy
          variant={consultancyData["cd"].variant}
          bottomRightPhotos={consultancyData["cd"].bottomRightPhotos}
          topRightPhotos={consultancyData["cd"].topRightPhotos}
          centerInfoBox={consultancyData["cd"].centerInfoBox}
        />
      );
    case "cn":
      return (
        <Consultancy
          variant={consultancyData["cn"].variant}
          bottomRightPhotos={consultancyData["cn"].bottomRightPhotos}
          topRightPhotos={consultancyData["cn"].topRightPhotos}
          centerInfoBox={consultancyData["cn"].centerInfoBox}
        />
      );
    case "ceo":
      return (
        <Consultancy
          variant={consultancyData["ceo"].variant}
          bottomRightPhotos={consultancyData["ceo"].bottomRightPhotos}
          topRightPhotos={consultancyData["ceo"].topRightPhotos}
          centerInfoBox={consultancyData["ceo"].centerInfoBox}
        />
      );
    case "fp":
      return (
        <Consultancy
          variant={consultancyData["fp"].variant}
          bottomRightPhotos={consultancyData["fp"].bottomRightPhotos}
          topRightPhotos={consultancyData["fp"].topRightPhotos}
          centerInfoBox={consultancyData["fp"].centerInfoBox}
        />
      );
    case "mp":
      return (
        <Consultancy
          variant={consultancyData["mp"].variant}
          bottomRightPhotos={consultancyData["mp"].bottomRightPhotos}
          topRightPhotos={consultancyData["mp"].topRightPhotos}
          centerInfoBox={consultancyData["mp"].centerInfoBox}
        />
      );
    default:
      return <HomePage />;
  }
};

export default React.memo(ConsultancyWrapper);
