import { IonContent, IonPage } from "@ionic/react";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "../../components/Loader/index";
import OtherPagesFloatingMenu from "../../components/OtherPagesFloatingMenu";
import PriceTable from "../../components/PriceTable/index";
import { prices } from "../../data/data";
import { getPricesData } from "../../hooks/getPricesData";
import "./Prices.css";

const Prices = () => {
  const [pricesData, setPricesData] = useState(prices);
  const [loading, setLoading] = useState(true);
  const getPrices = useCallback(
    () =>
      getPricesData()
        .then((res) => {
          if (res) {
            setPricesData(res);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        })
        .finally(() => setLoading(false)),
    []
  );

  useEffect(() => {
    getPrices();
  }, [getPrices]);

  return (
    <IonPage style={{ overflow: "hidden", position: "fixed" }}>
      {loading ? (
        <Loader />
      ) : (
        <IonContent id="price-page" forceOverscroll={false} scrollY={false}>
          <>
            <div id="center">
              <PriceTable data={pricesData} />
            </div>
            <OtherPagesFloatingMenu />
          </>
        </IonContent>
      )}
    </IonPage>
  );
};

export default React.memo(Prices);
