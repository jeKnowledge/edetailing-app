import { IonContent, IonPage } from "@ionic/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { consultancyData } from "../../data/data";
import { getConsultancyMedia } from "../../hooks/getConsultancyMedia";
import { useConsultancyStaticAssets } from "../../hooks/useConsultancyStaticAssets";
import { isImage } from "../../utils/isImage";
import { IsVideo } from "../../utils/isVideo";
import ConsultancyFloatingMenu from "../ConsultancyFloatingMenu";
import InfoBox, { InfoBoxProps } from "../InfoBox/InfoBox";
import LampModal from "../LampModal/LampModal";
import Loader from "../Loader";
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
  const staticAssests = useConsultancyStaticAssets(consultancyId);
  const thisConsultancyData = useMemo(() => consultancyData[consultancyId], [
    consultancyId,
  ]);

  const [photos, setPhotos] = useState<string[]>(staticAssests);
  const [videos, setVideos] = useState<string[]>(
    thisConsultancyData?.topCornerVideo
      ? [thisConsultancyData.topCornerVideo.url]
      : []
  );
  const [currentTopImg, setCurrentTopImg] = useState<number>(0);
  const [currentBottomImg, setCurrentBottomImg] = useState<number>(
    photos.length - 1
  );
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const getConsultancyMediaWrapper = useCallback(() => {
    getConsultancyMedia(consultancyId)
      .then((res) => {
        if (res !== undefined) {
          const photosFs: string[] = res
            .filter((file) => isImage(file.filename))
            .map((pair) => pair.data);
          const videosFs: string[] = res
            .filter((file) => IsVideo(file.filename))
            .map((pair) => pair.data);

          // update photos here
          if (photosFs.length > 0) {
            setPhotos(photosFs);
            currentTopImgRef.current = 0;
            currentBottomImgRef.current = photosFs.length - 1;
            setCurrentTopImg(0);
            setCurrentBottomImg(photosFs.length - 1);
          }

          // update videos here
          if (videosFs.length > 0) {
            setVideos(videosFs);
          }
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
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
    getConsultancyMediaWrapper();
  }, [getConsultancyMediaWrapper]);

  return (
    <IonPage>
      {loading ? (
        <Loader />
      ) : (
        <IonContent forceOverscroll={false} scrollY={false}>
          <div id="page">
            <ConsultancyFloatingMenu />
            <div id="top-right-stack">
              {videos.length > 0 ? (
                <MaskedVideo
                  mask={`/assets/consultorias/${consultancyId}/top-mask.svg`}
                  url={videos[0]}
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
