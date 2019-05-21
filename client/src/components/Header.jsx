import React from "react";
import { FaGoogle } from 'react-icons/fa';

function Header() {
  return (
    <div className="section" id="landing">
          <h3 className="center"><FaGoogle /> <b>BOOKS</b></h3>
          <h5 className="center">Search and Save All Your Favorite Books!</h5>
    </div>
  );
}

export default Header;