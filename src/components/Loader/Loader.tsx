import { IonContent } from "@ionic/react";
import React, { useMemo } from "react";
import ReactLoading from "react-loading";
import { colors } from "../../data/data";
import "./Loader.css";

export interface Theme {
  id: string;
}

export interface Theme {}

const Loader = ({ id }: Theme) => {
  const theme = useMemo(() => colors[id], [id]);

  return (
    <IonContent fullscreen id="loader-content">
        <div id="loader-container">
          <ReactLoading
            type="bubbles"
            color={theme}
            height={"none"}
            width={"50%"}
          />
        </div>
      
    </IonContent>
  );
};

export default React.memo(Loader);
