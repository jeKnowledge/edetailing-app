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
import { serviceData, ServiceData, serviceToColor } from "../../data/data";
import { getServiceData } from "../../hooks/getServiceData";
import { getServiceMedia } from "../../hooks/getServiceMedia";
import { useServiceStaticAssets } from "../../hooks/useServiceStaticAssets";
import { isImage } from "../../utils/isImage";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import Loader from "../Loader";
import MailModal from "../MailModel/MailModel";
import "./Service.css";

const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};

export interface ServiceProps {
  serviceID: string;
}

const Service = ({ serviceID }: ServiceProps) => {
  const theme = useMemo(() => serviceToColor[serviceID], [serviceID]);
  const staticAssets = useServiceStaticAssets(serviceID);
  const staticServiceData = useMemo(() => serviceData[serviceID], [serviceID]);

  const [photos, setPhotos] = useState<string[]>(staticAssets);
  const [thisServiceData, setThisServiceData] = useState<ServiceData>(
    staticServiceData
  );
  const [loading, setLoading] = useState<{
    data: boolean;
    media: boolean;
  }>({ data: true, media: true });
  const [currentLabel, setcurrentLabel] = useState<number>(0);
  const [currentTextSlide, setCurrentTextSlide] = useState<number>(0);
  const [currentImg, setcurrentImg] = useState<number>(0);
  const currentLabelRef = useRef(currentLabel);
  const currentImgRef = useRef(currentImg);

  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  currentLabelRef.current = currentLabel;
  currentImgRef.current = currentImg;

  const slideText: string[][] = useMemo(() => {
    let j,
      k = 0,
      i = 0;

    const array: string[][] = [];
    if (mod(thisServiceData.slideText.length, 3) !== 1) {
      for (i; i < Math.round(thisServiceData.slideText.length / 3); i++) {
        j = 0;
        array.push([]);
        for (k; k < thisServiceData.slideText.length; k++) {
          array[i].push(thisServiceData.slideText[k]);
          j++;
          if (j === 3) {
            k = k + 1;
            break;
          }
        }
      }
    } else {
      for (i; i < Math.round(thisServiceData.slideText.length / 3) - 1; i++) {
        j = 0;
        array.push([]);
        for (k; k < thisServiceData.slideText.length; k++) {
          array[i].push(thisServiceData.slideText[k]);
          j++;
          if (j === 3) {
            k = k + 1;
            break;
          }
        }
      }

      for (i; i < Math.round(thisServiceData.slideText.length / 3) + 1; i++) {
        j = 0;
        array.push([]);
        for (k; k < thisServiceData.slideText.length; k++) {
          array[i].push(thisServiceData.slideText[k]);
          console.log(thisServiceData.slideText[k]);
          j++;
          if (j === 2) {
            k = k + 1;
            break;
          }
        }
      }
    }
    return array;
  }, [thisServiceData.slideText]);

  const getServiceMediaWrapper = useCallback(() => {
    getServiceMedia(serviceID)
      .then((res) => {
        if (res !== undefined) {
          const photosFs: string[] = res
            .filter((file) => isImage(file.filename))
            .map((pair) => pair.data);

          // update photos here
          if (photosFs.length > 0) {
            setPhotos(photosFs);
            currentImgRef.current = 0;
            setcurrentImg(0);
          }
        }
      })
      .catch((error) => console.error(error))
      .finally(() =>
        setLoading((prevL) => ({ media: false, data: prevL.data }))
      );
  }, [serviceID]);

  const getServiceDataWrapper = useCallback(
    () =>
      getServiceData(serviceID)
        .then((res) => {
          if (res) setThisServiceData(res);

          setCurrentTextSlide(0);
          setcurrentLabel(0);
          currentLabelRef.current = 0;
        })
        .catch((error) => console.error(error))
        .finally(() =>
          setLoading((prevL) => ({ data: false, media: prevL.media }))
        ),
    [serviceID]
  );

  useEffect(() => {
    getServiceMediaWrapper();
  }, [getServiceMediaWrapper]);

  useEffect(() => {
    getServiceDataWrapper();
  }, [getServiceDataWrapper]);

  const forwardCurrentTextSlide = useCallback(() => {
    setCurrentTextSlide(mod(currentTextSlide + 1, slideText.length));
  }, [currentTextSlide, slideText.length]);

  const backwardCurrentTextSlide = useCallback(() => {
    setCurrentTextSlide(mod(currentTextSlide - 1, slideText.length));
  }, [currentTextSlide, slideText.length]);

  const updateSlideImage = useCallback(() => {
    setcurrentLabel(
      (currentLabelRef.current + 1) % thisServiceData.labelsSlide.length
    );
  }, [thisServiceData.labelsSlide.length]);

  const updateSlideImg = useCallback(() => {
    setcurrentImg((currentImgRef.current + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateSlideImage();
      updateSlideImg();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [updateSlideImage, updateSlideImg]);

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

  const [isLoading, setIsLoading] = useState(true);

  const isLoadingData = useMemo(() => loading.data || loading.media, [
    loading.data,
    loading.media,
  ]);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [setIsLoading]);

  return (
    <IonPage>
      {isLoading || isLoadingData ? (
        <Loader id={serviceID} />
      ) : (
        <IonContent fullscreen className={`ion-padding ion-content-${theme}`}>
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
                  {slideText[currentTextSlide]?.map((t) => (
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
                <IonImg
                  className="mailIcon"
                  src="/assets/mailIcon.svg"
                  onClick={openModal}
                />
              </div>
              <MailModal
                open={showModal}
                onClose={closeModal}
                serviceId={serviceID}
              />
            </IonSlide>
            {slide}
          </IonSlides>
        </IonContent>
      )}
    </IonPage>
  );
};

export default React.memo(Service);
