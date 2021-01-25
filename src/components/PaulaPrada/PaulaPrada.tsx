import {
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { paulaprada, PaulaPradaData } from "../../data/data";
import { getPaulaPradaData } from "../../hooks/getPaulaPradaData";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import Loader from "../Loader";
import "./PaulaPrada.css";

const PaulaPrada: React.FC = () => {
  const staticPaulaPradaData = useMemo(() => paulaprada, []);

  const [isLoading, setIsLoading] = useState(true);

  const [isLoadingData, setIsLoadingData] = useState(true);

  const [paulaPradaData, setPaulaPradaData] = useState<PaulaPradaData>(
    staticPaulaPradaData
  );

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [isLoading]);

  const getPaulaPradaDataWrapper = useCallback(
    () =>
      getPaulaPradaData()
        .then((res) => {
          if (res) setPaulaPradaData(res);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoadingData(false)),
    []
  );

  useEffect(() => {
    getPaulaPradaDataWrapper();
  }, [getPaulaPradaDataWrapper]);

  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      {isLoading || isLoadingData ? (
        <Loader id={"paulaprada"} />
      ) : (
        <IonContent forceOverscroll={false} scrollY={false}>
          <ConsultancyFloatingMenu />
          <IonSlides>
            <IonSlide>
              <IonLabel className="title-quem-sou title-paula-prada">
                quem sou?
              </IonLabel>
              <IonImg
                className="forma_paula_prada"
                src="/assets/paula_prada_page/forma_paula_prada.png"
              />
              <div className="content-text-paula-prada">
                <IonLabel className="text text-paula-prada">
                  {paulaPradaData.textPaulaPrada?.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </IonLabel>
              </div>
              <IonImg
                className="forma_esq"
                src="/assets/paula_prada_page/forma_esq.png"
              />
            </IonSlide>
            <IonSlide className="ion-slide-left">
              <IonImg src="/assets/paula_prada_page/forma_dir.png" />
              <div className="content-dir content-missao">
                <IonLabel className="title-quem-sou title-quem-sou-dir">
                  {paulaPradaData.text[0].title}
                </IonLabel>
                <IonLabel className="text text-dir">
                  {paulaPradaData.text[0].text}
                </IonLabel>
              </div>
              <div className="content-dir content-visao">
                <IonLabel className="title-quem-sou title-quem-sou-dir">
                  {paulaPradaData.text[1].title}
                </IonLabel>
                <IonLabel className="text text-dir">
                  {paulaPradaData.text[1].text}
                </IonLabel>
              </div>
              <div className="content-dir content-valores">
                <IonLabel className="title-quem-sou title-quem-sou-dir">
                  {paulaPradaData.text[2].title}
                </IonLabel>
                <IonLabel className="text text-dir">
                  {paulaPradaData.text[2].text}
                </IonLabel>
              </div>
            </IonSlide>
          </IonSlides>
        </IonContent>
      )}
    </IonPage>
  );
};

export default React.memo(PaulaPrada);
