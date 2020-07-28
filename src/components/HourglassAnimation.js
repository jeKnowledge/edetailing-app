import React from "react";
import { IonIcon, IonLabel } from "@ionic/react";
import { hourglass as hourglassIcon } from "ionicons/icons";

function Hourglass({ timeService }) {
  return (
    <div className="hourglass-component">
      <IonLabel>{timeService}h</IonLabel>
      <IonIcon className="icon" icon={hourglassIcon} />
    </div>
  );
}

export default Hourglass;
