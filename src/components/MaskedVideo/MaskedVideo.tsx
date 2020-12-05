import { Capacitor, Plugins } from "@capacitor/core";
import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import "./MaskedVideo.css";

const { CapacitorVideoPlayer, Device } = Plugins;

export interface MaskedVideoProps {
  mask: string;
  url: string;
  variant?: "top" | "bottom" | "default";
}

const MaskedVideo = ({ mask, url, variant = "default" }: MaskedVideoProps) => {
  const [playing, setPlaying] = useState(true);
  const platform = Capacitor.getPlatform();
  const [showModal, setShowModal] = useState(false);
  const [videoStatus, setVideoStatus] = useState<{
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
  }>();

  useEffect(() => {
    console.log(videoStatus);
  }, [videoStatus]);

  const videoId: string = useMemo(() => {
    if (variant === "default") return "";
    else if (variant === "top") return "top-video";
    else return "bottom-video";
  }, [variant]);

  return (
    <div className="video-stack">
      <div id={videoId}>
        <ReactPlayer
          url={url}
          loop={true}
          onProgress={setVideoStatus}
          muted
          playing={playing}
        />
      </div>
      <img src={mask} alt="" />
    </div>
  );
};

export default React.memo(MaskedVideo);
