import { FilesystemDirectory, Plugins } from "@capacitor/core";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import { Dropbox } from "dropbox";
import React, { useCallback, useEffect, useState } from "react";
import {
  consultancyDropboxName,
  serviceData,
  serviceDropboxName,
} from "../data/data";
import { DROPBOX_API } from "../secrets";
const { Filesystem } = Plugins;

type DownloadStatus = "done" | "downloading";

const downloadsInitStatus: { id: string; status: DownloadStatus }[] = [
  ...Object.keys(serviceDropboxName).map((serviceId) => ({
    id: serviceId,
    status: "downloading" as DownloadStatus,
  })),
  {
    id: "Preçário",
    status: "downloading" as DownloadStatus,
  },
];

const DropboxTest = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<
    { id: string; status: DownloadStatus }[]
  >(downloadsInitStatus);

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
    Object.keys(serviceDropboxName).forEach((serviceId) => {
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
          filesInFolder.result.entries.forEach(async (f) => {
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

    // Prices
    const pricesFile = "preçario.csv";
    dbx
      .filesDownload({
        path: "/" + pricesFile,
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
                path: pricesFile,
                directory: FilesystemDirectory.External,
                recursive: true,
              }).then(
                (_) => {
                  setDownloadStatus((prevStatus) => [
                    ...prevStatus.filter((s) => s.id !== "Preçário"),
                    { id: "Preçário", status: "done" },
                  ]);
                },
                (error) => console.error("error writing file", error)
              );
            }
          };
        }
      })
      .catch((error) => console.error("error downloading file", error));
  }, [startDownload]);

  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={clickToDownload} disabled={isDownloading}>
          Download Direct Dropbox
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
