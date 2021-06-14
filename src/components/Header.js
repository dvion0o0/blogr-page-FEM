import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="header-center">
        <Navbar handleToggle={handleToggle} />
        <Sidebar toggle={toggle} />
        <div className="hero-content">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="hero-btns">
            <button className="hero-btn">Start for Free</button>
            <button className="hero-btn">Learn More</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
