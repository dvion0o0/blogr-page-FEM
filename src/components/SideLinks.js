import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
function SideLinks({ item }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <li onClick={handleClick}>
      {item.name} <IoMdArrowDropdown className={`${open ? "arrow" : null}`} />
      {open && (
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
}

export default SideLinks;
