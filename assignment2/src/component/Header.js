import React from "react";
import { CgNotes } from "react-icons/cg";

function Header() {
  function togglemode() {
    document.getElementsByTagName("body")[0].classList.toggle("darkmode");
  }

  return (
    <div className="header">
      <div className="flex">
        <CgNotes size="2rem" />
        <h1 style={{ fontSize: "2rem" }}>React Notes</h1>
      </div>
      <label className="switch">
        <input type="checkbox" />
        <span onClick={togglemode} className="slider"></span>
      </label>
    </div>
  );
}

export default Header;
