import { consultancyData, ServiceData, serviceData } from "../data/data";
import { getServiceData } from "./getServiceData";

const serviceDescription = (
  serviceId: string,
  consultancyId: string
): string => {
  const consultancy = consultancyData[consultancyId];

  if (consultancy?.centerInfoBox?.to === serviceId) {
    return consultancy?.centerInfoBox?.text.join("\n") ?? "";
  } else if (consultancy?.leftInfoBox?.to === serviceId) {
    return consultancy?.leftInfoBox?.text.join("\n") ?? "";
  } else {
    return consultancy?.rightInfoBox?.text.join("\n") ?? "";
  }
};

export const useEmail = async (services: string[]) => {
  const selectedServicesData: { id: string; data: ServiceData }[] = [];
  for (let i = 0; i < services.length; i++) {
    const serviceId = services[i];
    const thisServiceData = await getServiceData(serviceId);
    selectedServicesData.push({
      id: serviceId,
      data: thisServiceData ?? serviceData[serviceId],
    });
  }

  const fallbackImage =
    "https://images.unsplash.com/photo-1610148884558-4ed532bfe55b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  const html = /*html*/ `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Inter:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
      rel="stylesheet"
    />
    <style>
    body {
      display: flex;
    }
    table + img{
      display: none !important;
    }
    img[src~="sendgrid"] {
      display: none !important;
    } 
    @media only screen and (max-width: 1051px) {
      .desktop-view{display: none !important;}
    }
    @media only screen and (min-width: 1052px) {
      .mobile-view{display: none !important;}
      .desktop-view{display: flex !important;}
    }
    .table {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
      position: relative;
    }
    .img {
      width: 100%;
    }
    .text {
      font-family: Inter;
      font-style: normal;
    }
    .title {
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      text-transform: uppercase;
      padding-top: 1rem;
      padding-bottom: 0.5rem;
    } 
    .description {
      padding-top: 30px;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    }
    </style>
    </head>
    <body>
      <style scoped>
        @media (max-width: 1051px) {
          .desktop-view{display: none !important;}
          
        }
        @media (min-width: 1052px) {
          .mobile-view{display: none !important;}
          .desktop-view{display: flex !important;}
        }
      </style>
      <div class="desktop-view" style="display: none">
      ${selectedServicesData
        .map(
          (
            sd
          ) => /*html*/ `<table class="table" style="width: 100%;padding-left: 1rem;padding-right: 1rem;position: relative;">
            <tr>
              <td class="text title" style="font-family: Inter;font-style: normal;font-weight: bold;font-size: 30px;line-height: 40px;text-transform: uppercase;padding-top: 1rem;padding-bottom: 0.5rem;">${
                sd.data.name
              }</td>
            </tr>
            <tr>
              <th>
                <img
                  class="img"
                  style="width: 100%;"
                  alt="Imagem do serviço"
                  src="${sd.data.mailImage ? sd.data.mailImage : fallbackImage}"
                />
              </th>
            </tr>
            <tr>
              <td class="text description" style="font-family: Inter;font-style: normal;padding-top: 30px;font-weight: normal;font-size: 16px;line-height: 22px;">
                ${
                  sd.data.mailDescription
                    ? sd.data.mailDescription
                    : serviceDescription(sd.id, sd.data.consultancyId)
                }
              </td>
            </tr>
        </table>`
        )
        .join("")}
      </div>
      <div class="mobile-view">
      ${selectedServicesData
        .map(
          (
            sd
          ) => /*html*/ `<table class="table" style="width: 100%;padding-left: 1rem;padding-right: 1rem;position: relative;">
            <tr>
              <td class="text title" style="font-family: Inter;font-style: normal;font-weight: bold;font-size: 30px;line-height: 40px;text-transform: uppercase;padding-top: 1rem;padding-bottom: 0.5rem;">${
                sd.data.name
              }</td>
            </tr>
            <tr>
              <th>
                <img
                  class="img"
                  style="width: 100%;"
                  alt="Imagem do serviço"
                  src="${sd.data.mailImage ? sd.data.mailImage : fallbackImage}"
                />
              </th>
            </tr>
            <tr>
              <td class="text description" style="font-family: Inter;font-style: normal;padding-top: 30px;font-weight: normal;font-size: 16px;line-height: 22px;">
                ${
                  sd.data.mailDescription
                    ? sd.data.mailDescription
                    : serviceDescription(sd.id, sd.data.consultancyId)
                }
              </td>
            </tr>
        </table>`
        )
        .join("")}
      </div>
      
    </body>
  </html>`;

  return html;
};
