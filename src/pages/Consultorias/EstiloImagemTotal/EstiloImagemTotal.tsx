import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./EstiloImagemTotal.css";

const EstiloImagemTotal: React.FC = () => {
  return (
    <IonPage>
      <IonContent forceOverscroll={false} scrollY={false}>
        <div id="page">
          <div id="floating-button">
            <button onClick={() => alert("menu")}>
              <img src="/assets/menu-icon.svg" alt="menu"></img>
            </button>
          </div>
          <div id="top-right-stack">
            <div className="image-stack"></div>
          </div>
          <div id="bottom-left-stack">I'm bottom left image</div>
          <div id="infobox-1">I'm infobox 1</div>
          <div id="infobox-2">I'm infobox 2</div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EstiloImagemTotal;
