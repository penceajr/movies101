import React from "react";

import facebook from "../HomePage Components/facebook.png";
import instagram from "../HomePage Components/instagram.png";
import twitter from "../HomePage Components/twitter.png";
import gmail from "../HomePage Components/gmail.png";
import whatsapp from "../HomePage Components/whatsapp.png";
import pinterest from "../HomePage Components/pinterest.png";
import "./Footer.css";

export function Footer() {
    return (
        <div className="footer">
            <div className="left-footer">
                <address>
                    E-mail us @   info@movie101.com<br></br>
                    +40 (0740) 547 892 <br></br>
                    <br></br>
                    Movie101 - Str. Bucuresti, nr. 105<br></br>
                    Cluj-Napoca, Romania<br></br>
                </address>
            </div>
            <div className="right-footer">
            <img src={facebook} alt="f-chat" className="facebook-contact" />
            <img src={instagram} alt="i-chat" className="instagram-contact" />
            <img src={twitter} alt="t-chat" className="twitter-contact" />
            <img src={gmail} alt="g-mail" className="gmail-contact" />
            <img src={whatsapp} alt="w-chat" className="whatsapp-contact" />
            <img src={pinterest} alt="p-info" className="pinterest-contact" />
            </div>
        </div>
    )
}