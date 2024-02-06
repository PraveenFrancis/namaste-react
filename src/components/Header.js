import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName]= useState("Login")
    return (
      <div className="header">
        <div className="logo">
          <img
            src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"
            alt="res-logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Res</li>
            <button onClick={ () => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
            }} className="login">{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header