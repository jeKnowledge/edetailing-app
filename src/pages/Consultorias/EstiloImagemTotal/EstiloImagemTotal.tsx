import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import ConsultancyFloatingMenu from "../../../components/ConsultancyFloatingMenu";
import InfoBox from "../../../components/InfoBox/InfoBox";
import MaskedImage from "../../../components/MaskedImage/MaskedImage";
import "./EstiloImagemTotal.css";

const EstiloImagemTotal: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const history = useHistory();

  return (
    <IonPage>
      <IonContent forceOverscroll={false} scrollY={false}>
        <div id="page">
          <ConsultancyFloatingMenu
            isOpen={menuIsOpen}
            updateIsOpen={setMenuIsOpen}
            backButtonAction={() => history.goBack()}
            homeButtonAction={() => history.replace("/home")}
          />
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
