import React from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";

function Header (){
    return(
        <div className="navbar">
            <h1 className="logo">CrytoTracker<span style={{color: "var(--blue)"}}>.</span></h1>
            <div className="links">
                <a href="/">
                <p className="link">Home</p>
                </a>
                
                <a href="/">
                <p className="link">Compare</p>
                </a>
                
                <a href="/">
                <p className="link">Watchlist</p>
                </a>
                <a href="/">
                <Button text={"Dashboard"}/>
                </a>
                
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header