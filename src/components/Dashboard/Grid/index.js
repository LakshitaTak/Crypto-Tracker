import React from "react";
import "./style.css";
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

function Grid({ coin }) {
  const negativeCoin = coin.price_change_percentage_24h > 0 ? false : true;

  return (
    <div className={`grid-container ${negativeCoin===true?"card-red":"card-green"}`}>
      <div className="info-flex">
        <img src={coin.image} alt="img" className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}-USD</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      <div className="data-div">
        <div className="chip-flex">
          <div className={`coin-chip ${negativeCoin===true?"red":"green"}`}>
            {coin.price_change_percentage_24h.toFixed(2)} %
          </div>
          <div className={`coin-chip-icon ${negativeCoin===true?"red":"green"}`}>
            {negativeCoin===true?<TrendingDownRoundedIcon/>:<TrendingUpRoundedIcon/>}
          </div> 
        </div>
        <h3 className={`price ${negativeCoin===true?"price-red":"price-green"}`}>
            ${coin.current_price.toLocaleString()}
        </h3>
        <p className="tot-vol">
            Total Volume : ${coin.total_volume.toLocaleString()}
        </p>
        <p className="market-cap">
            Market Cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Grid;
