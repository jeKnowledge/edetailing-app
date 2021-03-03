import { FilesystemDirectory, Plugins, ReaddirResult } from "@capacitor/core";

const { Filesystem } = Plugins;

interface Email {
  id: string;
  to: string;
  services: string[];
  timeOfWrite: string;
}

export const getEmailsForLater = async (): Promise<Email[] | undefined> => {
  let result: undefined | ReaddirResult = undefined;
  try {
    result = await Filesystem.readdir({
      path: "emails",
      directory: FilesystemDirectory.External,
    });
  } catch (error) {
    console.error(error);
    return undefined;
  }

  const emails: Email[] = [];

  for (let i = 0; i < result.files.length; i++) {
    const file = await Filesystem.readFile({
      path: "emails/" + result.files[i],
      directory: FilesystemDirectory.External,
    });
    // time \n to \n services(separados por virgula)
    const content = new Buffer(file.data, "base64")
      .toString("utf-8")
      .split("\n");
    emails.push({
      id: result.files[i],
      timeOfWrite: content[0],
      to: content[1],
      services: content[2].split(","),
    });
  }

  console.log(emails);
  return emails;
};
