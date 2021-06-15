import React, { useState } from "react";
import Logo from "../images/logo.svg";
import HamBurger from "../images/icon-hamburger.svg";
import LinksData from "./linkData";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar({ handleToggle }) {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    if (index === clicked) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <ul className="nav-links">
            {LinksData.map((item, index) => {
              return (
                <li onClick={() => handleClick(index)}>
                  {item.name}{" "}
                  <IoMdArrowDropdown
                    className={`${clicked === index ? "arrow" : null}`}
                  />
                  {clicked === index && (
                    <div className="nav-menu">
                      {item.content.map((item) => {
                        return (
                          <a href="/" key={item.id}>
                            {item}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
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
