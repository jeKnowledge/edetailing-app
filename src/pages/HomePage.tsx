import { IonContent, IonPage, IonImg } from "@ionic/react";
import React from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      <IonContent forceOverscroll={false} scrollY={false} class="ion-padding ">
        <div className="stack ">
          <IonImg
            id="logo"
            src="/assets/paula_prada/logo_paula.svg"
            alt="logo"
          />
          <IonImg
            id="signature"
            src="/assets/paula_prada/signature_paula.svg"
            alt="signature"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
