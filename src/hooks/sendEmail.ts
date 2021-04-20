import { HttpPlugin } from "@capacitor-community/http";
import { FilesystemDirectory, Plugins } from "@capacitor/core";
import { SENDGRID_API } from "../secrets";
import { saveEmailForLater } from "./saveEmailForLater";
import { useEmail } from "./useEmail";

const { Filesystem, Http } = Plugins;

const cleanString = (input: string): string => {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) <= 127) {
      output += input.charAt(i);
    } else {
      output += "&#" + input.charCodeAt(i) + ";";
    }
  }
  return output;
};

export const sendEmail = async ({
  to,
  services,
  savedId = undefined,
}: {
  to: string;
  services: string[];
  savedId?: string | undefined;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const html = await useEmail(services);
  // sgMail.setApiKey(SENDGRID_API);
  // const msg: MailDataRequired = {
  //   to: to,
  //   from: "paula.prada@jeknowledge.com",
  //   replyTo: "paulaprada@imageminteligente.com",
  //   subject: "Paula Prada",
  //   html: cleanString(html.normalize()),
  // };

  // sgMail
  //   .send(msg)
  //   .then((result) => {
  //     if (result["0"].statusCode !== 202) {
  //       saveEmailForLater({
  //         to,
  //         services,
  //       });
  //     }
  //     // success
  //     else {
  //       if (savedId) {
  //         try {
  //           Filesystem.deleteFile({
  //             path: "emails/" + savedId,
  //             directory: FilesystemDirectory.External,
  //           });
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       }
  //     }
  //   })
  //   .catch(() =>
  //     saveEmailForLater({
  //       to,
  //       services,
  //     })
  //   );

  // native call
  (Http as HttpPlugin)
    .request({
      method: "POST",
      url: "https://api.sendgrid.com/v3/mail/send",
      headers: {
        Authorization: `Bearer ${SENDGRID_API}`,
        "Content-Type": "application/json",
      },
      data: {
        personalizations: [
          {
            to: [
              {
                email: to,
              },
            ],
          },
        ],
        from: {
          email: "paula.prada@jeknowledge.com",
        },
        reply_to: {
          email: "paulaprada@imageminteligente.com",
        },
        subject: "Paula Prada",
        content: [
          {
            type: "text/html",
            value: cleanString(html.normalize()),
          },
        ],
      },
    })
    .then((result) => {
      if (result.status !== 202) {
        saveEmailForLater({
          to,
          services,
        });
      }
      // success
      else {
        if (savedId) {
          try {
            Filesystem.deleteFile({
              path: "emails/" + savedId,
              directory: FilesystemDirectory.External,
            });
          } catch (error) {
            console.error(error);
          }
        }
      }
    })
    .catch(() =>
      saveEmailForLater({
        to,
        services,
      })
    );
};
