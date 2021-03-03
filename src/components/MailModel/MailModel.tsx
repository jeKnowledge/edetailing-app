import { NetworkStatus, Plugins } from "@capacitor/core";
import {
  IonCheckbox,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonToast,
} from "@ionic/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import validator from "validator";
import { serviceData } from "../../data/data";
import { saveEmailForLater } from "../../hooks/saveEmailForLater";
import { sendEmail } from "../../hooks/sendEmail";
import "./MailModel.css";

const { Network } = Plugins;

interface MailModalProps {
  open: boolean;
  onClose: () => void;
  serviceId: string;
}

//estavas a faazer a Lamp modal e a ver como é que funciona o css daquilo
const MailModal = ({ onClose, open, serviceId }: MailModalProps) => {
  const [toEmail, setToEmail] = useState<string>("");
  const [showError, setShowError] = useState(false);

  const updateToEmail = useCallback((e) => setToEmail(e.detail.value), []);

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

  const checkboxList: {
    label: string;
    value: string;
    isChecked: boolean;
  }[] = useMemo(
    () =>
      Object.keys(serviceData).map((s) => ({
        label: serviceData[s].name,
        value: s,
        isChecked: serviceId === s,
      })),
    [serviceId]
  );

  const emailsChecked = useCallback(
    (event) => {
      if (event.currentTarget.checked === false) {
        for (let i = 0; i < checkboxList.length; i++) {
          if (checkboxList[i].value === event.currentTarget.value) {
            checkboxList[i].isChecked = event.currentTarget.checked;
          }
        }
      }
      let numberChecked = 0;
      for (let i = 0; i < checkboxList.length; i++) {
        if (checkboxList[i].isChecked === true) {
          numberChecked = numberChecked + 1;
        }
      }

      if (numberChecked === 3) {
        event.currentTarget.checked = false;
      } else {
        for (let i = 0; i < checkboxList.length; i++) {
          if (checkboxList[i].value === event.currentTarget.value) {
            checkboxList[i].isChecked = event.currentTarget.checked;
          }
        }
      }
    },
    [checkboxList]
  );

  const onSendClick = useCallback(() => {
    if (!validator.isEmail(toEmail)) {
      setShowError(true);
      return;
    }

    const servicesList: {
      label: string;
      value: string;
      isChecked: boolean;
    }[] = checkboxList.filter((c) => c.isChecked === true);

    if (netStatus?.connected) {
      // send
      sendEmail({
        to: toEmail,
        services: servicesList.map((c) => c.value),
      });
    } else {
      //queue
      saveEmailForLater({
        to: toEmail,
        services: servicesList.map((c) => c.value),
      });
    }
    onClose();
    setToEmail("");
  }, [checkboxList, netStatus, onClose, toEmail]);

  return (
    <IonModal
      isOpen={open}
      onDidDismiss={onClose}
      swipeToClose={true}
      cssClass="mail-model"
    >
      <div className="mail-modal-grey">
        <IonInput
          placeholder="Email"
          value={toEmail}
          type="email"
          onIonChange={updateToEmail}
          className="mail-modal-input"
        ></IonInput>
        <p className="mail-modal-title">
          <b className="mail-modal-color">SELECIONE A(S) CONSULTORIAS</b> (pode
          selecionar mais duas)
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.75 }}>
            {checkboxList.map(({ value, label, isChecked }, i) => (
              <IonItem className="mail-modal-item" key={i}>
                <IonCheckbox
                  className="mail-modal-check-box"
                  slot="start"
                  value={value}
                  checked={isChecked}
                  disabled={value === serviceId}
                  mode="md"
                  onClick={emailsChecked}
                  key={i}
                />
                <IonLabel>{label}</IonLabel>
              </IonItem>
            ))}
          </div>
          <div style={{ flex: 0.25, alignSelf: "flex-end" }}>
            <button id="send-button" onClick={onSendClick}>
              {netStatus?.connected ? "Enviar" : "Enviar mais tarde"}
            </button>
          </div>
        </div>
      </div>
      <IonToast
        isOpen={showError}
        onDidDismiss={() => setShowError(false)}
        duration={1000}
        color="danger"
        message="O email introduzido não é válido"
      />
    </IonModal>
  );
};

export default React.memo(MailModal);
