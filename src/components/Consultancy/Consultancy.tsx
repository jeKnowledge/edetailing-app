import { IonContent, IonPage } from "@ionic/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import InfoBox, { InfoBoxProps } from "../InfoBox/InfoBox";
import MaskedImage from "../MaskedImage/MaskedImage";
import "./Consultancy.css";

interface ConsultancyProps {
  consultancyId: string;
  variant: "single" | "double";
  leftInfoBox?: InfoBoxProps;
  rightInfoBox?: InfoBoxProps;
  centerInfoBox?: InfoBoxProps;
  photos: string[];
}

const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};

const Consultancy = ({
  consultancyId,
  variant,
  leftInfoBox,
  rightInfoBox,
  centerInfoBox,
  photos,
}: ConsultancyProps) => {
  console.log(photos);

  const [currentTopImg, setCurrentTopImg] = useState<number>(0);
  const [currentBottomImg, setCurrentBottomImg] = useState<number>(
    photos.length - 1
  );

  const currentTopImgRef = useRef(currentTopImg);
  const currentBottomImgRef = useRef(currentBottomImg);

  currentTopImgRef.current = currentTopImg;
  currentBottomImgRef.current = currentBottomImg;

  const updateSlideImg = useCallback(() => {
    setCurrentTopImg(mod(currentTopImgRef.current + 1, photos.length));
    setCurrentBottomImg(mod(currentBottomImgRef.current - 1, photos.length));
  }, [photos.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateSlideImg();
    }, 4500);
    return () => {
      clearTimeout(timer);
    };
  }, [currentBottomImg, photos, updateSlideImg]);

  return (
    <IonPage>
      <IonContent forceOverscroll={false} scrollY={false}>
        <div id="page">
          <ConsultancyFloatingMenu />
          <div id="top-right-stack">
            <MaskedImage
              mask={`/assets/consultorias/${consultancyId}/top-mask.svg`}
              image={photos[currentTopImg]}
              variant="top"
            />
          </div>
          <div id="bottom-left-stack">
            <MaskedImage
              mask={`/assets/consultorias/${consultancyId}/bottom-mask.svg`}
              image={photos[currentBottomImg]}
              variant="bottom"
            />
          </div>
          {variant === "double" ? (
            <>
              <div id="infobox-left">
                <InfoBox
                  title={leftInfoBox?.title as string}
                  to={"/services/" + leftInfoBox?.to}
                  consultancyID={leftInfoBox?.consultancyID as string}
                />
              </div>
              <div id="infobox-right">
                <InfoBox
                  title={rightInfoBox?.title as string}
                  to={"/services/" + rightInfoBox?.to}
                  consultancyID={rightInfoBox?.consultancyID as string}
                  variant="reverse"
                />
              </div>
            </>
          ) : (
            <div id="infobox-central">
              <InfoBox
                title={centerInfoBox?.title as string}
                to={"/services/" + centerInfoBox?.to}
                consultancyID={centerInfoBox?.consultancyID as string}
              />
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Consultancy);
