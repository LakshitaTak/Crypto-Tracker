import React from "react";
import "./styles.css"

/*
-remove top bottom padding
-remove height from body
-convert dashboard into button
-make toggle switch
-fix font size of logo
*/
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
                <button className="link">Dashboard</button>
                </a>
                
            </div>
        </div>
    )
}

export default Header