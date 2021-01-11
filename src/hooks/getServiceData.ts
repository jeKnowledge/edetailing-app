import { FilesystemDirectory, Plugins } from "@capacitor/core";
import csv from "csvtojson";
import { ServiceData, serviceData, serviceDropboxName } from "../data/data";
import { compareStrings } from "../utils/compareStrings";
const { Filesystem } = Plugins;

type CsvParserResult = {
  Benefícios: string;
  "Boas Escolhas": string;
  Descrição: string;
  Duração: string;
  "Mas Escolhas": string;
  "O que inclui": string;
  Serviço: string;
  Link?: string;
  "Imagem Email"?: string;
  "Descrição Email"?: string;
}[];

export const getServiceData = async (
  serviceId: string
): Promise<ServiceData | undefined> => {
  const filename = "serviços.csv";
  try {
    const file = await Filesystem.readFile({
      path: filename,
      directory: FilesystemDirectory.External,
    });
    // base64 to text
    const stringData = new Buffer(file.data, "base64").toString("utf-8");
    const records: CsvParserResult = await csv().fromString(stringData);
    if (records) {
      const result = records.find(
        (r) => !compareStrings(r["Serviço"], serviceDropboxName[serviceId])
      );
      const labels = (result?.["O que inclui"] ?? "").split("\n");
      return result
        ? {
            name: serviceData[serviceId].name,
            boasMasEscolhas:
              !!result["Boas Escolhas"] && !!result["Mas Escolhas"],
            boasMasText: [
              result["Boas Escolhas"].split("\n"),
              result["Mas Escolhas"].split("\n"),
            ],
            consultancyId: serviceData[serviceId].consultancyId,
            duration: +result["Duração"],
            imgSlideSize: NaN,
            labelsSlide: labels,
            slideText: result["Benefícios"].split("\n"),
            mailImage: result["Imagem Email"] ?? "",
            websiteLink: result["Link"] ?? "",
            mailDescription: result["Descrição Email"] ?? "",
          }
        : undefined;
    } else return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
