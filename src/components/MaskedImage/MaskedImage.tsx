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

  return (
    <div className="image-stack">
      <img id={imageId} src={image} alt="" />
      <img src={mask} alt="" />
    </div>
  );
};

export default React.memo(MaskedImage);
