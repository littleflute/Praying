import React from "react";
import "./componentscss.css";

function Header(){

    return(
      <div className="navContent">
      <nav className="navbar">
        <a href="/">About</a>
        <div className="dropdown">
          <button className="dropbtn">Actions</button>
          <div className="dropdown-content">
            <a href="postprayer">Post a prayer</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Statements</button>
          <div className="dropdown-content">
            <a href="getprayers">Prayers</a>
            <li className="divider"></li>
            <a href="ccccmembers">Members</a>
          </div>
        </div>
      </nav>

      </div>

    );
}

export default Header;
