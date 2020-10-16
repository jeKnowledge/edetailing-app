import React from "react";
import { Link } from "react-router-dom";
import "./InfoBox.css";

export interface InfoBoxProps {
  title: string;
  to: string;
}

const InfoBox = ({ title, to }: InfoBoxProps) => {
  return (
    <div>
      <Link id="infobox-link" to={to}>
        {title}
      </Link>
    </div>
  );
};

export default React.memo(InfoBox);
