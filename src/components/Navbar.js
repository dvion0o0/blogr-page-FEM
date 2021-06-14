import React from "react";
import Logo from "../images/logo.svg";
import HamBurger from "../images/icon-hamburger.svg";
import LinksData from "./linkData";
import Link from "./Link";

function Navbar({ handleToggle }) {
  return (
    <nav>
      <div className="nav-center">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <ul className="nav-links">
            {LinksData.map((item, index) => {
              return <Link key={index} item={item} />;
            })}
          </ul>
        </div>
        <img
          src={HamBurger}
          alt="toggle"
          className="toggle"
          onClick={handleToggle}
        />
        <div className="nav-btns">
          <button className="nav-btn">Login</button>
          <button className="nav-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
