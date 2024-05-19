import React from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header (){
    return(
        <div className="navbar">
            <h1 className="logo">CrytoTracker<span style={{color: "var(--blue)"}}>.</span></h1>
            <div className="links">
                <Link to="/">
                <p className="link">Home</p>
                </Link>
                
                <Link to="/dashboard">
                <Button text="Dashboard" variant="filled" />
                </Link>
                
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header