import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSlides,
  IonSlide,
  IonImg,
  IonLabel,
  IonText,
} from "@ionic/react";
import React, { useEffect, useMemo, useRef, useState } from "react";

const Consultoria: React.FC = () => {
  const imgs = useMemo(
    () => [
      "/assets/consultoria_estilo/img_example.png",
      "/assets/consultoria_estilo/ex.png",
    ],
    []
  );

  const [currentImg, setCurrentImg] = useState<number>(0);
  const currentImgRef = useRef(currentImg);
  currentImgRef.current = currentImg;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImg((currentImgRef.current + 1) % imgs.length);
      console.log((currentImgRef.current + 1) % imgs.length);
      console.log("olaaa");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding ion-content">
        <IonSlides>
          <IonSlide>
            <div className="slide-content">
              <div className="text-content text-content-esq">
                <div className="title-content title-content-esq">
                  <IonLabel className="title">benefícios</IonLabel>
                  <IonLabel className="title title-non-select">
                    o que inclui?
                  </IonLabel>
                </div>
              </div>
              <IonImg
                className="forma-branca forma-branca-esq"
                src="/assets/consultoria_estilo/forma_branca_esq.svg"
              />
              <div className="description-content">
                <div className="description">
                  <p className="description-text">Identificar o seu estilo;</p>
                  <p className="description-text">
                    Saber explorar os seus pontos fortes e camuflar os menos
                    positivos;
                  </p>
                  <p className="description-text">
                    Acompanhamento personalizado até ao objectivo definido;
                  </p>
                  <p className="description-text">
                    Organizar e coordenar o seu guarda-roupa.
                  </p>
                </div>
                <div className="setas">
                  <IonImg
                    className="setas-esq"
                    src="/assets/consultoria_estilo/seta_esq.svg"
                  />
                  <IonImg
                    className="setas-dir"
                    src="/assets/consultoria_estilo/seta_dir.svg"
                  />
                </div>
              </div>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="slide-content">
              <IonImg
                className="forma-branca forma-branca-dir"
                src="/assets/consultoria_estilo/forma_branca_dir.svg"
              />
              <IonImg className="img-inclui" src={imgs[currentImg]} />
              <span className="title title-dir">
                plano de identidade visual
              </span>
              <div className="text-content text-content-dir">
                <div className="title-content title-content-dir">
                  <IonLabel className="title title-non-select">
                    benefícios
                  </IonLabel>
                  <IonLabel className="title">o que inclui?</IonLabel>
                </div>
              </div>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Consultoria;
