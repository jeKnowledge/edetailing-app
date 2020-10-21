import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import InfoBox, { InfoBoxProps } from "../InfoBox/InfoBox";
import MaskedImage from "../MaskedImage/MaskedImage";
import "./Consultancy.css";

interface ConsultancyProps {
  variant: "single" | "double";
  leftInfoBox?: InfoBoxProps;
  rightInfoBox?: InfoBoxProps;
  centerInfoBox?: InfoBoxProps;
  topRightPhotos: string[];
  bottomRightPhotos: string[];
}

const Consultancy = ({
  variant,
  leftInfoBox,
  rightInfoBox,
  centerInfoBox,
  topRightPhotos,
  bottomRightPhotos,
}: ConsultancyProps) => {
  return (
    <IonPage>
      <IonContent forceOverscroll={false} scrollY={false}>
        <div id="page">
          <ConsultancyFloatingMenu />
          <div id="top-right-stack">
            <MaskedImage
              mask="/assets/consultorias/estilo_imagem_total/mask.svg"
              image="/assets/consultorias/estilo_imagem_total/butterfly.png"
            />
          </div>
          <div id="bottom-left-stack">
            <MaskedImage
              mask="/assets/consultorias/estilo_imagem_total/mask.svg"
              image="/assets/consultorias/estilo_imagem_total/butterfly.png"
            />
          </div>
          {variant === "double" ? (
            <>
              <div id="infobox-left">
                <InfoBox
                  title="I'm left infobox"
                  to={"/services/" + leftInfoBox?.to}
                />
              </div>
              <div id="infobox-right">
                <InfoBox
                  title="I'm right infobox"
                  to={"/services/" + rightInfoBox?.to}
                />
              </div>
            </>
          ) : (
            <div id="infobox-central">
              <InfoBox
                title="I'm central infobox"
                to={"/services/" + centerInfoBox?.to}
              />
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Consultancy);
