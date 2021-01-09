import { FilesystemDirectory, Plugins } from "@capacitor/core";
import csv from "csvtojson";
import { Prices } from "../data/data";
const { Filesystem } = Plugins;

type CsvParserResult = {
  Serviço: string;
  Descrição: string;
  Preço: string;
}[];

export const getPricesData = async (): Promise<Prices | undefined> => {
  const filename = "preçario.csv";
  try {
    const file = await Filesystem.readFile({
      path: "/" + filename,
      directory: FilesystemDirectory.External,
    });
    // base64 to text
    const stringData = new Buffer(file.data, "base64").toString("utf-8");
    const records: CsvParserResult = await csv().fromString(stringData);
    if (records) {
      const result: Prices = {};
      records.forEach((r) => {
        if (r) {
          if (result[r["Serviço"]]) {
            result[r["Serviço"]].prices.push({
              price: r["Preço"],
              description: r["Descrição"],
            });
          } else {
            result[r["Serviço"]] = {
              prices: [
                {
                  price: r["Preço"],
                  description: r["Descrição"],
                },
              ],
            };
          }
        }
      });
      return result;
    } else return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
