import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import Chameleon from "../components/Chameleon/Chameleon";
import HomeFloatingMenu from "../components/HomeFloatingMenu";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const history = useHistory();
  const redirect = useCallback(() => {
    return history.push("/paulaprada");
  }, [history]);

  const test = useCallback(async () => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer M0m_VAkl-IIAAAAAAAAAAfEX_iD7hwQEiUTLi0EZcdT2toZIm9TB_DViOzVWpuos";
    axios.defaults.headers.common["Dropbox-API-Arg"] =
      '{"path": "/DOCS/citing.md"}';

    await axios.post("http://content.dropboxapi.com/2/files/download");
  }, []);

  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      <IonContent
        id="homepage"
        forceOverscroll={false}
        scrollY={false}
        className="ion-padding "
      >
        <>
          <div className="stack ">
            <div id="logo">
              <Chameleon id="main-chameleon" />
            </div>
            <IonImg
              id="signature"
              src="/assets/paula_prada/signature_paula.svg"
              alt="signature"
              onClick={() => redirect()}
            />
          </div>
          <HomeFloatingMenu isOpen={isOpen} updateIsOpen={setIsOpen} />
          <IonButton disabled onClick={test}>
            click me
          </IonButton>
        </>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(HomePage);
