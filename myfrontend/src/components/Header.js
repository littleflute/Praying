import React from "react";
import "./componentscss.css";

function Header(){

    return(
      <div className="navContent">
      <nav className="navbar">
        <a href="/">Home</a>
        <div className="dropdown">
          <button className="dropbtn">Actions</button>
          <div className="dropdown-content">
            <a href="familyExpenses">Family Expenses</a>
            <a href="productExpenses">Product Expenses</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Statements</button>
          <div className="dropdown-content">
            <a href="familyStatements">Family Statements</a>
            <a href="bankStatements">Bank Statements</a>
            <li className="divider"></li>
            <a href="products">Products</a>
          </div>
        </div>
      </nav>

      </div>

    );
}

export default Header;
