import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import OtherPagesFloatingMenu from "../../components/OtherPagesFloatingMenu";
import PriceTable from "../../components/PriceTable/index";
import "./Prices.css";

const Prices = () => {
  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      <IonContent id="price-page" forceOverscroll={false} scrollY={false}>
        <>
          <div id="center">
            <PriceTable />
          </div>
          <OtherPagesFloatingMenu />
        </>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Prices);
