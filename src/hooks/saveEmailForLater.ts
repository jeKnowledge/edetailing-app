import { FilesystemDirectory, Plugins } from "@capacitor/core";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

const { Filesystem } = Plugins;

export const saveEmailForLater = async ({
  to,
  services,
}: {
  to: string;
  services: string[];
}) => {
  // get current time
  const currentTime = dayjs().format("DD/MM, HH:mm");
  try {
    await Filesystem.mkdir({
      path: "emails",
      directory: FilesystemDirectory.External,
    });
  } catch (error) {
    console.error("error in mkdir", error);
  }
  try {
    await Filesystem.writeFile({
      path: "emails/" + uuid(),
      directory: FilesystemDirectory.External,
      data: btoa(
        unescape(
          encodeURIComponent([currentTime, to, services.join(",")].join("\n"))
        )
      ),
    });
  } catch (error) {
    console.error();
  }
};
