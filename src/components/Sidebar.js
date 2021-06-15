import React, { useState } from "react";
import LinksData from "./linkData";
import { IoMdArrowDropdown } from "react-icons/io";

function Sidebar({ toggle }) {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <aside className={`${toggle ? "show" : null}`}>
      <ul className="side-links">
        {LinksData.map((item, index) => {
          return (
            <li onClick={() => handleClick(index)}>
              {item.name}{" "}
              <IoMdArrowDropdown
                className={`${clicked === index ? "arrow" : null}`}
              />
              {clicked === index && (
                <div className="side-menu">
                  {item.content.map((item, index) => {
                    return (
                      <a href="/" key={index}>
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
      <hr />
      <div className="side-btns">
        <div className="side-btn">Login</div>
        <div className="side-btn">Sign Up</div>
      </div>
    </aside>
  );
}

export default Sidebar;
