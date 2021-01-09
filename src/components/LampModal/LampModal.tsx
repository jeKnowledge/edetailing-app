import { IonModal } from "@ionic/react";
import classNames from "classnames";
import React from "react";
import { ConsultancyData } from "../../data/data";
import "./LampModal.css";

interface LampModalProps {
  open: boolean;
  onClose: () => void;
  theme: string;
  lampData: ConsultancyData["lampData"];
}

//estavas a faazer a Lamp modal e a ver como é que funciona o css daquilo
const LampModal = ({ lampData, theme, onClose, open }: LampModalProps) => {
  return (
    <IonModal
      isOpen={open}
      onDidDismiss={onClose}
      swipeToClose={true}
      cssClass="lamp-modal"
    >
      <div className={classNames(`lamp-modal-${theme}`, "lamp-modal-base")}>
        <p id="lamp-modal-title">{lampData.title}</p>
        <span id="lamp-modal-text">{lampData.text}</span>
      </div>
    </IonModal>
  );
};

export default React.memo(LampModal);
