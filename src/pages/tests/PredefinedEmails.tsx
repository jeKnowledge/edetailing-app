import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useCallback } from "react";
import { sendEmail } from "../../hooks/sendEmail";

const PredefinedEmails: React.FC = () => {
  const onEmailButtonClick = useCallback(async () => {
    try {
      await sendEmail({
        to: "goncalo_services@protonmail.com",
        mailTemplate: undefined,
      });
      // TODO: Message sent with success
    } catch (error) {
      console.error(error);
      if (error.response) console.error(error.response.body);
      // TODO: Message failed
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Predefined Emails</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={onEmailButtonClick}>SEND MAIL</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PredefinedEmails;
