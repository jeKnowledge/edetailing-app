import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSlides,
  IonSlide,
} from "@ionic/react";
import React from "react";

const Consultoria: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Consultoria</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonSlides>
          <IonSlide>
            <p>Olá</p>
          </IonSlide>
          <IonSlide>
            <p>Tudo Bem</p>
          </IonSlide>
          <IonSlide>
            <p>Tudo Bem???</p>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Consultoria;