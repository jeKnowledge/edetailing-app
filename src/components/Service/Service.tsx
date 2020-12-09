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

  const [currentLabel, setcurrentLabel] = useState<number>(0);
  const [currentTextSlide, setCurrentTextSlide] = useState<number>(0);
  const [currentImg, setcurrentImg] = useState<number>(0);
  const currentLabelRef = useRef(currentLabel);
  const currentImgRef = useRef(currentImg);
  currentLabelRef.current = currentLabel;
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
    setcurrentLabel(
      (currentLabelRef.current + 1) % thisServiceData.labelsSlide.length
    );
  }, [thisServiceData.labelsSlide.length]);

  const updateSlideImg = useCallback(() => {
    setcurrentImg((currentImgRef.current + 1) % thisServiceData.imgSlideSize);
  }, [thisServiceData.imgSlideSize]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateSlideImage();
      updateSlideImg();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [updateSlideImage, updateSlideImg]);

  // DEBUG
  useEffect(() => {
    console.log(thisServiceData.slideText, currentTextSlide);
  }, [currentTextSlide, thisServiceData.slideText]);

  let title;
  if (thisServiceData.boasMasEscolhas) {
    title = (
      <IonLabel className={`title title-non-select-${theme}`}>
        boa/má escolha
      </IonLabel>
    );
  }

  let slide;
  if (thisServiceData.boasMasEscolhas) {
    slide = (
      <IonSlide>
        <div className="text-content text-content-esq">
          <div className="title-content title-content-esq">
            <IonLabel className={`title title-non-select-${theme}`}>
              benefícios
            </IonLabel>
            <IonLabel className={`title title-non-select-${theme}`}>
              o que inclui?
            </IonLabel>
            <IonLabel className="title">boa/má escolha</IonLabel>
          </div>
        </div>

        <IonImg
          className="forma-boa-ma"
          src="/assets/formas_geral/forma_ma_boa.svg"
        />
        <div className="content-boa-ma-escolha">
          <div className="content-boa-escolha">
            <p className="title-boa-ma-escolha style-boa-ma-escolha">
              Boa Escolha de cores:
            </p>
            <div className="text-boa-ma-escolha style-boa-ma-escolha">
              {thisServiceData.boasMasText[0]?.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
          <div className="content-ma-escolha">
            <p className="title-boa-ma-escolha style-boa-ma-escolha">
              Má Escolha de cores:
            </p>
            <div className="text-boa-ma-escolha style-boa-ma-escolha">
              {thisServiceData.boasMasText[1]?.map((a) => (
                <p key={a}>{a}</p>
              ))}
            </div>
          </div>
        </div>
      </IonSlide>
    );
  }

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
                  {title}
                </div>
              </div>
              <IonImg
                className="forma-branca forma-branca-esq"
                src="/assets/formas_geral/forma_branca_esq.png"
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
                src="/assets/formas_geral/forma_branca_dir.png"
                alt="forma branca direita"
              />
              <IonImg
                className="img-inclui"
                src={`/assets/consultorias/${thisServiceData.consultancyId}/${serviceID}/${serviceID}${currentImg}.jpeg`}
              />
              <div className="title-content-slide">
                <span className="title title-dir">
                  {/* plano de identidade visual */}
                  {thisServiceData.labelsSlide[currentLabel]}
                </span>
              </div>
              <div className="text-content text-content-dir">
                <div className="title-content title-content-dir">
                  <IonLabel className={`title title-non-select-${theme}`}>
                    benefícios
                  </IonLabel>
                  <IonLabel className="title">o que inclui?</IonLabel>
                  {title}
                </div>
              </div>
            </div>
          </IonSlide>
          {slide}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Service);
