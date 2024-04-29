import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer-container">

            <a
                // Here give our LinkedIn link
                href="https://www.linkedin.com/in/chandrashekhar-pawar-6600121ab/"
                target="_blank"
                className="footer-link"
                rel="noreferrer"                
            >
            This is footer, which is open our linkedin
            </a>

        </div>
    );
};

export default Footer;