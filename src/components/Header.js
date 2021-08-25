import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
function Header() {
  return (
    <div className="main__header">
      <div className=" header__wrapper">
        <div className="cgh__logo">
          <img src="/" alt="CARFACT" />
        </div>
        <div className="links">
          <nav id="cgh-links">
            <ul className="cgh-links-list">
              <li className="cgh-link">
                <a href="">Used Cars For Sale</a>
              </li>
              <li className="cgh-link">
                <a href=""> Car Rent</a>
              </li>
              <li className="cgh-link">
                <a href=""> Carfax Reports</a>
              </li>
              <li className="cgh-link">
                <a href=""> Used Car Values</a>
              </li>
              <li className="cgh-link">
                <a href=""> About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <a className="space" href="">
            Log In
          </a>
          <span className="cgh-verticalBar"></span>
          <a href=""> Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
