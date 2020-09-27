import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import React from "react";
import axios from "axios";
import { API_KEY } from "../../secrets";

const PredefinedEmails: React.FC = () => {
  const sendEmail = () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;
    axios.defaults.headers.post["Content-Type"] = "application/json";

    axios({
      method: "post",
      url: "https://api.sendgrid.com/v3/mail/send",
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
          email: "edetailingtest1@gmail.com",
        },
        reply_to: {
          email: "edetailingtest2@gmail.com",
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
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Predefined Emails</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={sendEmail}>SEND MAIL</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PredefinedEmails;
