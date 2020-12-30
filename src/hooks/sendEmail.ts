import "@capacitor-community/http";
import { Capacitor, Plugins } from "@capacitor/core";
import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { SENDGRID_API } from "../secrets";

export const sendEmail = ({
  to,
  mailTemplate,
}: {
  to: string;
  mailTemplate: number | string | undefined;
}) => {
  // use native http request handler
  if (Capacitor.isNative) {
    const { Http } = Plugins;

    return Http.request({
      method: "POST",
      url: "https://api.sendgrid.com/v3/mail/send",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "origin, x-request-with, content-type",
        "Access-Control-Allow-Methods":
          "PUT, GET, POST, DELETE, OPTIONS, PATCH",
      },
      data: {
        personalizations: [
          {
            to: [
              {
                email: "goncalo_services@protonmail.com",
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
        subject: "Lorem ipsum dolor sit amet consectetur, adipisicing",
        content: [
          {
            type: "text/plain",
            value:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos praesentium enim quo, accusantium, obcaecati dolor dolorum corporis quia, ad adipisci error illo ipsa in voluptatum repellendus ex labore quod necessitatibus!" +
              "\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa beatae dignissimos, repudiandae cum veritatis ex nostrum quidem voluptatem natus iure officia atque exercitationem eaque quasi voluptates! Enim, voluptas iste. Ea.",
          },
        ],
      },
    });
  } else {
    sgMail.setApiKey(SENDGRID_API);
    const msg: MailDataRequired = {
      to: to,
      from: "paula.prada@jeknowledge.com",
      // TODO: SUBJECT AS PARAM?
      // TODO: change text and html for templateId
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    return sgMail.send(msg);
  }
};
