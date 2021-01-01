import { FilesystemDirectory, Plugins } from "@capacitor/core";
import { Prices } from "../data/data";
const { Filesystem } = Plugins;

const parsePricesCSV = (text: string): Prices | undefined => {
  const delimiters = [",", ";", "\t"];
  const lines = text.split("\n");
  console.log(lines);
  const result: Prices = {};
  const header = lines.shift();

  // find delimiter
  let delIndex = 0;
  while (header?.split(delimiters[delIndex]).length !== 3) {
    delIndex++;
    if (delIndex === delimiters.length) return undefined;
  }

  lines.forEach((l: string) => {
    if (l) {
      const content = l.split(delimiters[delIndex]);
      if (result[content[0]]) {
        result[content[0]].prices.push({
          price: content[1],
          description: content[2],
        });
      } else {
        result[content[0]] = {
          prices: [
            {
              price: content[1],
              description: content[2],
            },
          ],
        };
      }
    }
  });
  return result;
};

export const getPricesData = async (): Promise<Prices | undefined> => {
  const filename = "preçario.csv";
  try {
    const file = await Filesystem.readFile({
      path: "/" + filename,
      directory: FilesystemDirectory.External,
    });
    // base64 to text
    const stringData = new Buffer(file.data, "base64").toString("utf-8");
    console.log(stringData);
    const fileContent = parsePricesCSV(stringData);
    console.log(fileContent);
    return fileContent;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
