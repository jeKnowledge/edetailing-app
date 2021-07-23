import { FilesystemDirectory, NetworkStatus, Plugins } from "@capacitor/core";
import { IonButton, IonContent, IonLabel, IonPage } from "@ionic/react";
import { Dropbox } from "dropbox";
import React, { useCallback, useEffect, useState } from "react";
import {
  consultancyDropboxName,
  serviceData,
  serviceDropboxName
} from "../../data/data";
import { DROPBOX_API } from "../../secrets";
import Loader from "../Loader";
import OtherPagesFloatingMenu from "../OtherPagesFloatingMenu";
import "./DropboxPage.css";
const { Filesystem } = Plugins;
const { Network } = Plugins;

type DownloadStatus = "done" | "downloading";

const downloadsInitStatus: { id: string; status: DownloadStatus }[] = [
  ...Object.keys(serviceDropboxName).map((serviceId) => ({
    id: serviceDropboxName[serviceId],
    status: "downloading" as DownloadStatus,
  })),
  {
    id: "Preçário",
    status: "downloading" as DownloadStatus,
  },
  {
    id: "Configuração dos Serviços",
    status: "downloading" as DownloadStatus,
  },
  {
    id: "Configuração das Consultarias",
    status: "downloading" as DownloadStatus,
  },
  {
    id: "Paula Prada",
    status: "downloading" as DownloadStatus,
  },
];

const DropboxPage = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<
    { id: string; status: DownloadStatus }[]
  >(downloadsInitStatus);
  const [isLoading, setIsLoading] = useState(true);
  const [netStatus, setNetStatus] = useState<NetworkStatus | undefined>(
    undefined
  );

  const handler = Network.addListener("networkStatusChange", (status) => {
    console.log("Network status changed", netStatus);
    setNetStatus(status);
  });

  useEffect(() => {
    return () => {
      handler.remove();
    };
  }, [handler]);

  const getNetworkStatus = useCallback(() => {
    Network.getStatus()
      .then((s) => setNetStatus(s))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getNetworkStatus();
  }, [getNetworkStatus]);

  const setStartValues = useCallback(() => {
    setDownloadStarted(false);
    setIsDownloading(false);
    setDownloadStatus(downloadsInitStatus);
  }, []);

  const startDownload = useCallback(() => {
    setDownloadStarted(true);
    setIsDownloading(true);
    setDownloadStatus(downloadsInitStatus);
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
              ...prevStatus.filter(
                (s) => s.id !== serviceDropboxName[serviceId]
              ),
              { id: serviceDropboxName[serviceId], status: "done" },
            ]);
          // Foreach entry download its file
          const fileFolder = `${consultancyDbxName}/${serviceDbxName}/`;
          try {
            const result = await Filesystem.rmdir({
              path: fileFolder,
              directory: FilesystemDirectory.Data,
              recursive: true,
            });
            console.log("result of rmdir", result);
          } catch (error) {
            console.warn("error in rmdir", error);
          }
          try {
            const result = await Filesystem.mkdir({
              path: fileFolder,
              directory: FilesystemDirectory.Data,
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
                          directory: FilesystemDirectory.Data,
                          recursive: true,
                        }).then(
                          (_) => {
                            filesDownloaded++;
                            if (filesDownloaded === nFiles)
                              setDownloadStatus((prevStatus) => [
                                ...prevStatus.filter(
                                  (s) => s.id !== serviceDropboxName[serviceId]
                                ),
                                {
                                  id: serviceDropboxName[serviceId],
                                  status: "done",
                                },
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

    //Consultancies information
    const consultancyDataFile = "/consultorias/consultorias.csv";
    dbx
      .filesDownload({
        path: consultancyDataFile,
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
                path: "consultorias.csv",
                directory: FilesystemDirectory.Data,
                recursive: true,
              }).then(
                (_) => {
                  setDownloadStatus((prevStatus) => [
                    ...prevStatus.filter(
                      (s) => s.id !== "Configuração das Consultarias"
                    ),
                    { id: "Configuração das Consultarias", status: "done" },
                  ]);
                },
                (error) => console.error("error writing file", error)
              );
            }
          };
        }
      })
      .catch((error) => console.error("error downloading file", error));

    // Services information
    const serviceDataFile = "/consultorias/serviços.csv";
    dbx
      .filesDownload({
        path: serviceDataFile,
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
                path: "serviços.csv",
                directory: FilesystemDirectory.Data,
                recursive: true,
              }).then(
                (_) => {
                  setDownloadStatus((prevStatus) => [
                    ...prevStatus.filter(
                      (s) => s.id !== "Configuração dos Serviços"
                    ),
                    { id: "Configuração dos Serviços", status: "done" },
                  ]);
                },
                (error) => console.error("error writing file", error)
              );
            }
          };
        }
      })
      .catch((error) => console.error("error downloading file", error));

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
                directory: FilesystemDirectory.Data,
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

    // Paula Prada
    const paulaPrada = "paula_prada.csv";
    dbx
      .filesDownload({
        path: "/" + paulaPrada,
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
                path: paulaPrada,
                directory: FilesystemDirectory.Data,
                recursive: true,
              }).then(
                (_) => {
                  setDownloadStatus((prevStatus) => [
                    ...prevStatus.filter((s) => s.id !== "Paula Prada"),
                    { id: "Paula Prada", status: "done" },
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

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [isLoading]);

  return (
    <IonPage>
      {isLoading  ? (
        <Loader id={"paulaprada"} />
      ) : (
      <IonContent>
        <OtherPagesFloatingMenu />
        <div id="content">
          <div id="content-data">
            {downloadStatus
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((dI) => (
                <div key={dI.id} className="consultancy">
                  <div className="box-dropbox">
                    <IonLabel id="consultancy-style">{dI.id}</IonLabel>
                  </div>
                  <div>
                    <div className="box-dropbox">
                      <IonLabel id="consultancy-style">
                        {downloadStarted ? dI.status : "not downloading"}
                      </IonLabel>
                    </div>
                  </div>
                </div>
              ))}
            {netStatus?.connected ? (
            <div id="button-content">
              <IonButton
                id="download-button-dropbox"
                onClick={clickToDownload}
                disabled={isDownloading}
              >
                <IonLabel id="download-button-style">download</IonLabel>
              </IonButton>
            </div> 
            )  : undefined }
          </div>
        </div>
      </IonContent>
      )}
    </IonPage>
  );
};

export default React.memo(DropboxPage);
