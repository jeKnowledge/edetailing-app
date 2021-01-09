import React, { useCallback, useEffect, useRef, useState } from "react";
import MaskedImage from "../MaskedImage/MaskedImage";

interface MaskedCarrouselProps {
  images: string[];
  mask: string;
}

const MaskedCarrousel = ({ images, mask }: MaskedCarrouselProps) => {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const currentImgRef = useRef(currentImg);
  currentImgRef.current = currentImg;

  const updateSlideImage = useCallback(() => {
    setCurrentImg((currentImgRef.current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateSlideImage();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [updateSlideImage]);

  return <MaskedImage image={images[currentImg]} mask={mask} />;
};

export default MaskedCarrousel;
