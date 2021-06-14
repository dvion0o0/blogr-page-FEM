import React from "react";
import LinksData from "./linkData";
import SideLinks from "./SideLinks";
function Sidebar({ toggle }) {
  return (
    <aside className={`${toggle ? "show" : null}`}>
      <ul className="side-links">
        {LinksData.map((item, index) => {
          return <SideLinks item={item} key={index} />;
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
