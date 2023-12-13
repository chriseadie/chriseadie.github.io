import React from "react";
import "./footer.styles.css"

export function Footer(){
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <p>Chris Eadie ©{year}</p> 
        </div>
    )
}