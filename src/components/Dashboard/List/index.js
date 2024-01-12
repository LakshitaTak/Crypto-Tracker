import React from "react";
import "./style.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const List = ({ coin }) => {
  const negativeCoin = coin.price_change_percentage_24h > 0 ? false : true;

  return (
    <tr
      className={`list-row ${
        negativeCoin === true ? "card-red" : "card-green"
      }`}
    >
      <td className="image-td">
        <img src={coin.image} alt="img" className="coin-list-logo" />
      </td>
        <td className="name-col list-name-col">
          <p className="coin-symbol">{coin.symbol}-USD</p>
          <p className="coin-name coin-name-col">{coin.name}</p>
        </td>
        <td className="chip-flex">
          <div
            className={`coin-chip ${negativeCoin === true ? "red" : "green"}`}
          >
            {coin.price_change_percentage_24h.toFixed(2)} %
          </div>
          <div
            className={`coin-chip-icon ${
              negativeCoin === true ? "red" : "green"
            } td-coin-chip-icon`}
          >
            {negativeCoin === true ? (
              <TrendingDownRoundedIcon />
            ) : (
              <TrendingUpRoundedIcon />
            )}
          </div>
        </td>
        <td
          className={`list-price ${
            negativeCoin === true ? "price-red" : "price-green"
          }`}>
          ${coin.current_price.toLocaleString()}
        </td>
        <td className="list-tot-vol td-list-tot-vol">
          ${coin.total_volume.toLocaleString()}
        </td>
        <td className="list-market-cap">
          ${coin.market_cap.toLocaleString()}
        </td>
    </tr>
  );
};

export default List;
