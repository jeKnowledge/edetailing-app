import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./InfoBox.css";

export interface InfoBoxProps {
  title: string;
  text?: string;
  to: string;
  consultancyID: string;
  variant?: "default" | "reverse";
}

const InfoBox = ({
  title,
  to,
  consultancyID,
  text = "",
  variant = "default",
}: InfoBoxProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="infobox-stack">
      {expanded ? (
        <img
          className={variant === "default" ? "" : "infobox-reverse"}
          src={`/assets/consultorias/${consultancyID}/large-infobox.svg`}
          alt=""
        />
      ) : (
        <img
          className={variant === "default" ? "" : "infobox-reverse"}
          src={`/assets/consultorias/${consultancyID}/small-infobox.svg`}
          alt=""
        />
      )}
      <div
        id={variant === "default" ? "infobox-title" : "infobox-title-reverse"}
      >
        <Link style={{ color: "black", textDecoration: "none" }} to={to}>
          {title}
        </Link>
      </div>
      <img
        className={
          variant === "default" ? "infobox-button" : "infobox-button-reverse"
        }
        src={`/assets/consultorias/${consultancyID}/infobox-button.svg`}
        alt=""
        id={
          expanded
            ? variant === "default"
              ? "infobox-button-rotate"
              : "infobox-button-remove-rotate"
            : ""
        }
        onClick={() => setExpanded((prevState) => !prevState)}
      />
      <span
        id={variant === "default" ? "infobox-text" : "infobox-text-reverse"}
        className={expanded ? "show-infobox-text" : "hide-infobox-text"}
      >
        E se pudesse ter um profissional a fazer-lhe um acompanhamento
        personalizado para ajudar a identificar e trabalhar o seu estilo? Faça
        esta viagem do seu interior para o seu exterior.
      </span>
    </div>
  );
};

export default React.memo(InfoBox);
