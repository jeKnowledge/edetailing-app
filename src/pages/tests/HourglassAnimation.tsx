import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Hourglass from "../../components/HourglassAnimation.js";

const HourglassAnimation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hourglass Animation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Hourglass timeService={6} />
      </IonContent>
    </IonPage>
  );
};

export default HourglassAnimation;
