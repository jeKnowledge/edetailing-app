import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonLabel,
  IonPage,
} from "@ionic/react";
import React from "react";
import OtherPagesFloatingMenu from "../OtherPagesFloatingMenu";
import "./PendingEmails.css";

const PendingEmails = () => {
  return (
    <IonPage>
      <IonContent>
        <div id="content">
          <OtherPagesFloatingMenu />
          <div id="box">
            <IonLabel className="title"> e-mails pendentes</IonLabel>
            <div className="row first-row">
              <div className="style email-column">e-mail</div>
              <div className="style">data e hora</div>
            </div>
            <div className="box-emails">
              <div className="row">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">mmmmmmmmmm@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">aaaaaaaaa@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">fffffffffff@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">mmmmmmmmmm@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">aaaaaaaaa@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">fffffffffff@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">mmmmmmmmmm@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">aaaaaaaaa@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">fffffffffff@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">mmmmmmmmmm@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">aaaaaaaaa@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
              <div className="row ">
                <IonCheckbox className="check-box" slot="start" mode="md" />
                <div className="box box-email">fffffffffff@gmail.com</div>
                <div className="box">01/01/21 - 18h</div>
              </div>
            </div>
          </div>
          <IonButton id="download-button">
            <IonLabel id="download-button-style">Enviar</IonLabel>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(PendingEmails);
