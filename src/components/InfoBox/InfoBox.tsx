import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./InfoBox.css";

export interface InfoBoxProps {
  title: string;
  text: string[];
  to: string;
  consultancyID: string;
  variant?: "default" | "reverse";
  expands?: boolean;
}

/**
 *
 * @param expands If this param is true then the arrow opens and closes the infobox, otherwise the arrows are used to naviget the infobox text.
 */
const InfoBox = ({
  title,
  to,
  text,
  consultancyID,
  variant = "default",
  expands = true,
}: InfoBoxProps) => {
  const [expanded, setExpanded] = useState(false);

  // TODO: handle text size... divide or smth

  return (
    <div id="infobox-stack">
      {expands ? (
        // Expanding infobox
        <>
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
            id={
              variant === "default" ? "infobox-title" : "infobox-title-reverse"
            }
          >
            <Link style={{ color: "black", textDecoration: "none" }} to={to}>
              {title}
            </Link>
          </div>
          <img
            className={
              variant === "default"
                ? "infobox-button"
                : "infobox-button-reverse"
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
            {text}
          </span>
        </>
      ) : (
        <>
          <img
            src={`/assets/consultorias/${consultancyID}/infobox.svg`}
            alt=""
          />
          <div
            id={
              variant === "default" ? "infobox-title" : "infobox-title-reverse"
            }
          >
            <Link style={{ color: "black", textDecoration: "none" }} to={to}>
              {title}
            </Link>
          </div>
          {text.length === 2 && (
            <img
              className={
                variant === "default"
                  ? "infobox-button"
                  : "infobox-button-reverse"
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
          )}
          <span
            id={variant === "default" ? "infobox-text" : "infobox-text-reverse"}
          >
            {text[expanded ? 1 : 0]}
          </span>
        </>
      )}
    </div>
  );
};

export default React.memo(InfoBox);
