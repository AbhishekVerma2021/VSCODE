import React from "react";
import "./index.css";
function navbar()
{
    return(<>
        <nav >
        <ul className="navbar">
          <li className="List">Home</li>
          <li className="List">About</li>
          <li className="List">Services</li>
          <li className="List">Contact</li>
        </ul>
      </nav>
      <br/>
    </>);
}
export default navbar;