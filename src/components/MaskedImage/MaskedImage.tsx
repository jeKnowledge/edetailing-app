import React, { useMemo } from "react";
import "./MaskedImage.css";

export interface MaskedImageProps {
  mask: string;
  image: string;
  variant?: "top" | "bottom" | "default";
}

const MaskedImage = ({
  mask,
  image,
  variant = "default",
}: MaskedImageProps) => {
  const imageId: string = useMemo(() => {
    if (variant === "default") return "";
    else if (variant === "top") return "top-image";
    else return "bottom-image";
  }, [variant]);

  const maskId: string = useMemo(() => {
    if (variant === "default") return "";
    else if (variant === "top") return "top-mask";
    else return "bottom-mask";
  }, [variant]);

  return (
    <div className="image-stack">
      <img className="auto-slider" id={imageId} src={image} alt="" />
      <img id={maskId} src={mask} alt="" />
    </div>
  );
};

export default React.memo(MaskedImage);
