import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import React, { useCallback } from "react";
import { useHistory } from "react-router";
import Chameleon from "../../components/Chameleon/Chameleon";
import HomeFloatingMenu from "../../components/HomeFloatingMenu";
import { getEmailsForLater } from "../../hooks/getEmailsForLater";
import { saveEmailForLater } from "../../hooks/saveEmailForLater";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const history = useHistory();
  const redirect = useCallback(
    (path: string) => {
      return history.push(path);
    },
    [history]
  );

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
            <IonImg
              id="signature"
              src="/assets/paula_prada/signature_paula.svg"
              alt="signature"
              onClick={() => redirect("/paulaprada")}
            />
          </div>
          <HomeFloatingMenu />
          <IonButton
            onClick={() => {
              saveEmailForLater({
                to: "goncalomrpereira@gmail.com",
                services: ["af", "ceo", "mp"],
              });
              // sendEmail({
              //   to: "goncalo_services@protonmail.com",
              //   services: ["", "2", "3"],
              // });
            }}
          >
            save Email
          </IonButton>
          <IonButton
            onClick={() => {
              getEmailsForLater();
            }}
          >
            view Emails
          </IonButton>
        </>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(HomePage);
