import React from 'react';
import { IonIcon, IonLabel, IonTextarea, IonCol } from "@ionic/react";
import {
  hourglass as hourglassIcon,
} from "ionicons/icons";

function Hourglass({ timeService }) {
  return (
    <div class="hourglass-component">
      <IonLabel>{timeService}h</IonLabel>
      <IonIcon class="icon" icon={hourglassIcon} />
    </div>
  );
}

export default Hourglass;