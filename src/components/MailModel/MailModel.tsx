import { IonCheckbox, IonItem, IonLabel, IonModal } from "@ionic/react";
import React, { useCallback, useMemo } from "react";
import { serviceData } from "../../data/data";
import "./MailModel.css";

interface MailModalProps {
  open: boolean;
  onClose: () => void;
  serviceId: string;
}

//estavas a faazer a Lamp modal e a ver como é que funciona o css daquilo
const MailModal = ({ onClose, open, serviceId }: MailModalProps) => {
  const checkboxList: { val: string; isChecked: boolean }[] = useMemo(
    () =>
      Object.keys(serviceData).map((s) => ({
        val: serviceData[s].name,
        isChecked: serviceId === s,
      })),
    [serviceId]
  );

  const emailsChecked = useCallback(
    (event) => {
      if (event.currentTarget.checked === false) {
        for (let i = 0; i < checkboxList.length; i++) {
          if (checkboxList[i].val === event.currentTarget.value) {
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
          if (checkboxList[i].val === event.currentTarget.value) {
            checkboxList[i].isChecked = event.currentTarget.checked;
          }
        }
      }
    },
    [checkboxList]
  );

  return (
    <IonModal
      isOpen={open}
      onDidDismiss={onClose}
      swipeToClose={true}
      cssClass="mail-model"
    >
      <div className="mail-modal-grey">
        <p className="mail-modal-title">
          <b className="mail-modal-color">SELECIONE A(S) CONSULTORIAS</b> (pode
          selecionar mais duas)
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.85 }}>
            {checkboxList.map(({ val, isChecked }, i) => (
              <IonItem className="mail-modal-item" key={i}>
                <IonCheckbox
                  className="mail-modal-check-box"
                  slot="start"
                  value={val}
                  checked={isChecked}
                  disabled={val === serviceData[serviceId].name}
                  mode="md"
                  onClick={emailsChecked}
                  key={i}
                />
                <IonLabel>{val}</IonLabel>
              </IonItem>
            ))}
          </div>
          <div style={{ flex: 0.15, alignSelf: "flex-end" }}>
            <button id="send-button">Enviar</button>
          </div>
        </div>
      </div>
    </IonModal>
  );
};

export default React.memo(MailModal);
