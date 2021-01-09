import React from "react";
import { prices } from "../../data/data";
import "./PriceTable.css";

interface PriceTableProps {
  data: Record<
    string,
    {
      prices: {
        price: string;
        description: string;
      }[];
    }
  >;
}
const PriceTable = ({ data }: PriceTableProps) => {
  return (
    <div id="price-table">
      <div id="titles">
        <span>Serviço</span>
        <span>Preço</span>
      </div>
      <div id="prices-rows">
        {Object.keys(data).map((service, i) => (
          <div
            key={service}
            className="service-prices-row"
            style={{
              backgroundColor: i % 2 ? "inherit" : "#7B7B7B",
              color: i % 2 ? "#0F0F0F" : "#CACACA",
            }}
          >
            <span>{service}</span>
            <div className="prices-column">
              {prices[service].prices.map((p) => (
                <span key={service + "-" + p.price + "-" + p.description}>{`${
                  p.price
                } ${p.description ? "(" + p.description + ")" : ""}`}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(PriceTable);
