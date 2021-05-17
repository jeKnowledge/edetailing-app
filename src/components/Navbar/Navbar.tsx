import { IonImg, IonLabel, IonProgressBar } from "@ionic/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { serviceData, ServiceData, serviceToColor } from "../../data/data";
import MailModel from "../MailModel";
import "./Navbar.css";

interface Props {
  serviceID: string;
  consultancyID: string;
}

const Navbar = ({ serviceID,  consultancyID}: Props) => {
  const theme = useMemo(() => serviceToColor[serviceID], [serviceID]);
  const staticServiceData = useMemo(() => serviceData[serviceID], [serviceID]);
  const [thisServiceData] = useState<ServiceData>(
    staticServiceData
  );
  const [duration, setDuration] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (duration > 1) {
        setDuration(0);
      } else {
        setDuration(duration + 0.2);
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [duration, setDuration]);

  return (
    <div>
      <div>
        <IonLabel className="title text-time">
          {thisServiceData.duration}
        </IonLabel>
        <IonProgressBar
          className={`ion-progress-bar-${theme}`}
          value={duration}
        ></IonProgressBar>
      </div>
      <IonImg
          className="mailIcon"
          src="/assets/mailIcon.svg"
          onClick={openModal}
        />
      <MailModel
        open={showModal}
        onClose={closeModal}
        serviceId={serviceID}
      />
    </div>
  );
};

export default React.memo(Navbar);