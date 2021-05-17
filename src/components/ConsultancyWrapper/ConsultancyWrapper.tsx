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
          serviceId= "cii"
          serviceIdDouble= "iit"
          variant={consultancyData["ip"].variant as "double"}
          rightInfoBox={consultancyData["ip"].rightInfoBox}
          leftInfoBox={consultancyData["ip"].leftInfoBox}
        />
      );
    case "cp":
      return (
        <Consultancy
          consultancyId="cp"
          serviceId= "cp"
          serviceIdDouble= ""
          variant={consultancyData["cp"].variant}
          centerInfoBox={consultancyData["cp"].centerInfoBox}
        />
      );
    case "af":
      return (
        <Consultancy
          consultancyId="af"
          serviceId= "af"
          serviceIdDouble= ""
          variant={consultancyData["af"].variant}
          centerInfoBox={consultancyData["af"].centerInfoBox}
        />
      );
    case "ps":
      return (
        <Consultancy
          consultancyId="ps"
          serviceId= "ps"
          serviceIdDouble= ""
          variant={consultancyData["ps"].variant}
          centerInfoBox={consultancyData["ps"].centerInfoBox}
        />
      );
    case "cd":
      return (
        <Consultancy
          consultancyId="cd"
          serviceId= "cd"
          serviceIdDouble= ""
          variant={consultancyData["cd"].variant}
          centerInfoBox={consultancyData["cd"].centerInfoBox}
        />
      );
    case "cn":
      return (
        <Consultancy
          consultancyId="cn"
          serviceId= "cn"
          serviceIdDouble= ""
          variant={consultancyData["cn"].variant}
          centerInfoBox={consultancyData["cn"].centerInfoBox}
        />
      );
    case "ceo":
      return (
        <Consultancy
          consultancyId="ceo"
          serviceId= "ceo"
          serviceIdDouble= ""
          variant={consultancyData["ceo"].variant}
          centerInfoBox={consultancyData["ceo"].centerInfoBox}
        />
      );
    case "fp":
      return (
        <Consultancy
          consultancyId="fp"
          serviceId= "fp"
          serviceIdDouble= ""
          variant={consultancyData["fp"].variant}
          centerInfoBox={consultancyData["fp"].centerInfoBox}
        />
      );
    case "mp":
      return (
        <Consultancy
          consultancyId="mp"
          serviceId= "mp"
          serviceIdDouble= ""
          variant={consultancyData["mp"].variant}
          centerInfoBox={consultancyData["mp"].centerInfoBox}
        />
      );
    default:
      return <HomePage />;
  }
};

export default React.memo(ConsultancyWrapper);
