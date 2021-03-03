import { NetworkStatus, Plugins } from "@capacitor/core";
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonLabel,
  IonPage,
} from "@ionic/react";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "../../components/Loader/index";
import { getEmailsForLater } from "../../hooks/getEmailsForLater";
import { removeFileEmail } from "../../hooks/removeFileEmail";
import { sendEmail } from "../../hooks/sendEmail";
import OtherPagesFloatingMenu from "../OtherPagesFloatingMenu";
import "./PendingEmails.css";

const { Network } = Plugins;

interface Email {
  id: string;
  to: string;
  services: string[];
  timeOfWrite: string;
}

const PendingEmails = () => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [sendEmails, setSendEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const [netStatus, setNetStatus] = useState<NetworkStatus | undefined>(
    undefined
  );

  const handler = Network.addListener("networkStatusChange", (status) => {
    console.log("Network status changed", netStatus);
    setNetStatus(status);
  });

  const getNetworkStatus = useCallback(() => {
    Network.getStatus()
      .then((s) => setNetStatus(s))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getNetworkStatus();
  }, [getNetworkStatus]);

  useEffect(() => {
    return () => {
      handler.remove();
    };
  }, [handler]);

  const getEmails = useCallback(
    () =>
      getEmailsForLater()
        .then((res) => {
          if (res) {
            res.forEach((r) => {
              setEmails((prevEmails) => [...prevEmails, r]);
            });
          }
        })
        .catch((error) => {
          console.error(error);
        }),
    [setEmails]
  );

  useEffect(() => {
    getEmails();
  }, [getEmails]);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [setLoading]);

  //Fazer uma lista com os emails todos que estejam checked
  const emailsChecked = useCallback(
    (event) => {
      for (let i = 0; i < emails.length; i++) {
        if (emails[i].id === event.currentTarget.value) {
          //Adiciona o email ao sendEmails
          if (event.currentTarget.checked === true) {
            setSendEmails((prevEmails) => [...prevEmails, emails[i]]);
          }
          //Retira o email sa lista sendEmails se retirar o checked
          else {
            const name = emails[i].id;
            setSendEmails(sendEmails.filter((item) => item.id !== name));
          }
        }
      }
    },
    [emails, sendEmails, setSendEmails]
  );

  //Envia todos os que estejam na lista
  const onSendClick = useCallback(() => {
    if (netStatus?.connected) {
      sendEmails.forEach((email) => {
        sendEmail({
          to: email.to,
          services: email.services,
        });
        removeFileEmail(email.id);
      });
      setEmails((prevEmails) =>
        prevEmails.filter((e) => !sendEmails.find((se) => se.id === e.id))
      );
    }
  }, [netStatus, sendEmails, setEmails]);

  return (
    <IonPage>
      {loading ? (
        <Loader id={"paulaprada"} />
      ) : (
        <IonContent>
          <div id="content">
            <OtherPagesFloatingMenu />
            <div id="box">
              <IonLabel className="title-emails title">
                e-mails pendentes
              </IonLabel>
              <div className="row first-row">
                <div className="style-emails email-column">e-mail</div>
                <div className="style-emails">data e hora</div>
              </div>
              <div className="box-emails">
                {emails?.map((email) => (
                  <div className="row" key={email.id}>
                    <IonCheckbox
                      className="check-box"
                      slot="start"
                      mode="md"
                      value={email.id}
                      onClick={emailsChecked}
                    />
                    <div className="box box-email">{email.to}</div>
                    <div className="box">{email.timeOfWrite}</div>
                  </div>
                ))}
              </div>
            </div>
            {netStatus?.connected && emails?.length !== 0 ? (
              <IonButton id="download-button" onClick={onSendClick}>
                <IonLabel id="download-button-style">Enviar</IonLabel>
              </IonButton>
            ) : undefined}
          </div>
        </IonContent>
      )}
    </IonPage>
  );
};

export default React.memo(PendingEmails);
