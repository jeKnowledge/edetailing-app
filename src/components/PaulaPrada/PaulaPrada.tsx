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
            <IonLabel className="title-quem-sou title-paula-prada">
              quem sou?
            </IonLabel>
            <IonImg
              className="forma_paula_prada"
              src="/assets/paula_prada_page/forma_paula_prada.svg"
            />
            <div className="content-text-paula-prada">
              <IonLabel className="text text-paula-prada">
                {paulaprada.textPaulaPrada?.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </IonLabel>
            </div>
            <IonImg
              className="forma_esq"
              src="/assets/paula_prada_page/forma_esq.svg"
            />
          </IonSlide>
          <IonSlide className="ion-slide-left">
            <IonImg src="/assets/paula_prada_page/forma_dir.svg" />
            <div className="content-dir content-missao">
              <IonLabel className="title-quem-sou title-quem-sou-dir">
                {paulaprada.text[0].title}
              </IonLabel>
              <IonLabel className="text text-dir">
                {paulaprada.text[0].text}
              </IonLabel>
            </div>
            <div className="content-dir content-visao">
              <IonLabel className="title-quem-sou title-quem-sou-dir">
                {paulaprada.text[1].title}
              </IonLabel>
              <IonLabel className="text text-dir">
                {paulaprada.text[1].text}
              </IonLabel>
            </div>
            <div className="content-dir content-valores">
              <IonLabel className="title-quem-sou title-quem-sou-dir">
                {paulaprada.text[2].title}
              </IonLabel>
              <IonLabel className="text text-dir">
                {paulaprada.text[2].text}
              </IonLabel>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(PaulaPrada);
