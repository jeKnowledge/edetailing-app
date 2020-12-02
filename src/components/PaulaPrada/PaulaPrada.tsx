import {
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React from "react";
import { paulaprada } from "../../data/data";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import "./PaulaPrada.css";

const PaulaPrada: React.FC = () => {
  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      <IonContent forceOverscroll={false} scrollY={false}>
        <ConsultancyFloatingMenu />
        <IonSlides>
          <IonSlide>
            <div id="page">
              <div className="content-forma">
                <IonLabel className="title-paula-prada">quem sou?</IonLabel>
                <IonImg
                  className="forma_paula_prada"
                  src="/assets/paula_prada_page/forma_paula_prada.svg"
                  alt=""
                />
                <div className="content-text-paula-prada">
                  <IonLabel className="text-paula-prada">
                    {paulaprada.textPaulaPrada?.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </IonLabel>
                </div>
                <IonImg
                  className="forma_esq"
                  src="/assets/paula_prada_page/forma_esq.svg"
                  alt=""
                />
              </div>
            </div>
          </IonSlide>
          <IonSlide className="ion-slide-left">
            <div id="page1">
              <div className="content-forma">
                <IonImg
                  className=""
                  src="/assets/paula_prada_page/forma_dir.svg"
                  alt=""
                />
                <div className="content-esq content-missao">
                  <IonLabel className="title-esq">
                    {paulaprada.text[0]}
                  </IonLabel>
                  <IonLabel className="text-esq">{paulaprada.text[1]}</IonLabel>
                </div>
                <div className="content-esq content-visao">
                  <IonLabel className="title-esq">
                    {paulaprada.text[2]}
                  </IonLabel>
                  <IonLabel className="text-esq">{paulaprada.text[3]}</IonLabel>
                </div>
                <div className="content-esq content-valores">
                  <IonLabel className="title-esq">
                    {paulaprada.text[4]}
                  </IonLabel>
                  <IonLabel className="text-esq">{paulaprada.text[5]}</IonLabel>
                </div>
              </div>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(PaulaPrada);
