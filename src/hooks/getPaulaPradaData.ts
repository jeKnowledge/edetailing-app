import { FilesystemDirectory, Plugins } from "@capacitor/core";
import csv from "csvtojson";
import { PaulaPradaData } from "../data/data";
const { Filesystem } = Plugins;

type CsvParserResult = {
  "Quem Sou": string;
  Missão: string;
  Visão: string;
  Valores: string;
}[];

export const getPaulaPradaData = async (): Promise<
  PaulaPradaData | undefined
> => {
  const filename = "paula_prada.csv";
  try {
    const file = await Filesystem.readFile({
      path: "/" + filename,
      directory: FilesystemDirectory.External,
    });
    // base64 to text
    const stringData = new Buffer(file.data, "base64").toString("utf-8");
    const records: CsvParserResult = await csv().fromString(stringData);
    if (records) {
      return {
        textPaulaPrada: records[0]["Quem Sou"].split("\n"),
        text: [
          {
            title: "missão",
            text: records[0]["Missão"],
          },
          {
            title: "visão",
            text: records[0]["Visão"],
          },
          {
            title: "valores",
            text: records[0]["Valores"],
          },
        ],
      } as PaulaPradaData;
    } else return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
