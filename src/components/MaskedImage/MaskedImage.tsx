import React from "react";
import "./MaskedImage.css";

export interface MaskedImageProps {
  mask: string;
  image: string;
}

const MaskedImage = ({ mask, image }: MaskedImageProps) => {
  return (
    <div className="image-stack">
      <img src={image} alt=""></img>
      <img src={mask} alt=""></img>
    </div>
  );
};

export default React.memo(MaskedImage);
