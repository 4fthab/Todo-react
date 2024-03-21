import React from "react";
// import "../assets/to-do-list.png";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="brand">
          <h1>Todo</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3208/3208615.png"
            alt=""
          />
        </div>
        <div className="links">
          <h2> user</h2>
        </div>
      </div>
    </>
  );
}

export default Navbar;
