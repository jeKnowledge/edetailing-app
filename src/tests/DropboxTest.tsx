import { FilesystemDirectory, Plugins } from "@capacitor/core";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import { Dropbox } from "dropbox";
import React, { useCallback, useEffect, useState } from "react";
import {
  consultancyData,
  consultancyDropboxName,
  serviceData,
  serviceDropboxName,
} from "../data/data";
import { getMediaFromDirectory } from "../hooks/getMediaFromDirectory";
import { DROPBOX_API } from "../secrets";
const { Filesystem } = Plugins;

const DropboxTest = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<
    { id: string; status: "done" | "downloading" }[]
  >(
    Object.keys(serviceDropboxName).map((serviceId) => ({
      id: serviceId,
      status: "downloading",
    }))
  );

  const [serviceMedia, setServiceMedia] = useState<
    { id: string; images: string[] | undefined }[]
  >(
    Object.keys(serviceDropboxName).map((serviceId) => ({
      id: serviceId,
      images: undefined,
    }))
  );
  const [consultancyMedia, setConsultancyMedia] = useState<
    { id: string; images: string[] | undefined }[]
  >(
    Object.keys(consultancyDropboxName).map((consultancyId) => ({
      id: consultancyId,
      images: undefined,
    }))
  );

  const setStartValues = useCallback(() => {
    setDownloadStarted(false);
    setIsDownloading(false);
    setDownloadStatus(
      Object.keys(serviceDropboxName).map((serviceId) => ({
        id: serviceId,
        status: "downloading",
      }))
    );
  }, []);

  const startDownload = useCallback(() => {
    setDownloadStarted(true);
    setIsDownloading(true);
    setDownloadStatus(
      Object.keys(serviceDropboxName).map((serviceId) => ({
        id: serviceId,
        status: "downloading",
      }))
    );
  }, []);

  useEffect(() => {
    setStartValues();
  }, [setStartValues]);

  useEffect(() => {
    if (!downloadStatus.some((s) => s.status === "downloading")) {
      setIsDownloading(false);
    }
  }, [downloadStatus]);

  const clickToDownload = useCallback(() => {
    startDownload();
    const dbx = new Dropbox({
      accessToken: DROPBOX_API,
    });
    Object.keys(serviceDropboxName).map((serviceId) => {
      const serviceDbxName = serviceDropboxName[serviceId];
      const consultancyDbxName =
        consultancyDropboxName[serviceData[serviceId].consultancyId];
      const dbxFolderPath = `/consultorias/${consultancyDbxName}/${serviceDbxName}/`;

      // this needs to be async if we want it to be fast and if we want to download multiple files at the same time
      dbx
        .filesListFolder({
          path: dbxFolderPath,
        })
        .then(async (filesInFolder) => {
          const nFiles = filesInFolder.result.entries.length;
          let filesDownloaded = 0;
          if (nFiles === 0)
            setDownloadStatus((prevStatus) => [
              ...prevStatus.filter((s) => s.id !== serviceId),
              { id: serviceId, status: "done" },
            ]);
          // Foreach entry download its file
          const fileFolder = `${consultancyDbxName}/${serviceDbxName}/`;
          try {
            const result = await Filesystem.mkdir({
              path: fileFolder,
              directory: FilesystemDirectory.External,
              recursive: true,
            });
            console.log("result of mkdir", result);
          } catch (error) {
            console.warn("error in mkdir", error);
          }
          filesInFolder.result.entries.map(async (f) => {
            if (f.path_display) {
              // we have a valid path to the file
              dbx
                .filesDownload({
                  path: f.path_display,
                })
                .then((file) => {
                  const fileBlob = (file.result as any).fileBlob;
                  // the blob is valid but we need to convert it to a base64 string to be saved
                  if (fileBlob) {
                    const reader = new FileReader();
                    reader.readAsDataURL(fileBlob);
                    reader.onloadend = () => {
                      const base64data = reader.result;
                      if (typeof base64data === "string") {
                        Filesystem.writeFile({
                          data: base64data,
                          path: fileFolder + f.name,
                          directory: FilesystemDirectory.External,
                          recursive: true,
                        }).then(
                          (_) => {
                            filesDownloaded++;
                            if (filesDownloaded === nFiles)
                              setDownloadStatus((prevStatus) => [
                                ...prevStatus.filter((s) => s.id !== serviceId),
                                { id: serviceId, status: "done" },
                              ]);
                          },
                          (error) => console.error("error writing file", error)
                        );
                      }
                    };
                  }
                })
                .catch((error) =>
                  console.error("error downloading file", error)
                );
            }
          });
        })
        .catch((err) => console.error(err));
    });
  }, [startDownload]);

  const listConsultancyFiles = useCallback(() => {
    Object.keys(consultancyData).forEach(async (consultancyId) => {
      const consultancyDbxName = consultancyDropboxName[consultancyId];
      const path = `${consultancyDbxName}/`;
      const images = await getMediaFromDirectory(path, true);
      setConsultancyMedia((prevCm) => [
        ...prevCm.filter((sm) => sm.id !== consultancyId),
        { id: consultancyId, images: images },
      ]);
    });
  }, []);

  const listServiceFiles = useCallback(() => {
    Object.keys(serviceData).forEach(async (serviceId) => {
      const consultancyDbxName =
        consultancyDropboxName[serviceData[serviceId].consultancyId];
      const serviceDbxName = serviceDropboxName[serviceId];
      const path = `${consultancyDbxName}/${serviceDbxName}/`;
      const images = await getMediaFromDirectory(path);
      setServiceMedia((prevSm) => [
        ...prevSm.filter((sm) => sm.id !== serviceId),
        { id: serviceId, images: images },
      ]);
    });
  }, []);

  useEffect(() => {
    if (serviceMedia.some((sm) => !sm.images)) console.warn("NOT READY");
    else {
      console.warn("serviceMedia", serviceMedia);
    }
  }, [serviceMedia]);

  useEffect(() => {
    if (consultancyMedia.some((cm) => !cm.images)) console.warn("NOT READY");
    else {
      console.warn("consultancyMedia", consultancyMedia);
    }
  }, [consultancyMedia]);

  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={clickToDownload} disabled={isDownloading}>
          Download Direct Dropbox
        </IonButton>
        <IonButton onClick={listConsultancyFiles} disabled={isDownloading}>
          List Consultancy Files
        </IonButton>
        <IonButton onClick={listServiceFiles} disabled={isDownloading}>
          List Service Files
        </IonButton>
        {downloadStarted && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: "large",
            }}
          >
            {downloadStatus.map((ds) => (
              <p key={ds.id}>
                {ds.id}: {ds.status}
              </p>
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default React.memo(DropboxTest);
