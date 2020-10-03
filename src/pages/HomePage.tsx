import { IonContent, IonImg, IonPage } from "@ionic/react";
import React from "react";
import Chameleon from "../components/Chameleon";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      <IonContent
        forceOverscroll={false}
        scrollY={false}
        className="ion-padding "
      >
        <div className="stack ">
          {/* <IonImg
            id="logo"
            src="/assets/paula_prada/logo_paula.svg"
            alt="logo"
          /> */}
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
      </IonContent>
    </IonPage>
  );
};

export default React.memo(HomePage);
