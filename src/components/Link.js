import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
function Link({ item }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <li onClick={handleClick}>
        {item.name} <IoMdArrowDropdown className={`${open ? "arrow" : null}`} />
        {open ? (
          <div className="nav-menu">
            {item.content.map((item) => {
              return (
                <a href="/" key={item.id}>
                  {item}
                </a>
              );
            })}
          </div>
        ) : null}
      </li>
    </>
  );
}

export default Link;
