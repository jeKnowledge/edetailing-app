import React from "react";
import { consultancyData, ConsultancyID } from "../../data/data";
import HomePage from "../../pages/Home/HomePage";
import Consultancy from "../Consultancy";

interface ConsultancyWrapperProps {
  consultancyId: ConsultancyID;
}

const ConsultancyWrapper = ({ consultancyId }: ConsultancyWrapperProps) => {
  switch (consultancyId) {
    case "ip":
      return (
        <Consultancy
          consultancyId="ip"
          variant={consultancyData["ip"].variant as "double"}
          rightInfoBox={consultancyData["ip"].rightInfoBox}
          leftInfoBox={consultancyData["ip"].leftInfoBox}
        />
      );
    case "cp":
      return (
        <Consultancy
          consultancyId="cp"
          variant={consultancyData["cp"].variant}
          centerInfoBox={consultancyData["cp"].centerInfoBox}
        />
      );
    case "af":
      return (
        <Consultancy
          consultancyId="af"
          variant={consultancyData["af"].variant}
          centerInfoBox={consultancyData["af"].centerInfoBox}
        />
      );
    case "ps":
      return (
        <Consultancy
          consultancyId="ps"
          variant={consultancyData["ps"].variant}
          centerInfoBox={consultancyData["ps"].centerInfoBox}
        />
      );
    case "cd":
      return (
        <Consultancy
          consultancyId="cd"
          variant={consultancyData["cd"].variant}
          centerInfoBox={consultancyData["cd"].centerInfoBox}
        />
      );
    case "cn":
      return (
        <Consultancy
          consultancyId="cn"
          variant={consultancyData["cn"].variant}
          centerInfoBox={consultancyData["cn"].centerInfoBox}
        />
      );
    case "ceo":
      return (
        <Consultancy
          consultancyId="ceo"
          variant={consultancyData["ceo"].variant}
          centerInfoBox={consultancyData["ceo"].centerInfoBox}
        />
      );
    case "fp":
      return (
        <Consultancy
          consultancyId="fp"
          variant={consultancyData["fp"].variant}
          centerInfoBox={consultancyData["fp"].centerInfoBox}
        />
      );
    case "mp":
      return (
        <Consultancy
          consultancyId="mp"
          variant={consultancyData["mp"].variant}
          centerInfoBox={consultancyData["mp"].centerInfoBox}
        />
      );
    default:
      return <HomePage />;
  }
};

export default React.memo(ConsultancyWrapper);
