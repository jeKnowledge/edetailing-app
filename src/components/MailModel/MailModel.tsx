import { IonCheckbox, IonItem, IonLabel, IonModal } from "@ionic/react";
import React, { useState } from "react";
import "./MailModel.css";

interface MailModalProps {
  open: boolean;
  onClose: () => void;
}

const checkboxList = [
  { val: "Consultoria Imagem Inteligente", isChecked: false },
  { val: "Consultoria Imagem Total Inteligente", isChecked: false },
  { val: "Consultoria de Análise Facial Detalhada", isChecked: false },
  { val: "Closet Detox", isChecked: false },
  { val: "Consultoria de Noivos", isChecked: false },
  { val: "Personal Shopping", isChecked: false },
  { val: "Consultoria Escolha de Óculos", isChecked: false },
  { val: "Maquilhagem Profissional ", isChecked: false },
  { val: "Formações e Palestras", isChecked: false },
];

//estavas a faazer a Lamp modal e a ver como é que funciona o css daquilo
const MailModal = ({ onClose, open }: MailModalProps) => {
  const [checked, setChecked] = useState(false);

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
        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem className="mail-modal-item" key={i}>
            <IonCheckbox
              className="mail-modal-check-box"
              slot="start"
              value={val}
              checked={isChecked}
              mode="md"
            />
            <IonLabel>{val}</IonLabel>
          </IonItem>
        ))}
      </div>
    </IonModal>
  );
};

export default React.memo(MailModal);