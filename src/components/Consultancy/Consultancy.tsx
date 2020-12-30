import { IonContent, IonLoading, IonPage } from "@ionic/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { consultancyData } from "../../data/data";
import { getConsultancyData } from "../../hooks/getConsultancyData";
import { useStaticAssets } from "../../hooks/useStaticAssets";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import InfoBox, { InfoBoxProps } from "../InfoBox/InfoBox";
import LampModal from "../LampModal/LampModal";
import MaskedImage from "../MaskedImage/MaskedImage";
import MaskedVideo from "../MaskedVideo/MaskedVideo";
import "./Consultancy.css";

interface ConsultancyProps {
  consultancyId: string;
  variant: "single" | "double";
  leftInfoBox?: InfoBoxProps;
  rightInfoBox?: InfoBoxProps;
  centerInfoBox?: InfoBoxProps;
}

const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};

const Consultancy = ({
  consultancyId,
  variant,
  leftInfoBox,
  rightInfoBox,
  centerInfoBox,
}: ConsultancyProps) => {
  const staticAssests = useStaticAssets(consultancyId);
  const [photos, setPhotos] = useState<string[]>(staticAssests);
  const [videos, setVideos] = useState<string[]>([]);
  const [currentTopImg, setCurrentTopImg] = useState<number>(0);
  const [currentBottomImg, setCurrentBottomImg] = useState<number>(
    photos.length - 1
  );
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const thisConsultancyData = useMemo(() => consultancyData[consultancyId], [
    consultancyId,
  ]);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const currentTopImgRef = useRef(currentTopImg);
  const currentBottomImgRef = useRef(currentBottomImg);

  currentTopImgRef.current = currentTopImg;
  currentBottomImgRef.current = currentBottomImg;

  const updateSlideImg = useCallback(() => {
    let topIndex = mod(currentTopImgRef.current + 1, photos.length);
    while (topIndex > photos.length - 1 || topIndex < 0)
      topIndex = mod(topIndex + 1, photos.length);
    setCurrentTopImg(topIndex);
    let bottomIndex = mod(currentBottomImgRef.current - 1, photos.length);
    while (bottomIndex > photos.length - 1 || bottomIndex < 0)
      bottomIndex = mod(bottomIndex - 1, photos.length);
    setCurrentBottomImg(bottomIndex);
  }, [photos]);

  const getConsultancyMedia = useCallback(() => {
    getConsultancyData(consultancyId).then((res) => {
      console.log(res);
      setPhotos(res);
      currentTopImgRef.current = 0;
      currentBottomImgRef.current = res.length - 1;
      setCurrentTopImg(0);
      setCurrentBottomImg(res.length - 1);
      setLoading(false);
    });
  }, [consultancyId]);

  useEffect(() => {
    const timer = setInterval(() => {
      updateSlideImg();
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [currentBottomImg, photos, updateSlideImg]);

  useEffect(() => {
    getConsultancyMedia();
  }, [getConsultancyMedia]);

  return (
    <IonPage>
      {loading ? (
        <IonLoading isOpen={true} />
      ) : (
        <IonContent forceOverscroll={false} scrollY={false}>
          <div id="page">
            <ConsultancyFloatingMenu />
            <div id="top-right-stack">
              {thisConsultancyData.topCornerVideo ? (
                <MaskedVideo
                  mask={`/assets/consultorias/${consultancyId}/top-mask.svg`}
                  url={thisConsultancyData.topCornerVideo.url}
                  variant="top"
                />
              ) : (
                <MaskedImage
                  mask={`/assets/consultorias/${consultancyId}/top-mask.svg`}
                  image={photos[currentTopImg]}
                  variant="top"
                />
              )}
            </div>
            <div id="bottom-left-stack">
              <MaskedImage
                mask={`/assets/consultorias/${consultancyId}/bottom-mask.svg`}
                image={photos[currentBottomImg]}
                variant="bottom"
              />
            </div>
            {variant === "double" ? (
              <>
                <div id="infobox-left">
                  <InfoBox
                    text={leftInfoBox?.text as string[]}
                    title={leftInfoBox?.title as string}
                    to={"/services/" + leftInfoBox?.to}
                    consultancyID={leftInfoBox?.consultancyID as string}
                  />
                </div>
                <div id="infobox-right">
                  <InfoBox
                    text={rightInfoBox?.text as string[]}
                    title={rightInfoBox?.title as string}
                    to={"/services/" + rightInfoBox?.to}
                    consultancyID={rightInfoBox?.consultancyID as string}
                    variant="reverse"
                  />
                </div>
              </>
            ) : (
              <div id="infobox-central">
                <InfoBox
                  expands={false}
                  text={centerInfoBox?.text as string[]}
                  title={centerInfoBox?.title as string}
                  to={"/services/" + centerInfoBox?.to}
                  consultancyID={centerInfoBox?.consultancyID as string}
                />
              </div>
            )}
            <span id="lamp" onClick={openModal}>
              <img
                src={`/assets/consultorias/${consultancyId}/lamp-${
                  showModal ? "on" : "off"
                }.svg`}
                alt="lamp"
              />
            </span>
          </div>
          <LampModal
            open={showModal}
            onClose={closeModal}
            theme={thisConsultancyData.color}
            lampData={thisConsultancyData.lampData}
          />
        </IonContent>
      )}
    </IonPage>
  );
};

export default React.memo(Consultancy);
