import { IonContent, IonPage } from "@ionic/react";
import React from "react";
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
  topRightPhotos: string[];
  bottomRightPhotos: string[];
}

const Consultancy = ({
  consultancyId,
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
              mask={`/assets/consultorias/${consultancyId}/top-mask.svg`}
              image={`/assets/consultorias/${consultancyId}/ce/ce1.jpeg`}
              variant="top"
            />
          </div>
          <div id="bottom-left-stack">
            <MaskedImage
              mask={`/assets/consultorias/${consultancyId}/bottom-mask.svg`}
              image={`/assets/consultorias/${consultancyId}/ce/ce2.jpeg`}
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
