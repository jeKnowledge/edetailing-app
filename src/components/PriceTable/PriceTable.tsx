import React from "react";
import { prices } from "../../data/data";
import "./PriceTable.css";

const PriceTable = () => {
  return (
    <div id="price-table">
      <div id="titles">
        <span>Serviço</span>
        <span>Preço</span>
      </div>
      {Object.keys(prices).map((key, i) => (
        <div
          key={key}
          className="service-prices-row"
          style={{
            backgroundColor: i % 2 ? "inherit" : "#7B7B7B",
            color: i % 2 ? "#0F0F0F" : "#CACACA",
          }}
        >
          <span>{key}</span>
          <div className="prices-column">
            {prices[key].prices.map((p) => (
              <span key={key + "-" + p}>{p}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(PriceTable);
