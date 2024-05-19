import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";

function MainComponents() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <h1 className="track-cypto-heading">Track Crypto</h1>
        <h1 className="real-time-heading">Real Time.</h1>
        <p className="info-text">
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="btn-flex">
          <Link to="/dashboard">
            <Button text="Dashboard" variant="filled" />
          </Link>
          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share" outlined={true} />
          </RWebShare>
        </div>
      </div>
    </div>
  );
}

export default MainComponents;
