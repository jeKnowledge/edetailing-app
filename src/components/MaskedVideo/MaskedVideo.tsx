import { IonModal } from "@ionic/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";
import "./MaskedVideo.css";

export interface MaskedVideoProps {
  mask: string;
  url: string;
  variant?: "top" | "bottom" | "default";
}

const MaskedVideo = ({ mask, url, variant = "default" }: MaskedVideoProps) => {
  const [showModal, setShowModal] = useState(false);

  const nonModalPlayer = useRef(null);
  const modalPlayer = useRef(null);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  // ionic unmounts the modal for some reason so we need to update the play back while
  // we still have the modalPlayer ref
  const closeModal = useCallback(() => {
    if (nonModalPlayer && nonModalPlayer.current) {
      // @ts-ignore
      nonModalPlayer.current.seekTo(modalPlayer.current.getCurrentTime());
    }
    setShowModal(false);
  }, []);

  const videoId: string = useMemo(() => {
    if (variant === "default") return "";
    else if (variant === "top") return "top-video";
    else return "bottom-video";
  }, [variant]);

  useEffect(() => {
    // no necessary refs
    if (
      !modalPlayer ||
      !modalPlayer.current ||
      !nonModalPlayer ||
      !nonModalPlayer.current
    )
      return;

    // opened modal player
    if (showModal) {
      if (modalPlayer && modalPlayer.current) {
        // @ts-ignore
        const seconds = nonModalPlayer.current.getCurrentTime();
        // @ts-ignore
        modalPlayer.current.seekTo(seconds);
        // @ts-ignore
        nonModalPlayer.current.seekTo(seconds);
      }
    }
  }, [showModal]);

  return (
    <>
      <div className="video-stack" onClick={() => openModal()}>
        <div id={videoId}>
          <ReactPlayer
            ref={nonModalPlayer}
            url={url}
            loop={true}
            muted
            playing={true}
          />
        </div>
        <img src={mask} alt="" />
      </div>
      <IonModal
        isOpen={showModal}
        onDidDismiss={() => closeModal()}
        swipeToClose={true}
        backdropDismiss
        cssClass="video-modal"
      >
        <div className="video-modal-base">
          <ReactPlayer
            width="1000px"
            height="700px"
            ref={modalPlayer}
            url={url}
            style={{ background: "#000000e6", objectFit: "cover" }}
            loop={true}
            muted // TODO: MAYBE NOT MUTED
            playing={showModal}
          />
        </div>
      </IonModal>
    </>
  );
};

export default React.memo(MaskedVideo);
