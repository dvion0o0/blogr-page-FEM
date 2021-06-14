import React from "react";
import Logo from "../images/logo.svg";
import LinksData from "./linkData";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <img src={Logo} alt="logo" />
        {LinksData.map((item, index) => {
          return (
            <ul className="footer-links" key={index}>
              <h4>{item.name}</h4>
              {item.content.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          );
        })}
      </div>
      <p>
        Coded By <span>Digvijay Ghosh </span>
      </p>
    </footer>
  );
}

export default Footer;
