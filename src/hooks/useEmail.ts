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
    console.log(selectedServicesData);
  }

  const fallbackImage =
    "https://images.unsplash.com/photo-1610148884558-4ed532bfe55b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  const html = /*html*/ `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>

    @media only screen and (max-width: 1419px) {
      .mobile-view{display: block !important;}
      .desktop-view{display: none !important;}
    
      .img {
        max-width: 1025px !important;
      }
    }
    
    @media only screen and (min-width: 1420px) {
      .mobile-view{display: none !important;}
      .desktop-view{display: flex !important;}
    }
    
    .table {
      width: 100%;
    }
    
    td {
      padding: 0px 20px;
    }

    .img {
      height: 468px;
      width: 312.61px;
      max-width: 468px;
      max-height: 312.61px;
      min-width: 468px;
      min-height: 312.61px;
      object-fit: contain;
    }
    
    .text {
      font-family: sans-serif;
      font-style: normal;
      color: #OOOOOO !important; 
    }
    
    .title {
      height: 150px;
      max-height: 150px;
      font-weight: bold;
      font-size: 30px;
      text-transform: uppercase;
      padding-top: 70px;
    }
    
    .description {
      padding-top: 30px;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      vertical-align: top;
      width: calc(100% / ${selectedServicesData.length});
    }    

    .footer {
      display: block;
      width: 100%;
      background-color: #4c4c4c;
      color: #fff;
      margin-top: 100px;
      padding-bottom: 50px;
    }
    
    .footer-row {
      font-family: sans-serif;
      font-style: normal;
      font-size: 16px;
      padding: 10px 0px 10px 30px;
      color: #E5E5E5;
    }
    
    .icon {
      width: 73px;
      padding-right: 5px;
    }

    .footer-email {
      color:#E5E5E5 !important;
    }

    .row-button{
      height: 150px;
    } 

    .button-link {
      padding: 15px 50px; 
      background-color: #c4c4c4; 
      border-radius: 30px; 
      font-family: sans-serif; 
      font-size: 16px; 
      text-transform: uppercase; 
      color: #363636; 
      text-decoration: none;
    }

    </style>
    </head>
    <body>
      <style scoped>
        @media (max-width: 1419px) {
          .mobile-view{display: block  !important;}
          .desktop-view{display: none !important;}
          
        }
        @media (min-width: 1420px) {
          .mobile-view{display: none !important;}
          .desktop-view{display: flex !important;}
        }
      </style>
      <div class="desktop-view">
        <table srtyle="width: 100%;">
          <thead>
              <tr>
                ${selectedServicesData
                  .map(
                    (sd) => /*html*/ `
                    <td class="text title" style="padding: 0px 20px; font-family: sans-serif; font-style: normal; font-weight: bold; font-size: 30px; text-transform: uppercase; padding-top: 70px; color: #000000;">
                      ${sd.data.name}
                    </td>`
                  )
                  .join("")}
              </tr>
          </thead>
          <tbody>
            <tr>
            ${selectedServicesData
              .map(
                (sd) => /*html*/ `
                <th align="center" style="padding: 0px 20px;">
                  <img
                  class="img"
                  src="${sd.data.mailImage ? sd.data.mailImage : fallbackImage}"
                  width="468px" 
                  height="312.61px" 
                  style="height: 468px;
                  width: 312.61px;
                  max-width: 468px;
                  max-height: 312.61px;
                  min-width: 468px;
                  min-height: 312.61px;
                  object-fit: contain;"
                  alt="Imagem do serviço" 
                />
              </th>`
              )
              .join("")}
              
            </tr>
            <tr>
              ${selectedServicesData
                .map(
                  (sd) => /*html*/ `
                  <td class="text description" style="width: calc(100% / ${
                    selectedServicesData.length
                  }); vertical-align: top; padding: 0px 20px; font-family: sans-serif; font-style: normal; padding-top: 30px; font-weight: normal; font-size: 16px; line-height: 22px; color: #000000;"> 
                    ${
                      sd.data.mailDescription
                        ? sd.data.mailDescription
                        : serviceDescription(sd.id, sd.data.consultancyId)
                    }
                </td>`
                )
                .join("")}
            </tr>
            <tr align="center" class="row-button" style="height: 150px;">
              ${selectedServicesData
                .map(
                  (sd) => /*html*/ `
                  <td style="padding: 0px 20px;">
                    <a href="https://imageminteligente.com/" class="button-link" style="padding: 15px 50px; background-color: #c4c4c4; border-radius: 30px; font-family: sans-serif; font-size: 16px; text-transform: uppercase; color: #363636; text-decoration: none;">saber mais</a> 
                  </td>`
                )
                .join("")}
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mobile-view" style="display: none;">
      ${selectedServicesData
        .map(
          (sd) => /*html*/ `<table class="content" style="width: 100%;">
            <tr>
              <td class="text title" style="font-family: sans-serif;font-style: normal;font-weight: bold;font-size: 30px;line-height: 40px;text-transform: uppercase;padding-top: 1rem;padding-bottom: 0.5rem; color: #000000;">${
                sd.data.name
              }</td>
            </tr>
            <tr>
              <th align="center">
                <img
                  style="height: 468px;
                  width: 312.61px;
                  max-width: 468px;
                  max-height: 312.61px;
                  min-width: 468px;
                  min-height: 312.61px;
                  object-fit: contain;"
                  alt="Imagem do serviço"
                  src="${sd.data.mailImage ? sd.data.mailImage : fallbackImage}"
                />
              </th>
            </tr>
            <tr>
              <td class="text description" style="vertical-align: top; font-family: sans-serif; font-style: normal; padding-top: 30px;font-weight: normal;font-size: 16px;line-height: 22px; color: #000000;"> 
                ${
                  sd.data.mailDescription
                    ? sd.data.mailDescription
                    : serviceDescription(sd.id, sd.data.consultancyId)
                }
              </td>
            </tr>
            <tr align="center" class="row-button" style="height: 150px;">
              <td>
                <a href="https://imageminteligente.com/" class="button-link" style="padding: 15px 50px; background-color: #c4c4c4; border-radius: 30px; font-family: sans-serif; font-size: 16px; text-transform: uppercase; color: #363636; text-decoration: none;">saber mais</a> 
              </td>
            </tr>
        </table>`
        )
        .join("")}
      </div>
      <div class="footer" style="display: block; width: 100%; background-color: #4c4c4c; margin-top: 100px; padding-bottom: 50px;">
        <table>
          <tr>
            <td class="icon" style="class="icon" padding-right: 5px;"> 
              <a href="https://www.facebook.com/paulaprada.imageminteligente">
                <img
                src="https://i.imgur.com/7VPx7VY.png"
                width="73px" 
                height="70px" 
                />
              </a> 
            </td>
            <td class="icon" style="class="icon" padding-right: 5px;"> 
              <a href="https://www.instagram.com/paulaprada_imageminteligente/">
                <img
                src="https://i.imgur.com/y62DPOb.png"
                width="73px" 
                height="70px" 
                />
              </a> 
            </td>
            <td> 
              <a href="https://www.linkedin.com/in/paula-prada-pires/">
                <img
                src="https://i.imgur.com/akjd39c.png"
                width="73px" 
                height="70px" 
                />
              </a>
            </td>
          </tr>
        </table>  
        <table>
          <tr>
              <td class="footer-row" style="font-family: sans-serif; font-style: normal; font-size: 16px; color: #E5E5E5; padding: 10px 0px 10px 30px;">+351 937 834 952</td>
          </tr>
          <tr>
            <td class="footer-row" style="font-family: sans-serif; font-style: normal; font-size: 16px; color: #E5E5E5; padding: 10px 0px 10px 30px;">
              <a class="footer-email" href="mailto:paulaprada@imageminteligente.com" target="_blank" style="color: #E5E5E5;">paulaprada@imageminteligente.<wbr>com</a>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>`;

  return html;
};
