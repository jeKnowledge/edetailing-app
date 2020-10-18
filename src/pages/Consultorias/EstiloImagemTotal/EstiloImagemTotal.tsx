import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import ConsultancyFloatingMenu from "../../../components/ConsultancyFloatingMenu";
import InfoBox from "../../../components/InfoBox/InfoBox";
import MaskedImage from "../../../components/MaskedImage/MaskedImage";
import "./EstiloImagemTotal.css";

const EstiloImagemTotal: React.FC = () => {
  return (
    <IonPage>
      <IonContent
        style={{ backgroundColor: "red" }}
        forceOverscroll={false}
        scrollY={false}
      >
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
          <div id="infobox-1">
            <InfoBox title="I'm infobox 1" to="/tests/consultoria" />
          </div>
          <div id="infobox-2">
            <InfoBox title="I'm infobox 2" to="/tests/consultoria" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(EstiloImagemTotal);
