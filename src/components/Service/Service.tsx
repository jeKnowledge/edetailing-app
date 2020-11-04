import {
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { serviceData, serviceToColor } from "../../data/data";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import "./Service.css";

const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};

export interface ServiceProps {
  serviceID: string;
}

const Service = ({ serviceID }: ServiceProps) => {
  const theme = useMemo(() => serviceToColor[serviceID], [serviceID]);

  const thisServiceData = useMemo(() => serviceData[serviceID], [serviceID]);

  const [currentImg, setCurrentImg] = useState<number>(0);
  const [currentTextSlide, setCurrentTextSlide] = useState<number>(0);
  const currentImgRef = useRef(currentImg);
  currentImgRef.current = currentImg;

  const forwardCurrentTextSlide = useCallback(() => {
    setCurrentTextSlide(
      mod(currentTextSlide + 1, thisServiceData.slideText.length)
    );
  }, [currentTextSlide, thisServiceData.slideText.length]);

  const backwardCurrentTextSlide = useCallback(() => {
    setCurrentTextSlide(
      mod(currentTextSlide - 1, thisServiceData.slideText.length)
    );
  }, [currentTextSlide, thisServiceData.slideText.length]);

  const updateSlideImage = useCallback(() => {
    setCurrentImg(
      (currentImgRef.current + 1) % thisServiceData.photosSlide.length
    );
  }, [thisServiceData.photosSlide.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateSlideImage();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [updateSlideImage]);

  useEffect(() => {
    console.log(thisServiceData.slideText, currentTextSlide);
  }, [currentTextSlide, thisServiceData.slideText]);

  return (
    <IonPage>
      <IonContent
        style={{}}
        fullscreen
        className={`ion-padding ion-content-${theme}`}
      >
        {/* FIXME: cant click this */}
        <ConsultancyFloatingMenu />
        <IonSlides>
          <IonSlide>
            <div className="slide-content">
              <div className="text-content text-content-esq">
                <div className="title-content title-content-esq">
                  <IonLabel className="title">benefícios</IonLabel>
                  <IonLabel className={`title title-non-select-${theme}`}>
                    o que inclui?
                  </IonLabel>
                </div>
              </div>
              <IonImg
                className="forma-branca forma-branca-esq"
                src="/assets/formas_geral/forma_branca_esq.svg"
                alt="forma branca esquerda"
              />
              <div className="description">
                {thisServiceData.slideText[currentTextSlide]?.map((t) => (
                  <p className="description-text" key={t}>
                    {t}
                  </p>
                ))}
              </div>
              <div className="setas">
                <IonImg
                  onClick={backwardCurrentTextSlide}
                  className="setas-esq"
                  src={`/assets/consultorias/${thisServiceData.consultancyId}/seta_esq.svg`}
                />
                <IonImg
                  onClick={forwardCurrentTextSlide}
                  className="setas-dir"
                  src={`/assets/consultorias/${thisServiceData.consultancyId}/seta_dir.svg`}
                />
              </div>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="slide-content">
              <IonImg
                className="forma-branca forma-branca-dir"
                src="/assets/formas_geral/forma_branca_dir.svg"
                alt="forma branca direita"
              />
              <IonImg
                className="img-inclui"
                src={thisServiceData.photosSlide[currentImg].img as string}
              />
              <div className="title-content-slide">
                <span className="title title-dir">
                  {/* plano de identidade visual */}
                  {thisServiceData.photosSlide[currentImg].label}
                </span>
              </div>
              <div className="text-content text-content-dir">
                <div className="title-content title-content-dir">
                  <IonLabel className={`title title-non-select-${theme}`}>
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

export default React.memo(Service);
