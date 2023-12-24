import React from "react";
import "./styles.css";
import Button from "../../Common/Button";

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
          <Button text={"Dashboard"} />
          <Button text={"Share"} />
        </div>
      </div>
      <div>Phone</div>
    </div>
  );
}

export default MainComponents;
