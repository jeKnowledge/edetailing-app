import { IonContent } from "@ionic/react";
import React from "react";
import ReactLoading from "react-loading";
import "./Loader.css";

const Loader = () => {
  return (
    <IonContent fullscreen id="loader-content">
      <div id="loader-container">
        <ReactLoading
          type="bubbles"
          color={"red"}
          height={"70%"}
          width={"50%"}
        />
      </div>
    </IonContent>
  );
};

export default React.memo(Loader);
