import { IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useState } from "react";
import Chameleon from "../components/Chameleon/Chameleon";
import HomeFloatingMenu from "../components/HomeFloatingMenu";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      <IonContent
        id="homepage"
        forceOverscroll={false}
        scrollY={false}
        className="ion-padding "
      >
        <>
          <div className="stack ">
            <div id="logo">
              <Chameleon id="main-chameleon" />
            </div>
            <div>
              <IonImg
                id="signature"
                src="/assets/paula_prada/signature_paula.svg"
                alt="signature"
              />
            </div>
          </div>
          <HomeFloatingMenu isOpen={isOpen} updateIsOpen={setIsOpen} />
        </>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(HomePage);
