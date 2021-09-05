import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
function Header() {
  return (
    // <!-- Header navigation -->
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          {/* <a className="navbar-brand mx-auto" href="#"> */}
          <Link to="/">
            <img className="logo-style" width="18px" src="" alt="CARFACT" />
          </Link>
          {/* </a> */}
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item style-size">
                <Link
                  to="/UsedCarsSale"
                  className="nav-link js-scroll-trigger"
                  href="#"
                >
                  Used Cars For Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll-trigger"
                  href="#"
                  data-rb-event-key="#"
                >
                  Car Rent
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">
                  Carfax Reports
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" href="#">
                  Used Car Values
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link js-scroll-trigger " href="#">
                  Log In <span className="logIn">|</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" href="/">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
