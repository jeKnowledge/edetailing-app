import { FilesystemDirectory, Plugins } from "@capacitor/core";
import csv from "csvtojson";
import { ConsultancyData, consultancyData, consultancyDropboxName } from "../data/data";
import { compareStrings } from "../utils/compareStrings";
const { Filesystem } = Plugins;

type CsvParserResult = {
  "Consultoria": string;
  "Lamp Title": string;
  "Lamp Text": string;
}[];

export const getConsultancyData = async (
  consultancyId: string
): Promise<ConsultancyData | undefined> => {
  const filename = "consultorias.csv";
  try {
    const file = await Filesystem.readFile({
      path: filename,
      directory: FilesystemDirectory.Data,
    });
    // base64 to text
    const stringData = new Buffer(file.data, "base64").toString("utf-8");
    const records: CsvParserResult = await csv().fromString(stringData);
    if (records) {
      const result = records.find(
        (r) => !compareStrings(r["Consultoria"], consultancyDropboxName[consultancyId])
      );

      return result
        ? {
          color: consultancyData[consultancyId].color,
          variant: consultancyData[consultancyId].variant,
          serviceId: consultancyData[consultancyId].serviceId,
          serviceIdDouble: consultancyData[consultancyId].serviceIdDouble,
            lampData: {
              title: result["Lamp Title"],
              text: result["Lamp Text"],
            },
          }
        : undefined;
    } else return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
